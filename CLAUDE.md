# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the Project

Two parallel HTML apps that load a shared `protocols.js` — no build step, no dependencies. **Must be served over HTTP** (file:// fails because browsers block `<script src>` cross-origin under file URLs).

```bash
# Serve locally
python3 -m http.server 3000
# Then open one of:
#   http://localhost:3000/hem-onc-calculator.html  (desktop)
#   http://localhost:3000/hem-onc-mobile.html      (mobile)
```

## Architecture

Two HTML apps that load the same `protocols.js` for the protocol catalogue:
- **`hem-onc-calculator.html`** — desktop layout
- **`hem-onc-mobile.html`** — mobile layout: bottom nav, long-press dose reduction, bottom-sheet UI
- **`protocols.js`** — single source of truth for the ~437-entry `PROTOCOLS` array; loaded via `<script src="protocols.js">` before each file's inline script

Each HTML file is otherwise self-contained (CSS, HTML, app JavaScript all inline). The split means edits to protocol data happen in one place; edits to UI/layout/calculation logic stay scoped to the HTML file for the affected platform.

### Navigating
- `protocols.js` — top of the `PROTOCOLS` array (search `key: "..."` to jump to a specific protocol)
- Within each HTML, use `grep` for these landmarks (line numbers drift fast):
- `const S = {` — global state object
- `function calcCG`, `calcCKDEPI`, `calcMDRD` — CrCl/GFR
- `function bsa_mosteller` (etc.) — BSA formulas
- `function calcDrug` — dose calc dispatch on `basis`
- `function renderProtocol` / `renderSummary` / `renderBSA` / `renderCrClBox` / `renderAUCGrid` — rendering
- `function filterProtocols`, `initProtoSearch` — category filter + free-text typeahead search

### State Flow
Patient inputs → `oninput="update()"` → `readPatient()` populates `S` → `renderAll()` calls all five render functions → each writes `innerHTML` to its container div.

Protocol selection does **not** reset patient state. `S.drugRdx` stores per-drug reduction overrides keyed by `{protoKey: {drugIndex: pct}}`.

### Protocol Data Structure
Each protocol in the `PROTOCOLS` array:
```js
{
  key: "unique-key",        // used as identifier in S.protoKey
  cat: "Lymphoma",          // category for dropdown filter
  bcc: true,                // BC Cancer protocol badge
  name: "Display name",
  cycle: 21,                // cycle length in days; null = induction
  notes: "Clinical notes",
  drugs: [
    {
      name: "Drug Name",
      dose: 375,
      unit: "mg/m²",        // display unit; /m² stripped for calculated dose
      basis: "bsa",         // "bsa" | "flat" | "weight" | "auc"
      max: null,            // absolute dose cap (e.g. vincristine 2mg)
      weightCap: null,      // weight cap for mg/kg drugs
      route: "IV",
      days: "Day 1",
      reducible: true,      // whether dose reduction buttons apply
      nocap: true,          // flag to show NO CAP tag (overrides default vincristine cap)
      note: "Clinical note shown in table",
      levels: [300, 250]    // optional: protocol-defined dose levels (-1, -2, ...) in same unit as dose
    }
  ],
  labs: {
    baseline: ["CBC & Diff", "creatinine", ...],
    cycle: ["CBC & Diff", ...],
    conditional: [
      { label: "Before Day 8", tests: ["CBC & Diff"] }
    ]
  }
}
```

#### `levels` field (dose reduction levels)
When present, `levels` replaces the generic 75%/50%/25% buttons with protocol-specific "−1: 300" / "−2: 250" buttons. The `…%` custom button is always available as a fallback.

- Values are in the **same unit as `dose`** (e.g. mg/m² for BSA drugs, mg for flat drugs, mg/kg for weight-based)
- The UI converts to a percentage internally: `levels[i] / dose * 100` — mathematically correct for all basis types
- Drugs without `levels` fall back to the standard 100/75/50/25% buttons
- Color thresholds: ≥70% → amber, ≥40% → orange, <40% → red (threshold-based, not exact-match)

`basis` values:
- `"bsa"` — dose × BSA (m²); respects `max` cap
- `"flat"` — fixed dose regardless of patient size
- `"weight"` — dose × weight (kg); respects `max` and optional `weightCap`
- `"auc"` — Calvert formula: `dose × (CappedCrCl + 25)`; CrCl capped at 125 mL/min

### Key Calculations
- **BSA**: Mosteller (default), DuBois & DuBois, Haycock, Boyd — all in `bsa_*()` functions
- **CrCl**: Cockcroft-Gault (default), CKD-EPI 2021 (race-free), MDRD, or manual entry — `calcCG()`, `calcCKDEPI()`, `calcMDRD()`
- **Carboplatin**: Calvert formula via `getCappedCrCl()` → CrCl hard-capped at 125 mL/min
- **SCr units**: stored as entered; `getSCrMgdl()` converts µmol/L → mg/dL (÷88.4) for all calculations. Toggling unit converts the input field value.

### CSS Design System
Anthropic-inspired color scheme via CSS variables:
- `--accent: #C96442` (coral) — primary interactive color
- `--bg: #FAF8F4` / `--bg2: #EEE8DF` — warm cream backgrounds
- `--acL: #FBF0EC` — light accent for selected states
- Reduction color coding: green (100%) → amber (≥70%) → orange (≥40%) → red (<40%)

## Protocol Categories
Current categories in the category dropdown (match exactly with `cat` strings in protocol entries):
`Lymphoma` | `CLL` | `Myeloid` | `Multiple Myeloma` | `Breast` | `Lung` | `GI` | `GU` | `Gyne`

BC Cancer protocols (Mar 2025) are tagged `bcc: true` and show the BC Cancer badge. Total protocol count: 437. For exact per-category counts, grep `protocols.js` (e.g. `grep -c 'cat: "Lymphoma"' protocols.js`).

Populated categories include Lymphoma (LY series), CLL, Myeloid, Multiple Myeloma, GU, Lung, Gyne. GI and Breast are present as dropdown categories but have few or no protocols yet — confirm by grep before claiming a count.

## Protocol Source Files
BC Cancer protocol PDFs are at:
`/Users/david/Documents/BC Cancer Protocols Mar 2025/`

Individual protocol PDFs (used for extraction) are organized by tumour site inside the app folder:
`./Chemo protocols/LU protocols/` — Lung (LUXXX_Protocol.pdf)
`./Chemo protocols/BR protocols/` — Breast (BRXXX_Protocol.pdf) *(next)*
`./Chemo protocols/GI protocols/` — GI
`./Chemo protocols/GO protocols/` — Gyne (GOXXX_Protocol.pdf / UGOXXX_Protocol.pdf)
`./Chemo protocols/GU protocols/` — GU
`./Chemo protocols/LY Protocols/` — Lymphoma
`./Chemo protocols/LK protocols/` — Leukemia
`./Chemo protocols/MY protocols/` — Myeloid

GU protocols extracted text (pdfplumber output, all 239 pages) is cached at:
`/Users/david/Desktop/GU_protocols_extracted.txt`

## BC Cancer Protocol Naming Conventions
BC Cancer protocol codes follow a site prefix pattern, but some protocols have a `U` prefix indicating a different variant (e.g., unconventional dosing, urothelial sub-site, etc.):

| Site | Primary prefix | U-prefix variant |
|------|---------------|-----------------|
| Lung | `LU` (e.g. `LUAVPC`) | `ULU` (e.g. `ULUAJATZ`) |
| GI | `GI` (e.g. `GIAVFOLFOX`) | `UGI` |
| Breast | `BR` (e.g. `BRAJAC`) | `UBR` |
| Gyne | `GY` (e.g. `GYAVCARBO`) | `UGY` |
| GU | `GU` (e.g. `GUAVGC`) | `UGU` |

**Important:** When listing PDFs in a folder, always look for both `XXXYYY_Protocol.pdf` and `UXXXYYY_Protocol.pdf` patterns — `U`-prefix files are real protocols and must not be skipped.

The protocol `key` in the JS should reflect the actual BC Cancer code (e.g., `"LU-LUAVPC"`, `"LU-ULUAJATZ"`), and the `name` field should lead with the code for easy scanning in the dropdown (e.g., `"LUAVPC - CARBOplatin + PACLitaxel [NSCLC]"`).

## Pending / Known Issues
- **Breast protocols**: 57 entries (BR + UBR series complete as of PR 7).
- **GI protocols**: 97 entries populated in `protocols.js`. Key-naming normalized to `GI-GIxxx` (`SITE-FULLCODE`) convention as of PR 12. Source PDFs at `./Chemo protocols/GI - 2/source-pdfs/` (97 files).
  - Note: pre-existing GI entries still use compact single-line format (`key:"GI-GIxxx", cat:"GI", bcc:true,`) rather than the multi-line standard format used by newer Breast/GU/Lung entries. The `name:` field on these entries also doesn't yet lead with the BC code (e.g. `name:"FOLFOX (Colorectal)"` rather than `name:"GIFOLFOX - FOLFOX [Colorectal]"`). These are cosmetic-only differences; both formats are valid JS and pass the validator.
- **GU `levels` data**: substantially backfilled — all oral targeted agents (TKIs, AR-axis) and the gem/cis + small-cell chemo backbones now carry protocol-specific tiers. Still no levels by design for curative germ-cell regimens (GUBEP/GUEP/GUVEIP — protocol forbids reduction), AUC-only carboplatin (GUSCARB — delay only), MVAC variants (renal-trigger schemes don't map cleanly to discrete levels), and axitinib (continuous 2–10 mg BID range, not numbered tiers).

> ⚠️ **Lesson learned (PRs 7–8):** Before extracting a new tumour-site category, ALWAYS check both `cat: "X"` AND `cat:"X"` (with and without space) — pre-existing entries from earlier sessions may use compact format that a strict-spaced grep misses. Use `grep -cE 'cat\s*:\s*"X"'` to catch both formats. The GI category was already fully populated in compact format when PR 7 began; my work silently duplicated 28 entries by key collision and another 27 semantically (under different key spellings) before the in-browser validator flagged it.

## Adding a New Protocol
Add a new object to the `PROTOCOLS` array in `protocols.js` (before `]; // end PROTOCOLS`). Set `cat` to one of the existing category strings. Set `bcc: true` if sourced from BC Cancer. No other registration needed — both apps load `protocols.js` and `filterProtocols()` dynamically builds the dropdown from the array.

The load-time validator in each HTML file (search `function validateProtocols`) will surface broken entries on next page load: missing required fields, dup keys, bad `basis`, unit/basis mismatch, cycled regimens with no labs, or malformed `labs.conditional`. Failures show a red dismissible banner and log to `console.error`. `dose:null` is allowed for variable doses; `meta:true` on a drug row skips drug-shape checks (used for cross-reference rows like "See LYCHOPR protocol").

⚠️ **Critical:** Every protocol entry in `protocols.js` must be followed by a comma (`,`) **except** the very last one before `]; // end PROTOCOLS`. When inserting a new block just before the closing `]`, ensure the last existing protocol entry has a trailing comma added. A missing comma causes a silent JS parse error in `protocols.js` that breaks **both** apps (no BSA, no tab switching, no validator banner — the inline script never reaches the validator call because PROTOCOLS never gets defined).

## Bulk Protocol Extraction Workflow

**No Anthropic API key required.** Claude Code can read PDFs natively (multimodal) and extract protocol data directly — no external API call needed.

### Preferred approach (used for LU series, Mar 2025)

1. **List all PDFs** in the target folder:
   ```bash
   ls /Users/david/Desktop/Claude\ Code/Chemo\ protocols/LU\ protocols/
   ```
   Include both `LUXXX` and `ULUXXX` prefixes (see naming conventions above).

2. **Extract text** from each PDF using pdfplumber in a Python script:
   ```python
   import pdfplumber
   text = ""
   with pdfplumber.open("LUXXX_Protocol.pdf") as pdf:
       for page in pdf.pages:
           text += page.extract_text() or ""
   ```

3. **Parse protocol JSON** — paste the extracted text to Claude Code and ask it to produce structured JSON matching the schema below. Claude reads the text directly; no API key needed.

4. **Validate** that every protocol has a `labs` field. Individual PDFs (not combined) are preferred because:
   - Combined PDFs cause chunking problems — text splits mid-protocol
   - The TESTS section (source of `labs`) is near the start and often gets dropped in combined extracts
   - Individual PDFs always contain the complete protocol text

5. **Insert JS entries** into `protocols.js`, just before `]; // end PROTOCOLS`, wrapped in a `// SITE PROTOCOLS` comment block. Ensure the preceding protocol entry has a trailing comma.

### JSON schema for extraction
```json
{
  "key": "LU-LUAVPC",
  "cat": "Lung",
  "bcc": true,
  "name": "LUAVPC - CARBOplatin + PACLitaxel [NSCLC]",
  "cycle": 21,
  "notes": "Clinical notes string",
  "drugs": [
    {
      "name": "Drug Name",
      "dose": 175,
      "unit": "mg/m²",
      "basis": "bsa",
      "max": null,
      "weightCap": null,
      "route": "IV",
      "days": "Day 1",
      "reducible": true,
      "note": "drug-level note or null",
      "levels": [140, 105]
    }
  ],
  "labs": {
    "baseline": ["CBC & Diff", "creatinine", "..."],
    "cycle": ["CBC & Diff"],
    "conditional": [
      { "label": "Before Day 8", "tests": ["CBC & Diff"] }
    ]
  }
}
```

`basis` rules: `bsa` = per m², `weight` = per kg, `flat` = fixed dose, `auc` = Calvert carboplatin.
`levels`: extract from DOSE MODIFICATIONS table (Level −1, Level −2 columns); same unit as `dose`; omit field if not specified.

### Old API-based workflow (requires Anthropic API key)
<details>
<summary>Click to expand — only needed if running extraction outside Claude Code</summary>

```python
# extract_protocols.py
import pdfplumber, anthropic, json, sys

SCHEMA_PROMPT = """
Extract all chemotherapy protocols from this BC Cancer protocol document.
For each protocol output a JSON object: { ... }
Return a JSON array. No prose, just JSON.
DOCUMENT TEXT:
"""

def extract_protocols(pdf_path, output_path):
    text = ""
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            text += page.extract_text() or ""
    client = anthropic.Anthropic()
    msg = client.messages.create(
        model="claude-opus-4-6", max_tokens=8096,
        messages=[{"role":"user","content": SCHEMA_PROMPT + text[:50000]}]
    )
    raw = msg.content[0].text
    if raw.startswith("```"):
        raw = raw.split("```")[1]
        if raw.startswith("json"): raw = raw[4:]
    protocols = json.loads(raw.strip())
    with open(output_path,"w") as f:
        json.dump(protocols, f, indent=2)
    print(f"Saved {len(protocols)} protocols to {output_path}")

if __name__ == "__main__":
    extract_protocols(sys.argv[1], sys.argv[2])
```
</details>
