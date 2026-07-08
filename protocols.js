// Shared PROTOCOLS array — single source of truth, loaded by both
// hem-onc-mobile.html and hem-onc-calculator.html before their inline scripts.
// See CLAUDE.md for protocol schema and the load-time validator's rules.

const PROTOCOLS = [

  // =========================================================
  // LYMPHOMA
  // =========================================================

  {
    key:"R-CHOP", cat:"Lymphoma", bcc:true,
    name:"R-CHOP [Aggressive B-cell NHL]",
    cycle:21,
    notes:"Standard first-line for DLBCL and CD20+ aggressive B-cell NHL. 3 cycles (limited stage+RT) or 6 cycles (advanced). Rituximab 375 mg/m² IV Cycle 1; 1400 mg SC from Cycle 2. vinCRIStine: NO dose cap per BC Cancer protocol. BC Cancer LYCHOPR.",
    drugs:[
      { name:"Rituximab",        dose:375,  unit:"mg/m²",     basis:"bsa",  max:null, route:"IV (Cycle 1); 1400mg SC (Cycle 2+)", days:"Day 1", reducible:false, note:"1400 mg SC fixed dose from Cycle 2 onwards" },
      { name:"Cyclophosphamide", dose:750,  unit:"mg/m²",     basis:"bsa",  max:null, route:"IV over 20 min–1h",  days:"Day 1", reducible:true  },
      { name:"DOXOrubicin",      dose:50,   unit:"mg/m²",     basis:"bsa",  max:null, route:"IV push",            days:"Day 1", reducible:true,  note:"Cumulative lifetime limit ~450–550 mg/m²" },
      { name:"vinCRIStine",      dose:1.4,  unit:"mg/m²",     basis:"bsa",  max:null, route:"IV over 15 min",    days:"Day 1", reducible:true,  nocap:true, note:"NO dose cap (BC Cancer protocol)" },
      { name:"predniSONE",       dose:45,   unit:"mg/m²/day", basis:"bsa",  max:null, route:"PO morning with food", days:"Days 1–5", reducible:false, note:"Round to nearest 25 mg" }
    ],
    labs:{
      baseline:["HBsAg","HBsAb","HBcoreAb"],
      cycle:["CBC & Diff","creatinine","ALT","total bilirubin"],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["alkaline phosphatase","sodium","potassium","magnesium","calcium"] },
        { label:"If clinically indicated", tests:["alkaline phosphatase","sodium","potassium","magnesium","calcium","LDH","HBV viral load"] }
      ]
    }
  },
  {
    key:"CHOP", cat:"Lymphoma", bcc:true,
    name:"CHOP [Aggressive B-cell NHL, CD20-negative]",
    cycle:21,
    notes:"CHOP without rituximab. For CD20-negative lymphomas or rituximab contraindication. vinCRIStine: NO dose cap per BC Cancer protocol. BC Cancer LYCHOP.",
    drugs:[
      { name:"Cyclophosphamide", dose:750,  unit:"mg/m²",     basis:"bsa",  max:null, route:"IV over 20 min–1h",   days:"Day 1", reducible:true  },
      { name:"DOXOrubicin",      dose:50,   unit:"mg/m²",     basis:"bsa",  max:null, route:"IV push",             days:"Day 1", reducible:true,  note:"Cumulative lifetime limit ~450–550 mg/m²" },
      { name:"vinCRIStine",      dose:1.4,  unit:"mg/m²",     basis:"bsa",  max:null, route:"IV over 15 min",     days:"Day 1", reducible:true,  nocap:true, note:"NO dose cap (BC Cancer protocol)" },
      { name:"predniSONE",       dose:45,   unit:"mg/m²/day", basis:"bsa",  max:null, route:"PO morning with food", days:"Days 1–5", reducible:false, note:"Round to nearest 25 mg" }
    ],
    labs:{
      baseline:["LDH","total bilirubin","ALT","HBsAg","HBsAb","HBcoreAb"],
      cycle:["CBC & Diff"],
      conditional:[
        { label:"Before each cycle if total bilirubin elevated at baseline", tests:["total bilirubin"] },
        { label:"If clinically indicated", tests:["ALT","HBV viral load"] }
      ]
    }
  },
  {
    key:"R-CVP", cat:"Lymphoma", bcc:true,
    name:"R-CVP [Indolent B-cell NHL]",
    cycle:21,
    notes:"Advanced indolent lymphoma (follicular, MZL, SLL). Up to 8 cycles. Rituximab 375 mg/m² IV Cycle 1; 1400 mg SC from Cycle 2. vinCRIStine: NO dose cap per BC Cancer protocol. BC Cancer LYCVPR.",
    drugs:[
      { name:"Rituximab",        dose:375,  unit:"mg/m²", basis:"bsa",  max:null, route:"IV (Cycle 1); 1400mg SC (Cycle 2+)", days:"Day 1", reducible:false, note:"1400 mg SC from Cycle 2" },
      { name:"vinCRIStine",      dose:1.4,  unit:"mg/m²", basis:"bsa",  max:null, route:"IV over 15 min",  days:"Day 1", reducible:true,  nocap:true, note:"NO dose cap (BC Cancer protocol)" },
      { name:"Cyclophosphamide", dose:1000, unit:"mg/m²", basis:"bsa",  max:null, route:"IV over 20 min–1h", days:"Day 1", reducible:true  },
      { name:"predniSONE",       dose:100,  unit:"mg",    basis:"flat", max:null, route:"PO morning",       days:"Days 1–5", reducible:false }
    ],
    labs:{
      baseline:["total bilirubin","ALT","LDH","HBsAg","HBsAb","HBcoreAb"],
      cycle:["CBC & Diff"],
      conditional:[
        { label:"If clinically indicated", tests:["ALT","HBV viral load"] }
      ]
    }
  },
  {
    key:"CVP", cat:"Lymphoma", bcc:true,
    name:"CVP [Indolent B-cell NHL]",
    cycle:21,
    notes:"For indolent lymphoma without rituximab. Up to 8 cycles. vinCRIStine: NO dose cap per BC Cancer protocol. BC Cancer LYCVP.",
    drugs:[
      { name:"vinCRIStine",      dose:1.4,  unit:"mg/m²", basis:"bsa",  max:null, route:"IV over 15 min",  days:"Day 1", reducible:true,  nocap:true, note:"NO dose cap (BC Cancer protocol)" },
      { name:"Cyclophosphamide", dose:1000, unit:"mg/m²", basis:"bsa",  max:null, route:"IV over 20 min–1h", days:"Day 1", reducible:true  },
      { name:"predniSONE",       dose:100,  unit:"mg",    basis:"flat", max:null, route:"PO morning",       days:"Days 1–5", reducible:false }
    ],
    labs:{
      baseline:["total bilirubin","ALT","LDH","HBsAg","HBsAb","HBcoreAb"],
      cycle:["CBC & Diff"],
      conditional:[
        { label:"If clinically indicated", tests:["ALT","HBV viral load"] }
      ]
    }
  },
  {
    key:"BR", cat:"Lymphoma", bcc:true,
    name:"BR [Bendamustine-Rituximab — Indolent NHL]",
    cycle:28,
    notes:"Indolent NHL (follicular, MZL, MCL). NHL dose: bendamustine 90 mg/m². Rituximab 375 mg/m² IV Cycle 1; 1400 mg SC Cycle 2+. BC Cancer LYBENDR.",
    drugs:[
      { name:"Rituximab",               dose:375, unit:"mg/m²", basis:"bsa", max:null, route:"IV (Cycle 1); 1400mg SC (Cycle 2+)", days:"Day 1", reducible:false },
      { name:"Bendamustine (NHL dose)", dose:90,  unit:"mg/m²", basis:"bsa", max:null, route:"IV over 60 min", days:"Days 1–2", reducible:true  }
    ],
    labs:{
      baseline:["HBsAg","HBsAb","HBcoreAb"],
      cycle:["CBC & Diff","creatinine","ALT","total bilirubin"],
      conditional:[
        { label:"If clinically indicated", tests:["HBV viral load"] }
      ]
    }
  },
  {
    key:"ABVD", cat:"Lymphoma", bcc:true,
    name:"ABVD [Hodgkin Lymphoma]",
    cycle:28,
    notes:"Standard for classical Hodgkin lymphoma. Given on Days 1 and 15. If interim PET negative (Deauville 1–2 limited stage; 1–3 advanced stage): consider omitting bleomycin (AVD from Cycle 3). Monitor PFTs. BC Cancer LYABVD.",
    drugs:[
      { name:"DOXOrubicin", dose:25,  unit:"mg/m²",    basis:"bsa", max:null, route:"IV push",         days:"Days 1, 15", reducible:true, note:"Lifetime cumulative limit applies" },
      { name:"vinBLAStine",  dose:6,   unit:"mg/m²",    basis:"bsa", max:null, route:"IV over 15 min",  days:"Days 1, 15", reducible:true  },
      { name:"bleomycin",    dose:10,  unit:"units/m²", basis:"bsa", max:null, route:"IV over 15 min",  days:"Days 1, 15", reducible:true, note:"Omit if pulmonary toxicity develops. Consider omitting after Cycle 2 if PET negative." },
      { name:"dacarbazine",  dose:375, unit:"mg/m²",    basis:"bsa", max:null, route:"IV over 1–2h",    days:"Days 1, 15", reducible:true  }
    ],
    labs:{
      baseline:["total bilirubin","ALT","creatinine","HBsAg","HBsAb","HBcoreAb"],
      cycle:["CBC & Diff","platelets"],
      conditional:[
        { label:"Before each cycle if clinically indicated", tests:["total bilirubin","ALT","creatinine"] },
        { label:"After cycle 2", tests:["PET scan"] },
        { label:"If clinically indicated", tests:["HBV viral load"] }
      ]
    }
  },
  {
    key:"BV-AVD", cat:"Lymphoma", bcc:true,
    name:"BV-AVD [Hodgkin Lymphoma, Advanced Stage]",
    cycle:28,
    notes:"Previously untreated advanced classical Hodgkin lymphoma. 6 cycles. Brentuximab vedotin weight capped at 100 kg for dose calculation. GCSF mandatory: Days 7–11 and 21–25 each cycle. BC Cancer LYAVDBV.",
    drugs:[
      { name:"DOXOrubicin",         dose:25,  unit:"mg/m²", basis:"bsa",    max:null, route:"IV push",            days:"Days 1, 15", reducible:true  },
      { name:"vinBLAStine",          dose:6,   unit:"mg/m²", basis:"bsa",    max:null, route:"IV over 15 min",     days:"Days 1, 15", reducible:true,  levels:[4.02,3.0] },
      { name:"dacarbazine",          dose:375, unit:"mg/m²", basis:"bsa",    max:null, route:"IV over 1–2h",       days:"Days 1, 15", reducible:true  },
      { name:"Brentuximab vedotin",  dose:1.2, unit:"mg/kg", basis:"weight", max:null, weightCap:100, route:"IV over 30 min", days:"Days 1, 15", reducible:true,  levels:[0.9], note:"Weight capped at 100 kg for calculation" }
    ],
    labs:{
      baseline:["total bilirubin","ALT","creatinine","HBsAg","HBsAb","HBcoreAb"],
      cycle:["CBC & Diff"],
      conditional:[
        { label:"Before each cycle if clinically indicated", tests:["total bilirubin","ALT","creatinine"] },
        { label:"After cycle 2", tests:["PET scan"] },
        { label:"If clinically indicated", tests:["HBV viral load"] }
      ]
    }
  },
  {
    key:"A+CHP", cat:"Lymphoma", bcc:true,
    name:"A+CHP / BV+CHP [CD30+ Peripheral T-cell Lymphoma]",
    cycle:21,
    notes:"CD30-positive PTCL first-line. 6 cycles. Brentuximab replaces vincristine (no vincristine in this regimen). GCSF mandatory Days 7–11. Weight capped at 100 kg for brentuximab. BC Cancer LYCHPBV.",
    drugs:[
      { name:"Brentuximab vedotin",  dose:1.8, unit:"mg/kg", basis:"weight", max:null, weightCap:100, route:"IV over 30 min", days:"Day 1", reducible:true, levels:[1.2], note:"Weight capped at 100 kg" },
      { name:"DOXOrubicin",          dose:50,  unit:"mg/m²", basis:"bsa",    max:null, route:"IV push",          days:"Day 1", reducible:true, note:"Lifetime cumulative limit applies" },
      { name:"Cyclophosphamide",     dose:750, unit:"mg/m²", basis:"bsa",    max:null, route:"IV over 20 min–1h", days:"Day 1", reducible:true  },
      { name:"predniSONE",           dose:45,  unit:"mg/m²/day", basis:"bsa", max:null, route:"PO morning",      days:"Days 1–5", reducible:false, note:"Round to nearest 25 mg" }
    ],
    labs:{
      baseline:["total bilirubin","ALT","creatinine","LDH","HBsAg","HBcoreAb"],
      cycle:["CBC & Diff"],
      conditional:[
        { label:"Before each cycle if total bilirubin elevated at baseline", tests:["total bilirubin"] },
        { label:"If clinically indicated", tests:["creatinine","ALT","total bilirubin","LDH","HBV viral load"] }
      ]
    }
  },
  {
    key:"DA-R-EPOCH", cat:"Lymphoma", bcc:true,
    name:"DA-R-EPOCH [Double-hit / Burkitt / PMBCL]",
    cycle:21,
    notes:"Dose-adjusted R-EPOCH. Starting doses (Level 1) shown. Adjust etoposide, DOXOrubicin, cyclophosphamide ±25%/cycle based on nadir ANC (target nadir ANC <0.5 × 10⁹/L). vinCRIStine NOT adjusted and has NO dose cap. Rituximab given Day 5. IT MTX 12 mg starting Cycle 3 Days 2 and 5. GCSF mandatory from Day 6. BC Cancer LYEPOCHR.",
    drugs:[
      { name:"etoposide",          dose:50,   unit:"mg/m²/day",  basis:"bsa", max:null, route:"CIV non-DEHP 0.2µm filter", days:"Days 1–4 (total 200 mg/m²)", reducible:true,  note:"Starting Level 1; adjust ±25%/cycle. See DA-EPOCH dose table." },
      { name:"DOXOrubicin",        dose:10,   unit:"mg/m²/day",  basis:"bsa", max:null, route:"CIV (combined bag)",         days:"Days 1–4 (total 40 mg/m²)",  reducible:true,  note:"Starting Level 1; adjust ±25%/cycle" },
      { name:"vinCRIStine",        dose:0.4,  unit:"mg/m²/day",  basis:"bsa", max:null, route:"CIV (combined bag)",         days:"Days 1–4 (total 1.6 mg/m²)", reducible:false, nocap:true, note:"NO dose cap; dose is NOT adjusted (fixed at Level 1)" },
      { name:"predniSONE",         dose:60,   unit:"mg/m²",      basis:"bsa", max:null, route:"PO BID with food",           days:"Days 1–5",                    reducible:false, note:"BID dosing = 120 mg/m²/day total; round to nearest 25 mg" },
      { name:"Rituximab",          dose:375,  unit:"mg/m²",      basis:"bsa", max:null, route:"IV (Cycle 1); 1400mg SC (Cycle 2+)", days:"Day 5 (after EPOCH)", reducible:false },
      { name:"Cyclophosphamide",   dose:750,  unit:"mg/m²",      basis:"bsa", max:null, route:"IV bolus over 1h",           days:"Day 5 (after EPOCH)",         reducible:true,  note:"Starting Level 1; only drug adjusted below Level 1" }
    ],
    labs:{
      baseline:["urea","creatinine","total bilirubin","ALT","LDH","uric acid","HBsAg","HBsAb","HBcoreAb","HCAb","HIV"],
      cycle:["CBC & Diff"],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["potassium","calcium","phosphate","urinalysis"] },
        { label:"Days 8, 11, 15, 18 each cycle", tests:["CBC & Diff"] },
        { label:"If receiving intrathecal methotrexate (Day 1)", tests:["INR","PTT"] },
        { label:"If receiving intrathecal methotrexate (Day 4, within 24h of IT)", tests:["CBC & Diff","INR","PTT"] },
        { label:"If clinically indicated each cycle", tests:["creatinine","total bilirubin","ALT","alkaline phosphatase","LDH","HBV viral load"] }
      ]
    }
  },
  {
    key:"R-DHAP", cat:"Lymphoma", bcc:true,
    name:"R-DHAP [Salvage — Relapsed/Refractory DLBCL]",
    cycle:21,
    notes:"Salvage pre-ASCT for relapsed/refractory DLBCL. High-dose cytarabine — monitor renal function. Aggressive IV hydration required with cisplatin. Reduce cytarabine for age >60 or renal impairment. BC Cancer LYDHAPR.",
    drugs:[
      { name:"Rituximab",          dose:375,  unit:"mg/m²", basis:"bsa",  max:null, route:"IV (Cycle 1); 1400mg SC (Cycle 2+)", days:"Day 1", reducible:false },
      { name:"Dexamethasone",      dose:40,   unit:"mg",    basis:"flat", max:null, route:"IV or PO",         days:"Days 1–4", reducible:false },
      { name:"CISplatin",          dose:100,  unit:"mg/m²", basis:"bsa",  max:null, route:"CIV over 24h",    days:"Day 1", reducible:true,  note:"Aggressive hydration required; highly nephrotoxic" },
      { name:"Cytarabine (Ara-C)", dose:2000, unit:"mg/m²", basis:"bsa",  max:null, route:"IV over 2h q12h ×2 doses", days:"Day 2", reducible:true, note:"Reduce to 1000–1500 mg/m² if age >60 or renal impairment" }
    ],
    labs:{
      baseline:["HBsAg","HBsAb","HBcoreAb"],
      cycle:["CBC & Diff","creatinine","ALT","total bilirubin"],
      conditional:[
        { label:"Baseline (recommended)", tests:["alkaline phosphatase","sodium","potassium","magnesium","calcium"] },
        { label:"If clinically indicated each cycle", tests:["alkaline phosphatase","sodium","potassium","magnesium","calcium","LDH","HBV viral load"] }
      ]
    }
  },
  {
    key:"R-GDP", cat:"Lymphoma", bcc:true,
    name:"R-GDP [Salvage — Relapsed/Refractory DLBCL]",
    cycle:21,
    notes:"Salvage for relapsed/refractory DLBCL; commonly used pre-ASCT. Generally better tolerated than R-DHAP. Rituximab 375 IV Cycle 1; 1400 mg SC Cycle 2+. BC Cancer LYGDPR.",
    drugs:[
      { name:"Rituximab",    dose:375,  unit:"mg/m²", basis:"bsa",  max:null, route:"IV (Cycle 1); 1400mg SC (Cycle 2+)", days:"Day 1", reducible:false },
      { name:"Gemcitabine",  dose:1000, unit:"mg/m²", basis:"bsa",  max:null, route:"IV over 30 min",  days:"Days 1, 8", reducible:true  },
      { name:"Dexamethasone",dose:40,   unit:"mg",    basis:"flat", max:null, route:"PO or IV",        days:"Days 1–4",  reducible:false },
      { name:"CISplatin",    dose:75,   unit:"mg/m²", basis:"bsa",  max:null, route:"IV over 1h",      days:"Day 1",     reducible:true,  note:"Hydration required" }
    ],
    labs:{
      baseline:["total bilirubin","ALT","HBsAg","HBsAb","HBcoreAb"],
      cycle:["CBC & Diff","creatinine"],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["alkaline phosphatase","magnesium","calcium"] },
        { label:"Day 8 before treatment", tests:["CBC & Diff"] },
        { label:"If clinically indicated", tests:["alkaline phosphatase","magnesium","calcium","ALT","HBV viral load"] }
      ]
    }
  },
  {
    key:"R-ICE", cat:"Lymphoma", bcc:true,
    name:"R-ICE [Salvage — Relapsed/Refractory Aggressive B-cell]",
    cycle:21,
    notes:"Salvage pre-ASCT for relapsed/refractory aggressive B-cell lymphoma. 3 cycles. Carboplatin AUC 5 × (GFR + 25); hard maximum 800 mg. Mesna 1667 mg/m²/day concurrent IV + PO at 2h and 4h post-ifosfamide. Consider 75% dose reduction for age >70. BC Cancer LYRICE.",
    drugs:[
      { name:"Rituximab",        dose:375,  unit:"mg/m²", basis:"bsa", max:null,  route:"IV (Cycle 1); 1400mg SC (Cycle 2+)", days:"Day 1", reducible:false },
      { name:"Ifosfamide",       dose:1667, unit:"mg/m²/day", basis:"bsa", max:null, route:"IV over 2h", days:"Days 1–3 (total 5000 mg/m²)", reducible:true, note:"With mesna uroprotection" },
      { name:"Mesna (IV)",       dose:1667, unit:"mg/m²/day", basis:"bsa", max:null, route:"IV concurrent with ifosfamide", days:"Days 1–3", reducible:false, note:"Concurrent with ifosfamide via Y-site" },
      { name:"CARBOplatin",      dose:5,   unit:"AUC",  basis:"auc", max:800,  route:"IV over 1h",  days:"Day 1", reducible:false, note:"Calvert: AUC 5 × (GFR+25); maximum 800 mg" },
      { name:"Etoposide",        dose:100, unit:"mg/m²/day", basis:"bsa", max:null, route:"IV over 45–90 min (non-DEHP+0.2µm)", days:"Days 1–3 (total 300 mg/m²)", reducible:true  }
    ],
    labs:{
      baseline:["alkaline phosphatase","LDH","calcium","HBsAg","HBsAb","HBcoreAb","HepCAb","HIV","pregnancy test"],
      cycle:["CBC & Diff","total bilirubin","LDH","creatinine"],
      conditional:[
        { label:"Before each ifosfamide dose (Days 1–3)", tests:["urine dipstick for blood"] },
        { label:"If urine dipstick positive", tests:["urinalysis"] },
        { label:"If clinically indicated", tests:["HBV viral load","ALT"] }
      ]
    }
  },
  {
    key:"SMILE", cat:"Lymphoma", bcc:true,
    name:"SMILE [NK/T-cell Lymphoma]",
    cycle:28,
    notes:"NK/T-cell lymphoma (nasal/extranasal). Up to 2–6 cycles. Pegaspargase 1500 units/m² for older/less fit patients. Mesna for ifosfamide uroprotection: concurrent CIV + post-infusion bolus. GCSF from Day 6. BC Cancer LYSMILE.",
    drugs:[
      { name:"Methotrexate",       dose:2000, unit:"mg/m²",     basis:"bsa",  max:null, route:"IV over 6h",                    days:"Day 1",    reducible:true, note:"Leucovorin rescue: 25mg q6h starting 24h after MTX start, continue until MTX <0.1 µmol/L" },
      { name:"Dexamethasone",      dose:40,   unit:"mg",         basis:"flat", max:null, route:"PO",                           days:"Days 2–4", reducible:false },
      { name:"Etoposide",          dose:100,  unit:"mg/m²/day", basis:"bsa",  max:null, route:"IV over 45–90 min (non-DEHP)", days:"Days 2–4", reducible:true  },
      { name:"Ifosfamide",         dose:1500, unit:"mg/m²/day", basis:"bsa",  max:null, route:"IV over 20h",                  days:"Days 2–4", reducible:true, note:"With mesna uroprotection" },
      { name:"Mesna (concurrent)", dose:1500, unit:"mg/m²/day", basis:"bsa",  max:null, route:"CIV concurrent with ifosfamide", days:"Days 2–4", reducible:false },
      { name:"Pegaspargase",       dose:2500, unit:"units/m²",  basis:"bsa",  max:null, route:"IV over 1h or IM",              days:"Day 8",    reducible:true, note:"Use 1500 units/m² for older/less fit patients" }
    ],
    labs:{
      baseline:["HBsAg","HBsAb","HBcoreAb"],
      cycle:["CBC & Diff","creatinine","electrolytes panel","phosphate","albumin","total bilirubin","ALT","alkaline phosphatase","GGT","LDH","triglycerides","amylase","lipase","random glucose","uric acid","EBV DNA load"],
      conditional:[
        { label:"Daily during cycle", tests:["CBC & Diff","creatinine","electrolytes panel"] },
        { label:"Before each ifosfamide dose (Days 2–4) and q8h", tests:["urine dipstick for blood"] },
        { label:"If urine dipstick positive", tests:["urinalysis"] },
        { label:"Methotrexate: before and q6h during infusion", tests:["urine pH"] },
        { label:"Methotrexate level (hour 48, then daily until <0.1 µmol/L)", tests:["methotrexate level"] },
        { label:"Before each pegaspargase dose", tests:["INR","PTT","fibrinogen"] },
        { label:"Pegaspargase: every Monday and Thursday", tests:["GGT","ALT","alkaline phosphatase","total bilirubin","amylase","lipase","random glucose"] },
        { label:"If clinically indicated", tests:["HBV viral load"] }
      ]
    }
  },
  {
    key:"GemOx-Peg", cat:"Lymphoma", bcc:true,
    name:"GemOx-Pegaspargase [NK/T-cell Lymphoma]",
    cycle:21,
    notes:"NK/T-cell lymphoma, newly diagnosed or relapsed. 4 cycles (limited stage) or 6 cycles (advanced). Consider gemcitabine 75% dose for age >70. Pegaspargase 1500 units/m² for older/less fit. BC Cancer LYGEMOXPEG.",
    drugs:[
      { name:"Gemcitabine",  dose:1000, unit:"mg/m²",    basis:"bsa",  max:null, route:"IV over 30 min",  days:"Days 1, 8",  reducible:true, note:"Consider 75% dose for age >70" },
      { name:"Oxaliplatin",  dose:130,  unit:"mg/m²",    basis:"bsa",  max:null, route:"IV over 2h (D5W)", days:"Day 1",      reducible:true, levels:[85,65]  },
      { name:"Pegaspargase", dose:2500, unit:"units/m²", basis:"bsa",  max:null, route:"IV over 1h or IM", days:"Day 1",      reducible:true, note:"Use 1500 units/m² for older/less fit" }
    ],
    labs:{
      baseline:["EBV DNA","HBsAg","HBsAb","HBcoreAb"],
      cycle:["CBC & Diff","creatinine","sodium","potassium","magnesium","calcium","phosphate","albumin","total bilirubin","ALT","alkaline phosphatase","GGT","LDH","triglycerides","lipase","random glucose","uric acid","INR","PTT","fibrinogen"],
      conditional:[
        { label:"Day 8 before treatment", tests:["CBC & Diff"] },
        { label:"Before each pegaspargase dose", tests:["INR","PTT","fibrinogen"] },
        { label:"Pegaspargase: every Monday and Thursday", tests:["ALT","alkaline phosphatase","GGT","total bilirubin","lipase","random glucose"] },
        { label:"If at risk of QT prolongation", tests:["ECG"] },
        { label:"If clinically indicated", tests:["EBV DNA","HBV viral load"] }
      ]
    }
  },
  {
    key:"ASP-MEDEX", cat:"Lymphoma", bcc:true,
    name:"ASP-MEDEX [Relapsed/Refractory Extranodal NK/T-cell]",
    cycle:21,
    notes:"3 cycles. High-dose methotrexate — must be given inpatient with rapid MTX level monitoring and urine alkalinization. Leucovorin 25 mg q6h starting exactly 24h after MTX start, continue until MTX <0.1 µmol/L. GCSF from Day 6. BC Cancer LYASPMEDEX.",
    drugs:[
      { name:"Methotrexate",  dose:3000, unit:"mg/m²",    basis:"bsa",  max:null, route:"IV over 6h (alkalinize urine first)", days:"Day 1", reducible:true, note:"Inpatient required. Leucovorin rescue: 25mg q6h × 4 doses IV then PO until MTX <0.1 µmol/L" },
      { name:"Dexamethasone", dose:40,   unit:"mg",        basis:"flat", max:null, route:"PO",    days:"Days 1–4", reducible:false },
      { name:"Pegaspargase",  dose:2500, unit:"units/m²", basis:"bsa",  max:null, route:"IV over 1h or IM", days:"Day 2", reducible:true, note:"Use 1500 units/m² for older/less fit" }
    ],
    labs:{
      baseline:["EBV DNA load","HBsAg","HBsAb","HBcoreAb"],
      cycle:["CBC & Diff","creatinine","electrolytes panel","phosphate","albumin","total bilirubin","ALT","alkaline phosphatase","GGT","LDH","triglycerides","amylase","lipase","random glucose","uric acid"],
      conditional:[
        { label:"Daily during cycle", tests:["CBC & Diff","creatinine","electrolytes panel"] },
        { label:"Methotrexate: before and q6h during infusion", tests:["urine pH"] },
        { label:"Methotrexate level (hour 48, then daily until <0.1 µmol/L)", tests:["methotrexate level"] },
        { label:"Before each pegaspargase dose", tests:["INR","PTT","fibrinogen","antithrombin"] },
        { label:"Pegaspargase: every Monday and Thursday", tests:["ALT","alkaline phosphatase","GGT","total bilirubin","amylase","lipase","random glucose"] },
        { label:"If clinically indicated", tests:["HBV viral load"] }
      ]
    }
  },
  {
    key:"IVAC-R", cat:"Lymphoma", bcc:true,
    name:"IVAC-R [Burkitt Lymphoma — Alternates with R-CODOX-M]",
    cycle:21,
    notes:"High-risk Burkitt lymphoma. Alternates with LYCODOXMR. START WITHIN 48H OF DIAGNOSIS. Mesna uroprotection required. IT MTX 12mg flat dose (8 total doses across all cycles — not BSA based). GCSF Day 7 until ANC >1.0. BC Cancer LYIVACR.",
    drugs:[
      { name:"Cytarabine (Ara-C)", dose:2000, unit:"mg/m²",     basis:"bsa",  max:null, route:"IV over 2h q12h", days:"Days 1–2 (4 doses)", reducible:true  },
      { name:"Ifosfamide",         dose:1500, unit:"mg/m²/day", basis:"bsa",  max:null, route:"IV over 2h",       days:"Days 1–5", reducible:true, note:"With mesna uroprotection" },
      { name:"Mesna",              dose:375,  unit:"mg/m²",     basis:"bsa",  max:null, route:"IV QID",            days:"Days 1–5", reducible:false },
      { name:"Etoposide",          dose:60,   unit:"mg/m²/day", basis:"bsa",  max:null, route:"IV over 45 min (non-DEHP+0.2µm)", days:"Days 1–5", reducible:true  },
      { name:"Rituximab",          dose:375,  unit:"mg/m²",     basis:"bsa",  max:null, route:"IV (Cycle 1); 1400mg SC (Cycle 2+)", days:"Day 4", reducible:false },
      { name:"MTX intrathecal",    dose:12,   unit:"mg",        basis:"flat", max:null, route:"IT (flat dose — not per m²)", days:"Day 6 and post-Day 18", reducible:false, note:"Flat 12 mg dose — NOT weight or BSA based. Physician administration only." }
    ],
    labs:{
      baseline:["urine pH","HIV","HBsAg","HBsAb","HBcoreAb","HCAb","CMV serology","HSV serology"],
      cycle:["CBC & Diff","creatinine","sodium","potassium","ALT","total bilirubin","alkaline phosphatase","GGT","uric acid","LDH"],
      conditional:[
        { label:"Daily q am during treatment", tests:["CBC & Diff","creatinine","sodium","potassium"] },
        { label:"Every Monday and Thursday during treatment", tests:["ALT"] },
        { label:"Daily until 48h after ifosfamide completion", tests:["urine dipstick for blood"] },
        { label:"Prior to each intrathecal MTX (Day 6 and after Day 18)", tests:["PTT","INR","platelets"] },
        { label:"If clinically indicated", tests:["HBV viral load"] }
      ]
    }
  },
  {
    key:"VIPD", cat:"Lymphoma", bcc:true,
    name:"VIPD [NK/T-cell Lymphoma post-RT — Cycles 2–4]",
    cycle:21,
    notes:"NK/T-cell lymphoma (nasal type). Cycles 2–4 (after concurrent cisplatin+RT induction). Start 3–5 weeks after RT completion. Cisplatin hydration required. BC Cancer LYVIPDRT.",
    drugs:[
      { name:"Etoposide",    dose:100, unit:"mg/m²/day", basis:"bsa",  max:null, route:"IV over 45–90 min (non-DEHP+0.2µm)", days:"Days 1–3", reducible:true  },
      { name:"Ifosfamide",   dose:1200,unit:"mg/m²/day", basis:"bsa",  max:null, route:"IV over 1h",     days:"Days 1–3", reducible:true, note:"With mesna uroprotection" },
      { name:"Mesna (IV)",   dose:240, unit:"mg/m²/day", basis:"bsa",  max:null, route:"IV concurrent",  days:"Days 1–3", reducible:false },
      { name:"CISplatin",    dose:33,  unit:"mg/m²/day", basis:"bsa",  max:null, route:"IV over 1h + hydration", days:"Days 1–3", reducible:true, note:"KCl 20 mEq + MgSO4 1g + mannitol 30g per bag. Aggressive hydration." },
      { name:"Dexamethasone",dose:40,  unit:"mg",        basis:"flat", max:null, route:"PO",             days:"Days 1–4", reducible:false }
    ],
    labs:{
      baseline:["sodium","potassium","calcium","albumin","magnesium","total bilirubin","ALT","LDH","HBsAg","HBsAb","HBcoreAb"],
      cycle:["CBC & Diff","creatinine"],
      conditional:[
        { label:"Cycle 1 Days 1, 8, 15, 22", tests:["CBC & Diff","creatinine"] },
        { label:"Days 1–3 each cycle (with ifosfamide)", tests:["urine dipstick for blood"] },
        { label:"If clinically indicated", tests:["HBV viral load","ALT"] }
      ]
    }
  },
  {
    key:"HD-MTX-R-Tem", cat:"Lymphoma", bcc:true,
    name:"HD-MTX + Rituximab + Temozolomide [CNS Lymphoma]",
    cycle:14,
    notes:"Primary/secondary CNS lymphoma. MTX + rituximab q2 weeks × 4 doses; temozolomide on alternate cycles (Cycles 2 and 4 only). MTX dose prorated to GFR: full 8 g/m² if GFR ≥100; dose = 8 × (GFR/100) if GFR 60–99. Inpatient required for MTX with urine alkalinization. BC Cancer LYHDMRTEM.",
    drugs:[
      { name:"Methotrexate (HD)",  dose:8000, unit:"mg/m²",    basis:"bsa",  max:null, route:"IV over 4h (alkalinize urine prior)", days:"Day 1", reducible:true, note:"Prorate to GFR: 8000 mg/m² if GFR ≥100; 8000×(GFR/100) if GFR 60–99. Leucovorin rescue required." },
      { name:"Rituximab",          dose:375,  unit:"mg/m²",    basis:"bsa",  max:null, route:"IV (Cycle 1); 1400mg SC (Cycle 2+)", days:"Day 1 or 2", reducible:false },
      { name:"Temozolomide",       dose:150,  unit:"mg/m²/day",basis:"bsa",  max:null, route:"PO at bedtime", days:"Days 7–11 (ALTERNATE cycles only)", reducible:true, note:"Alternate cycles only (Cycles 2, 4). May increase to 200 mg/m² Cycle 2 if well tolerated." }
    ],
    labs:{
      baseline:["urine pH","HBsAg","HBsAb","HBcoreAb","chest radiograph","CT brain with contrast or MRI with contrast","ocular slit lamp exam","Folstein MMSE","ECOG performance status"],
      cycle:["CBC & Diff","creatinine","electrolytes panel","total bilirubin","ALT","alkaline phosphatase","LDH"],
      conditional:[
        { label:"Immediately before and q6h during MTX infusion", tests:["urine pH"] },
        { label:"Daily q am during MTX treatment", tests:["creatinine","electrolytes panel"] },
        { label:"Methotrexate level (hour 48 from start, then daily until <0.1 µmol/L)", tests:["methotrexate level"] },
        { label:"Prior to temozolomide (Days 4–7 of cycles with temozolomide)", tests:["CBC & Diff"] },
        { label:"If clinically indicated post-methotrexate", tests:["ALT","total bilirubin","alkaline phosphatase","LDH","GGT"] },
        { label:"If clinically indicated", tests:["HBV viral load"] }
      ]
    }
  },
  {
    key:"HD-MTX-CNS", cat:"Lymphoma", bcc:true,
    name:"HD-MTX [CNS Lymphoma Prophylaxis / Treatment]",
    cycle:14,
    notes:"CNS lymphoma prophylaxis or treatment. q2 weeks × 4 cycles. Inpatient administration. Urine alkalinization 4–12h prior to MTX. Leucovorin 25 mg q6h starting exactly 24h after MTX start, continue PO until MTX <0.1 µmol/L. BC Cancer LYHDMTXPRO.",
    drugs:[
      { name:"Methotrexate (HD)", dose:3500, unit:"mg/m²", basis:"bsa", max:null, route:"IV over 4h (alkalinize urine prior)", days:"Day 1", reducible:true, note:"Leucovorin rescue: 25mg q6h × 4 doses IV then PO until MTX <0.1 µmol/L" }
    ],
    labs:{
      baseline:["urine pH","LDH","HBsAg","HBsAb","HBcoreAb","chest radiograph","Folstein MMSE","ECOG performance status"],
      cycle:["CBC & Diff","creatinine","electrolytes panel","ALT","total bilirubin","alkaline phosphatase"],
      conditional:[
        { label:"Immediately before and q6h during MTX infusion", tests:["urine pH"] },
        { label:"Daily q am during MTX treatment", tests:["creatinine","electrolytes panel"] },
        { label:"Methotrexate level (hour 48 from start, then daily until <0.1 µmol/L)", tests:["methotrexate level"] },
        { label:"At cycle 4", tests:["Folstein MMSE"] },
        { label:"If clinically indicated post-methotrexate", tests:["ALT","total bilirubin","alkaline phosphatase","LDH","GGT"] },
        { label:"If clinically indicated", tests:["HBV viral load"] }
      ]
    }
  },
  {
    key:"Fludarabine", cat:"Lymphoma", bcc:true,
    name:"Fludarabine [Indolent Lymphoma — Monotherapy]",
    cycle:28,
    notes:"Low-grade lymphoma. 4–6 cycles (max 8). IV or PO formulations listed. BC Cancer LYFLU.",
    drugs:[
      { name:"Fludarabine (IV)",  dose:25, unit:"mg/m²/day", basis:"bsa", max:null, route:"IV over 30 min", days:"Days 1–5 (working days)", reducible:true },
      { name:"Fludarabine (PO) — alternative", dose:40, unit:"mg/m²/day", basis:"bsa", max:null, route:"PO", days:"Days 1–5", reducible:true, note:"Round to nearest 10 mg" }
    ],
    labs:{
      baseline:["total bilirubin","ALT","HBsAg","HBsAb","HBcoreAb"],
      cycle:["CBC & Diff","creatinine"],
      conditional:[
        { label:"If clinically indicated", tests:["ALT","HBV viral load"] }
      ]
    }
  },
  {
    key:"Nivolumab-q2w", cat:"Lymphoma", bcc:true,
    name:"Nivolumab q2w [Relapsed/Refractory Hodgkin Lymphoma]",
    cycle:14,
    notes:"Relapsed/refractory classical Hodgkin lymphoma or other lymphomas. 14-day cycles. Maximum 240 mg per dose. BC Cancer LYNIV.",
    drugs:[
      { name:"Nivolumab", dose:3, unit:"mg/kg", basis:"weight", max:240, route:"IV over 30 min (0.2µm filter)", days:"Day 1 every 14 days", reducible:false, note:"Maximum 240 mg per dose" }
    ],
    labs:{
      baseline:["morning serum cortisol","chest x-ray","HBsAg","HBsAb","HBcoreAb"],
      cycle:["CBC & Diff","creatinine","alkaline phosphatase","ALT","total bilirubin","LDH","sodium","potassium","TSH"],
      conditional:[
        { label:"If clinically indicated (irAE workup)", tests:["chest x-ray","morning serum cortisol","lipase","serum or urine HCG","free T3","free T4","serum ACTH","testosterone","estradiol","FSH","LH","ECG","CRP","CK","troponin"] },
        { label:"If clinically indicated (hepatitis B)", tests:["HBV viral load"] }
      ]
    }
  },
  {
    key:"Pembrolizumab-q3w", cat:"Lymphoma", bcc:true,
    name:"Pembrolizumab q3w [Hodgkin / PMBCL]",
    cycle:21,
    notes:"Relapsed/refractory classical Hodgkin lymphoma or primary mediastinal B-cell lymphoma. Maximum 35 cycles (counting q6w doses). Maximum 200 mg per dose. BC Cancer LYPEM.",
    drugs:[
      { name:"Pembrolizumab", dose:2, unit:"mg/kg", basis:"weight", max:200, route:"IV over 30 min (0.2µm filter)", days:"Day 1 every 21 days", reducible:false, note:"Maximum 200 mg per dose" }
    ],
    labs:{
      baseline:["morning serum cortisol","chest x-ray","HBsAg","HBsAb","HBcoreAb"],
      cycle:["CBC & Diff","creatinine","alkaline phosphatase","ALT","total bilirubin","LDH","sodium","potassium","TSH"],
      conditional:[
        { label:"If clinically indicated (irAE workup)", tests:["chest x-ray","morning serum cortisol","lipase","serum or urine HCG","free T3","free T4","random glucose","serum ACTH","testosterone","estradiol","FSH","LH","ECG","CRP","CK","troponin"] },
        { label:"If clinically indicated (hepatitis B)", tests:["HBV viral load"] }
      ]
    }
  },
  {
    key:"CVPP-ABO", cat:"Lymphoma", bcc:true,
    name:"Stanford V Modified / CVPP+ABO [Hodgkin Lymphoma]",
    cycle:28,
    notes:"Hodgkin lymphoma. vinCRIStine NO dose cap per BC Cancer protocol. BC Cancer LYCVPPABO.",
    drugs:[
      { name:"vinBLAStine",   dose:6,   unit:"mg/m²",     basis:"bsa",  max:null, route:"IV over 15 min",  days:"Day 1",   reducible:true, levels:[4.02,3.0]  },
      { name:"Cyclophosphamide",dose:600,unit:"mg/m²",     basis:"bsa",  max:null, route:"IV over 20 min–1h", days:"Day 1", reducible:true  },
      { name:"procarbazine",  dose:100, unit:"mg/m²/day", basis:"bsa",  max:null, route:"PO",               days:"Days 1–7",reducible:true  },
      { name:"predniSONE",    dose:45,  unit:"mg/m²/day", basis:"bsa",  max:null, route:"PO morning",       days:"Days 1–14",reducible:false },
      { name:"DOXOrubicin",   dose:35,  unit:"mg/m²",     basis:"bsa",  max:null, route:"IV push",          days:"Day 8",   reducible:true, note:"Lifetime cumulative limit" },
      { name:"vinCRIStine",   dose:1.4, unit:"mg/m²",     basis:"bsa",  max:null, route:"IV over 15 min",   days:"Day 8",   reducible:true,  nocap:true, levels:[0.938,0.7], note:"NO dose cap (BC Cancer protocol)" },
      { name:"bleomycin",     dose:10,  unit:"units/m²",  basis:"bsa",  max:null, route:"IV over 15 min",   days:"Day 8",   reducible:true, note:"Monitor PFTs" }
    ],
    labs:{
      baseline:["ALT","creatinine","HBsAg","HBsAb","HBcoreAb"],
      cycle:["CBC & Diff"],
      conditional:[
        { label:"Before each cycle if total bilirubin elevated at baseline", tests:["total bilirubin"] },
        { label:"If clinically indicated", tests:["HBV viral load","ALT"] }
      ]
    }
  },

  {
    key:"LYPOLARCHP", cat:"Lymphoma", bcc:true,
    name:"LYPOLARCHP — Pola-R-CHP [DLBCL, ABC subtype — 1st Line]",
    cycle:21,
    notes:"Previously untreated CD20+ DLBCL, ABC subtype (confirmed by GEP; IHC non-GCB acceptable if GEP not feasible). IPI 2–5. 6 cycles q21d. Cycle 1: riTUXimab on Day 2 IV; Cycles 2–6: Day 1 IV 375 mg/m² or SC 1400 mg if prior IV tolerated. Polatuzumab vedotin: 90 min infusion Cycle 1, 30 min subsequent cycles if tolerated. Elderly (>75 yr): start DOXOrubicin and cyclophosphamide at 75% Cycle 1, escalate as tolerated. Patients who received ≤2 cycles LYCHOPR may switch to complete 6 total. BC Cancer LYPOLARCHP (Feb 2026).",
    drugs:[
      { name:"predniSONE",          dose:100,  unit:"mg",     basis:"flat",   max:null, weightCap:null, route:"PO morning with food",                           days:"Days 1–5",              reducible:false },
      { name:"DOXOrubicin",         dose:50,   unit:"mg/m²",  basis:"bsa",    max:null, weightCap:null, route:"IV push",                                        days:"Day 1",                 reducible:true,  levels:[37.5, 25],  note:"Bili 35–85 µmol/L: give 50%. Bili >85 µmol/L: omit; add cyclophosphamide 350 mg/m² extra" },
      { name:"Cyclophosphamide",    dose:750,  unit:"mg/m²",  basis:"bsa",    max:null, weightCap:null, route:"IV over 20 min–1h",                              days:"Day 1",                 reducible:true,  levels:[562.5, 375] },
      { name:"Polatuzumab vedotin", dose:1.8,  unit:"mg/kg",  basis:"weight", max:null, weightCap:null, route:"IV over 90 min (Cycle 1) / 30 min (Cycles 2–6)", days:"Day 1",                 reducible:true,  levels:[1.4, 1.0],  note:"Avoid moderate-severe hepatic impairment (bili >1.5× ULN). Monitor for neuropathy and infusion reactions." },
      { name:"riTUXimab",           dose:375,  unit:"mg/m²",  basis:"bsa",    max:null, weightCap:null, route:"IV (Cycle 1 Day 2); IV or SC from Cycle 2",      days:"Day 1 (Day 2, Cycle 1)", reducible:false,                     note:"Cycles 2–6: SC 1400 mg fixed dose if prior IV tolerated. No dose modifications." },
      { name:"filgrastim",          dose:300,  unit:"mcg",    basis:"flat",   max:null, weightCap:null, route:"Subcutaneous",                                   days:"Days 7–11",             reducible:false,                     note:"Weight-based: 300 mcg (≤75 kg), 480 mcg (76–110 kg), 600 mcg (>110 kg)" }
    ],
    labs:{
      baseline:["CBC & Diff","total bilirubin","ALT","HBsAg","HBsAb","HBcoreAb"],
      cycle:["CBC & Diff","total bilirubin","ALT"],
      conditional:[
        { label:"If clinically indicated", tests:["LDH","alkaline phosphatase","creatinine","HBV viral load"] }
      ]
    }
  },

  // LY PROTOCOLS (BC Cancer LY series — Lymphoma, CLL)

{
    key: "LY-HLHETCSPA",
    cat: "Lymphoma",
    bcc: true,
    name: "HLHETCSPA — Etoposide + Dexamethasone + cycloSPORINE [HLH]",
    cycle: null,
    notes: "Treatment of Hemophagocytic Lymphohistiocytosis (HLH) associated with malignant lymphoproliferative disorder. Induction: Weeks 1–2 etoposide Days 1, 4, 8, 11; Weeks 3–8 etoposide weekly. Dexamethasone tapers from 10 mg/m² daily (Wks 1–2) to 5 mg/m² (Wks 3–4), 2.5 mg/m² (Wks 5–6), 1.25 mg/m² (Wks 7–8). CycloSPORINE 3 mg/kg BID targeting trough 200 mcg/L (hold if CrCl <50 mL/min). Intrathecal methotrexate 12 mg + hydrocortisone 50 mg at weeks 3, 4, 5, 6. Continuation therapy every 2 weeks for persistent disease as bridge to allogenic SCT. Etoposide dose reduced 75% if CrCl 10–50, 50% if CrCl <10 and bili <50, 25% if CrCl <10 and bili >50. Initial doses may be reduced 25–50% for age >75 or poor performance.",
    drugs: [
      {
        name: "etopoSIDE",
        dose: 150,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1, 4, 8, 11 (Wks 1–2); weekly (Wks 3–8); q2wk (continuation)",
        reducible: true,
        note: "Infuse in 500–1000 mL NS over 45–90 min. Reduce for renal/hepatic dysfunction: 75% if CrCl 10–50; 50% if CrCl <10 + bili <50; 25% if CrCl <10 + bili >50."
      },
      {
        name: "dexamethasone",
        dose: 10,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "PO/IV",
        days: "Daily Wks 1–2; tapering Wks 3–8 (5 → 2.5 → 1.25 mg/m²/day)",
        reducible: true,
        note: "PO dose rounded to nearest 2 mg (Wks 1–2) or 0.5 mg (Wks 3–8). Continuation: 10 mg/m² daily x 3 days q2wk."
      },
      {
        name: "cycloSPORINE",
        dose: 3,
        unit: "mg/kg",
        basis: "weight",
        max: null,
        weightCap: null,
        route: "PO",
        days: "BID continuously (round to nearest 25 mg)",
        reducible: false,
        note: "Target serum trough 200 mcg/L. Hold if CrCl <50 mL/min until renal recovery. May need to delay initiation until patient stabilised."
      },
      {
        name: "methoTREXate (intrathecal)",
        dose: 12,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "IT",
        days: "Weeks 3, 4, 5, 6 (with first LP; repeat if CSF abnormal)",
        reducible: false,
        note: "Combined with hydrocortisone 50 mg IT; qs to 6 mL with preservative-free NS. Use with caution if CrCl <30 mL/min."
      },
      {
        name: "hydrocortisone (intrathecal)",
        dose: 50,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "IT",
        days: "Weeks 3, 4, 5, 6",
        reducible: false,
        note: "Co-administered intrathecally with methotrexate."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "INR", "aPTT", "fibrinogen", "bilirubin", "ALT", "LDH", "creatinine", "HIV", "HBsAg", "HBsAb", "HBcoreAb", "EBV DNA", "CMV DNA", "ferritin", "fasting lipid profile", "SPEP", "IgG", "IgA", "IgM", "soluble interleukin-2 receptor (sCD25)"],
      cycle: ["CBC & Diff", "bilirubin", "creatinine"],
      conditional: [
        { label: "Weekly (cycloSPORINE trough)", tests: ["cycloSPORINE trough level"] },
        { label: "Weekly if clinically indicated", tests: ["ALT", "LDH", "ferritin", "CMV DNA", "EBV DNA"] },
        { label: "Week 3", tests: ["Lumbar puncture with CSF analysis (cell count & diff, protein, glucose)"] },
        { label: "Week 4 (if Week 3 CSF abnormal or progressive neuro symptoms)", tests: ["Lumbar puncture with CSF analysis"] }
      ]
    }
  },
  {
    key: "LY-LYABVD",
    cat: "Lymphoma",
    bcc: true,
    name: "LYABVD — ABVd [Hodgkin Lymphoma]",
    cycle: 28,
    notes: "All stages of Hodgkin lymphoma. Drugs given Days 1 and 15 of each 28-day cycle. PET-guided: discontinue bleomycin after Cycle 2 if interim PET negative (Deauville 1–2 limited stage; 1–3 advanced stage). Limited stage: ABVD x2 then PET; if PET-ve → AVD x2; if PET+ve → radiation. Advanced stage: ABVD x2 then PET; if PET-ve → AVD x4; if PET+ve → ABVD x4 more. G-CSF added (not dose-reduced) if ANC <0.6 after first cycles. DOXOrubicin cardiac assessment recommended at cumulative ≥300 mg/m². Bleomycin max total 270 units; O2 should not exceed 30–40% FiO2.",
    drugs: [
      {
        name: "DOXOrubicin",
        dose: 25,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1, 15",
        reducible: true,
        note: "Reduce 50% if bilirubin 35–85; omit if bilirubin >85 (substitute cyclophosphamide 375 mg/m²). Cardiotoxic; assess ejection fraction at cumulative ≥300 mg/m²."
      },
      {
        name: "bleomYCin",
        dose: 10,
        unit: "units/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1, 15",
        reducible: false,
        note: "Discontinue after Cycle 2 if interim PET negative. Premedicate with hydrocortisone 100 mg IV. Max cumulative 270 units. Risk of severe pulmonary toxicity."
      },
      {
        name: "vinBLAStine",
        dose: 6,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1, 15",
        reducible: true,
        note: "Reduce for neuropathy: 67% abnormal buttoning/writing; 50% moderate motor neuropathy; omit severe motor neuropathy. Reduce for bilirubin: 50% if 25–50; 25% if >50."
      },
      {
        name: "dacarbazine",
        dose: 375,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1, 15",
        reducible: true,
        note: "Infuse in 500 mL NS or D5W over 1–2 hours. If unavailable, may substitute cyclophosphamide 375 mg/m² (CAP approval required)."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "platelets", "total bilirubin", "ALT", "creatinine", "HBsAg", "HBcoreAb", "HBsAb"],
      cycle: ["CBC & Diff", "platelets"],
      conditional: [
        { label: "If clinically indicated, before each cycle", tests: ["total bilirubin", "ALT", "creatinine"] },
        { label: "After Cycle 2 (all patients)", tests: ["PET scan (ideally Day 21–28 of Cycle 2)"] }
      ]
    }
  },
  {
    key: "LY-LYACAL",
    cat: "Lymphoma",
    bcc: true,
    name: "LYACAL — Acalabrutinib [CLL/SLL]",
    cycle: null,
    notes: "Relapsed/refractory CLL or SLL after ≥1 prior systemic therapy. Continuous oral treatment until disease progression or unacceptable toxicity. Dose modification sequence: 1st–2nd occurrence restart at 100 mg BID; 3rd occurrence restart at 100 mg once daily; 4th occurrence discontinue. Hold for Grade 4 neutropenia (ANC <0.5 x10⁹/L) lasting >7 days until ANC ≥1.5; hold Grade 4 or Grade 3 + bleeding thrombocytopenia until platelets ≥75. No dose adjustment in mild/moderate hepatic or renal impairment; avoid in severe hepatic impairment (Child-Pugh C or bili >3×ULN). Strong/moderate CYP3A4 inhibitors or inducers: avoid concomitant use if possible.",
    drugs: [
      {
        name: "acalabrutinib",
        dose: 100,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Twice daily, continuously",
        reducible: true,
        note: "Reduce to 100 mg once daily at 3rd toxicity occurrence; discontinue at 4th. Hold 3–7 days pre/post surgery."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "total bilirubin", "ALT", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff", "platelets", "total bilirubin", "ALT", "blood pressure"],
      conditional: [
        { label: "If clinically indicated", tests: ["creatinine", "PT", "PTT", "INR", "ECG"] }
      ]
    }
  },
  {
    key: "LY-LYALEM",
    cat: "Lymphoma",
    bcc: true,
    name: "LYALEM — Alemtuzumab [B-CLL / T-PLL]",
    cycle: 7,
    notes: "SC or IV alemtuzumab for fludarabine-refractory B-CLL; IV alemtuzumab for previously untreated T-PLL. Dosed three times weekly (Mon/Wed/Fri) for up to 12 weeks (1 week = 1 cycle). Week 1 dose escalation: 3–10–30 mg. Subsequent weeks 30–30–30 mg/dose (max 90 mg/week). If interrupted >7 days, restart at 3 mg and re-escalate. Alemtuzumab no longer commercially available; must apply via Clinigen MabCampath CDP. Haematological dose modification: hold for ANC <0.25 or plt <25; resume at same dose (1st occurrence), 10 mg max (2nd occurrence); discontinue at 3rd occurrence. Permanently discontinue for autoimmune hemolytic anemia or ITP.",
    drugs: [
      {
        name: "alemtuzumab",
        dose: 30,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "SC or IV",
        days: "Three times weekly (Mon/Wed/Fri); escalate Wk 1: 3→10→30 mg",
        reducible: false,
        note: "SC preferred (fewer systemic reactions). IV: dilute in 100 mL NS over 2 hours. New vial: 30 mg/mL (1 mL = 30 mg). Max 30 mg/dose; hold and re-escalate if interrupted >7 days."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "total bilirubin", "ALT", "HIV serology", "CMV serology", "Varicella serology", "HSV serology", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff", "CMV-DNA (PCR)"],
      conditional: [
        { label: "Before each treatment if cytopenias develop", tests: ["CBC & Diff"] },
        { label: "If clinically indicated", tests: ["HBV viral load", "ALT"] }
      ]
    }
  },
  {
    key: "LY-LYALIT",
    cat: "Lymphoma",
    bcc: true,
    name: "LYALIT — Alitretinoin [Cutaneous T-Cell Lymphoma]",
    cycle: 28,
    notes: "Cutaneous T-cell lymphoma (mycosis fungoides/Sézary syndrome) not responsive to topical steroids, mechlorethamine, or phototherapy. Continuous PO therapy until disease progression. Dose reduction if required: 10 mg once daily. Known teratogen — TOCTINO Pregnancy Prevention Program required for females of childbearing potential (two pregnancy tests ≥3 weeks apart at baseline; weekly pregnancy tests x4 weeks in Cycle 1; then prior to each cycle; and 5 weeks after treatment end).",
    drugs: [
      {
        name: "alitretinoin",
        dose: 30,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Once daily, continuously",
        reducible: true,
        note: "Reduce to 10 mg once daily if required. Known teratogen — TOCTINO Pregnancy Prevention Program mandatory for females of childbearing potential.",
        levels: [10]
      }
    ],
    labs: {
      baseline: ["cholesterol", "triglycerides", "TSH", "ALT", "HBsAg", "HBsAb", "HBcoreAb"],
      conditional: [
        { label: "If clinically indicated", tests: ["cholesterol", "triglycerides", "TSH", "ALT", "lipase"] },
        { label: "Baseline (females of childbearing potential): two tests ≥3 wk apart; 2nd within 11 days of starting", tests: ["HCG quantitative (blood)"] },
        { label: "Weekly x4 weeks during Cycle 1 (females of childbearing potential)", tests: ["HCG quantitative (blood)"] },
        { label: "Prior to each cycle (females of childbearing potential)", tests: ["HCG quantitative (blood)"] },
        { label: "5 weeks after end of treatment (females of childbearing potential)", tests: ["HCG quantitative (blood)"] }
      ]
    }
  },
  {
    key: "LY-LYASPMEDEX",
    cat: "Lymphoma",
    bcc: true,
    name: "LYASPMEDEX — Pegaspargase + Methotrexate + Dexamethasone [NK/T-Cell Lymphoma]",
    cycle: 21,
    notes: "Relapsed/refractory NK/T-cell lymphoma (nasal-type) when SMILE is too toxic. Repeat every 21 days x3 cycles. Methotrexate 3 g/m² must be given in hospital with rapid methotrexate level reporting. Leucovorin rescue 25 mg q6h IV x4 doses then PO starting exactly 24 hours after start of MTX infusion; continue until MTX level <0.1 µmol/L. Alkalinise urine (pH >7) with IV sodium bicarbonate before MTX. Methotrexate dose modifications: 75% if bilirubin 50–85 µmol/L; omit if >85; omit if third-space fluids; reduce to 80% for Grade 3–4 mucositis. Pegaspargase: standard 2500 units/m²; reduce to 1500 units/m² for older/less fit. Pegaspargase held/discontinued per toxicity table (pancreatitis, fibrinogen <0.5 g/L with bleeding, CNS hemorrhage). Filgrastim from Day 6 until ANC >1.0 x10⁹/L.",
    drugs: [
      {
        name: "methoTREXate",
        dose: 3000,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "Infuse in 1000 mL NS over 6 hours. Alkalinise urine to pH >7 before starting. Leucovorin rescue 25 mg q6h starting 24 h after infusion start. Monitor MTX levels daily from Day 3 until <0.1 µmol/L."
      },
      {
        name: "leucovorin",
        dose: 25,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "IV then PO",
        days: "Starting exactly 24 h after MTX start: q6h x4 doses IV, then PO until MTX <0.1 µmol/L",
        reducible: false,
        note: "IV: 50 mL NS over 15 minutes. May increase dose based on Day 3 MTX level and Bleyer diagram."
      },
      {
        name: "dexamethasone",
        dose: 40,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1–4",
        reducible: false,
        note: "Administered 30 minutes before chemotherapy."
      },
      {
        name: "pegaspargase",
        dose: 2500,
        unit: "units/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV or IM",
        days: "Day 2",
        reducible: true,
        note: "Use 1500 units/m² for older/less fit patients. IV preferred (faster peak, less painful). Vitals monitoring required before, during, and 1 h post-dose. Manage per fibrinogen/toxicity table."
      },
      {
        name: "filgrastim",
        dose: 5,
        unit: "mcg/kg",
        basis: "weight",
        max: null,
        weightCap: null,
        route: "SC",
        days: "Daily from Day 6 until ANC >1.0 x10⁹/L (at least 24 h after chemo end)",
        reducible: false,
        note: "Round to nearest prefilled syringe: 300 mcg (≤75 kg), 480 mcg (>75 kg), 600 mcg (>110 kg)."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "electrolytes", "phosphate", "albumin", "bilirubin (direct & indirect)", "ALT", "alkaline phosphatase", "GGT", "LDH", "urine pH", "triglycerides", "amylase", "lipase", "random glucose", "uric acid", "EBV DNA load", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff", "creatinine", "electrolytes", "phosphate", "albumin", "bilirubin (direct & indirect)", "ALT", "alkaline phosphatase", "GGT", "LDH", "urine pH", "triglycerides", "amylase", "lipase", "random glucose", "uric acid", "EBV DNA load", "INR", "PT", "PTT", "fibrinogen", "antithrombin"],
      conditional: [
        { label: "Daily (during treatment)", tests: ["CBC & Diff", "creatinine", "electrolytes"] },
        { label: "Urine pH: immediately before MTX and every 6 hours during infusion", tests: ["urine pH"] },
        { label: "MTX levels: from hour 48 (Day 3 morning) then daily until <0.1 µmol/L", tests: ["methotrexate level"] },
        { label: "Every Mon & Thu (for pegaspargase cycles)", tests: ["ALT", "alkaline phosphatase", "GGT", "bilirubin (direct & indirect)", "amylase", "lipase", "random glucose"] },
        { label: "If clinically indicated post-MTX", tests: ["ALT", "bilirubin", "alkaline phosphatase", "LDH", "GGT"] }
      ]
    }
  },
  {
    key: "LY-LYAVDBV",
    cat: "Lymphoma",
    bcc: true,
    name: "LYAVDBV — AVD + Brentuximab Vedotin [Hodgkin Lymphoma]",
    cycle: 28,
    notes: "Previously untreated Stage III or IV classical Hodgkin lymphoma. Repeat every 28 days x6 cycles. Filgrastim mandatory primary prophylaxis. PET scan after Cycle 2 to assess response. BV dose capped at weight 100 kg; select dose per dose-banding table (max 120 mg). BV dose reduction to 0.9 mg/kg for Grade 2 peripheral neuropathy; hold for Grade 3 PN until ≤Grade 2 then reduce to 0.9 mg/kg; if already at 0.9 mg/kg discontinue; Grade 4 discontinue. VinBLAStine PN: 67% for abnormal buttoning/writing; 50% moderate motor neuropathy; omit severe. DOXOrubicin: 50% for bilirubin 35–85; omit if >85 (substitute cyclophosphamide 375 mg/m²). Caution >60 years of age.",
    drugs: [
      {
        name: "DOXOrubicin",
        dose: 25,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1, 15",
        reducible: true,
        note: "Reduce 50% if bilirubin 35–85; omit if >85 (substitute cyclophosphamide 375 mg/m²)."
      },
      {
        name: "vinBLAStine",
        dose: 6,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1, 15",
        reducible: true,
        note: "Modify for peripheral neuropathy or bilirubin elevation. Infuse in 50 mL NS over 15 min."
      },
      {
        name: "dacarbazine",
        dose: 375,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1, 15",
        reducible: true,
        note: "Infuse in 250–500 mL NS or D5W over 1–2 hours."
      },
      {
        name: "brentuximab vedotin",
        dose: 1.2,
        unit: "mg/kg",
        basis: "weight",
        max: 120,
        weightCap: 100,
        route: "IV",
        days: "Days 1, 15",
        reducible: true,
        note: "Weight cap 100 kg (max dose 120 mg). Select dose per dose-banding table. Reduce to 0.9 mg/kg for Grade 2 PN; hold then reduce for Grade 3; discontinue Grade 4.",
        levels: [0.9]
      },
      {
        name: "filgrastim",
        dose: 5,
        unit: "mcg/kg",
        basis: "weight",
        max: null,
        weightCap: null,
        route: "SC",
        days: "Daily x5 days starting Day 7 and Day 21 (mandatory primary prophylaxis)",
        reducible: false,
        note: "300 mcg: ≤75 kg; 480 mcg: 76–110 kg; 600 mcg: >110 kg."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "total bilirubin", "ALT", "creatinine", "HBsAg", "HBcoreAb", "HBsAb"],
      cycle: ["CBC & Diff"],
      conditional: [
        { label: "If clinically indicated, before each cycle", tests: ["total bilirubin", "ALT", "creatinine"] },
        { label: "After Cycle 2", tests: ["PET scan"] }
      ]
    }
  },
  {
    key: "LY-LYAVDNIV",
    cat: "Lymphoma",
    bcc: true,
    name: "LYAVDNIV — AVD + Nivolumab [Hodgkin Lymphoma]",
    cycle: 28,
    notes: "Previously untreated Stage IIB–IV or bulky Stage II (≥10 cm) classical Hodgkin lymphoma, age ≥12 years. Up to 6 cycles. Nivolumab 3 mg/kg Days 1 and 15 (max 240 mg per dose); select dose per dose-banding table. No specific dose modifications for nivolumab; manage immune-mediated toxicities per SCIMMUNE protocol. Filgrastim added if ANC <0.6 (consider prophylaxis ≥60 years). Interim imaging after Cycle 2 (preferred) or 3; end-of-treatment PET/CT after 6 cycles. DOXOrubicin: 50% if bilirubin 35–85; omit if >85. VinBLAStine: 67%/50%/omit for neuropathy grades; 50% bili 25–50; 25% bili >50. Dacarbazine substitution with cyclophosphamide 375 mg/m² if unavailable (CAP approval).",
    drugs: [
      {
        name: "DOXOrubicin",
        dose: 25,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1, 15",
        reducible: true,
        note: "Reduce 50% if bilirubin 35–85; omit if >85 (substitute cyclophosphamide 375 mg/m²)."
      },
      {
        name: "vinBLAStine",
        dose: 6,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1, 15",
        reducible: true,
        note: "Infuse in 50 mL NS over 15 min. Neuropathy: 67% abnormal buttoning/writing; 50% moderate motor neuropathy; omit severe."
      },
      {
        name: "dacarbazine",
        dose: 375,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1, 15",
        reducible: true,
        note: "Infuse in 500 mL NS or D5W over 1–2 hours."
      },
      {
        name: "nivolumab",
        dose: 3,
        unit: "mg/kg",
        basis: "weight",
        max: 240,
        weightCap: null,
        route: "IV",
        days: "Days 1, 15",
        reducible: false,
        note: "Max 240 mg per dose. Select dose per dose-banding table. No specific dose reductions; manage immune-mediated toxicities per SCIMMUNE protocol."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "total bilirubin", "ALT", "alkaline phosphatase", "LDH", "creatinine", "sodium", "potassium", "TSH", "morning serum cortisol", "chest x-ray", "HBsAg", "HBcoreAb", "HBsAb"],
      cycle: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH"],
      conditional: [
        { label: "Baseline if clinically indicated", tests: ["BNP", "ECG", "MUGA or echocardiogram"] },
        { label: "If clinically indicated", tests: ["chest x-ray", "morning serum cortisol", "lipase", "serum or urine HCG", "Free T3", "Free T4", "serum ACTH", "testosterone", "estradiol", "FSH", "LH", "random glucose", "ECG", "MUGA", "echocardiogram", "C-reactive protein", "creatine kinase", "troponin", "BNP", "HBV viral load"] }
      ]
    }
  },
  {
    key: "LY-LYBENDO",
    cat: "Lymphoma",
    bcc: true,
    name: "LYBENDO — Bendamustine + oBINutuzumab [Follicular Lymphoma]",
    cycle: 28,
    notes: "Rituximab-refractory follicular lymphoma. INDUCTION: bendamustine 90 mg/m² Days 1–2 + oBINutuzumab 1000 mg every 28 days x6 cycles (Cycle 1: oBINutuzumab Days 1, 8, 15; Cycles 2–6: Day 1 only). MAINTENANCE: oBINutuzumab 1000 mg Day 1 every 2 months x2 years (Cycles 7–18), starting ~2 months after last induction dose. No dose reductions for oBINutuzumab (manage by rate reduction/interruption). Bendamustine: hold if ANC <0.8 or platelets <80 until recovery. Elaborate oBINutuzumab infusion rate titration schedule (start 50 mg/h Cycle 1 Day 1; may start 100 mg/h for subsequent doses if no Grade ≥2 reactions). Only one of LYBENDO/LYCHOPO/LYCVPO/LYGDPO funded per patient.",
    drugs: [
      {
        name: "bendamustine",
        dose: 90,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1 and 2 (induction cycles 1–6 only)",
        reducible: true,
        note: "Infuse in 250–500 mL NS over 1 hour. Hold if ANC <0.8 or platelets <80 x10⁹/L until recovery."
      },
      {
        name: "oBINutuzumab",
        dose: 1000,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Cycle 1: Days 1, 8, 15; Cycles 2–6: Day 1; Maintenance (Cycles 7–18): Day 1 q2months",
        reducible: false,
        note: "Infuse in 250 mL NS. Cycle 1 Day 1: start 50 mg/h; escalate q30 min to max 400 mg/h. Subsequent doses: may start 100 mg/h if prior Grade ≤1 reaction. No dose reductions; manage infusion reactions by rate reduction or interruption."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "ALT", "total bilirubin", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff"],
      conditional: [
        { label: "If clinically indicated", tests: ["creatinine", "ALT", "total bilirubin", "HBV viral load"] }
      ]
    }
  },
  {
    key: "LY-LYBENDR",
    cat: "Lymphoma",
    bcc: true,
    name: "LYBENDR — Bendamustine + riTUXimab [NHL]",
    cycle: 28,
    notes: "Previously untreated or relapsed/refractory indolent NHL (follicular, marginal zone, lymphoplasmacytic) or mantle cell lymphoma. Repeat every 28 days; maximum 6 cycles. First dose riTUXimab must be IV; subsequent doses may be SC (1400 mg fixed). RiTUXimab dose 375 mg/m² (IV) or 1400 mg (SC fixed dose); select IV dose per dose-banding table. IV riTUXimab: first dose initiate at 50 mg/h, increase by 50 mg/h q30 min to 400 mg/h; subsequent doses: 50 mL over 30 min then remaining over 60 min (total 90 min). Bendamustine hold if ANC <1.0 or platelets <75. Caution if CrCl <40 mL/min or significant hepatic dysfunction.",
    drugs: [
      {
        name: "bendamustine",
        dose: 90,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1 and 2",
        reducible: true,
        note: "Infuse in 250–500 mL NS over 60 min. Hold Day 1 if ANC <1.0 or platelets <75 x10⁹/L."
      },
      {
        name: "riTUXimab",
        dose: 375,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 or 2 (not later than 72 h after Day 1 of bendamustine)",
        reducible: false,
        note: "First dose IV mandatory; subsequent doses may be SC 1400 mg fixed. IV: start 50 mg/h; increase q30 min to 400 mg/h; subsequent doses 90 min. Select IV dose per dose-banding table."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "ALT", "total bilirubin", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff"],
      conditional: [
        { label: "If clinically indicated", tests: ["creatinine", "ALT", "total bilirubin", "HBV viral load"] }
      ]
    }
  },
  {
    key: "LY-LYBEND",
    cat: "Lymphoma",
    bcc: true,
    name: "LYBEND — Bendamustine [NHL]",
    cycle: 28,
    notes: "Relapsed or refractory indolent NHL (follicular, marginal zone, lymphoplasmacytic) or mantle cell lymphoma. Repeat every 28 days; maximum 6 cycles. May escalate dose to 120 mg/m². Hold Day 1 if ANC <1.0 or platelets <75. Caution if CrCl <40 mL/min or significant hepatic dysfunction. No dose modifications table beyond hematological hold.",
    drugs: [
      {
        name: "bendamustine",
        dose: 90,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1 and 2",
        reducible: true,
        note: "Infuse in 250–500 mL NS over 1 hour. May escalate to 120 mg/m². Hold if ANC <1.0 or platelets <75 x10⁹/L."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "ALT", "total bilirubin", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff", "platelets"],
      conditional: [
        { label: "If clinically indicated", tests: ["creatinine", "ALT", "total bilirubin", "HBV viral load"] }
      ]
    }
  },
  {
    key: "LY-LYBRENTUX",
    cat: "Lymphoma",
    bcc: true,
    name: "LYBRENTUX — Brentuximab Vedotin [Hodgkin Lymphoma / ALCL / CD30+ CTCL]",
    cycle: 21,
    notes: "Relapsed/refractory Hodgkin lymphoma (post-ASCT or transplant-ineligible post-ABVD); relapsed/refractory systemic ALCL; primary cutaneous ALCL after ≥1 prior therapy; CD30+ mycosis fungoides (≥10% CD30+) after ≥1 prior systemic therapy. Repeat every 21 days; maximum 16 cycles. Dose capped at weight 100 kg (max 180 mg); select dose per dose-banding table. Peripheral neuropathy: Grade 2–3 hold until ≤Grade 1 then reduce to 1.2 mg/kg; Grade 4 discontinue. Hold if ANC <0.6 or platelets <50 until recovery.",
    drugs: [
      {
        name: "brentuximab vedotin",
        dose: 1.8,
        unit: "mg/kg",
        basis: "weight",
        max: 180,
        weightCap: 100,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "Weight cap 100 kg (max dose 180 mg). Select dose per dose-banding table. Reduce to 1.2 mg/kg for Grade 2–3 PN after recovery to Grade ≤1; discontinue Grade 4.",
        levels: [1.2]
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "total bilirubin", "ALT", "HBsAg", "HBcoreAb", "HBsAb"],
      cycle: ["CBC & Diff"],
      conditional: [
        { label: "If clinically indicated", tests: ["creatinine", "ALT", "total bilirubin", "HBV viral load"] }
      ]
    }
  },
  {
    key: "LY-LYBV",
    cat: "Lymphoma",
    bcc: true,
    name: "LYBV — Brentuximab Vedotin Consolidation post-ASCT [Hodgkin Lymphoma]",
    cycle: 21,
    notes: "Consolidation therapy for Hodgkin lymphoma after ABVD and autologous stem cell transplant. Start ~6 weeks post-ASCT. Repeat every 21 days for 16 cycles. Dose capped at weight 100 kg (max 180 mg); select dose per dose-banding table. Peripheral neuropathy: Grade 2–3 hold until ≤Grade 1 then reduce to 1.2 mg/kg; Grade 4 discontinue. Hold if ANC <0.6 or platelets <50 until recovery.",
    drugs: [
      {
        name: "brentuximab vedotin",
        dose: 1.8,
        unit: "mg/kg",
        basis: "weight",
        max: 180,
        weightCap: 100,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "Weight cap 100 kg (max dose 180 mg). Select dose per dose-banding table. Start ~6 weeks post-ASCT. Reduce to 1.2 mg/kg for Grade 2–3 PN after recovery; discontinue Grade 4.",
        levels: [1.2]
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "total bilirubin", "ALT", "HBsAg", "HBcoreAb", "HBsAb"],
      cycle: ["CBC & Diff"],
      conditional: [
        { label: "If clinically indicated", tests: ["creatinine", "ALT", "total bilirubin", "HBV viral load"] }
      ]
    }
  },
  {
    key: "LY-LYBVAVDBV",
    cat: "Lymphoma",
    bcc: true,
    name: "LYBVAVDBV — Sequential BV → AVD → BV [Hodgkin Lymphoma, ≥60 years]",
    cycle: null,
    notes: "Previously untreated Stage IV classical Hodgkin lymphoma in patients ≥60 years not suitable for LYAVDBV. Sequential 3-phase regimen: Cycles 1–2 brentuximab vedotin (21-day cycles) → Cycles 3–8 DOXOrubicin + vinBLAStine + dacarbazine + filgrastim (28-day cycles) → Cycles 9–12 brentuximab vedotin (21-day cycles). BV capped at 100 kg (max 180 mg); select dose per dose-banding table. Filgrastim mandatory with AVD cycles. PET recommended at staging, after Cycle 5 (3rd AVD cycle), and end of treatment. BV PN: hold Grade 2–3 until ≤Grade 1 then reduce to 1.2 mg/kg; discontinue Grade 4. VinBLAStine PN: 67%/50%/omit. DOXOrubicin: 50% bilirubin 36–85; omit >85.",
    drugs: [
      {
        name: "brentuximab vedotin",
        dose: 1.8,
        unit: "mg/kg",
        basis: "weight",
        max: 180,
        weightCap: 100,
        route: "IV",
        days: "Day 1 (Cycles 1–2 and 9–12, every 21 days)",
        reducible: true,
        note: "Weight cap 100 kg (max 180 mg). Select dose per dose-banding table. Reduce to 1.2 mg/kg for Grade 2–3 PN after recovery; discontinue Grade 4.",
        levels: [1.2]
      },
      {
        name: "DOXOrubicin",
        dose: 25,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1, 15 (Cycles 3–8, every 28 days)",
        reducible: true,
        note: "Reduce 50% if bilirubin 36–85; omit if >85 (substitute cyclophosphamide 375 mg/m²)."
      },
      {
        name: "vinBLAStine",
        dose: 6,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1, 15 (Cycles 3–8, every 28 days)",
        reducible: true,
        note: "Infuse in 50 mL NS over 15 min. Neuropathy: 67%/50%/omit. Bilirubin: 50% if 25–50; 25% if >50."
      },
      {
        name: "dacarbazine",
        dose: 375,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1, 15 (Cycles 3–8, every 28 days)",
        reducible: true,
        note: "Infuse in 250–500 mL NS or D5W over 1–2 hours."
      },
      {
        name: "filgrastim",
        dose: 5,
        unit: "mcg/kg",
        basis: "weight",
        max: null,
        weightCap: null,
        route: "SC",
        days: "Daily x5 days starting Day 7 and Day 21 (mandatory, AVD cycles 3–8 only)",
        reducible: false,
        note: "300 mcg: ≤75 kg; 480 mcg: 76–110 kg; 600 mcg: >110 kg."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "total bilirubin", "ALT", "creatinine", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff"],
      conditional: [
        { label: "If clinically indicated, before each cycle", tests: ["creatinine", "total bilirubin", "ALT"] }
      ]
    }
  },
  {
    key: "LY-LYCDA",
    cat: "Lymphoma",
    bcc: true,
    name: "LYCDA — Cladribine [Hairy Cell Leukemia]",
    cycle: null,
    notes: "Hairy cell leukemia. Cladribine 0.14 mg/kg/day IV over 2 hours or SC daily for 5 consecutive days. Usually given only once. No dose reduction for hematologic counts for first cycle. Renal dose adjustment: if CrCl ≥70 mL/min → 5 days; CrCl 30–70 → 3 days; CrCl <30 → do not use. Creatinine clearance should be measured/calculated for all patients with creatinine above normal or age >60 years. If repeated, give after blood count recovery. Patients require irradiated blood products during and after treatment. VZV prophylaxis: valACYclovir 500 mg daily during treatment and 6 months afterwards.",
    drugs: [
      {
        name: "cladribine",
        dose: 0.14,
        unit: "mg/kg",
        basis: "weight",
        max: null,
        weightCap: null,
        route: "IV or SC",
        days: "Daily x5 consecutive days (reduce to 3 days if CrCl 30–70; do not use if CrCl <30)",
        reducible: true,
        note: "IV: dilute in 500 mL NS over 2 hours. SC: multiple syringes may be required (1 mg/mL concentration). No dose reduction for hematologic counts on first cycle. Do not use if CrCl <30 mL/min."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "total bilirubin", "ALT", "HBsAg", "HBsAb", "HBcoreAb"],
      conditional: [
        { label: "If clinically indicated", tests: ["HBV viral load", "ALT"] }
      ]
    }
  },

{
    key: "LY-LYCHLOR",
    cat: "Lymphoma",
    bcc: true,
    name: "LYCHLOR — Chlorambucil [Indolent Lymphoma / CLL]",
    cycle: null,
    notes: "Three schedules available. Schedule 1: 0.4 mg/kg on Day 1 every 2 weeks, increase by 0.1 mg/kg if ANC >3.5, max 0.8 mg/kg. Schedule 2: 0.2 mg/kg/day x 21 days, repeat every 6 weeks. Schedule 3: 0.1 mg/kg/day continuously. All schedules: round dose to nearest 2 mg, administer on empty stomach. Adjust to induce response without ANC <1.2. Continue until 2 months after maximum response (max 1 year). High risk of hepatitis B reactivation — check HBsAg/HBcoreAb.",
    drugs: [
      {
        name: "Chlorambucil",
        dose: 0.1,
        unit: "mg/kg",
        basis: "weight",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Daily (Schedule 3 continuous; see notes for Schedules 1 & 2)",
        reducible: true,
        note: "Round dose to nearest 2 mg. Administer on empty stomach. Target response without ANC <1.2 x10⁹/L.",
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "total bilirubin", "ALT", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff"],
      conditional: [
        { label: "If clinically indicated", tests: ["HBV viral load", "ALT"] }
      ]
    }
  },
  {
    key: "LY-LYCHLRR",
    cat: "Lymphoma",
    bcc: true,
    name: "LYCHLRR — Chlorambucil + riTUXimab [Indolent B-cell Lymphoma]",
    cycle: 28,
    notes: "Two chlorambucil schedules available. Schedule 1 (preferred): 0.4 mg/kg on Days 1 and 15, increase by 0.1 mg/kg if ANC >3.5, max 0.8 mg/kg. Schedule 2: 10 mg/m² Days 1–7. Round chlorambucil dose to nearest 2 mg, administer on empty stomach. riTUXimab Cycle 1: 375 mg/m² IV; Cycles 2+: 375 mg/m² IV or 1400 mg SC (after first IV dose tolerated). Repeat every 28 days x 6 cycles. Additional 6 cycles chlorambucil alone may be considered. Very high risk of hepatitis B reactivation.",
    drugs: [
      {
        name: "Chlorambucil",
        dose: 0.4,
        unit: "mg/kg",
        basis: "weight",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1 and 15 (Schedule 1); or 10 mg/m² Days 1–7 (Schedule 2)",
        reducible: true,
        note: "Round to nearest 2 mg. Administer on empty stomach. Increase by 0.1 mg/kg if ANC >3.5; max 0.8 mg/kg."
      },
      {
        name: "riTUXimab",
        dose: 375,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 or 2 (within 72h of Day 1 chlorambucil)",
        reducible: false,
        note: "Cycle 1: 375 mg/m² IV. Cycles 2+: 375 mg/m² IV or 1400 mg SC fixed dose (after first IV tolerated). Dose banding applies."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff"],
      conditional: [
        { label: "If clinically indicated", tests: ["HBV viral load", "ALT"] },
        { label: "Reassess after Cycles 4 and 6", tests: ["Disease reassessment (all sites)"] }
      ]
    }
  },
  {
    key: "LY-LYCHOPO",
    cat: "Lymphoma",
    bcc: true,
    name: "LYCHOPO — CHP + oBINutuzumab [Rituximab-Refractory Follicular Lymphoma]",
    cycle: 21,
    notes: "Induction (Cycles 1–6, every 21 days): predniSONE + DOXOrubicin + vinCRIStine + CYCLOphosphamide + oBINutuzumab. Cycle 1: oBINutuzumab on Days 2, 8, and 15. Cycles 2–6: oBINutuzumab on Day 1 only. Maintenance (Cycles 7–18, every 2 months): oBINutuzumab 1000 mg monotherapy for up to 2 years. Elderly (>75y): CYCLOphosphamide and DOXOrubicin at 75% for Cycle 1. No dose reductions for oBINutuzumab. Very high risk of hepatitis B reactivation.",
    drugs: [
      {
        name: "predniSONE",
        dose: 45,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1–5",
        reducible: true,
        note: "Round dose to nearest 25 mg. Take in am with food."
      },
      {
        name: "DOXOrubicin",
        dose: 50,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "IV push. Cardiotoxic; consider etoposide substitution if cardiac dysfunction."
      },
      {
        name: "vinCRIStine",
        dose: 1.4,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "No cap on dose. IV in 25–50 mL NS over 15 minutes.",
        nocap: true
      },
      {
        name: "CYCLOphosphamide",
        dose: 750,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "IV in 100–250 mL NS over 20–60 minutes."
      },
      {
        name: "oBINutuzumab",
        dose: 1000,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Cycle 1: Days 2, 8, 15; Cycles 2–6: Day 1; Maintenance: Day 1 every 2 months",
        reducible: false,
        note: "No dose reductions; manage with infusion rate adjustments. IV in 250 mL NS."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "ALT", "total bilirubin", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff"],
      conditional: [
        { label: "If clinically indicated", tests: ["creatinine", "ALT", "total bilirubin", "HBV viral load"] }
      ]
    }
  },
  {
    key: "LY-LYCHOPRMTX",
    cat: "Lymphoma",
    bcc: true,
    name: "LYCHOPRMTX — CHOP-R + High-Dose methoTREXate [DLBCL CNS Prophylaxis]",
    cycle: 21,
    notes: "CHOPR every 21 days x 6 cycles. High-dose methoTREXate (3.5 g/m²) given on Day 10 with Cycles 2, 4, and 6, plus a 4th dose 2–3 weeks after Cycle 6 (may be adjusted by physician). Requires GFR/CrCl ≥60 mL/min, no third-space fluids, and IV alkalinization to urine pH ≥7 starting 4–12h before methoTREXate. leucovorin rescue starts 24h after methoTREXate. Elderly (>75y): CYCLOphosphamide and DOXOrubicin at 75% Cycle 1. One staff physician signature required for methoTREXate orders. Very high risk hepatitis B reactivation.",
    drugs: [
      {
        name: "DOXOrubicin",
        dose: 50,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "IV push. Cardiotoxic; etoposide substitution if cardiac dysfunction."
      },
      {
        name: "vinCRIStine",
        dose: 1.4,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "No cap on dose. IV in 25–50 mL NS over 15 minutes.",
        nocap: true
      },
      {
        name: "CYCLOphosphamide",
        dose: 750,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "IV in 100–250 mL NS over 20–60 minutes."
      },
      {
        name: "predniSONE",
        dose: 45,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1–5",
        reducible: true,
        note: "Round to nearest 25 mg. Take in morning with food."
      },
      {
        name: "riTUXimab",
        dose: 375,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 or 2 (within 72h of CHOP); or 1400 mg SC after first IV tolerated",
        reducible: false,
        note: "Dose banding applies. First dose IV; subsequent SC option available."
      },
      {
        name: "methoTREXate",
        dose: 3.5,
        unit: "g/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 10 of Cycles 2, 4, 6 (and 4th dose 2–3 weeks after Cycle 6)",
        reducible: true,
        note: "IV in 1000 mL NS over 4 hours. Requires urine alkalinization, leucovorin rescue starting 24h post-infusion. Requires GFR/CrCl ≥60 mL/min.",
        levels: [2.8]
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "sodium", "potassium", "ALT", "total bilirubin", "alkaline phosphatase", "chest x-ray", "LDH", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff"],
      conditional: [
        { label: "Prior to each methotrexate treatment", tests: ["CBC & Diff", "creatinine", "sodium", "potassium", "ALT", "total bilirubin", "alkaline phosphatase", "LDH", "chest x-ray"] },
        { label: "During methotrexate: q6h", tests: ["urine pH"] },
        { label: "During methotrexate: daily morning", tests: ["creatinine", "sodium", "potassium"] },
        { label: "From Day 11 post-methotrexate if clinically indicated", tests: ["ALT", "total bilirubin", "alkaline phosphatase", "LDH", "GGT"] },
        { label: "At hour 48 from methotrexate start, then daily", tests: ["methotrexate level (until <0.1 µmol/L)"] },
        { label: "If clinically indicated", tests: ["total bilirubin", "ALT", "LDH", "creatinine", "HBV viral load"] }
      ]
    }
  },
  {
    key: "LY-LYCHOPR",
    cat: "Lymphoma",
    bcc: true,
    name: "LYCHOPR — CHOP-R [DLBCL / Mantle Cell / Follicular Grade 3B / Transformed]",
    cycle: 21,
    notes: "CHOP-R every 21 days. Limited stage: 3 cycles then radiation. Advanced stage: 6 cycles (may extend to 8). Discontinue if no response after 2 cycles. riTUXimab given once per CHOP cycle (not weekly). Elderly (>75y): CYCLOphosphamide and DOXOrubicin at 75% Cycle 1. Very high risk of hepatitis B reactivation. Also used as Cycles 1, 3, and 5 of LYMCALT protocol.",
    drugs: [
      {
        name: "DOXOrubicin",
        dose: 50,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "IV push. Cardiotoxic; etoposide substitution if cardiac dysfunction."
      },
      {
        name: "vinCRIStine",
        dose: 1.4,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "No cap on dose. IV in 25–50 mL NS over 15 minutes.",
        nocap: true
      },
      {
        name: "CYCLOphosphamide",
        dose: 750,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "IV in 100–250 mL NS over 20–60 minutes."
      },
      {
        name: "predniSONE",
        dose: 45,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1–5",
        reducible: true,
        note: "Round to nearest 25 mg. Take in morning with food on day of riTUXimab infusion."
      },
      {
        name: "riTUXimab",
        dose: 375,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 or 2 (within 72h of CHOP); or 1400 mg SC after first IV tolerated",
        reducible: false,
        note: "Dose banding applies. First dose always IV; subsequent SC option. Given once per cycle, not weekly."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "ALT", "total bilirubin", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff", "creatinine", "ALT", "total bilirubin"],
      conditional: [
        { label: "Baseline if clinically indicated", tests: ["alkaline phosphatase", "sodium", "potassium", "magnesium", "calcium"] },
        { label: "If clinically indicated", tests: ["alkaline phosphatase", "sodium", "potassium", "magnesium", "calcium", "LDH", "HBV viral load"] },
        { label: "After Cycles 4 and 6", tests: ["Disease reassessment (all sites)"] }
      ]
    }
  },
  {
    key: "LY-LYCHOP",
    cat: "Lymphoma",
    bcc: true,
    name: "LYCHOP — CHOP [Aggressive Lymphoma (non-DLBCL or without rituximab)]",
    cycle: 21,
    notes: "CHOP every 21 days. Stage IA/IIA with bulk <10 cm radio-encompassable: 3 cycles then radiation. All other stages: 6–8 cycles (minimum 6, 2 cycles post maximum response). Discontinue if no response after 2 cycles. Elderly (>75y): CYCLOphosphamide and DOXOrubicin at 75% Cycle 1. High risk of hepatitis B reactivation. Previously untreated advanced-stage DLBCL should use LYCHOPR.",
    drugs: [
      {
        name: "DOXOrubicin",
        dose: 50,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "IV push. Cardiotoxic; etoposide substitution if cardiac dysfunction."
      },
      {
        name: "vinCRIStine",
        dose: 1.4,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "No cap on dose. IV in 25–50 mL NS over 15 minutes.",
        nocap: true
      },
      {
        name: "CYCLOphosphamide",
        dose: 750,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "IV in 100–250 mL NS over 20–60 minutes."
      },
      {
        name: "predniSONE",
        dose: 45,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1–5",
        reducible: true,
        note: "Round to nearest 25 mg. Take in am with food."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "total bilirubin", "ALT", "LDH", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff"],
      conditional: [
        { label: "If elevated at baseline or clinically indicated", tests: ["total bilirubin"] },
        { label: "If clinically indicated", tests: ["HBV viral load", "ALT"] },
        { label: "After Cycles 4 and 6 (if planned x6–8 cycles)", tests: ["Disease reassessment (all sites)"] }
      ]
    }
  },
  {
    key: "LY-LYCHPBV",
    cat: "Lymphoma",
    bcc: true,
    name: "LYCHPBV — CHP + Brentuximab Vedotin [CD30+ PTCL]",
    cycle: 21,
    notes: "CHP (CYCLOphosphamide, DOXOrubicin, predniSONE) plus brentuximab vedotin every 21 days x 6 cycles. Filgrastim mandatory for primary neutropenia prophylaxis (G-CSF Days 7–11). Indicated for CD30+ systemic ALCL, PTCL-NOS, or angioimmunoblastic T-cell lymphoma. Elderly (>75y): CYCLOphosphamide and DOXOrubicin at 75% Cycle 1. Weight >100 kg: calculate brentuximab vedotin based on 100 kg. High risk hepatitis B reactivation.",
    drugs: [
      {
        name: "DOXOrubicin",
        dose: 50,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "IV push. Cardiotoxic; etoposide substitution if cardiac dysfunction."
      },
      {
        name: "CYCLOphosphamide",
        dose: 750,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "IV in 100–250 mL NS over 20–60 minutes."
      },
      {
        name: "predniSONE",
        dose: 45,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1–5",
        reducible: true,
        note: "Take in am with food."
      },
      {
        name: "brentuximab vedotin",
        dose: 1.8,
        unit: "mg/kg",
        basis: "weight",
        max: 180,
        weightCap: 100,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "IV in 100 mL NS over 30 minutes. Dose banding applies. Cap weight at 100 kg.",
        levels: [1.2]
      },
      {
        name: "filgrastim",
        dose: 5,
        unit: "mcg/kg",
        basis: "weight",
        max: null,
        weightCap: null,
        route: "SC",
        days: "Days 7–11 (5 days)",
        reducible: false,
        note: "Mandatory primary prophylaxis. 300 mcg (≤75 kg), 480 mcg (76–110 kg), 600 mcg (>110 kg)."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "total bilirubin", "ALT", "creatinine", "LDH", "HBsAg", "HBcoreAb"],
      cycle: ["CBC & Diff"],
      conditional: [
        { label: "If elevated at baseline", tests: ["total bilirubin"] },
        { label: "If clinically indicated", tests: ["creatinine", "ALT", "total bilirubin", "LDH", "HBV viral load"] }
      ]
    }
  },
  {
    key: "LY-LYCLADR",
    cat: "Lymphoma",
    bcc: true,
    name: "LYCLADR — cladRIBine + riTUXimab [Hairy Cell Leukemia]",
    cycle: null,
    notes: "cladRIBine given Days 1–5 (Week 1 only) by IV infusion or SC. riTUXimab given weekly x 8 doses (Week 1 Day 1 through Week 8 Day 1). No dose reduction for hematologic toxicity; delay may be considered for Grade 3–4. Renal adjustment for cladRIBine: CrCl ≥70: 0.15 mg/kg x5 days; CrCl 30–69: 0.15 mg/kg x3 days; CrCl <30: do not use. Irradiated blood products required during cladRIBine. Antiviral prophylaxis (valACYclovir) recommended. Very high risk hepatitis B reactivation.",
    drugs: [
      {
        name: "cladRIBine",
        dose: 0.15,
        unit: "mg/kg",
        basis: "weight",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1–5 (Week 1 only)",
        reducible: true,
        note: "IV in 500 mL NS over 2 hours daily x 5 days, or SC daily x 5 days. Reduce to 3 days if CrCl 30–69 mL/min. Do not use if CrCl <30 mL/min."
      },
      {
        name: "riTUXimab",
        dose: 375,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 of each week (Weeks 1–8; 8 total doses)",
        reducible: false,
        note: "Week 1: 375 mg/m² IV. Weeks 2–8: 375 mg/m² IV or 1400 mg SC (after first IV tolerated). Dose banding applies."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "total bilirubin", "ALT", "LDH", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff"],
      conditional: [
        { label: "If clinically indicated", tests: ["HBV viral load", "ALT"] }
      ]
    }
  },
  {
    key: "LY-LYCLLBENDR",
    cat: "Lymphoma",
    bcc: true,
    name: "LYCLLBENDR — Bendamustine + riTUXimab [Relapsed/Refractory CLL/SLL]",
    cycle: 28,
    notes: "Cycle 1: bendamustine 70 mg/m² Days 1–2 + riTUXimab 375 mg/m² IV. Cycles 2–6: bendamustine 70 mg/m² Days 1–2 + riTUXimab 500 mg/m² IV (or 1600 mg SC after first IV tolerated). Maximum 6 cycles. Caution if CrCl <40 mL/min or significant hepatic impairment. Bendamustine + allopurinol increases severe skin toxicity risk. Very high risk of hepatitis B reactivation.",
    drugs: [
      {
        name: "bendamustine",
        dose: 70,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1 and 2",
        reducible: true,
        note: "IV in 250–500 mL NS over 60 minutes. Cycle 1 dose 70 mg/m²; same in Cycles 2–6."
      },
      {
        name: "riTUXimab",
        dose: 375,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 or 2 (within 72h of Day 1 bendamustine)",
        reducible: false,
        note: "Cycle 1: 375 mg/m² IV. Cycles 2–6: 500 mg/m² IV or 1600 mg SC fixed dose. Dose banding applies."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "ALT", "total bilirubin", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff"],
      conditional: [
        { label: "If clinically indicated", tests: ["creatinine", "ALT", "total bilirubin", "HBV viral load"] }
      ]
    }
  },
  {
    key: "LY-LYCLLBEND",
    cat: "Lymphoma",
    bcc: true,
    name: "LYCLLBEND — Bendamustine [Relapsed CLL/SLL]",
    cycle: 28,
    notes: "Bendamustine 70 mg/m² IV on Days 1 and 2 every 28 days. May escalate to 100 mg/m² if tolerated. Maximum 6 cycles. Discontinue if definite progression. Caution if CrCl <40 mL/min or hepatic impairment (AST/ALT >2.5x ULN and bilirubin >1.5x ULN). Not for patients with 17p deletion (FISH testing required). Moderate risk of hepatitis B reactivation.",
    drugs: [
      {
        name: "bendamustine",
        dose: 70,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1 and 2",
        reducible: true,
        note: "IV in 250–500 mL NS over 1 hour. May escalate to 100 mg/m² if tolerated."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "ALT", "total bilirubin", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff"],
      conditional: [
        { label: "If clinically indicated", tests: ["creatinine", "ALT", "total bilirubin", "HBV viral load"] }
      ]
    }
  },
  {
    key: "LY-LYCLLCHLR",
    cat: "Lymphoma",
    bcc: true,
    name: "LYCLLCHLR — Chlorambucil + riTUXimab [CLL/SLL]",
    cycle: 28,
    notes: "Two chlorambucil schedules. Schedule 1 (preferred): 0.4 mg/kg Days 1 and 15, increase by 0.1 mg/kg if ANC >3.5, max 0.8 mg/kg. Schedule 2: 10 mg/m² Days 1–7. Round chlorambucil to nearest 2 mg, on empty stomach. Cycle 1: riTUXimab 375 mg/m² IV. Cycles 2+: riTUXimab 500 mg/m² IV or 1600 mg SC fixed dose (CLL formulation). Repeat every 28 days x 6 cycles. Additional 6 cycles chlorambucil alone may be considered. Very high risk of hepatitis B reactivation.",
    drugs: [
      {
        name: "Chlorambucil",
        dose: 0.4,
        unit: "mg/kg",
        basis: "weight",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1 and 15 (Schedule 1); or 10 mg/m² Days 1–7 (Schedule 2)",
        reducible: true,
        note: "Round to nearest 2 mg. Administer on empty stomach. Increase by 0.1 mg/kg if ANC >3.5; max 0.8 mg/kg."
      },
      {
        name: "riTUXimab",
        dose: 375,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 or 2 (within 72h of Day 1 chlorambucil)",
        reducible: false,
        note: "Cycle 1: 375 mg/m² IV. Cycles 2+: 500 mg/m² IV or 1600 mg SC (CLL formulation). Dose banding applies."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff"],
      conditional: [
        { label: "If clinically indicated", tests: ["HBV viral load", "ALT"] },
        { label: "Reassess after Cycles 4 and 6", tests: ["Disease reassessment (all sites)"] }
      ]
    }
  },
  {
    key: "LY-LYCLLCVPR",
    cat: "Lymphoma",
    bcc: true,
    name: "LYCLLCVPR — CVP-R [Relapsed CLL/SLL]",
    cycle: 28,
    notes: "CVP-R every 21 or 28 days (per dose modifications) x 8 cycles. CAP approval required for further cycles. Cycle 1: riTUXimab 375 mg/m² IV. Cycles 2–8: riTUXimab 500 mg/m² IV or 1600 mg SC. predniSONE 100 mg flat dose (not per m²) x 5 days. vinCRIStine no maximum dose. Very high risk of hepatitis B reactivation.",
    drugs: [
      {
        name: "vinCRIStine",
        dose: 1.4,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "No maximum dose. IV in 25–50 mL NS over 15 minutes.",
        nocap: true
      },
      {
        name: "CYCLOphosphamide",
        dose: 1000,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "IV in 100–250 mL NS over 20–60 minutes. Use 250 mL for dose >1000 mg."
      },
      {
        name: "predniSONE",
        dose: 100,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1–5",
        reducible: true,
        note: "Fixed 100 mg flat dose daily in am with food x 5 consecutive days."
      },
      {
        name: "riTUXimab",
        dose: 375,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 or 2 (within 72h of CVP)",
        reducible: false,
        note: "Cycle 1: 375 mg/m² IV. Cycles 2–8: 500 mg/m² IV or 1600 mg SC (CLL formulation). Dose banding applies."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "total bilirubin", "ALT", "LDH", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff"],
      conditional: [
        { label: "If clinically indicated", tests: ["HBV viral load", "ALT"] }
      ]
    }
  },
  {
    key: "LY-LYCLLFBR",
    cat: "Lymphoma",
    bcc: true,
    name: "LYCLLFBR — Bendamustine + riTUXimab [Previously Untreated CLL/SLL]",
    cycle: 28,
    notes: "First-line CLL/SLL for patients not fit for fludarabine-based therapy. Bendamustine 90 mg/m² Days 1–2. Cycle 1: riTUXimab 375 mg/m² IV. Cycles 2–6: riTUXimab 500 mg/m² IV or 1600 mg SC (CLL formulation). Maximum 6 cycles. Caution if CrCl <40 mL/min or significant hepatic impairment. Bendamustine + allopurinol increases severe skin toxicity risk. Very high risk of hepatitis B reactivation.",
    drugs: [
      {
        name: "bendamustine",
        dose: 90,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1 and 2",
        reducible: true,
        note: "IV in 250–500 mL NS over 60 minutes."
      },
      {
        name: "riTUXimab",
        dose: 375,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 or 2 (within 72h of Day 1 bendamustine)",
        reducible: false,
        note: "Cycle 1: 375 mg/m² IV. Cycles 2–6: 500 mg/m² IV or 1600 mg SC (CLL formulation). Dose banding applies."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "ALT", "total bilirubin", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff"],
      conditional: [
        { label: "If clinically indicated", tests: ["creatinine", "ALT", "total bilirubin", "HBV viral load"] }
      ]
    }
  },
  {
    key: "LY-LYCLLFLUDR",
    cat: "Lymphoma",
    bcc: true,
    name: "LYCLLFLUDR — Fludarabine + riTUXimab [CLL/SLL / Prolymphocytic Leukemia]",
    cycle: 28,
    notes: "Fludarabine 40 mg/m²/day PO x 5 days (or 25 mg/m²/day IV x 5 days if PO not practical). Cycle 1: riTUXimab 375 mg/m² IV. Cycle 2+: riTUXimab 500 mg/m² IV or 1600 mg SC (CLL formulation). Repeat every 28 days x 6 cycles (CAP required for further cycles). Renal adjustment: CrCl ≥70: full dose x5 days; CrCl 30–69: 50% x3 days; CrCl <30: do not use. Irradiated blood products required. Round fludarabine to nearest 10 mg. Very high risk of hepatitis B reactivation.",
    drugs: [
      {
        name: "fludarabine",
        dose: 40,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1–5",
        reducible: true,
        note: "Round to nearest 10 mg. Do not chew, break or crush tablets. If PO not practical: 25 mg/m²/day IV in 100 mL NS over 30 minutes. Renal adjustment required if CrCl <70 mL/min.",
        levels: [32]
      },
      {
        name: "riTUXimab",
        dose: 375,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 (same day as fludarabine)",
        reducible: false,
        note: "Cycle 1: 375 mg/m² IV. Cycle 2+: 500 mg/m² IV or 1600 mg SC (CLL formulation). Dose banding applies."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "total bilirubin", "ALT", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff", "creatinine"],
      conditional: [
        { label: "If clinically indicated", tests: ["HBV viral load", "ALT"] }
      ]
    }
  },
  {
    key: "LY-LYCLLIV",
    cat: "Lymphoma",
    bcc: true,
    name: "LYCLLIV — iBRUtinib + venetoCLAX [Previously Untreated CLL/SLL]",
    cycle: null,
    notes: "Fixed-duration regimen: Cycles 1–3 (28 days each): iBRUtinib 420 mg PO daily alone. Cycle 4 (35 days): iBRUtinib 420 mg daily + venetoCLAX 5-week ramp-up (20→50→100→200→400 mg/day). Cycles 5–15 (28 days each): iBRUtinib 420 mg + venetoCLAX 400 mg daily. Total 15 cycles. TLS monitoring and prophylaxis mandatory during venetoCLAX ramp-up (hydration starting 48h prior, allopurinol 72h prior). iBRUtinib dose reductions for cardiac/hematologic toxicity: 420→280→140 mg. venetoCLAX reductions per TLS/toxicity grade. Hepatitis B reactivation very high risk.",
    drugs: [
      {
        name: "iBRUtinib",
        dose: 420,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Daily (Cycles 1–15; throughout all phases)",
        reducible: true,
        note: "Once daily PO. Start on a Thursday for Cycles 1–3. Dose reductions: 420→280→140 mg for toxicity.",
        levels: [280, 140]
      },
      {
        name: "venetoCLAX",
        dose: 400,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Cycle 4 ramp-up (20→50→100→200→400 mg over 5 weeks); then 400 mg daily Cycles 5–15",
        reducible: true,
        note: "5-week ramp-up in Cycle 4: 20 mg x7d → 50 mg x7d → 100 mg x7d → 200 mg x7d → 400 mg x7d. TLS risk highest during ramp-up. Dose reductions per toxicity.",
        levels: [300, 200]
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "total bilirubin", "ALT", "PTT", "INR", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff", "total bilirubin", "ALT", "blood pressure"],
      conditional: [
        { label: "Baseline if clinically indicated", tests: ["ECG", "MUGA scan or echocardiogram"] },
        { label: "Prior to Cycles 2 and 3", tests: ["CBC & Diff", "total bilirubin", "ALT", "blood pressure"] },
        { label: "Prior to Cycle 4", tests: ["CBC & Diff", "total bilirubin", "ALT", "creatinine", "potassium", "calcium", "magnesium", "phosphate", "uric acid", "urea", "LDH", "albumin", "blood pressure"] },
        { label: "Prior to each venetoCLAX dose increment (Cycle 4 Weeks 1–5)", tests: ["CBC & Diff", "potassium", "calcium", "phosphate", "uric acid", "creatinine", "LDH", "albumin"] },
        { label: "TLS monitoring during ramp-up (per risk level — see protocol)", tests: ["potassium", "calcium", "phosphate", "uric acid", "creatinine", "LDH", "albumin"] },
        { label: "Cycle 5 onwards, prior to each cycle", tests: ["CBC & Diff", "creatinine", "total bilirubin", "ALT", "blood pressure"] },
        { label: "If clinically indicated", tests: ["PTT", "INR", "ECG", "MUGA scan or echocardiogram", "HBV viral load"] }
      ]
    }
  },

{
    key: "LY-LYCLLZANU",
    cat: "Lymphoma",
    bcc: true,
    name: "LYCLLZANU — Zanubrutinib [CLL/SLL]",
    cycle: null,
    notes: "Continuous therapy until disease progression or unacceptable toxicity. Standard dose is 160 mg PO twice daily (total 320 mg/day); may alternatively be given as 320 mg once daily. Very high risk of hepatitis B reactivation — follow SCHBV if HBsAg or HBcoreAb positive. Dose reductions apply per occurrence table: 1st → 160 mg BID or 320 mg once daily; 2nd → 160 mg once daily; 3rd → 80 mg once daily; 4th → discontinue. For severe hepatic impairment, reduce to 80 mg PO BID.",
    drugs: [
      {
        name: "Zanubrutinib",
        dose: 160,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1–28 twice daily (continuously)",
        reducible: true,
        note: "May alternatively give as 320 mg once daily. Dose reduction per occurrence: 1st = 160 mg BID, 2nd = 160 mg daily, 3rd = 80 mg daily, 4th = discontinue.",
        levels: [160, 80]
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "total bilirubin", "ALT", "PTT", "INR", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff", "total bilirubin", "ALT", "blood pressure"],
      conditional: [
        {
          label: "Baseline if clinically indicated",
          tests: ["albumin", "calcium", "uric acid", "potassium", "phosphate", "random glucose", "LDH", "ECG", "MUGA scan or echocardiogram"]
        },
        {
          label: "If clinically indicated",
          tests: ["albumin", "calcium", "uric acid", "potassium", "phosphate", "random glucose", "creatinine", "LDH", "PTT", "INR", "ECG", "MUGA scan or echocardiogram", "HBV viral load"]
        }
      ]
    }
  },
  {
    key: "LY-LYCODOXMR",
    cat: "Lymphoma",
    bcc: true,
    name: "LYCODOXMR — CODOX-M + riTUXimab [Burkitt Lymphoma/ALL-L3]",
    cycle: null,
    notes: "Inpatient protocol; start within 48 hours of diagnosis even if staging incomplete. Part A of the Magrath protocol, alternating with LYIVACR. Low-risk patients: LYCODOXMR → LYIVACR → LYCODOXMR (1 full Magrath). High-risk patients: LYCODOXMR → LYIVACR → LYCODOXMR → LYIVACR (2 full Magrath). Minimum 21 days between cycles. Total 8 IT chemotherapy doses across full treatment. riTUXimab first dose must be IV; subsequent doses may be subcutaneous (1400 mg fixed). G-CSF (filgrastim) starting Day 13. Very high risk hepatitis B reactivation — follow SCHBV. Methotrexate requires hospital administration with rapid level reporting; leucovorin rescue starts 24 h after methotrexate infusion start. IT cytarabine on Day 3 and after Day 18 (platelets ≥50, INR <1.5, PTT ≤ULN required).",
    drugs: [
      {
        name: "CYCLOphosphamide",
        dose: 800,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1 and 2",
        reducible: true,
        note: "No dose adjustment for abnormal hematology in cycle 1. Cycle 2 given after hematological recovery (ANC >1.0, platelets >100).",
      },
      {
        name: "vinCRIStine",
        dose: 1.4,
        unit: "mg/m²",
        basis: "bsa",
        max: 2,
        weightCap: null,
        route: "IV",
        days: "Days 1 and 8",
        reducible: true,
        note: "Max 2 mg. Neurotoxicity dose reductions: dysesthesias/areflexia 100%; abnormal buttoning/writing 67%; moderate motor neuropathy 50%; severe motor neuropathy omit.",
      },
      {
        name: "DOXOrubicin",
        dose: 50,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "Day 1 dose 50 mg/m². Day 8 dose 375 mg/m² (select per dose banding table). Hepatotoxicity adjustment: total bilirubin 2–35 µmol/L = 100%; 36–85 = 50%; >85 = omit. Cardiotoxicity: omit and do not replace.",
      },
      {
        name: "riTUXimab",
        dose: 375,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 8 (first dose IV; subsequent doses may be SC 1400 mg fixed)",
        reducible: false,
        note: "Day 8 dose 375 mg/m² (dose banded). First dose must be IV. Subsequent doses may be SC 1400 mg fixed. Risk of cytokine release syndrome increased with lymphocyte count >30–50 ×10⁹/L.",
      },
      {
        name: "methoTREXate",
        dose: 3,
        unit: "g/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 10",
        reducible: true,
        note: "Requires urine pH >7 before administration and continuous alkalinization. Renal dose reduction: CrCl >100 = 100%; 85–99.9 = 85%; 60–84.9 = 62%; <60 = hold. Mucositis ≥Grade 3: reduce to 80% or prolong rescue. Hepatic dysfunction table applies.",
      },
      {
        name: "Leucovorin",
        dose: 25,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "IV then PO",
        days: "Every 6 hours starting Day 11 (24 h after methotrexate start); continue until methotrexate level <0.1 µmol/L",
        reducible: false,
        note: "Dose adjusted by methotrexate level at hour 48: <0.1 = none; 0.1–0.9 = 25 mg q6h; 1.0–8.0 = 100 mg/m² IV q6h; >8.0 = 1000 mg/m² IV q6h.",
      },
      {
        name: "cytaRABine",
        dose: 50,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "IT",
        days: "Day 3 and after Day 18",
        reducible: false,
        note: "Intrathecal via lumbar puncture or Ommaya reservoir. Requires platelets ≥50×10⁹/L, INR <1.5, PTT ≤ULN, no peripheral blasts.",
      },
      {
        name: "Filgrastim",
        dose: null,
        unit: "mcg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "SC",
        days: "Day 13 daily until ANC >1.0",
        reducible: false,
        note: "Weight-banded dosing (absolute mcg, not per-kg): <75 kg = 300 mcg; 76–110 kg = 480 mcg; >110 kg = 600 mcg.",
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "sodium", "potassium", "ALT", "total bilirubin", "alkaline phosphatase", "GGT", "uric acid", "LDH", "Urine pH", "HIV", "HBsAg", "HBsAb", "HBcoreAb", "HCAb", "CMV serology", "HSV serology"],
      cycle: ["CBC & Diff", "creatinine", "sodium", "potassium", "ALT", "total bilirubin", "alkaline phosphatase", "GGT", "uric acid", "LDH"],
      conditional: [
        {
          label: "Daily during treatment (morning)",
          tests: ["CBC & Diff", "creatinine", "sodium", "potassium"]
        },
        {
          label: "Prior to IT chemo (Day 3 and after Day 18)",
          tests: ["platelets", "PTT", "INR"]
        },
        {
          label: "Twice weekly (Monday and Thursday)",
          tests: ["ALT", "total bilirubin"]
        },
        {
          label: "Day 8",
          tests: ["ALT", "total bilirubin", "alkaline phosphatase", "GGT"]
        },
        {
          label: "Day 10 pre-methotrexate",
          tests: ["creatinine", "ALT", "alkaline phosphatase", "GGT", "total bilirubin"]
        },
        {
          label: "Urine pH: pre-methotrexate and q6h",
          tests: ["Urine pH"]
        },
        {
          label: "Methotrexate levels: hour 48 then daily AM (until <0.1 µmol/L)",
          tests: ["Methotrexate level"]
        }
      ]
    }
  },
  {
    key: "LY-LYCSPA",
    cat: "Lymphoma",
    bcc: true,
    name: "LYCSPA — CycloSPORINE [Large Granular Lymphocyte Disorder]",
    cycle: null,
    notes: "Continuous oral therapy. Starting dose 100 mg BID PO; adjust to minimum effective dose maintaining target blood cell count in low-normal range. Maximum dose: do not exceed that causing symptomatic toxicity, creatinine >125% of normal, or 400 mg/day. If no effect after 2 months at maximum tolerated dose, discontinue. Moderate risk hepatitis B reactivation — follow SCHBV if HBsAg or HBcoreAb positive. Numerous drug interactions — refer to product monograph. Red wine causes 50% increase in oral clearance; should be avoided.",
    drugs: [
      {
        name: "cycloSPORINE",
        dose: 100,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Twice daily continuously; dose adjusted to minimum effective",
        reducible: true,
        note: "Starting dose 100 mg BID. Adjust to minimum dose maintaining target counts in low-normal range. Maximum 400 mg/day or dose causing symptomatic toxicity or creatinine >125% normal. Dose reduce if creatinine exceeds 125% of normal.",
      }
    ],
    labs: {
      baseline: ["HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff", "creatinine"],
      conditional: [
        {
          label: "If clinically indicated (non-responding patient)",
          tests: ["Serum cycloSPORINE level"]
        },
        {
          label: "If clinically indicated (HBV monitoring)",
          tests: ["HBV viral load", "ALT"]
        }
      ]
    }
  },
  {
    key: "LY-LYCVPO",
    cat: "Lymphoma",
    bcc: true,
    name: "LYCVPO — CVP + oBINutuzumab [Rituximab-refractory Follicular Lymphoma]",
    cycle: null,
    notes: "Two-phase protocol. Induction phase: CVP + oBINutuzumab every 21 days × 6 cycles. Cycle 1 oBINutuzumab given on Days 2, 8, 15; Cycles 2–6 on Day 1 only. Maintenance phase (starting ~2 months after last induction oBINutuzumab): oBINutuzumab monotherapy every 2 months × 2 years (12 doses, Cycles 7–18). Only one of LYBENDO, LYCVPO, LYCHOPO, or LYGDPO will be funded per patient. No dose reductions for oBINutuzumab (rate modifications only). Very high risk hepatitis B reactivation — follow SCHBV.",
    drugs: [
      {
        name: "vinCRIStine",
        dose: 1.4,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 of each induction cycle (Cycles 1–6)",
        reducible: true,
        note: "No maximum dose specified. Neurotoxicity reductions: dysesthesias/areflexia 100%; abnormal buttoning/writing 67%; moderate motor neuropathy 50%; severe motor neuropathy omit. Hepatotoxicity: bili ≤25 µmol/L 100%; 26–50 50%; >50 25%.",
      },
      {
        name: "CYCLOphosphamide",
        dose: 1000,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 of each induction cycle (Cycles 1–6)",
        reducible: true,
        note: "Delay if ANC <0.8 or platelets <80.",
      },
      {
        name: "predniSONE",
        dose: 100,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1–5 of each induction cycle (Cycles 1–6)",
        reducible: true,
        note: null,
      },
      {
        name: "oBINutuzumab",
        dose: 1000,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Induction Cycle 1: Days 2, 8, 15; Cycles 2–6: Day 1. Maintenance Cycles 7–18: Day 1 every 2 months",
        reducible: false,
        note: "No dose reductions; manage infusion reactions by rate modification or discontinuation. Grade 4 reaction: discontinue permanently.",
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "ALT", "total bilirubin", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff"],
      conditional: [
        {
          label: "If clinically indicated",
          tests: ["creatinine", "ALT", "total bilirubin", "HBV viral load"]
        }
      ]
    }
  },
  {
    key: "LY-LYCVPPABO",
    cat: "Lymphoma",
    bcc: true,
    name: "LYCVPPABO — CVPP/ABO [Hodgkin Lymphoma — ABVD-ineligible]",
    cycle: 28,
    notes: "For patients who cannot receive (LY)ABVD due to specific drug contraindication. Day 1 drugs: vinBLAStine, cyclophosphamide, procarbazine (Days 1–7), predniSONE (Days 1–14). Day 8 drugs: DOXOrubicin, vinCRIStine, bleomycin. Repeat every 28 days. Limited stage: 2 cycles → PET; if PET negative → 2 more cycles; if PET positive/indeterminate → radiation. Advanced stage: 6 cycles. DOXOrubicin may be substituted with etoposide 35 mg/m² IV Day 8 + 70 mg/m² PO Days 9–10 if cardiac toxicity. Bleomycin lifetime dose limit 270 units. Very high risk hepatitis B reactivation.",
    drugs: [
      {
        name: "vinBLAStine",
        dose: 6,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "Neurotoxicity reductions: dysesthesias/areflexia 100%; abnormal buttoning/writing 67%; moderate motor neuropathy 50%; severe omit. Hepatotoxicity: bili <25 µmol/L 100%; 25–50 50%; >50 25%.",
      },
      {
        name: "CYCLOphosphamide",
        dose: 600,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: null,
      },
      {
        name: "Procarbazine",
        dose: 100,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1–7",
        reducible: true,
        note: null,
      },
      {
        name: "predniSONE",
        dose: 45,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1–14",
        reducible: true,
        note: null,
      },
      {
        name: "DOXOrubicin",
        dose: 35,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 8",
        reducible: true,
        note: "Hepatotoxicity: bili 2–35 µmol/L 100%; 35–85 50%; >85 omit (substitute cyclophosphamide 525 mg/m²). Cardiotoxicity: omit; substitute etoposide 35 mg/m² IV Day 8 + 70 mg/m² PO Days 9–10.",
      },
      {
        name: "vinCRIStine",
        dose: 1.4,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 8",
        reducible: true,
        note: "No cap on dose. Neurotoxicity reductions: dysesthesias/areflexia 100%; abnormal buttoning/writing 67%; moderate motor neuropathy 50%; severe omit. Hepatotoxicity: bili ≤25 µmol/L 100%; 26–50 50%; >50 25%.",
      },
      {
        name: "Bleomycin",
        dose: 10,
        unit: "unit/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 8",
        reducible: true,
        note: "Lifetime cumulative dose limit 270 units. Premedicate with hydrocortisone 100 mg IV. Monitor respiratory symptoms before each cycle.",
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "total bilirubin", "ALT", "creatinine", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff"],
      conditional: [
        {
          label: "If total bilirubin elevated at baseline — before each treatment",
          tests: ["total bilirubin"]
        },
        {
          label: "If clinically indicated",
          tests: ["HBV viral load", "ALT"]
        }
      ]
    }
  },
  {
    key: "LY-LYCVPR",
    cat: "Lymphoma",
    bcc: true,
    name: "LYCVPR — CVP-R [Advanced Indolent Lymphoma]",
    cycle: 21,
    notes: "Cyclophosphamide, vinCRIStine, predniSONE with riTUXimab. Repeat every 21 or 28 days (see dose modifications) for 8 cycles; CAP approval required for further use. riTUXimab given once per CVP cycle (not weekly). First dose riTUXimab must be IV (375 mg/m²); subsequent doses may be SC (1400 mg fixed) if no severe prior reactions; SC may begin if IV tolerated or active SC within past 6 months. riTUXimab given on Day 1 or 2, not later than 72 h after CVP. Very high risk hepatitis B reactivation — follow SCHBV. Note: for CLL/SLL use LYCLLCVPR.",
    drugs: [
      {
        name: "vinCRIStine",
        dose: 1.4,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "No maximum dose. Neurotoxicity: dysesthesias/areflexia 100%; abnormal buttoning/writing 67%; moderate motor neuropathy 50%; severe omit. Hepatotoxicity: bili ≤25 µmol/L 100%; 26–50 50%; >50 25%.",
      },
      {
        name: "CYCLOphosphamide",
        dose: 1000,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "Delay if ANC <1.2 or platelets <100.",
      },
      {
        name: "predniSONE",
        dose: 100,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1–5",
        reducible: true,
        note: null,
      },
      {
        name: "riTUXimab",
        dose: 375,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 or 2 (not later than 72 h after CVP); first dose IV, subsequent doses may be SC 1400 mg",
        reducible: false,
        note: "First dose IV (375 mg/m², dose banded). Subsequent doses SC 1400 mg fixed if tolerated. Delay if ANC <1.2 or platelets <100.",
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "total bilirubin", "ALT", "LDH", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff"],
      conditional: [
        {
          label: "If clinically indicated",
          tests: ["HBV viral load", "ALT"]
        }
      ]
    }
  },
  {
    key: "LY-LYCVP",
    cat: "Lymphoma",
    bcc: true,
    name: "LYCVP — CVP [Advanced Indolent Lymphoma]",
    cycle: 21,
    notes: "Cyclophosphamide, vinCRIStine, predniSONE. Repeat every 21 or 28 days (see dose modifications) for up to 8 cycles; CAP approval required for further use. Indicated for indolent T-cell lymphoma/leukemia; indolent B-cell lymphoma previously treated with rituximab ± chemotherapy within past 6 months; unusual lymphoproliferative conditions (multifocal Castleman's, histiocytosis); or B-cell lymphoma with contraindication to DOXOrubicin. High risk hepatitis B reactivation — follow SCHBV.",
    drugs: [
      {
        name: "vinCRIStine",
        dose: 1.4,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "No maximum dose. Neurotoxicity: dysesthesias/areflexia 100%; abnormal buttoning/writing 67%; moderate motor neuropathy 50%; severe omit. Hepatotoxicity: bili ≤25 µmol/L 100%; 26–50 50%; >50 25%.",
      },
      {
        name: "CYCLOphosphamide",
        dose: 1000,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "Delay if ANC <1.2 or platelets <100.",
      },
      {
        name: "predniSONE",
        dose: 100,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1–5 daily in AM",
        reducible: true,
        note: null,
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "total bilirubin", "ALT", "LDH", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff"],
      conditional: [
        {
          label: "If clinically indicated",
          tests: ["HBV viral load", "ALT"]
        }
      ]
    }
  },
  {
    key: "LY-LYCYCLO",
    cat: "Lymphoma",
    bcc: true,
    name: "LYCYCLO — Cyclophosphamide [Lymphoma/CLL/Myeloma]",
    cycle: 21,
    notes: "Single-agent cyclophosphamide for malignant lymphoma, Hodgkin lymphoma, CLL, or multiple myeloma. IV dose 600–1200 mg/m² Day 1, or PO 300–400 mg/m²/day × 5 days ± predniSONE 45 mg/m²/day × 5 days. Actual dose depends on patient-specific factors (prior treatment, performance status, duration of planned treatment). Repeat every 21–28 days; discontinue if no response after 2 cycles. Continue until 2 cycles after maximum response, maximum 8 months. If IV dexamethasone used as antiemetic with oral cyclophosphamide, omit predniSONE. High risk hepatitis B reactivation — follow SCHBV.",
    drugs: [
      {
        name: "CYCLOphosphamide",
        dose: null,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV or PO",
        days: "IV: Day 1; PO: Days 1–5",
        reducible: true,
        note: "IV dose range 600–1200 mg/m² Day 1 OR PO 300–400 mg/m²/day × 5 days. Dose depends on patient factors. Delay if ANC ≤1.2 or platelets ≤80.",
      },
      {
        name: "predniSONE",
        dose: 45,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1–5 (optional; omit if dexamethasone used as antiemetic)",
        reducible: true,
        note: "Optional. Round to nearest 50 mg. Omit if dexamethasone used as antiemetic.",
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "total bilirubin", "ALT", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff"],
      conditional: [
        {
          label: "If clinically indicated",
          tests: ["HBV viral load", "ALT"]
        }
      ]
    }
  },
  {
    key: "LY-LYDARCBDF",
    cat: "Lymphoma",
    bcc: true,
    name: "LYDARCBDF — Daratumumab + CyBorD [AL Amyloidosis — Transplant-Ineligible]",
    cycle: 28,
    notes: "Newly diagnosed light chain (AL) amyloidosis, ineligible for or not being offered SCT. 1 cycle = 28 days; treat until progression or maximum 24 cycles. Cycles 1–6: daratumumab weekly (Days 1, 8, 15, 22); Cycles 3–6 reduce to bi-weekly (Days 1, 15); Cycles 7+: monthly (Day 1). Cyclophosphamide 500 mg weekly or 50 mg every 2 days. Bortezomib starting dose 1.3 mg/m² SC weekly (physician may start at 1.5 mg/m²). Dexamethasone 40 mg PO weekly (reduce to 20 mg for age ≥75). Very high risk hepatitis B reactivation. VZV prophylaxis with valACYclovir 500 mg PO daily required. Type and screen required prior to daratumumab (CD38 interference with cross-matching). Post-injection observation 1 h on Cycle 1 Day 1 only.",
    drugs: [
      {
        name: "Daratumumab",
        dose: 1800,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "SC",
        days: "Cycles 1–2: Days 1, 8, 15, 22; Cycles 3–6: Days 1, 15; Cycles 7+: Day 1",
        reducible: false,
        note: "Fixed 1800 mg SC (15 mL). No dose modifications for infusion/administration reactions. Observe 1 h after injection on Cycle 1 Day 1 only.",
      },
      {
        name: "CYCLOphosphamide",
        dose: 500,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1, 8, 15, 22 (Cycles 1–6) OR 50 mg every 2 days",
        reducible: true,
        note: "500 mg weekly or 50 mg every 2 days. Renal: CrCl ≥10 = 100%; <10 = 75%; give after dialysis if on hemodialysis. Consider dose reduction for cytopenias.",
      },
      {
        name: "Bortezomib",
        dose: 1.3,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "SC",
        days: "Days 1, 8, 15, 22 (Cycles 1–6)",
        reducible: true,
        note: "May start at 1.5 mg/m². Dose levels: -4=0.5, -3=0.7, -2=1.0, -1=1.3, 0=1.5 mg/m². Peripheral neuropathy: Grade 1 no pain = 100%; Grade 1 with pain or Grade 2 = 1 mg/m²; Grade 2 with pain or Grade 3 = delay then 0.7 mg/m²; Grade 4 = discontinue. Hepatic impairment moderate: start 0.7 mg/m². Give before daratumumab on days both given.",
        levels: [1.0, 0.7]
      },
      {
        name: "Dexamethasone",
        dose: 40,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Once weekly on Days 1, 8, 15, 22 (Cycles 1–6); prior to daratumumab on daratumumab days",
        reducible: true,
        note: "Reduce to 20 mg (or lower) for patients ≥75 years. predniSONE may substitute (minimum 100 mg Cycle 1; lower doses thereafter). Dexamethasone serves as premedication and therapeutic steroid in Cycle 1.",
      }
    ],
    labs: {
      baseline: ["Red Blood Cell phenotype and Group and Screen (pre-daratumumab)", "CBC & Diff", "creatinine", "sodium", "potassium", "total bilirubin", "ALT", "alkaline phosphatase", "calcium", "albumin", "LDH", "random glucose", "Serum protein electrophoresis", "Serum free light chain level", "Immunoglobulin panel (IgA, IgG, IgM)", "HCAb", "HBsAg", "HBsAb", "HBcoreAb", "Beta-2 microglobulin", "Troponin I cardiac high sensitivity", "NT-pro BNP", "Albumin creatinine ratio (urine)", "Urine protein electrophoresis"],
      cycle: ["CBC & Diff", "creatinine", "sodium", "potassium", "total bilirubin", "ALT", "alkaline phosphatase", "calcium", "albumin", "LDH", "Serum protein electrophoresis", "Free light chain levels", "NT-pro BNP", "Albumin creatinine ratio (urine)"],
      conditional: [
        {
          label: "Baseline if clinically indicated",
          tests: ["urea"]
        },
        {
          label: "Every 4 weeks (optional, encouraged)",
          tests: ["Immunoglobulin panel (IgA, IgG, IgM)", "Urine electrophoresis", "Troponin I cardiac high sensitivity", "urea"]
        },
        {
          label: "Days 8, 15, 22 (optional mid-cycle; results not mandatory to proceed)",
          tests: ["CBC & Diff", "creatinine", "sodium", "potassium", "total bilirubin", "ALT", "alkaline phosphatase", "calcium", "albumin"]
        },
        {
          label: "If clinically indicated",
          tests: ["HBV viral load"]
        }
      ]
    }
  },
  {
    key: "LY-LYDHAPR",
    cat: "Lymphoma",
    bcc: true,
    name: "LYDHAPR — DHAP-R [Relapsed Aggressive Lymphoma / Relapsed MCL]",
    cycle: 21,
    notes: "Dexamethasone, CISplatin (or CARBOplatin), cytaRABine, riTUXimab. Repeat every 21 days; maximum 3 cycles prior to high-dose chemotherapy/SCT, otherwise 6 cycles; discontinue for definite progression. Primary DHAP uses CISplatin 75 mg/m² Day 1; CARBOplatin (AUC 5, max 800 mg) may substitute for renal dysfunction (CrCl 45–59: split CISplatin or use CARBOplatin) or other physician discretion. riTUXimab first dose IV (375 mg/m²); subsequent doses may be SC 1400 mg. Very high risk hepatitis B reactivation — follow SCHBV. Dexamethasone eye drops required during cytarabine. Also used as Cycles 2, 4, 6 of LYMCALT protocol.",
    drugs: [
      {
        name: "Dexamethasone",
        dose: 40,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1–4",
        reducible: true,
        note: "Note: antiemetic premedication dexamethasone is separate and must be prescribed separately.",
      },
      {
        name: "CISplatin",
        dose: 75,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 (may be split 37.5 mg/m² Days 1 and 8 if CrCl 45–59)",
        reducible: true,
        note: "CrCl ≥60: 75 mg/m² Day 1. CrCl 45–59: 37.5 mg/m² Days 1 and 8 OR switch to CARBOplatin. CrCl <45: delay. Serum creatinine >3×ULN: delay 1 week. CARBOplatin AUC 5 (max 800 mg) may substitute per physician discretion.",
      },
      {
        name: "CARBOplatin",
        dose: 5,
        unit: "AUC",
        basis: "auc",
        max: 800,
        weightCap: null,
        route: "IV",
        days: "Day 1 (substitute for CISplatin if indicated)",
        reducible: true,
        note: "AUC 5; dose = AUC × (GFR + 25). Maximum dose 800 mg. Used when CrCl 45–59 or other clinical reason. No prehydration required.",
      },
      {
        name: "cytaRABine",
        dose: 2000,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 2 and 3",
        reducible: true,
        note: "High-dose cytarabine cerebellar toxicity nursing assessment required before each dose. Dexamethasone 0.1% ophthalmic drops q6h starting before first dose until 48 h after last dose.",
      },
      {
        name: "riTUXimab",
        dose: 375,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 or 2 (not later than 72 h after DHAP); first dose IV, subsequent doses may be SC 1400 mg",
        reducible: false,
        note: "First dose IV (375 mg/m², dose banded). Subsequent doses SC 1400 mg fixed if tolerated. If restarting >6 months since SC, give first dose IV.",
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "ALT", "total bilirubin", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff", "creatinine", "ALT", "total bilirubin"],
      conditional: [
        {
          label: "Baseline (recommended but optional)",
          tests: ["alkaline phosphatase", "sodium", "potassium", "magnesium", "calcium"]
        },
        {
          label: "Before Day 8 treatment (if CISplatin split dose)",
          tests: ["CBC & Diff", "creatinine"]
        },
        {
          label: "If clinically indicated",
          tests: ["alkaline phosphatase", "sodium", "potassium", "magnesium", "calcium", "LDH", "HBV viral load"]
        }
      ]
    }
  },
  {
    key: "LY-LYEPOCHR",
    cat: "Lymphoma",
    bcc: true,
    name: "LYEPOCHR — DA-EPOCH-R [Double-Hit / Burkitt / PMBCL]",
    cycle: 21,
    notes: "Dose-adjusted EPOCH-R with optional IT methotrexate CNS prophylaxis. Etoposide, DOXOrubicin, and vinCRIStine given as 96-hour continuous IV infusion (Days 1–4). CYCLOphosphamide Day 1 before infusion starts. riTUXimab Day 5 (physician may adjust day). predniSONE Days 1–5 BID. Filgrastim Day 6 daily until ANC recovery past nadir. Repeat every 21 days × 6 cycles; discontinue if no response after 2 cycles. Dose levels adjusted upward if nadir ANC ≥0.5 and platelets ≥25; downward if ANC <0.5 ≥3 times or platelets <25 (cyclophosphamide only for reductions below Level 1). IT methotrexate 12 mg starting Cycle 3, Days 2 and 5 (optional; physician discretion for CNS prophylaxis). Mesna required when cyclophosphamide >2000 mg. Very high risk hepatitis B reactivation. Central line required.",
    drugs: [
      {
        name: "etopoSIDE",
        dose: 50,
        unit: "mg/m²/day",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1–4 continuous infusion (total 200 mg/m²/cycle)",
        reducible: true,
        note: "Starting dose level 1 = 50 mg/m²/day. Dose levels: -2=-1=1=50; 2=60; 3=72; 4=86; 5=104; 6=124 mg/m²/day. Dose escalations apply to etoposide, DOXOrubicin, and cyclophosphamide.",
        levels: [50, 50]
      },
      {
        name: "DOXOrubicin",
        dose: 10,
        unit: "mg/m²/day",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1–4 continuous infusion (total 40 mg/m²/cycle)",
        reducible: true,
        note: "Starting dose level 1 = 10 mg/m²/day. Dose levels: -2=-1=1=10; 2=12; 3=14; 4=17; 5=21; 6=25 mg/m²/day. Hepatotoxicity: bili 1.5–3.0×ULN = 75%; >3.0×ULN = 50%.",
        levels: [10, 10]
      },
      {
        name: "vinCRIStine",
        dose: 0.4,
        unit: "mg/m²/day",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1–4 continuous infusion (total 1.6 mg/m²/cycle; no cap)",
        reducible: true,
        note: "No cap on dose. Not dose-adjusted per hematology nadir. Neurotoxicity: dysesthesias/areflexia 100%; abnormal buttoning/writing 67%; moderate motor neuropathy 50%; severe omit. Ileus management table applies.",
      },
      {
        name: "CYCLOphosphamide",
        dose: 750,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 (before starting etoposide/DOXOrubicin/vinCRIStine infusion)",
        reducible: true,
        note: "Starting dose level 1 = 750 mg/m². Levels: -2=480; -1=600; 1=750; 2=900; 3=1080; 4=1296; 5=1555; 6=1866 mg/m². Reductions below level 1 apply to cyclophosphamide only. Mesna required when dose >2000 mg.",
        levels: [600, 480]
      },
      {
        name: "predniSONE",
        dose: 60,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1–5 twice daily (total 120 mg/m²/day; round to nearest 25 mg)",
        reducible: true,
        note: "May reduce per physician discretion based on patient tolerance.",
      },
      {
        name: "riTUXimab",
        dose: 375,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 5 (physician may adjust day); first dose IV, subsequent doses may be SC 1400 mg",
        reducible: false,
        note: "First dose IV (375 mg/m², dose banded). Subsequent SC 1400 mg if IV tolerated within past 6 months or SC within past 6 months.",
      },
      {
        name: "methoTREXate",
        dose: 12,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "IT",
        days: "Cycles 3–6: Days 2 and 5 (optional CNS prophylaxis; 8 total treatments); minimum 48 h between doses",
        reducible: false,
        note: "Optional IT CNS prophylaxis. Physician may start in Cycle 1 for high-risk CNS features. May reduce to once per cycle per clinical judgement.",
      },
      {
        name: "Filgrastim",
        dose: null,
        unit: "mcg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "SC",
        days: "Day 6 of each cycle daily until ANC recovery (>5.0×10⁹/L past nadir)",
        reducible: false,
        note: "Weight-banded dosing (absolute mcg, not per-kg): ≤75 kg = 300 mcg; 76–110 kg = 480 mcg; >110 kg = 600 mcg.",
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "urea", "creatinine", "total bilirubin", "ALT", "LDH", "uric acid", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff"],
      conditional: [
        {
          label: "Baseline (optional)",
          tests: ["HCAb", "HIV"]
        },
        {
          label: "Baseline if clinically indicated",
          tests: ["potassium", "calcium", "phosphate", "Urinalysis"]
        },
        {
          label: "If receiving IT methotrexate — Day 1",
          tests: ["INR", "PTT"]
        },
        {
          label: "If receiving IT methotrexate — Day 4 (or IT treatment day, within 24 h)",
          tests: ["CBC & Diff", "PTT", "INR"]
        },
        {
          label: "Days 8, 11, 15, 18 of each cycle (Monday and Thursday)",
          tests: ["CBC & Diff"]
        },
        {
          label: "If cyclophosphamide dose >2000 mg — daily",
          tests: ["Urine dipstick for blood"]
        },
        {
          label: "If clinically indicated each cycle",
          tests: ["creatinine", "total bilirubin", "ALT", "alkaline phosphatase", "LDH", "Urinalysis", "HBV viral load"]
        }
      ]
    }
  },
  {
    key: "LY-LYFACAL",
    cat: "Lymphoma",
    bcc: true,
    name: "LYFACAL — Acalabrutinib [CLL/SLL — First-line]",
    cycle: null,
    notes: "Continuous therapy until disease progression or unacceptable toxicity. For previously untreated CLL/SLL with high-risk disease or FCR-ineligible patients (age >65 or strong clinical reason). Patients discontinuing ibrutinib (LYFIBRU) or zanubrutinib (LYFZANU) due to intolerance may switch to acalabrutinib; switching after progression is not funded. Very high risk hepatitis B reactivation — follow SCHBV. Avoid use in severe hepatic impairment (Child-Pugh C). Dose reduction per occurrence table: 1st = 100 mg BID; 2nd = 100 mg BID; 3rd = 100 mg once daily; 4th = discontinue.",
    drugs: [
      {
        name: "Acalabrutinib",
        dose: 100,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Twice daily continuously",
        reducible: true,
        note: "Dose reductions by occurrence: 1st = 100 mg BID; 2nd = 100 mg BID; 3rd = 100 mg once daily; 4th = discontinue. Hold for Grade 4 neutropenia >7 days, Grade 4 thrombocytopenia or Grade 3 with bleeding, or non-hematologic ≥Grade 3 toxicity.",
        levels: [100, 100]
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "total bilirubin", "ALT", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff", "total bilirubin", "ALT", "blood pressure"],
      conditional: [
        {
          label: "Baseline if clinically indicated",
          tests: ["PT", "PTT", "INR", "ECG"]
        },
        {
          label: "If clinically indicated",
          tests: ["creatinine", "PT", "PTT", "INR", "ECG", "HBV viral load"]
        }
      ]
    }
  },
  {
    key: "LY-LYFCR",
    cat: "Lymphoma",
    bcc: true,
    name: "LYFCR — FCR [CLL/SLL / Prolymphocytic Leukemia — First-line]",
    cycle: 28,
    notes: "Fludarabine, cyclophosphamide, riTUXimab. Recommended at initial need for systemic treatment in CLL/SLL or prolymphocytic leukemia for patients ≤65 years, ECOG 0–1, no significant co-morbidities. Repeat every 28 days × 6 cycles. Cycle 1: riTUXimab 375 mg/m²; Cycles 2–6: riTUXimab 500 mg/m² (dose banded). Fludarabine and cyclophosphamide PO (preferred) or IV. Subcutaneous riTUXimab 1600 mg (fixed) from Cycle 2+ if tolerated. Renal dose adjustment required for fludarabine (CrCl <70; do not use if <30). Recommend cotrimoxazole DS and valACYclovir prophylaxis during and 3 months post-therapy. Irradiated blood products required. Allopurinol Cycle 1 for tumour lysis. Very high risk hepatitis B reactivation. If WBC >30×10⁹/L, omit riTUXimab from Cycle 1.",
    drugs: [
      {
        name: "Fludarabine",
        dose: 40,
        unit: "mg/m²/day",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1–3 (round to nearest 10 mg); IV alternative: 25 mg/m²/day × 3 days",
        reducible: true,
        note: "PO 40 mg/m²/day × 3 days (round to nearest 10 mg). IV substitute: 25 mg/m²/day × 3 days. Renal: CrCl ≥70 = 100%; CrCl 30–<70 = 50%; CrCl <30 = do not use. After count recovery, consider reducing fludarabine and cyclophosphamide 25% for subsequent cycles.",
      },
      {
        name: "CYCLOphosphamide",
        dose: 250,
        unit: "mg/m²/day",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1–3 (round to nearest 50 mg); IV alternative same schedule",
        reducible: true,
        note: "PO 250 mg/m²/day × 3 days (round to nearest 50 mg). May divide into 2–3 subdoses/day. IV substitute: 250 mg/m²/day × 3 days in 100 mL NS over 20–60 min. Delay if ANC <1.0 or platelets <100.",
      },
      {
        name: "riTUXimab",
        dose: 375,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Cycle 1 Day 1: 375 mg/m² IV; Cycles 2–6 Day 1: 500 mg/m² IV (or SC 1600 mg from Cycle 2 if tolerated)",
        reducible: false,
        note: "Cycle 1: 375 mg/m² (dose banded) IV. Cycles 2–6: 500 mg/m² (dose banded) IV or SC 1600 mg fixed. First SC dose only if IV tolerated within past 6 months. Delay if ANC <1.0 or platelets <100.",
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "total bilirubin", "ALT", "LDH", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff", "creatinine"],
      conditional: [
        {
          label: "If clinically indicated",
          tests: ["HBV viral load", "ALT"]
        }
      ]
    }
  },
  {
    key: "LY-LYFIBRU",
    cat: "Lymphoma",
    bcc: true,
    name: "LYFIBRU — iBRUtinib [CLL/SLL — First-line]",
    cycle: null,
    notes: "Continuous therapy until disease progression or unacceptable toxicity. For previously untreated CLL/SLL with high-risk disease or FCR-ineligible patients. Patients discontinuing acalabrutinib (LYFACAL) or zanubrutinib (LYFZANU) due to intolerance may switch; switching after progression not funded. Very high risk hepatitis B reactivation — follow SCHBV. Dose reduction by occurrence for myelosuppression: 1st = 420 mg daily; 2nd = 280 mg daily; 3rd = 140 mg daily; 4th = discontinue. Cardiac toxicities have specific dose modification table. Avoid in moderate/severe hepatic impairment (Child-Pugh B/C); mild: reduce to 140 mg daily.",
    drugs: [
      {
        name: "iBRUtinib",
        dose: 420,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Once daily continuously",
        reducible: true,
        note: "Dose reduction by myelosuppression occurrence: 1st = 420 mg daily; 2nd = 280 mg daily; 3rd = 140 mg daily; 4th = discontinue. Cardiac: Grade 2 failure or Grade 3 arrhythmia: 1st = 280 mg; 2nd = 140 mg; 3rd = discontinue. Hepatic mild (Child-Pugh A): 140 mg daily.",
        levels: [280, 140]
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "total bilirubin", "ALT", "PTT", "INR", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff", "total bilirubin", "ALT", "blood pressure"],
      conditional: [
        {
          label: "Baseline if clinically indicated",
          tests: ["ECG", "MUGA scan or echocardiogram"]
        },
        {
          label: "If clinically indicated",
          tests: ["creatinine", "PT", "PTT", "INR", "ECG", "MUGA scan or echocardiogram", "HBV viral load"]
        }
      ]
    }
  },
  {
    key: "LY-LYFLUDR",
    cat: "Lymphoma",
    bcc: true,
    name: "LYFLUDR — Fludarabine-R [Relapsed Indolent Lymphoma]",
    cycle: 28,
    notes: "Fludarabine and riTUXimab for relapsed indolent lymphoma (follicular, marginal zone, lymphoplasmacytic); for CLL/SLL use LYCLLFLUDR. Repeat every 28 days × 6 cycles; CAP approval required for further cycles. Fludarabine PO 40 mg/m²/day × 5 days preferred; IV substitute 25 mg/m²/day × 5 days. Renal dose adjustment for fludarabine (CrCl <70; do not use if <30). riTUXimab first dose IV (375 mg/m²); subsequent doses SC (1400 mg fixed) if tolerated. Very high risk hepatitis B reactivation — follow SCHBV. Irradiated blood products required during fludarabine therapy.",
    drugs: [
      {
        name: "Fludarabine",
        dose: 40,
        unit: "mg/m²/day",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1–5 (round to nearest 10 mg); IV alternative: 25 mg/m²/day × 5 days",
        reducible: true,
        note: "PO 40 mg/m²/day × 5 days (nearest 10 mg). IV substitute: 25 mg/m²/day × 5 days in 100 mL NS over 30 min. Renal: CrCl ≥70 = 100%; CrCl 30–<70 = 50% (32 mg/m²/day × 3 days PO or 20 mg/m²/day × 3 days IV); CrCl <30 = do not use. Delay if ANC <1.2 or platelets <100.",
      },
      {
        name: "riTUXimab",
        dose: 375,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1; first dose IV; subsequent doses may be SC 1400 mg",
        reducible: false,
        note: "375 mg/m² (dose banded) IV first dose. Subsequent doses SC 1400 mg fixed if tolerated. If restarting >6 months since prior SC, give first dose IV. Delay if ANC <1.2 or platelets <100.",
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "total bilirubin", "ALT", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff", "creatinine"],
      conditional: [
        {
          label: "If clinically indicated",
          tests: ["HBV viral load", "ALT"]
        }
      ]
    }
  },

{
    key: "LY-LYFLU",
    cat: "Lymphoma",
    bcc: true,
    name: "LYFLU — Fludarabine [Indolent NHL/CLL]",
    cycle: 28,
    notes: "Indolent NHL or CLL. IV: 25 mg/m²/day × 5 consecutive weekdays; PO: 40 mg/m²/day × 5 days (round to nearest 10 mg). Usually 4–6 cycles (max 8; further cycles require undesignated approval). Renal dose adjustment required for CrCl <70 mL/min; do not use if CrCl <30 mL/min. Irradiated blood products recommended during fludarabine therapy. High risk of HBV reactivation — check HBsAg/HBcoreAb before Cycle 2.",
    drugs: [
      {
        name: "Fludarabine",
        dose: 25,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1–5 (consecutive weekdays)",
        reducible: true,
        note: "PO alternative: 40 mg/m²/day × 5 days. Renal dose reduction: CrCl 30–<70 mL/min → 50% (IV: 20 mg/m² × 3 days; PO: 32 mg/m² × 3 days). Do not use if CrCl <30 mL/min."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "total bilirubin", "ALT", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff", "creatinine"],
      conditional: [
        { label: "If clinically indicated", tests: ["HBV viral load", "ALT"] }
      ]
    }
  },
  {
    key: "LY-LYGDPO",
    cat: "Lymphoma",
    bcc: true,
    name: "LYGDPO — Gemcitabine, Dexamethasone, Platinum + obiNUTUZumab [Follicular NHL]",
    cycle: 21,
    notes: "Rituximab-refractory follicular lymphoma. Induction (Cycles 1–6, q21d): dexamethasone + gemcitabine + CISplatin (or CARBOplatin) + obiNUTUZumab. Cycle 1: obiNUTUZumab on Days 2, 8, 15; Cycles 2–6: Day 1 only. Maintenance (Cycles 7–18, q2 months): obiNUTUZumab monotherapy for up to 2 years. Consider 75% dose reduction of gemcitabine and platinum in patients >70 years. CARBOplatin AUC 5 (max 800 mg) may substitute CISplatin (required if CrCl <45 mL/min). Very high risk of HBV reactivation.",
    drugs: [
      {
        name: "dexamethasone",
        dose: 40,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1–4",
        reducible: false,
        note: "Given in morning with food. Separate prescription from antiemetic dexamethasone."
      },
      {
        name: "gemCITAbine",
        dose: 1000,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1 and 8",
        reducible: true,
        note: "Consider 75% dose reduction in patients >70 years. Day 8 dose may be reduced to 75% or omitted per hematologic counts."
      },
      {
        name: "CISplatin",
        dose: 75,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "Prehydrate with 1000 mL NS over 1h. CrCl 45–59: reduce to 37.5 mg/m² Days 1 & 8 or switch to CARBOplatin. CrCl <45: use CARBOplatin. CARBOplatin AUC 5 (max 800 mg) may substitute."
      },
      {
        name: "obiNUTUZumab",
        dose: 1000,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Cycle 1: Days 2, 8, 15; Cycles 2–6: Day 1; Maintenance: Day 1 q2 months",
        reducible: false,
        note: "No dose reductions recommended; infusion may be held or rate reduced. Premedicate with dexamethasone/acetaminophen/diphenhydrAMINE per protocol."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "ALT", "total bilirubin", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff", "creatinine"],
      conditional: [
        { label: "Baseline if clinically indicated", tests: ["alkaline phosphatase", "magnesium", "calcium"] },
        { label: "Day 8 (if CISplatin given Days 1 & 8)", tests: ["CBC & Diff", "creatinine"] },
        { label: "If clinically indicated", tests: ["HBV viral load", "ALT"] }
      ]
    }
  },
  {
    key: "LY-LYGDPR",
    cat: "Lymphoma",
    bcc: true,
    name: "LYGDPR — Gemcitabine, Dexamethasone, Platinum + riTUXimab [DLBCL]",
    cycle: 21,
    notes: "Relapsed aggressive B-cell NHL (DLBCL, mediastinal large B-cell, T-cell rich B-cell, intravascular large B-cell). Max 3 cycles pre-ASCT, otherwise 6 cycles. Consider 75% dose reduction of gemcitabine and CISplatin in patients >70 years. CARBOplatin AUC 5 (max 800 mg) may substitute CISplatin. riTUXimab first dose by IV; subsequent doses may be SC (1400 mg fixed). Very high risk of HBV reactivation.",
    drugs: [
      {
        name: "gemCITAbine",
        dose: 1000,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1 and 8",
        reducible: true,
        note: "Consider 75% reduction in patients >70 years. Day 8 dose may be reduced to 75% per hematologic counts."
      },
      {
        name: "dexamethasone",
        dose: 40,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1–4",
        reducible: false,
        note: "Given daily in morning. Separate prescription from antiemetic dexamethasone."
      },
      {
        name: "CISplatin",
        dose: 75,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "Prehydrate with 1000 mL NS over 60 min. CrCl 45–59: 37.5 mg/m² Days 1 & 8 or switch to CARBOplatin. CrCl <45: use CARBOplatin AUC 5 (max 800 mg)."
      },
      {
        name: "riTUXimab",
        dose: 375,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 or 2 (within 72h of GDP)",
        reducible: false,
        note: "First dose must be IV. Subsequent doses may be SC (1400 mg fixed, 11.7 mL). Dose banding applied per appendix table."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "total bilirubin", "ALT", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff", "creatinine"],
      conditional: [
        { label: "Baseline if clinically indicated", tests: ["alkaline phosphatase", "magnesium", "calcium"] },
        { label: "Day 8 (if CISplatin given Days 1 & 8)", tests: ["CBC & Diff", "creatinine"] },
        { label: "If clinically indicated", tests: ["HBV viral load", "ALT"] }
      ]
    }
  },
  {
    key: "LY-LYGDP",
    cat: "Lymphoma",
    bcc: true,
    name: "LYGDP — Gemcitabine, Dexamethasone, Platinum [DLBCL]",
    cycle: 21,
    notes: "Relapsed aggressive B-cell NHL (DLBCL and variants). Max 3 cycles pre-ASCT, otherwise 6 cycles (beyond 6 requires Compassionate Access). Consider 75% dose reduction of gemcitabine and CISplatin in patients >70 years. CARBOplatin AUC 5 (max 800 mg) may substitute CISplatin. High risk of HBV reactivation.",
    drugs: [
      {
        name: "gemCITAbine",
        dose: 1000,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1 and 8",
        reducible: true,
        note: "Consider 75% reduction in patients >70 years. Day 8 dose may be reduced to 75% per hematologic counts."
      },
      {
        name: "dexamethasone",
        dose: 40,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1–4",
        reducible: false,
        note: "Given daily in morning. Separate prescription from antiemetic dexamethasone."
      },
      {
        name: "CISplatin",
        dose: 75,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "Prehydrate with 1000 mL NS over 1h. CrCl 45–59: 37.5 mg/m² Days 1 & 8 or switch to CARBOplatin. CrCl <45: use CARBOplatin AUC 5 (max 800 mg)."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "total bilirubin", "ALT", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff", "creatinine"],
      conditional: [
        { label: "Baseline (recommended, optional)", tests: ["total bilirubin", "alkaline phosphatase", "magnesium", "calcium"] },
        { label: "Day 8 (if CISplatin given Days 1 & 8)", tests: ["CBC & Diff", "creatinine"] },
        { label: "If clinically indicated", tests: ["HBV viral load", "ALT"] }
      ]
    }
  },
  {
    key: "LY-LYGEMOXPEG",
    cat: "Lymphoma",
    bcc: true,
    name: "LYGEMOXPEG — Gemcitabine, OxaLIPlatin, Pegaspargase [NK/T-cell lymphoma]",
    cycle: 21,
    notes: "Newly diagnosed or relapsed/refractory NK/T-cell lymphoma. 4 cycles for limited stage, 6 for advanced stage. Pegaspargase 2500 units/m² (use 1500 units/m² for older/less fit patients); IV preferred over IM. Oxaliplatin dose levels: starting 130 mg/m², Level −1 85 mg/m², Level −2 65 mg/m² (per neurologic toxicity table). Note: the oxaliplatin starting dose is 130 mg/m² for this regimen — dose level table uses different starting points for reduction purposes. Consider 75% gemcitabine in patients >70 years. Antiviral prophylaxis required. High risk HBV reactivation.",
    drugs: [
      {
        name: "gemCITAbine",
        dose: 1000,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1 and 8",
        reducible: true,
        note: "Consider 75% reduction in patients >70 years."
      },
      {
        name: "oxaLIPlatin",
        dose: 130,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "Infuse in 250–500 mL D5W over 2 hours. Neurologic toxicity dose levels: −1: 85 mg/m², −2: 65 mg/m². Avoid cold exposure 3–5 days post-infusion.",
        levels: [85, 65]
      },
      {
        name: "pegaspargase",
        dose: 2500,
        unit: "units/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "IV in 100 mL NS over 60 min (preferred over IM). Use 1500 units/m² for older/less fit patients. Monitor vitals during and 1h after. See appendix for toxicity-based dose modifications."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "sodium", "potassium", "magnesium", "calcium", "phosphate", "albumin", "bilirubin (direct and indirect)", "ALT", "alkaline phosphatase", "GGT", "LDH", "triglycerides", "lipase", "random glucose", "uric acid", "INR", "PT", "PTT", "fibrinogen", "HBsAg", "HBsAb", "HBcoreAb", "EBV DNA"],
      cycle: ["CBC & Diff", "creatinine", "sodium", "potassium", "magnesium", "calcium", "phosphate", "albumin", "bilirubin (direct and indirect)", "ALT", "alkaline phosphatase", "GGT", "LDH", "triglycerides", "lipase", "random glucose", "uric acid", "INR", "PT", "PTT", "fibrinogen"],
      conditional: [
        { label: "Baseline if at risk for QT prolongation", tests: ["ECG"] },
        { label: "Day 8", tests: ["CBC & Diff"] },
        { label: "Before each pegaspargase dose", tests: ["INR", "PT", "PTT", "fibrinogen"] },
        { label: "Every Monday and Thursday (pegaspargase cycles)", tests: ["ALT", "alkaline phosphatase", "GGT", "bilirubin (direct and indirect)", "lipase", "random glucose"] },
        { label: "If clinically indicated", tests: ["EBV DNA", "HBV viral load"] }
      ]
    }
  },
  {
    key: "LY-LYGVLD",
    cat: "Lymphoma",
    bcc: true,
    name: "LYGVLD — Gemcitabine, Vinorelbine, DOXOrubicin PLD [Hodgkin lymphoma]",
    cycle: 21,
    notes: "Relapsed or refractory Hodgkin lymphoma eligible for stem cell transplant. Maximum 6 cycles. Post-transplant patients use reduced doses: vinorelbine 15 mg/m², gemcitabine 800 mg/m², DOXOrubicin PLD 10 mg/m². Hepatic dose adjustments required for vinorelbine and DOXOrubicin PLD. High risk of HBV reactivation.",
    drugs: [
      {
        name: "vinorelbine",
        dose: 20,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1 and 8",
        reducible: true,
        note: "IV in 25–50 mL NS over 6 min; flush with 75–125 mL NS after. Post-transplant dose: 15 mg/m². Hepatic adjustment: bilirubin 36–50 µmol/L → 50%; >50 µmol/L → 25%."
      },
      {
        name: "gemCITAbine",
        dose: 1000,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1 and 8",
        reducible: true,
        note: "Post-transplant dose: 800 mg/m². Day 8: reduce to 75% if counts borderline."
      },
      {
        name: "DOXOrubicin pegylated liposomal",
        dose: 15,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1 and 8",
        reducible: true,
        note: "IV in 250 mL D5W; initial rate 1 mg/min. Post-transplant dose: 10 mg/m². Hepatic adjustment: bilirubin 21–51 µmol/L → 75%; >51 µmol/L → 50%."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "total bilirubin", "ALT", "alkaline phosphatase", "LDH", "GGT", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff"],
      conditional: [
        { label: "Baseline/if clinically indicated", tests: ["MUGA scan or echocardiogram"] },
        { label: "Day 8", tests: ["CBC & Diff"] },
        { label: "If clinically indicated", tests: ["total bilirubin", "ALT", "alkaline phosphatase", "GGT", "LDH", "creatinine", "MUGA scan or echocardiogram", "HBV viral load"] }
      ]
    }
  },
  {
    key: "LY-LYHDMRTEM",
    cat: "Lymphoma",
    bcc: true,
    name: "LYHDMRTEM — HD-methoTREXate + riTUXimab + Temozolomide [CNS Lymphoma]",
    cycle: 14,
    notes: "Primary or secondary CNS lymphoma. Cycles q2 weeks. riTUXimab given q2 weeks × 4 doses total. Temozolomide given on alternate (even-numbered) cycles q28 days × up to 4 cycles, Days 7–11. methoTREXate 8 g/m² IV over 4h (prorated to GFR/CrCl 60–100 mL/min); do not use if GFR/CrCl <60 mL/min or third space fluids present. Alkalinizing IV hydration required 4–12h before MTX. Leucovorin rescue starting 24h after MTX. Imaging after Cycle 4 guides duration (max 10 cycles). Very high risk of HBV reactivation.",
    drugs: [
      {
        name: "methoTREXate",
        dose: 8,
        unit: "g/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 (q2 weeks)",
        reducible: true,
        note: "Dose prorated to GFR/CrCl: GFR ≥100 → 8 g/m²; GFR 85 → 85% of 8 g/m²; GFR 60 → 60% of 8 g/m². Do not use if GFR/CrCl <60. Strongly consider dose reduction in elderly. IV in 1000 mL NS over 4h. Requires hospital admission with MTX level monitoring."
      },
      {
        name: "leucovorin",
        dose: 25,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "IV then PO",
        days: "Day 2 onwards (q6h until MTX <0.1 µmol/L)",
        reducible: false,
        note: "Start exactly 24h after start of MTX infusion. IV for first 4 doses then PO. Dose may be escalated based on MTX levels per Bleyer diagram."
      },
      {
        name: "riTUXimab",
        dose: 375,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 or 2 (within 72h of MTX), q2 weeks × 4 doses",
        reducible: false,
        note: "Total 4 doses. First dose must be IV; subsequent doses may be SC (1400 mg fixed). Omit if lymphocyte count >30 × 10⁹/L. Dose banding per appendix."
      },
      {
        name: "temozolomide",
        dose: 150,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 7–11, on alternate cycles (q28d × up to 4 cycles)",
        reducible: true,
        note: "Given at bedtime. Typically starts Cycle 2. Dose banding per appendix. Reduce to 100 mg/m² for ANC 0.5–<1.0 or plt 25–<50. Discontinue if ANC <0.5 or plt <25.",
        levels: [100]
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "electrolytes panel", "total bilirubin", "ALT", "alkaline phosphatase", "LDH", "urine pH", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff", "creatinine", "electrolytes panel", "urine pH"],
      conditional: [
        { label: "Baseline", tests: ["chest radiograph", "CT/MRI brain with contrast", "ocular slit lamp exam", "Folstein MMSE", "ECOG performance status"] },
        { label: "Daily during MTX treatment (q am)", tests: ["creatinine", "electrolytes panel"] },
        { label: "MTX levels", tests: ["plasma methotrexate level (from hour 48, then daily until <0.1 µmol/L)"] },
        { label: "Before temozolomide (Days 4–7)", tests: ["CBC & Diff"] },
        { label: "If clinically indicated post-MTX", tests: ["ALT", "total bilirubin", "alkaline phosphatase", "LDH", "GGT"] },
        { label: "If clinically indicated", tests: ["HBV viral load"] }
      ]
    }
  },
  {
    key: "LY-LYHDMTXPRO",
    cat: "Lymphoma",
    bcc: true,
    name: "LYHDMTXPRO — HD-methoTREXate CNS Prophylaxis [DLBCL]",
    cycle: null,
    notes: "CNS prophylaxis for high-risk DLBCL (testicular, renal involvement, other high-risk features). 4 cycles q2 weeks. methoTREXate 3.5 g/m² IV over 4h; GFR/CrCl must be >60 mL/min. Do not use if third space fluid present or GFR/CrCl <60. Alkalinizing hydration required 4–12h before MTX. Leucovorin rescue from 24h after MTX. Urine pH must be >7 before starting MTX. MTX levels monitored from hour 48 until <0.1 µmol/L. Moderate risk of HBV reactivation.",
    drugs: [
      {
        name: "methoTREXate",
        dose: 3.5,
        unit: "g/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 (q2 weeks × 4 cycles)",
        reducible: true,
        note: "IV in 1000 mL NS over 4h. Requires hospital admission with MTX level monitoring. Urine pH must be >7 before start. Hold if GFR/CrCl <60 mL/min or third space fluids. Reduce to 80% for Grade ≥3 mucositis."
      },
      {
        name: "leucovorin",
        dose: 25,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "IV then PO",
        days: "Day 2 onwards (q6h until MTX <0.1 µmol/L)",
        reducible: false,
        note: "Start exactly 24h after start of MTX infusion. IV for first 4 doses then PO. Continue until MTX level <0.1 µmol/L."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "electrolytes panel", "ALT", "total bilirubin", "alkaline phosphatase", "LDH", "urine pH", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff", "creatinine", "electrolytes panel", "urine pH"],
      conditional: [
        { label: "Baseline", tests: ["chest radiograph", "Folstein MMSE", "ECOG performance status"] },
        { label: "Baseline only", tests: ["LDH"] },
        { label: "Daily during MTX treatment (q am)", tests: ["creatinine", "electrolytes panel"] },
        { label: "MTX levels", tests: ["plasma methotrexate level (from hour 48, then daily until <0.1 µmol/L)"] },
        { label: "If clinically indicated post-MTX", tests: ["ALT", "total bilirubin", "alkaline phosphatase", "LDH", "GGT"] },
        { label: "If clinically indicated", tests: ["HBV viral load"] }
      ]
    }
  },
  {
    key: "LY-LYIBRU",
    cat: "Lymphoma",
    bcc: true,
    name: "LYIBRU — IBRUtinib [R/R CLL/SLL]",
    cycle: 28,
    notes: "Relapsed/refractory CLL or SLL after ≥1 prior therapy. IBRUtinib 420 mg daily PO continuously until progression or unacceptable toxicity. Dose reduction steps for toxicity: 420 → 280 → 140 mg daily (4th occurrence: discontinue). Hepatic impairment (Child-Pugh A): reduce to 140 mg daily. Do not use in moderate/severe hepatic impairment. Monitor blood pressure at every visit. Very high risk of HBV reactivation.",
    drugs: [
      {
        name: "IBRUtinib",
        dose: 420,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Daily, continuously",
        reducible: true,
        note: "Dose reduction steps: 420 → 280 → 140 mg daily then discontinue. Hepatic impairment Child-Pugh A: 140 mg daily.",
        levels: [280, 140]
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "total bilirubin", "ALT", "PT", "PTT", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff", "total bilirubin", "ALT", "blood pressure"],
      conditional: [
        { label: "Baseline if clinically indicated", tests: ["INR", "ECG", "MUGA scan or echocardiogram"] },
        { label: "If clinically indicated", tests: ["creatinine", "PT", "PTT", "INR", "ECG", "MUGA scan or echocardiogram", "HBV viral load"] }
      ]
    }
  },
  {
    key: "LY-LYIDELAR",
    cat: "Lymphoma",
    bcc: true,
    name: "LYIDELAR — Idelalisib + riTUXimab [R/R CLL/SLL]",
    cycle: 28,
    notes: "Relapsed/refractory CLL or SLL not eligible for BTK inhibitor. Idelalisib 150 mg BID continuously. riTUXimab: Cycle 1: 375 mg/m² IV; Cycles 2–8: 500 mg/m² (IV or SC 1600 mg). riTUXimab for max 8 cycles; idelalisib continues beyond Cycle 8 until progression. PCP/PJP prophylaxis mandatory (cotrimoxazole). Monitor CBC/ALT/CMV-DNA q2 weeks for first 3 months. Very high risk of HBV reactivation.",
    drugs: [
      {
        name: "idelalisib",
        dose: 150,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Twice daily, continuously",
        reducible: true,
        note: "Reduce to 100 mg BID for Grade 3 diarrhea/colitis, Grade 3 skin toxicity, or severe hepatotoxicity. Discontinue permanently for Grade 4 toxicity, confirmed SJS/TEN, or Grade 4 hepatotoxicity."
      },
      {
        name: "riTUXimab",
        dose: 375,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Cycle 1 Day 1; then 500 mg/m² Days 1 Cycles 2–8",
        reducible: false,
        note: "Cycle 1: 375 mg/m² IV. Cycles 2–8: 500 mg/m² IV or SC (1600 mg fixed, CLL formulation). First dose must be IV. Max 8 cycles. Dose banding per appendix."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "total bilirubin", "ALT", "alkaline phosphatase", "LDH", "HBsAg", "HBsAb", "HBcoreAb", "Hepatitis C", "CMV-DNA by PCR"],
      cycle: ["CBC & Diff", "total bilirubin", "ALT", "CMV-DNA by PCR"],
      conditional: [
        { label: "First 3 months (every 2 weeks)", tests: ["CBC & Diff", "total bilirubin", "ALT", "CMV-DNA by PCR"] },
        { label: "Months 4–6 (monthly)", tests: ["CBC & Diff", "total bilirubin", "ALT", "CMV-DNA by PCR"] },
        { label: "If clinically indicated", tests: ["HBV viral load"] }
      ]
    }
  },
  {
    key: "LY-LYIT",
    cat: "Lymphoma",
    bcc: true,
    name: "LYIT — Intrathecal methoTREXate + cytaRABine [CNS Prophylaxis/Treatment]",
    cycle: null,
    notes: "Intrathecal chemotherapy for CNS lymphoma prophylaxis or leptomeningeal disease. Twice weekly option (standard): methoTREXate Days 1, 8, 15 and cytaRABine Days 4, 11, 18. Weekly option available. Total 6 doses for prophylaxis; for leptomeningeal disease, continue 6 doses after CSF cytology reverts to negative. Physician-only procedure via lumbar puncture or Ommaya reservoir. Anticoagulants must be held per local guidelines. High risk of HBV reactivation.",
    drugs: [
      {
        name: "methoTREXate",
        dose: 12,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "IT",
        days: "Days 1, 8, 15 (twice weekly) or Days 1, 15, 29 (weekly)",
        reducible: false,
        note: "Intrathecal via lumbar puncture or Ommaya reservoir. Dilute qs to 6 mL with preservative-free NS. Physician administration only."
      },
      {
        name: "cytaRABine",
        dose: 50,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "IT",
        days: "Days 4, 11, 18 (twice weekly) or Days 8, 22, 36 (weekly)",
        reducible: false,
        note: "Intrathecal via lumbar puncture or Ommaya reservoir. Dilute qs to 6 mL with preservative-free NS. Physician administration only. Minimum 48h between doses."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "total bilirubin", "ALT", "CSF cytology", "PTT", "INR", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff", "PTT", "INR", "platelets"],
      conditional: [
        { label: "With each treatment", tests: ["CSF cytology"] },
        { label: "If clinically indicated", tests: ["HBV viral load", "ALT"] }
      ]
    }
  },
  {
    key: "LY-LYIVACR",
    cat: "Lymphoma",
    bcc: true,
    name: "LYIVACR — IVAC + riTUXimab [Burkitt Lymphoma/Leukemia]",
    cycle: 21,
    notes: "Burkitt lymphoma, Burkitt leukemia (ALL-L3), or high-grade B-cell lymphoma with double hit cytogenetics. Part B of Magrath protocol (alternates with LYCODOXMR). Inpatient treatment required. No dose adjustments for first cycle if given as initial or salvage therapy; after CODOX-M, give when ANC >1.0 and plt >100 × 10⁹/L. Intrathecal methoTREXate 12 mg on Days 6 and after Day 18. G-CSF starting Day 7. riTUXimab required for BC Cancer reimbursement. Very high risk of HBV reactivation.",
    drugs: [
      {
        name: "cytaRABine",
        dose: 2000,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1 and 2 (q12h)",
        reducible: true,
        note: "IV in 100 mL NS over 2h. High-dose cytarabine — monitor for cerebellar toxicity."
      },
      {
        name: "ifosFAMIDE",
        dose: 1500,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1–5",
        reducible: true,
        note: "IV in 500 mL NS over 2h. Monitor for ifosfamide encephalopathy."
      },
      {
        name: "mesna",
        dose: 375,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "QID Days 1–5",
        reducible: false,
        note: "IV in 100 mL D5W over 15 min. Uroprotection for ifosfamide."
      },
      {
        name: "etopoSIDE",
        dose: 60,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1–5",
        reducible: true,
        note: "IV in 250–500 mL NS over 45 min using non-DEHP bag and 0.2-micron filter."
      },
      {
        name: "riTUXimab",
        dose: 375,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 4",
        reducible: false,
        note: "First dose must be IV. Subsequent doses may be SC (1400 mg fixed). Dose banding per appendix."
      },
      {
        name: "methoTREXate",
        dose: 12,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "IT",
        days: "Day 6 and after Day 18",
        reducible: false,
        note: "Intrathecal. Require: no blasts in peripheral blood, plt ≥50, INR <1.5, PTT ≤ULN. Physician administration only."
      },
      {
        name: "filgrastim",
        dose: 300,
        unit: "mcg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "SC",
        days: "Day 7 until ANC >1.0 × 10⁹/L",
        reducible: false,
        note: "300 mcg if <75 kg; 480 mcg if 76–110 kg; 600 mcg if >110 kg."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "sodium", "potassium", "ALT", "total bilirubin", "alkaline phosphatase", "GGT", "uric acid", "LDH", "urine pH", "urine dipstick for blood", "HIV", "HBsAg", "HBsAb", "HBcoreAb", "HCAb", "CMV serology", "HSV serology"],
      cycle: ["CBC & Diff", "creatinine", "sodium", "potassium", "ALT", "total bilirubin", "alkaline phosphatase", "GGT", "uric acid", "LDH", "urine dipstick for blood"],
      conditional: [
        { label: "Daily q am during treatment", tests: ["CBC & Diff", "creatinine", "sodium", "potassium"] },
        { label: "Every Monday and Thursday during treatment", tests: ["ALT"] },
        { label: "Daily until 48h after ifosfamide completion", tests: ["urine dipstick for blood"] },
        { label: "Before IT MTX (Day 6 and after Day 18)", tests: ["PTT", "INR", "platelets"] },
        { label: "If clinically indicated", tests: ["HBV viral load"] }
      ]
    }
  },
  {
    key: "LY-LYLENR",
    cat: "Lymphoma",
    bcc: true,
    name: "LYLENR - Lenalidomide + riTUXimab [Relapsed/Refractory FL or MZL]",
    cycle: 28,
    notes: "Relapsed/refractory Grade 1-3a follicular lymphoma or marginal zone lymphoma after ≥1 prior line. Excludes transformed lymphoma, FL Grade 3b, and riTUXimab-refractory disease (no response or relapse within 6 months of last riTUXimab dose). RevAid Program registration required. Total 12 cycles: Cycles 1-5 = R² (lenalidomide + riTUXimab); Cycles 6-12 = lenalidomide monotherapy. Very high risk of HBV reactivation. VZV prophylaxis (valACYclovir 500 mg PO daily) recommended. VTE prophylaxis (ASA / warfarin / DOAC / LMWH) recommended for duration of lenalidomide.",
    drugs: [
      {
        name: "riTUXimab",
        dose: 375,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV (first dose mandatory IV); SC 1400 mg fixed dose for subsequent doses if IV tolerated",
        days: "Cycle 1: Days 1, 8, 15, 22; Cycles 2-5: Day 1 only",
        reducible: false,
        note: "No dose reductions for riTUXimab. First dose must be IV (highest reaction risk). IV: 250-500 mL NS, start 50 mg/h, increase q30 min to 400 mg/h. SC: 1400 mg fixed (11.7 mL) over 5 min into abdominal wall after first IV tolerated. IV dose selected per dose-banding table (see PDF appendix). Discontinued after Cycle 5."
      },
      {
        name: "lenalidomide",
        dose: 20,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1-21 of each 28-day cycle (Cycles 1-12)",
        reducible: true,
        note: "Evening dosing preferred. Renal: CrCl ≥60 → 20 mg; CrCl 30-59 → 10 mg (may escalate to 15 mg after 2 cycles if no Grade 3-4 toxicity). Contraindicated if CrCl <30. Continues as monotherapy Cycles 6-12.",
        levels: [15, 10, 5, 2.5]
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "ALT", "total bilirubin", "uric acid", "LDH", "HBsAg", "HBsAb", "HBcoreAb", "TSH", "quantitative beta-hCG (if FCBP, 7-14 days and 24 h prior to initial Rx)"],
      cycle: ["CBC & Diff", "creatinine", "ALT", "total bilirubin", "LDH"],
      conditional: [
        { label: "Cycle 1 prior to Days 8, 15, 22", tests: ["CBC & Diff"] },
        { label: "Every 3 months", tests: ["TSH"] },
        { label: "If FCBP: weekly during Cycle 1, then every 4 weeks", tests: ["quantitative beta-hCG"] },
        { label: "If clinically indicated", tests: ["CBC & Diff weekly", "HBV viral load (see SCHBV)"] }
      ]
    }
  },
  {
    key: "LY-LYMCALT",
    cat: "Lymphoma",
    bcc: true,
    name: "LYMCALT — LYCHOPR/LYDHAPR Alternating [Mantle Cell Lymphoma]",
    cycle: 21,
    notes: "Newly diagnosed transplant-eligible mantle cell lymphoma with ≥1 high-risk feature (TP53, Ki-67 ≥30%, blastoid/pleomorphic, intermediate/high MIPI). 6 cycles total alternating q21d: Cycles 1, 3, 5 = LYCHOPR; Cycles 2, 4, 6 = LYDHAPR. Refer to LYCHOPR and LYDHAPR protocols for individual drug doses, dose modifications, and precautions. Very high risk of HBV reactivation. Exclude CrCl <45 mL/min.",
    drugs: [
      {
        meta: true,
        name: "See LYCHOPR protocol",
        dose: 0,
        unit: "",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "IV/PO",
        days: "Cycles 1, 3, 5",
        reducible: false,
        note: "LYCHOPR: DOXOrubicin, CYCLOphosphamide, vinCRIStine, predniSONE + riTUXimab. Refer to LYCHOPR protocol for doses."
      },
      {
        meta: true,
        name: "See LYDHAPR protocol",
        dose: 0,
        unit: "",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "IV/PO",
        days: "Cycles 2, 4, 6",
        reducible: false,
        note: "LYDHAPR: dexamethasone, high-dose cytaRABine, platinum + riTUXimab. Refer to LYDHAPR protocol for doses."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "total bilirubin", "ALT", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["Refer to LYCHOPR or LYDHAPR protocol as applicable"],
      conditional: [
        { label: "Baseline if clinically indicated", tests: ["alkaline phosphatase", "sodium", "potassium", "magnesium", "calcium"] }
      ]
    }
  },
  {
    key: "LY-LYMECHLOR",
    cat: "Lymphoma",
    bcc: true,
    name: "LYMECHLOR — Chlormethine Gel [Mycosis Fungoides/CTCL]",
    cycle: null,
    notes: "Topical treatment for cutaneous T-cell lymphoma (mycosis fungoides). Apply 0.016% gel (160 mcg/g) to lesions once daily as directed by Skin Lymphoma Team. Apply to dry skin ≥4h before or 30 min after washing. Apply within 30 min of removal from refrigerator; return to refrigerator after use. Continue until 1 year after remission. Reduce frequency to every 3 days for skin ulceration/blistering/moderate-severe dermatitis; titrate back up as tolerated. No lab monitoring required.",
    drugs: [
      {
        name: "chlormethine (mechlorethamine)",
        dose: 0.016,
        unit: "% gel",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "Topical",
        days: "Daily to lesions",
        reducible: true,
        note: "Apply thin layer to lesions. 0.016% = 160 mcg/g. Reduce to every-3-days frequency for significant skin toxicity, then titrate back to daily as tolerated."
      }
    ],
    labs: {
      baseline: [],
      cycle: [],
      conditional: []
    }
  },
  {
    key: "LY-LYMFBEX",
    cat: "Lymphoma",
    bcc: true,
    name: "LYMFBEX — Bexarotene [Mycosis Fungoides/Sézary Syndrome]",
    cycle: null,
    notes: "Advanced/progressive/refractory mycosis fungoides or Sézary syndrome after alitretinoin and ≥1 prior systemic therapy. Health Canada Special Access Programme approval required. Starting dose 300 mg/m²/day PO once daily with meal. If no response after 2 months and no major toxicity, escalate to 400 mg/m²/day; discontinue if no response after further 2 months. Duration: 3 months post-CR, or until progression (max 8 months). Monitor for hypothyroidism (50%), hyperlipidemia (majority), and hepatotoxicity. Contraindicated with gemfibrozil or tamoxifen.",
    drugs: [
      {
        name: "bexarotene",
        dose: 300,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Daily, continuously",
        reducible: true,
        note: "Take once daily with a meal. May escalate to 400 mg/m²/day after 2 months if no response and no major toxicity. Reduce to 200 mg/m²/day for ANC 0.5–<0.8 or fasting triglycerides 3.5–4.4 mmol/L. Suspend for ANC <0.5, triglycerides ≥4.5 mmol/L, or any ALT/bilirubin >3× ULN.",
        levels: [200]
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "ALT", "total bilirubin", "fasting triglycerides", "LDH", "T4", "TSH", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff", "ALT", "total bilirubin", "fasting triglycerides", "TSH", "T4"],
      conditional: [
        { label: "Weekly after initiating (until stable, ~2–4 weeks)", tests: ["ALT", "total bilirubin", "fasting triglycerides"] },
        { label: "Every 2 months", tests: ["CBC & Diff", "ALT", "total bilirubin", "fasting triglycerides", "TSH", "T4"] },
        { label: "If clinically indicated", tests: ["HBV viral load"] }
      ]
    }
  },

{
    key: "LY-LYMFECP",
    cat: "Lymphoma",
    bcc: true,
    name: "LYMFECP — ECP [Mycosis Fungoides/Sézary]",
    cycle: 28,
    notes: "Extracorporeal photopheresis (ECP) on two consecutive days every 4 weeks. methoxsalen (UVADEX) dose = 0.017 × final buffy coat volume (mL); typically 3–6 mL/treatment (6–12 mg). Reassess all sites of disease after 6 months; initial treatment is 6 months. Consider further 6 months for responders.",
    drugs: [
      {
        name: "methoxsalen (UVADEX)",
        dose: null,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "Intraluminal (ECP)",
        days: "Days 1–2 every 4 weeks",
        reducible: false,
        note: "Dose = 0.017 × buffy coat volume (mL); typically 6–12 mg per treatment. Infused into product bag immediately before phototherapy."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "total bilirubin", "ALT", "smear for Sézary cells", "CD4 count", "CD8 count", "LDH", "PTT", "INR", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff"],
      conditional: []
    }
  },
  {
    key: "LY-LYMIBRU",
    cat: "Lymphoma",
    bcc: true,
    name: "LYMIBRU — IBRUtinib [Relapsed/Refractory Mantle Cell Lymphoma]",
    cycle: null,
    notes: "Continuous daily dosing until disease progression or unacceptable toxicity. Dose reductions for myelosuppression: restart at 560 mg → 420 mg → 280 mg after successive events. Hepatic impairment (Child-Pugh A): reduce to 140 mg daily; avoid in Child-Pugh B/C. No renal dose adjustment for mild-moderate impairment. Monitor for cardiac arrhythmias and cardiac failure.",
    drugs: [
      {
        name: "IBRUtinib",
        dose: 560,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Daily, continuously",
        reducible: true,
        levels: [420, 280],
        note: null
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "total bilirubin", "ALT", "PTT", "INR", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff", "total bilirubin", "ALT"],
      conditional: [
        { label: "If clinically indicated", tests: ["creatinine", "PTT", "INR", "ECG", "MUGA scan or echocardiogram", "HBV viral load"] }
      ]
    }
  },
  {
    key: "LY-LYNIV4",
    cat: "Lymphoma",
    bcc: true,
    name: "LYNIV4 — nivolUMAb 4-weekly [Relapsed/Refractory Hodgkin Lymphoma]",
    cycle: 28,
    notes: "nivolumab 6 mg/kg (max 480 mg) IV every 4 weeks. No specific dose modifications; toxicity managed by treatment delay per SCIMMUNE protocol. If pseudo-progression suspected, may continue 8 more weeks; discontinue if confirmed progression on subsequent scan (8–12 weeks). CAP approval not required to switch between LYNIV and LYNIV4.",
    drugs: [
      {
        name: "nivolUMAb",
        dose: 6,
        unit: "mg/kg",
        basis: "weight",
        max: 480,
        weightCap: null,
        route: "IV",
        days: "Day 1 every 4 weeks",
        reducible: false,
        note: "Administer in 50–100 mL NS over 30 min using 0.2 micron in-line filter. Select dose per dose banding table."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "morning serum cortisol", "chest x-ray", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH"],
      conditional: [
        { label: "If clinically indicated", tests: ["chest x-ray", "morning serum cortisol", "lipase", "serum/urine HCG", "free T3", "free T4", "serum ACTH", "testosterone", "estradiol", "FSH", "LH", "ECG", "CRP", "creatinine kinase (CK)", "troponin", "HBV viral load"] }
      ]
    }
  },
  {
    key: "LY-LYNIV",
    cat: "Lymphoma",
    bcc: true,
    name: "LYNIV — nivolUMAb 2-weekly [Relapsed/Refractory Hodgkin Lymphoma]",
    cycle: 14,
    notes: "nivolumab 3 mg/kg (max 240 mg) IV every 2 weeks. No specific dose modifications; toxicity managed by treatment delay per SCIMMUNE protocol. If pseudo-progression suspected, may continue 6 more weeks; discontinue if confirmed progression on subsequent scan (6–10 weeks). CAP approval not required to switch between LYNIV and LYNIV4.",
    drugs: [
      {
        name: "nivolUMAb",
        dose: 3,
        unit: "mg/kg",
        basis: "weight",
        max: 240,
        weightCap: null,
        route: "IV",
        days: "Day 1 every 2 weeks",
        reducible: false,
        note: "Administer in 50–100 mL NS over 30 min using 0.2 micron in-line filter. Select dose per dose banding table."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "morning serum cortisol", "chest x-ray", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH"],
      conditional: [
        { label: "If clinically indicated", tests: ["chest x-ray", "morning serum cortisol", "lipase", "serum/urine HCG", "free T3", "free T4", "serum ACTH", "testosterone", "estradiol", "FSH", "LH", "ECG", "CRP", "creatinine kinase (CK)", "troponin", "HBV viral load"] }
      ]
    }
  },
  {
    key: "LY-LYOBCHLOR",
    cat: "Lymphoma",
    bcc: true,
    name: "LYOBCHLOR — oBINutuzumab + Chlorambucil [Untreated CLL/SLL]",
    cycle: 28,
    notes: "6 cycles total. Cycle 1: oBINutuzumab 100 mg Day 1, 900 mg Day 2, 1000 mg Days 8 and 15. Cycles 2–6: oBINutuzumab 1000 mg Day 1. Chlorambucil 0.5 mg/kg Days 1 and 15 (max 0.8 mg/kg); increase by 0.1 mg/kg if ANC >3.5 × 10⁹/L. No dose reductions for oBINutuzumab; infusion may be slowed, held, or discontinued. Delay all drugs if ANC <1.2 × 10⁹/L or platelets <80 × 10⁹/L.",
    drugs: [
      {
        name: "oBINutuzumab",
        dose: 1000,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Cycle 1: 100 mg Day 1, 900 mg Day 2, 1000 mg Days 8 & 15; Cycles 2–6: 1000 mg Day 1",
        reducible: false,
        note: "Cycle 1 Day 1: 100 mg in 100 mL NS at 25 mg/h × 4 h. Day 2: 900 mg in 250 mL NS, titrate 50–400 mg/h. Days 8/15 and Cycles 2–6: 1000 mg in 250 mL NS, titrate 100–400 mg/h."
      },
      {
        name: "chlorambucil",
        dose: 0.5,
        unit: "mg/kg",
        basis: "weight",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1 and 15 each cycle",
        reducible: true,
        note: "Starting dose 0.5 mg/kg; increase by 0.1 mg/kg if ANC >3.5 × 10⁹/L. Max 0.8 mg/kg every 2 weeks. Round to nearest 2 mg tablet."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "ALT", "total bilirubin", "sodium", "potassium", "uric acid", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff"],
      conditional: [
        { label: "If clinically indicated", tests: ["phosphate", "calcium", "uric acid", "ALT", "HBV viral load"] }
      ]
    }
  },
  {
    key: "LY-LYPALL",
    cat: "Lymphoma",
    bcc: true,
    name: "LYPALL — Palliative Single-Agent Chemotherapy [Lymphoma/Myeloma]",
    cycle: null,
    notes: "Palliative/symptomatic single-agent chemotherapy for lymphoproliferative diseases including Hodgkin lymphoma, NHL, and multiple myeloma. Doses and schedules must be individualized. Usual doses listed; reasonable ranges apply. Dose reductions for toxicity must be individualized. Methotrexate requires special caution if CrCl <30 mL/min.",
    drugs: [
      {
        name: "CYCLOphosphamide",
        dose: 600,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Every 3–4 weeks (or 300 mg/m²/day × 5 days PO; or 100 mg/day PO continuous)",
        reducible: true,
        note: "Range: 400–1200 mg/m² IV or 200–450 mg/m²/day × 5 days PO or 0.1 mg/kg/day PO continuous"
      },
      {
        name: "chlorambucil",
        dose: 0.4,
        unit: "mg/kg",
        basis: "weight",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Every 2–3 weeks (or 0.2 mg/kg/day × 21 days q6–8 weeks)",
        reducible: true,
        note: "Range: 0.3–0.8 mg/kg"
      },
      {
        name: "vinCRIStine",
        dose: 1.2,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Every 2–3 weeks",
        reducible: true,
        note: "Range: 0.8–1.4 mg/m²"
      },
      {
        name: "predniSONE",
        dose: 40,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Daily or every other day",
        reducible: true,
        note: "Range: 20–60 mg/m²"
      },
      {
        name: "procarbazine",
        dose: 100,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1–14 every 4–6 weeks",
        reducible: true,
        note: "Range: 60–100 mg/m²/day × 14 days"
      },
      {
        name: "etopoSIDE",
        dose: 100,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1–3 to 5 every 3–4 weeks",
        reducible: true,
        note: "Range: 50–300 mg/m²/day × 3–5 days"
      },
      {
        name: "dexamethasone",
        dose: 20,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1–5 every 2–4 weeks (or 40 mg Days 1–4, 9–12, 17–20 q4–5 weeks)",
        reducible: true,
        note: "Range: 20–40 mg/day × 5 days"
      },
      {
        name: "methoTREXate",
        dose: 20,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Twice weekly",
        reducible: true,
        note: "Range: 15–25 mg/m². Use caution if CrCl <30 mL/min."
      },
      {
        name: "gemcitabine",
        dose: 1000,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1 and 8 of a 21–28 day cycle",
        reducible: true,
        note: "Range: 900–1200 mg/m²"
      },
      {
        name: "vinblastine",
        dose: 6,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Every 1–4 weeks",
        reducible: true,
        note: "For Hodgkin lymphoma only. Range: 4–8 mg/m²."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "total bilirubin", "ALT", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff"],
      conditional: [
        { label: "If clinically indicated (throughout treatment)", tests: ["total bilirubin", "creatinine", "ALT", "HBV viral load"] }
      ]
    }
  },
  {
    key: "LY-LYPEM6",
    cat: "Lymphoma",
    bcc: true,
    name: "LYPEM6 — pembrolIZUmab 6-weekly [Relapsed/Refractory Hodgkin Lymphoma]",
    cycle: 42,
    notes: "pembrolizumab 4 mg/kg (max 400 mg) IV every 6 weeks. Maximum 18 cycles (6-weekly) or 2 years of treatment. No specific dose modifications; toxicity managed by treatment delay per SCIMMUNE protocol. Retreatment allowed for an additional 9 cycles (6-weekly) if progression after completed initial course. CAP approval not required to switch between 3-weekly and 6-weekly dosing.",
    drugs: [
      {
        name: "pembrolIZUmab",
        dose: 4,
        unit: "mg/kg",
        basis: "weight",
        max: 400,
        weightCap: null,
        route: "IV",
        days: "Day 1 every 6 weeks",
        reducible: false,
        note: "Administer in 50 mL NS over 30 min using 0.2 micron in-line filter. Select dose per dose banding table."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "morning serum cortisol", "chest x-ray", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH"],
      conditional: [
        { label: "If clinically indicated", tests: ["chest x-ray", "morning serum cortisol", "lipase", "serum/urine HCG", "free T3", "free T4", "random glucose", "serum ACTH", "testosterone", "estradiol", "FSH", "LH", "ECG", "CRP", "creatinine kinase (CK)", "troponin"] }
      ]
    }
  },
  {
    key: "LY-LYPEM",
    cat: "Lymphoma",
    bcc: true,
    name: "LYPEM — pembrolIZUmab 3-weekly [Relapsed/Refractory Hodgkin Lymphoma]",
    cycle: 21,
    notes: "pembrolizumab 2 mg/kg (max 200 mg) IV every 3 weeks. Maximum 35 cycles (3-weekly) or 2 years of treatment. No specific dose modifications; toxicity managed by treatment delay per SCIMMUNE protocol. Retreatment allowed for an additional 18 cycles (3-weekly) if progression after completed initial course. CAP approval not required to switch between 3-weekly and 6-weekly dosing.",
    drugs: [
      {
        name: "pembrolIZUmab",
        dose: 2,
        unit: "mg/kg",
        basis: "weight",
        max: 200,
        weightCap: null,
        route: "IV",
        days: "Day 1 every 3 weeks",
        reducible: false,
        note: "Administer in 50 mL NS over 30 min using 0.2 micron in-line filter. Select dose per dose banding table."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "morning serum cortisol", "chest x-ray", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH"],
      conditional: [
        { label: "If clinically indicated", tests: ["chest x-ray", "morning serum cortisol", "lipase", "serum/urine HCG", "free T3", "free T4", "random glucose", "serum ACTH", "testosterone", "estradiol", "FSH", "LH", "ECG", "CRP", "creatinine kinase (CK)", "troponin", "HBV viral load"] }
      ]
    }
  },
  {
    key: "LY-LYPOLABR",
    cat: "Lymphoma",
    bcc: true,
    name: "LYPOLABR — Pola-BR [Relapsed/Refractory DLBCL, Transplant-Ineligible]",
    cycle: 21,
    notes: "6 cycles (may extend to 28-day interval if needed for tolerability). Cycle 1: riTUXimab 375 mg/m² Day 1 IV, polatuzumab vedotin 1.8 mg/kg Day 2, bendamustine 90 mg/m² Days 2–3. Cycles 2–6: polatuzumab Day 1, bendamustine Days 1–2, riTUXimab Day 1 or 2 (within 72 h of pola). Filgrastim mandatory (5 mcg/kg daily × 5 days starting Day 7). Polatuzumab Level −1: 1.4 mg/kg (permanent reduction for Grade 2–3 neuropathy). Bendamustine Level −1: 70 mg/m², Level −2: 50 mg/m². No dose reductions for riTUXimab.",
    drugs: [
      {
        name: "polatuzumab vedotin",
        dose: 1.8,
        unit: "mg/kg",
        basis: "weight",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 2 (Cycle 1); Day 1 (Cycles 2–6)",
        reducible: true,
        levels: [1.4],
        note: "Cycle 1: infuse in 50–250 mL NS over 90 min with 0.2 micron filter. Subsequent: over 30 min if prior infusion tolerated. Monitor for 90 min after first dose."
      },
      {
        name: "bendamustine",
        dose: 90,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 2–3 (Cycle 1); Days 1–2 (Cycles 2–6)",
        reducible: true,
        levels: [70, 50],
        note: "Infuse in 250–500 mL NS over 60 min."
      },
      {
        name: "riTUXimab",
        dose: 375,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV or SC",
        days: "Day 1 (Cycle 1); Day 1 or 2 (Cycles 2–6, within 72 h of polatuzumab)",
        reducible: false,
        note: "First dose must be IV (375 mg/m²). If IV tolerated (no severe reaction), subsequent doses may be SC (fixed 1400 mg). IV: 250–500 mL NS over 90 min to 8 h. SC: 1400 mg in 11.7 mL over 5 min into abdominal wall."
      },
      {
        name: "filgrastim",
        dose: 5,
        unit: "mcg/kg",
        basis: "weight",
        max: null,
        weightCap: null,
        route: "SC",
        days: "Days 7–11 (5 days starting Day 7) each cycle",
        reducible: false,
        note: "Mandatory primary prophylaxis. 300 mcg if ≤75 kg; 480 mcg if 76–110 kg; 600 mcg if >110 kg. Submit special authority request to Pharmacare."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "ALT", "total bilirubin", "alkaline phosphatase", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff", "creatinine", "total bilirubin", "ALT", "alkaline phosphatase"],
      conditional: [
        { label: "If clinically indicated", tests: ["sodium", "potassium", "calcium", "albumin", "phosphate", "uric acid", "direct bilirubin", "HBV viral load"] }
      ]
    }
  },
  {
    key: "LY-LYPRA",
    cat: "Lymphoma",
    bcc: true,
    name: "LYPRA — Pralatrexate [Relapsed/Refractory PTCL]",
    cycle: 28,
    notes: "Cycle 1 dose escalation (Columbia protocol): 10 mg/m² Day 1, 20 mg/m² Day 8, 30 mg/m² Day 15 (Day 22 rest). Cycles 2+: 30 mg/m² Days 1, 8, 15 (Day 22 rest). Leucovorin 15 mg BID PO Days 3–6, 10–13, 17–20 each cycle. Mandatory vitamin supplementation: folic acid 1–1.25 mg PO daily (start ≥10 days before, continue 30 days after last dose); vitamin B12 1000 mcg IM within 10 weeks prior and every 8–10 weeks during therapy. Renal dosing: severe CrCl 15–29 mL/min reduce to 15 mg/m²; avoid if CrCl <15 mL/min. Once a dose reduction occurs, do not re-escalate.",
    drugs: [
      {
        name: "pralatrexate",
        dose: 30,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1, 8, 15 (Cycles 2+); escalation in Cycle 1: 10→20→30 mg/m²",
        reducible: true,
        levels: [20],
        note: "IV push over 3–5 min. Cycle 1: 10 mg/m² Day 1, 20 mg/m² Day 8, 30 mg/m² Day 15. Omitted doses not made up. For severe renal impairment (CrCl 15–29 mL/min): 15 mg/m²; avoid if CrCl <15 mL/min."
      },
      {
        name: "leucovorin",
        dose: 15,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "BID Days 3–6, 10–13, 17–20 (starting 2 days after each pralatrexate dose)",
        reducible: false,
        note: "To reduce risk of mucositis."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH"],
      conditional: [
        { label: "Before each weekly treatment", tests: ["CBC & Diff"] },
        { label: "If clinically indicated", tests: ["HBV viral load"] }
      ]
    }
  },
  {
    key: "LY-LYRICE",
    cat: "Lymphoma",
    bcc: true,
    name: "LYRICE — R-ICE [Relapsed/Refractory Aggressive B-Cell NHL]",
    cycle: 21,
    notes: "Up to 6 cycles. ifosfamide 1667 mg/m²/day + mesna 1667 mg/m²/day (IV, concurrent via Y-site) Days 1–3; mesna 2000 mg PO at 2 h and 4 h after ifosfamide on Days 1–3; carboplatin AUC 5 Day 1 (max 800 mg); etoposide 100 mg/m²/day Days 1–3; riTUXimab 375 mg/m² Day 1 (or 2 or 3). Consider 75% dose reduction of ifosfamide, IV mesna, carboplatin, and etoposide for patients >70 years. Discontinue if CrCl <60 mL/min.",
    drugs: [
      {
        name: "ifosfamide",
        dose: 1667,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1, 2, 3",
        reducible: true,
        note: "Total dose per cycle 5000 mg/m². Infuse in 500 mL NS over 2 h concurrent with mesna via Y-site. Consider 75% dose for patients >70 years."
      },
      {
        name: "mesna",
        dose: 1667,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1, 2, 3 (concurrent with ifosfamide)",
        reducible: true,
        note: "IV: infuse in 500 mL NS over 2 h concurrently with ifosfamide via Y-site. Also mesna 2000 mg PO at 2 h and 4 h after ifosfamide completion each day."
      },
      {
        name: "CARBOplatin",
        dose: 5,
        unit: "AUC",
        basis: "auc",
        max: 800,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "Calvert formula: AUC 5 × (GFR + 25). Max 800 mg. GFR may use lab-reported MDRD or nuclear renogram; Cockcroft-Gault acceptable. Same method throughout treatment."
      },
      {
        name: "etopoSIDE",
        dose: 100,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1, 2, 3",
        reducible: true,
        note: "Total dose 300 mg/m² per cycle. Infuse in 250–1000 mL NS over 45–90 min using non-DEHP equipment with 0.2 micron in-line filter. Consider 75% dose for patients >70 years."
      },
      {
        name: "riTUXimab",
        dose: 375,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV or SC",
        days: "Day 1 (or Day 2 or 3)",
        reducible: false,
        note: "First dose must be IV (250–500 mL NS over 90 min to 8 h). If IV tolerated (no severe reaction), subsequent doses may be SC (fixed 1400 mg/11.7 mL over 5 min). Select dose per dose banding table."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "total bilirubin", "ALT", "alkaline phosphatase", "LDH", "creatinine", "calcium", "HBsAg", "HBsAb", "HBcoreAb", "hepatitis C antibody (HepCAb)", "HIV", "pregnancy test (women of childbearing age)"],
      cycle: ["CBC & Diff", "total bilirubin", "LDH", "creatinine"],
      conditional: [
        { label: "Prior to each ifosfamide dose (Days 1, 2, 3)", tests: ["urine dipstick for blood"] },
        { label: "If clinically indicated", tests: ["ALT", "HBV viral load"] }
      ]
    }
  },
  {
    key: "LY-LYRITUX",
    cat: "Lymphoma",
    bcc: true,
    name: "LYRITUX — riTUXimab Single-Agent [Follicular/Indolent Lymphoma]",
    cycle: 7,
    notes: "riTUXimab 375 mg/m² weekly × 4 doses. First dose must be IV; subsequent doses may be SC (1400 mg fixed) if IV tolerated. No dose modifications. Four treatments reimbursed by BC Cancer; further treatments require CAP approval. May retreat for disease relapsing >12 months from first-line treatment.",
    drugs: [
      {
        name: "riTUXimab",
        dose: 375,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV or SC",
        days: "Weekly × 4 doses (Days 1, 8, 15, 22)",
        reducible: false,
        note: "First dose IV in 250–500 mL NS (1–4 mg/mL) over 3–8 h. Subsequent doses may be SC (fixed 1400 mg/11.7 mL over 5 min) if IV tolerated. Select dose per dose banding table."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "total bilirubin", "ALT", "alkaline phosphatase", "LDH", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff (before doses 1 and 4)"],
      conditional: [
        { label: "If clinically indicated", tests: ["HBV viral load", "ALT"] }
      ]
    }
  },
  {
    key: "LY-LYRITZ",
    cat: "Lymphoma",
    bcc: true,
    name: "LYRITZ — riTUXimab Priming for ⁹⁰Y-Ibritumomab [Relapsed Indolent Lymphoma]",
    cycle: null,
    notes: "Radioimmunotherapy (RIT) administered at BC Cancer Vancouver only. riTUXimab 250 mg/m² × 2 doses: Day 1, then Day 7, 8, or 9. Second riTUXimab dose is followed immediately by ⁹⁰Y-ibritumomab tiuxetan (ZEVALIN®) in Nuclear Medicine. RIT dose determined by Nuclear Medicine. No dose modifications for riTUXimab. Requires platelet count >100 × 10⁹/L, <25% marrow involvement, and <25% marrow previously irradiated.",
    drugs: [
      {
        name: "riTUXimab",
        dose: 250,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 and Day 7, 8, or 9 (two doses approximately one week apart)",
        reducible: false,
        note: "IV in 250 mL NS (1–4 mg/mL) over 2–8 h. Start at 50 mg/h, increase 50 mg/h q30 min to max 400 mg/h. Day 9 dose: if no adverse event, start at 100 mg/h. Select dose per dose banding table. Second dose immediately followed by ⁹⁰Y-ibritumomab in Nuclear Medicine."
      },
      {
        name: "⁹⁰Y-ibritumomab tiuxetan (ZEVALIN®)",
        dose: null,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Immediately after second riTUXimab dose (Day 7, 8, or 9)",
        reducible: false,
        note: "Administered in Nuclear Medicine Department. Dose determined by Nuclear Medicine."
      }
    ],
    labs: {
      baseline: ["bone marrow biopsy", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff (before Day 1)", "total bilirubin", "ALT", "creatinine"],
      conditional: [
        { label: "Post Day 9 (recommended)", tests: ["CBC & Diff (weekly for 12 weeks or until counts recover)"] },
        { label: "If clinically indicated", tests: ["HBV viral load"] }
      ]
    }
  },
  {
    key: "LY-LYRMTN",
    cat: "Lymphoma",
    bcc: true,
    name: "LYRMTN — riTUXimab Maintenance [Indolent/Mantle Cell Lymphoma]",
    cycle: 91,
    notes: "riTUXimab 375 mg/m² every 3 months for 8 doses total (2 years). Given every 3 months (not weekly as in single-agent use). First maintenance dose IV; subsequent doses may be SC (1400 mg fixed) if prior IV or SC riTUXimab tolerated. Delay 1 week if ANC <1.2 × 10⁹/L or platelets <75 × 10⁹/L. For mantle cell lymphoma: after first-line chemotherapy only; not recommended for relapsed MCL.",
    drugs: [
      {
        name: "riTUXimab",
        dose: 375,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV or SC",
        days: "Every 3 months × 8 doses (2 years)",
        reducible: false,
        note: "IV: first 50 mL over 30 min, then remaining volume over 60 min (total 90 min) in 250–500 mL NS. Subsequent doses may be SC (fixed 1400 mg/11.7 mL over 5 min) if prior riTUXimab IV or SC tolerated. Select dose per dose banding table."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "total bilirubin", "ALT", "HBsAg", "HBsAb", "HBcoreAb", "hepatitis C antibody"],
      cycle: ["CBC & Diff"],
      conditional: [
        { label: "If clinically indicated", tests: ["HBV viral load", "ALT"] }
      ]
    }
  },
  {
    key: "LY-LYSILTUX",
    cat: "Lymphoma",
    bcc: true,
    name: "LYSILTUX — Siltuximab [Multicentric Castleman's Disease, HIV-/HHV-8-]",
    cycle: 21,
    notes: "Siltuximab 11 mg/kg IV every 3 weeks until disease progression. Indefinite administration required for symptom control; interval may be lengthened after >6 months of sustained response. Hold for ANC <1 × 10⁹/L, platelets <50 × 10⁹/L, or hemoglobin ≥170 g/L (siltuximab may raise Hgb in MCD).",
    drugs: [
      {
        name: "siltuximab",
        dose: 11,
        unit: "mg/kg",
        basis: "weight",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 every 3 weeks",
        reducible: false,
        note: "Administer in 250 mL D5W over 1 hour using 0.2 micron in-line filter."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "hemoglobin", "creatinine", "total bilirubin", "ALT", "LDH", "CRP", "HBsAg", "HBsAb", "HBcoreAb", "hepatitis C antibody"],
      cycle: ["CBC & Diff (Cycles 1–4 prior to each treatment; Cycles 5+ prior to alternate/even cycles)"],
      conditional: [
        { label: "If clinically indicated", tests: ["HBV viral load", "ALT"] }
      ]
    }
  },

{
    key: "LY-LYSMILE",
    cat: "Lymphoma",
    bcc: true,
    name: "LYSMILE — SMILE [NK/T-cell Lymphoma]",
    cycle: 28,
    notes: "For newly diagnosed or relapsed/refractory NK/T-cell lymphoma. Cycle 1 Day 1: methoTREXate 2 g/m² IV over 6 h with leucovorin rescue starting exactly 24 h after start of infusion. Days 2–4: dexamethasone 40 mg PO, etopoSIDE 100 mg/m²/d IV, ifosFAMIDE 1500 mg/m²/d IV, mesna 1500 mg/m²/d IV (start 1 h before ifosFAMIDE). Day 5: mesna 750 mg/m² IV over 12 h. Day 6+: filgrastim SC daily until ANC >1×10⁹/L. Day 8: pegaspargase 1500 or 2500 units/m² IV/IM. Repeat every 28 days (2 cycles minimum, up to 6 maximum). MethoTREXate must be given in a hospital with rapid methoTREXate level reporting. Leucovorin continued until plasma methoTREXate <0.1 micromol/L. Alkalinize urine before methoTREXate: IV D5W + KCl 20 mEq/L + NaHCO₃ 150 mEq/L at 125 mL/h ≥4 h prior until urine pH >7.",
    drugs: [
      {
        name: "methoTREXate",
        dose: 2000,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "IV in 1000 mL NS over 6 h; requires leucovorin rescue starting 24 h after infusion start"
      },
      {
        name: "leucovorin (folinic acid)",
        dose: 25,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "IV/PO",
        days: "Starting 24 h after methoTREXate, q6h x 4 doses IV then PO until methoTREXate <0.1 micromol/L",
        reducible: false,
        note: "IV in 50 mL NS over 15 min; switch to PO until methoTREXate level <0.1 micromol/L"
      },
      {
        name: "dexamethasone",
        dose: 40,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 2–4",
        reducible: true,
        note: "30 min before chemo"
      },
      {
        name: "etopoSIDE",
        dose: 100,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 2–4",
        reducible: true,
        note: "IV in 250–1000 mL NS over 45 min–1.5 h; use non-DEHP equipment with 0.2 micron in-line filter"
      },
      {
        name: "ifosFAMIDE",
        dose: 1500,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 2–4",
        reducible: true,
        note: "IV in 500 mL NS over 20 h"
      },
      {
        name: "mesna",
        dose: 1500,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 2–4 (start 1 h before ifosFAMIDE)",
        reducible: false,
        note: "IV in 1000 mL NS over 22 h; plus mesna 750 mg/m² IV over 12 h on Day 5 after Day 4 mesna infusion ends"
      },
      {
        name: "pegaspargase",
        dose: 2500,
        unit: "units/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV/IM",
        days: "Day 8",
        reducible: true,
        note: "1500 units/m² for older/less fit patients; IV in 100 mL NS over 1 h preferred; monitor vitals at 15, 30, 60 min and observe 1 h after"
      },
      {
        name: "filgrastim",
        dose: 5,
        unit: "mcg/kg",
        basis: "weight",
        max: null,
        weightCap: null,
        route: "SC",
        days: "Days 6+ daily until ANC >1×10⁹/L",
        reducible: false,
        note: "Rounded to nearest prefilled syringe: 300 mcg (≤75 kg), 480 mcg (>75 kg), 600 mcg (>110 kg); start at least 24 h after end of chemotherapy"
      }
    ],
    labs: {
      baseline: [
        "CBC & Diff", "creatinine", "electrolytes panel", "phosphate", "albumin",
        "bilirubin (direct and indirect)", "ALT", "alkaline phosphatase", "GGT", "LDH",
        "urine pH", "triglycerides", "amylase", "lipase", "random glucose", "uric acid",
        "EBV DNA load", "Hepatitis B serology (HBsAg, HBsAb, HBcoreAb)"
      ],
      cycle: [
        "CBC & Diff", "creatinine", "electrolytes panel", "phosphate", "albumin",
        "bilirubin (direct and indirect)", "ALT", "alkaline phosphatase", "GGT", "LDH",
        "urine pH", "triglycerides", "amylase", "lipase", "random glucose", "uric acid",
        "EBV DNA load"
      ],
      conditional: [
        {
          label: "Daily (during treatment)",
          tests: ["CBC & Diff", "creatinine", "electrolytes panel"]
        },
        {
          label: "Days 2–4 (before each ifosFAMIDE and q8h)",
          tests: ["Urine dipstick for blood"]
        },
        {
          label: "Before methoTREXate and q6h during infusion",
          tests: ["Urine pH"]
        },
        {
          label: "Hour 48 from methoTREXate start, then daily until <0.1 micromol/L",
          tests: ["Methotrexate level"]
        },
        {
          label: "Before each pegaspargase dose",
          tests: ["INR", "PT", "PTT", "fibrinogen"]
        },
        {
          label: "Every Monday and Thursday (during pegaspargase treatment)",
          tests: ["GGT", "ALT", "alkaline phosphatase", "bilirubin (direct and indirect)", "amylase", "lipase", "random glucose"]
        },
        {
          label: "If clinically indicated (post-methoTREXate)",
          tests: ["ALT", "bilirubin", "alkaline phosphatase", "LDH", "GGT"]
        },
        {
          label: "If clinically indicated",
          tests: ["HBV viral load"]
        }
      ]
    }
  },
  {
    key: "LY-LYTEM",
    cat: "Lymphoma",
    bcc: true,
    name: "LYTEM — Temozolomide [CNS Lymphoma]",
    cycle: 28,
    notes: "For relapsed/refractory primary or secondary CNS lymphoma, or previously untreated CNS lymphoma not suitable for high-dose methoTREXate. Starting dose 150 mg/m² once daily x 5 days (Days 1–5). May increase to 200 mg/m² for cycle 2 if no significant hematologic, hepatic or other toxicity. Repeat every 4 weeks until disease progression or unacceptable toxicity. Dose reductions below 100 mg/m² are not permitted.",
    drugs: [
      {
        name: "temozolomide",
        dose: 150,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1–5",
        reducible: true,
        note: "Starting dose; may increase to 200 mg/m² for cycle 2 if tolerated; minimum dose 100 mg/m²",
        levels: [100]
      }
    ],
    labs: {
      baseline: [
        "CBC & Diff", "ALT", "total bilirubin", "creatinine",
        "HBsAg", "HBsAb", "HBcoreAb"
      ],
      cycle: ["CBC & Diff", "ALT", "total bilirubin"],
      conditional: [
        {
          label: "Baseline if clinically indicated",
          tests: ["random glucose"]
        },
        {
          label: "If clinically indicated",
          tests: ["creatinine", "sodium", "potassium", "magnesium", "calcium", "random glucose", "HBV viral load", "HBsAg"]
        }
      ]
    }
  },
  {
    key: "LY-LYVENETOR",
    cat: "Lymphoma",
    bcc: true,
    name: "LYVENETOR — Venetoclax + riTUXimab [CLL/SLL, R/R]",
    cycle: 28,
    notes: "For relapsed/refractory CLL or SLL. venetoCLAX 5-week ramp-up (monotherapy): Week 1: 20 mg, Week 2: 50 mg, Week 3: 100 mg, Week 4: 200 mg, Week 5: 400 mg daily PO. Post ramp-up Cycle 1: venetoCLAX 400 mg daily PO + riTUXimab 375 mg/m² IV Day 1. Cycles 2–6: venetoCLAX 400 mg daily PO + riTUXimab 500 mg/m² IV or 1600 mg SC Day 1. Cycles 7+: venetoCLAX 400 mg daily PO (monotherapy). venetoCLAX maximum 2 years from Cycle 1 Day 1. TLS prophylaxis mandatory: hydration starting 48 h before first dose; allopurinol 300 mg PO daily starting 72 h before first dose. Risk stratify for TLS (low/medium/high) based on LN size and ALC. High-risk patients require inpatient admission for first 20 mg and 50 mg doses. riTUXimab must be given as IV for first infusion.",
    drugs: [
      {
        name: "venetoCLAX (Week 1)",
        dose: 20,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Week 1 (ramp-up), daily",
        reducible: true,
        note: "Ramp-up dose; take with food. Lab review required before each dose increase."
      },
      {
        name: "venetoCLAX (Week 2)",
        dose: 50,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Week 2 (ramp-up), daily",
        reducible: true,
        note: "Ramp-up dose; take with food"
      },
      {
        name: "venetoCLAX (Week 3)",
        dose: 100,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Week 3 (ramp-up), daily",
        reducible: true,
        note: "Ramp-up dose; take with food"
      },
      {
        name: "venetoCLAX (Week 4)",
        dose: 200,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Week 4 (ramp-up), daily",
        reducible: true,
        note: "Ramp-up dose; take with food"
      },
      {
        name: "venetoCLAX (Week 5+, maintenance)",
        dose: 400,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Week 5 onward, daily (max 2 years from Cycle 1 Day 1)",
        reducible: true,
        note: "Full dose; take with food"
      },
      {
        name: "riTUXimab (Cycle 1)",
        dose: 375,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Cycle 1 Day 1",
        reducible: false,
        note: "IV in 250–500 mL NS; first dose: start at 50 mg/h, increase by 50 mg/h q30 min to max 400 mg/h"
      },
      {
        name: "riTUXimab (Cycles 2–6)",
        dose: 500,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV or SC",
        days: "Cycles 2–6 Day 1",
        reducible: false,
        note: "IV 500 mg/m² or SC 1600 mg fixed dose (after tolerating first IV dose); SC given over 7 min into abdominal wall"
      }
    ],
    labs: {
      baseline: [
        "CBC & Diff", "potassium", "calcium", "magnesium", "phosphate", "uric acid",
        "creatinine", "total bilirubin", "ALT", "LDH", "albumin",
        "pregnancy test (females of childbearing potential)",
        "HBsAg", "HBsAb", "HBcoreAb"
      ],
      cycle: ["CBC & Diff", "creatinine", "total bilirubin", "ALT"],
      conditional: [
        {
          label: "Before each dose increment during ramp-up (Weeks 1–5)",
          tests: ["potassium", "calcium", "phosphate", "uric acid", "creatinine", "LDH", "albumin"]
        },
        {
          label: "TLS monitoring (6 h and 24 h post first 20 mg and 50 mg doses; see protocol for risk-based schedule)",
          tests: ["potassium", "calcium", "phosphate", "uric acid", "creatinine", "LDH", "albumin"]
        },
        {
          label: "If clinically indicated",
          tests: ["HBV viral load", "HBsAg"]
        }
      ]
    }
  },
  {
    key: "LY-LYVENOB",
    cat: "Lymphoma",
    bcc: true,
    name: "LYVENOB — Venetoclax + oBINutuzumab [CLL/SLL, previously untreated]",
    cycle: 28,
    notes: "For previously untreated CLL/SLL. Cycle 1 (21 days): oBINutuzumab only — 100 mg IV Day 1, 900 mg IV Day 2, 1000 mg IV Days 8 and 15. Cycle 2 (35 days): oBINutuzumab 1000 mg IV Day 8 + venetoCLAX ramp-up: Week 1 (Day 1) 20 mg, Week 2 (Day 8) 50 mg, Week 3 (Day 15) 100 mg, Week 4 (Day 22) 200 mg, Week 5 (Day 29) 400 mg daily PO. Cycles 3–6 (28 days each): oBINutuzumab 1000 mg IV Day 1 + venetoCLAX 400 mg daily PO. Cycles 7–12 (28 days): venetoCLAX 400 mg daily PO only. Total 12 cycles. TLS prophylaxis mandatory: allopurinol 300 mg PO daily starting 72 h before first oBINutuzumab infusion, hydration 48 h before. Re-assess TLS risk at Cycle 2 Day 1 (after oBINutuzumab debulking). Low/medium TLS risk: venetoCLAX must start on a Thursday.",
    drugs: [
      {
        name: "oBINutuzumab (Cycle 1 Day 1)",
        dose: 100,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Cycle 1 Day 1",
        reducible: false,
        note: "IV in 100 mL NS over 4 h at 25 mg/h; constant visual observation during infusion and 30 min after"
      },
      {
        name: "oBINutuzumab (Cycle 1 Day 2)",
        dose: 900,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Cycle 1 Day 2",
        reducible: false,
        note: "IV in 250 mL NS; initiate at 50 mg/h, increase by 50 mg/h q30 min to max 400 mg/h"
      },
      {
        name: "oBINutuzumab (Cycle 1 Days 8, 15; Cycle 2 Day 8; Cycles 3–6 Day 1)",
        dose: 1000,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Cycle 1 Days 8 & 15; Cycle 2 Day 8; Cycles 3–6 Day 1",
        reducible: false,
        note: "IV in 250 mL NS; if no prior Grade 2+ reaction: start 100 mg/h x 30 min, then increase by 100 mg/h q30 min to 400 mg/h"
      },
      {
        name: "venetoCLAX (ramp-up Week 1)",
        dose: 20,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Cycle 2 Week 1 (Day 1), daily x 7 days",
        reducible: true,
        note: "Ramp-up; take with food; low/medium TLS risk: start on Thursday"
      },
      {
        name: "venetoCLAX (ramp-up Week 2)",
        dose: 50,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Cycle 2 Week 2 (Day 8), daily x 7 days",
        reducible: true,
        note: "Ramp-up; take with food"
      },
      {
        name: "venetoCLAX (ramp-up Week 3)",
        dose: 100,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Cycle 2 Week 3 (Day 15), daily x 7 days",
        reducible: true,
        note: "Ramp-up; take with food"
      },
      {
        name: "venetoCLAX (ramp-up Week 4)",
        dose: 200,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Cycle 2 Week 4 (Day 22), daily x 7 days",
        reducible: true,
        note: "Ramp-up; take with food"
      },
      {
        name: "venetoCLAX (full dose)",
        dose: 400,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Cycle 2 Week 5 (Day 29) onward, daily (Cycles 3–12)",
        reducible: true,
        note: "Full dose; take with food; continue through Cycle 12 or until progression/unacceptable toxicity"
      }
    ],
    labs: {
      baseline: [
        "CBC & Diff", "potassium", "calcium", "magnesium", "phosphate", "uric acid",
        "creatinine", "total bilirubin", "ALT", "LDH", "albumin",
        "pregnancy test (females of childbearing potential)",
        "HBsAg", "HBsAb", "HBcoreAb"
      ],
      cycle: ["CBC & Diff", "creatinine", "total bilirubin", "ALT"],
      conditional: [
        {
          label: "Cycle 1 prior to Day 2 oBINutuzumab",
          tests: ["CBC & Diff", "potassium", "calcium", "phosphate", "uric acid", "creatinine", "LDH", "albumin"]
        },
        {
          label: "Cycle 2 prior to Day 1 (before venetoCLAX start)",
          tests: ["CBC & Diff", "potassium", "calcium", "phosphate", "uric acid", "creatinine", "LDH", "albumin", "total bilirubin", "ALT"]
        },
        {
          label: "Cycle 2 prior to Days 8, 15, 22, 29 (venetoCLAX ramp-up TLS monitoring)",
          tests: ["CBC & Diff", "potassium", "calcium", "phosphate", "uric acid", "creatinine", "LDH", "albumin"]
        },
        {
          label: "TLS monitoring: 6 h and 24 h after first 20 mg and 50 mg venetoCLAX doses (risk-based)",
          tests: ["potassium", "calcium", "phosphate", "uric acid", "creatinine", "LDH", "albumin"]
        },
        {
          label: "If clinically indicated",
          tests: ["HBV viral load"]
        }
      ]
    }
  },
  {
    key: "LY-LYVIPDRT",
    cat: "Lymphoma",
    bcc: true,
    name: "LYVIPDRT — CISplatin-RT → VIPD [NK/T-cell Lymphoma, stage IE–IIE]",
    cycle: 21,
    notes: "For newly diagnosed nasal extranodal NK/T-cell lymphoma stage IE–IIE. Cycle 1: weekly CISplatin 30 mg/m² IV (radiation-sensitizing, given only on days when RT is delivered) x 4 weeks concurrent with radiation therapy. Cycles 2–4 (VIPD): etopoSIDE 100 mg/m²/d IV Days 1–3, ifosFAMIDE 1200 mg/m²/d IV Days 1–3, CISplatin 33 mg/m²/d IV Days 1–3, dexamethasone 40 mg PO Days 1–4, mesna IV 240 mg/m²/d x 3 days + mesna PO 480 mg/m²/dose x 2 (at 4 and 8 h after ifosFAMIDE). Cycle 2 starts 3–5 weeks after RT completion; cycles 3 and 4 repeat every 21 days. Prehydration: NS 1000 mL + KCl 20 mEq + MgSO₄ 2 g IV over 1 h before CISplatin.",
    drugs: [
      {
        name: "CISplatin (Cycle 1, concurrent RT)",
        dose: 30,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Cycle 1: weekly x 4 (Days 1, 8, 15, 22), concurrent with RT only",
        reducible: true,
        note: "IV in 500 mL NS over 1 h; given only on RT days; if RT cancelled, hold CISplatin until RT resumes"
      },
      {
        name: "etopoSIDE",
        dose: 100,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Cycles 2–4, Days 1–3",
        reducible: true,
        note: "IV in 250–1000 mL NS over 45 min–1.5 h; use non-DEHP equipment with 0.2 micron in-line filter",
        levels: [75]
      },
      {
        name: "ifosFAMIDE",
        dose: 1200,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Cycles 2–4, Days 1–3",
        reducible: true,
        note: "IV in 500 mL D5½NS over 1 h",
        levels: [900]
      },
      {
        name: "mesna (IV)",
        dose: 240,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Cycles 2–4, Days 1–3",
        reducible: false,
        note: "IV in 100 mL D5W over 15 min before ifosFAMIDE"
      },
      {
        name: "mesna (PO)",
        dose: 480,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Cycles 2–4, Days 1–3 (at 4 h and 8 h after ifosFAMIDE)",
        reducible: false,
        note: "PO in carbonated beverage at 4 h and 8 h after ifosFAMIDE infusion (outpatient)"
      },
      {
        name: "CISplatin (Cycles 2–4)",
        dose: 33,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Cycles 2–4, Days 1–3",
        reducible: true,
        note: "IV in 500 mL NS + KCl 20 mEq + MgSO₄ 1 g + mannitol 30 g over 1 h"
      },
      {
        name: "dexamethasone",
        dose: 40,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Cycles 2–4, Days 1–4",
        reducible: true,
        note: null
      }
    ],
    labs: {
      baseline: [
        "CBC & Diff", "creatinine", "sodium", "potassium", "calcium", "albumin",
        "magnesium", "total bilirubin", "ALT", "LDH",
        "Hepatitis B serology (HBsAg, HBsAb, HBcoreAb)"
      ],
      cycle: ["CBC & Diff", "creatinine"],
      conditional: [
        {
          label: "Cycle 1 Days 1, 8, 15, 22",
          tests: ["CBC & Diff", "creatinine"]
        },
        {
          label: "Cycles 2–4 Days 1–3",
          tests: ["Urine dipstick for blood"]
        },
        {
          label: "If clinically indicated",
          tests: ["HBV viral load", "ALT"]
        }
      ]
    }
  },
  {
    key: "LY-ULYEPCOR",
    cat: "Lymphoma",
    bcc: true,
    name: "ULYEPCOR — Epcoritamab [DLBCL/FL3b, R/R]",
    cycle: 28,
    notes: "Bispecific CD3×CD20 antibody for relapsed/refractory DLBCL NOS, transformed DLBCL, high-grade B-cell lymphoma, PMBCL, or FL Grade 3b after ≥2 prior lines including CAR-T. Step-up dosing mandatory: Cycle 1 Day 1: 0.16 mg SC (step-up 1), Day 8: 0.8 mg SC (step-up 2), Day 15: 48 mg SC (first full dose), Day 22: 48 mg SC. Cycles 2–3: 48 mg SC Days 1, 8, 15, 22. Cycles 4–9: 48 mg SC Days 1 and 15. Cycle 10+: 48 mg SC Day 1. All patients must be hospitalized for ≥24 h monitoring after Cycle 1 Days 1, 8, 15 unless a local rapid-assessment plan is in place. No dose reductions recommended; withhold for adverse events. CAP approval required.",
    drugs: [
      {
        name: "epcoritamab (step-up dose 1)",
        dose: 0.16,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "SC",
        days: "Cycle 1 Day 1",
        reducible: false,
        note: "Inject into lower abdomen or thigh; hospital monitoring ≥24 h after dose"
      },
      {
        name: "epcoritamab (step-up dose 2)",
        dose: 0.8,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "SC",
        days: "Cycle 1 Day 8",
        reducible: false,
        note: "Inject into lower abdomen or thigh; hospital monitoring ≥24 h after dose"
      },
      {
        name: "epcoritamab (full dose)",
        dose: 48,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "SC",
        days: "Cycle 1 Days 15 & 22; Cycles 2–3 Days 1/8/15/22; Cycles 4–9 Days 1 & 15; Cycle 10+ Day 1",
        reducible: false,
        note: "Inject into lower abdomen or thigh; hospital monitoring ≥24 h after Cycle 1 Day 15; ambulatory for subsequent cycles"
      }
    ],
    labs: {
      baseline: [
        "CBC & Diff",
        "HCAb", "HBsAg", "HBsAb", "HBcoreAb"
      ],
      cycle: ["CBC & Diff", "vital signs"],
      conditional: [
        {
          label: "Baseline if clinically indicated",
          tests: ["creatinine", "sodium", "potassium", "urea", "uric acid", "total bilirubin", "ALT", "alkaline phosphatase", "phosphate", "calcium", "albumin", "LDH", "random glucose", "immunoglobulin panel (IgA, IgG, IgM)"]
        },
        {
          label: "If clinically indicated",
          tests: ["creatinine", "sodium", "potassium", "phosphate", "calcium", "magnesium", "uric acid", "albumin", "total bilirubin", "ALT", "alkaline phosphatase", "LDH", "random glucose", "immunoglobulin panel (IgA, IgG, IgM)", "HBV viral load"]
        }
      ]
    }
  },
  {
    key: "LY-ULYMOGA",
    cat: "Lymphoma",
    bcc: true,
    name: "ULYMOGA — Mogamulizumab [Mycosis Fungoides / Sézary Syndrome]",
    cycle: 28,
    notes: "Anti-CCR4 antibody for advanced mycosis fungoides or Sézary syndrome (stage IB–IVB) after ≥1 prior systemic therapy. CAP approval required. Cycle 1: 1 mg/kg IV Days 1, 8, 15, 22. Cycles 2+: 1 mg/kg IV Days 1 and 15. Repeat every 28 days until progression or unacceptable toxicity. No specific dose reductions; toxicity managed by treatment delay. Observe patient 60 min after first infusion, 30 min after second and third infusion; no observation required after 3 consecutive treatments without reaction. Dermatologic toxicity (rash) is one of the most common adverse events — monitor throughout treatment.",
    drugs: [
      {
        name: "mogamulizumab",
        dose: 1,
        unit: "mg/kg",
        basis: "weight",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Cycle 1: Days 1, 8, 15, 22; Cycles 2+: Days 1 and 15",
        reducible: false,
        note: "IV in 100 mL NS over 60 min using 0.2 micron in-line filter; observe 60 min after first infusion, 30 min after 2nd and 3rd"
      }
    ],
    labs: {
      baseline: [
        "CBC & Diff", "creatinine", "total bilirubin", "ALT", "alkaline phosphatase",
        "HBsAg", "HBsAb", "HBcoreAb"
      ],
      cycle: ["CBC & Diff", "creatinine", "ALT", "total bilirubin"],
      conditional: [
        {
          label: "Cycle 1 Day 15",
          tests: ["CBC & Diff", "creatinine", "ALT", "total bilirubin"]
        },
        {
          label: "Baseline if clinically indicated",
          tests: ["albumin", "calcium", "magnesium", "phosphate", "uric acid", "random glucose", "ECG", "chest x-ray"]
        },
        {
          label: "If clinically indicated",
          tests: ["sodium", "potassium", "alkaline phosphatase", "albumin", "calcium", "magnesium", "random glucose", "HBV viral load", "chest x-ray", "ECG"]
        },
        {
          label: "Intermittent dermatologic evaluation",
          tests: ["Dermatologic assessment for rash"]
        }
      ]
    }
  },
  {
    key: "LY-ULYOGLOFIT",
    cat: "Lymphoma",
    bcc: true,
    name: "ULYOGLOFIT — oBINutuzumab + Glofitamab [DLBCL/FL3b, R/R]",
    cycle: 21,
    notes: "Bispecific T-cell engager for relapsed/refractory DLBCL NOS, transformed DLBCL, high-grade B-cell lymphoma, PMBCL, or FL Grade 3b after ≥2 prior lines including CAR-T. CAP approval required. oBINutuzumab 1000 mg IV given 7 days before first glofitamab to deplete B-cells and reduce CRS risk. Glofitamab step-up dosing: Cycle 1 Day 8: 2.5 mg IV (step-up 1, inpatient ≥24 h), Day 15: 10 mg IV (step-up 2), Cycle 2 Day 1: 30 mg IV (first full dose), Cycles 3–12: 30 mg IV Day 1. Cycle length 21 days from Cycle 2 onward (Cycle 1 spans Day 1 to Cycle 2 Day 1 = 28 days). Maximum 12 cycles. Retreatment may be allowed. No dose reductions; manage by interruption/rate reduction. Do not start next glofitamab dose until CRS resolved ≥72 h.",
    drugs: [
      {
        name: "oBINutuzumab",
        dose: 1000,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Cycle 1 Day 1 (7 days before first glofitamab)",
        reducible: false,
        note: "IV in 250 mL NS; initiate at 50 mg/h, increase by 50 mg/h q30 min to max 400 mg/h; constant visual observation during infusion and 30 min after"
      },
      {
        name: "glofitamab (step-up dose 1)",
        dose: 2.5,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Cycle 1 Day 8",
        reducible: false,
        note: "IV in 25 mL NS over 4 h; inpatient monitoring ≥24 h required; insert saline lock for emergency management"
      },
      {
        name: "glofitamab (step-up dose 2)",
        dose: 10,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Cycle 1 Day 15",
        reducible: false,
        note: "IV in 100 mL NS over 4 h (extend to 8 h if prior CRS); ambulatory if no CRS with Day 8; inpatient if any grade CRS with Day 8"
      },
      {
        name: "glofitamab (full dose)",
        dose: 30,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Cycle 2 Day 1; Cycles 3–12 Day 1",
        reducible: false,
        note: "Cycle 2: IV in 100 mL NS over 4 h; Cycles 3–12: over 2 h (or 4 h if prior CRS); max 12 cycles"
      }
    ],
    labs: {
      baseline: [
        "CBC & Diff",
        "HCAb", "HBsAg", "HBsAb", "HBcoreAb"
      ],
      cycle: ["CBC & Diff", "vital signs"],
      conditional: [
        {
          label: "Baseline if clinically indicated",
          tests: ["creatinine", "sodium", "potassium", "urea", "uric acid", "total bilirubin", "ALT", "alkaline phosphatase", "phosphate", "calcium", "albumin", "LDH", "random glucose", "immunoglobulin panel (IgA, IgG, IgM)"]
        },
        {
          label: "If clinically indicated",
          tests: ["creatinine", "sodium", "potassium", "phosphate", "calcium", "magnesium", "uric acid", "albumin", "total bilirubin", "ALT", "alkaline phosphatase", "LDH", "random glucose", "GGT", "immunoglobulin panel (IgA, IgG, IgM)", "HBV viral load"]
        }
      ]
    }
  },
  {
    key: "LY-ULYROMI",
    cat: "Lymphoma",
    bcc: true,
    name: "ULYROMI — romiDEPsin [Peripheral T-Cell Lymphoma, R/R]",
    cycle: 28,
    notes: "HDAC inhibitor for relapsed/refractory PTCL after ≥1 prior treatment. CAP approval required. Note: romidepsin was withdrawn by the manufacturer effective 20 March 2023 for new patients; patients already on treatment must enrol via ISTODAX Restricted Access Program. romiDEPsin 14 mg/m² IV on Days 1, 8 and 15 of each 28-day cycle. Correct hypokalemia and hypomagnesemia before starting. Use caution in patients with history of cardiac dysfunction; QTc prolongation has been observed.",
    drugs: [
      {
        name: "romiDEPsin",
        dose: 14,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1, 8, 15",
        reducible: true,
        note: "IV in 500 mL NS over 4 h; correct electrolytes before each dose",
        levels: [10]
      }
    ],
    labs: {
      baseline: [
        "CBC & Diff", "electrolytes", "potassium", "magnesium", "ECG",
        "HBsAg", "HBsAb", "HBcoreAb"
      ],
      cycle: ["CBC & Diff"],
      conditional: [
        {
          label: "Before Day 1, 8, and 15 of each cycle",
          tests: ["CBC & Diff"]
        },
        {
          label: "Before Day 1 of each cycle",
          tests: ["electrolytes", "potassium", "magnesium"]
        },
        {
          label: "If clinically indicated",
          tests: ["HBV viral load", "ALT"]
        }
      ]
    }
  },
  {
    key: "LY-ULYVENETO",
    cat: "Lymphoma",
    bcc: true,
    name: "ULYVENETO — Venetoclax monotherapy [CLL/SLL, R/R]",
    cycle: 28,
    notes: "For relapsed/refractory CLL/SLL who have progressed on or are intolerant to BTK-inhibitors (ibrutinib) and/or PI3-kinase inhibitors (idelalisib). CAP approval required. Ramp-up schedule: Week 1: 20 mg, Week 2: 50 mg, Week 3: 100 mg, Week 4: 200 mg, Week 5: 400 mg daily PO. Post ramp-up: 400 mg daily PO continuously until progression or unacceptable toxicity. TLS prophylaxis mandatory: hydration 48 h before; allopurinol 72 h before. Low/medium TLS risk: start on Thursday. Take all doses with food. Minimum dose 100 mg; discontinue if reduction below 100 mg needed for >2 weeks.",
    drugs: [
      {
        name: "venetoCLAX (Week 1)",
        dose: 20,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Week 1 daily (ramp-up)",
        reducible: true,
        note: "Take with food; low/medium TLS risk: start on Thursday; lab review before each dose increase"
      },
      {
        name: "venetoCLAX (Week 2)",
        dose: 50,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Week 2 daily (ramp-up)",
        reducible: true,
        note: "Take with food"
      },
      {
        name: "venetoCLAX (Week 3)",
        dose: 100,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Week 3 daily (ramp-up)",
        reducible: true,
        note: "Take with food"
      },
      {
        name: "venetoCLAX (Week 4)",
        dose: 200,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Week 4 daily (ramp-up)",
        reducible: true,
        note: "Take with food"
      },
      {
        name: "venetoCLAX (full dose)",
        dose: 400,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Week 5 onward, daily (continuous until progression)",
        reducible: true,
        note: "Take with food; minimum 100 mg"
      }
    ],
    labs: {
      baseline: [
        "CBC & Diff", "potassium", "calcium", "magnesium", "phosphate", "uric acid",
        "creatinine", "urea", "total bilirubin", "ALT", "LDH", "albumin",
        "pregnancy test (females of childbearing potential)",
        "HBsAg", "HBsAb", "HBcoreAb"
      ],
      cycle: ["CBC & Diff", "creatinine", "total bilirubin", "ALT"],
      conditional: [
        {
          label: "Before each dose increment during ramp-up (Weeks 1–5)",
          tests: ["potassium", "calcium", "phosphate", "uric acid", "creatinine", "LDH", "albumin"]
        },
        {
          label: "TLS monitoring: 6 h and 24 h after first 20 mg and 50 mg doses (risk-based schedule)",
          tests: ["potassium", "calcium", "phosphate", "uric acid", "creatinine", "LDH", "albumin"]
        },
        {
          label: "If clinically indicated",
          tests: ["HBV viral load", "HBsAg"]
        }
      ]
    }
  },
  {
    key: "LY-ULYWMIBRU",
    cat: "Lymphoma",
    bcc: true,
    name: "ULYWMIBRU — iBRUtinib [Waldenström Macroglobulinemia / LPL, R/R]",
    cycle: 28,
    notes: "BTK inhibitor for relapsed/refractory Waldenström macroglobulinemia (WM) or lymphoplasmacytic lymphoma (LPL) after ≥1 prior systemic therapy. CAP approval required. iBRUtinib 420 mg PO daily continuously until progression or unacceptable toxicity. Note: iBRUtinib has higher cardiac toxicity risk vs zanubrutinib. Sequential use with zanubrutinib (ULYWMZANU) is not funded. Dose reduction schedule: 1st occurrence → restart 420 mg; 2nd → 280 mg; 3rd → 140 mg; 4th → discontinue. Mild hepatic impairment (Child-Pugh A): reduce to 140 mg daily. Monitor blood pressure at each visit.",
    drugs: [
      {
        name: "iBRUtinib",
        dose: 420,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Daily, continuously",
        reducible: true,
        note: "Take at approximately the same time each day; hold 3–7 days pre- and post-surgery",
        levels: [280, 140]
      }
    ],
    labs: {
      baseline: [
        "CBC & Diff", "creatinine", "total bilirubin", "ALT", "PT", "PTT", "INR",
        "HBsAg", "HBsAb", "HBcoreAb",
        "serum protein electrophoresis", "serum free light chain levels", "immunoglobulin panel (IgA, IgG, IgM)"
      ],
      cycle: [
        "CBC & Diff", "total bilirubin", "ALT",
        "serum protein electrophoresis", "serum free light chain levels", "immunoglobulin panel (IgA, IgG, IgM)",
        "blood pressure"
      ],
      conditional: [
        {
          label: "Baseline if clinically indicated",
          tests: ["ECG", "MUGA scan or echocardiogram"]
        },
        {
          label: "If clinically indicated",
          tests: ["creatinine", "PT", "PTT", "INR", "ECG", "MUGA scan or echocardiogram", "HBV viral load"]
        }
      ]
    }
  },
  {
    key: "LY-ULYWMZANU",
    cat: "Lymphoma",
    bcc: true,
    name: "ULYWMZANU — Zanubrutinib [Waldenström Macroglobulinemia / LPL, R/R]",
    cycle: 28,
    notes: "BTK inhibitor for relapsed/refractory Waldenström macroglobulinemia (WM) or lymphoplasmacytic lymphoma (LPL) after ≥1 prior systemic therapy. CAP approval required. Zanubrutinib 160 mg PO BID (total 320 mg/day) or may be given as 320 mg once daily. Continuous until progression or unacceptable toxicity. Sequential use with iBRUtinib (ULYWMIBRU) is not funded. Dose reduction: 1st → 160 mg BID; 2nd → 160 mg once daily; 3rd → 80 mg once daily; 4th → discontinue. Severe hepatic impairment: reduce to 80 mg BID. Intracranial haemorrhage of any grade: discontinue. Hold 3–7 days pre- and post-surgery.",
    drugs: [
      {
        name: "zanubrutinib",
        dose: 160,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Twice daily (BID), continuously (or 320 mg once daily)",
        reducible: true,
        note: "May be given with or without food; 320 mg total daily dose; hold 3–7 days pre- and post-surgery",
        levels: [160, 80]
      }
    ],
    labs: {
      baseline: [
        "CBC & Diff", "creatinine", "total bilirubin", "ALT", "PTT", "INR",
        "HBsAg", "HBsAb", "HBcoreAb",
        "serum protein electrophoresis", "serum free light chain levels", "immunoglobulin panel (IgA, IgG, IgM)"
      ],
      cycle: [
        "CBC & Diff", "total bilirubin", "ALT",
        "serum protein electrophoresis", "serum free light chain levels", "immunoglobulin panel (IgA, IgG, IgM)"
      ],
      conditional: [
        {
          label: "If clinically indicated",
          tests: ["albumin", "calcium", "uric acid", "potassium", "phosphate", "random glucose", "creatinine", "LDH", "PTT", "INR", "ECG", "MUGA scan or echocardiogram"]
        }
      ]
    }
  },

  // =========================================================
  // MYELOID (BC Cancer LK series)
  // =========================================================

  {
    key: "LK-LKCMLI",
    cat: "Myeloid",
    bcc: true,
    name: "LKCMLI - iMAtinib [CML / Ph+ ALL]",
    cycle: null,
    notes: "CML chronic phase: 400 mg PO daily. CML accelerated phase: 600 mg PO daily (may increase to 400 mg BID in non-responders). CML blast phase / Ph+ ALL: 600 mg PO daily. Discontinue if no response after 90 days. Monitor BCR/ABL PCR every 3 months.",
    drugs: [
      {
        name: "iMAtinib",
        dose: 400,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Daily (continuous)",
        reducible: true,
        note: "CML chronic phase: 400 mg/day. Accelerated/blast phase or Ph+ ALL: 600 mg/day (may escalate to 400 mg BID). Dose-reduce for hematologic or hepatic toxicity."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "ALT", "total bilirubin", "urea", "creatinine", "body weight", "bone marrow exam with cytogenetics", "BCR/ABL FISH or RT-PCR", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff", "creatinine", "uric acid", "ALT", "total bilirubin"],
      conditional: [
        { label: "Every 3 months (stable)", tests: ["CBC & Diff", "creatinine", "ALT", "total bilirubin", "peripheral blood BCR/ABL QPCR"] },
        { label: "If clinically indicated", tests: ["HBV viral load"] }
      ]
    }
  },
  {
    key: "LK-LKMDSA",
    cat: "Myeloid",
    bcc: true,
    name: "LKMDSA - azaCITIDine [MDS / AML / CMML]",
    cycle: 28,
    notes: "MDS (intermediate risk or higher), newly diagnosed AML ineligible for intensive chemo (age ≥70 or unfit), relapsed AML/MDS post-ASCT, or CMML. Standard: 75 mg/m²/day SC × 7 days. Repeat every 28 days. Dose levels −1: 50 mg/m²; −2: 37.5 mg/m². Weekend interruption alternative: 5 on, 2 off, 2 on.",
    drugs: [
      {
        name: "azaCITIDine",
        dose: 75,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "SubQ",
        days: "Days 1–7",
        reducible: true,
        note: "Administer doses >4 mL as two syringes at separate sites. Dose levels: 75 → 50 → 37.5 mg/m²/day.",
        levels: [50, 37.5]
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "GGT", "alkaline phosphatase", "ALT", "bilirubin", "LDH", "albumin", "sodium", "potassium", "chloride", "bicarbonate", "urea", "INR", "PTT", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff", "creatinine", "sodium", "potassium", "chloride", "bicarbonate", "GGT", "alkaline phosphatase", "ALT", "LDH", "bilirubin", "INR", "PTT"],
      conditional: [
        { label: "Days 3 & 5 if indicated", tests: ["CBC & Diff"] },
        { label: "If clinically indicated", tests: ["HBV viral load"] }
      ]
    }
  },
  {
    key: "LK-LKMDSL",
    cat: "Myeloid",
    bcc: true,
    name: "LKMDSL - Lenalidomide [MDS del5q]",
    cycle: 28,
    notes: "Transfusion-dependent anemia due to low or intermediate-1 risk MDS with deletion 5q. Lenalidomide 10 mg/day PO × 21 days per 28-day cycle. Discontinue if no response after 4 cycles. Renal dose adjustment required. Teratogenic — requires contraception.",
    drugs: [
      {
        name: "Lenalidomide",
        dose: 10,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1–21",
        reducible: true,
        note: "Renal dose adjust: CrCl 30–59→5 mg/day; CrCl <30 (no dialysis)→5 mg every other day; dialysis→5 mg TIW after HD. Restart at 5 mg/day after dose holds."
      }
    ],
    labs: {
      baseline: ["bone marrow aspirate & cytogenetics", "CBC & Diff", "creatinine", "total bilirubin", "ALT", "alkaline phosphatase", "TSH", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff", "creatinine", "total bilirubin", "ALT", "alkaline phosphatase"],
      conditional: [
        { label: "Weekly × 1st month", tests: ["CBC & Diff", "creatinine"] },
        { label: "If premenopausal female", tests: ["pregnancy test (weekly × 1 month, then monthly)"] },
        { label: "Every 3 months", tests: ["TSH", "T3", "T4"] },
        { label: "If clinically indicated", tests: ["HBV viral load (every 3 months)"] }
      ]
    }
  },
  {
    key: "LK-LKMFRUX",
    cat: "Myeloid",
    bcc: true,
    name: "LKMFRUX - Ruxolitinib [Myelofibrosis]",
    cycle: null,
    notes: "Primary or secondary myelofibrosis (post-ET or post-PV) with splenomegaly or symptoms. Starting dose by platelet count: Plt >200→20 mg BID, Plt 100–200→15 mg BID, Plt 75–99→10 mg BID, Plt 50–74→5 mg BID. Max 25 mg BID. No dose increase in first month; titrate no more than every 2 weeks. Taper on discontinuation (5 mg BID reduction every 3 days).",
    drugs: [
      {
        name: "Ruxolitinib",
        dose: 20,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Twice daily (continuous)",
        reducible: true,
        note: "Starting dose by platelet count: >200→20 mg BID, 100–200→15 mg BID, 75–99→10 mg BID, 50–74→5 mg BID. CrCl <50 + Plt ≥100: start 10 mg BID. Taper dose on discontinuation."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "total bilirubin", "ALT", "ECG", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff"],
      conditional: [
        { label: "First 3 months (every 1–2 weeks)", tests: ["CBC & Diff"] },
        { label: "3–6 months (every 2–4 weeks)", tests: ["CBC & Diff"] },
        { label: "If clinically indicated", tests: ["creatinine", "total bilirubin", "ALT", "ECG", "HBV viral load"] }
      ]
    }
  },
  {
    key: "LK-LKPEGIFN",
    cat: "Myeloid",
    bcc: true,
    name: "LKPEGIFN - Peginterferon alfa-2a [Myeloproliferative / HES]",
    cycle: null,
    notes: "Chronic myeloid neoplasms intolerant to hydroxyUREA (PV, ET, myelofibrosis, systemic mastocytosis) or hypereosinophilic syndrome refractory to steroids/HU. Start 90 mcg SC weekly × 2 weeks, then escalate to 180 mcg SC weekly. Continue until disease progression or unacceptable toxicity.",
    drugs: [
      {
        name: "Peginterferon alfa-2a",
        dose: 180,
        unit: "mcg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "SubQ",
        days: "Weekly (continuous)",
        reducible: true,
        note: "Start at 90 mcg weekly × 2 weeks, then escalate to 180 mcg weekly. Dose reduce for ANC <0.75 (→135 mcg), ANC <0.5 (delay → resume 90 mcg), Plt 25–50 (→90 mcg), Plt <25 (discontinue)."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "platelets", "ALT", "alkaline phosphatase", "total bilirubin", "LDH", "TSH", "creatinine"],
      cycle: ["CBC & Diff", "platelets"],
      conditional: [
        { label: "Monthly (first 3 months)", tests: ["CBC & Diff", "platelets"] },
        { label: "Every 3 months (after 3 months)", tests: ["CBC & Diff", "platelets"] },
        { label: "As clinically indicated", tests: ["ALT", "alkaline phosphatase", "total bilirubin", "LDH", "creatinine"] }
      ]
    }
  },
  {
    key: "LK-ULKAMLAVEN",
    cat: "Myeloid",
    bcc: true,
    name: "ULKAMLAVEN - azaCITIDine + Venetoclax [AML — ineligible for intensive chemo]",
    cycle: 28,
    notes: "Previously untreated AML, ineligible for intensive induction (age ≥75 with ECOG 0–2, or <75 with significant comorbidities). CAP approval required. Cycle 1 venetoclax ramp-up: 100 mg Day 1 → 200 mg Day 2 → 400 mg Days 3–28. TLS prophylaxis mandatory (hydration 48h before, allopurinol 48–72h before). WBC must be <25×10⁹/L before venetoclax. Dose levels for azaCITIDine: 75 → 50 → 37.5 mg/m². Venetoclax dose adjustment required with CYP3A4 inhibitors (strong: −75%; moderate: −50%).",
    drugs: [
      {
        name: "azaCITIDine",
        dose: 75,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "SubQ",
        days: "Days 1–7",
        reducible: true,
        note: "Administer doses >4 mL as two syringes at separate sites. Dose levels: 75 → 50 → 37.5 mg/m²/day.",
        levels: [50, 37.5]
      },
      {
        name: "Venetoclax",
        dose: 400,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1–28 (Cycle 1 ramp-up: 100mg D1, 200mg D2, 400mg D3–28)",
        reducible: false,
        note: "Cycle 1 ramp-up: 100 mg Day 1, 200 mg Day 2, then 400 mg daily. Reduce by 75% with strong CYP3A4 inhibitors; 50% with moderate inhibitors (e.g., fluconazole). After remission, venetoclax duration may be reduced by 7 days per cycle for cytopenias."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "sodium", "potassium", "chloride", "bicarbonate", "calcium", "magnesium", "phosphate", "uric acid", "creatinine", "urea", "total bilirubin", "ALT", "LDH", "GGT", "alkaline phosphatase", "albumin", "INR", "PTT", "HIV", "HBsAg", "HBsAb", "HBcAb", "HCAb", "HSV1/2 Ab", "VZV Ab"],
      cycle: ["CBC & Diff", "creatinine", "sodium", "potassium", "chloride", "bicarbonate", "total bilirubin", "ALT", "alkaline phosphatase", "GGT", "LDH", "INR", "PTT"],
      conditional: [
        { label: "Cycle 1 TLS monitoring Days 1–4", tests: ["potassium", "calcium", "phosphate", "uric acid", "creatinine", "LDH", "albumin"] },
        { label: "Weekly Days 8, 15, 22", tests: ["CBC & Diff", "creatinine", "total bilirubin", "ALT", "alkaline phosphatase", "GGT", "LDH"] },
        { label: "Bone marrow biopsy", tests: ["Day 22–28 after Cycle 1 (assess response)"] },
        { label: "If clinically indicated", tests: ["HBV viral load"] }
      ]
    }
  },
  {
    key: "LK-ULKAMLAZIV",
    cat: "Myeloid",
    bcc: true,
    name: "ULKAMLAZIV - azaCITIDine + Ivosidenib [AML IDH1-mutated]",
    cycle: 28,
    notes: "Previously untreated AML with IDH1 R132 mutation, ineligible for intensive induction (age ≥75 or <75 with significant comorbidities). CAP approval required. QTc must be <450 msec at baseline; exclude if QTc >500 msec or congenital long QT. Minimum 6 cycles. Monitor for differentiation syndrome (onset typically Day 15–29). Avoid strong CYP3A4 inducers; reduce ivosidenib to 250 mg/day with strong or moderate CYP3A4 inhibitors.",
    drugs: [
      {
        name: "azaCITIDine",
        dose: 75,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "SubQ",
        days: "Days 1–7",
        reducible: true,
        note: "Administer doses >4 mL as two syringes at separate sites. Dose reductions: 50 mg/m²/day → 37.5 mg/m²/day.",
        levels: [50, 37.5]
      },
      {
        name: "Ivosidenib",
        dose: 500,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Daily (continuous)",
        reducible: true,
        note: "Reduce to 250 mg/day with strong or moderate CYP3A4 inhibitors. Hold for QTc >480–500 msec; permanently discontinue for life-threatening arrhythmia. Withhold for differentiation syndrome. Dose reduce to 250 mg/day for recurrent Grade 3 or Grade 4 toxicity."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "sodium", "potassium", "chloride", "bicarbonate", "calcium", "magnesium", "phosphate", "urea", "total bilirubin", "ALT", "LDH", "GGT", "alkaline phosphatase", "albumin", "INR", "PTT", "ECG", "HIV", "HBsAg", "HBsAb", "HBcAb", "HCAb", "HSV1/2 Ab", "VZV Ab"],
      cycle: ["CBC & Diff", "creatinine", "sodium", "potassium", "chloride", "bicarbonate", "calcium", "magnesium", "phosphate", "uric acid", "total bilirubin", "ALT", "alkaline phosphatase", "GGT", "LDH", "INR", "PTT"],
      conditional: [
        { label: "Prior to Day 1 each cycle", tests: ["ECG"] },
        { label: "Cycle 1 Days 8, 15, 22", tests: ["CBC & Diff", "electrolytes", "LFTs", "ECG", "creatine kinase"] },
        { label: "Bone marrow biopsy", tests: ["Cycles 4–6 (assess IDH1 response)"] },
        { label: "If clinically indicated", tests: ["HBV viral load"] }
      ]
    }
  },
  {
    key: "LK-ULKMDSDC",
    cat: "Myeloid",
    bcc: true,
    name: "ULKMDSDC - Decitabine-Cedazuridine [MDS]",
    cycle: 28,
    notes: "MDS (all FAB subtypes including CMML), IPSS intermediate-1, intermediate-2 or high-risk. CAP approval required. Decitabine-cedazuridine 35 mg/100 mg (fixed combo tablet) PO once daily × 5 days per 28-day cycle. Do NOT substitute with IV decitabine. Avoid gastric pH-modifying drugs within 4 hours of dose. Patients with initial ANC <1.0 should start at dose level −2 (Days 1–3). Dose reductions by number of treatment days: −1: Days 1–4; −2: Days 1–3; −3: Days 1, 3, 5.",
    drugs: [
      {
        name: "Decitabine-Cedazuridine",
        dose: 35,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1–5",
        reducible: false,
        note: "Fixed-dose tablet: 35 mg decitabine / 100 mg cedazuridine. Dose reductions are by number of days, not dose amount. Level −1: Days 1–4; Level −2: Days 1–3; Level −3: Days 1, 3, 5. NOT interchangeable with IV decitabine."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "total bilirubin", "ALT", "alkaline phosphatase", "creatinine", "HIV", "HBsAg", "HBsAb", "HBcAb"],
      cycle: ["CBC & Diff", "total bilirubin", "ALT", "alkaline phosphatase", "creatinine"],
      conditional: [
        { label: "Weekly (Cycle 1)", tests: ["CBC & Diff"] },
        { label: "If clinically indicated", tests: ["HBV viral load"] }
      ]
    }
  },

  // =========================================================
  // MULTIPLE MYELOMA
  // =========================================================

  // BC Cancer MY / UMY protocols
  {
    key: "MY-MYBLDF",
    cat: "Multiple Myeloma",
    bcc: true,
    name: "MYBLDF - bortezomib + lenalidomide + dexamethasone [Multiple Myeloma — Transplant-Ineligible, Frontline]",
    cycle: 28,
    notes: "Newly diagnosed multiple myeloma, ineligible for stem cell transplant. RevAid Program registration required for lenalidomide. Bortezomib given Cycles 1–8 only (Days 1, 8, 15); lenalidomide continued until progression. Dexamethasone dose adjustable per tolerability. VZV prophylaxis and anticoagulation required. Protocol MYBLDF.",
    drugs: [
      {
        name: "bortezomib",
        dose: 1.3,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "SC",
        days: "Days 1, 8, 15 (Cycles 1–8 only); may start at 1.5 mg/m²",
        reducible: true,
        note: "Cycles 1–8 only. Starting dose may be 1.5 mg/m² (dose level 0). Dose level table: 1.5 → 1.3 → 1.0 → 0.7 → 0.5 mg/m².",
        levels: [1.0, 0.7]
      },
      {
        name: "lenalidomide",
        dose: 25,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1–21",
        reducible: true,
        note: "Renal dose adjustment required: eGFR 30–59 → 10 mg; eGFR <30 (no dialysis) → 15 mg every other day. Dose level table: 25 → 20 → 15 → 10 → 5 → 2.5 mg.",
        levels: [20, 15]
      },
      {
        name: "dexamethasone",
        dose: 40,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1, 8, 15, 22",
        reducible: false,
        note: "Dose may vary per tolerability. Alternative: 20 mg PO weekly or predniSONE substitution. Continue even if lenalidomide held.",
        levels: null
      }
    ],
    labs: {
      baseline: [
        "CBC & Diff", "creatinine", "urea", "sodium", "potassium", "total bilirubin",
        "ALT", "alkaline phosphatase", "calcium", "albumin", "LDH", "random glucose",
        "serum protein electrophoresis", "serum free light chain levels",
        "immunoglobulin panel (IgA, IgG, IgM)", "HCAb", "HBsAg", "HBsAb", "HBcoreAb",
        "TSH", "beta-2 microglobulin",
        "quantitative beta-hCG (if FCBP: 7–14 days and 24 hours prior to initial prescription)"
      ],
      cycle: [
        "CBC & Diff", "creatinine", "urea", "sodium", "potassium", "total bilirubin",
        "ALT", "alkaline phosphatase", "calcium", "albumin", "LDH", "random glucose",
        "quantitative beta-hCG (if FCBP)"
      ],
      conditional: [
        {
          label: "Every 4 weeks (required)",
          tests: ["serum protein electrophoresis", "serum free light chain levels"]
        },
        {
          label: "Every 4 weeks (optional/encouraged)",
          tests: ["urine protein electrophoresis", "immunoglobulin panel (IgA, IgG, IgM)", "beta-2 microglobulin"]
        },
        {
          label: "Every 3 months (required for lenalidomide)",
          tests: ["TSH"]
        },
        {
          label: "Days 8, 15, 22 (optional — if cytopenias, hypercalcemia, hepatic/renal dysfunction, or steroid-induced diabetes a concern)",
          tests: ["CBC & Diff", "creatinine", "sodium", "potassium", "total bilirubin", "ALT", "alkaline phosphatase", "calcium", "albumin", "random glucose"]
        },
        {
          label: "Weekly x 4 weeks during Cycle 1 (if FCBP)",
          tests: ["quantitative beta-hCG"]
        },
        {
          label: "If clinically indicated",
          tests: ["HBV viral load (see SCHBV)"]
        }
      ]
    }
  },
  {
    key: "MY-MYBLDPRE",
    cat: "Multiple Myeloma",
    bcc: true,
    name: "MYBLDPRE - lenalidomide + bortezomib + dexamethasone [Multiple Myeloma — Pre-Transplant Induction]",
    cycle: 28,
    notes: "Previously untreated multiple myeloma, eligible for autologous stem cell transplant (ASCT). Up to 6 cycles; stem cells ideally collected after cycles 3–4. RevAid Program registration required for lenalidomide. Last bortezomib dose ≥14 days prior to stem cell collection; last lenalidomide dose ≥21 days prior. VZV prophylaxis and anticoagulation required. Protocol MYBLDPRE.",
    drugs: [
      {
        name: "bortezomib",
        dose: 1.5,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "SC",
        days: "Days 1, 8, 15, 22; may start at 1.3 mg/m²",
        reducible: true,
        note: "Preferred starting dose 1.5 mg/m² (dose level 0). Dose level table: 1.5 → 1.3 → 1.0 → 0.7 → 0.5 mg/m².",
        levels: [1.3, 1.0]
      },
      {
        name: "lenalidomide",
        dose: 25,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1–21",
        reducible: true,
        note: "Renal dose adjustment: eGFR 30–59 → 10 mg; eGFR <30 (no dialysis) → 15 mg every other day. Dose level table: 25 → 20 → 15 → 10 → 5 → 2.5 mg.",
        levels: [20, 15]
      },
      {
        name: "dexamethasone",
        dose: 40,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1, 8, 15, 22",
        reducible: false,
        note: "Dose may vary per tolerability. Alternative: 20 mg PO weekly or predniSONE substitution. Continue even if lenalidomide held.",
        levels: null
      }
    ],
    labs: {
      baseline: [
        "CBC & Diff", "creatinine", "urea", "sodium", "potassium", "total bilirubin",
        "ALT", "alkaline phosphatase", "calcium", "albumin", "LDH", "random glucose",
        "serum protein electrophoresis", "serum free light chain levels",
        "immunoglobulin panel (IgA, IgG, IgM)", "HCAb", "HBsAg", "HBsAb", "HBcoreAb",
        "TSH", "beta-2 microglobulin",
        "quantitative beta-hCG (if FCBP: 7–14 days and 24 hours prior to initial prescription)"
      ],
      cycle: [
        "CBC & Diff", "creatinine", "urea", "sodium", "potassium", "total bilirubin",
        "ALT", "alkaline phosphatase", "calcium", "albumin", "LDH", "random glucose",
        "quantitative beta-hCG (if FCBP)"
      ],
      conditional: [
        {
          label: "Every 4 weeks (required)",
          tests: ["serum protein electrophoresis", "serum free light chain levels"]
        },
        {
          label: "Every 4 weeks (optional/encouraged)",
          tests: ["urine protein electrophoresis", "immunoglobulin panel (IgA, IgG, IgM)", "beta-2 microglobulin"]
        },
        {
          label: "Every 3 months (required for lenalidomide)",
          tests: ["TSH"]
        },
        {
          label: "Days 8, 15, 22 (optional — if cytopenias, hypercalcemia, hepatic/renal dysfunction, or steroid-induced diabetes a concern)",
          tests: ["CBC & Diff", "creatinine", "sodium", "potassium", "total bilirubin", "ALT", "alkaline phosphatase", "calcium", "albumin", "random glucose"]
        },
        {
          label: "Weekly x 4 weeks during Cycle 1 (if FCBP)",
          tests: ["quantitative beta-hCG"]
        },
        {
          label: "If clinically indicated",
          tests: ["HBV viral load (see SCHBV)"]
        }
      ]
    }
  },
  {
    key: "MY-MYBORPRE",
    cat: "Multiple Myeloma",
    bcc: true,
    name: "MYBORPRE - bortezomib + dexamethasone ± cyclophosphamide [Multiple Myeloma/AL Amyloidosis — Pre-Transplant Induction]",
    cycle: 28,
    notes: "Previously untreated multiple myeloma or AL chain amyloidosis, eligible for ASCT. Preferred: once-weekly bortezomib (28-day cycle). Alternative: twice-weekly bortezomib (21-day cycle). Cyclophosphamide addition increases response and should be used when possible. Up to 6 cycles. Last bortezomib/cyclophosphamide dose ≥14 days prior to stem cell collection. VZV prophylaxis required. Protocol MYBORPRE.",
    drugs: [
      {
        name: "bortezomib",
        dose: 1.5,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "SC",
        days: "Days 1, 8, 15, 22 (once-weekly preferred, 28-day cycle); or 1.3 mg/m² Days 1, 4, 8, 11 (twice-weekly option, 21-day cycle)",
        reducible: true,
        note: "Once-weekly preferred: start 1.5 mg/m² (may start 1.3). Twice-weekly option: 1.3 mg/m² fixed (1.5 mg/m² not permitted twice-weekly). Dose level table: 1.5 → 1.3 → 1.0 → 0.7 → 0.5 mg/m².",
        levels: [1.3, 1.0]
      },
      {
        name: "cyclophosphamide",
        dose: 500,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1, 8, 15, 22 (once-weekly); or Days 1, 8, 15 (twice-weekly); or 50 mg every 2 days (alternative flat dosing)",
        reducible: true,
        note: "Optional but recommended to increase response. Alternative: 50 mg PO every 2 days.",
        levels: null
      },
      {
        name: "dexamethasone",
        dose: 40,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1, 8, 15, 22 (once-weekly); or Days 1, 4, 8, 11 (twice-weekly, same days as bortezomib)",
        reducible: false,
        note: "Dose may vary per tolerability. Alternative: 20 mg PO weekly or predniSONE substitution.",
        levels: null
      }
    ],
    labs: {
      baseline: [
        "CBC & Diff", "creatinine", "urea", "sodium", "potassium", "total bilirubin",
        "ALT", "alkaline phosphatase", "calcium", "albumin", "LDH", "random glucose",
        "serum protein electrophoresis", "serum free light chain levels",
        "immunoglobulin panel (IgA, IgG, IgM)", "HCAb", "HBsAg", "HBsAb", "HBcoreAb",
        "beta-2 microglobulin"
      ],
      cycle: [
        "CBC & Diff", "creatinine", "urea", "sodium", "potassium", "total bilirubin",
        "ALT", "alkaline phosphatase", "calcium", "albumin", "LDH", "random glucose",
        "serum protein electrophoresis", "serum free light chain levels"
      ],
      conditional: [
        {
          label: "Prior to each cycle (optional/encouraged)",
          tests: ["urine protein electrophoresis", "immunoglobulin panel (IgA, IgG, IgM)", "beta-2 microglobulin"]
        },
        {
          label: "Days 8, 15, 22 (optional — if cytopenias, hypercalcemia, hepatic/renal dysfunction, or steroid-induced diabetes a concern)",
          tests: ["CBC & Diff", "platelets", "creatinine", "sodium", "potassium", "total bilirubin", "ALT", "alkaline phosphatase", "calcium", "albumin", "random glucose"]
        },
        {
          label: "If clinically indicated",
          tests: ["HBV viral load (see SCHBV)"]
        }
      ]
    }
  },
  {
    key: "MY-MYBORREL",
    cat: "Multiple Myeloma",
    bcc: true,
    name: "MYBORREL - bortezomib + dexamethasone ± cyclophosphamide [Multiple Myeloma/AL Amyloidosis — Relapsed]",
    cycle: 28,
    notes: "Relapsed multiple myeloma or AL chain amyloidosis; at least one prior therapy. Once-weekly bortezomib preferred (28-day cycle); twice-weekly option available (21-day cycle). Re-treatment appropriate if progression ≥1 month after completing bortezomib. Up to 8 cycles. VZV prophylaxis required. Protocol MYBORREL.",
    drugs: [
      {
        name: "bortezomib",
        dose: 1.3,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "SC",
        days: "Days 1, 8, 15, 22 (once-weekly, 28-day cycle); may start at 1.5 mg/m²; or 1.3 mg/m² Days 1, 4, 8, 11 (twice-weekly, 21-day cycle)",
        reducible: true,
        note: "Once-weekly preferred. Starting dose may be 1.5 mg/m² (dose level 0). Dose level table: 1.5 → 1.3 → 1.0 → 0.7 → 0.5 mg/m². Twice-weekly: 1.5 mg/m² not permitted.",
        levels: [1.0, 0.7]
      },
      {
        name: "cyclophosphamide",
        dose: 500,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1, 8, 15, 22 (once-weekly); or Days 1, 8, 15 (twice-weekly); or 50 mg every 2 days (alternative flat dosing)",
        reducible: true,
        note: "Optional. Alternative: 50 mg PO every 2 days.",
        levels: null
      },
      {
        name: "dexamethasone",
        dose: 40,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1, 8, 15, 22 (once-weekly); or Days 1, 4, 8, 11 (twice-weekly)",
        reducible: false,
        note: "Dose may vary per tolerability. Alternative: 20 mg PO weekly or predniSONE substitution.",
        levels: null
      }
    ],
    labs: {
      baseline: [
        "CBC & Diff", "creatinine", "urea", "sodium", "potassium", "total bilirubin",
        "ALT", "alkaline phosphatase", "calcium", "albumin", "LDH", "random glucose",
        "serum protein electrophoresis", "serum free light chain levels",
        "immunoglobulin panel (IgA, IgG, IgM)", "HCAb", "HBsAg", "HBsAb", "HBcoreAb",
        "beta-2 microglobulin"
      ],
      cycle: [
        "CBC & Diff", "creatinine", "urea", "sodium", "potassium", "total bilirubin",
        "ALT", "alkaline phosphatase", "calcium", "albumin", "LDH", "random glucose",
        "serum protein electrophoresis", "serum free light chain levels"
      ],
      conditional: [
        {
          label: "Prior to each cycle (optional/encouraged)",
          tests: ["urine protein electrophoresis", "immunoglobulin panel (IgA, IgG, IgM)", "beta-2 microglobulin"]
        },
        {
          label: "Days 8, 15, 22 (optional — if cytopenias, hypercalcemia, hepatic/renal dysfunction, or steroid-induced diabetes a concern)",
          tests: ["CBC & Diff", "creatinine", "sodium", "potassium", "total bilirubin", "ALT", "alkaline phosphatase", "calcium", "albumin", "random glucose"]
        },
        {
          label: "If clinically indicated",
          tests: ["HBV viral load (see SCHBV)"]
        }
      ]
    }
  },
  {
    key: "MY-MYBSD",
    cat: "Multiple Myeloma",
    bcc: true,
    name: "MYBSD - bortezomib + selinexor + dexamethasone ± cyclophosphamide [Multiple Myeloma — Relapsed]",
    cycle: 28,
    notes: "Relapsed multiple myeloma, plasma cell leukemia, or systemic light chain amyloidosis; ≥1 prior line. Requires bortezomib sensitivity (includes post-MYBORMTN maintenance relapse). For prior PI-exposed patients: must have had ≥PR to prior PI and ≥6-month interval. Patients on MYBORREL may switch if eligible. Selinexor dose may start at 60–80 mg with escalation to 100 mg weekly. VZV prophylaxis and antiemetic premedication required. Protocol MYBSD.",
    drugs: [
      {
        name: "selinexor",
        dose: 100,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1, 8, 15, 22 (100 mg once weekly; may start at 60–80 mg and escalate)",
        reducible: true,
        note: "May start at 60 or 80 mg weekly and escalate to 100 mg if tolerated. Dose escalation to 120 mg (60 mg twice weekly) from Cycle 3 onward is an option for non-responders tolerating 100 mg. Dose level table: 100 mg (level 0) → 80 mg (level −1) → 60 mg (level −2) → 40 mg (level −3).",
        levels: [80, 60]
      },
      {
        name: "bortezomib",
        dose: 1.3,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "SC",
        days: "Days 1, 8, 15",
        reducible: true,
        note: "Dose level table: 1.3 → 1.0 → 0.7 → 0.5 mg/m².",
        levels: [1.0, 0.7]
      },
      {
        name: "dexamethasone",
        dose: 20,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1, 2, 8, 9, 15, 16, 22, 23 (take ≥1 hour before selinexor on selinexor days)",
        reducible: false,
        note: "Take in the morning with food. On selinexor days, administer at least 1 hour before selinexor. Dose may vary per tolerability.",
        levels: null
      },
      {
        name: "cyclophosphamide",
        dose: 500,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1, 8, 15, 22 (if using); or 50 mg every 2 days (alternative)",
        reducible: true,
        note: "Optional. Alternative: 50 mg PO every 2 days.",
        levels: null
      }
    ],
    labs: {
      baseline: [
        "CBC & Diff", "creatinine", "urea", "sodium", "potassium", "total bilirubin",
        "ALT", "alkaline phosphatase", "calcium", "albumin", "LDH", "random glucose",
        "serum protein electrophoresis", "serum free light chain levels",
        "immunoglobulin panel (IgA, IgG, IgM)", "HCAb", "HBsAg", "HBsAb", "HBcoreAb",
        "beta-2 microglobulin",
        "ECG, phosphate, magnesium (if clinically indicated)"
      ],
      cycle: [
        "CBC & Diff", "creatinine", "urea", "sodium", "potassium", "total bilirubin",
        "ALT", "alkaline phosphatase", "calcium", "albumin", "LDH", "random glucose",
        "serum protein electrophoresis", "serum free light chain levels"
      ],
      conditional: [
        {
          label: "Days 8, 15, 22 of Cycle 1 (required)",
          tests: ["CBC & Diff", "creatinine", "sodium", "potassium", "magnesium", "calcium"]
        },
        {
          label: "Days 8, 15, 22 of Cycle 2+ (optional — if cytopenias, hypercalcemia, hepatic/renal dysfunction, or steroid-induced diabetes a concern)",
          tests: ["CBC & Diff", "creatinine", "sodium", "potassium", "total bilirubin", "ALT", "alkaline phosphatase", "calcium", "albumin", "random glucose"]
        },
        {
          label: "Every 4 weeks (optional/encouraged)",
          tests: ["urine protein electrophoresis", "immunoglobulin panel (IgA, IgG, IgM)", "beta-2 microglobulin"]
        },
        {
          label: "If clinically indicated",
          tests: ["phosphate", "magnesium", "HBV viral load (see SCHBV)"]
        }
      ]
    }
  },
  {
    key: "MY-MYCARLD",
    cat: "Multiple Myeloma",
    bcc: true,
    name: "MYCARLD - carfilzomib + lenalidomide + dexamethasone [Multiple Myeloma — Relapsed/Refractory]",
    cycle: 28,
    notes: "Relapsed/refractory multiple myeloma; ≥1 prior therapy. Requires lenalidomide sensitivity (includes post-MYLENMTN relapse) and bortezomib sensitivity or naïve. Not for lenalidomide-refractory (progression on non-maintenance lenalidomide regimen) or carfilzomib-refractory patients. BSA capped at 2.2 m² for carfilzomib. Carfilzomib funded for up to 18 cycles; after cycle 18 lenalidomide/dexamethasone continued. Cycle 1 pre-hydration with 250 mL NS required. RevAid Program registration required. Protocol MYCARLD.",
    drugs: [
      {
        name: "carfilzomib",
        dose: 56,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Cycle 1: 20 mg/m² Day 1, then 56 mg/m² Days 8 and 15; Cycles 2–18: 56 mg/m² Days 1, 8, 15 (BSA capped at 2.2 m²)",
        reducible: true,
        note: "Cycle 1 Day 1 dose is 20 mg/m² (ramp-up). IV in 100 mL D5W over 30 min. Vital signs prior to each infusion; observe 30 min post-infusion in Cycle 1 only. Dose level table: 56 → 45 → 36 → 27 mg/m².",
        levels: [45, 36]
      },
      {
        name: "lenalidomide",
        dose: 25,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1–21",
        reducible: true,
        note: "Renal dose adjustment: eGFR 30–59 → 10 mg; eGFR <30 (no dialysis) → 15 mg every other day; dialysis → 5 mg daily (after dialysis on dialysis days). Dose level table: 25 → 20 → 15 → 10 → 5 → 2.5 mg.",
        levels: [20, 15]
      },
      {
        name: "dexamethasone",
        dose: 40,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1, 8, 15, 22",
        reducible: false,
        note: "Starting dose 20 mg weekly for patients ≥75 years. Dose may vary per tolerability. Alternative: 20 mg PO weekly or predniSONE substitution.",
        levels: null
      }
    ],
    labs: {
      baseline: [
        "CBC & Diff", "creatinine", "urea", "sodium", "potassium", "total bilirubin",
        "ALT", "alkaline phosphatase", "calcium", "albumin", "phosphate", "LDH", "random glucose",
        "serum protein electrophoresis", "serum free light chain levels",
        "immunoglobulin panel (IgA, IgG, IgM)", "HCAb", "HBsAg", "HBsAb", "HBcoreAb",
        "TSH", "beta-2 microglobulin",
        "quantitative beta-hCG (if FCBP: 7–14 days and 24 hours prior to initial prescription)"
      ],
      cycle: [
        "CBC & Diff", "creatinine", "urea", "sodium", "potassium", "total bilirubin",
        "ALT", "alkaline phosphatase", "calcium", "albumin", "phosphate", "LDH", "random glucose",
        "quantitative beta-hCG (if FCBP)"
      ],
      conditional: [
        {
          label: "Every 4 weeks (required)",
          tests: ["serum protein electrophoresis", "serum free light chain levels"]
        },
        {
          label: "Every 4 weeks (optional/encouraged)",
          tests: ["urine protein electrophoresis", "immunoglobulin panel (IgA, IgG, IgM)", "beta-2 microglobulin"]
        },
        {
          label: "Every 3 months (required for lenalidomide)",
          tests: ["TSH"]
        },
        {
          label: "Days 8, 15, 22 (optional — if cytopenias, hypercalcemia, hepatic/renal dysfunction, or steroid-induced diabetes a concern)",
          tests: ["CBC & Diff", "creatinine", "sodium", "potassium", "total bilirubin", "ALT", "alkaline phosphatase", "calcium", "albumin", "phosphate", "random glucose"]
        },
        {
          label: "Weekly x 4 weeks during Cycle 1 (if FCBP)",
          tests: ["quantitative beta-hCG"]
        },
        {
          label: "If clinically indicated",
          tests: ["HBV viral load (see SCHBV)"]
        }
      ]
    }
  },
  {
    key: "MY-MYDARBD",
    cat: "Multiple Myeloma",
    bcc: true,
    name: "MYDARBD - daratumumab + bortezomib + dexamethasone ± cyclophosphamide [Multiple Myeloma — Relapsed/Refractory]",
    cycle: 28,
    notes: "Relapsed/refractory multiple myeloma; ≥1 prior line. Requires bortezomib sensitivity (includes post-MYBORMTN relapse). Not for bortezomib-refractory, other PI-refractory, or prior isatuximab-progression patients. Only one line of anti-CD38 monoclonal antibody permitted. Daratumumab: SC preferred (1800 mg fixed dose); IV option available (16 mg/kg). Dosing schedule: Cycles 1–2 weekly, Cycles 3–4 biweekly, Cycle 5+ monthly. Bortezomib/cyclophosphamide given Cycles 1–8. Red cell phenotype/group and screen required before daratumumab. VZV prophylaxis required. Protocol MYDARBD.",
    drugs: [
      {
        name: "daratumumab",
        dose: 1800,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "SC",
        days: "Cycles 1–2: Days 1, 8, 15, 22 (weekly); Cycles 3–4: Days 1, 15 (biweekly); Cycle 5+: Day 1 (monthly)",
        reducible: false,
        note: "SC preferred (1800 mg fixed in 15 mL). IV alternative: 16 mg/kg. Observe 1 hour post-injection on Cycle 1 Day 1. Premedication required (acetaminophen, antihistamine, montelukast, dexamethasone). Daratumumab interferes with blood typing; red cell phenotype must be done before first dose.",
        levels: null
      },
      {
        name: "bortezomib",
        dose: 1.3,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "SC",
        days: "Days 1, 8, 15, 22 (Cycles 1–8; may start at 1.5 mg/m²)",
        reducible: true,
        note: "Cycles 1–8 only. May start at 1.5 mg/m² (dose level 0). Give bortezomib before daratumumab when co-administered. Dose level table: 1.5 → 1.3 → 1.0 → 0.7 → 0.5 mg/m².",
        levels: [1.0, 0.7]
      },
      {
        name: "dexamethasone",
        dose: 40,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Cycles 1–8: Days 1, 8, 15, 22 (prior to daratumumab); Cycle 9+: optional on weeks when daratumumab is not given",
        reducible: false,
        note: "Starting dose 20 mg weekly for patients ≥75 years. Therapeutic dexamethasone serves as premedication steroid in Cycle 1. After Cycle 1, steroid premedication not required for daratumumab. Dose may vary per tolerability.",
        levels: null
      },
      {
        name: "cyclophosphamide",
        dose: 500,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Cycles 1–8: Days 1, 8, 15, 22 (if using); or 50 mg every 2 days (alternative); Cycle 9+: optional at physician's discretion",
        reducible: true,
        note: "Optional. Alternative: 50 mg PO every 2 days.",
        levels: null
      }
    ],
    labs: {
      baseline: [
        "Red Blood Cell phenotype and Group and Screen (mark requisition 'patient to start daratumumab')",
        "CBC & Diff", "creatinine", "sodium", "potassium", "urea", "total bilirubin",
        "ALT", "alkaline phosphatase", "calcium", "albumin", "LDH", "random glucose",
        "serum protein electrophoresis", "serum free light chain levels",
        "immunoglobulin panel (IgA, IgG, IgM)", "HCAb", "HBsAg", "HBsAb", "HBcoreAb",
        "beta-2 microglobulin"
      ],
      cycle: [
        "CBC & Diff", "platelets", "creatinine", "urea", "sodium", "potassium", "total bilirubin",
        "ALT", "alkaline phosphatase", "calcium", "albumin", "LDH", "random glucose",
        "serum protein electrophoresis", "serum free light chain levels"
      ],
      conditional: [
        {
          label: "Every 4 weeks (optional/encouraged)",
          tests: ["urine protein electrophoresis", "immunoglobulin panel (IgA, IgG, IgM)", "beta-2 microglobulin"]
        },
        {
          label: "Days 8, 15, 22 (optional — if cytopenias, hypercalcemia, hepatic/renal dysfunction, or steroid-induced diabetes a concern)",
          tests: ["CBC & Diff", "platelets", "creatinine", "sodium", "potassium", "total bilirubin", "ALT", "alkaline phosphatase", "calcium", "albumin", "random glucose"]
        },
        {
          label: "If clinically indicated",
          tests: ["HBV viral load (see SCHBV)"]
        }
      ]
    }
  },
  {
    key: "MY-MYDARCBDF",
    cat: "Multiple Myeloma",
    bcc: true,
    name: "MYDARCBDF - Daratumumab + Cyclophosphamide + Bortezomib + Dexamethasone [Newly Diagnosed MM — Transplant Ineligible]",
    cycle: 28,
    notes: "Newly diagnosed multiple myeloma, transplant ineligible. Cyclophosphamide may be substituted with melphalan. Patients eligible for only one line of anti-CD38 monoclonal antibody therapy. Exclude AL amyloidosis only (see LYDARCBDF). BC Cancer protocol MYDARCBDF.",
    drugs: [
      {
        name: "Daratumumab",
        dose: 1800,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "SC",
        days: "Cycles 1–2: Days 1, 8, 15, 22 (weekly); Cycles 3–6: Days 1, 15 (biweekly); Cycle 7+: Day 1 (monthly)",
        reducible: false,
        note: "Preferred SC route (1800 mg over 5 min in abdomen). IV alternative: 16 mg/kg. Observe 1 h after first SC injection (Cycle 1 Day 1 only)."
      },
      {
        name: "Bortezomib",
        dose: 1.3,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "SC",
        days: "Days 1, 8, 15, 22 (Cycles 1–9)",
        reducible: true,
        note: "May start at 1.5 mg/m². Give before daratumumab on shared days.",
        levels: [1.0, 0.7]
      },
      {
        name: "Cyclophosphamide",
        dose: 500,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1, 8, 15, 22 (Cycles 1–9)",
        reducible: true,
        note: "Alternative: 50 mg every 2 days. May be substituted with melphalan."
      },
      {
        name: "Dexamethasone",
        dose: 40,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1, 8, 15, 22 (Cycles 1–9)",
        reducible: false,
        note: "Reduce to 20 mg/week for age ≥75. Used as premedication prior to daratumumab in Cycle 1; not required as premedication after Cycle 1."
      }
    ],
    labs: {
      baseline: [
        "Red Blood Cell phenotype, Group and Screen (pre-daratumumab)",
        "CBC & Diff",
        "creatinine",
        "urea",
        "sodium",
        "potassium",
        "total bilirubin",
        "ALT",
        "alkaline phosphatase",
        "calcium",
        "albumin",
        "LDH",
        "random glucose",
        "serum protein electrophoresis",
        "serum free light chain levels",
        "immunoglobulin panel (IgA, IgG, IgM)",
        "HBcAb, HBsAg, HBsAb",
        "beta-2 microglobulin"
      ],
      cycle: [
        "CBC & Diff",
        "creatinine",
        "urea",
        "sodium",
        "potassium",
        "total bilirubin",
        "ALT",
        "alkaline phosphatase",
        "calcium",
        "albumin",
        "LDH",
        "random glucose"
      ],
      conditional: [
        {
          label: "Every 4 weeks (required)",
          tests: ["serum protein electrophoresis", "serum free light chain levels"]
        },
        {
          label: "Every 4 weeks (optional/encouraged)",
          tests: ["urine protein electrophoresis", "immunoglobulin panel (IgA, IgG, IgM)", "beta-2 microglobulin"]
        },
        {
          label: "Days 8, 15, 22 (optional mid-cycle)",
          tests: ["CBC & Diff", "creatinine", "sodium", "potassium", "total bilirubin", "ALT", "alkaline phosphatase", "calcium", "albumin", "random glucose"]
        },
        {
          label: "If clinically indicated",
          tests: ["HBV viral load (see SCHBV)"]
        }
      ]
    }
  },
  {
    key: "MY-MYDARLDF",
    cat: "Multiple Myeloma",
    bcc: true,
    name: "MYDARLDF - Daratumumab + Lenalidomide + Dexamethasone [Newly Diagnosed MM — Transplant Ineligible]",
    cycle: 28,
    notes: "Newly diagnosed multiple myeloma, transplant ineligible. RevAid registration required for lenalidomide. Patients eligible for only one line of anti-CD38 monoclonal antibody therapy. Patients on prior first-line therapy (pre Jun 2022) may switch if no progression. BC Cancer protocol MYDARLDF.",
    drugs: [
      {
        name: "Daratumumab",
        dose: 1800,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "SC",
        days: "Cycles 1–2: Days 1, 8, 15, 22 (weekly); Cycles 3–6: Days 1, 15 (biweekly); Cycle 7+: Day 1 (monthly)",
        reducible: false,
        note: "Preferred SC route (1800 mg over 5 min in abdomen). IV alternative: 16 mg/kg. Observe 1 h after first SC injection (Cycle 1 Day 1 only)."
      },
      {
        name: "Lenalidomide",
        dose: 25,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1–21",
        reducible: true,
        note: "RevAid program registration required. If missed dose, take at next usual time. If held mid-cycle, stop on Day 21 as scheduled.",
        levels: [20, 15]
      },
      {
        name: "Dexamethasone",
        dose: 40,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1, 8, 15, 22",
        reducible: false,
        note: "Reduce to 20 mg/week for age ≥75. Used as premedication prior to daratumumab in Cycle 1; not required as premedication after Cycle 1."
      }
    ],
    labs: {
      baseline: [
        "Red Blood Cell phenotype, Group and Screen (pre-daratumumab)",
        "CBC & Diff",
        "creatinine",
        "sodium",
        "potassium",
        "urea",
        "total bilirubin",
        "ALT",
        "alkaline phosphatase",
        "calcium",
        "albumin",
        "LDH",
        "random glucose",
        "serum protein electrophoresis",
        "serum free light chain levels",
        "immunoglobulin panel (IgA, IgG, IgM)",
        "HBcAb, HBsAg, HBsAb",
        "TSH",
        "beta-2 microglobulin",
        "quantitative beta-hCG (if FCBP: 7–14 days and 24 h prior to first prescription)"
      ],
      cycle: [
        "CBC & Diff",
        "creatinine",
        "urea",
        "sodium",
        "potassium",
        "total bilirubin",
        "ALT",
        "alkaline phosphatase",
        "calcium",
        "albumin",
        "LDH",
        "random glucose"
      ],
      conditional: [
        {
          label: "Every 4 weeks (required)",
          tests: ["serum protein electrophoresis", "serum free light chain levels"]
        },
        {
          label: "Every 4 weeks (optional/encouraged)",
          tests: ["urine protein electrophoresis", "immunoglobulin panel (IgA, IgG, IgM)", "beta-2 microglobulin"]
        },
        {
          label: "Every 4 weeks (if FCBP)",
          tests: ["quantitative beta-hCG blood test"]
        },
        {
          label: "Every 3 months (required for lenalidomide)",
          tests: ["TSH"]
        },
        {
          label: "Days 8, 15, 22 (optional mid-cycle)",
          tests: ["CBC & Diff", "creatinine", "sodium", "potassium", "total bilirubin", "ALT", "alkaline phosphatase", "calcium", "albumin", "random glucose"]
        },
        {
          label: "Weekly × 4 weeks during Cycle 1 (if FCBP)",
          tests: ["quantitative beta-hCG blood test"]
        },
        {
          label: "If clinically indicated",
          tests: ["HBV viral load (see SCHBV)"]
        }
      ]
    }
  },
  {
    key: "MY-MYDARLD",
    cat: "Multiple Myeloma",
    bcc: true,
    name: "MYDARLD - Daratumumab + Lenalidomide + Dexamethasone ± Cyclophosphamide [Relapsed/Refractory MM]",
    cycle: 28,
    notes: "Relapsed/refractory multiple myeloma; ≥1 prior line of therapy. Must be lenalidomide-sensitive (includes relapse after maintenance MYLENMTN). RevAid registration required. Eligible for only one anti-CD38 line. Cyclophosphamide optional Cycles 1–8, discretionary Cycle 9+. BC Cancer protocol MYDARLD.",
    drugs: [
      {
        name: "Daratumumab",
        dose: 1800,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "SC",
        days: "Cycles 1–2: Days 1, 8, 15, 22 (weekly); Cycles 3–6: Days 1, 15 (biweekly); Cycle 7+: Day 1 (monthly)",
        reducible: false,
        note: "Preferred SC route (1800 mg over 5 min in abdomen). IV alternative: 16 mg/kg. Observe 1 h after first SC injection (Cycle 1 Day 1 only)."
      },
      {
        name: "Lenalidomide",
        dose: 25,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1–21",
        reducible: true,
        note: "RevAid program registration required. Dexamethasone continues if lenalidomide held.",
        levels: [20, 15]
      },
      {
        name: "Cyclophosphamide",
        dose: 500,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1, 8, 15, 22 (Cycles 1–8; optional Cycle 9+)",
        reducible: true,
        note: "Optional add-on. Alternative: 50 mg every 2 days. Discretionary from Cycle 9 onwards."
      },
      {
        name: "Dexamethasone",
        dose: 40,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1, 8, 15, 22",
        reducible: false,
        note: "Reduce to 20 mg/week for age ≥75. Used as premedication prior to daratumumab in Cycle 1 only."
      }
    ],
    labs: {
      baseline: [
        "Red Blood Cell phenotype, Group and Screen (pre-daratumumab)",
        "CBC & Diff",
        "creatinine",
        "sodium",
        "potassium",
        "urea",
        "total bilirubin",
        "ALT",
        "alkaline phosphatase",
        "calcium",
        "albumin",
        "LDH",
        "random glucose",
        "serum protein electrophoresis",
        "serum free light chain levels",
        "immunoglobulin panel (IgA, IgG, IgM)",
        "HBcAb, HBsAg, HBsAb",
        "TSH",
        "beta-2 microglobulin",
        "quantitative beta-hCG (if FCBP: 7–14 days and 24 h prior to first prescription)"
      ],
      cycle: [
        "CBC & Diff",
        "creatinine",
        "urea",
        "sodium",
        "potassium",
        "total bilirubin",
        "ALT",
        "alkaline phosphatase",
        "calcium",
        "albumin",
        "LDH",
        "random glucose"
      ],
      conditional: [
        {
          label: "Every 4 weeks (required)",
          tests: ["serum protein electrophoresis", "serum free light chain levels"]
        },
        {
          label: "Every 4 weeks (optional/encouraged)",
          tests: ["urine protein electrophoresis", "immunoglobulin panel (IgA, IgG, IgM)", "beta-2 microglobulin"]
        },
        {
          label: "Every 4 weeks (if FCBP)",
          tests: ["quantitative beta-hCG blood test"]
        },
        {
          label: "Every 3 months (required for lenalidomide)",
          tests: ["TSH"]
        },
        {
          label: "Days 8, 15, 22 (optional mid-cycle)",
          tests: ["CBC & Diff", "creatinine", "sodium", "potassium", "total bilirubin", "ALT", "alkaline phosphatase", "calcium", "albumin", "random glucose"]
        },
        {
          label: "Weekly × 4 weeks during Cycle 1 (if FCBP)",
          tests: ["quantitative beta-hCG blood test"]
        },
        {
          label: "If clinically indicated",
          tests: ["HBV viral load (see SCHBV)"]
        }
      ]
    }
  },
  {
    key: "MY-MYDBLDFTE",
    cat: "Multiple Myeloma",
    bcc: true,
    name: "MYDBLDFTE - daratumumab + bortezomib + lenalidomide + dexamethasone [MM — Transplant-Eligible, Frontline] (formerly MYDBLDF)",
    cycle: 28,
    notes: "Previously untreated multiple myeloma, eligible for autologous stem cell transplant (PERSEUS regimen, D-VRd). RevAid Program registration required for lenalidomide. Three phases: Induction (Cycles 1-4, pre-transplant), Consolidation (Cycles 5-6, starts 30-60 days post-transplant), Maintenance (Cycle 7+, len + monthly dara, 28-day cycles). Combined induction + consolidation ≤6 cycles. Last bortezomib dose ≥14 days, last lenalidomide and daratumumab ≥21 days prior to stem cell collection. Patients eligible for only one line of anti-CD38 mAb therapy. Daratumumab interferes with Coombs/cross-match for ≤6 mo; type and screen + RBC phenotype required pre-daratumumab. VZV prophylaxis (valACYclovir 500 mg PO daily) and anticoagulation (ASA / DOAC / LMWH) required. After ≥24 mo maintenance, daratumumab may be stopped in sustained MRD-negative complete responders. Protocol MYDBLDF.",
    drugs: [
      {
        name: "daratumumab",
        dose: 1800,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "SC",
        days: "Induction C1-2: Days 1, 8, 15, 22 (weekly); C3-4: Days 1, 15; Consolidation C5-6: Days 1, 15; Maintenance C7+: Day 1 (monthly)",
        reducible: false,
        note: "Fixed dose 1800 mg in 15 mL SC over 5 min in abdomen. Observe 1 hour post-injection on Cycle 1 Day 1 only. Premeds: acetaminophen 650 mg + loratadine 10 mg (or diphenhydrAMINE 50 mg) + montelukast 10 mg (C1D1 only, then optional) + dexamethasone 20-40 mg PO (Cycle 1 only). May discontinue premeds after 4 reaction-free doses. No dose reduction required (100% maintained for hematologic and renal toxicity)."
      },
      {
        name: "bortezomib",
        dose: 1.5,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "SC",
        days: "Induction (C1-4) and Consolidation (C5-6): Days 1, 8, 15, 22; not given in Maintenance",
        reducible: true,
        note: "May start at 1.3 mg/m² (clinician judgment). Give before daratumumab on shared days. SC route preferred (abdomen / thigh / back of arm) — significantly less neuropathy than IV. Moderate/severe hepatic impairment (bili >1.5× ULN): start at 0.7 mg/m². Peripheral neuropathy Gr 1+pain or Gr 2: reduce to 1.3 mg/m²; Gr 2+pain or Gr 3: delay and reduce to 1.0 mg/m².",
        levels: [1.3, 1.0, 0.7, 0.5]
      },
      {
        name: "lenalidomide",
        dose: 25,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Induction + Consolidation (C1-6): Days 1-21 (25 mg); Maintenance (C7+): Days 1-21 or continuous Days 1-28 (10 mg, may escalate to 15 mg after 3 maintenance cycles)",
        reducible: true,
        note: "Evening dosing preferred. Renal adjustment: eGFR ≥60 → 25 mg; eGFR 30-59 → 10 mg daily; eGFR <30 not dialysis → 15 mg every other day; dialysis-dependent → 5 mg daily post-dialysis. Maintenance dose levels are separate: 15 → 10 → 5 → 2.5 mg. Continue dexamethasone even if lenalidomide held. Teratogenic — RevAid Program registration required.",
        levels: [20, 15, 10, 5, 2.5]
      },
      {
        name: "dexamethasone",
        dose: 40,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Induction + Consolidation (C1-6): Days 1, 8, 15, 22 (prior to daratumumab); not part of Maintenance (premedication only if dara restart)",
        reducible: false,
        note: "Starting dose 20 mg weekly for patients ≥75 years. Dose may vary 4-40 mg per tolerability. predniSONE (10-100 mg PO weekly; ≥100 mg for Cycle 1) may be substituted. Therapeutic dose serves as premedication in Cycle 1; after C1, steroid premedication not required for daratumumab."
      }
    ],
    labs: {
      baseline: [
        "Red Blood Cell phenotype and Group and Screen (mark requisition 'patient to start daratumumab')",
        "CBC & Diff", "creatinine", "total bilirubin", "ALT", "alkaline phosphatase",
        "calcium", "albumin", "LDH", "random glucose",
        "serum protein electrophoresis", "serum free light chain levels",
        "immunoglobulin panel (IgA, IgG, IgM)", "HCAb", "HBsAg", "HBsAb", "HBcoreAb",
        "TSH", "beta-2 microglobulin",
        "quantitative beta-hCG (if FCBP: 7-14 days and 24 h prior to initial prescription)",
        "bone marrow aspirate for MRD (baseline)"
      ],
      cycle: [
        "CBC & Diff", "creatinine", "total bilirubin", "ALT", "alkaline phosphatase",
        "calcium", "albumin", "LDH",
        "quantitative beta-hCG (if FCBP)"
      ],
      conditional: [
        { label: "Every 4 weeks (required)", tests: ["serum protein electrophoresis", "serum free light chain levels"] },
        { label: "Every 4 weeks (optional/encouraged)", tests: ["urine protein electrophoresis", "immunoglobulin panel (IgA, IgG, IgM)"] },
        { label: "Days 8, 15, 22 (optional — if pre-cycle cytopenias, hypercalcemia, hepatic/renal dysfunction a concern)", tests: ["CBC & Diff", "creatinine", "sodium", "potassium", "total bilirubin", "ALT", "alkaline phosphatase", "calcium", "albumin"] },
        { label: "Every 3 months (required for lenalidomide)", tests: ["TSH"] },
        { label: "Weekly x 4 weeks during Cycle 1 and during Cycle 5 (if FCBP)", tests: ["quantitative beta-hCG"] },
        { label: "7-14 days and 24 hours prior to Cycle 5 (if FCBP)", tests: ["quantitative beta-hCG"] },
        { label: "At 12 mo, 24 mo (and optionally 36 mo)", tests: ["bone marrow aspirate for MRD"] },
        { label: "Baseline if clinically indicated", tests: ["urea", "sodium", "potassium"] },
        { label: "If clinically indicated", tests: ["HBV viral load (see SCHBV)"] }
      ]
    }
  },
  {
    key: "MY-MYLDREL",
    cat: "Multiple Myeloma",
    bcc: true,
    name: "MYLDREL - Lenalidomide + Dexamethasone [Relapsed/Refractory MM]",
    cycle: 28,
    notes: "Relapsed/refractory multiple myeloma; ≥1 prior line of therapy. Must be lenalidomide-sensitive (includes relapse after MYLENMTN). RevAid registration required. Cyclophosphamide optional add-on. BC Cancer protocol MYLDREL.",
    drugs: [
      {
        name: "Lenalidomide",
        dose: 25,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1–21",
        reducible: true,
        note: "RevAid program registration required. Dexamethasone continues if lenalidomide held.",
        levels: [20, 15]
      },
      {
        name: "Dexamethasone",
        dose: 40,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1, 8, 15, 22",
        reducible: false,
        note: "Reduce to 20 mg/week for age ≥75. Continue even if lenalidomide held."
      },
      {
        name: "Cyclophosphamide",
        dose: 500,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1, 8, 15, 22 (optional)",
        reducible: true,
        note: "Optional add-on per physician discretion to increase response. Alternative: 50 mg every 2 days."
      }
    ],
    labs: {
      baseline: [
        "CBC & Diff",
        "creatinine",
        "urea",
        "sodium",
        "potassium",
        "total bilirubin",
        "ALT",
        "alkaline phosphatase",
        "calcium",
        "albumin",
        "LDH",
        "random glucose",
        "serum protein electrophoresis",
        "serum free light chain levels",
        "immunoglobulin panel (IgA, IgG, IgM)",
        "HBcAb, HBsAg, HBsAb",
        "TSH",
        "beta-2 microglobulin",
        "quantitative beta-hCG (if FCBP: 7–14 days and 24 h prior to first prescription)"
      ],
      cycle: [
        "CBC & Diff",
        "creatinine",
        "urea",
        "sodium",
        "potassium",
        "total bilirubin",
        "ALT",
        "alkaline phosphatase",
        "calcium",
        "albumin",
        "LDH",
        "random glucose"
      ],
      conditional: [
        {
          label: "Every 4 weeks (required)",
          tests: ["serum protein electrophoresis", "serum free light chain levels"]
        },
        {
          label: "Every 4 weeks (optional/encouraged)",
          tests: ["urine protein electrophoresis", "immunoglobulin panel (IgA, IgG, IgM)", "beta-2 microglobulin"]
        },
        {
          label: "Every 4 weeks (if FCBP)",
          tests: ["quantitative beta-hCG blood test"]
        },
        {
          label: "Every 3 months (required)",
          tests: ["TSH"]
        },
        {
          label: "Days 8, 15, 22 (optional mid-cycle)",
          tests: ["CBC & Diff", "creatinine", "sodium", "potassium", "total bilirubin", "ALT", "alkaline phosphatase", "calcium", "albumin", "random glucose"]
        },
        {
          label: "Weekly × 4 weeks during Cycle 1 (if FCBP)",
          tests: ["quantitative beta-hCG blood test"]
        },
        {
          label: "If clinically indicated",
          tests: ["HBV viral load (see SCHBV)"]
        }
      ]
    }
  },
  {
    key: "MY-MYLENMTN",
    cat: "Multiple Myeloma",
    bcc: true,
    name: "MYLENMTN - Lenalidomide [Maintenance — Post-ASCT]",
    cycle: 28,
    notes: "Maintenance therapy for newly diagnosed MM following autologous stem cell transplant (ASCT); minimum stable disease post-transplant. Start 3–4 months post-ASCT. RevAid registration required. Dose may escalate to 15 mg after 3 months if tolerated. BC Cancer protocol MYLENMTN.",
    drugs: [
      {
        name: "Lenalidomide",
        dose: 10,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1–21 (preferred) or Days 1–28 (continuous, per physician discretion)",
        reducible: true,
        note: "May escalate to 15 mg after 3 months if ANC >1.0 and platelets >75. Preferred: 21/28-day dosing for majority of patients.",
        levels: [5, 2.5]
      }
    ],
    labs: {
      baseline: [
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT",
        "alkaline phosphatase",
        "calcium",
        "albumin",
        "LDH",
        "random glucose",
        "serum protein electrophoresis",
        "serum free light chain levels",
        "immunoglobulin panel (IgA, IgG, IgM)",
        "HBcAb, HBsAg, HBsAb",
        "TSH",
        "beta-2 microglobulin",
        "quantitative beta-hCG (if FCBP: 7–14 days and 24 h prior to first prescription)"
      ],
      cycle: [
        "CBC & Diff",
        "creatinine",
        "urea",
        "sodium",
        "potassium",
        "total bilirubin",
        "ALT",
        "alkaline phosphatase",
        "calcium",
        "albumin",
        "LDH",
        "random glucose"
      ],
      conditional: [
        {
          label: "Every 4 weeks (required)",
          tests: ["serum protein electrophoresis", "serum free light chain levels"]
        },
        {
          label: "Every 4 weeks (optional/encouraged)",
          tests: ["immunoglobulin panel (IgA, IgG, IgM)", "urine protein electrophoresis", "beta-2 microglobulin"]
        },
        {
          label: "Every 4 weeks (if FCBP)",
          tests: ["quantitative beta-hCG blood test"]
        },
        {
          label: "Every 3 months (required)",
          tests: ["TSH"]
        },
        {
          label: "Days 8, 15, 22 (optional mid-cycle)",
          tests: ["CBC & Diff", "creatinine", "sodium", "potassium", "total bilirubin", "ALT", "alkaline phosphatase", "calcium", "albumin", "random glucose"]
        },
        {
          label: "Weekly × 4 weeks during Cycle 1 (if FCBP)",
          tests: ["quantitative beta-hCG blood test"]
        },
        {
          label: "If clinically indicated",
          tests: ["HBV viral load (see SCHBV)"]
        }
      ]
    }
  },
  {
    key: "MY-MYMPBOR",
    cat: "Multiple Myeloma",
    bcc: true,
    name: "MYMPBOR - Melphalan + Prednisone + Bortezomib [Newly Diagnosed MM or AL Amyloidosis — Transplant Ineligible]",
    cycle: 35,
    notes: "Previously untreated multiple myeloma or AL chain amyloidosis, transplant ineligible. Maximum 9 cycles. Cyclophosphamide may substitute melphalan to reduce myelosuppression. BC Cancer protocol MYMPBOR.",
    drugs: [
      {
        name: "Bortezomib",
        dose: 1.3,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "SC",
        days: "Days 1, 8, 15, 22",
        reducible: true,
        note: "SC preferred (abdomen or thigh). Maintain ≥72 h between doses. ±1 day flexibility.",
        levels: [1.0, 0.7]
      },
      {
        name: "Melphalan",
        dose: 9,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1–4",
        reducible: true,
        note: "Round dose to nearest 2 mg. May be substituted with cyclophosphamide."
      },
      {
        name: "Prednisone",
        dose: 60,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1–4",
        reducible: false,
        note: "Dose may vary based on tolerability and comorbidities."
      }
    ],
    labs: {
      baseline: [
        "CBC & Diff",
        "creatinine",
        "urea",
        "sodium",
        "potassium",
        "total bilirubin",
        "ALT",
        "alkaline phosphatase",
        "calcium",
        "albumin",
        "LDH",
        "random glucose",
        "serum protein electrophoresis",
        "serum free light chain levels",
        "immunoglobulin panel (IgA, IgG, IgM)",
        "HBcAb, HBsAg, HBsAb",
        "beta-2 microglobulin"
      ],
      cycle: [
        "CBC & Diff",
        "creatinine",
        "urea",
        "sodium",
        "potassium",
        "total bilirubin",
        "ALT",
        "alkaline phosphatase",
        "calcium",
        "albumin",
        "LDH",
        "random glucose"
      ],
      conditional: [
        {
          label: "Before Day 1 (required)",
          tests: ["serum protein electrophoresis", "serum free light chain levels"]
        },
        {
          label: "Before Day 1 (optional/encouraged)",
          tests: ["urine protein electrophoresis", "immunoglobulin panel (IgA, IgG, IgM)", "beta-2 microglobulin"]
        },
        {
          label: "Days 8, 15, 22 (optional mid-cycle)",
          tests: ["CBC & Diff", "creatinine", "sodium", "potassium", "total bilirubin", "ALT", "alkaline phosphatase", "calcium", "albumin", "random glucose"]
        },
        {
          label: "If clinically indicated",
          tests: ["HBV viral load (see SCHBV)"]
        }
      ]
    }
  },
  {
    key: "MY-MYMP",
    cat: "Multiple Myeloma",
    bcc: true,
    name: "MYMP - Melphalan + Prednisone [MM or AL Amyloidosis]",
    cycle: 28,
    notes: "Multiple myeloma or AL chain amyloidosis. Treat up to 1 year or 6 months after plateau phase (whichever shorter). Discontinue when no further response for ≥2 cycles. BC Cancer protocol MYMP.",
    drugs: [
      {
        name: "Melphalan",
        dose: 9,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1–4",
        reducible: true,
        note: null
      },
      {
        name: "Prednisone",
        dose: 100,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1–4",
        reducible: false,
        note: null
      }
    ],
    labs: {
      baseline: [
        "CBC & Diff",
        "creatinine",
        "urea",
        "sodium",
        "potassium",
        "total bilirubin",
        "ALT",
        "alkaline phosphatase",
        "calcium",
        "albumin",
        "LDH",
        "random glucose",
        "serum protein electrophoresis",
        "serum free light chain levels",
        "immunoglobulin panel (IgA, IgG, IgM)",
        "HBcAb, HBsAg, HBsAb",
        "beta-2 microglobulin"
      ],
      cycle: [
        "CBC & Diff",
        "platelets",
        "creatinine",
        "urea",
        "sodium",
        "potassium",
        "total bilirubin",
        "ALT",
        "alkaline phosphatase",
        "calcium",
        "albumin",
        "LDH",
        "random glucose"
      ],
      conditional: [
        {
          label: "Every 4 weeks (required)",
          tests: ["serum protein electrophoresis", "serum free light chain levels"]
        },
        {
          label: "Every 4 weeks (optional/encouraged)",
          tests: ["urine protein electrophoresis", "immunoglobulin panel (IgA, IgG, IgM)", "beta-2 microglobulin"]
        },
        {
          label: "Days 8, 15, 22 (optional mid-cycle)",
          tests: ["CBC & Diff", "platelets", "creatinine", "sodium", "potassium", "total bilirubin", "ALT", "alkaline phosphatase", "calcium", "albumin", "random glucose"]
        },
        {
          label: "If clinically indicated",
          tests: ["HBV viral load (see SCHBV)"]
        }
      ]
    }
  },
  {
    key: "MY-MYPAM",
    cat: "Multiple Myeloma",
    bcc: true,
    name: "MYPAM - Pamidronate [Multiple Myeloma — Bone]",
    cycle: 28,
    notes: "Bisphosphonate for MM bone disease. Use when zoledronic acid is contraindicated (renal failure, CrCl <30 mL/min or intolerance to MYZOL). No CAP required when switching from MYZOL. Continue q28d for 24 months (or 12 months post-SCT if VGPR/CR), then stop or switch to q84d at physician discretion.",
    drugs: [
      {
        name: "Pamidronate",
        dose: 30,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "IV in 250 mL NS over 1 hour",
        days: "Day 1",
        reducible: false,
        note: "Caution if SCr >440 µmol/L or CrCl <30 mL/min. Withhold if creatinine rises >44.2 µmol/L above normal baseline (or >88.4 µmol/L above abnormal baseline) until within 10% of baseline."
      }
    ],
    labs: {
      baseline: [],
      cycle: [],
      conditional: [
        { label: "Every 12 weeks", tests: ["creatinine"] }
      ]
    }
  },
  {
    key: "MY-MYZOL",
    cat: "Multiple Myeloma",
    bcc: true,
    name: "MYZOL - Zoledronic Acid [Multiple Myeloma — Bone]",
    cycle: 28,
    notes: "Preferred bisphosphonate for MM bone disease (superior OS vs clodronate). Requires CrCl ≥30 mL/min; use MYPAM if CrCl <30. No CAP required when switching from MYPAM. Continue q28d for 24 months then stop, or q84d beyond 24 months at physician discretion. Dose-adjust for renal function (see dose modifications).",
    drugs: [
      {
        name: "Zoledronic Acid",
        dose: 4,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "IV in 100 mL NS over 15 minutes",
        days: "Day 1",
        reducible: false,
        note: "Renal dose adjustment: CrCl >60 → 4 mg; 50–60 → 3.5 mg; 40–49 → 3.3 mg; 30–39 → 3 mg; <30 → not recommended (use MYPAM)."
      }
    ],
    labs: {
      baseline: ["creatinine", "calcium", "albumin"],
      cycle: ["creatinine"],
      conditional: [
        { label: "If clinically indicated", tests: ["calcium", "albumin", "ionized calcium"] }
      ]
    }
  },
  {
    key: "MY-UMYISACARD",
    cat: "Multiple Myeloma",
    bcc: true,
    name: "UMYISACARD - Isatuximab + Carfilzomib + Dexamethasone ± Cyclophosphamide [Multiple Myeloma — Relapsed/Refractory]",
    cycle: 28,
    notes: "Relapsed/refractory MM with ≥1 prior line; CAP approval required. Excludes prior daratumumab progression or carfilzomib refractoriness. Isatuximab (anti-CD38): only one anti-CD38 line permitted. Carfilzomib BSA capped at 2.2 m². Cycle 1 carfilzomib: 20 mg/m² Day 1 then 70 mg/m² Days 8, 15; Cycle 2+: 70 mg/m² Days 1, 8, 15. Isatuximab Cycle 1: Days 1, 8, 15, 22; Cycle 2+: Days 1, 15. Cyclophosphamide optional per physician discretion.",
    drugs: [
      {
        name: "Isatuximab",
        dose: 10,
        unit: "mg/kg",
        basis: "weight",
        max: null,
        weightCap: null,
        route: "IV in 250 mL NS (0.2 µm in-line filter); Cycle 1: Days 1, 8, 15, 22 with rate titration; Cycle 2+: Days 1 and 15 over 30 min",
        days: "Cycle 1: Days 1, 8, 15, 22; Cycle 2+: Days 1, 15",
        reducible: false,
        note: "No dose reductions. Type and screen before starting (CD38 interference with crossmatch). Premedicate with dexamethasone, acetaminophen, loratadine/diphenhydramine, montelukast. IRR in up to 46% of patients, mainly Cycle 1."
      },
      {
        name: "Carfilzomib",
        dose: 70,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV in 100 mL D5W over 30 minutes",
        days: "Cycle 1: Day 1 (20 mg/m²), Days 8, 15 (70 mg/m²); Cycle 2+: Days 1, 8, 15",
        reducible: true,
        note: "BSA capped at 2.2 m². Cycle 1 Day 1 use 20 mg/m² (ramp-up). Dose levels: 0=70, −1=56, −2=45, −3=36, −4=27 mg/m².",
        levels: [56, 45]
      },
      {
        name: "Dexamethasone",
        dose: 40,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO (preferred) or IV; give 30 min prior to isatuximab on infusion days",
        days: "Days 1, 8, 15, 22",
        reducible: false,
        note: "Reduce to 20 mg/week for patients ≥75 years. Also serves as isatuximab premedication."
      },
      {
        name: "Cyclophosphamide",
        dose: 500,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO, morning preferred",
        days: "Days 1, 8, 15, 22 (OPTIONAL — 500 mg weekly, or 50 mg every 2 days)",
        reducible: true,
        note: "Optional; added at physician discretion to increase response. Alternatively 50 mg PO every 2 days. Reduce by 25% if CrCl <10 mL/min."
      }
    ],
    labs: {
      baseline: [
        "RBC phenotype and Group & Screen (pre-isatuximab)",
        "CBC & Diff",
        "creatinine",
        "sodium",
        "potassium",
        "urea",
        "total bilirubin",
        "ALT",
        "alkaline phosphatase",
        "calcium",
        "albumin",
        "phosphate",
        "LDH",
        "random glucose",
        "serum protein electrophoresis",
        "serum free light chains",
        "immunoglobulin panel (IgA, IgG, IgM)",
        "HCAb",
        "HBsAg",
        "HBsAb",
        "HBcoreAb",
        "beta-2 microglobulin"
      ],
      cycle: [
        "CBC & Diff",
        "creatinine",
        "urea",
        "sodium",
        "potassium",
        "total bilirubin",
        "ALT",
        "alkaline phosphatase",
        "calcium",
        "albumin",
        "phosphate",
        "LDH",
        "random glucose"
      ],
      conditional: [
        {
          label: "Every 4 weeks (encouraged)",
          tests: ["serum protein electrophoresis", "serum free light chains"]
        },
        {
          label: "Days 8, 15, 22 (optional — if cytopenias, hypercalcemia, hepatic/renal dysfunction, or steroid-induced diabetes a concern)",
          tests: ["CBC & Diff", "creatinine", "sodium", "potassium", "total bilirubin", "ALT", "alkaline phosphatase", "calcium", "albumin", "phosphate", "random glucose"]
        },
        {
          label: "If clinically indicated",
          tests: ["HBV viral load"]
        }
      ]
    }
  },
  {
    key: "MY-UMYISAPOMD",
    cat: "Multiple Myeloma",
    bcc: true,
    name: "UMYISAPOMD - Isatuximab + Pomalidomide + Dexamethasone ± Cyclophosphamide [Multiple Myeloma — Relapsed/Refractory]",
    cycle: 28,
    notes: "Relapsed/refractory MM; prior lenalidomide and proteasome inhibitor required; CAP approval required; RevAid registration required. Excludes daratumumab progression or pomalidomide hypersensitivity. Only one anti-CD38 line permitted. Isatuximab Cycle 1: Days 1, 8, 15, 22; Cycle 2+: Days 1, 15. Pomalidomide 4 mg Days 1–21. Cyclophosphamide optional.",
    drugs: [
      {
        name: "Isatuximab",
        dose: 10,
        unit: "mg/kg",
        basis: "weight",
        max: null,
        weightCap: null,
        route: "IV in 250 mL NS (0.2 µm in-line filter); Cycle 1: Days 1, 8, 15, 22 with rate titration; Cycle 2+: Days 1, 15 over 30 min",
        days: "Cycle 1: Days 1, 8, 15, 22; Cycle 2+: Days 1, 15",
        reducible: false,
        note: "No dose reductions. Type and screen before starting (CD38 interference with crossmatch). Premedicate with dexamethasone, acetaminophen, loratadine/diphenhydramine, montelukast. IRR in up to 46% of patients, mainly Cycle 1."
      },
      {
        name: "Pomalidomide",
        dose: 4,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO, evening preferred",
        days: "Days 1–21",
        reducible: true,
        note: "Dose levels: 0=4 mg, −1=3 mg, −2=2 mg, −3=1 mg. Reduce to 3 mg if CrCl <30 (take after dialysis on dialysis days). Hepatic: mild-mod → 3 mg; severe → 2 mg. RevAid registration required. Teratogenic — avoid in pregnancy.",
        levels: [3, 2]
      },
      {
        name: "Dexamethasone",
        dose: 40,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO (preferred) or IV; give 30 min prior to isatuximab on infusion days",
        days: "Days 1, 8, 15, 22",
        reducible: false,
        note: "Reduce to 20 mg/week for patients ≥75 years. Also serves as isatuximab premedication."
      },
      {
        name: "Cyclophosphamide",
        dose: 500,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO, morning preferred",
        days: "Days 1, 8, 15, 22 (OPTIONAL — 500 mg weekly, or 50 mg every 2 days)",
        reducible: true,
        note: "Optional; added at physician discretion to increase response. Alternatively 50 mg PO every 2 days. Reduce by 25% if CrCl <10 mL/min."
      }
    ],
    labs: {
      baseline: [
        "RBC phenotype and Group & Screen (pre-isatuximab)",
        "CBC & Diff",
        "creatinine",
        "urea",
        "sodium",
        "potassium",
        "total bilirubin",
        "ALT",
        "alkaline phosphatase",
        "calcium",
        "albumin",
        "LDH",
        "random glucose",
        "serum protein electrophoresis",
        "serum free light chains",
        "immunoglobulin panel (IgA, IgG, IgM)",
        "HCAb",
        "HBsAg",
        "HBsAb",
        "HBcoreAb",
        "TSH",
        "beta-2 microglobulin",
        "beta-hCG (if FCBP: quantitative x2 at 7–14 days and 24 hours before cycle 1)"
      ],
      cycle: [
        "CBC & Diff",
        "creatinine",
        "urea",
        "sodium",
        "potassium",
        "total bilirubin",
        "ALT",
        "alkaline phosphatase",
        "calcium",
        "albumin",
        "LDH",
        "random glucose"
      ],
      conditional: [
        {
          label: "Every 4 weeks (required)",
          tests: ["serum protein electrophoresis", "serum free light chains"]
        },
        {
          label: "Every 3 months (required)",
          tests: ["TSH"]
        },
        {
          label: "Cycle 1 — weekly x4 (if FCBP)",
          tests: ["quantitative beta-hCG"]
        },
        {
          label: "Days 8, 15, 22 (optional — if cytopenias, hypercalcemia, hepatic/renal dysfunction, or steroid-induced diabetes a concern)",
          tests: ["CBC & Diff", "creatinine", "sodium", "potassium", "total bilirubin", "ALT", "alkaline phosphatase", "calcium", "albumin", "random glucose"]
        },
        {
          label: "If clinically indicated",
          tests: ["HBV viral load"]
        }
      ]
    }
  },
  {
    key: "MY-UMYLDF",
    cat: "Multiple Myeloma",
    bcc: true,
    name: "UMYLDF - Lenalidomide + Dexamethasone ± Cyclophosphamide [Multiple Myeloma — Newly Diagnosed, Transplant-Ineligible]",
    cycle: 28,
    notes: "Newly diagnosed MM, transplant-ineligible; CAP approval and RevAid registration required. Lenalidomide 25 mg Days 1–21 with dexamethasone 40 mg weekly. Cyclophosphamide optional. Renal dose adjustment for lenalidomide required (CrCl 30–59: 10 mg/d; CrCl <30: 15 mg every other day; dialysis: 5 mg/d after dialysis). Teratogenic; VTE prophylaxis required.",
    drugs: [
      {
        name: "Lenalidomide",
        dose: 25,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO, evening preferred",
        days: "Days 1–21",
        reducible: true,
        note: "Dose levels: 0=25 mg, −1=20 mg, −2=15 mg, −3=10 mg, −4=5 mg, −5=2.5 mg. Renal adjust: CrCl 30–59 → 10 mg/d; CrCl <30 non-dialysis → 15 mg every other day; dialysis → 5 mg after dialysis. RevAid registration required. Teratogenic.",
        levels: [20, 15]
      },
      {
        name: "Dexamethasone",
        dose: 40,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO, morning preferred",
        days: "Days 1, 8, 15, 22",
        reducible: false,
        note: "Reduce to 20 mg/week for patients ≥75 years."
      },
      {
        name: "Cyclophosphamide",
        dose: 500,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO, morning preferred",
        days: "Days 1, 8, 15, 22 (OPTIONAL — 500 mg weekly, or 50 mg every 2 days)",
        reducible: true,
        note: "Optional; added at physician discretion to increase response. Alternatively 50 mg PO every 2 days. Reduce by 25% if CrCl <10 mL/min."
      }
    ],
    labs: {
      baseline: [
        "CBC & Diff",
        "creatinine",
        "urea",
        "sodium",
        "potassium",
        "total bilirubin",
        "ALT",
        "alkaline phosphatase",
        "calcium",
        "albumin",
        "LDH",
        "random glucose",
        "serum protein electrophoresis",
        "serum free light chains",
        "immunoglobulin panel (IgA, IgG, IgM)",
        "HCAb",
        "HBsAg",
        "HBsAb",
        "HBcoreAb",
        "TSH",
        "beta-2 microglobulin",
        "beta-hCG (if FCBP: quantitative x2 at 7–14 days and 24 hours before cycle 1)"
      ],
      cycle: [
        "CBC & Diff",
        "platelets",
        "creatinine",
        "urea",
        "sodium",
        "potassium",
        "total bilirubin",
        "ALT",
        "alkaline phosphatase",
        "calcium",
        "albumin",
        "LDH",
        "random glucose"
      ],
      conditional: [
        {
          label: "Every 4 weeks (required)",
          tests: ["serum protein electrophoresis", "serum free light chains"]
        },
        {
          label: "Every 3 months (required)",
          tests: ["TSH"]
        },
        {
          label: "Cycle 1 — weekly x4 (if FCBP)",
          tests: ["quantitative beta-hCG"]
        },
        {
          label: "Days 8, 15, 22 (optional — if cytopenias, hypercalcemia, hepatic/renal dysfunction, or steroid-induced diabetes a concern)",
          tests: ["CBC & Diff", "creatinine", "sodium", "potassium", "total bilirubin", "ALT", "alkaline phosphatase", "calcium", "albumin", "random glucose"]
        },
        {
          label: "If clinically indicated",
          tests: ["HBV viral load"]
        }
      ]
    }
  },
  {
    key: "MY-UMYPOMDEX",
    cat: "Multiple Myeloma",
    bcc: true,
    name: "UMYPOMDEX - Pomalidomide + Dexamethasone ± Cyclophosphamide [Multiple Myeloma — Relapsed/Refractory]",
    cycle: 28,
    notes: "Relapsed/refractory MM; prior lenalidomide and proteasome inhibitor required; CAP approval and RevAid registration required. Pomalidomide 4 mg Days 1–21, dexamethasone 40 mg weekly. Cyclophosphamide optional. Renal adjust: CrCl <30 → 3 mg (take after dialysis on dialysis days). Hepatic adjust: mild-mod → 3 mg; severe → 2 mg. Teratogenic; VTE prophylaxis required.",
    drugs: [
      {
        name: "Pomalidomide",
        dose: 4,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO, evening preferred",
        days: "Days 1–21",
        reducible: true,
        note: "Dose levels: 0=4 mg, −1=3 mg, −2=2 mg, −3=1 mg. Renal: CrCl <30 → 3 mg (after dialysis on dialysis days). Hepatic: mild-mod (Child-Pugh A/B) → 3 mg; severe (Child-Pugh C) → 2 mg. RevAid registration required. Teratogenic.",
        levels: [3, 2]
      },
      {
        name: "Dexamethasone",
        dose: 40,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO, morning preferred",
        days: "Days 1, 8, 15, 22",
        reducible: false,
        note: "Reduce to 20 mg/week for patients ≥75 years."
      },
      {
        name: "Cyclophosphamide",
        dose: 500,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO, morning preferred",
        days: "Days 1, 8, 15, 22 (OPTIONAL — 500 mg weekly, or 50 mg every 2 days)",
        reducible: true,
        note: "Optional; added at physician discretion. Alternatively 50 mg PO every 2 days. Reduce by 25% if CrCl <10 mL/min."
      }
    ],
    labs: {
      baseline: [
        "CBC & Diff",
        "creatinine",
        "urea",
        "sodium",
        "potassium",
        "total bilirubin",
        "ALT",
        "alkaline phosphatase",
        "calcium",
        "albumin",
        "LDH",
        "random glucose",
        "serum protein electrophoresis",
        "serum free light chains",
        "immunoglobulin panel (IgA, IgG, IgM)",
        "HCAb",
        "HBsAg",
        "HBsAb",
        "HBcoreAb",
        "TSH",
        "beta-2 microglobulin",
        "beta-hCG (if FCBP: quantitative x2 at 7–14 days and 24 hours before cycle 1)"
      ],
      cycle: [
        "CBC & Diff",
        "creatinine",
        "urea",
        "sodium",
        "potassium",
        "total bilirubin",
        "ALT",
        "alkaline phosphatase",
        "calcium",
        "albumin",
        "LDH",
        "random glucose"
      ],
      conditional: [
        {
          label: "Every 4 weeks (required)",
          tests: ["serum protein electrophoresis", "serum free light chains"]
        },
        {
          label: "Every 3 months (required)",
          tests: ["TSH"]
        },
        {
          label: "Cycle 1 — weekly x4 (if FCBP)",
          tests: ["quantitative beta-hCG"]
        },
        {
          label: "Days 8, 15, 22 (optional — if cytopenias, hypercalcemia, hepatic/renal dysfunction, or steroid-induced diabetes a concern)",
          tests: ["CBC & Diff", "creatinine", "sodium", "potassium", "total bilirubin", "ALT", "alkaline phosphatase", "calcium", "albumin", "random glucose"]
        },
        {
          label: "If clinically indicated",
          tests: ["HBV viral load"]
        }
      ]
    }
  },
  {
    key: "MY-UMYTEC",
    cat: "Multiple Myeloma",
    bcc: true,
    name: "UMYTEC - Teclistamab [Multiple Myeloma — Relapsed/Refractory, Triple-Class Exposed]",
    cycle: 28,
    notes: "Relapsed/refractory MM; ≥3 prior lines required including proteasome inhibitor, IMiD, and anti-CD38 antibody; CAP approval required. BCMA×CD3 bispecific antibody given SC with mandatory step-up dosing (0.06 → 0.3 → 1.5 mg/kg). Inpatient monitoring required for first 3 doses (Cycle 1 Days 1, 3, 5). No dose reductions; delays only. CRS and ICANS monitoring mandatory. Dose escalation required after treatment interruption >28 days. Extensive infection prophylaxis required.",
    drugs: [
      {
        name: "Teclistamab — Step-up dose 1",
        dose: 0.06,
        unit: "mg/kg",
        basis: "weight",
        max: null,
        weightCap: null,
        route: "Subcutaneous (abdomen or thigh); doses >2 mL as two separate injections",
        days: "Cycle 1, Day 1 only",
        reducible: false,
        note: "Mandatory step-up dose. Premedicate with dexamethasone 16 mg, loratadine 20 mg, acetaminophen 650–975 mg. Hospitalize for ≥48 hours after injection. Monitor for CRS and ICANS."
      },
      {
        name: "Teclistamab — Step-up dose 2",
        dose: 0.3,
        unit: "mg/kg",
        basis: "weight",
        max: null,
        weightCap: null,
        route: "Subcutaneous (abdomen or thigh); doses >2 mL as two separate injections",
        days: "Cycle 1, Day 3 (may give Day 3–7 after step-up dose 1)",
        reducible: false,
        note: "Mandatory step-up dose. Premedicate with dexamethasone 16 mg, loratadine 20 mg, acetaminophen 650–975 mg. Hospitalize for ≥48 hours after injection. Monitor for CRS and ICANS."
      },
      {
        name: "Teclistamab",
        dose: 1.5,
        unit: "mg/kg",
        basis: "weight",
        max: null,
        weightCap: null,
        route: "Subcutaneous (abdomen or thigh); doses >2 mL as two separate injections",
        days: "Cycle 1 Day 5 (first treatment dose); Cycle 2+: Days 1, 8, 15, 22",
        reducible: false,
        note: "No dose reductions recommended. Hold for CRS ≥Gr1, ICANS ≥Gr1, active infection, ANC <0.5×10⁹/L, or platelets <25×10⁹/L. After Cycle 1, can administer in ambulatory setting if no ≥Gr2 reactions. May reduce to Q2W (Days 1 and 15) after CR ≥6 months. Premedications required if CRS with prior dose."
      }
    ],
    labs: {
      baseline: [
        "CBC & Diff",
        "creatinine",
        "sodium",
        "potassium",
        "urea",
        "total bilirubin",
        "ALT",
        "alkaline phosphatase",
        "calcium",
        "albumin",
        "LDH",
        "random glucose",
        "magnesium",
        "phosphate",
        "ferritin",
        "C-reactive protein",
        "ICANS assessment (ICE score)",
        "serum protein electrophoresis",
        "serum free light chains",
        "immunoglobulin panel (IgA, IgG, IgM)",
        "HCAb",
        "HBsAg",
        "HBsAb",
        "HBcoreAb",
        "beta-2 microglobulin"
      ],
      cycle: [
        "CBC & Diff",
        "creatinine",
        "urea",
        "sodium",
        "potassium",
        "total bilirubin",
        "ALT",
        "alkaline phosphatase",
        "calcium",
        "albumin",
        "LDH",
        "random glucose"
      ],
      conditional: [
        {
          label: "Cycle 1 — prior to each dose",
          tests: ["CBC & Diff", "creatinine", "sodium", "potassium", "calcium", "magnesium", "phosphate", "ALT", "alkaline phosphatase", "total bilirubin", "albumin", "LDH", "vital signs"]
        },
        {
          label: "From Cycle 3 onwards, every 4 weeks (required)",
          tests: ["serum protein electrophoresis", "serum free light chains"]
        },
        {
          label: "Days 8, 15, 22 — Cycles 2+ (optional — if cytopenias, hypercalcemia, hepatic/renal dysfunction, or steroid-induced diabetes a concern)",
          tests: ["CBC & Diff", "creatinine", "sodium", "potassium", "total bilirubin", "ALT", "alkaline phosphatase", "calcium", "albumin", "random glucose"]
        },
        {
          label: "If clinically indicated",
          tests: ["phosphate", "magnesium", "HBV viral load"]
        }
      ]
    }
  },

  // =========================================================
  // BREAST PROTOCOLS (BC Cancer BR series)
  // =========================================================

  // BREAST PROTOCOLS
  {
    key: "BR-BRAJAC",
    cat: "Breast",
    bcc: true,
    name: "BRAJAC - DOXOrubicin + CYCLOphosphamide [Breast adjuvant]",
    cycle: 21,
    notes: "Adjuvant therapy for high-risk breast cancer. Repeat every 21 days x 4 cycles. G-CSF not mandatory. Radiation given after completion of chemotherapy if required.",
    drugs: [
      {
        name: "DOXOrubicin",
        dose: 60,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "IV push. Cardiac assessment recommended if lifelong dose >400 mg/m² exceeded."
      }
,
      {
        name: "CYCLOphosphamide",
        dose: 600,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "IV in NS or D5W 100-250 mL over 20 min to 1 hour."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "total bilirubin"],
      cycle: ["CBC & Diff"],
      conditional: [
        { label: "If clinically indicated", tests: ["total bilirubin", "ALT", "LDH", "creatinine"] },
      ]
    }
  },
  {
    key: "BR-BRAJACT",
    cat: "Breast",
    bcc: true,
    name: "BRAJACT - DOXOrubicin + CYCLOphosphamide → PACLitaxel q21d [Breast adj/neoadj]",
    cycle: 21,
    notes: "Sequential AC then PACLitaxel, both q21d x 4 cycles each. Dose-dense (BRAJACTG) or weekly PACLitaxel (BRAJACTW) schedules are preferred unless individual patient circumstances dictate otherwise. G-CSF not mandatory.",
    drugs: [
      {
        name: "DOXOrubicin",
        dose: 60,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 (Cycles 1-4)",
        reducible: true,
        note: "IV push."
      }
,
      {
        name: "CYCLOphosphamide",
        dose: 600,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 (Cycles 1-4)",
        reducible: true,
        note: "IV in NS 100-250 mL over 20 min to 1 hour."
      }
,
      {
        name: "PACLitaxel",
        dose: 175,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 (Cycles 5-8)",
        reducible: true,
        note: "IV in NS 250-500 mL over 3 hours. Non-DEHP bag/tubing with 0.2 micron in-line filter.",
        levels: [150]
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "total bilirubin", "ALT"],
      cycle: ["CBC & Diff"],
      conditional: [
        { label: "If clinically indicated", tests: ["creatinine", "MUGA scan or echocardiogram", "total bilirubin", "ALT"] },
      ]
    }
  },
  {
    key: "BR-BRAJACTG",
    cat: "Breast",
    bcc: true,
    name: "BRAJACTG - DOXOrubicin + CYCLOphosphamide → PACLitaxel Dose-Dense [Breast adj/neoadj]",
    cycle: 14,
    notes: "Dose-dense regimen. Phase 1: DOXOrubicin + CYCLOphosphamide q14d x 4 cycles with mandatory filgrastim Days 3-10. Phase 2: PACLitaxel q14d x 4 cycles starting 14 days after final AC, with filgrastim Days 3-10.",
    drugs: [
      {
        name: "DOXOrubicin",
        dose: 60,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 (Cycles 1-4)",
        reducible: true,
        note: "IV push."
      }
,
      {
        name: "CYCLOphosphamide",
        dose: 600,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 (Cycles 1-4)",
        reducible: true,
        note: "IV in NS 100-250 mL over 20 min to 1 hour."
      }
,
      {
        name: "Filgrastim (G-CSF)",
        dose: 5,
        unit: "mcg/kg",
        basis: "weight",
        max: null,
        weightCap: null,
        route: "SC",
        days: "Days 3-10 each cycle",
        reducible: false,
        note: "Mandatory. Reduce duration if ANC >10 or intolerable bone pain."
      }
,
      {
        name: "PACLitaxel",
        dose: 175,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 (Cycles 5-8)",
        reducible: true,
        note: "IV in 250-500 mL NS over 3 hours. Non-DEHP bag/tubing with 0.2 micron in-line filter.",
        levels: [150]
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "total bilirubin", "ALT"],
      cycle: ["CBC & Diff"],
      conditional: [
        { label: "If clinically indicated", tests: ["creatinine", "MUGA scan or echocardiogram", "total bilirubin", "ALT"] },
      ]
    }
  },
  {
    key: "BR-BRAJACTT",
    cat: "Breast",
    bcc: true,
    name: "BRAJACTT - DOXOrubicin + CYCLOphosphamide → PACLitaxel + TRASTUZumab q21d [HER2+ Breast]",
    cycle: 21,
    notes: "HER2+ regimen q21d (non-dose-dense). Phase 1: AC q21d x 4 cycles. Phase 2: TRASTUZumab loading 8 mg/kg Day 1 Cycle 5, then PACLitaxel Day 2; Cycles 6-8 TRASTUZumab 6 mg/kg + PACLitaxel q21d. Followed by 13 cycles single-agent TRASTUZumab (BRAJTR). Cardiac monitoring required prior to TRASTUZumab and q3-4 months.",
    drugs: [
      {
        name: "DOXOrubicin",
        dose: 60,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 (Cycles 1-4)",
        reducible: true,
        note: "IV push."
      }
,
      {
        name: "CYCLOphosphamide",
        dose: 600,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 (Cycles 1-4)",
        reducible: true,
        note: "IV in 100-250 mL NS over 20-60 minutes."
      }
,
      {
        name: "TRASTUZumab",
        dose: 6,
        unit: "mg/kg",
        basis: "weight",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 Cycle 5 (8 mg/kg loading); 6 mg/kg Cycles 6-8",
        reducible: false,
        note: "Loading 8 mg/kg over 90 min. Subsequent 6 mg/kg maintenance. No dose reductions."
      }
,
      {
        name: "PACLitaxel",
        dose: 175,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 2 Cycle 5; Day 1 Cycles 6-8",
        reducible: true,
        note: "IV in 250-500 mL NS over 3 hours. Non-DEHP bag/tubing with 0.2 micron in-line filter.",
        levels: [150]
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "total bilirubin", "ALT"],
      cycle: ["CBC & Diff"],
      conditional: [
        { label: "Prior to TRASTUZumab and every 3-4 months", tests: ["MUGA scan or echocardiogram"] },
        { label: "If clinically indicated", tests: ["creatinine", "MUGA scan or echocardiogram", "total bilirubin", "ALT"] },
      ]
    }
  },
  {
    key: "BR-BRAJACTTG",
    cat: "Breast",
    bcc: true,
    name: "BRAJACTTG - DOXOrubicin + CYCLOphosphamide → PACLitaxel + TRASTUZumab Dose-Dense [HER2+ Breast]",
    cycle: 14,
    notes: "Dose-dense HER2+ regimen. Phase 1: AC q14d x 4 cycles with mandatory filgrastim. Phase 2: TRASTUZumab loading 8 mg/kg Cycle 5 Day 1, then PACLitaxel Day 2; Cycles 6-8 TRASTUZumab 6 mg/kg + PACLitaxel q14-21d. Followed by 13 cycles single-agent TRASTUZumab (BRAJTR). Cardiac monitoring required prior to TRASTUZumab and q3-4 months.",
    drugs: [
      {
        name: "DOXOrubicin",
        dose: 60,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 (Cycles 1-4)",
        reducible: true,
        note: "IV push."
      }
,
      {
        name: "CYCLOphosphamide",
        dose: 600,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 (Cycles 1-4)",
        reducible: true,
        note: "IV in NS 100-250 mL over 20-60 minutes."
      }
,
      {
        name: "Filgrastim (G-CSF)",
        dose: 5,
        unit: "mcg/kg",
        basis: "weight",
        max: null,
        weightCap: null,
        route: "SC",
        days: "Days 3-10 (Cycles 1-4)",
        reducible: false,
        note: "Mandatory. Reduce duration if ANC >10 or intolerable bone pain."
      }
,
      {
        name: "TRASTUZumab",
        dose: 6,
        unit: "mg/kg",
        basis: "weight",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 Cycle 5 (8 mg/kg loading); 6 mg/kg Cycles 6-8",
        reducible: false,
        note: "Loading dose 8 mg/kg over 90 min. Subsequent 6 mg/kg maintenance. No dose reductions."
      }
,
      {
        name: "PACLitaxel",
        dose: 175,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 2 Cycle 5; Day 1 Cycles 6-8",
        reducible: true,
        note: "IV in 250-500 mL NS over 3 hours. Non-DEHP bag/tubing with 0.2 micron in-line filter.",
        levels: [150]
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "total bilirubin", "ALT"],
      cycle: ["CBC & Diff"],
      conditional: [
        { label: "Prior to TRASTUZumab and every 3-4 months", tests: ["MUGA scan or echocardiogram"] },
        { label: "If clinically indicated", tests: ["creatinine", "MUGA scan or echocardiogram", "total bilirubin", "ALT"] },
      ]
    }
  },
  {
    key: "BR-BRAJACTW",
    cat: "Breast",
    bcc: true,
    name: "BRAJACTW - DOXOrubicin + CYCLOphosphamide → Weekly PACLitaxel [Breast adj/neoadj]",
    cycle: 21,
    notes: "Phase 1: AC q21d x 4 cycles. Phase 2: Weekly PACLitaxel 80 mg/m² for 12 weeks (Days 1, 8, 15 each cycle x 4 cycles). G-CSF not mandatory; consider if patient has risk factors.",
    drugs: [
      {
        name: "DOXOrubicin",
        dose: 60,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 (Cycles 1-4)",
        reducible: true,
        note: "IV push."
      }
,
      {
        name: "CYCLOphosphamide",
        dose: 600,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 (Cycles 1-4)",
        reducible: true,
        note: "IV in 100-250 mL NS over 20 min to 1 hour."
      }
,
      {
        name: "PACLitaxel",
        dose: 80,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1, 8, 15 (Cycles 5-8; weekly x 12 weeks)",
        reducible: true,
        note: "IV in 100-500 mL NS over 1 hour. Non-DEHP bag/tubing with 0.2 micron in-line filter.",
        levels: [65]
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "total bilirubin", "ALT"],
      cycle: ["CBC & Diff"],
      conditional: [
        { label: "If clinically indicated", tests: ["total bilirubin", "ALT", "creatinine"] },
      ]
    }
  },
  {
    key: "BR-BRAJCAP",
    cat: "Breast",
    bcc: true,
    name: "BRAJCAP - Capecitabine [HER2-neg Breast adjuvant, residual disease post-neoadjuvant]",
    cycle: 21,
    notes: "Adjuvant capecitabine for HER2-negative resected breast cancer with residual disease after ≥6 cycles of neoadjuvant anthracycline-taxane therapy. 1000 mg/m² BID Days 1-14 q21d x 8 cycles. DPYD testing required. Dose reduction required for CrCl 30-49 mL/min (75%); contraindicated if CrCl <30 mL/min.",
    drugs: [
      {
        name: "Capecitabine",
        dose: 1000,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1-14 BID",
        reducible: true,
        note: "DPYD testing required. Dose reduction for CrCl 30-49 mL/min (75%); contraindicated if CrCl <30 mL/min."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "total bilirubin", "GGT", "ALT", "LDH", "alkaline phosphatase", "creatinine", "DPYD test"],
      cycle: ["CBC & Diff", "creatinine"],
      conditional: [
        { label: "If clinically indicated", tests: ["albumin", "total bilirubin", "GGT", "ALT", "alkaline phosphatase", "LDH", "urea"] },
      ]
    }
  },
  {
    key: "BR-BRAJDC",
    cat: "Breast",
    bcc: true,
    name: "BRAJDC - DOCEtaxel + CYCLOphosphamide (TC) [Breast adjuvant]",
    cycle: 21,
    notes: "Adjuvant therapy for high-risk breast cancer. DOCEtaxel + CYCLOphosphamide q21d x 4-6 cycles with mandatory filgrastim Days 3-7. Dexamethasone 8 mg PO BID x 3 days starting day before each cycle required.",
    drugs: [
      {
        name: "DOCEtaxel",
        dose: 75,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "IV in 250-500 mL NS over 1 hour. Non-DEHP equipment."
      }
,
      {
        name: "CYCLOphosphamide",
        dose: 600,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "IV in 100-250 mL NS over 20 min to 1 hour."
      }
,
      {
        name: "Filgrastim (G-CSF)",
        dose: 5,
        unit: "mcg/kg",
        basis: "weight",
        max: null,
        weightCap: null,
        route: "SC",
        days: "Day 3 for 5-7 doses each cycle",
        reducible: false,
        note: "Mandatory (FN risk >20%). Reduce duration if ANC >10 or intolerable bone pain."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "total bilirubin", "ALT", "creatinine"],
      cycle: ["CBC & Diff"],
      conditional: [
        { label: "If clinically indicated", tests: ["creatinine", "total bilirubin", "GGT", "ALT", "LDH", "alkaline phosphatase"] },
      ]
    }
  },
  {
    key: "BR-BRAJDCARBT",
    cat: "Breast",
    bcc: true,
    name: "BRAJDCARBT - DOCEtaxel + CARBOplatin + TRASTUZumab (TCH) [HER2+ Breast adj/neoadj]",
    cycle: 21,
    notes: "HER2+ adjuvant/neoadjuvant regimen. TRASTUZumab 8 mg/kg loading Cycle 1 then 6 mg/kg maintenance + DOCEtaxel + CARBOplatin q21d x 6 cycles with mandatory filgrastim Days 3-7. Followed by 11 cycles single-agent TRASTUZumab (BRAJTR) for total 51 weeks/17 doses. GFR capped at 125 mL/min. Cardiac monitoring prior to first TRASTUZumab and q3-4 months.",
    drugs: [
      {
        name: "TRASTUZumab",
        dose: 6,
        unit: "mg/kg",
        basis: "weight",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 (8 mg/kg loading Cycle 1; 6 mg/kg Cycles 2-6)",
        reducible: false,
        note: "Loading: 250 mL NS over 90 min with 1 hr observation. Subsequent: over 60 min then 30 min. No dose reductions."
      }
,
      {
        name: "DOCEtaxel",
        dose: 75,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "IV in 250-500 mL NS over 60 min. Non-DEHP equipment. Dexamethasone 8 mg PO BID x 3 days starting day before each cycle.",
        levels: [56]
      }
,
      {
        name: "CARBOplatin",
        dose: 6,
        unit: "AUC",
        basis: "auc",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "GFR capped at 125 mL/min. IV in 100-250 mL NS over 30 minutes.",
        levels: [5]
      }
,
      {
        name: "Filgrastim (G-CSF)",
        dose: 5,
        unit: "mcg/kg",
        basis: "weight",
        max: null,
        weightCap: null,
        route: "SC",
        days: "Day 3 for 5-7 doses each cycle",
        reducible: false,
        note: "Mandatory. Reduce duration if ANC >10 or intolerable bone pain."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "total bilirubin", "GGT", "ALT", "alkaline phosphatase", "creatinine"],
      cycle: ["CBC & Diff", "creatinine"],
      conditional: [
        { label: "Prior to TRASTUZumab and every 3-4 months", tests: ["MUGA scan or echocardiogram"] },
        { label: "If clinically indicated", tests: ["total bilirubin", "GGT", "ALT", "LDH", "alkaline phosphatase", "MUGA scan or echocardiogram"] },
      ]
    }
  },
  {
    key: "BR-BRAJPEM",
    cat: "Breast",
    bcc: true,
    name: "BRAJPEM - Pembrolizumab [TNBC adjuvant, post-neoadjuvant]",
    cycle: 21,
    notes: "Adjuvant pembrolizumab for TNBC (HER2-neg, ER <1%) with residual disease after neoadjuvant BRPCTAC or BRPCWTAC. Up to 17 cycles total including neoadjuvant doses. No dose reductions; toxicity managed by delay.",
    drugs: [
      {
        name: "PEMBROlizumab",
        dose: 2,
        unit: "mg/kg",
        basis: "weight",
        max: 200,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: false,
        note: "IV in 50 mL NS over 30 min with 0.2 micron in-line filter. Max 200 mg per dose. No dose reductions."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "morning serum cortisol", "creatine kinase"],
      cycle: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "creatine kinase"],
      conditional: [
        { label: "If clinically indicated", tests: ["chest x-ray", "morning serum cortisol", "creatine kinase", "lipase", "free T3", "free T4", "serum ACTH", "testosterone", "estradiol", "FSH", "LH", "random glucose", "troponin", "ECG"] },
      ]
    }
  },
  {
    key: "BR-BRAJPN",
    cat: "Breast",
    bcc: true,
    name: "BRAJPN - PACLitaxel NAB [Breast, adjuvant alt]",
    cycle: 21,
    notes: "Alternative adjuvant therapy for breast cancer with prior severe hypersensitivity to PACLitaxel or DOCEtaxel, or contraindication to high-dose steroids. Repeat every 21 days to complete total number of cycles in original protocol.",
    drugs: [
      {
        name: "PACLitaxel NAB",
        dose: 260,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "IV over 30 min in empty sterile bags with 15 micron filter.",
        levels: [220, 180]
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "total bilirubin", "ALT", "GGT", "LDH", "alkaline phosphatase", "creatinine"],
      cycle: ["CBC & Diff", "total bilirubin", "ALT", "creatinine"],
      conditional: [
        { label: "If clinically indicated", tests: ["GGT", "alkaline phosphatase", "urea"] },
      ]
    }
  },
  {
    key: "BR-BRAJPNCT",
    cat: "Breast",
    bcc: true,
    name: "BRAJPNCT - PACLitaxel NAB + CARBOplatin + TRASTUZumab [HER2+ Breast, neoadj/adj alt]",
    cycle: 21,
    notes: "Alternative neoadjuvant/adjuvant therapy for HER2+ breast cancer with prior severe taxane hypersensitivity or contraindication to steroids. CARBOplatin GFR capped at 125 mL/min. Followed by single-agent trastuzumab (BRAJTR) to complete 51 weeks/17 doses total.",
    drugs: [
      {
        name: "TRASTUZumab",
        dose: 6,
        unit: "mg/kg",
        basis: "weight",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: false,
        note: "Maintenance dose (loading dose given in prior protocol). No dose reduction for hematologic toxicity."
      }
,
      {
        name: "PACLitaxel NAB",
        dose: 260,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "IV over 30 min in empty sterile bags with 15 micron filter.",
        levels: [220, 180]
      }
,
      {
        name: "CARBOplatin",
        dose: 6,
        unit: "AUC",
        basis: "auc",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "GFR capped at 125 mL/min. May reduce to AUC 5 then AUC 4 if repeated delays."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "total bilirubin", "ALT", "GGT", "alkaline phosphatase", "creatinine"],
      cycle: ["CBC & Diff", "creatinine", "total bilirubin", "ALT"],
      conditional: [
        { label: "Prior to first trastuzumab and every 3-4 months", tests: ["MUGA scan or echocardiogram"] },
        { label: "If clinically indicated", tests: ["GGT", "alkaline phosphatase", "urea", "MUGA scan or echocardiogram"] },
      ]
    }
  },
  {
    key: "BR-BRAJPNT",
    cat: "Breast",
    bcc: true,
    name: "BRAJPNT - PACLitaxel NAB + TRASTUZumab [HER2+ Breast, adjuvant alt]",
    cycle: 21,
    notes: "Alternative adjuvant therapy for HER2+ breast cancer with prior severe hypersensitivity to PACLitaxel or DOCEtaxel, or contraindication to high-dose steroids. Followed by 13 cycles single-agent trastuzumab (BRAJTR) to complete 1 year/17 cycles total.",
    drugs: [
      {
        name: "TRASTUZumab",
        dose: 6,
        unit: "mg/kg",
        basis: "weight",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: false,
        note: "Maintenance dose (loading dose given in prior protocol). No dose reduction for hematologic toxicity."
      }
,
      {
        name: "PACLitaxel NAB",
        dose: 260,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "IV over 30 min in empty sterile bags with 15 micron filter.",
        levels: [220, 180]
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "total bilirubin", "ALT", "GGT", "LDH", "alkaline phosphatase", "creatinine"],
      cycle: ["CBC & Diff", "total bilirubin", "ALT", "creatinine"],
      conditional: [
        { label: "Prior to first trastuzumab and every 3-4 months", tests: ["MUGA scan or echocardiogram"] },
        { label: "If clinically indicated", tests: ["GGT", "alkaline phosphatase", "urea", "MUGA scan or echocardiogram"] },
      ]
    }
  },
  {
    key: "BR-BRAJTDC",
    cat: "Breast",
    bcc: true,
    name: "BRAJTDC - TRASTUZumab + DOCEtaxel + CYCLOphosphamide [HER2+ Breast, neoadj/adj]",
    cycle: 21,
    notes: "Neoadjuvant or adjuvant therapy for HER2+ breast cancer. 4 cycles total; Cycle 1 uses loading dose trastuzumab 8 mg/kg, Cycles 2-4 use 6 mg/kg. Mandatory filgrastim Day 3 for 5-7 doses each cycle. Followed by 13 cycles single-agent trastuzumab (BRAJTR).",
    drugs: [
      {
        name: "TRASTUZumab",
        dose: 6,
        unit: "mg/kg",
        basis: "weight",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: false,
        note: "Cycle 1: 8 mg/kg loading over 90 min. Cycles 2-4: 6 mg/kg maintenance. No dose reduction for hematologic toxicity."
      }
,
      {
        name: "DOCEtaxel",
        dose: 75,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "250-500 mL NS over 60 min (non-DEHP equipment). Dexamethasone 8 mg PO BID x 3 days starting 1 day prior."
      }
,
      {
        name: "CYCLOphosphamide",
        dose: 600,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "100-250 mL NS over 20-60 min."
      }
,
      {
        name: "Filgrastim (G-CSF)",
        dose: 5,
        unit: "mcg/kg",
        basis: "weight",
        max: null,
        weightCap: null,
        route: "SC",
        days: "Days 3-9",
        reducible: false,
        note: "Mandatory. Daily starting Day 3 for 5-7 doses."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "total bilirubin", "ALT", "creatinine"],
      cycle: ["CBC & Diff"],
      conditional: [
        { label: "Prior to first trastuzumab and every 3-4 months", tests: ["MUGA scan or echocardiogram"] },
        { label: "If clinically indicated", tests: ["creatinine", "total bilirubin", "ALT", "GGT", "LDH", "alkaline phosphatase", "urea"] },
      ]
    }
  },
  {
    key: "BR-BRAJTTW",
    cat: "Breast",
    bcc: true,
    name: "BRAJTTW - Weekly PACLitaxel + TRASTUZumab [HER2+ Node-negative Breast, adjuvant]",
    cycle: 21,
    notes: "Adjuvant therapy for HER2+ breast cancer with tumor ≤3 cm and node-negative disease. PACLitaxel given weekly (Days 1, 8, 15). Cycle 1: trastuzumab loading dose Day 1, PACLitaxel starts Day 2 only. 4 cycles total, then 13 cycles single-agent trastuzumab (BRAJTR).",
    drugs: [
      {
        name: "TRASTUZumab",
        dose: 6,
        unit: "mg/kg",
        basis: "weight",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 each cycle",
        reducible: false,
        note: "Cycle 1 Day 1: 8 mg/kg loading over 90 min. Cycles 2+: 6 mg/kg maintenance."
      }
,
      {
        name: "PACLitaxel",
        dose: 80,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1, 8, 15 (Day 2 only in Cycle 1)",
        reducible: true,
        note: "100-500 mL NS (non-DEHP) over 60 min with 0.2 micron filter. Reduce by 10 mg/m² for Grade 2 neuropathy.",
        levels: [70, 65]
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "total bilirubin", "ALT"],
      cycle: ["CBC & Diff"],
      conditional: [
        { label: "Prior to first trastuzumab and every 3-4 months", tests: ["MUGA scan or echocardiogram"] },
        { label: "If clinically indicated", tests: ["total bilirubin", "ALT", "MUGA scan or echocardiogram"] },
      ]
    }
  },
  {
    key: "BR-BRAVA7",
    cat: "Breast",
    bcc: true,
    name: "BRAVA7 - Weekly DOXOrubicin [Metastatic Breast]",
    cycle: 21,
    notes: "Palliative therapy for metastatic breast cancer. DOXOrubicin 20 mg/m² on Days 1, 8, 15. For frail or heavily pre-treated patients, start with 15 mg/m². Total 6-8 cycles; cumulative DOXOrubicin dose ≤360 mg/m².",
    drugs: [
      {
        name: "DOXOrubicin",
        dose: 20,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1, 8, 15",
        reducible: true,
        note: "IV push. Cumulative DOXOrubicin dose limit ≤360 mg/m²."
      }
    ],
    labs: {
      baseline: ["CBC & diff", "total bilirubin", "GGT", "ALT", "LDH", "alkaline phosphatase"],
      cycle: ["CBC & diff"],
      conditional: [
        { label: "If clinically indicated", tests: ["bilirubin", "GGT", "ALT", "LDH", "alkaline phosphatase", "creatinine", "ECHO or MUGA scan"] },
      ]
    }
  },
  {
    key: "BR-BRAVABR",
    cat: "Breast",
    bcc: true,
    name: "BRAVABR - PACLitaxel NAB [Metastatic Breast]",
    cycle: 21,
    notes: "Palliative therapy for metastatic breast cancer, first to third line. Repeat every 21 days for 6 cycles; up to 8 cycles if still receiving benefit. Not for patients with progression on prior taxane therapy.",
    drugs: [
      {
        name: "PACLitaxel NAB",
        dose: 260,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "IV over 30 min in empty sterile bags with 15 micron filter.",
        levels: [220, 180]
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "total bilirubin", "ALT", "GGT", "LDH", "alkaline phosphatase", "creatinine"],
      cycle: ["CBC & Diff", "total bilirubin", "ALT", "creatinine"],
      conditional: [
        { label: "If clinically indicated", tests: ["GGT", "alkaline phosphatase", "urea"] },
      ]
    }
  },
  {
    key: "BR-BRAVAC",
    cat: "Breast",
    bcc: true,
    name: "BRAVAC - DOXOrubicin + CYCLOphosphamide [Metastatic Breast]",
    cycle: 21,
    notes: "Palliative therapy for advanced/metastatic breast cancer. Repeat every 21 days x 6 cycles.",
    drugs: [
      {
        name: "DOXOrubicin",
        dose: 60,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "IV push. Cumulative DOXOrubicin lifetime dose limit 400 mg/m²."
      }
,
      {
        name: "CYCLOphosphamide",
        dose: 600,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "100-250 mL NS or D5W over 20 min to 1 hour."
      }
    ],
    labs: {
      baseline: ["CBC & diff", "bilirubin"],
      cycle: ["CBC & diff"],
      conditional: [
        { label: "If clinically indicated", tests: ["bilirubin", "creatinine"] },
      ]
    }
  },
  {
    key: "BR-BRAVCAP",
    cat: "Breast",
    bcc: true,
    name: "BRAVCAP - Capecitabine [Metastatic Breast]",
    cycle: 21,
    notes: "Palliative therapy for metastatic breast cancer. Starting dose 1000 mg/m² BID; may escalate to 1250 mg/m² BID. Days 1-14 of each 21-day cycle. DPYD testing required before starting. Reduce to 75% for CrCl 30-50 mL/min; contraindicated if CrCl <30 mL/min.",
    drugs: [
      {
        name: "Capecitabine",
        dose: 1000,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1-14 BID",
        reducible: true,
        note: "Starting dose 1000 mg/m² BID; may escalate to 1250 mg/m² BID. Take with food. DPYD testing required."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "total bilirubin", "GGT", "ALT", "LDH", "alkaline phosphatase", "creatinine", "DPYD test"],
      cycle: ["CBC & Diff", "creatinine"],
      conditional: [
        { label: "If clinically indicated", tests: ["total protein", "albumin", "total bilirubin", "GGT", "ALT", "LDH", "alkaline phosphatase", "urea", "CA 15-3"] },
      ]
    }
  },
  {
    key: "BR-BRAVCMF",
    cat: "Breast",
    bcc: true,
    name: "BRAVCMF - CYCLOphosphamide + Methotrexate + Fluorouracil [Advanced Breast]",
    cycle: 21,
    notes: "Palliative therapy for advanced breast cancer. Repeat every 21 days x 6-8 cycles. DPYD testing required before fluorouracil. Methotrexate omitted if third-space fluids present.",
    drugs: [
      {
        name: "CYCLOphosphamide",
        dose: 600,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "100-250 mL NS over 20 min to 1 hour."
      }
,
      {
        name: "Methotrexate",
        dose: 40,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "IV push. Omit if third-space fluids present. Renal dose adjustments required."
      }
,
      {
        name: "Fluorouracil",
        dose: 600,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "IV push. DPYD testing required."
      }
    ],
    labs: {
      baseline: ["CBC & diff", "platelets", "bilirubin", "ALT", "creatinine", "DPYD test"],
      cycle: ["CBC & diff", "platelets"],
      conditional: [
        { label: "If clinically indicated", tests: ["bilirubin", "ALT", "creatinine"] },
      ]
    }
  },
  {
    key: "BR-BRAVCMPO",
    cat: "Breast",
    bcc: true,
    name: "BRAVCMPO - CYCLOphosphamide + Methotrexate (Metronomic) [Metastatic Breast]",
    cycle: 28,
    notes: "Metronomic low-dose oral regimen. Repeat every 28 days x 6-8 cycles; may continue if responding. Discontinue if no response after 2 cycles or unacceptable toxicity. Dose reduce for hematological toxicity. Methotrexate requires renal and hepatic dose adjustments.",
    drugs: [
      {
        name: "CYCLOphosphamide",
        dose: 50,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Once daily continuously",
        reducible: true,
        note: null
      }
,
      {
        name: "Methotrexate",
        dose: 2.5,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "BID Days 1 and 2 of each week",
        reducible: true,
        note: "2.5 mg BID on Days 1 and 2 of each week; reduce to 50% for GFR 15-30 mL/min; omit if GFR < 15 mL/min"
      }
    ],
    labs: {
      baseline: ["CBC & diff", "platelets", "serum creatinine", "bilirubin", "ALT", "Alk Phos"],
      cycle: ["CBC & diff", "platelets", "bilirubin", "ALT"],
      conditional: [
        { label: "If clinically indicated", tests: ["creatinine", "alkaline phosphatase"] },
      ]
    }
  },
  {
    key: "BR-BRAVDOC",
    cat: "Breast",
    bcc: true,
    name: "BRAVDOC - DOCEtaxel [Metastatic Breast]",
    cycle: 21,
    notes: "Repeat every 21 days x 6 cycles; up to 8 cycles if continued benefit. Discontinue if no response after 2 cycles. Premedicate with dexamethasone 8 mg PO BID x 3 days starting one day prior.",
    drugs: [
      {
        name: "DOCEtaxel",
        dose: 100,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "IV in 250-500 mL NS or D5W over 1 hour. Use non-DEHP equipment."
      }
    ],
    labs: {
      baseline: ["CBC & diff", "platelets", "ALT", "Alk Phos", "LDH"],
      cycle: ["CBC & diff", "platelets"],
      conditional: [
        { label: "Before Cycle 4 and if clinically indicated", tests: ["bilirubin", "Alk Phos", "ALT", "GGT"] },
      ]
    }
  },
  {
    key: "BR-BRAVDOC7",
    cat: "Breast",
    bcc: true,
    name: "BRAVDOC7 - DOCEtaxel (Weekly) [Metastatic Breast]",
    cycle: 56,
    notes: "DOCEtaxel 36 mg/m² IV weekly x 6 weeks followed by 2 weeks rest (1 cycle = 8 weeks) x 4 cycles. Discontinue if no response after 1 cycle. Premedicate with dexamethasone 8 mg PO 1 hour prior.",
    drugs: [
      {
        name: "DOCEtaxel",
        dose: 36,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Weekly x 6 weeks, then 2 weeks rest",
        reducible: true,
        note: "Use non-DEHP equipment. IV in 100-250 mL NS over 1 hour."
      }
    ],
    labs: {
      baseline: ["CBC & diff", "platelets", "ALT", "Alk Phos", "LDH", "GGT"],
      cycle: ["CBC & diff", "platelets"],
      conditional: [
        { label: "Before Cycle 3 and if clinically indicated", tests: ["bilirubin", "Alk Phos", "ALT", "GGT"] },
      ]
    }
  },
  {
    key: "BR-BRAVENH",
    cat: "Breast",
    bcc: true,
    name: "BRAVENH - Trastuzumab Deruxtecan (ENHERTU) [HER2+ or HER2-low Metastatic Breast]",
    cycle: 21,
    notes: "Continue until disease progression or unacceptable toxicity. Risk of ILD/pneumonitis — permanently discontinue for Grade 2 or higher. Monitor LVEF. Dose should not be re-escalated after reduction.",
    drugs: [
      {
        name: "Trastuzumab deruxtecan",
        dose: 5.4,
        unit: "mg/kg",
        basis: "weight",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "IV in 100 mL D5W over 90 min (first dose); 30 min for subsequent doses if no reaction. 0.2 micron in-line filter.",
        levels: [4.4, 3.2]
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "total bilirubin", "ALT", "CT chest"],
      cycle: ["CBC & Diff", "creatinine", "total bilirubin", "ALT"],
      conditional: [
        { label: "If clinically indicated", tests: ["CA 15-3", "alkaline phosphatase", "electrolytes", "albumin", "phosphate", "CT chest", "echocardiogram or MUGA (LVEF) every 12 weeks"] },
      ]
    }
  },
  {
    key: "BR-BRAVERIB",
    cat: "Breast",
    bcc: true,
    name: "BRAVERIB - eriBULin [Metastatic Breast]",
    cycle: 21,
    notes: "Continue until disease progression or unacceptable toxicity. Dose should not be re-escalated. Day 8 dose may be delayed 1 week; omit if no recovery. Reduce for renal impairment (CrCl 15-50 mL/min: use 1.1 mg/m²). Monitor QTc.",
    drugs: [
      {
        name: "eriBULin",
        dose: 1.4,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1 and 8",
        reducible: true,
        note: "IV push over 2-5 minutes.",
        levels: [1.1, 0.7]
      }
    ],
    labs: {
      baseline: ["CBC & diff", "platelets", "bilirubin", "GGT", "Alk Phos", "ALT", "LDH", "creatinine", "sodium", "potassium"],
      cycle: ["CBC & diff", "platelets", "sodium", "potassium", "creatinine", "bilirubin", "GGT", "Alk Phos", "ALT", "LDH"],
      conditional: [
        { label: "Before Day 8", tests: ["CBC & diff", "platelets", "creatinine"] },
        { label: "If clinically indicated", tests: ["total protein", "albumin", "ECG (QTc monitoring)"] },
      ]
    }
  },
  {
    key: "BR-BRAVGEM",
    cat: "Breast",
    bcc: true,
    name: "BRAVGEM - Gemcitabine [Metastatic Breast]",
    cycle: 28,
    notes: "Gemcitabine 800 mg/m² weekly x 3 then 1 week rest (4-week cycle). Repeat every 28 days x 6-8 cycles. Discontinue if no response after 2 cycles.",
    drugs: [
      {
        name: "Gemcitabine",
        dose: 800,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1, 8, 15 (then 1 week rest)",
        reducible: true,
        note: "IV in 250 mL NS over 30 minutes."
      }
    ],
    labs: {
      baseline: ["CBC & differential", "platelets", "creatinine", "bilirubin"],
      cycle: ["CBC & differential", "platelets"],
      conditional: [
        { label: "If clinically indicated", tests: ["creatinine", "bilirubin"] },
      ]
    }
  },
  {
    key: "BR-BRAVGEMD",
    cat: "Breast",
    bcc: true,
    name: "BRAVGEMD - Gemcitabine + DOCEtaxel [Metastatic Breast]",
    cycle: 21,
    notes: "Repeat every 21 days x 6 cycles. Premedicate with dexamethasone 8 mg PO BID x 3 days starting one day prior to DOCEtaxel. Day 8 gemcitabine dose adjusted based on counts.",
    drugs: [
      {
        name: "DOCEtaxel",
        dose: 75,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "IV in 250-500 mL NS over 1 hour. Use non-DEHP equipment."
      }
,
      {
        name: "Gemcitabine",
        dose: 1000,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1 and 8",
        reducible: true,
        note: "IV in 250 mL NS over 30 minutes. Day 8 dose adjusted per CBC."
      }
    ],
    labs: {
      baseline: ["CBC & diff", "platelets", "bilirubin", "ALT", "GGT", "LDH", "Alk Phos", "creatinine"],
      cycle: ["CBC & diff", "platelets"],
      conditional: [
        { label: "Before Cycle 4 and if clinically indicated", tests: ["bilirubin", "ALT", "GGT", "Alk Phos"] },
      ]
    }
  },
  {
    key: "BR-BRAVGEMP",
    cat: "Breast",
    bcc: true,
    name: "BRAVGEMP - Gemcitabine + CISplatin [Metastatic Breast]",
    cycle: 21,
    notes: "Repeat every 21 days until disease progression. CISplatin requires CrCl ≥ 60 mL/min. Starting dose 600 mg/m² gemcitabine recommended if ≥2 prior chemo regimens.",
    drugs: [
      {
        name: "Gemcitabine",
        dose: 750,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1 and 8",
        reducible: true,
        note: "IV in 250 mL NS over 30 minutes."
      }
,
      {
        name: "CISplatin",
        dose: 30,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1 and 8",
        reducible: true,
        note: "Requires CrCl ≥ 60 mL/min."
      }
    ],
    labs: {
      baseline: ["CBC & differential", "platelets", "creatinine", "ALT", "Alk Phos", "LDH", "bilirubin"],
      cycle: ["CBC & differential", "platelets", "creatinine", "ALT", "Alk Phos", "LDH", "bilirubin"],
      conditional: [
        { label: "Before Day 8", tests: ["CBC & differential", "platelets", "creatinine"] },
      ]
    }
  },
  {
    key: "BR-BRAVGEMT",
    cat: "Breast",
    bcc: true,
    name: "BRAVGEMT - Gemcitabine + PACLitaxel [Metastatic Breast]",
    cycle: 21,
    notes: "Repeat every 21 days x 6 cycles. Discontinue if no response after 2 cycles. Premedicate with dexamethasone 20 mg IV, diphenhydrAMINE 50 mg IV, and famotidine 20 mg IV 30-45 min prior to PACLitaxel.",
    drugs: [
      {
        name: "PACLitaxel",
        dose: 175,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "IV in 250-500 mL NS over 3 hours. Non-DEHP bag and tubing with 0.2 micron in-line filter."
      }
,
      {
        name: "Gemcitabine",
        dose: 1250,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1 and 8",
        reducible: true,
        note: "IV in 250 mL NS over 30 minutes. Day 8 dose adjusted per CBC."
      }
    ],
    labs: {
      baseline: ["CBC & diff", "platelets", "bilirubin", "ALT", "creatinine"],
      cycle: ["CBC & diff", "platelets"],
      conditional: [
        { label: "If clinically indicated", tests: ["creatinine", "bilirubin", "ALT"] },
      ]
    }
  },
  {
    key: "BR-BRAVKAD",
    cat: "Breast",
    bcc: true,
    name: "BRAVKAD - Trastuzumab Emtansine (KADCYLA) [HER2+ Metastatic Breast]",
    cycle: 21,
    notes: "Continue until disease progression or unacceptable toxicity. Dose should not be re-escalated after reduction. Monitor for ILD/pneumonitis and LVEF.",
    drugs: [
      {
        name: "Trastuzumab emtansine",
        dose: 3.6,
        unit: "mg/kg",
        basis: "weight",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "IV in 250 mL NS over 90 min (first dose); 30 min for subsequent doses. 0.2 micron in-line filter.",
        levels: [3.0, 2.4]
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "total bilirubin", "ALT", "Alk Phos", "LDH", "GGT", "creatinine"],
      cycle: ["CBC & Diff", "total bilirubin", "ALT", "Alk Phos", "LDH", "GGT"],
      conditional: [
        { label: "If clinically indicated", tests: ["MUGA scan or echocardiogram (LVEF) every 12 weeks", "total protein", "albumin", "sodium", "potassium", "ECG"] },
      ]
    }
  },
  {
    key: "BR-BRAVNAV",
    cat: "Breast",
    bcc: true,
    name: "BRAVNAV - VINOrelbine [Metastatic Breast]",
    cycle: 21,
    notes: "Palliative therapy for metastatic breast cancer. For frail or heavily pretreated patients, start with 25 mg/m² on Days 1 and 8. Discontinue if no response after 3 cycles. Hepatic dose adjustment required based on total bilirubin.",
    drugs: [
      {
        name: "VINOrelbine",
        dose: 30,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1 and 8",
        reducible: true,
        note: "Start at 25 mg/m² for frail or heavily pretreated patients."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "total bilirubin", "ALT", "GGT", "LDH", "alkaline phosphatase"],
      cycle: ["CBC & Diff"],
      conditional: [
        { label: "If clinically indicated", tests: ["total bilirubin"] },
      ]
    }
  },
  {
    key: "BR-BRAVPALAI",
    cat: "Breast",
    bcc: true,
    name: "BRAVPALAI - Palbociclib + Aromatase Inhibitor [HR+/HER2- Advanced Breast]",
    cycle: 28,
    notes: "ER-positive, HER2-negative advanced or metastatic breast cancer. Palbociclib 125 mg PO daily for 21 days on, 7 days off. Aromatase inhibitor (letrozole 2.5 mg or anastrozole 1 mg) continuously. LHRH agonist added for premenopausal women and men. Discontinue palbociclib if dose reduction below 75 mg required.",
    drugs: [
      {
        name: "Palbociclib",
        dose: 125,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1-21 (21 days on, 7 days off)",
        reducible: true,
        note: "Discontinue if dose reduction below 75 mg required.",
        levels: [100, 75]
      }
,
      {
        name: "Letrozole",
        dose: 2.5,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Daily continuously",
        reducible: false,
        note: "Or anastrozole 1 mg PO daily continuously."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "platelets", "creatinine", "ALT", "alkaline phosphatase", "total bilirubin", "GGT", "LDH"],
      cycle: ["CBC & Diff", "platelets", "creatinine"],
      conditional: [
        { label: "Day 15 of Cycle 1", tests: ["CBC & Diff", "platelets"] },
        { label: "Day 15 of Cycle 2 if clinically indicated", tests: ["CBC & Diff", "platelets"] },
        { label: "If clinically indicated", tests: ["ALT", "alkaline phosphatase", "total bilirubin", "GGT", "LDH", "CA15-3", "ECG", "serum cholesterol", "triglycerides"] },
      ]
    }
  },
  {
    key: "BR-BRAVPBFLV",
    cat: "Breast",
    bcc: true,
    name: "BRAVPBFLV - Palbociclib + Fulvestrant [HR+/HER2- Advanced Breast]",
    cycle: 28,
    notes: "ER-positive, HER2-negative advanced or metastatic breast cancer. Palbociclib 125 mg PO daily 21 days on, 7 days off. Fulvestrant 500 mg IM Days 1 and 15 of Cycle 1, then Day 1 every 28 days. LHRH agonist added for premenopausal women and men. Discontinue palbociclib if dose reduction below 75 mg required.",
    drugs: [
      {
        name: "Palbociclib",
        dose: 125,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1-21 (21 days on, 7 days off)",
        reducible: true,
        note: "Discontinue if dose reduction below 75 mg required.",
        levels: [100, 75]
      }
,
      {
        name: "Fulvestrant",
        dose: 500,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "IM",
        days: "Days 1 and 15 (Cycle 1), then Day 1 every 28 days",
        reducible: false,
        note: "Administer as two 250 mg injections. Continue even if palbociclib is delayed/held."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "platelets", "creatinine", "ALT", "alkaline phosphatase", "total bilirubin", "GGT", "LDH"],
      cycle: ["CBC & Diff", "platelets", "creatinine"],
      conditional: [
        { label: "Day 15 of Cycle 1", tests: ["CBC & Diff", "platelets"] },
        { label: "Day 15 of Cycle 2 if clinically indicated", tests: ["CBC & Diff", "platelets"] },
        { label: "If clinically indicated", tests: ["ALT", "alkaline phosphatase", "total bilirubin", "GGT", "LDH", "CA15-3", "ECG", "serum cholesterol", "triglycerides"] },
      ]
    }
  },
  {
    key: "BR-BRAVPEM",
    cat: "Breast",
    bcc: true,
    name: "BRAVPEM - Pembrolizumab 3-weekly [Metastatic TNBC, maintenance]",
    cycle: 21,
    notes: "Single-agent pembrolizumab maintenance after completing chemotherapy portion of BRAVPPN, BRAVPP, or BRAVPGC. For locally recurrent unresectable or metastatic TNBC with CPS ≥10. 2 mg/kg (max 200 mg) every 3 weeks. Maximum 35 cycles or 2 years total. No dose modifications — toxicity managed by delay.",
    drugs: [
      {
        name: "PEMBROlizumab",
        dose: 2,
        unit: "mg/kg",
        basis: "weight",
        max: 200,
        weightCap: null,
        route: "IV",
        days: "Day 1 every 3 weeks",
        reducible: false,
        note: "No dose modifications; manage toxicity by treatment delay."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "sodium", "potassium", "TSH", "LDH", "creatine kinase"],
      cycle: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "sodium", "potassium", "TSH", "LDH", "creatine kinase"],
      conditional: [
        { label: "If clinically indicated", tests: ["morning serum cortisol", "lipase", "GGT", "random glucose", "free T3", "free T4", "serum ACTH", "troponin", "ECG", "chest x-ray"] },
      ]
    }
  },
  {
    key: "BR-BRAVPEM6",
    cat: "Breast",
    bcc: true,
    name: "BRAVPEM6 - Pembrolizumab 6-weekly [Metastatic TNBC, maintenance]",
    cycle: 42,
    notes: "Single-agent pembrolizumab maintenance after completing chemotherapy portion of BRAVPPN, BRAVPP, or BRAVPGC. For locally recurrent unresectable or metastatic TNBC with CPS ≥10. 4 mg/kg (max 400 mg) every 6 weeks. Maximum 18 cycles for 6-weekly dosing or 2 years total. No dose modifications — toxicity managed by delay.",
    drugs: [
      {
        name: "PEMBROlizumab",
        dose: 4,
        unit: "mg/kg",
        basis: "weight",
        max: 400,
        weightCap: null,
        route: "IV",
        days: "Day 1 every 6 weeks",
        reducible: false,
        note: "No dose modifications; manage toxicity by treatment delay."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "sodium", "potassium", "TSH", "LDH", "creatine kinase"],
      cycle: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "sodium", "potassium", "TSH", "LDH", "creatine kinase"],
      conditional: [
        { label: "If clinically indicated", tests: ["morning serum cortisol", "lipase", "GGT", "random glucose", "free T3", "free T4", "serum ACTH", "troponin", "ECG", "chest x-ray"] },
      ]
    }
  },
  {
    key: "BR-BRAVPGC",
    cat: "Breast",
    bcc: true,
    name: "BRAVPGC - Pembrolizumab + Gemcitabine + CARBOplatin [Metastatic TNBC]",
    cycle: 21,
    notes: "First-line treatment for locally recurrent unresectable or metastatic TNBC with CPS ≥10. CARBOplatin AUC 2 Days 1 and 8; CrCl capped at 125 mL/min. Chemotherapy until progression; pembrolizumab max 35 cycles or 2 years. If chemotherapy discontinued, transition to BRAVPEM or BRAVPEM6.",
    drugs: [
      {
        name: "PEMBROlizumab",
        dose: 2,
        unit: "mg/kg",
        basis: "weight",
        max: 200,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: false,
        note: "No dose modifications; manage toxicity by treatment delay."
      }
,
      {
        name: "Gemcitabine",
        dose: 1000,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1 and 8",
        reducible: true,
        note: null
      }
,
      {
        name: "CARBOplatin",
        dose: 2,
        unit: "AUC",
        basis: "auc",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1 and 8",
        reducible: true,
        note: "AUC 2 each dose; GFR capped at 125 mL/min."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "morning serum cortisol", "creatine kinase"],
      cycle: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "creatine kinase"],
      conditional: [
        { label: "Before Day 8", tests: ["CBC & Diff", "creatinine"] },
        { label: "If clinically indicated", tests: ["chest x-ray", "morning serum cortisol", "lipase", "random glucose", "free T3", "free T4", "serum ACTH", "ECG", "CA15-3", "troponin"] },
      ]
    }
  },
  {
    key: "BR-BRAVPP",
    cat: "Breast",
    bcc: true,
    name: "BRAVPP - Pembrolizumab + weekly PACLitaxel [Metastatic TNBC]",
    cycle: 21,
    notes: "First-line treatment for locally recurrent unresectable or metastatic TNBC with CPS ≥10. Chemotherapy until progression; pembrolizumab max 35 cycles or 2 years. If chemotherapy discontinued, transition to BRAVPEM or BRAVPEM6. Premedication required for PACLitaxel.",
    drugs: [
      {
        name: "PEMBROlizumab",
        dose: 2,
        unit: "mg/kg",
        basis: "weight",
        max: 200,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: false,
        note: "No dose modifications; manage toxicity by treatment delay."
      }
,
      {
        name: "PACLitaxel",
        dose: 80,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1, 8, and 15",
        reducible: true,
        note: "Reduce by 10 mg/m² for Grade 2 neuropathy; after neutropenic sepsis reduce to 65 mg/m²."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "morning serum cortisol", "creatine kinase"],
      cycle: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "creatine kinase"],
      conditional: [
        { label: "Day 8 and Day 15", tests: ["CBC & Diff"] },
        { label: "If clinically indicated", tests: ["chest x-ray", "morning serum cortisol", "lipase", "random glucose", "free T3", "free T4", "serum ACTH", "ECG", "CA15-3", "troponin"] },
      ]
    }
  },
  {
    key: "BR-BRAVPPN",
    cat: "Breast",
    bcc: true,
    name: "BRAVPPN - Pembrolizumab + PACLitaxel NAB [Metastatic TNBC]",
    cycle: 21,
    notes: "First-line treatment for locally recurrent unresectable or metastatic TNBC with CPS ≥10. Chemotherapy until progression; pembrolizumab max 35 cycles or 2 years. If chemotherapy discontinued, transition to BRAVPEM or BRAVPEM6.",
    drugs: [
      {
        name: "PEMBROlizumab",
        dose: 2,
        unit: "mg/kg",
        basis: "weight",
        max: 200,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: false,
        note: "No dose modifications; manage toxicity by treatment delay."
      }
,
      {
        name: "PACLitaxel NAB",
        dose: 260,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: null,
        levels: [220, 180]
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "GGT", "sodium", "potassium", "TSH", "morning serum cortisol", "creatine kinase"],
      cycle: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "creatine kinase"],
      conditional: [
        { label: "If clinically indicated", tests: ["chest x-ray", "morning serum cortisol", "lipase", "GGT", "random glucose", "free T3", "free T4", "serum ACTH", "ECG", "CA15-3", "troponin"] },
      ]
    }
  },
  {
    key: "BR-BRAVPTRAD",
    cat: "Breast",
    bcc: true,
    name: "BRAVPTRAD - PERTuzumab + TRASTUZumab + DOCEtaxel [HER2+ Advanced Breast]",
    cycle: 21,
    notes: "First-line treatment for HER2+ unresectable locally recurrent or metastatic breast cancer. Cycle 1: PERTuzumab 840 mg loading Day 1; TRASTUZumab 8 mg/kg loading + DOCEtaxel Day 2. Cycles 2+: PERTuzumab 420 mg + TRASTUZumab 6 mg/kg + DOCEtaxel Day 1. DOCEtaxel for 6-8 cycles then maintenance PERTuzumab + TRASTUZumab. Dexamethasone premedication required.",
    drugs: [
      {
        name: "PERTuzumab",
        dose: 420,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 (840 mg loading Cycle 1)",
        reducible: false,
        note: "Loading dose 840 mg Cycle 1; maintenance 420 mg. No dose reductions."
      }
,
      {
        name: "TRASTUZumab",
        dose: 6,
        unit: "mg/kg",
        basis: "weight",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 (8 mg/kg loading Cycle 1)",
        reducible: false,
        note: "Loading dose 8 mg/kg Cycle 1; maintenance 6 mg/kg. No dose reductions."
      }
,
      {
        name: "DOCEtaxel",
        dose: 75,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 (Cycles 1-8, up to 6-8 cycles)",
        reducible: true,
        note: "May escalate to 100 mg/m² if 75 mg/m² tolerated without significant toxicity."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "total bilirubin", "ALT"],
      cycle: ["CBC & Diff"],
      conditional: [
        { label: "Prior to Cycle 4", tests: ["total bilirubin", "ALT", "GGT", "alkaline phosphatase"] },
        { label: "Prior to first trastuzumab and every 3-4 months", tests: ["MUGA scan or echocardiogram"] },
        { label: "If clinically indicated", tests: ["total bilirubin", "total protein", "albumin", "GGT", "alkaline phosphatase", "LDH", "ALT", "urea", "creatinine", "echocardiogram or MUGA scan"] },
      ]
    }
  },
  {
    key: "BR-BRAVPTRAT",
    cat: "Breast",
    bcc: true,
    name: "BRAVPTRAT - PERTuzumab + TRASTUZumab + PACLitaxel [HER2+ Advanced Breast]",
    cycle: 21,
    notes: "First-line treatment for HER2+ unresectable locally recurrent or metastatic breast cancer. Cycle 1: PERTuzumab 840 mg loading Day 1; TRASTUZumab 8 mg/kg loading + PACLitaxel Day 2. Cycles 2+: PERTuzumab 420 mg + TRASTUZumab 6 mg/kg + PACLitaxel Day 1. PACLitaxel for 6-8 cycles then maintenance PERTuzumab + TRASTUZumab. Premedication required.",
    drugs: [
      {
        name: "PERTuzumab",
        dose: 420,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 (840 mg loading Cycle 1)",
        reducible: false,
        note: "Loading dose 840 mg Cycle 1; maintenance 420 mg. No dose reductions."
      }
,
      {
        name: "TRASTUZumab",
        dose: 6,
        unit: "mg/kg",
        basis: "weight",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 (8 mg/kg loading Cycle 1)",
        reducible: false,
        note: "Loading dose 8 mg/kg Cycle 1; maintenance 6 mg/kg. No dose reductions."
      }
,
      {
        name: "PACLitaxel",
        dose: 175,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 (Cycles 1-8, up to 6-8 cycles)",
        reducible: true,
        note: null,
        levels: [150, 135]
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "total bilirubin", "ALT"],
      cycle: ["CBC & Diff"],
      conditional: [
        { label: "Prior to Cycle 4", tests: ["total bilirubin", "ALT", "GGT", "alkaline phosphatase"] },
        { label: "Prior to first trastuzumab and every 3-4 months", tests: ["MUGA scan or echocardiogram"] },
        { label: "If clinically indicated", tests: ["total bilirubin", "albumin", "ALT", "GGT", "alkaline phosphatase", "LDH", "urea", "creatinine", "echocardiogram or MUGA scan"] },
      ]
    }
  },
  {
    key: "BR-BRAVPTRVIN",
    cat: "Breast",
    bcc: true,
    name: "BRAVPTRVIN - PERTuzumab + TRASTUZumab + VINOrelbine [HER2+ Advanced Breast, 1st-line]",
    cycle: 21,
    notes: "First-line HER2+ metastatic breast for patients ineligible for taxane. Cycle 1: PERTuzumab 840 mg loading Day 1, VINOrelbine 25 mg/m² Days 1 and 8, TRASTUZumab 8 mg/kg loading Day 2. Cycles 2-8: PERTuzumab 420 mg + TRASTUZumab 6 mg/kg + VINOrelbine 30 mg/m². VINOrelbine up to 8 cycles; PERTuzumab + TRASTUZumab continued as maintenance.",
    drugs: [
      {
        name: "PERTuzumab",
        dose: 420,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 (840 mg loading Cycle 1)",
        reducible: false,
        note: "Loading dose 840 mg Cycle 1; maintenance 420 mg. No dose reductions."
      }
,
      {
        name: "TRASTUZumab",
        dose: 6,
        unit: "mg/kg",
        basis: "weight",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 (Day 2 Cycle 1 with 8 mg/kg loading)",
        reducible: false,
        note: "Loading dose 8 mg/kg Cycle 1 Day 2; maintenance 6 mg/kg. No dose reductions."
      }
,
      {
        name: "VINOrelbine",
        dose: 30,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1 and 8",
        reducible: true,
        note: "25 mg/m² Cycle 1; 30 mg/m² from Cycle 2 (may increase to 35 mg/m² at physician discretion)."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "total bilirubin", "ALT", "alkaline phosphatase", "LDH", "GGT"],
      cycle: ["CBC & Diff"],
      conditional: [
        { label: "Prior to first TRASTUZumab and every 3-4 months", tests: ["MUGA scan or echocardiogram"] },
        { label: "If clinically indicated", tests: ["total bilirubin", "albumin", "ALT", "GGT", "alkaline phosphatase", "LDH", "urea", "creatinine", "CA 15-3", "echocardiogram or MUGA scan"] },
      ]
    }
  },
  {
    key: "BR-BRAVRBFLV",
    cat: "Breast",
    bcc: true,
    name: "BRAVRBFLV - Ribociclib + Fulvestrant [ER+/HER2- Advanced Breast]",
    cycle: 28,
    notes: "ER-positive, HER2-negative advanced or metastatic breast cancer. Ribociclib 600 mg PO daily 21 days on, 7 days off. Fulvestrant 500 mg IM Days 1 and 15 of Cycle 1, then Day 1 of each subsequent cycle. LHRH agonist added for premenopausal women/men. Discontinue if dose reduction below 200 mg required.",
    drugs: [
      {
        name: "Ribociclib",
        dose: 600,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1-21 (21 days on, 7 days off)",
        reducible: true,
        note: "Take in the morning. Discontinue if reduction below 200 mg required.",
        levels: [400, 200]
      }
,
      {
        name: "Fulvestrant",
        dose: 500,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "IM",
        days: "Days 1 and 15 (Cycle 1); Day 1 (Cycles 2+)",
        reducible: false,
        note: "Administer as two 250 mg injections. No dose modifications."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "albumin", "ALT", "alkaline phosphatase", "total bilirubin", "sodium", "potassium", "calcium", "magnesium", "phosphate", "GGT", "LDH", "ECG"],
      cycle: ["CBC & Diff", "creatinine", "ALT", "alkaline phosphatase", "total bilirubin"],
      conditional: [
        { label: "Cycle 1 Day 15", tests: ["CBC & Diff", "creatinine", "albumin", "ALT", "alkaline phosphatase", "total bilirubin", "sodium", "potassium", "calcium", "magnesium", "phosphate", "ECG"] },
        { label: "Cycle 2 Day 1", tests: ["CBC & Diff", "creatinine", "albumin", "ALT", "alkaline phosphatase", "total bilirubin", "sodium", "potassium", "calcium", "magnesium", "phosphate", "ECG"] },
        { label: "If clinically indicated", tests: ["albumin", "GGT", "LDH", "sodium", "potassium", "calcium", "magnesium", "phosphate", "CA15-3", "ECG", "serum cholesterol", "triglycerides"] },
      ]
    }
  },
  {
    key: "BR-BRAVRIBAI",
    cat: "Breast",
    bcc: true,
    name: "BRAVRIBAI - Ribociclib + Aromatase Inhibitor [ER+/HER2- Advanced Breast]",
    cycle: 28,
    notes: "ER-positive, HER2-negative advanced or metastatic breast cancer, no prior endocrine treatment for advanced disease. Ribociclib 600 mg PO daily 21 days on, 7 days off, plus letrozole 2.5 mg or anastrozole 1 mg PO daily. LHRH agonist added for premenopausal women/men. Discontinue if dose reduction below 200 mg required.",
    drugs: [
      {
        name: "Ribociclib",
        dose: 600,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1-21 (21 days on, 7 days off)",
        reducible: true,
        note: "Take in the morning. Discontinue if reduction below 200 mg required.",
        levels: [400, 200]
      }
,
      {
        name: "Letrozole",
        dose: 2.5,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Daily continuously",
        reducible: false,
        note: "Or anastrozole 1 mg PO daily."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "albumin", "ALT", "alkaline phosphatase", "total bilirubin", "sodium", "potassium", "calcium", "magnesium", "phosphate", "GGT", "LDH", "ECG"],
      cycle: ["CBC & Diff", "creatinine", "ALT", "alkaline phosphatase", "total bilirubin"],
      conditional: [
        { label: "Cycle 1 Day 15", tests: ["CBC & Diff", "creatinine", "albumin", "ALT", "alkaline phosphatase", "total bilirubin", "sodium", "potassium", "calcium", "magnesium", "phosphate", "ECG"] },
        { label: "Cycle 2 Day 1", tests: ["CBC & Diff", "creatinine", "albumin", "ALT", "alkaline phosphatase", "total bilirubin", "sodium", "potassium", "calcium", "magnesium", "phosphate", "ECG"] },
        { label: "If clinically indicated", tests: ["albumin", "ALT", "alkaline phosphatase", "total bilirubin", "GGT", "LDH", "sodium", "potassium", "calcium", "magnesium", "phosphate", "CA15-3", "ECG", "serum cholesterol", "triglycerides"] },
      ]
    }
  },
  {
    key: "BR-BRAVSG",
    cat: "Breast",
    bcc: true,
    name: "BRAVSG - Sacituzumab Govitecan [Metastatic Breast]",
    cycle: 21,
    notes: "For locally advanced unresectable or metastatic breast cancer (ER+/HER2- after hormone therapy, CDK4/6 inhibitor, and taxane; or TNBC after 2+ lines). Sacituzumab govitecan 10 mg/kg IV on Days 1 and 8. First infusion over 3 hours; subsequent over 1 hour if no reaction. Premedicate with diphenhydrAMINE, famotidine, and acetaminophen.",
    drugs: [
      {
        name: "Sacituzumab govitecan",
        dose: 10,
        unit: "mg/kg",
        basis: "weight",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1 and 8",
        reducible: true,
        note: "First dose over 3 hours; subsequent doses over 1 hour if no reaction."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "total bilirubin", "ALT", "alkaline phosphatase", "LDH", "creatinine", "albumin", "sodium", "potassium", "calcium", "magnesium", "phosphorus", "ECG"],
      cycle: ["CBC & Diff"],
      conditional: [
        { label: "Before Day 8", tests: ["CBC & Diff"] },
        { label: "If clinically indicated", tests: ["creatinine", "total bilirubin", "ALT", "alkaline phosphatase", "albumin", "total protein", "sodium", "potassium", "calcium", "magnesium", "phosphorus", "LDH", "CA 15-3", "ECG"] },
      ]
    }
  },
  {
    key: "BR-BRAVTAX",
    cat: "Breast",
    bcc: true,
    name: "BRAVTAX - PACLitaxel [Metastatic Breast]",
    cycle: 21,
    notes: "First to third line treatment of metastatic breast cancer. Repeat every 21 days. Premedicate with dexamethasone 20 mg IV, diphenhydrAMINE 50 mg IV, and famotidine 20 mg IV. Discontinue if no response after 2 cycles.",
    drugs: [
      {
        name: "PACLitaxel",
        dose: 175,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "Non-DEHP bag and tubing with 0.2 micron in-line filter. IV over 3 hours.",
        levels: [135]
      }
    ],
    labs: {
      baseline: ["CBC & diff", "platelets", "bilirubin", "ALT"],
      cycle: ["CBC & diff", "platelets"],
      conditional: [
        { label: "If clinically indicated", tests: ["bilirubin", "ALT"] },
      ]
    }
  },
  {
    key: "BR-BRAVTCAP",
    cat: "Breast",
    bcc: true,
    name: "BRAVTCAP - TRASTUZumab + Capecitabine [HER2+ Advanced Breast]",
    cycle: 21,
    notes: "HER2-positive advanced breast cancer previously treated with one prior trastuzumab-based protocol. TRASTUZumab 6 mg/kg IV Day 1; capecitabine 1000 mg/m² BID Days 1-14. Starting dose 1000 mg/m² BID recommended. DPYD testing required.",
    drugs: [
      {
        name: "TRASTUZumab",
        dose: 6,
        unit: "mg/kg",
        basis: "weight",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: false,
        note: "IV in 250 mL NS over 30 minutes. Dose reductions not recommended."
      }
,
      {
        name: "Capecitabine",
        dose: 1000,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Days 1-14 (twice daily)",
        reducible: true,
        note: "Starting dose 1000 mg/m² BID; may increase to 1250 mg/m² BID. DPYD testing required."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "total bilirubin", "ALT", "alkaline phosphatase", "DPYD test"],
      cycle: ["CBC & Diff", "creatinine"],
      conditional: [
        { label: "If clinically indicated", tests: ["cardiac function (ECG, echocardiogram or MUGA scan)", "total protein", "albumin", "total bilirubin", "GGT", "alkaline phosphatase", "ALT", "LDH", "urea", "CA15-3"] },
      ]
    }
  },
  {
    key: "BR-BRAVTW",
    cat: "Breast",
    bcc: true,
    name: "BRAVTW - Weekly PACLitaxel [Metastatic Breast]",
    cycle: 28,
    notes: "First to third line treatment of metastatic breast cancer. For patients unable to tolerate BRAVTAX (limited marrow reserve, frail/elderly). PACLitaxel 90 mg/m² IV weekly for 3 weeks then 1 week rest. Premedicate with dexamethasone 10 mg IV, diphenhydrAMINE 25 mg IV, and famotidine 20 mg IV.",
    drugs: [
      {
        name: "PACLitaxel",
        dose: 90,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1, 8, 15 (weekly x3, then 1 week rest)",
        reducible: true,
        note: "Non-DEHP bag and tubing with 0.2 micron in-line filter.",
        levels: [65]
      }
    ],
    labs: {
      baseline: ["CBC & diff", "platelets", "bilirubin", "ALT"],
      cycle: ["CBC & diff", "platelets"],
      conditional: [
        { label: "If clinically indicated", tests: ["bilirubin", "ALT"] },
      ]
    }
  },
  {
    key: "BR-BRLACPNAC",
    cat: "Breast",
    bcc: true,
    name: "BRLACPNAC - CARBOplatin + PACLitaxel NAB → DOXOrubicin + CYCLOphosphamide [TNBC neoadjuvant, taxane-intolerant]",
    cycle: 21,
    notes: "Alternative neoadjuvant for TNBC with PACLitaxel hypersensitivity (replaces BRLACTWAC). Phase 1: PACLitaxel NAB + CARBOplatin q21d. Phase 2: DOXOrubicin + CYCLOphosphamide q21d x 4 cycles (no mandatory G-CSF). GFR capped at 125 mL/min.",
    drugs: [
      {
        name: "PACLitaxel NAB",
        dose: 260,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 (Phase 1 cycles)",
        reducible: true,
        note: "IV over 30 minutes.",
        levels: [220, 180]
      }
,
      {
        name: "CARBOplatin",
        dose: 6,
        unit: "AUC",
        basis: "auc",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 (Phase 1 cycles)",
        reducible: true,
        note: "GFR capped at 125 mL/min. May reduce to AUC 5 then AUC 4 for repeated toxicity."
      }
,
      {
        name: "DOXOrubicin",
        dose: 60,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 (Phase 2 cycles, every 21 days)",
        reducible: true,
        note: "IV push. Phase 2 q21d x 4 cycles."
      }
,
      {
        name: "CYCLOphosphamide",
        dose: 600,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 (Phase 2 cycles, every 21 days)",
        reducible: true,
        note: "IV over 20-60 minutes. Phase 2 q21d x 4 cycles."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "total bilirubin", "ALT", "GGT", "alkaline phosphatase", "creatinine"],
      cycle: ["CBC & Diff", "creatinine"],
      conditional: [
        { label: "Before each CARBOplatin treatment", tests: ["creatinine"] },
        { label: "If clinically indicated", tests: ["total bilirubin", "ALT", "GGT", "alkaline phosphatase", "urea", "MUGA scan or echocardiogram"] },
      ]
    }
  },
  {
    key: "BR-BRLACPNACG",
    cat: "Breast",
    bcc: true,
    name: "BRLACPNACG - CARBOplatin + PACLitaxel NAB → DOXOrubicin + CYCLOphosphamide Dose-Dense [TNBC neoadjuvant, taxane-intolerant]",
    cycle: 21,
    notes: "Alternative neoadjuvant for TNBC with PACLitaxel hypersensitivity (replaces BRLACTWACG). Phase 1: PACLitaxel NAB + CARBOplatin q21d. Phase 2: DOXOrubicin + CYCLOphosphamide every 14 days x 4 cycles with mandatory filgrastim Days 3-10. GFR capped at 125 mL/min.",
    drugs: [
      {
        name: "PACLitaxel NAB",
        dose: 260,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 (Phase 1 cycles)",
        reducible: true,
        note: "IV over 30 minutes.",
        levels: [220, 180]
      }
,
      {
        name: "CARBOplatin",
        dose: 6,
        unit: "AUC",
        basis: "auc",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 (Phase 1 cycles)",
        reducible: true,
        note: "GFR capped at 125 mL/min. May reduce to AUC 5 then AUC 4 for repeated toxicity."
      }
,
      {
        name: "DOXOrubicin",
        dose: 60,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 (Phase 2 cycles, every 14 days)",
        reducible: true,
        note: "IV push. Phase 2 q14d x 4 cycles."
      }
,
      {
        name: "CYCLOphosphamide",
        dose: 600,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 (Phase 2 cycles, every 14 days)",
        reducible: true,
        note: "IV over 20-60 minutes. Phase 2 q14d x 4 cycles."
      }
,
      {
        name: "Filgrastim (G-CSF)",
        dose: 5,
        unit: "mcg/kg",
        basis: "weight",
        max: null,
        weightCap: null,
        route: "SC",
        days: "Days 3-10 (Phase 2 cycles)",
        reducible: false,
        note: "Mandatory with Phase 2 AC cycles."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "total bilirubin", "ALT", "GGT", "LDH", "alkaline phosphatase", "creatinine"],
      cycle: ["CBC & Diff", "creatinine"],
      conditional: [
        { label: "Before each CARBOplatin treatment", tests: ["creatinine"] },
        { label: "If clinically indicated", tests: ["total bilirubin", "ALT", "GGT", "alkaline phosphatase", "urea", "MUGA scan or echocardiogram"] },
      ]
    }
  },
  {
    key: "BR-BRLATWAC",
    cat: "Breast",
    bcc: true,
    name: "BRLATWAC - Weekly PACLitaxel → DOXOrubicin + CYCLOphosphamide [Locally Advanced Breast neoadjuvant]",
    cycle: 21,
    notes: "Neoadjuvant therapy for locally advanced and inflammatory breast cancer. Phase 1: PACLitaxel 80 mg/m² weekly (Days 1, 8, 15) x 4 cycles (12 weeks). Phase 2: DOXOrubicin + CYCLOphosphamide q21d x 4 cycles. G-CSF not mandatory but consider for high-risk patients.",
    drugs: [
      {
        name: "PACLitaxel",
        dose: 80,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1, 8, 15 (weekly x3, Cycles 1-4)",
        reducible: true,
        note: "Non-DEHP bag and tubing with 0.2 micron in-line filter. IV over 1 hour.",
        levels: [65]
      }
,
      {
        name: "DOXOrubicin",
        dose: 60,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 (Cycles 5-8, every 21 days)",
        reducible: true,
        note: "IV push. Phase 2 begins week 13."
      }
,
      {
        name: "CYCLOphosphamide",
        dose: 600,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 (Cycles 5-8, every 21 days)",
        reducible: true,
        note: "IV over 20 min to 1 hour."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "total bilirubin", "ALT", "creatinine"],
      cycle: ["CBC & Diff"],
      conditional: [
        { label: "If clinically indicated", tests: ["total bilirubin", "ALT", "creatinine"] },
      ]
    }
  },
  {
    key: "BR-BRPCTAC",
    cat: "Breast",
    bcc: true,
    name: "BRPCTAC - Pembrolizumab + CARBOplatin + weekly PACLitaxel → Pembrolizumab + DOXOrubicin + CYCLOphosphamide [Neoadjuvant TNBC]",
    cycle: 21,
    notes: "Two-phase neoadjuvant regimen for triple negative breast cancer. Cycles 1-4: pembrolizumab + PACLitaxel weekly + CARBOplatin AUC 5 Day 1. Cycles 5-8: pembrolizumab + DOXOrubicin + CYCLOphosphamide. Post-op single-agent pembrolizumab continues per BRAJPEM (total 17 doses). CARBOplatin GFR capped at 125 mL/min.",
    drugs: [
      {
        name: "PEMBROlizumab",
        dose: 2,
        unit: "mg/kg",
        basis: "weight",
        max: 200,
        weightCap: null,
        route: "IV",
        days: "Day 1 (Cycles 1-8)",
        reducible: false,
        note: "No dose modifications; managed by treatment delay. Cycles 1-8."
      }
,
      {
        name: "PACLitaxel",
        dose: 80,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1, 8, 15 (Cycles 1-4)",
        reducible: true,
        note: "Cycles 1-4 only. Premedication required."
      }
,
      {
        name: "CARBOplatin",
        dose: 5,
        unit: "AUC",
        basis: "auc",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 (Cycles 1-4)",
        reducible: true,
        note: "Cycles 1-4 only. May reduce to AUC 4 then 3 if repeated delays."
      }
,
      {
        name: "DOXOrubicin",
        dose: 60,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 (Cycles 5-8)",
        reducible: true,
        note: "Cycles 5-8 only."
      }
,
      {
        name: "CYCLOphosphamide",
        dose: 600,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 (Cycles 5-8)",
        reducible: true,
        note: "Cycles 5-8 only."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "morning serum cortisol", "creatine kinase"],
      cycle: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "creatine kinase"],
      conditional: [
        { label: "Days 8 and 15 (Cycles 1-4)", tests: ["CBC & Diff"] },
        { label: "If clinically indicated", tests: ["chest x-ray", "morning serum cortisol", "lipase", "GGT", "free T3", "free T4", "troponin", "ECG"] },
      ]
    }
  },
  {
    key: "BR-BRPCWTAC",
    cat: "Breast",
    bcc: true,
    name: "BRPCWTAC - Pembrolizumab + weekly CARBOplatin + weekly PACLitaxel → Pembrolizumab + DOXOrubicin + CYCLOphosphamide [Neoadjuvant TNBC]",
    cycle: 21,
    notes: "Two-phase neoadjuvant regimen for triple negative breast cancer. Cycles 1-4: pembrolizumab Day 1 + PACLitaxel weekly + CARBOplatin AUC 1.5 weekly (Days 1, 8, 15). Cycles 5-8: pembrolizumab + DOXOrubicin + CYCLOphosphamide. Post-op single-agent pembrolizumab continues per BRAJPEM (total 17 doses).",
    drugs: [
      {
        name: "PEMBROlizumab",
        dose: 2,
        unit: "mg/kg",
        basis: "weight",
        max: 200,
        weightCap: null,
        route: "IV",
        days: "Day 1 (Cycles 1-8)",
        reducible: false,
        note: "No dose modifications; managed by treatment delay. Cycles 1-8."
      }
,
      {
        name: "PACLitaxel",
        dose: 80,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1, 8, 15 (Cycles 1-4)",
        reducible: true,
        note: "Cycles 1-4 only. Premedication required."
      }
,
      {
        name: "CARBOplatin",
        dose: 1.5,
        unit: "AUC",
        basis: "auc",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Days 1, 8, 15 (Cycles 1-4)",
        reducible: true,
        note: "Cycles 1-4 only. Weekly CARBOplatin AUC 1.5 each day."
      }
,
      {
        name: "DOXOrubicin",
        dose: 60,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 (Cycles 5-8)",
        reducible: true,
        note: "Cycles 5-8 only."
      }
,
      {
        name: "CYCLOphosphamide",
        dose: 600,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 (Cycles 5-8)",
        reducible: true,
        note: "Cycles 5-8 only."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "sodium", "potassium", "TSH", "morning serum cortisol", "creatine kinase", "LDH"],
      cycle: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "creatine kinase"],
      conditional: [
        { label: "Days 8 and 15 (Cycles 1-4)", tests: ["CBC & Diff", "creatinine"] },
        { label: "If clinically indicated", tests: ["chest x-ray", "morning serum cortisol", "lipase", "GGT", "free T3", "free T4", "troponin", "ECG"] },
      ]
    }
  },
  {
    key: "BR-UBRAJABEAI",
    cat: "Breast",
    bcc: true,
    name: "UBRAJABEAI - Abemaciclib + Aromatase Inhibitor [Adjuvant HR+ HER2- Early Breast]",
    cycle: 28,
    notes: "Adjuvant abemaciclib + aromatase inhibitor for HR+/HER2- high-risk early breast cancer. Maximum 26 cycles (2 years) of abemaciclib. Endocrine therapy continues for minimum 5 years total. LHRH agonist added for premenopausal women. CAP approval required.",
    drugs: [
      {
        name: "Abemaciclib",
        dose: 150,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Twice daily, continuously",
        reducible: true,
        note: "Maximum 26 cycles (2 years).",
        levels: [100, 50]
      }
,
      {
        name: "Letrozole",
        dose: 2.5,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Daily (or anastrozole 1 mg or exemestane 25 mg daily)",
        reducible: false,
        note: "Aromatase inhibitor per separate protocol. Continues beyond abemaciclib for minimum 5 years total endocrine therapy."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "total bilirubin", "ALT", "alkaline phosphatase", "GGT", "urea"],
      cycle: ["CBC & Diff", "creatinine", "total bilirubin", "ALT", "urea"],
      conditional: [
        { label: "Day 15, Cycles 1 and 2", tests: ["CBC & Diff", "total bilirubin", "ALT"] },
        { label: "If clinically indicated", tests: ["sodium", "potassium", "calcium", "albumin", "magnesium", "alkaline phosphatase", "GGT", "serum cholesterol", "triglycerides"] },
      ]
    }
  },
  {
    key: "BR-UBRAJKAD",
    cat: "Breast",
    bcc: true,
    name: "UBRAJKAD - Trastuzumab Emtansine / T-DM1 (KADCYLA) [Adjuvant HER2+ Early Breast]",
    cycle: 21,
    notes: "Adjuvant T-DM1 for HER2+ early breast cancer with residual invasive disease after neoadjuvant treatment. Up to 14 cycles. Should start within 12 weeks of surgery. Cardiac monitoring every 3-4 months. CAP approval required.",
    drugs: [
      {
        name: "Trastuzumab emtansine (T-DM1)",
        dose: 3.6,
        unit: "mg/kg",
        basis: "weight",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1",
        reducible: true,
        note: "Up to 14 cycles maximum. First infusion over 90 min; subsequent over 30 min if tolerated.",
        levels: [3.0, 2.4]
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "total bilirubin", "ALT", "alkaline phosphatase", "LDH", "GGT", "creatinine", "MUGA scan or echocardiogram"],
      cycle: ["CBC & Diff", "total bilirubin", "ALT", "alkaline phosphatase", "LDH", "GGT"],
      conditional: [
        { label: "Every 3-4 months during treatment", tests: ["MUGA scan or echocardiogram"] },
        { label: "If clinically indicated", tests: ["total protein", "albumin", "sodium", "potassium", "creatinine", "ECG"] },
      ]
    }
  },
  {
    key: "BR-UBRAJOLA",
    cat: "Breast",
    bcc: true,
    name: "UBRAJOLA - Olaparib [Adjuvant BRCA-Mutated HER2- Early Breast]",
    cycle: 28,
    notes: "Adjuvant olaparib for high-risk early stage HER2-negative breast cancer with germline BRCA1/2 mutation. Up to 1 year (~13 cycles). Initiate within 12 weeks of last treatment. Reduce to 200 mg BID if CrCl 31-50 mL/min. CAP approval required.",
    drugs: [
      {
        name: "Olaparib",
        dose: 300,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Twice daily, continuously",
        reducible: true,
        note: "Up to 1 year. Reduce to 200 mg BID for CrCl 31-50 mL/min.",
        levels: [250, 200]
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "platelets", "creatinine", "sodium", "potassium", "ALT", "total bilirubin", "alkaline phosphatase"],
      cycle: ["CBC & Diff", "platelets"],
      conditional: [
        { label: "If clinically indicated", tests: ["ECG", "creatinine", "sodium", "potassium", "ALT", "total bilirubin", "alkaline phosphatase", "GGT", "LDH"] },
      ]
    }
  },

  {
    key: "BR-UBRAVCAFLV",
    cat: "Breast",
    bcc: true,
    name: "UBRAVCAFLV - Capivasertib + Fulvestrant ± LHRH Agonist [Advanced HR+ HER2- PIK3CA/AKT1/PTEN-altered]",
    cycle: 28,
    notes: "HR+/HER2- locally advanced or metastatic breast cancer with PIK3CA/AKT1/PTEN alteration, progressed on ≥1 hormone therapy (or within 12 months of adjuvant HT). Post-menopausal women or men; pre-menopausal women require LHRH agonist. Compassionate Access Program approval required. Capivasertib 4 days on / 3 days off weekly schedule. Key risks: hyperglycemia (monitor fasting glucose weekly cycles 1–2, HbA1C every 12 weeks), diarrhea, cutaneous reactions. CYP3A4 substrate — avoid strong inducers.",
    drugs: [
      {
        name: "Capivasertib",
        dose: 400,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Twice daily, Days 1–4 of each week (4 days on / 3 days off), every 28-day cycle",
        reducible: true,
        note: "AKT inhibitor. 4 on / 3 off weekly schedule. Monitor fasting glucose weekly (cycles 1–2). CYP3A4 substrate.",
        levels: [320, 200]
      },
      {
        name: "Fulvestrant",
        dose: 500,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "IM",
        days: "Day 1 and Day 15 (Cycle 1); Day 1 only (Cycles 2+). Administer as two 250 mg injections.",
        reducible: false,
        note: "Continue fulvestrant even if capivasertib is held/reduced."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "ALT", "alkaline phosphatase", "total bilirubin", "GGT", "fasting glucose", "HbA1C"],
      cycle: ["CBC & Diff", "fasting glucose"],
      conditional: [
        { label: "Baseline if indicated", tests: ["CA15-3", "ECG", "LDH"] },
        { label: "Cycles 1 and 2 (weekly)", tests: ["fasting glucose"] },
        { label: "Every 12 weeks (prior to cycles 4, 7, 10, 13, 16, etc.)", tests: ["HbA1C"] },
        { label: "If clinically indicated", tests: ["HbA1C", "fasting glucose", "creatinine", "sodium", "potassium", "calcium", "magnesium", "lactate", "serum ketones", "albumin", "ALT", "alkaline phosphatase", "total bilirubin", "GGT", "LDH", "CA15-3", "ECG", "triglycerides"] }
      ]
    }
  },
  {
    key: "BR-UBRAVTTCAP",
    cat: "Breast",
    bcc: true,
    name: "UBRAVTTCAP - Trastuzumab + Tucatinib + Capecitabine [HER2+ Metastatic Breast]",
    cycle: 21,
    notes: "HER2+ unresectable locally advanced or metastatic breast cancer; prior trastuzumab, pertuzumab, and ADC (T-DM1 or T-DXd). Eligible with or without brain metastases. Trastuzumab loading dose (8 mg/kg) in Cycle 1 if ≥6 weeks since last trastuzumab (or ≥3 weeks since T-DM1/T-DXd); maintenance 6 mg/kg. Tucatinib CYP3A4 strong inhibitor — check drug interactions. DPYD testing required before capecitabine. Key risks: diarrhea, hand-foot syndrome, hepatotoxicity. Capecitabine reduce to 75% if CrCl 30–50 mL/min; discontinue if <30. Compassionate Access Program approval required.",
    drugs: [
      {
        name: "Trastuzumab",
        dose: 6,
        unit: "mg/kg",
        basis: "weight",
        max: null,
        weightCap: null,
        route: "IV",
        days: "Day 1 (loading dose 8 mg/kg Cycle 1 only if indicated; 6 mg/kg maintenance)",
        reducible: false,
        note: "Loading dose 8 mg/kg Cycle 1 if prior trastuzumab gap ≥6 weeks (or ≥3 weeks post T-DM1/T-DXd). Maintenance 6 mg/kg. Dose band per appendix table."
      },
      {
        name: "Tucatinib",
        dose: 300,
        unit: "mg",
        basis: "flat",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Twice daily, continuously",
        reducible: true,
        note: "HER2-targeted TKI. Strong CYP3A4 inhibitor. Reduces dose for Grade ≥3 toxicity. Creatinine elevation is pharmacologic (OCT2/MATE1 inhibition), not true renal injury.",
        levels: [250, 200, 150]
      },
      {
        name: "Capecitabine",
        dose: 1000,
        unit: "mg/m²",
        basis: "bsa",
        max: null,
        weightCap: null,
        route: "PO",
        days: "Twice daily, Days 1–14",
        reducible: true,
        note: "DPYD testing required. Reduce to 75% if CrCl 30–50 mL/min; discontinue if <30. Dose band per appendix table."
      }
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "total bilirubin", "ALT", "alkaline phosphatase", "DPYD test"],
      cycle: ["CBC & Diff", "creatinine", "total bilirubin", "ALT"],
      conditional: [
        { label: "Baseline if clinically indicated", tests: ["ECG", "echocardiogram or MUGA scan"] },
        { label: "If on warfarin: weekly until stable, then prior to each cycle", tests: ["INR"] },
        { label: "If clinically indicated", tests: ["ECG", "echocardiogram", "MUGA scan", "total protein", "albumin", "GGT", "alkaline phosphatase", "LDH", "urea", "CA15-3"] }
      ]
    }
  },

  // =========================================================
  // LUNG (BC Cancer LU protocols)
  // =========================================================

  {
    key:"LU-LUAJNP", cat:"Lung", bcc:true,
    name:"LUAJNP - CISplatin + Vinorelbine Adjuvant NSCLC",
    cycle:21,
    notes:"Adjuvant CISplatin and Vinorelbine following resection of NSCLC. For fully resected stage II, IIIA, or high-risk stage IB. Start within 60 days of surgery. x4 cycles. CARBOplatin cannot be substituted; if contraindicated use LUAJPC.",
    drugs:[
    {
      name:"CISplatin",
      dose:75,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Day 1",
      reducible:true,
      note:"Pre-hydration with NS 1000 mL over 60 min. IV in 500 mL NS over 60 min."
    },
    {
      name:"Vinorelbine",
      dose:30,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Days 1 and 8",
      reducible:true,
      note:"IV in 25\u201350 mL NS over 6 min; flush with 75\u2013125 mL NS after."
    }
    ],
    labs:{
      baseline:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH"],
      cycle:["CBC & Diff", "creatinine"],
      conditional:[
        { label:"Before Day 8", tests:["CBC & Diff"] },
        { label:"If clinically indicated", tests:["total bilirubin"] }
      ]
    }
  },

  {
    key:"LU-LUAJPC", cat:"Lung", bcc:true,
    name:"LUAJPC - CARBOplatin + PACLitaxel Adjuvant NSCLC",
    cycle:21,
    notes:"Adjuvant CARBOplatin and PACLitaxel following resection of stage I, II and IIIA NSCLC. For patients not eligible for LUAJNP. ECOG 0\u20131. x4 cycles.",
    drugs:[
    {
      name:"PACLitaxel",
      dose:200,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Day 1",
      reducible:true,
      note:"Give PACLitaxel first. IV in 250\u2013500 mL NS over 3 hours. Non-DEHP bag and tubing with 0.2 micron in-line filter.",
      levels:[150]
    },
    {
      name:"CARBOplatin",
      dose:6,
      unit:"AUC",
      basis:"auc",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Day 1",
      reducible:true,
      note:"IV in 100\u2013250 mL NS over 30 minutes. GFR capped at 125 mL/min."
    }
    ],
    labs:{
      baseline:["CBC & differential", "platelets", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH"],
      cycle:["CBC & differential", "platelets", "creatinine"],
      conditional:[
        { label:"If clinically indicated", tests:["bilirubin"] }
      ]
    }
  },

  {
    key:"LU-LUAJPP", cat:"Lung", bcc:true,
    name:"LUAJPP - CISplatin + Pemetrexed Adjuvant NSCLC",
    cycle:21,
    notes:"Adjuvant CISplatin and Pemetrexed following resection of NSCLC. For fully resected stage II, IIIA, or high-risk stage IB non-squamous NSCLC. ECOG 0\u20131. x4 cycles. Vitamin supplementation (folic acid + B12) mandatory.",
    drugs:[
    {
      name:"Pemetrexed",
      dose:500,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Day 1",
      reducible:true,
      note:"IV in 100 mL NS over 10 minutes. Folic acid and vitamin B12 supplementation mandatory."
    },
    {
      name:"CISplatin",
      dose:75,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Day 1",
      reducible:true,
      note:"IV in 500 mL NS over 1 hour. Pre- and post-hydration required."
    }
    ],
    labs:{
      baseline:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH"],
      cycle:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH"]
    }
  },

  {
    key:"LU-LUAVALE", cat:"Lung", bcc:true,
    name:"LUAVALE - Alectinib [ALK+ Advanced NSCLC]",
    cycle:null,
    notes:"ALK-positive advanced NSCLC (IHC 3+, FISH, or NGS positive). First-line monotherapy or second-line after crizotinib. Alectinib 600 mg PO BID continuous. Starting dose 450 mg BID for severe hepatic impairment.",
    drugs:[
    {
      name:"Alectinib",
      dose:600,
      unit:"mg",
      basis:"flat",
      max:null,
      weightCap:null,
      route:"PO",
      days:"Twice daily (continuous)",
      reducible:true,
      note:"Starting dose 450 mg BID for severe hepatic impairment.",
      levels:[450, 300]
    }
    ],
    labs:{
      baseline:["CBC & Diff", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "creatine kinase (CK)", "ECG", "blood pressure"],
      cycle:["CBC & Diff", "alkaline phosphatase", "ALT", "total bilirubin", "LDH"],
      conditional:[
        { label:"Every 2 weeks for first month", tests:["creatine kinase (CK)"] },
        { label:"If clinically indicated", tests:["calcium", "potassium", "ECG", "creatinine", "creatine kinase (CK)", "chest x-ray"] }
      ]
    }
  },

  {
    key:"LU-LUAVDOC", cat:"Lung", bcc:true,
    name:"LUAVDOC - DOCEtaxel 2nd/Later-Line Advanced NSCLC",
    cycle:21,
    notes:"Second or later-line advanced NSCLC after prior platinum-based chemotherapy. ECOG 0\u20132. Repeat q21d until progression. Dexamethasone 8 mg PO BID x3 days starting day prior.",
    drugs:[
    {
      name:"DOCEtaxel",
      dose:75,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Day 1",
      reducible:true,
      note:"IV in 250\u2013500 mL NS or D5W over 1 hour. Non-DEHP equipment.",
      levels:[56]
    }
    ],
    labs:{
      baseline:["CBC & differential", "platelets", "alkaline phosphatase", "ALT", "total bilirubin", "LDH"],
      cycle:["CBC & differential", "platelets"],
      conditional:[
        { label:"Before Cycle 4 and if clinically indicated", tests:["alkaline phosphatase", "ALT", "total bilirubin", "LDH"] }
      ]
    }
  },

  {
    key:"LU-LUAVNIV4", cat:"Lung", bcc:true,
    name:"LUAVNIV4 - Nivolumab 4-Weekly Advanced NSCLC",
    cycle:28,
    notes:"Second or subsequent-line advanced NSCLC (any histology) after prior platinum-based chemotherapy. Nivolumab 6 mg/kg (max 480 mg) q4w. No dose reductions; toxicity managed by delay per SCIMMUNE. Interchangeable with LUAVNIV without CAP approval.",
    drugs:[
    {
      name:"Nivolumab",
      dose:6,
      unit:"mg/kg",
      basis:"weight",
      max:480,
      weightCap:null,
      route:"IV",
      days:"Day 1",
      reducible:false,
      note:"IV in 50\u2013100 mL NS over 30 min with 0.2 micron in-line filter."
    }
    ],
    labs:{
      baseline:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "morning serum cortisol", "chest x-ray"],
      cycle:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH"],
      conditional:[
        { label:"If clinically indicated", tests:["chest x-ray", "morning serum cortisol", "lipase", "random glucose", "free T3", "free T4", "serum ACTH levels", "ECG"] }
      ]
    }
  },

  {
    key:"LU-LUAVNIV", cat:"Lung", bcc:true,
    name:"LUAVNIV - Nivolumab 2-Weekly Advanced NSCLC",
    cycle:14,
    notes:"Second or subsequent-line advanced NSCLC (any histology) after prior platinum-based chemotherapy. Nivolumab 3 mg/kg (max 240 mg) q2w. No dose reductions; toxicity managed by delay per SCIMMUNE. Interchangeable with LUAVNIV4 without CAP approval.",
    drugs:[
    {
      name:"Nivolumab",
      dose:3,
      unit:"mg/kg",
      basis:"weight",
      max:240,
      weightCap:null,
      route:"IV",
      days:"Day 1",
      reducible:false,
      note:"IV in 50\u2013100 mL NS over 30 min with 0.2 micron in-line filter."
    }
    ],
    labs:{
      baseline:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "morning serum cortisol", "chest x-ray"],
      cycle:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH"],
      conditional:[
        { label:"If clinically indicated", tests:["chest x-ray", "morning serum cortisol", "lipase", "random glucose", "free T3", "free T4", "serum ACTH levels", "ECG"] }
      ]
    }
  },

  {
    key:"LU-LUAVNP", cat:"Lung", bcc:true,
    name:"LUAVNP - CISplatin + Vinorelbine Advanced NSCLC",
    cycle:21,
    notes:"First-line advanced NSCLC (stage IIIA/IIIB/IV). May be 2nd/3rd-line after immunotherapy or targeted agents. x6 cycles. CARBOplatin AUC 5 may substitute for CISplatin (with vinorelbine reduced to 25 mg/m\u00b2).",
    drugs:[
    {
      name:"CISplatin",
      dose:30,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Days 1 and 8",
      reducible:true,
      note:"IV in 100\u2013250 mL NS over 30 minutes."
    },
    {
      name:"Vinorelbine",
      dose:30,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Days 1 and 8",
      reducible:true,
      note:"IV in 25\u201350 mL NS over 6 min; flush after. If using CARBOplatin substitution, reduce to 25 mg/m\u00b2."
    }
    ],
    labs:{
      baseline:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH"],
      cycle:["CBC & Diff", "creatinine"],
      conditional:[
        { label:"If clinically indicated", tests:["total bilirubin"] }
      ]
    }
  },

  {
    key:"LU-LUAVOSIF", cat:"Lung", bcc:true,
    name:"LUAVOSIF - Osimertinib 1st-Line EGFR+ Advanced NSCLC",
    cycle:null,
    notes:"First-line osimertinib for EGFR mutation-positive (exon 19 deletion or L858R) advanced NSCLC. ECOG 0\u20132. Continuous daily dosing. T790M mutation: use LUAVOSI. May start while waiting for LUAVPPOSI (max 30 days).",
    drugs:[
    {
      name:"Osimertinib",
      dose:80,
      unit:"mg",
      basis:"flat",
      max:null,
      weightCap:null,
      route:"PO",
      days:"Once daily (continuous)",
      reducible:true,
      note:"Dose level -1: 40 mg once daily.",
      levels:[40]
    }
    ],
    labs:{
      baseline:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "calcium", "potassium", "magnesium", "ECG"],
      cycle:["alkaline phosphatase", "ALT", "total bilirubin", "LDH", "potassium", "calcium", "magnesium"],
      conditional:[
        { label:"If clinically indicated", tests:["CBC & Diff", "creatinine", "ECG", "MUGA scan or echocardiogram", "chest x-ray"] }
      ]
    }
  },

  {
    key:"LU-LUAVPC", cat:"Lung", bcc:true,
    name:"LUAVPC - CARBOplatin + PACLitaxel 1st-Line Advanced NSCLC",
    cycle:21,
    notes:"First-line CARBOplatin and PACLitaxel for advanced NSCLC (stage IIIB/IV). May be 2nd/3rd-line after immunotherapy or targeted agents. ECOG 0\u20132. x4\u20136 cycles.",
    drugs:[
    {
      name:"PACLitaxel",
      dose:200,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Day 1",
      reducible:true,
      note:"Give PACLitaxel first. IV in 250\u2013500 mL NS over 3 hours. Non-DEHP bag and tubing with 0.2 micron in-line filter.",
      levels:[175]
    },
    {
      name:"CARBOplatin",
      dose:6,
      unit:"AUC",
      basis:"auc",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Day 1",
      reducible:true,
      note:"IV in 100\u2013250 mL NS over 30 minutes. GFR capped at 125 mL/min."
    }
    ],
    labs:{
      baseline:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "chest x-ray"],
      cycle:["CBC & Diff", "creatinine"],
      conditional:[
        { label:"If clinically indicated", tests:["alkaline phosphatase", "ALT", "total bilirubin", "LDH"] }
      ]
    }
  },

  {
    key:"LU-LUAVPEM", cat:"Lung", bcc:true,
    name:"LUAVPEM - Pemetrexed 2nd-Line Advanced NSCLC",
    cycle:21,
    notes:"Second-line pemetrexed monotherapy for advanced non-squamous NSCLC after prior platinum-based chemotherapy. Requires folic acid and vitamin B12 supplementation. ECOG 0\u20132.",
    drugs:[
    {
      name:"Pemetrexed",
      dose:500,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Day 1",
      reducible:true,
      note:"Folic acid 0.4 mg PO daily and vitamin B12 1000 mcg IM q9 weeks starting \u22657 days before first cycle."
    }
    ],
    labs:{
      baseline:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH"],
      cycle:["CBC & Diff", "alkaline phosphatase", "ALT", "total bilirubin", "LDH"],
      conditional:[
        { label:"If clinically indicated", tests:["creatinine"] }
      ]
    }
  },

  {
    key:"LU-LUAVPG", cat:"Lung", bcc:true,
    name:"LUAVPG - CISplatin + Gemcitabine Advanced NSCLC",
    cycle:21,
    notes:"First-line platinum + gemcitabine for stage IIIB/IV NSCLC. Gemcitabine 1000 mg/m\u00b2 Days 1 and 8. CARBOplatin AUC 5 may substitute for cisplatin. x4\u20136 cycles.",
    drugs:[
    {
      name:"Gemcitabine",
      dose:1000,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Days 1 and 8",
      reducible:true,
      note:"Total dose per cycle = 2000 mg/m\u00b2."
    },
    {
      name:"CISplatin",
      dose:75,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Day 1",
      reducible:true,
      note:"Pre-hydration required. CARBOplatin AUC 5 may substitute."
    }
    ],
    labs:{
      baseline:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH"],
      cycle:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH"],
      conditional:[
        { label:"Before Day 8", tests:["CBC & Diff", "creatinine"] }
      ]
    }
  },

  {
    key:"LU-LUAVPGPMB", cat:"Lung", bcc:true,
    name:"LUAVPGPMB - Pembrolizumab + Gemcitabine + CISplatin [1L Squamous NSCLC]",
    cycle:21,
    notes:"First-line pembrolizumab + gemcitabine + cisplatin for advanced squamous NSCLC. 4 cycles then maintenance (LUAVPPMBM or LUAVPMB). CARBOplatin AUC 5 may substitute for cisplatin. Pembrolizumab 2 mg/kg max 200 mg.",
    drugs:[
    {
      name:"Pembrolizumab",
      dose:2,
      unit:"mg/kg",
      basis:"weight",
      max:200,
      weightCap:null,
      route:"IV",
      days:"Day 1",
      reducible:false,
      note:"No dose modifications; toxicity managed by delay. Max 200 mg."
    },
    {
      name:"Gemcitabine",
      dose:1000,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Days 1 and 8",
      reducible:true,
      note:"Total dose per cycle = 2000 mg/m\u00b2."
    },
    {
      name:"CISplatin",
      dose:75,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Day 1",
      reducible:true,
      note:"Pre-hydration required. CARBOplatin AUC 5 may substitute."
    }
    ],
    labs:{
      baseline:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "morning serum cortisol", "chest x-ray"],
      cycle:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH"],
      conditional:[
        { label:"Before Day 8", tests:["CBC & Diff", "creatinine"] },
        { label:"If clinically indicated", tests:["chest x-ray", "morning serum cortisol", "lipase", "random glucose", "free T3", "free T4", "serum ACTH levels", "ECG"] }
      ]
    }
  },

  {
    key:"LU-LUAVPMB", cat:"Lung", bcc:true,
    name:"LUAVPMB - Pembrolizumab 3-Weekly [Advanced NSCLC, PD-L1 \u22651%]",
    cycle:21,
    notes:"Second or subsequent-line pembrolizumab monotherapy for advanced NSCLC with PD-L1 \u22651%. 2 mg/kg q3w max 200 mg. Maximum 35 cycles or 2 years. Interchangeable with LUAVPMB6 without CAP approval.",
    drugs:[
    {
      name:"Pembrolizumab",
      dose:2,
      unit:"mg/kg",
      basis:"weight",
      max:200,
      weightCap:null,
      route:"IV",
      days:"Day 1",
      reducible:false,
      note:"No dose modifications; toxicity managed by delay. Max 200 mg."
    }
    ],
    labs:{
      baseline:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "morning serum cortisol", "chest x-ray"],
      cycle:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH"],
      conditional:[
        { label:"If clinically indicated", tests:["chest x-ray", "morning serum cortisol", "lipase", "random glucose", "free T3", "free T4", "serum ACTH levels", "ECG"] }
      ]
    }
  },

  {
    key:"LU-LUAVPMB6", cat:"Lung", bcc:true,
    name:"LUAVPMB6 - Pembrolizumab 6-Weekly [Advanced NSCLC, PD-L1 \u22651%]",
    cycle:42,
    notes:"Second or subsequent-line pembrolizumab monotherapy for advanced NSCLC with PD-L1 \u22651%. 4 mg/kg q6w max 400 mg. Maximum 18 cycles or 2 years. Interchangeable with LUAVPMB without CAP approval.",
    drugs:[
    {
      name:"Pembrolizumab",
      dose:4,
      unit:"mg/kg",
      basis:"weight",
      max:400,
      weightCap:null,
      route:"IV",
      days:"Day 1",
      reducible:false,
      note:"No dose modifications; toxicity managed by delay. Max 400 mg."
    }
    ],
    labs:{
      baseline:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "morning serum cortisol", "chest x-ray"],
      cycle:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH"],
      conditional:[
        { label:"If clinically indicated", tests:["chest x-ray", "morning serum cortisol", "lipase", "random glucose", "free T3", "free T4", "serum ACTH levels", "ECG"] }
      ]
    }
  },

  {
    key:"LU-LUAVPMTN", cat:"Lung", bcc:true,
    name:"LUAVPMTN - Pemetrexed Maintenance [Advanced Non-Squamous NSCLC]",
    cycle:21,
    notes:"Maintenance pemetrexed for advanced non-squamous NSCLC after 4\u20136 cycles of platinum-based doublet with no progression. Start 21\u201342 days after final induction cycle. ECOG 0\u20131. Requires folic acid and vitamin B12.",
    drugs:[
    {
      name:"Pemetrexed",
      dose:500,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Day 1",
      reducible:true,
      note:"Folic acid 0.4 mg PO daily and vitamin B12 1000 mcg IM q9 weeks."
    }
    ],
    labs:{
      baseline:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH"],
      cycle:["CBC & Diff", "alkaline phosphatase", "ALT", "total bilirubin", "LDH"],
      conditional:[
        { label:"If clinically indicated", tests:["creatinine"] }
      ]
    }
  },

  {
    key:"LU-LUAVPP", cat:"Lung", bcc:true,
    name:"LUAVPP - CISplatin + Pemetrexed 1st-Line Advanced Non-Squamous NSCLC",
    cycle:21,
    notes:"First-line cisplatin + pemetrexed for advanced non-squamous NSCLC. 4\u20136 cycles. CARBOplatin AUC 5 may substitute for cisplatin. Requires folic acid and vitamin B12. Use of LUAVPP as induction precludes second-line pemetrexed.",
    drugs:[
    {
      name:"Pemetrexed",
      dose:500,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Day 1",
      reducible:true,
      note:"Folic acid 0.4 mg PO daily and vitamin B12 1000 mcg IM q9 weeks starting \u22657 days before first cycle."
    },
    {
      name:"CISplatin",
      dose:75,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Day 1",
      reducible:true,
      note:"Pre- and post-hydration required. CARBOplatin AUC 5 may substitute."
    }
    ],
    labs:{
      baseline:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH"],
      cycle:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH"]
    }
  },

  {
    key:"LU-LUAVPPIPNI", cat:"Lung", bcc:true,
    name:"LUAVPPIPNI - Nivolumab + Ipilimumab + CISplatin + Pemetrexed [1L Non-Squamous NSCLC]",
    cycle:21,
    notes:"First-line nivolumab + ipilimumab + 2 cycles platinum/pemetrexed for advanced non-squamous NSCLC without EGFR/ROS1/ALK mutations. Cycles 1\u20132: nivo + ipi + cis + pem q3w. Cycle 3+: nivo Days 1,22 + ipi Day 1 q6w. CARBOplatin AUC 5 may substitute. Requires folic acid and B12.",
    drugs:[
    {
      name:"Nivolumab",
      dose:4.5,
      unit:"mg/kg",
      basis:"weight",
      max:360,
      weightCap:null,
      route:"IV",
      days:"Day 1 (Cycles 1\u20132); Days 1 and 22 (Cycle 3+)",
      reducible:false,
      note:"No dose modifications; toxicity managed by delay. Max 360 mg."
    },
    {
      name:"Ipilimumab",
      dose:1,
      unit:"mg/kg",
      basis:"weight",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Day 1 (Cycles 1 and 3+; omitted Cycle 2)",
      reducible:false,
      note:"No dose modifications; toxicity managed by delay."
    },
    {
      name:"Pemetrexed",
      dose:500,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Day 1 (Cycles 1 and 2 only)",
      reducible:true,
      note:"Cycles 1 and 2 only. Folic acid and B12 mandatory."
    },
    {
      name:"CISplatin",
      dose:75,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Day 1 (Cycles 1 and 2 only)",
      reducible:true,
      note:"Cycles 1 and 2 only. CARBOplatin AUC 5 may substitute."
    }
    ],
    labs:{
      baseline:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "morning serum cortisol", "chest x-ray", "HBsAg", "HBcoreAb", "HBsAb"],
      cycle:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "random glucose"],
      conditional:[
        { label:"If clinically indicated", tests:["chest x-ray", "morning serum cortisol", "lipase", "free T3", "free T4", "serum ACTH levels", "ECG"] }
      ]
    }
  },

  {
    key:"LU-LUAVPPMBM", cat:"Lung", bcc:true,
    name:"LUAVPPMBM - Pembrolizumab + Pemetrexed Maintenance [Non-Squamous NSCLC]",
    cycle:21,
    notes:"Maintenance pembrolizumab + pemetrexed for advanced non-squamous NSCLC after 4 cycles of LUAVPPPMB. Start 21\u201342 days after final induction cycle. Pembrolizumab 2 mg/kg max 200 mg q3w. Requires folic acid and B12.",
    drugs:[
    {
      name:"Pembrolizumab",
      dose:2,
      unit:"mg/kg",
      basis:"weight",
      max:200,
      weightCap:null,
      route:"IV",
      days:"Day 1",
      reducible:false,
      note:"No dose modifications; toxicity managed by delay. Max 200 mg."
    },
    {
      name:"Pemetrexed",
      dose:500,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Day 1",
      reducible:true,
      note:"Folic acid 0.4 mg PO daily and vitamin B12 1000 mcg IM q9 weeks."
    }
    ],
    labs:{
      baseline:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "chest x-ray"],
      cycle:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH"],
      conditional:[
        { label:"If clinically indicated", tests:["chest x-ray", "morning serum cortisol", "lipase", "random glucose", "free T3", "free T4", "serum ACTH levels", "ECG"] }
      ]
    }
  },

  {
    key:"LU-LUAVPPOSI", cat:"Lung", bcc:true,
    name:"LUAVPPOSI - CISplatin + Pemetrexed + Osimertinib [EGFR+ 1L Non-Squamous NSCLC]",
    cycle:21,
    notes:"First-line osimertinib + cisplatin + pemetrexed for EGFR exon 19 or L858R mutation-positive advanced non-squamous NSCLC. Cycles 1\u20134: cis + pem + osimertinib 80 mg daily. Cycle 5+: pem + osimertinib maintenance. CARBOplatin AUC 5 alternative. ECOG 0\u20131. Requires folic acid and B12.",
    drugs:[
    {
      name:"Pemetrexed",
      dose:500,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Day 1",
      reducible:true,
      note:"Cycles 1\u20134 with cisplatin; Cycle 5+ as maintenance. Requires folic acid and vitamin B12."
    },
    {
      name:"CISplatin",
      dose:75,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Day 1 (Cycles 1\u20134 only)",
      reducible:true,
      note:"Cycles 1\u20134 only. CARBOplatin AUC 5 may substitute."
    },
    {
      name:"Osimertinib",
      dose:80,
      unit:"mg",
      basis:"flat",
      max:null,
      weightCap:null,
      route:"PO",
      days:"Daily (all cycles)",
      reducible:true,
      note:"Dose level -1: 40 mg daily. Continue through induction and maintenance.",
      levels:[40]
    }
    ],
    labs:{
      baseline:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "calcium", "magnesium", "ECG"],
      cycle:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "calcium", "magnesium"],
      conditional:[
        { label:"If clinically indicated", tests:["ECG", "chest x-ray", "MUGA scan or echocardiogram"] }
      ]
    }
  },

  {
    key:"LU-LUAVPPPMB", cat:"Lung", bcc:true,
    name:"LUAVPPPMB - Pembrolizumab + Pemetrexed + CISplatin [1L Non-Squamous NSCLC]",
    cycle:21,
    notes:"First-line pembrolizumab + pemetrexed + cisplatin for advanced non-squamous NSCLC without EGFR/ROS1/ALK mutations. 4 cycles then maintenance (LUAVPPMBM). CARBOplatin AUC 5 may substitute. Pembrolizumab 2 mg/kg max 200 mg. Folic acid and B12 mandatory.",
    drugs:[
    {
      name:"Pembrolizumab",
      dose:2,
      unit:"mg/kg",
      basis:"weight",
      max:200,
      weightCap:null,
      route:"IV",
      days:"Day 1",
      reducible:false,
      note:"No dose modifications; toxicity managed by delay. Max 200 mg."
    },
    {
      name:"Pemetrexed",
      dose:500,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Day 1",
      reducible:true,
      note:"Folic acid and B12 supplementation mandatory."
    },
    {
      name:"CISplatin",
      dose:75,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Day 1",
      reducible:true,
      note:"Pre- and post-hydration required. CARBOplatin AUC 5 may substitute."
    }
    ],
    labs:{
      baseline:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "morning serum cortisol", "chest x-ray"],
      cycle:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH"],
      conditional:[
        { label:"If clinically indicated", tests:["chest x-ray", "morning serum cortisol", "lipase", "random glucose", "free T3", "free T4", "serum ACTH levels", "ECG"] }
      ]
    }
  },

  {
    key:"LU-LUAVVIN", cat:"Lung", bcc:true,
    name:"LUAVVIN - Vinorelbine [Advanced NSCLC, Elderly]",
    cycle:21,
    notes:"First-line advanced NSCLC in elderly patients (stage IIIB/IV). May be 2nd/3rd-line after immunotherapy or targeted agents. Vinorelbine 30 mg/m\u00b2 Days 1 and 8, q21d x6 cycles.",
    drugs:[
    {
      name:"Vinorelbine",
      dose:30,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Days 1 and 8",
      reducible:true,
      note:"Reduce to 75% (22.5 mg/m\u00b2) for ANC 0.5\u2013<1.0 or plt 75\u2013<100."
    }
    ],
    labs:{
      baseline:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH"],
      cycle:["CBC & Diff"],
      conditional:[
        { label:"If clinically indicated", tests:["creatinine", "total bilirubin"] }
      ]
    }
  },

  {
    key:"LU-LUAVPCIPNI", cat:"Lung", bcc:true,
    name:"LUAVPCIPNI - PACLitaxel + CARBOplatin + Ipilimumab + Nivolumab [1L Squamous NSCLC]",
    cycle:null,
    notes:"First-line advanced squamous NSCLC. Cycles 1\u20132 (q3w): nivo 4.5 mg/kg + ipi 1 mg/kg (Cycle 1 only) + paclitaxel 200 mg/m\u00b2 + CARBOplatin AUC 5 or 6. Cycle 3+: nivo + ipi q6w. Continue until progression or max 2 years. No dose modifications for checkpoint inhibitors.",
    drugs:[
    {
      name:"Nivolumab",
      dose:4.5,
      unit:"mg/kg",
      basis:"weight",
      max:360,
      weightCap:null,
      route:"IV",
      days:"Day 1 (Cycles 1\u20132 q3w); Days 1 and 22 (Cycle 3+ q6w)",
      reducible:false,
      note:"No dose modifications; toxicity managed by delay. Max 360 mg."
    },
    {
      name:"Ipilimumab",
      dose:1,
      unit:"mg/kg",
      basis:"weight",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Day 1 (Cycles 1 and 3+; omitted Cycle 2)",
      reducible:false,
      note:"No dose modifications; toxicity managed by delay."
    },
    {
      name:"PACLitaxel",
      dose:200,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Day 1 (Cycles 1 and 2 only)",
      reducible:true,
      note:"Cycles 1 and 2 only. Reduce to 175 mg/m\u00b2 for persistent Grade \u22652 arthralgia/myalgia.",
      levels:[175]
    },
    {
      name:"CARBOplatin",
      dose:5,
      unit:"AUC",
      basis:"auc",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Day 1 (Cycles 1 and 2 only)",
      reducible:true,
      note:"AUC 5 or 6. GFR capped at 125 mL/min. Cycles 1 and 2 only."
    }
    ],
    labs:{
      baseline:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "morning serum cortisol", "chest x-ray", "HBsAg", "HBcoreAb", "HBsAb"],
      cycle:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "random glucose"],
      conditional:[
        { label:"If clinically indicated", tests:["chest x-ray", "morning serum cortisol", "lipase", "free T3", "free T4", "serum ACTH levels", "ECG"] }
      ]
    }
  },

  {
    key:"LU-LUAVPCPMB", cat:"Lung", bcc:true,
    name:"LUAVPCPMB - Pembrolizumab + PACLitaxel + CARBOplatin [1L Squamous NSCLC]",
    cycle:21,
    notes:"First-line pembrolizumab + paclitaxel + carboplatin for advanced squamous NSCLC. 4 cycles then maintenance (LUAVPMB or LUAVPMB6). CARBOplatin AUC 5 or 6. Pembrolizumab 2 mg/kg max 200 mg.",
    drugs:[
    {
      name:"Pembrolizumab",
      dose:2,
      unit:"mg/kg",
      basis:"weight",
      max:200,
      weightCap:null,
      route:"IV",
      days:"Day 1",
      reducible:false,
      note:"No dose modifications; toxicity managed by delay. Max 200 mg."
    },
    {
      name:"PACLitaxel",
      dose:200,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Day 1",
      reducible:true,
      note:"Reduce to 175 mg/m\u00b2 for persistent Grade \u22652 arthralgia/myalgia.",
      levels:[175]
    },
    {
      name:"CARBOplatin",
      dose:5,
      unit:"AUC",
      basis:"auc",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Day 1",
      reducible:true,
      note:"AUC 5 or 6. GFR capped at 125 mL/min."
    }
    ],
    labs:{
      baseline:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "morning serum cortisol", "chest x-ray"],
      cycle:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH"],
      conditional:[
        { label:"If clinically indicated", tests:["chest x-ray", "morning serum cortisol", "lipase", "random glucose", "free T3", "free T4", "serum ACTH levels", "ECG"] }
      ]
    }
  },

  {
    key:"LU-LULACATRT", cat:"Lung", bcc:true,
    name:"LULACATRT - CARBOplatin + PACLitaxel + Radiation [Locally Advanced NSCLC]",
    cycle:null,
    notes:"Chemoradiation for locally advanced (Stage IIIA/IIIB) NSCLC. For patients unfit for LULAPERT/LULAPE2RT. Chemotherapy weekly x6 weeks concurrent with radiation (60 Gy in 30 fractions). PACLitaxel 45 mg/m\u00b2 + CARBOplatin AUC 2 weekly.",
    drugs:[
    {
      name:"PACLitaxel",
      dose:45,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Weekly x6 (concurrent with radiation)",
      reducible:true,
      note:"Weekly radiosensitizing dose. Concurrent with radiation therapy."
    },
    {
      name:"CARBOplatin",
      dose:2,
      unit:"AUC",
      basis:"auc",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Weekly x6 (concurrent with radiation)",
      reducible:true,
      note:"AUC 2 weekly. GFR capped at 125 mL/min. Concurrent with radiation therapy."
    }
    ],
    labs:{
      baseline:["CBC & Diff", "creatinine", "total bilirubin", "ALT"],
      cycle:["CBC & Diff", "creatinine"],
      conditional:[
        { label:"If clinically indicated", tests:["total bilirubin", "ALT", "magnesium"] }
      ]
    }
  },

  {
    key:"LU-LULADUR4", cat:"Lung", bcc:true,
    name:"LULADUR4 - Durvalumab 4-Weekly [Locally Advanced NSCLC, Post-ChemoRT]",
    cycle:28,
    notes:"Consolidation immunotherapy for Stage III unresectable NSCLC after concurrent platinum-based chemoradiation. Durvalumab 20 mg/kg (max 1500 mg) q4w for up to 1 year total. No dose modifications \u2014 managed by treatment delay. Interchangeable with LULADUR without CAP approval.",
    drugs:[
    {
      name:"Durvalumab",
      dose:20,
      unit:"mg/kg",
      basis:"weight",
      max:1500,
      weightCap:null,
      route:"IV",
      days:"Day 1",
      reducible:false,
      note:"No dose modifications; toxicity managed by delay. Continue up to 1 year total."
    }
    ],
    labs:{
      baseline:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "morning serum cortisol", "chest x-ray"],
      cycle:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH"],
      conditional:[
        { label:"If clinically indicated", tests:["chest x-ray", "ECG", "morning serum cortisol", "lipase", "random glucose", "free T3", "free T4", "serum ACTH levels"] }
      ]
    }
  },

  {
    key:"LU-LULAOSI", cat:"Lung", bcc:true,
    name:"LULAOSI - Osimertinib [Locally Advanced EGFR+ NSCLC, Post-ChemoRT]",
    cycle:null,
    notes:"Consolidation for unresectable locally advanced Stage III NSCLC with EGFR exon 19 del or L858R, following platinum-based chemoradiation. Initiate within 10 weeks of completing chemoRT. Osimertinib 80 mg PO once daily until progression.",
    drugs:[
    {
      name:"Osimertinib",
      dose:80,
      unit:"mg",
      basis:"flat",
      max:null,
      weightCap:null,
      route:"PO",
      days:"Once daily (continuous)",
      reducible:true,
      note:"Dose level -1: 40 mg daily.",
      levels:[40]
    }
    ],
    labs:{
      baseline:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "calcium", "potassium", "magnesium", "ECG"],
      cycle:["alkaline phosphatase", "ALT", "total bilirubin", "LDH", "potassium", "calcium", "magnesium"],
      conditional:[
        { label:"If clinically indicated", tests:["CBC & Diff", "creatinine", "chest x-ray", "ECG", "MUGA scan or echocardiogram"] }
      ]
    }
  },

  {
    key:"LU-LULAPE2RT", cat:"Lung", bcc:true,
    name:"LULAPE2RT - CISplatin + Etoposide (Split-Dose) + Radiation [Locally Advanced NSCLC]",
    cycle:28,
    notes:"Chemoradiation for locally advanced NSCLC (ECOG 0\u20131). CISplatin 50 mg/m\u00b2 Days 1 and 8 + etoposide 50 mg/m\u00b2/day Days 1\u20135. Repeat q28d x2 cycles, concurrent with radiation. CARBOplatin AUC 5 Day 1 may substitute for CISplatin.",
    drugs:[
    {
      name:"CISplatin",
      dose:50,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Days 1 and 8",
      reducible:true,
      note:"Reduce to 80% for CrCl 45\u201360; substitute CARBOplatin AUC 5 Day 1 only if needed."
    },
    {
      name:"Etoposide",
      dose:50,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Days 1\u20135",
      reducible:true,
      note:"Reduce to 75% for ANC 1.0\u2013<1.5 or plt 75\u2013<100."
    }
    ],
    labs:{
      baseline:["CBC & differential", "platelets", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH"],
      cycle:["CBC & differential", "platelets", "total bilirubin", "creatinine"],
      conditional:[
        { label:"Before Day 8 CISplatin", tests:["creatinine"] },
        { label:"If clinically indicated", tests:["bilirubin"] }
      ]
    }
  },

  {
    key:"LU-LULAPERT", cat:"Lung", bcc:true,
    name:"LULAPERT - CISplatin + Etoposide + Radiation [Locally Advanced NSCLC]",
    cycle:21,
    notes:"Chemoradiation for locally advanced NSCLC (ECOG 0\u20131). CISplatin 25 mg/m\u00b2/day Days 1\u20133 + etoposide 100 mg/m\u00b2/day Days 1\u20133. Repeat q21d x4 cycles. Radiotherapy starts with Cycle 1. CARBOplatin AUC 5 Day 1 may substitute.",
    drugs:[
    {
      name:"CISplatin",
      dose:25,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Days 1\u20133",
      reducible:true,
      note:"25 mg/m\u00b2/day x3 days. Reduce to 80% for CrCl 45\u201360; substitute CARBOplatin AUC 5 Day 1 if needed."
    },
    {
      name:"Etoposide",
      dose:100,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Days 1\u20133",
      reducible:true,
      note:"Reduce to 75% for ANC 1.0\u2013<1.5 or plt 75\u2013<100."
    }
    ],
    labs:{
      baseline:["CBC & differential", "platelets", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH"],
      cycle:["CBC & differential", "platelets", "creatinine"],
      conditional:[
        { label:"If clinically indicated", tests:["bilirubin"] }
      ]
    }
  },

  {
    key:"LU-LUMMIPNI", cat:"Lung", bcc:true,
    name:"LUMMIPNI - Ipilimumab + Nivolumab [Malignant Pleural Mesothelioma]",
    cycle:42,
    notes:"First-line treatment for previously untreated unresectable malignant pleural mesothelioma. Nivolumab 3 mg/kg (max 240 mg) Days 1, 15, 29; ipilimumab 1 mg/kg Day 1 only. Repeat q6w up to 17 cycles or 2 years. No dose modifications. Interchangeable with LUMMIPNI3.",
    drugs:[
    {
      name:"Nivolumab",
      dose:3,
      unit:"mg/kg",
      basis:"weight",
      max:240,
      weightCap:null,
      route:"IV",
      days:"Days 1, 15, 29",
      reducible:false,
      note:"Max 240 mg. 0.2 micron in-line filter required."
    },
    {
      name:"Ipilimumab",
      dose:1,
      unit:"mg/kg",
      basis:"weight",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Day 1",
      reducible:false,
      note:"No dose modifications; toxicity managed by delay."
    }
    ],
    labs:{
      baseline:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "morning serum cortisol", "chest x-ray", "HBsAg", "HBcoreAb", "HBsAb"],
      cycle:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "random glucose"],
      conditional:[
        { label:"If clinically indicated", tests:["chest x-ray", "morning serum cortisol", "lipase", "free T3", "free T4", "serum ACTH levels", "ECG"] }
      ]
    }
  },

  {
    key:"LU-LUMMIPNI3", cat:"Lung", bcc:true,
    name:"LUMMIPNI3 - Ipilimumab + Nivolumab (3-Weekly) [Malignant Pleural Mesothelioma]",
    cycle:42,
    notes:"First-line treatment for unresectable malignant pleural mesothelioma. Nivolumab 4.5 mg/kg (max 360 mg) Days 1 and 22; ipilimumab 1 mg/kg Day 1 only. Repeat q6w up to 17 cycles or 2 years. Interchangeable with LUMMIPNI without CAP approval.",
    drugs:[
    {
      name:"Nivolumab",
      dose:4.5,
      unit:"mg/kg",
      basis:"weight",
      max:360,
      weightCap:null,
      route:"IV",
      days:"Days 1, 22",
      reducible:false,
      note:"Max 360 mg. 0.2 micron in-line filter required."
    },
    {
      name:"Ipilimumab",
      dose:1,
      unit:"mg/kg",
      basis:"weight",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Day 1",
      reducible:false,
      note:"No dose modifications; toxicity managed by delay."
    }
    ],
    labs:{
      baseline:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "morning serum cortisol", "chest x-ray", "HBsAg", "HBcoreAb", "HBsAb"],
      cycle:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "random glucose"],
      conditional:[
        { label:"If clinically indicated", tests:["chest x-ray", "morning serum cortisol", "lipase", "free T3", "free T4", "serum ACTH levels", "ECG"] }
      ]
    }
  },

  {
    key:"LU-LUMMPP", cat:"Lung", bcc:true,
    name:"LUMMPP - Pemetrexed + CISplatin [Malignant Mesothelioma]",
    cycle:21,
    notes:"First-line treatment for malignant mesothelioma, ECOG 0\u20132. Pemetrexed 500 mg/m\u00b2 + cisplatin 75 mg/m\u00b2 Day 1 q21d x6 cycles. CARBOplatin AUC 5 may substitute for cisplatin. Folic acid and B12 mandatory.",
    drugs:[
    {
      name:"Pemetrexed",
      dose:500,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Day 1",
      reducible:true,
      note:"Folic acid 0.4 mg PO daily and vitamin B12 1000 mcg IM q9 weeks mandatory."
    },
    {
      name:"CISplatin",
      dose:75,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Day 1",
      reducible:true,
      note:"Pre- and post-hydration required. CARBOplatin AUC 5 may substitute."
    }
    ],
    labs:{
      baseline:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH"],
      cycle:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH"]
    }
  },

  {
    key:"LU-LUMMPPPMB", cat:"Lung", bcc:true,
    name:"LUMMPPPMB - Pembrolizumab + Pemetrexed + CISplatin [Malignant Pleural Mesothelioma]",
    cycle:21,
    notes:"First-line unresectable malignant pleural mesothelioma. Cycles 1\u20136: pembrolizumab 2 mg/kg (max 200 mg) + pemetrexed 500 mg/m\u00b2 + cisplatin 75 mg/m\u00b2 (or CARBOplatin AUC 5\u20136) q3w. Cycle 7+: pembrolizumab maintenance. Max 35 cycles q3w or 18 cycles q6w or 2 years. Folic acid and B12 mandatory. BC Cancer protocol activated 1 Mar 2026.",
    drugs:[
    {
      name:"Pembrolizumab",
      dose:2,
      unit:"mg/kg",
      basis:"weight",
      max:200,
      weightCap:null,
      route:"IV",
      days:"Day 1",
      reducible:false,
      note:"Max 200 mg. Cycles 1\u20136 with chemo; Cycle 7+ as maintenance. Alternative maintenance: 4 mg/kg (max 400 mg) q6w."
    },
    {
      name:"Pemetrexed",
      dose:500,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Day 1",
      reducible:true,
      note:"Cycles 1\u20136 only. Folic acid 0.4\u20131 mg PO daily and vitamin B12 1000 mcg IM q9 weeks mandatory."
    },
    {
      name:"CISplatin",
      dose:75,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Day 1",
      reducible:true,
      note:"Cycles 1\u20136 only. CARBOplatin AUC 5\u20136 may substitute."
    }
    ],
    labs:{
      baseline:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "morning serum cortisol"],
      cycle:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH"],
      conditional:[
        { label:"If clinically indicated", tests:["chest x-ray", "morning serum cortisol", "lipase", "random glucose", "free T3", "free T4", "serum ACTH levels", "ECG"] }
      ]
    }
  },

  {
    key:"LU-LUOTPAC", cat:"Lung", bcc:true,
    name:"LUOTPAC - DOXOrubicin + CISplatin + Cyclophosphamide [Thymoma/Thymic Carcinoma]",
    cycle:21,
    notes:"Unresected or metastatic thymoma/thymic carcinoma, ECOG 0\u20132. DOXOrubicin 50 mg/m\u00b2 + CISplatin 50 mg/m\u00b2 + cyclophosphamide 500 mg/m\u00b2 Day 1 q21d x6\u20138 cycles. History of CHF is an exclusion.",
    drugs:[
    {
      name:"DOXOrubicin",
      dose:50,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Day 1",
      reducible:true,
      note:"Reduce to 50% for bilirubin 25\u201336 \u00b5mol/L; hold if >36. Cardiotoxic \u2014 assess if cumulative dose >450 mg/m\u00b2."
    },
    {
      name:"CISplatin",
      dose:50,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Day 1",
      reducible:true,
      note:"Pre-hydration required. Reduce to 75% for CrCl 45\u201360; hold if CrCl <45."
    },
    {
      name:"Cyclophosphamide",
      dose:500,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Day 1",
      reducible:true,
      note:"Reduce to 50% for ANC 1.0\u20131.5 or plt 75\u2013100."
    }
    ],
    labs:{
      baseline:["CBC & differential", "platelets", "creatinine", "bilirubin"],
      cycle:["CBC & differential", "platelets", "creatinine"],
      conditional:[
        { label:"If clinically indicated", tests:["bilirubin"] }
      ]
    }
  },

  {
    key:"LU-LUOTPERT", cat:"Lung", bcc:true,
    name:"LUOTPERT - CISplatin + Etoposide + Radiation [Thymoma/Thymic Carcinoma]",
    cycle:21,
    notes:"Locally advanced or high-risk thymoma/thymic carcinoma with concurrent thoracic radiation. ECOG 0\u20131. CISplatin 25 mg/m\u00b2/day Days 1\u20133 + etoposide 100 mg/m\u00b2/day Days 1\u20133, q21d x4 cycles. CARBOplatin AUC 5 Day 1 may substitute.",
    drugs:[
    {
      name:"CISplatin",
      dose:25,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Days 1\u20133",
      reducible:true,
      note:"25 mg/m\u00b2/day x3 days. Reduce to 80% for CrCl 45\u201360. CARBOplatin AUC 5 Day 1 may substitute."
    },
    {
      name:"Etoposide",
      dose:100,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Days 1\u20133",
      reducible:true,
      note:"Reduce to 75% for ANC 1.0\u20131.5 or plt 75\u2013100."
    }
    ],
    labs:{
      baseline:["CBC & differential", "platelets", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH"],
      cycle:["CBC & differential", "platelets", "creatinine"],
      conditional:[
        { label:"If clinically indicated", tests:["bilirubin"] }
      ]
    }
  },

  {
    key:"LU-LUPUPE", cat:"Lung", bcc:true,
    name:"LUPUPE - CISplatin + Etoposide [Cancer of Unknown Primary/Neuroendocrine]",
    cycle:21,
    notes:"Selected cancers of unknown primary or neuroendocrine tumours involving thorax/mediastinum. CISplatin 25 mg/m\u00b2/day Days 1\u20133 + etoposide 100 mg/m\u00b2/day Days 1\u20133, q21d. CARBOplatin AUC 5 Day 1 may substitute.",
    drugs:[
    {
      name:"CISplatin",
      dose:25,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Days 1\u20133",
      reducible:true,
      note:"25 mg/m\u00b2/day x3 days. Reduce to 80% for CrCl 45\u201360. CARBOplatin AUC 5 Day 1 may substitute."
    },
    {
      name:"Etoposide",
      dose:100,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Days 1\u20133",
      reducible:true,
      note:"Reduce to 75% for ANC 1.0\u2013<1.5 or plt 75\u2013<100."
    }
    ],
    labs:{
      baseline:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH"],
      cycle:["CBC & Diff", "creatinine"],
      conditional:[
        { label:"If clinically indicated", tests:["total bilirubin"] }
      ]
    }
  },

  {
    key:"LU-LUSCATPE", cat:"Lung", bcc:true,
    name:"LUSCATPE - Atezolizumab + CISplatin + Etoposide [1L Extensive Stage SCLC]",
    cycle:21,
    notes:"First-line extensive stage SCLC. Cycles 1\u20134: atezolizumab 1875 mg SC (or 1200 mg IV) + cisplatin 25 mg/m\u00b2/day Days 1\u20133 + etoposide 100 mg/m\u00b2/day Days 1\u20133 q3w. Cycle 5+: atezolizumab maintenance q3w. CARBOplatin AUC 5 may substitute. Not to be used concurrently with LUSCDURPE.",
    drugs:[
    {
      name:"Atezolizumab",
      dose:1875,
      unit:"mg",
      basis:"flat",
      max:null,
      weightCap:null,
      route:"SC",
      days:"Day 1",
      reducible:false,
      note:"1875 mg SC preferred; alternatively 1200 mg IV. No dose modifications; toxicity managed by delay."
    },
    {
      name:"CISplatin",
      dose:25,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Days 1\u20133",
      reducible:true,
      note:"Cycles 1\u20134 only. Reduce to 80% for CrCl 45\u201360. CARBOplatin AUC 5 may substitute."
    },
    {
      name:"Etoposide",
      dose:100,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Days 1\u20133",
      reducible:true,
      note:"Cycles 1\u20134 only. Reduce to 75% for ANC 1.0\u2013<1.5 or plt 75\u2013<100."
    }
    ],
    labs:{
      baseline:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "morning serum cortisol", "chest x-ray"],
      cycle:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH"],
      conditional:[
        { label:"If clinically indicated", tests:["chest x-ray", "ECG", "morning serum cortisol", "lipase", "random glucose", "free T3", "free T4", "serum ACTH levels"] }
      ]
    }
  },

  {
    key:"LU-LUSCCAV", cat:"Lung", bcc:true,
    name:"LUSCCAV - Cyclophosphamide + DOXOrubicin + VinCRIStine CAV [Extensive SCLC]",
    cycle:21,
    notes:"Relapsed SCLC after LUSCPE, or first-line extensive SCLC with contraindication to LUSCPE. ECOG 0\u20131. DOXOrubicin 50 mg/m\u00b2 + vincristine 1.2 mg/m\u00b2 (max 2 mg) + cyclophosphamide 1000 mg/m\u00b2 Day 1 q21d x4\u20136 cycles.",
    drugs:[
    {
      name:"DOXOrubicin",
      dose:50,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Day 1",
      reducible:true,
      note:"Reduce to 50% for bilirubin 25\u201350, 25% for 51\u201385, hold if >85 \u00b5mol/L. Cardiotoxic."
    },
    {
      name:"VinCRIStine",
      dose:1.2,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:2,
      weightCap:null,
      route:"IV",
      days:"Day 1",
      reducible:true,
      note:"Maximum 2 mg. Reduce for neurotoxicity per protocol."
    },
    {
      name:"Cyclophosphamide",
      dose:1000,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Day 1",
      reducible:true,
      note:"Reduce to 50% for ANC 1.0\u20131.5 or plt 75\u2013100."
    }
    ],
    labs:{
      baseline:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH"],
      cycle:["CBC & Diff", "creatinine"],
      conditional:[
        { label:"If clinically indicated", tests:["total bilirubin", "ECG"] }
      ]
    }
  },

  {
    key:"LU-LUSCDURPE", cat:"Lung", bcc:true,
    name:"LUSCDURPE - Durvalumab + CISplatin + Etoposide [1L Extensive Stage SCLC]",
    cycle:21,
    notes:"First-line extensive stage SCLC. Cycles 1\u20134: durvalumab 20 mg/kg (max 1500 mg) + cisplatin 25 mg/m\u00b2/day Days 1\u20133 + etoposide 100 mg/m\u00b2/day Days 1\u20133 q3w. Cycle 5+: durvalumab 20 mg/kg q4w. CARBOplatin AUC 5 may substitute. Not to be used concurrently with LUSCATPE.",
    drugs:[
    {
      name:"Durvalumab",
      dose:20,
      unit:"mg/kg",
      basis:"weight",
      max:1500,
      weightCap:null,
      route:"IV",
      days:"Day 1",
      reducible:false,
      note:"Max 1500 mg. Cycles 1\u20134 q3w with chemo; Cycle 5+ q4w as maintenance. No dose modifications."
    },
    {
      name:"CISplatin",
      dose:25,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Days 1\u20133",
      reducible:true,
      note:"Cycles 1\u20134 only. CARBOplatin AUC 5 may substitute."
    },
    {
      name:"Etoposide",
      dose:100,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Days 1\u20133",
      reducible:true,
      note:"Cycles 1\u20134 only. Reduce to 75% for ANC 1.0\u2013<1.5 or plt 75\u2013<100."
    }
    ],
    labs:{
      baseline:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "morning serum cortisol", "chest x-ray"],
      cycle:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH"],
      conditional:[
        { label:"If clinically indicated", tests:["chest x-ray", "ECG", "morning serum cortisol", "lipase", "random glucose", "free T3", "free T4", "serum ACTH levels"] }
      ]
    }
  },

  {
    key:"LU-LUSCPE", cat:"Lung", bcc:true,
    name:"LUSCPE - CISplatin + Etoposide [Extensive Stage SCLC]",
    cycle:21,
    notes:"Extensive stage SCLC. CISplatin 25 mg/m\u00b2/day Days 1\u20133 + etoposide 100 mg/m\u00b2/day Days 1\u20133. CARBOplatin AUC 5 Day 1 may substitute. x4\u20136 cycles.",
    drugs:[
    {
      name:"CISplatin",
      dose:25,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Days 1\u20133",
      reducible:true,
      note:"25 mg/m\u00b2/day x3 days. Reduce to 80% for CrCl 45\u201359; hold if CrCl <45. CARBOplatin AUC 5 may substitute."
    },
    {
      name:"Etoposide",
      dose:100,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Days 1\u20133",
      reducible:true,
      note:"Reduce to 75% for ANC 1.0\u2013<1.5 or plt 75\u2013<100."
    }
    ],
    labs:{
      baseline:["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH"],
      cycle:["CBC & Diff", "creatinine"],
      conditional:[
        { label:"If clinically indicated", tests:["total bilirubin"] }
      ]
    }
  },

  {
    key:"LU-LUSCPEPO", cat:"Lung", bcc:true,
    name:"LUSCPEPO - CISplatin + Oral Etoposide [Extensive Stage SCLC]",
    cycle:21,
    notes:"Extensive stage SCLC \u2014 oral etoposide variant when IV not feasible. CISplatin 75 mg/m\u00b2 Day 1 + oral etoposide 200 mg/m\u00b2/day Days 1\u20133. CARBOplatin AUC 5 may substitute. x4\u20136 cycles.",
    drugs:[
    {
      name:"CISplatin",
      dose:75,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Day 1",
      reducible:true,
      note:"Reduce to 80% for CrCl 45\u201359. CARBOplatin AUC 5 may substitute."
    },
    {
      name:"Etoposide",
      dose:200,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"PO",
      days:"Days 1\u20133",
      reducible:true,
      note:"200 mg/m\u00b2/day x3 days PO. Reduce to 50% for ANC 1.0\u2013<1.5 or plt 75\u2013<100."
    }
    ],
    labs:{
      baseline:["CBC & differential", "platelets", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH"],
      cycle:["CBC & differential", "platelets", "creatinine"],
      conditional:[
        { label:"If clinically indicated", tests:["bilirubin"] }
      ]
    }
  },

  {
    key:"LU-LUSCPEPORT", cat:"Lung", bcc:true,
    name:"LUSCPEPORT - CISplatin + Oral Etoposide + Radiation [Limited Stage SCLC]",
    cycle:21,
    notes:"Limited stage SCLC with concurrent thoracic radiation \u2014 oral etoposide variant. CISplatin 75 mg/m\u00b2 Day 1 + oral etoposide 200 mg/m\u00b2/day Days 1\u20133. CARBOplatin AUC 5 may substitute. Radiation usually starts with Cycle 2. x4\u20136 cycles.",
    drugs:[
    {
      name:"CISplatin",
      dose:75,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Day 1",
      reducible:true,
      note:"Reduce to 80% for CrCl 45\u201359. CARBOplatin AUC 5 may substitute."
    },
    {
      name:"Etoposide",
      dose:200,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"PO",
      days:"Days 1\u20133",
      reducible:true,
      note:"200 mg/m\u00b2/day x3 days PO. Reduce to 50% for ANC 1.0\u2013<1.5 or plt 75\u2013<100."
    }
    ],
    labs:{
      baseline:["CBC & differential", "platelets", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH"],
      cycle:["CBC & differential", "platelets", "creatinine"],
      conditional:[
        { label:"If clinically indicated", tests:["bilirubin"] }
      ]
    }
  },

  {
    key:"LU-LUSCPERT", cat:"Lung", bcc:true,
    name:"LUSCPERT - CISplatin + Etoposide + Radiation [Limited Stage SCLC]",
    cycle:21,
    notes:"Limited stage SCLC with concurrent thoracic radiation. CISplatin 25 mg/m\u00b2/day Days 1\u20133 + etoposide 100 mg/m\u00b2/day Days 1\u20133. CARBOplatin AUC 5 may substitute. Radiation usually starts with Cycle 2. x4\u20136 cycles.",
    drugs:[
    {
      name:"CISplatin",
      dose:25,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Days 1\u20133",
      reducible:true,
      note:"25 mg/m\u00b2/day x3 days. Reduce to 80% for CrCl 45\u201359. CARBOplatin AUC 5 may substitute."
    },
    {
      name:"Etoposide",
      dose:100,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Days 1\u20133",
      reducible:true,
      note:"Reduce to 75% for ANC 1.0\u2013<1.5 or plt 75\u2013<100."
    }
    ],
    labs:{
      baseline:["CBC & differential", "platelets", "creatinine", "ALT", "alkaline phosphatase", "LDH", "bilirubin"],
      cycle:["CBC & differential", "platelets", "creatinine"],
      conditional:[
        { label:"If clinically indicated", tests:["bilirubin"] }
      ]
    }
  },

  {
    key:"LU-LUSCPI", cat:"Lung", bcc:true,
    name:"LUSCPI - Irinotecan \u00b1 CISplatin [2nd-Line Extensive Stage SCLC]",
    cycle:21,
    notes:"Second-line recurrent/progressive extensive stage SCLC. Irinotecan 50 mg/m\u00b2 Days 1 and 8, \u00b1 CISplatin 75 mg/m\u00b2 Day 1 or CARBOplatin AUC 5 Day 1. q21d up to 6 cycles. Note: either LUSCTOP or LUSCPI will be reimbursed, not both.",
    drugs:[
    {
      name:"Irinotecan",
      dose:50,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Days 1 and 8",
      reducible:true,
      note:"Day 8 adjustments: 85% if ANC 1.0\u2013<1.5; 70% if ANC 0.5\u2013<1.0; omit if lower. Omit if CrCl <30."
    },
    {
      name:"CISplatin",
      dose:75,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Day 1",
      reducible:true,
      note:"Optional. Reduce to 80% for CrCl 45\u201359. CARBOplatin AUC 5 may substitute."
    }
    ],
    labs:{
      baseline:["CBC & differential", "platelets", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH"],
      cycle:["CBC & differential", "platelets", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH"],
      conditional:[
        { label:"Day 8 each cycle", tests:["CBC & differential", "platelets"] }
      ]
    }
  },

  {
    key:"LU-LUSCPOE", cat:"Lung", bcc:true,
    name:"LUSCPOE - Oral Etoposide [Palliative Extensive Stage SCLC]",
    cycle:21,
    notes:"Palliative extensive stage SCLC for patients refusing combination chemo, or relapsed SCLC with disease-free interval >3 months. Etoposide 50 mg PO BID x7 days, q21d x4\u20136 cycles.",
    drugs:[
    {
      name:"Etoposide",
      dose:50,
      unit:"mg",
      basis:"flat",
      max:null,
      weightCap:null,
      route:"PO",
      days:"Days 1\u20137 (BID)",
      reducible:true,
      note:"50 mg PO BID x7 days. Delay if ANC <2.0 or plt <100."
    }
    ],
    labs:{
      baseline:["CBC & differential", "platelets"],
      cycle:["CBC & differential", "platelets"]
    }
  },

  {
    key:"LU-LUSCTOP", cat:"Lung", bcc:true,
    name:"LUSCTOP - Topotecan [2nd-Line Recurrent SCLC]",
    cycle:21,
    notes:"Second-line recurrent/progressive SCLC after first-line therapy. ECOG 0\u20132. Topotecan 1.5 mg/m\u00b2/day x5 days IV, q21d x4\u20136 cycles. Note: either LUSCTOP or LUSCPI will be reimbursed, not both.",
    drugs:[
    {
      name:"Topotecan",
      dose:1.5,
      unit:"mg/m\u00b2",
      basis:"bsa",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Days 1\u20135",
      reducible:true,
      note:"Reduce by 0.25 mg/m\u00b2/day for nadir ANC <0.5 or plt <50. Reduce to 50% if CrCl 20\u201339; not recommended if CrCl <20."
    }
    ],
    labs:{
      baseline:["CBC & differential", "platelets", "sodium", "potassium", "creatinine"],
      cycle:["CBC & differential", "platelets", "creatinine"],
      conditional:[
        { label:"Weekly", tests:["CBC & differential", "platelets"] }
      ]
    }
  },

  {
    key:"LU-ULUAJATZ", cat:"Lung", bcc:true,
    name:"ULUAJATZ - Atezolizumab Adjuvant [Resected NSCLC, PD-L1 \u226550%]",
    cycle:28,
    notes:"Adjuvant atezolizumab monotherapy for fully resected NSCLC. Stage IIB\u2013IIIA or IIIB with prior platinum-based chemo, PD-L1 TPS \u226550%, no EGFR/ALK mutation. BC Cancer Compassionate Access Program approval required. Maximum 12 cycles (1 year). No dose modifications.",
    drugs:[
    {
      name:"Atezolizumab",
      dose:1680,
      unit:"mg",
      basis:"flat",
      max:null,
      weightCap:null,
      route:"IV",
      days:"Day 1",
      reducible:false,
      note:"1680 mg IV over 1 hour (subsequent infusions 30 min if first well-tolerated). Max 12 cycles. No dose modifications."
    }
    ],
    labs:{
      baseline:["CBC & Diff", "platelets", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "morning serum cortisol", "chest x-ray"],
      cycle:["CBC & Diff", "platelets", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH"],
      conditional:[
        { label:"If clinically indicated", tests:["chest x-ray", "morning serum cortisol", "lipase", "random glucose", "free T3", "free T4", "serum ACTH levels", "ECG"] }
      ]
    }
  },

  // =========================================================
  // GI (BC Cancer GI protocols)
  // =========================================================

  {
    key:"GI-GIAJCAP", cat:"GI", bcc:true,
    name:"Capecitabine (Adjuvant Colon)",
    cycle:21,
    notes:"Adjuvant therapy of Stage III colon cancer. Low-risk (T1-3/N1): 4 cycles; high-risk (T4 or N2): 8 cycles. BC Cancer GIAJCAP",
    drugs:[
      { name:"Capecitabine", dose:1250, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"PO", days:"Days 1-14 BID", reducible:true, note:"Twice daily; hold for Grade 2+ toxicity until resolved. Reduce to 75% for CrCl 30–50; contraindicated if CrCl <30." }
    ],
    labs:{
      baseline:["CBC & differential", "Creatinine", "ALT, alkaline phosphatase, total bilirubin, albumin", "Sodium, potassium", "DPYD test (not required if previously tested or tolerated fluorouracil/capecitabine)"],
      cycle:["CBC & differential", "Creatinine", "Total bilirubin, ALT"],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA, CA 19-9", "GGT", "ECG"] },
        { label:"If clinically indicated", tests:["CEA, CA 19-9", "Alkaline phosphatase, albumin, GGT", "Sodium, potassium", "ECG"] },
        { label:"Patients on warfarin", tests:["Weekly INR until stable warfarin dose established, then INR prior to each cycle"] }
      ]
    }
  },

  {
    key:"GI-GIAJCAPOX", cat:"GI", bcc:true,
    name:"CAPOX (Adjuvant Colon)",
    cycle:21,
    notes:"Adjuvant therapy of Stage III colon cancer. Low-risk (T1-3/N1): 4 cycles; high-risk (T4 or N2): 8 cycles. BC Cancer GIAJCAPOX",
    drugs:[
      { name:"Oxaliplatin", dose:130, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:true, note:"In 250–500 mL D5W over 2 h. NOT compatible with NS. Neurologic levels: −1N=100, −2N=65 mg/m².", levels:[100, 85] },
      { name:"Capecitabine", dose:1000, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"PO", days:"Days 1–14 BID", reducible:true, note:"Twice daily (total 2000 mg/m²/day). Reduce to 75% for CrCl 30–50; discontinue if CrCl <30.", levels:[750, 500] }
    ],
    labs:{
      baseline:["CBC & differential", "Creatinine", "ALT, alkaline phosphatase, total bilirubin, albumin", "Sodium, potassium", "DPYD test (not required if previously tested or tolerated fluorouracil/capecitabine)"],
      cycle:["CBC & differential", "Creatinine", "Total bilirubin, ALT"],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA, CA 19-9", "GGT", "ECG"] },
        { label:"If clinically indicated", tests:["CEA, CA 19-9", "Alkaline phosphatase, albumin, GGT", "Sodium, potassium", "ECG"] },
        { label:"Patients on warfarin", tests:["Weekly INR until stable warfarin dose established, then INR prior to each cycle"] }
      ]
    }
  },

  {
    key:"GI-GICIRB", cat:"GI", bcc:true,
    name:"XELIRI + Bevacizumab",
    cycle:21,
    notes:"Metastatic colorectal cancer. Irinotecan + bevacizumab + capecitabine until disease progression. BC Cancer GICIRB",
    drugs:[
      { name:"Irinotecan", dose:200, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:true, note:"In 500 mL D5W over 90 min.", levels:[150] },
      { name:"Bevacizumab", dose:7.5, unit:"mg/kg", basis:"weight", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:false, note:"In 100 mL NS over 15 min; recalculate if >10% weight change." },
      { name:"Capecitabine", dose:800, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"PO", days:"Days 1–14 BID", reducible:true, note:"Twice daily for 14 days. DPYD testing required.", levels:[500] }
    ],
    labs:{
      baseline:["CBC & differential", "Creatinine", "ALT, alkaline phosphatase, total bilirubin, albumin", "Sodium, potassium", "DPYD genotyping", "Urinalysis for protein", "Blood pressure"],
      cycle:["CBC & differential", "Creatinine, ALT, total bilirubin", "Blood pressure"],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA", "CA 19-9", "GGT", "ECG"] },
        { label:"Prior to each even-numbered cycle", tests:["Urinalysis for protein"] },
        { label:"Each cycle if clinically indicated", tests:["CEA", "CA 19-9", "Alkaline phosphatase", "Albumin", "GGT", "Sodium, potassium", "ECG"] }
      ]
    }
  },

  {
    key:"GI-GICOXB", cat:"GI", bcc:true,
    name:"XELOX + Bevacizumab",
    cycle:21,
    notes:"Metastatic colorectal cancer. Oxaliplatin + bevacizumab + capecitabine until disease progression. BC Cancer GICOXB",
    drugs:[
      { name:"Oxaliplatin", dose:130, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:true, note:"In 250–500 mL D5W over 2 h. NOT compatible with NS. Neurologic levels: −1N=100, −2N=65 mg/m².", levels:[100, 85] },
      { name:"Bevacizumab", dose:7.5, unit:"mg/kg", basis:"weight", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:false, note:"In 100 mL NS over 15 min; recalculate if >10% weight change." },
      { name:"Capecitabine", dose:1000, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"PO", days:"Days 1–14 BID", reducible:true, note:"Twice daily for 14 days. DPYD testing required.", levels:[750, 500] }
    ],
    labs:{
      baseline:["CBC & differential", "Creatinine", "ALT, alkaline phosphatase, total bilirubin, albumin", "Sodium, potassium", "DPYD genotyping", "Urinalysis for protein", "Blood pressure"],
      cycle:["CBC & differential", "Creatinine, ALT, total bilirubin", "Blood pressure"],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA", "CA 19-9", "GGT", "ECG"] },
        { label:"Prior to each even-numbered cycle", tests:["Urinalysis for protein"] },
        { label:"Each cycle if clinically indicated", tests:["CEA", "CA 19-9", "Alkaline phosphatase", "Albumin", "GGT", "Sodium, potassium", "ECG"] }
      ]
    }
  },

  {
    key:"GI-GIAJFFOX", cat:"GI", bcc:true,
    name:"mFOLFOX6 (Adjuvant Colon)",
    cycle:14,
    notes:"Adjuvant treatment for stage III colon cancer. High-risk (T4/N2): 12 cycles; low-risk (T1-3/N1): 6 cycles (3-month option). BC Cancer GIAJFFOX",
    drugs:[
      { name:"Oxaliplatin", dose:85, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:true, note:"In 250–500 mL D5W over 2h. Not compatible with NS.", levels:[65, 50] },
      { name:"Leucovorin", dose:400, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:false, note:"In 250 mL D5W over 2h, concurrent with oxaliplatin via Y-site." },
      { name:"Fluorouracil", dose:400, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:true, note:"IV bolus push.", levels:[320, 200] },
      { name:"Fluorouracil", dose:2400, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Days 1–2", reducible:true, note:"Continuous infusion over 46h via Baxter LV5 INFUSOR.", levels:[1900, 1500] }
    ],
    labs:{
      baseline:["CBC & differential", "Creatinine", "ALT, alkaline phosphatase, total bilirubin, albumin", "Sodium, potassium", "DPYD test (not required if previously tested or tolerated fluorouracil/capecitabine)"],
      cycle:["CBC & differential", "Creatinine", "Total bilirubin, ALT"],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA, CA 19-9", "GGT", "ECG"] },
        { label:"If clinically indicated", tests:["CEA, CA 19-9", "Alkaline phosphatase, albumin, GGT", "Sodium, potassium", "ECG"] },
        { label:"Patients on warfarin", tests:["Weekly INR during fluorouracil therapy until stable warfarin dose established, then INR prior to each cycle"] }
      ]
    }
  },

  {
    key:"GI-GIAJFL", cat:"GI", bcc:true,
    name:"LV5FU2 (Fluorouracil + Leucovorin)",
    cycle:14,
    notes:"Simplified de Gramont fluorouracil + leucovorin regimen for colorectal cancer. BC Cancer GIAJFL",
    drugs:[
      { name:"Leucovorin", dose:400, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:false, note:"No dose modification; may be omitted if fluorouracil push is omitted." },
      { name:"Fluorouracil", dose:400, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:true, note:"IV bolus push.", levels:[320, 240] },
      { name:"Fluorouracil", dose:2400, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Days 1–2", reducible:true, note:"Continuous infusion over 46h via Baxter LV5 INFUSOR.", levels:[2000, 1600] }
    ],
    labs:{
      baseline:["CBC & differential", "Creatinine", "ALT, alkaline phosphatase, total bilirubin, albumin", "Sodium, potassium", "DPYD test (not required if previously tested or tolerated fluorouracil/capecitabine)"],
      cycle:["CBC & differential", "Creatinine", "Total bilirubin, ALT"],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA, CA 19-9", "GGT", "ECG"] },
        { label:"If clinically indicated", tests:["CEA, CA 19-9", "Alkaline phosphatase, albumin, GGT", "Sodium, potassium", "ECG"] },
        { label:"Patients on warfarin", tests:["Weekly INR during fluorouracil therapy until stable warfarin dose established, then INR prior to each cycle"] }
      ]
    }
  },

  {
    key:"GI-GIAJNIV", cat:"GI", bcc:true,
    name:"Nivolumab (Adjuvant Esophageal/GEJ)",
    cycle:28,
    notes:"Adjuvant nivolumab for resected esophageal or gastroesophageal junction cancer. Maximum 13 cycles (1 year). Toxicity managed per SCIMMUNE. BC Cancer GIAJNIV",
    drugs:[
      { name:"Nivolumab", dose:6, unit:"mg/kg", basis:"weight", max:480, weightCap:null, route:"IV", days:"Day 1", reducible:false, note:"In 50–100 mL NS over 30 min via 0.2 micron filter. Capped at 480 mg." }
    ],
    labs:{
      baseline:["CBC & differential", "Creatinine", "Alkaline phosphatase, ALT, total bilirubin, albumin", "Sodium, potassium", "TSH, morning serum cortisol", "Chest X-ray or CT chest"],
      cycle:["CBC & differential", "Creatinine", "ALT, total bilirubin", "Sodium, potassium", "TSH"],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA, CA 19-9", "Creatine kinase, troponin", "Free T3 and free T4", "GGT, lipase, random glucose", "Serum or urine HCG", "Serum ACTH", "Testosterone, estradiol, FSH, LH", "ECG"] },
        { label:"If clinically indicated", tests:["CEA, CA 19-9", "Morning serum cortisol", "Lipase, random glucose", "Serum or urine HCG", "Free T3 and free T4", "Serum ACTH", "Testosterone, estradiol, FSH, LH", "Alkaline phosphatase, albumin, GGT", "Creatine kinase, troponin", "ECG, chest X-ray"] }
      ]
    }
  },

  {
    key:"GI-GIAJRALOX", cat:"GI", bcc:true,
    name:"Raltitrexed + Oxaliplatin",
    cycle:21,
    notes:"First-line or 5-FU-intolerant metastatic colorectal cancer. Maximum 8 cycles. BC Cancer GIAJRALOX",
    drugs:[
      { name:"Raltitrexed", dose:3, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:true, note:"In 100 mL NS over 15 min. Dose-adjust for renal impairment (CrCl-based): CrCl 55–65 give 75% q4w; CrCl 25–54 give CrCl% q4w; CrCl <25 discontinue." },
      { name:"Oxaliplatin", dose:130, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:true, note:"In 250–500 mL D5W over 2 h. NOT compatible with NS. Neurologic toxicity levels: −1N = 100, −2N = 65 mg/m².", levels:[100, 85] }
    ],
    labs:{
      baseline:["CBC & differential", "Creatinine", "ALT, alkaline phosphatase, total bilirubin, albumin", "Sodium, potassium"],
      cycle:["CBC & differential", "Creatinine", "Total bilirubin, ALT"],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA, CA 19-9", "GGT", "ECG"] },
        { label:"Each cycle if clinically indicated", tests:["CEA, CA 19-9", "Alkaline phosphatase, albumin, GGT", "Sodium, potassium", "ECG"] },
        { label:"Patients on warfarin", tests:["Weekly INR until stable warfarin dose, then INR prior to each cycle"] }
      ]
    }
  },

  {
    key:"GI-GIATZB", cat:"GI", bcc:true,
    name:"Atezolizumab + Bevacizumab (HCC)",
    cycle:21,
    notes:"First-line unresectable hepatocellular carcinoma (IMbrave150). Continue until disease progression or unacceptable toxicity. BC Cancer GIATZB",
    drugs:[
      { name:"Atezolizumab", dose:1200, unit:"mg", basis:"flat", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:false, note:"In 250 mL NS over 1 h (30 min if first infusion tolerated). Alternative: 1875 mg SC into thigh over 7 min. No dose modifications; manage toxicity with treatment delay." },
      { name:"Bevacizumab", dose:15, unit:"mg/kg", basis:"weight", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:false, note:"In 100–250 mL NS over 30 min. Recalculate if >10% weight change. Hold for proteinuria >2 g/24 h; discontinue for >4 g/24 h or hypertensive crisis." }
    ],
    labs:{
      baseline:["CBC & differential", "Creatinine", "ALT, alkaline phosphatase, total bilirubin", "INR", "Albumin", "Sodium, potassium", "TSH, morning serum cortisol", "Blood pressure", "Chest X-ray or CT chest"],
      cycle:["CBC & differential", "Creatinine", "ALT, total bilirubin", "INR", "Albumin", "Sodium, potassium", "TSH", "Blood pressure (pre and post dose cycles 1–3; pre-therapy only thereafter)"],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["AFP", "GGT", "Free T3 and free T4", "Random glucose", "Lipase", "Serum or urine HCG", "Serum ACTH, testosterone, estradiol, FSH, LH", "Creatine kinase, troponin", "ECG"] },
        { label:"Prior to each even-numbered cycle", tests:["Urinalysis for protein"] },
        { label:"24-h urine if proteinuria (dipstick 2+/3+ or ≥1 g/L)", tests:["24-hour urine total protein"] },
        { label:"Each cycle if clinically indicated", tests:["AFP", "Alkaline phosphatase, GGT", "Free T3 and free T4", "Random glucose, morning serum cortisol", "Lipase", "Serum or urine HCG", "Creatine kinase, troponin", "Serum ACTH, testosterone, estradiol, FSH, LH", "ECG", "Chest X-ray"] }
      ]
    }
  },

  {
    key:"GI-GIAVCAP", cat:"GI", bcc:true,
    name:"Capecitabine (Palliative GI)",
    cycle:21,
    notes:"Palliative therapy for advanced GI cancers: colorectal adenocarcinoma; pancreatic adenocarcinoma (post-gemcitabine); biliary tract cancer (≥2nd line); gastric carcinoma not fit for combination chemotherapy. Starting dose 1000 mg/m² BID recommended for elderly, poor PS, or extensively pretreated. Reduce to 75% for CrCl 30–50 mL/min; exclude if CrCl <30. BC Cancer GIAVCAP",
    drugs:[
      { name:"Capecitabine", dose:1250, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"PO", days:"Days 1–14 BID", reducible:true, note:"Starting dose 1000 mg/m² BID for elderly, poor PS, or extensively pretreated. Round per dose banding table." }
    ],
    labs:{
      baseline:["CBC & differential","Creatinine","Total bilirubin, ALT, alkaline phosphatase","Random glucose","DPYD test (omit if previously tested or tolerated fluorouracil/capecitabine)"],
      cycle:["CBC & differential","Creatinine","Total bilirubin, ALT"],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["ECG","GGT","CEA, CA 19-9"] },
        { label:"If clinically indicated", tests:["Alkaline phosphatase","Albumin","GGT","Sodium, potassium","Random glucose","ECG","CEA, CA 19-9"] },
        { label:"Patients on warfarin", tests:["Weekly INR during capecitabine therapy until stable warfarin dose, then prior to each cycle"] }
      ]
    }
  },

  {
    key:"GI-GIAVCAPB", cat:"GI", bcc:true,
    name:"Bevacizumab + Capecitabine",
    cycle:21,
    notes:"Bevacizumab plus capecitabine for first-line metastatic colorectal cancer in elderly patients. BC Cancer GIAVCAPB",
    drugs:[
      { name:"Bevacizumab", dose:7.5, unit:"mg/kg", basis:"weight", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:false, note:"In 100 mL NS over 15 min; recalculate if >10% body weight change" },
      { name:"Capecitabine", dose:1000, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"PO", days:"Days 1-14 BID", reducible:true, note:null }
    ],
    labs:{
      baseline:["CBC & differential", "Creatinine", "ALT, alkaline phosphatase, total bilirubin, albumin", "Sodium, potassium", "DPYD test (not required if previously tested or tolerated fluorouracil/capecitabine)", "Urinalysis for protein", "Blood pressure"],
      cycle:["CBC & differential", "Creatinine", "Total bilirubin, ALT", "Blood pressure"],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA, CA 19-9", "GGT", "ECG"] },
        { label:"Prior to each even-numbered cycle", tests:["Urinalysis for protein"] },
        { label:"If proteinuria 2+/3+ or ≥1 g/L", tests:["24-hour urine for protein"] },
        { label:"Cycles 1–3: blood pressure pre and post dose (subsequent cycles: pre-therapy only)", tests:["Blood pressure post-dose"] },
        { label:"Each cycle if clinically indicated", tests:["CEA, CA 19-9", "Alkaline phosphatase, albumin, GGT", "Sodium, potassium", "ECG"] },
        { label:"Patients on warfarin", tests:["Weekly INR until stable warfarin dose, then INR prior to each cycle"] }
      ]
    }
  },

  {
    key:"GI-GIAVCETIR", cat:"GI", bcc:true,
    name:"Cetuximab + Irinotecan",
    cycle:14,
    notes:"Cetuximab plus irinotecan for irinotecan-refractory metastatic colorectal cancer (RAS/RAF wild-type). Biweekly schedule. BC Cancer GIAVCETIR",
    drugs:[
      { name:"Cetuximab", dose:500, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:true, note:"Cycle 1: over 2h with 1h post-infusion observation; subsequent cycles over 1h", levels:[400, 300] },
      { name:"Irinotecan", dose:180, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:true, note:"In 500 mL D5W over 90 min", levels:[150, 120] }
    ],
    labs:{
      baseline:["CBC & differential", "Creatinine", "ALT, alkaline phosphatase, total bilirubin, albumin", "Sodium, potassium"],
      cycle:["CBC & differential", "Creatinine", "Total bilirubin, ALT", "Magnesium"],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA, CA 19-9", "GGT", "Magnesium, calcium", "ECG"] },
        { label:"Each cycle if clinically indicated", tests:["CEA, CA 19-9", "Alkaline phosphatase, albumin, calcium, GGT", "Sodium, potassium", "ECG"] }
      ]
    }
  },

  {
    key:"GI-GIAVCRT", cat:"GI", bcc:true,
    name:"Capecitabine + Pelvic RT (Rectal)",
    cycle:null,
    notes:"Capecitabine concurrent with pelvic radiation therapy for locally advanced rectal cancer. Reduce to 75% for CrCl 30–49; hold for CrCl <30. BC Cancer GIAVCRT",
    drugs:[
      { name:"Capecitabine", dose:825, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"PO", days:"BID daily during RT", reducible:true, note:"Reduce to 75% for CrCl 30–49 mL/min; hold for CrCl <30." }
    ],
    labs:{
      baseline:["CBC & differential", "Creatinine", "ALT, alkaline phosphatase, total bilirubin, albumin", "Sodium, potassium", "DPYD test (not required if previously tested or tolerated fluorouracil/capecitabine)"],
      cycle:["CBC & differential (weekly during RT)", "Creatinine (weekly during RT)"],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA, CA 19-9", "GGT", "ECG"] },
        { label:"Weekly during RT if clinically indicated", tests:["Total bilirubin, ALT"] },
        { label:"If clinically indicated", tests:["CEA, CA 19-9", "ALT, alkaline phosphatase, total bilirubin, albumin, GGT", "Sodium, potassium", "ECG"] },
        { label:"Patients on warfarin", tests:["Weekly INR during capecitabine therapy until stable warfarin dose established"] }
      ]
    }
  },

  {
    key:"GI-GIAVDOC", cat:"GI", bcc:true,
    name:"Docetaxel (Oesophagogastric)",
    cycle:21,
    notes:"Docetaxel monotherapy for refractory oesophagogastric adenocarcinoma (COUGAR-02). BC Cancer GIAVDOC",
    drugs:[
      { name:"DOCEtaxel", dose:75, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:true, note:"Reduce to 55 mg/m² for grade 4 neutropenia >7 days. Dexamethasone premedication required." }
    ],
    labs:{
      baseline:["CBC & differential", "Creatinine", "ALT, alkaline phosphatase, total bilirubin, albumin", "Sodium, potassium"],
      cycle:["CBC & differential", "Creatinine", "Total bilirubin, ALT"],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA, CA 19-9", "GGT", "ECG"] },
        { label:"Each cycle if clinically indicated", tests:["CEA, CA 19-9", "Alkaline phosphatase, albumin, GGT", "Sodium, potassium", "ECG"] },
        { label:"Patients on warfarin", tests:["Weekly INR during DOCEtaxel therapy until stable warfarin dose established, then INR prior to each cycle"] }
      ]
    }
  },

  {
    key:"GI-GIAVDUR4", cat:"GI", bcc:true,
    name:"Durvalumab Maintenance (Biliary)",
    cycle:28,
    notes:"Durvalumab maintenance for advanced biliary tract cancer following GIAVDURPG induction (8 cycles). No dose reductions; toxicity managed by delay. BC Cancer GIAVDUR4",
    drugs:[
      { name:"Durvalumab", dose:20, unit:"mg/kg", basis:"weight", max:1500, weightCap:null, route:"IV", days:"Day 1", reducible:false, note:"Cap 1500 mg; 0.2 micron in-line filter. No dose reductions — manage toxicity by delay." }
    ],
    labs:{
      baseline:["CBC & differential", "Creatinine", "Sodium, potassium", "Total bilirubin, ALT", "TSH"],
      cycle:["CBC & differential, platelets", "Creatinine", "Sodium, potassium", "Total bilirubin, ALT", "TSH"],
      conditional:[
        { label:"If clinically indicated", tests:["Alkaline phosphatase, albumin", "Morning serum cortisol", "Lipase, random glucose", "Serum or urine HCG", "Free T3 and free T4", "Creatine kinase, troponin", "Serum ACTH", "Testosterone, estradiol, FSH, LH", "GGT", "CEA, CA 19-9", "ECG, chest X-ray"] }
      ]
    }
  },

  {
    key:"GI-GIAVDURPG", cat:"GI", bcc:true,
    name:"Durvalumab + Gemcitabine + Cisplatin (Biliary)",
    cycle:21,
    notes:"Advanced biliary tract cancer. Durvalumab + gemcitabine + cisplatin for 8 cycles, then durvalumab maintenance (GIAVDUR4). CARBOplatin substitutes if cisplatin intolerant. BC Cancer GIAVDURPG",
    drugs:[
      { name:"Durvalumab", dose:20, unit:"mg/kg", basis:"weight", max:1500, weightCap:null, route:"IV", days:"Day 1", reducible:false, note:"Cap 1500 mg; 0.2 micron in-line filter. No dose reductions — manage toxicity by delay." },
      { name:"Gemcitabine", dose:1000, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Days 1 and 8", reducible:true, note:"Reduce to 75% if ANC 0.5–<1.0 or platelets 75–<100; omit Day 8 if ANC <0.5 or platelets <75." },
      { name:"CISplatin", dose:25, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Days 1 and 8", reducible:true, note:"Reduce to 50% for CrCl 45–59; omit Day 8 and delay if CrCl <45. Substitute CARBOplatin AUC 5 if cisplatin intolerant." },
      { name:"CARBOplatin", dose:5, unit:"AUC", basis:"auc", max:null, weightCap:null, route:"IV", days:"Day 1 (substitute for CISplatin)", reducible:true, note:"Alternative to CISplatin. CrCl capped at 125 mL/min for Calvert formula." }
    ],
    labs:{
      baseline:["CBC & differential", "Creatinine", "Sodium, potassium", "ALT, alkaline phosphatase, total bilirubin, albumin", "TSH, morning serum cortisol", "Chest X-ray or CT chest"],
      cycle:["CBC & differential", "Creatinine", "Sodium, potassium", "ALT, total bilirubin", "TSH"],
      conditional:[
        { label:"Day 8", tests:["CBC & differential"] },
        { label:"Day 8 if using CISplatin", tests:["Creatinine"] }
      ]
    }
  },

  {
    key:"GI-GIAVFIROXB", cat:"GI", bcc:true,
    name:"FOLFOXIRI + Bevacizumab",
    cycle:14,
    notes:"First-line metastatic colorectal cancer. Oxaliplatin + irinotecan + fluorouracil/leucovorin + bevacizumab. BC Cancer GIAVFIROXB",
    drugs:[
      { name:"Oxaliplatin", dose:85, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:true, note:"In 250–500 mL D5W over 2 hours. Not compatible with NS.", levels:[65, 50] },
      { name:"Leucovorin", dose:400, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:false, note:"In 250 mL D5W over 1.5 hours. May infuse concurrently with irinotecan via Y-connector. No dose modifications." },
      { name:"Irinotecan", dose:180, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:true, note:"In 500 mL D5W over 1.5 hours. May infuse concurrently with leucovorin via Y-connector.", levels:[150, 120] },
      { name:"Fluorouracil", dose:400, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:true, note:"IV push after leucovorin.", levels:[320, 200] },
      { name:"Bevacizumab", dose:5, unit:"mg/kg", basis:"weight", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:false, note:"In 100 mL NS over 10 minutes. Recalculate if >10% body weight change." },
      { name:"Fluorouracil", dose:2400, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Days 1–2", reducible:true, note:"Continuous infusion over 46 hours via Baxter LV5 INFUSOR.", levels:[2000, 1600] }
    ],
    labs:{
      baseline:["CBC & differential", "Creatinine", "ALT, alkaline phosphatase, total bilirubin", "Albumin", "Sodium, potassium", "DPYD genotyping", "Urinalysis for protein", "Blood pressure"],
      cycle:["CBC & differential", "Creatinine", "ALT, total bilirubin", "Blood pressure"],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA", "CA 19-9", "GGT", "ECG"] },
        { label:"Each even-numbered cycle", tests:["Urinalysis for protein"] },
        { label:"Each cycle if clinically indicated", tests:["CEA", "CA 19-9", "Alkaline phosphatase", "Albumin", "GGT", "Sodium, potassium", "ECG"] }
      ]
    }
  },

  {
    key:"GI-GIAVFL", cat:"GI", bcc:true,
    name:"Fluorouracil + Leucovorin (FL)",
    cycle:14,
    notes:"Advanced colorectal cancer. Fluorouracil/leucovorin biweekly backbone. BC Cancer GIAVFL",
    drugs:[
      { name:"Leucovorin", dose:400, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:false, note:"In 250 mL D5W over 1.5 hours. No dose modifications." },
      { name:"Fluorouracil", dose:400, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:true, note:"IV push after leucovorin.", levels:[320, 240] },
      { name:"Fluorouracil", dose:2400, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Days 1–2", reducible:true, note:"Continuous infusion over 46 hours via Baxter LV5 INFUSOR.", levels:[2000, 1600] }
    ],
    labs:{
      baseline:["CBC & differential", "Creatinine", "ALT, alkaline phosphatase, total bilirubin, albumin", "Sodium, potassium", "DPYD test (not required if previously tested or tolerated fluorouracil/capecitabine)"],
      cycle:["CBC & differential", "Creatinine", "Total bilirubin, ALT"],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA, CA 19-9", "GGT", "ECG"] },
        { label:"Each cycle if clinically indicated", tests:["CEA, CA 19-9", "Alkaline phosphatase, albumin, GGT", "Sodium, potassium", "ECG"] },
        { label:"Patients on warfarin", tests:["Weekly INR during fluorouracil therapy until stable warfarin dose established, then INR prior to each cycle"] }
      ]
    }
  },

  {
    key:"GI-GIAVPANI", cat:"GI", bcc:true,
    name:"Panitumumab",
    cycle:14,
    notes:"Metastatic colorectal cancer (RAS/BRAF wild-type). Panitumumab monotherapy. BC Cancer GIAVPANI",
    drugs:[
      { name:"Panitumumab", dose:6, unit:"mg/kg", basis:"weight", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:true, note:"In 100 mL NS over 1 hour using 0.2 micron in-line filter. If tolerated, over 30 minutes in subsequent cycles." }
    ],
    labs:{
      baseline:["CBC & differential", "Creatinine", "ALT, alkaline phosphatase, total bilirubin, albumin", "Sodium, potassium"],
      cycle:["CBC & differential", "Creatinine", "Total bilirubin, ALT", "Magnesium"],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA, CA 19-9", "GGT", "Magnesium, calcium", "ECG"] },
        { label:"Each cycle if clinically indicated", tests:["CEA, CA 19-9", "Alkaline phosphatase, albumin, GGT", "Calcium", "Sodium, potassium", "ECG"] }
      ]
    }
  },

  {
    key:"GI-GIAVPEMPG", cat:"GI", bcc:true,
    name:"Pembrolizumab + Gemcitabine + CISplatin (Biliary)",
    cycle:21,
    notes:"First-line advanced biliary tract cancer. Cycles 1–8: pembrolizumab + gemcitabine + cisplatin. Cycle 9+: pembrolizumab maintenance ± gemcitabine. CARBOplatin substitutes if CrCl <45. BC Cancer GIAVPEMPG",
    drugs:[
      { name:"Pembrolizumab", dose:2, unit:"mg/kg", basis:"weight", max:200, weightCap:null, route:"IV", days:"Day 1", reducible:false, note:"Max 200 mg; dose banded per BC Cancer table. No dose reductions — manage immune-related toxicity with delays." },
      { name:"Gemcitabine", dose:1000, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Days 1 and 8", reducible:true, note:null },
      { name:"CISplatin", dose:25, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Days 1 and 8", reducible:true, note:"Maximum 8 cycles. Substitute CARBOplatin AUC 5 Day 1 if CrCl <45 mL/min." }
    ],
    labs:{
      baseline:["CBC & differential", "Creatinine", "Sodium, potassium", "ALT, alkaline phosphatase, total bilirubin, albumin", "TSH, morning serum cortisol", "Chest X-ray or CT chest"],
      cycle:["CBC & differential", "Creatinine", "ALT, total bilirubin", "Sodium, potassium", "TSH"],
      conditional:[
        { label:"Day 8 (Cycles 1–8)", tests:["CBC & differential"] },
        { label:"Day 8 if CISplatin given (Cycles 1–8)", tests:["Creatinine"] },
        { label:"Day 8 if gemcitabine given (Cycle 9+)", tests:["CBC & differential"] },
        { label:"Baseline if clinically indicated", tests:["GGT", "Lipase", "Random glucose", "HCG", "ACTH, testosterone, estradiol, FSH, LH", "Creatine kinase, troponin", "Free T3, free T4", "ECG", "CEA", "CA 19-9"] }
      ]
    }
  },

  {
    key:"GI-GIAVPG", cat:"GI", bcc:true,
    name:"Gemcitabine + CISplatin (Biliary/Pancreatic)",
    cycle:21,
    notes:"Gemcitabine plus cisplatin for advanced biliary tract or pancreatic cancer. CARBOplatin AUC 5 Day 1 may substitute for CISplatin. BC Cancer GIAVPG",
    drugs:[
      { name:"Gemcitabine", dose:1000, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Days 1 and 8", reducible:true, note:null },
      { name:"CISplatin", dose:25, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Days 1 and 8", reducible:true, note:"Alternative: CARBOplatin AUC 5 Day 1 only. Reduce to 50% for CrCl 45–59; omit Day 8 if CrCl <45." }
    ],
    labs:{
      baseline:["CBC & differential", "Creatinine", "ALT, alkaline phosphatase, total bilirubin, albumin", "Sodium, potassium", "Random glucose, HbA1c"],
      cycle:["CBC & differential", "Creatinine", "Total bilirubin, ALT"],
      conditional:[
        { label:"Day 8", tests:["CBC & differential"] },
        { label:"Day 8 if using CISplatin", tests:["Creatinine"] },
        { label:"Baseline if clinically indicated", tests:["CEA, CA 19-9", "GGT", "ECG"] },
        { label:"Each cycle if clinically indicated", tests:["Alkaline phosphatase, albumin, GGT", "Sodium, potassium", "Random glucose, HbA1c", "CEA, CA 19-9", "ECG"] },
        { label:"Patients on warfarin", tests:["Weekly INR during therapy until stable warfarin dose established, then INR prior to each cycle"] }
      ]
    }
  },

  {
    key:"GI-GIAVRALIR", cat:"GI", bcc:true,
    name:"Raltitrexed + Irinotecan",
    cycle:21,
    notes:"Advanced colorectal or biliary tract cancer. Reduce raltitrexed proportional to CrCl if 25–65 mL/min; discontinue if CrCl <25. BC Cancer GIAVRALIR",
    drugs:[
      { name:"Raltitrexed", dose:3, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:true, note:"CrCl-based dose adjustment: give CrCl% of dose q4w if CrCl 25–65; discontinue if <25." },
      { name:"Irinotecan", dose:180, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:true, note:"Provide loperamide for delayed diarrhea management.", levels:[150, 120] }
    ],
    labs:{
      baseline:["CBC & differential", "Creatinine", "ALT, alkaline phosphatase, total bilirubin, albumin", "Sodium, potassium"],
      cycle:["CBC & differential", "Creatinine, total bilirubin, ALT"],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA, CA 19-9", "GGT", "ECG"] },
        { label:"Each cycle if clinically indicated", tests:["CEA, CA 19-9", "Alkaline phosphatase, albumin, GGT", "Sodium, potassium", "ECG"] }
      ]
    }
  },

  {
    key:"GI-GIAVRALOX", cat:"GI", bcc:true,
    name:"Raltitrexed + Oxaliplatin",
    cycle:21,
    notes:"Advanced colorectal or biliary tract cancer, particularly 5-FU intolerant. Monitor for cumulative oxaliplatin neurotoxicity. BC Cancer GIAVRALOX",
    drugs:[
      { name:"Raltitrexed", dose:3, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:true, note:null },
      { name:"Oxaliplatin", dose:130, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:true, note:"In D5W only — incompatible with NS. Neurologic levels: −1N=100, −2N=65 mg/m². Extend infusion to 6h for pharyngo-laryngeal dysesthesias.", levels:[100, 85] }
    ],
    labs:{
      baseline:["CBC & differential", "Creatinine", "ALT, alkaline phosphatase, total bilirubin, albumin", "Sodium, potassium"],
      cycle:["CBC & differential", "Creatinine, total bilirubin, ALT"],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA, CA 19-9", "GGT", "ECG"] },
        { label:"Each cycle if clinically indicated", tests:["CEA, CA 19-9", "Alkaline phosphatase, albumin, GGT", "Sodium, potassium", "ECG"] },
        { label:"Patients on warfarin", tests:["Weekly INR until stable warfarin dose, then INR prior to each cycle"] }
      ]
    }
  },

  {
    key:"GI-GIAVTTB", cat:"GI", bcc:true,
    name:"Trifluridine-Tipiracil + Bevacizumab",
    cycle:28,
    notes:"Previously treated metastatic colorectal cancer. Trifluridine-tipiracil plus bevacizumab. BC Cancer GIAVTTB",
    drugs:[
      { name:"Bevacizumab", dose:5, unit:"mg/kg", basis:"weight", max:null, weightCap:null, route:"IV", days:"Days 1, 15", reducible:true, note:"Infuse over 10 min; recalculate dose if >10% body weight change." },
      { name:"Trifluridine-tipiracil", dose:35, unit:"mg/m²", basis:"bsa", max:80, weightCap:null, route:"PO", days:"Days 1–5, 8–12 (BID)", reducible:true, note:"Dose based on trifluridine component; max 80 mg/dose; round to nearest 5 mg. Level −3 = 20 mg/m².", levels:[30, 25] }
    ],
    labs:{
      baseline:["CBC & differential", "Creatinine", "ALT, alkaline phosphatase, total bilirubin", "Albumin", "Urinalysis for protein", "Blood pressure"],
      cycle:["CBC & differential", "Creatinine", "ALT, total bilirubin", "Urinalysis for protein", "Blood pressure"],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA", "CA 19-9", "GGT", "ECG"] },
        { label:"Day 15 Cycle 1 (and if dose modification in subsequent cycles)", tests:["CBC & differential"] }
      ]
    }
  },

  {
    key:"GI-GIAVTZCAP", cat:"GI", bcc:true,
    name:"CAPTEM (Capecitabine + Temozolomide)",
    cycle:28,
    notes:"Gastroenteropancreatic neuroendocrine tumours. Capecitabine Days 1–14 plus temozolomide Days 10–14. BC Cancer GIAVTZCAP",
    drugs:[
      { name:"Capecitabine", dose:750, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"PO", days:"Days 1–14 (BID)", reducible:true, note:"Total 1500 mg/m²/day. Dose per DPYD activity score." },
      { name:"Temozolomide", dose:200, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"PO", days:"Days 10–14 (once daily)", reducible:true, note:null }
    ],
    labs:{
      baseline:["CBC & differential", "Creatinine", "ALT, alkaline phosphatase, total bilirubin, albumin", "Sodium, potassium", "Random glucose", "DPYD test (not required if previously tested or tolerated fluorouracil/capecitabine)"],
      cycle:["CBC & differential", "Creatinine, total bilirubin, ALT"],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["24-hour urine 5-HIAA", "GGT", "ECG"] },
        { label:"Each cycle if clinically indicated", tests:["Alkaline phosphatase, albumin, GGT", "Sodium, potassium", "Random glucose", "24-hour urine 5-HIAA", "ECG"] },
        { label:"Patients on warfarin", tests:["Weekly INR until stable warfarin dose, then INR prior to each cycle"] }
      ]
    }
  },

  {
    key:"GI-GIBAJCAP", cat:"GI", bcc:true,
    name:"Capecitabine (Adjuvant Biliary)",
    cycle:21,
    notes:"Adjuvant capecitabine for biliary tract cancer following resection. 8 cycles total. BC Cancer GIBAJCAP",
    drugs:[
      { name:"Capecitabine", dose:1000, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"PO", days:"Days 1–14 (BID)", reducible:true, note:"Starting dose; may escalate to 1250 mg/m² BID based on tolerance. Dose per DPYD activity score." }
    ],
    labs:{
      baseline:["CBC & differential", "Creatinine", "ALT, alkaline phosphatase, total bilirubin, albumin", "Sodium, potassium", "Random glucose", "DPYD test (not required if previously tested or tolerated fluorouracil/capecitabine)"],
      cycle:["CBC & differential", "Creatinine, total bilirubin, ALT"],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["ECG", "GGT", "CEA, CA 19-9"] },
        { label:"Each cycle if clinically indicated", tests:["Alkaline phosphatase, albumin, GGT", "Sodium, potassium", "Random glucose", "ECG", "CEA, CA 19-9"] },
        { label:"Patients on warfarin", tests:["Weekly INR during capecitabine therapy until stable, then INR prior to each cycle"] }
      ]
    }
  },

  {
    key:"GI-GICAPIRI", cat:"GI", bcc:true,
    name:"Capecitabine + Irinotecan",
    cycle:21,
    notes:"Metastatic colorectal cancer. Irinotecan IV Day 1 plus capecitabine BID Days 1–14. DPYD testing required. BC Cancer GICAPIRI",
    drugs:[
      { name:"Irinotecan", dose:200, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:true, note:"In 500 mL D5W over 90 minutes.", levels:[150] },
      { name:"Capecitabine", dose:800, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"PO", days:"Days 1–14 BID", reducible:true, note:"Reduce to 75% for CrCl 30–50 mL/min; discontinue if CrCl <30.", levels:[500] }
    ],
    labs:{
      baseline:["CBC & differential", "Creatinine", "ALT, alkaline phosphatase, total bilirubin", "Albumin", "Sodium, potassium", "DPYD genotyping"],
      cycle:["CBC & differential", "Creatinine", "ALT, total bilirubin"],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA", "CA 19-9", "GGT", "ECG"] },
        { label:"Each cycle if clinically indicated", tests:["CEA", "CA 19-9", "Alkaline phosphatase", "Albumin", "GGT", "Sodium, potassium", "ECG"] },
        { label:"Patients on warfarin", tests:["Weekly INR until stable, then INR each cycle"] }
      ]
    }
  },

  {
    key:"GI-GICAPOX", cat:"GI", bcc:true,
    name:"CAPOX (Capecitabine + Oxaliplatin)",
    cycle:21,
    notes:"Metastatic colorectal cancer and advanced biliary tract cancer. Oxaliplatin IV Day 1 plus capecitabine BID Days 1–14. DPYD testing required. BC Cancer GICAPOX",
    drugs:[
      { name:"Oxaliplatin", dose:130, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:true, note:"In 250–500 mL D5W over 2 hours. NOT compatible with NS. Neurologic levels: −1N=100, −2N=65 mg/m².", levels:[100, 85] },
      { name:"Capecitabine", dose:1000, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"PO", days:"Days 1–14 BID", reducible:true, note:"Reduce to 75% for CrCl 30–50 mL/min; discontinue if CrCl <30.", levels:[750, 500] }
    ],
    labs:{
      baseline:["CBC & differential", "Creatinine", "ALT, alkaline phosphatase, total bilirubin, albumin", "Sodium, potassium", "DPYD test (not required if previously tested or tolerated fluorouracil/capecitabine)"],
      cycle:["CBC & differential", "Creatinine, total bilirubin, ALT"],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA, CA 19-9", "GGT", "ECG"] },
        { label:"Each cycle if clinically indicated", tests:["Alkaline phosphatase, albumin, GGT", "Sodium, potassium", "ECG", "CEA, CA 19-9"] },
        { label:"Patients on warfarin", tests:["Weekly INR until stable warfarin dose, then INR prior to each cycle"] }
      ]
    }
  },

  {
    key:"GI-GIEFFOXRT", cat:"GI", bcc:true,
    name:"EFFOX + Radiation (Esophageal)",
    cycle:14,
    notes:"Combined modality therapy for locally advanced squamous cell or adenocarcinoma of the esophagus; curative intent; 6 cycles total (cycles 1–3 concurrent with RT, cycles 4–6 post-RT). (GIEFFOXRT). BC Cancer GIEFFOXRT.",
    drugs:[
      { name:"Oxaliplatin", dose:85, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:true, note:"IV in 250–500 mL D5W over 2 hours. Not compatible with NS.", levels:[65, 50] },
      { name:"Leucovorin", dose:200, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:false, note:"IV in 250 mL D5W over 2 hours concurrent with oxaliplatin via Y-site." },
      { name:"Fluorouracil", dose:400, unit:"mg/m²", basis:"bsa", max:null, route:"IV push", days:"Day 1", reducible:true, note:"IV bolus after leucovorin.", levels:[320, 200] },
      { name:"Fluorouracil", dose:1600, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Days 1–2", reducible:true, note:"Continuous infusion over 46 hours via Baxter LV5 INFUSOR.", levels:[1200, 1000] }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "ALT",
        "alkaline phosphatase",
        "total bilirubin",
        "albumin",
        "sodium",
        "potassium",
        "DPYD test"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA", "CA 19-9", "GGT", "ECG", "SCC"] }
      ]
    }
  },

  {
    key:"GI-GIENACTRT", cat:"GI", bcc:true,
    name:"Carboplatin + Paclitaxel + Radiation (Esophageal Neoadjuvant)",
    cycle:7,
    notes:"Neoadjuvant chemoradiation for resectable esophageal or gastroesophageal junction carcinoma; weekly carboplatin AUC 2 + paclitaxel 50 mg/m² × 5 weeks concurrent with RT (41.4 Gy in 23 fractions). (GIENACTRT). BC Cancer GIENACTRT.",
    drugs:[
      { name:"Paclitaxel", dose:50, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Weekly × 5 weeks", reducible:true, note:"IV in NS 100–250 mL over 1 hour; use non-DEHP bag and tubing with 0.2 micron in-line filter. Give first before carboplatin." },
      { name:"Carboplatin", dose:2, unit:"AUC", basis:"auc", max:null, route:"IV", days:"Weekly × 5 weeks", reducible:true, note:"IV in NS 100–250 mL over 30 minutes. Calvert formula; GFR capped at 125 mL/min." }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "ALT",
        "alkaline phosphatase",
        "total bilirubin",
        "albumin",
        "sodium",
        "potassium"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA", "CA 19-9", "GGT", "ECG"] }
      ]
    }
  },

  {
    key:"GI-GIENDO2", cat:"GI", bcc:true,
    name:"Streptozocin + Doxorubicin (Pancreatic NET)",
    cycle:42,
    notes:"Palliative therapy for metastatic or unresectable pancreatic endocrine tumours; streptozocin requires Health Canada Special Access Programme approval; 3–6 cycles. Preferred agent is GIAVTZCAP. (GIENDO2). BC Cancer GIENDO2.",
    drugs:[
      { name:"Streptozocin", dose:500, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Days 1–5", reducible:true, note:"IV in 100 mL NS over 15 minutes." },
      { name:"Doxorubicin", dose:50, unit:"mg/m²", basis:"bsa", max:null, route:"IV push", days:"Days 1 and 22", reducible:true, note:"If bilirubin 25–50 µmol/L: reduce to 50%. If bilirubin >50: discontinue and consider substituting fluorouracil 400 mg/m²/day × 5 days IV push." }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "ALT",
        "alkaline phosphatase",
        "total bilirubin",
        "albumin",
        "sodium",
        "potassium",
        "random glucose",
        "DPYD test"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["24-hour urine 5-HIAA", "GGT", "ECG"] }
      ]
    }
  },

  {
    key:"GI-GIFFIRB", cat:"GI", bcc:true,
    name:"FOLFIRI + Bevacizumab (Colorectal)",
    cycle:14,
    notes:"Palliative combination chemotherapy for locally advanced or metastatic colorectal adenocarcinoma (also appendix/small bowel); first-line or after progression; bevacizumab not used sequentially with panitumumab. (GIFFIRB). BC Cancer GIFFIRB.",
    drugs:[
      { name:"Irinotecan", dose:180, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:true, note:"IV in 500 mL D5W over 90 minutes. Concurrent with leucovorin via Y-connector.", levels:[150, 120] },
      { name:"Leucovorin", dose:400, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:false, note:"IV in 250 mL D5W over 90 minutes concurrent with irinotecan via Y-connector." },
      { name:"Fluorouracil", dose:400, unit:"mg/m²", basis:"bsa", max:null, route:"IV push", days:"Day 1", reducible:true, note:"Optional in advanced setting; may be omitted.", levels:[320, 240] },
      { name:"Bevacizumab", dose:5, unit:"mg/kg", basis:"weight", max:null, route:"IV", days:"Day 1", reducible:false, note:"IV in 100 mL NS over 10 minutes. Recalculate if >10% body weight change." },
      { name:"Fluorouracil", dose:2400, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Days 1–2", reducible:true, note:"Continuous infusion over 46 hours via Baxter LV5 INFUSOR.", levels:[2000, 1600] }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "ALT",
        "alkaline phosphatase",
        "total bilirubin",
        "albumin",
        "sodium",
        "potassium",
        "DPYD test",
        "urinalysis for protein",
        "blood pressure"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT",
        "blood pressure"
      ],
      conditional:[
        { label:"Every even cycle", tests:["urinalysis for protein"] }
      ]
    }
  },

  {
    key:"GI-GIFFIRPAN", cat:"GI", bcc:true,
    name:"FOLFIRI + Panitumumab (Colorectal)",
    cycle:14,
    notes:"Palliative combination chemotherapy for metastatic colorectal adenocarcinoma; wild-type RAS and BRAF required; left-sided tumours or bevacizumab-ineligible patients. (GIFFIRPAN). BC Cancer GIFFIRPAN.",
    drugs:[
      { name:"Panitumumab", dose:6, unit:"mg/kg", basis:"weight", max:null, route:"IV", days:"Day 1", reducible:true, note:"IV in NS 100 mL over 1 hour (first dose); subsequent doses over 30 minutes if tolerated. Use 0.2 micron in-line filter.", levels:[4.8, 3.6] },
      { name:"Irinotecan", dose:180, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:true, note:"IV in 500 mL D5W over 90 minutes. Concurrent with leucovorin via Y-connector.", levels:[150, 120] },
      { name:"Leucovorin", dose:400, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:false, note:"IV in 250 mL D5W over 90 minutes concurrent with irinotecan via Y-connector." },
      { name:"Fluorouracil", dose:400, unit:"mg/m²", basis:"bsa", max:null, route:"IV push", days:"Day 1", reducible:true, note:"Optional in advanced setting; may be omitted.", levels:[320, 240] },
      { name:"Fluorouracil", dose:2400, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Days 1–2", reducible:true, note:"Continuous infusion over 46 hours via Baxter LV5 INFUSOR.", levels:[2000, 1600] }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "ALT",
        "alkaline phosphatase",
        "total bilirubin",
        "albumin",
        "sodium",
        "potassium",
        "DPYD test"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT",
        "magnesium"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA", "CA 19-9", "GGT", "magnesium", "calcium", "ECG"] }
      ]
    }
  },

  {
    key:"GI-GIFFOXB", cat:"GI", bcc:true,
    name:"FOLFOX + Bevacizumab (Colorectal)",
    cycle:14,
    notes:"Palliative combination chemotherapy for locally advanced or metastatic colorectal adenocarcinoma (also appendix/small bowel); first-line or after progression; bevacizumab not used sequentially with panitumumab. (GIFFOXB). BC Cancer GIFFOXB.",
    drugs:[
      { name:"Oxaliplatin", dose:85, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:true, note:"IV in 250–500 mL D5W over 2 hours via Y-site with leucovorin. Not compatible with NS.", levels:[65, 50] },
      { name:"Leucovorin", dose:400, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:false, note:"IV in 250 mL D5W over 2 hours concurrent with oxaliplatin via Y-site." },
      { name:"Fluorouracil", dose:400, unit:"mg/m²", basis:"bsa", max:null, route:"IV push", days:"Day 1", reducible:true, note:"Optional in advanced setting; may be omitted.", levels:[320, 200] },
      { name:"Bevacizumab", dose:5, unit:"mg/kg", basis:"weight", max:null, route:"IV", days:"Day 1", reducible:false, note:"IV in 100 mL NS over 10 minutes after fluorouracil IV push. Recalculate dose if >10% body weight change." },
      { name:"Fluorouracil", dose:2400, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Days 1–2", reducible:true, note:"Continuous infusion over 46 hours via Baxter LV5 INFUSOR.", levels:[2000, 1600] }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "ALT",
        "alkaline phosphatase",
        "total bilirubin",
        "albumin",
        "sodium",
        "potassium",
        "DPYD test",
        "urinalysis for protein",
        "blood pressure"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT",
        "blood pressure"
      ],
      conditional:[
        { label:"Every even cycle", tests:["urinalysis for protein"] }
      ]
    }
  },

  {
    key:"GI-GIFFOXPAN", cat:"GI", bcc:true,
    name:"FOLFOX + Panitumumab (Colorectal)",
    cycle:14,
    notes:"Palliative combination chemotherapy for metastatic colorectal adenocarcinoma; wild-type RAS required; left-sided tumours or bevacizumab-ineligible patients. (GIFFOXPAN). BC Cancer GIFFOXPAN.",
    drugs:[
      { name:"Panitumumab", dose:6, unit:"mg/kg", basis:"weight", max:null, route:"IV", days:"Day 1", reducible:true, note:"IV in NS 100 mL over 1 hour with 0.2 micron in-line filter; subsequent doses over 30 minutes if tolerated.", levels:[4.8, 3.6] },
      { name:"Oxaliplatin", dose:85, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:true, note:"IV in D5W 250–500 mL over 2 hours via Y-site with leucovorin. Not compatible with NS.", levels:[65, 50] },
      { name:"Leucovorin", dose:400, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:false, note:"IV in D5W 250 mL over 2 hours concurrent with oxaliplatin via Y-site." },
      { name:"Fluorouracil", dose:400, unit:"mg/m²", basis:"bsa", max:null, route:"IV push", days:"Day 1", reducible:true, note:"Optional in advanced setting; may be omitted.", levels:[320, 200] },
      { name:"Fluorouracil", dose:2400, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Days 1–2", reducible:true, note:"Continuous infusion over 46 hours via Baxter LV5 INFUSOR.", levels:[2000, 1600] }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "ALT",
        "alkaline phosphatase",
        "total bilirubin",
        "albumin",
        "sodium",
        "potassium",
        "DPYD test"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT",
        "magnesium"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA", "CA 19-9", "GGT", "magnesium", "calcium", "ECG"] }
      ]
    }
  },

  {
    key:"GI-GIFIRINOX", cat:"GI", bcc:true,
    name:"FOLFIRINOX (Pancreatic)",
    cycle:14,
    notes:"Palliative combination chemotherapy for locally advanced or metastatic pancreatic adenocarcinoma; first-line; ECOG 0–1; not used sequentially with GIPGEMABR. (GIFIRINOX). BC Cancer GIFIRINOX.",
    drugs:[
      { name:"Oxaliplatin", dose:85, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:true, note:"IV in 250–500 mL D5W over 2 hours. Not compatible with NS.", levels:[65, 50] },
      { name:"Leucovorin", dose:400, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:false, note:"IV in 250 mL D5W over 90 minutes concurrent with irinotecan via Y-connector." },
      { name:"Irinotecan", dose:180, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:true, note:"IV in 500 mL D5W over 90 minutes concurrent with leucovorin via Y-connector.", levels:[150, 120] },
      { name:"Fluorouracil", dose:400, unit:"mg/m²", basis:"bsa", max:null, route:"IV push", days:"Day 1", reducible:true, note:"Optional in advanced setting; may be omitted.", levels:[320, 200] },
      { name:"Fluorouracil", dose:2400, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Days 1–2", reducible:true, note:"Continuous infusion over 46 hours via Baxter LV5 INFUSOR.", levels:[2000, 1600] }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT",
        "alkaline phosphatase",
        "albumin",
        "sodium",
        "potassium",
        "random glucose",
        "HbA1c",
        "DPYD test"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["GGT", "CEA", "CA 19-9", "ECG"] }
      ]
    }
  },

  {
    key:"GI-GIFOLFIRI", cat:"GI", bcc:true,
    name:"FOLFIRI (Colorectal)",
    cycle:14,
    notes:"Palliative combination chemotherapy for locally advanced or metastatic colorectal adenocarcinoma (also appendix/small bowel); first-line or after oxaliplatin-based therapy. (GIFOLFIRI). BC Cancer GIFOLFIRI.",
    drugs:[
      { name:"Irinotecan", dose:180, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:true, note:"IV in 500 mL D5W over 90 minutes concurrent with leucovorin via Y-connector.", levels:[150, 120] },
      { name:"Leucovorin", dose:400, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:false, note:"IV in 250 mL D5W over 90 minutes concurrent with irinotecan via Y-connector." },
      { name:"Fluorouracil", dose:400, unit:"mg/m²", basis:"bsa", max:null, route:"IV push", days:"Day 1", reducible:true, note:"Optional in advanced setting; may be omitted.", levels:[320, 240] },
      { name:"Fluorouracil", dose:2400, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Days 1–2", reducible:true, note:"Continuous infusion over 46 hours via Baxter LV5 INFUSOR.", levels:[2000, 1600] }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "ALT",
        "alkaline phosphatase",
        "total bilirubin",
        "albumin",
        "sodium",
        "potassium",
        "DPYD test"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA", "CA 19-9", "GGT", "ECG"] }
      ]
    }
  },

  {
    key:"GI-GIFOLFOX", cat:"GI", bcc:true,
    name:"FOLFOX (Colorectal)",
    cycle:14,
    notes:"Palliative combination chemotherapy for locally advanced or metastatic colorectal adenocarcinoma (also appendix/small bowel); first-line, pseudoadjuvant, or after irinotecan-based therapy. (GIFOLFOX). BC Cancer GIFOLFOX.",
    drugs:[
      { name:"Oxaliplatin", dose:85, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:true, note:"IV in 250–500 mL D5W over 2 hours via Y-site with leucovorin. Not compatible with NS. Physician may start at 100 mg/m² per FOLFOX6.", levels:[65, 50] },
      { name:"Leucovorin", dose:400, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:false, note:"IV in 250 mL D5W over 2 hours concurrent with oxaliplatin via Y-site." },
      { name:"Fluorouracil", dose:400, unit:"mg/m²", basis:"bsa", max:null, route:"IV push", days:"Day 1", reducible:true, note:"Optional in advanced setting; may be omitted.", levels:[320, 200] },
      { name:"Fluorouracil", dose:2400, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Days 1–2", reducible:true, note:"Continuous infusion over 46 hours via Baxter LV5 INFUSOR.", levels:[2000, 1600] }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "ALT",
        "alkaline phosphatase",
        "total bilirubin",
        "albumin",
        "sodium",
        "potassium",
        "DPYD test"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA", "CA 19-9", "GGT", "ECG"] }
      ]
    }
  },

  {
    key:"GI-GIFUART", cat:"GI", bcc:true,
    name:"Mitomycin, Infusional Fluorouracil and Radiation Therapy for Anal Canal Carcinoma",
    cycle:null,
    notes:"Curative combined modality therapy for squamous cell or cloacogenic carcinoma of the anal canal (T any, N any, M0). Mitomycin on Day 1 of Weeks 1 and 5 (optional Week 5); fluorouracil Days 1–4 of Weeks 1 and 5, concurrent with 50.4 Gy radiation over 5.5 weeks. (GIFUART). BC Cancer GIFUART.",
    drugs:[
      { name:"mitomycin", dose:10, unit:"mg/m²", basis:"bsa", max:20, route:"IV", days:"Day 1, Weeks 1 & 5", reducible:true, note:"Maximum dose 20 mg; optional on Week 5. Dose modification required if CrCl <12 mL/min." },
      { name:"fluorouracil", dose:1000, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Days 1–4, Weeks 1 & 5", reducible:true, note:"Continuous infusion over 96 h (total 4000 mg/m²). Dose reductions apply for stomatitis, diarrhea, or PPE." }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "ALT",
        "alkaline phosphatase",
        "total bilirubin",
        "albumin",
        "sodium",
        "potassium",
        "DPYD test"
      ],
      cycle:[
        "CBC & Diff (weekly during radiation)"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA", "CA19-9", "SCC", "GGT", "ECG"] },
        { label:"Warfarin patients", tests:["INR weekly during fluorouracil therapy until stable, then prior to each cycle"] }
      ]
    }
  },

  {
    key:"GI-GIFUC", cat:"GI", bcc:true,
    name:"Infusional Fluorouracil and CISplatin for Upper GI and Metastatic Anal Cancer",
    cycle:28,
    notes:"Palliative chemotherapy for metastatic/unresectable upper GI adenocarcinoma (gastric, esophageal, gallbladder, pancreas, bile ducts) or metastatic anal squamous cell/cloacogenic carcinoma. Weekly cisplatin and 48 h fluorouracil infusion on Days 1, 8, 15, 22. (GIFUC). BC Cancer GIFUC.",
    drugs:[
      { name:"CISplatin", dose:25, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Days 1, 8, 15, 22", reducible:true, note:"Reduce to 50% for CrCl 45–59 mL/min; hold for CrCl <45 mL/min." },
      { name:"fluorouracil", dose:1000, unit:"mg/m²", basis:"bsa", max:5000, route:"IV", days:"Days 1, 8, 15, 22 (48 h infusion each)", reducible:true, note:"1000 mg/m²/day x 2 days continuous infusion (total 2000 mg/m²/48 h); max 5000 mg/48 h. Reduce for stomatitis/diarrhea/hand-foot." }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "ALT",
        "alkaline phosphatase",
        "total bilirubin",
        "albumin",
        "sodium",
        "potassium",
        "DPYD test"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA", "CA19-9", "GGT", "ECG"] },
        { label:"Warfarin patients", tests:["INR weekly during fluorouracil therapy until stable, then prior to each cycle"] }
      ]
    }
  },

  {
    key:"GI-GIGAJCOX", cat:"GI", bcc:true,
    name:"Oxaliplatin and Capecitabine (CAPOX) Adjuvant for Gastric Cancer",
    cycle:21,
    notes:"Adjuvant chemotherapy for gastric cancer after D2 resection (node negative) or patients ineligible for adjuvant chemoradiation. Maximum 8 cycles. (GIGAJCOX). BC Cancer GIGAJCOX.",
    drugs:[
      { name:"oxaliplatin", dose:130, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:true, note:"Infuse over 2 hours in D5W. Not compatible with NS.", levels:[100, 85] },
      { name:"capecitabine", dose:1000, unit:"mg/m²", basis:"bsa", max:null, route:"PO", days:"Days 1–14 (twice daily)", reducible:true, note:"1000 mg/m² BID; total daily dose 2000 mg/m². Reduce to 75% for CrCl 30–50 mL/min; discontinue for CrCl <30 mL/min.", levels:[750, 500] }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "ALT",
        "alkaline phosphatase",
        "total bilirubin",
        "albumin",
        "sodium",
        "potassium",
        "DPYD test"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA", "CA19-9", "GGT", "ECG"] },
        { label:"Warfarin patients", tests:["INR weekly until stable, then prior to each cycle"] }
      ]
    }
  },

  {
    key:"GI-GIGAJCPRT", cat:"GI", bcc:true,
    name:"CISplatin, Capecitabine and Radiation Therapy Adjuvant for Gastric Cancer (ARTIST)",
    cycle:21,
    notes:"Adjuvant chemoradiation for completely resected gastric cancer stage IIA or higher. 5 cycles: Cycles 1–2 pre-RT (cisplatin + capecitabine), Cycle 3 concurrent with 45 Gy RT (capecitabine alone), Cycles 4–5 post-RT (cisplatin + capecitabine). (GIGAJCPRT). BC Cancer GIGAJCPRT.",
    drugs:[
      { name:"CISplatin", dose:60, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1 (Cycles 1, 2, 4, 5)", reducible:true, note:"Given with pre-hydration (1000 mL NS) and electrolytes. Not given during Cycle 3 (radiation only). Reduce/hold based on renal function." },
      { name:"capecitabine", dose:1000, unit:"mg/m²", basis:"bsa", max:null, route:"PO", days:"Days 1–14 BID (Cycles 1, 2, 4, 5); each RT day only during Cycle 3 (825 mg/m² BID)", reducible:true, note:"Cycles 1, 2, 4, 5: 1000 mg/m² BID x 14 days. Cycle 3 (concurrent RT): 825 mg/m² BID on each radiation day only. Reduce 25% for CrCl 45–59 mL/min." }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "ALT",
        "alkaline phosphatase",
        "total bilirubin",
        "albumin",
        "sodium",
        "potassium",
        "DPYD test"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT (Cycles 1, 2, 4, 5 prior to treatment)",
        "CBC & Diff, creatinine weekly (Cycle 3, during RT)"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA", "CA19-9", "GGT", "ECG"] },
        { label:"Warfarin patients", tests:["INR weekly during capecitabine therapy until stable, then prior to each cycle"] }
      ]
    }
  },

  {
    key:"GI-GIGAJFFOX", cat:"GI", bcc:true,
    name:"Oxaliplatin, Fluorouracil and Leucovorin (mFOLFOX6) Adjuvant for Gastric Cancer",
    cycle:14,
    notes:"Adjuvant chemotherapy for gastric cancer after D2 resection (node negative) or ineligible for adjuvant chemoradiation. Maximum 12 cycles. (GIGAJFFOX). BC Cancer GIGAJFFOX.",
    drugs:[
      { name:"oxaliplatin", dose:85, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:true, note:"Infuse over 2 hours in D5W. Not compatible with NS. Can be co-infused with leucovorin via Y-site.", levels:[65, 50] },
      { name:"leucovorin", dose:400, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:false, note:"Infuse over 2 hours concurrently with oxaliplatin via Y-site. May be omitted if fluorouracil push is omitted." },
      { name:"fluorouracil", dose:400, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1 (bolus)", reducible:true, note:"IV push after leucovorin.", levels:[320, 200] },
      { name:"fluorouracil", dose:2400, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1 (46 h infusion)", reducible:true, note:"Continuous infusion over 46 hours via infusor.", levels:[1900, 1500] }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "ALT",
        "alkaline phosphatase",
        "total bilirubin",
        "albumin",
        "sodium",
        "potassium",
        "DPYD test"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA", "CA19-9", "GGT", "ECG"] },
        { label:"Warfarin patients", tests:["INR weekly during fluorouracil therapy until stable, then prior to each cycle"] }
      ]
    }
  },

  {
    key:"GI-GIGAVCCT", cat:"GI", bcc:true,
    name:"CISplatin, Capecitabine and Trastuzumab for HER2+ Gastric/GEJ/Esophageal Adenocarcinoma",
    cycle:21,
    notes:"First-line palliative treatment of metastatic or locally advanced HER2-positive (IHC3+ or FISH ≥2) gastric, gastroesophageal junction, or esophageal adenocarcinoma. 6 cycles then trastuzumab maintenance. Preferred protocol is GIGAVCOXT (oxaliplatin-based); use this for pre-existing neuropathy. (GIGAVCCT). BC Cancer GIGAVCCT.",
    drugs:[
      { name:"CISplatin", dose:80, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:true, note:"Pre-hydrate with 1000 mL NS. Reduce to 75% for CrCl 45–59 mL/min; hold for CrCl 30–44 mL/min." },
      { name:"trastuzumab", dose:8, unit:"mg/kg", basis:"weight", max:null, route:"IV", days:"Day 1, Cycle 1 (loading); then 6 mg/kg", reducible:false, note:"Loading dose 8 mg/kg Cycle 1 over 90 min, then 6 mg/kg from Cycle 2 over 60 min (subsequent cycles 30 min). No dose modification; manage by delay. Continue as single agent after 6 cycles (see GIGAVTR)." },
      { name:"capecitabine", dose:1000, unit:"mg/m²", basis:"bsa", max:null, route:"PO", days:"Days 1–14 (twice daily)", reducible:true, note:"1000 mg/m² BID; total daily dose 2000 mg/m². Standard capecitabine dose modifications apply." }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "ALT",
        "alkaline phosphatase",
        "total bilirubin",
        "albumin",
        "sodium",
        "potassium",
        "DPYD test"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA", "CA19-9", "GGT", "ECG", "echocardiogram or MUGA scan"] },
        { label:"Warfarin patients", tests:["INR weekly during capecitabine therapy until stable, then prior to each cycle"] }
      ]
    }
  },

  {
    key:"GI-GIGAVCC", cat:"GI", bcc:true,
    name:"CISplatin and Capecitabine for Metastatic Anal Squamous Cell Carcinoma",
    cycle:21,
    notes:"Palliative therapy for metastatic or locally advanced anal squamous cell carcinoma. (GIGAVCC). BC Cancer GIGAVCC.",
    drugs:[
      { name:"CISplatin", dose:80, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:true, note:"Pre-hydrate with 1000 mL NS. Reduce to 75% for CrCl 45–59 mL/min; hold for CrCl 30–44 mL/min." },
      { name:"capecitabine", dose:1000, unit:"mg/m²", basis:"bsa", max:null, route:"PO", days:"Days 1–14 (twice daily)", reducible:true, note:"1000 mg/m² BID; total daily dose 2000 mg/m²." }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "ALT",
        "alkaline phosphatase",
        "total bilirubin",
        "albumin",
        "sodium",
        "potassium",
        "DPYD test"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA", "CA19-9", "SCC", "GGT", "ECG"] },
        { label:"Warfarin patients", tests:["INR weekly during capecitabine therapy until stable, then prior to each cycle"] }
      ]
    }
  },

  {
    key:"GI-GIGAVCFT", cat:"GI", bcc:true,
    name:"CISplatin, Infusional Fluorouracil and Trastuzumab for HER2+ Gastric/GEJ Adenocarcinoma",
    cycle:21,
    notes:"First-line palliative treatment of metastatic or inoperable locally advanced HER2-positive (IHC3+ or FISH ≥2) gastric or gastroesophageal junction adenocarcinoma. 6 cycles then trastuzumab maintenance (see GIGAVTR). (GIGAVCFT). BC Cancer GIGAVCFT.",
    drugs:[
      { name:"CISplatin", dose:80, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:true, note:"Pre-hydrate with 1000 mL NS. Reduce to 75% for CrCl 45–59 mL/min; hold for CrCl <45 mL/min." },
      { name:"trastuzumab", dose:8, unit:"mg/kg", basis:"weight", max:null, route:"IV", days:"Day 1, Cycle 1 (loading); then 6 mg/kg", reducible:false, note:"Loading dose 8 mg/kg Cycle 1 over 90 min, then 6 mg/kg from Cycle 2 over 60 min (subsequent cycles 30 min). No dose modification; manage by delay. Continue as single agent after 6 cycles (GIGAVTR)." },
      { name:"fluorouracil", dose:800, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Days 1–5 (continuous infusion)", reducible:true, note:"800 mg/m²/day x 5 days continuous infusion (total 4000 mg/m² over 120 h)." }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "ALT",
        "alkaline phosphatase",
        "total bilirubin",
        "albumin",
        "sodium",
        "potassium",
        "DPYD test"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA", "CA19-9", "GGT", "ECG", "echocardiogram or MUGA scan"] },
        { label:"Warfarin patients", tests:["INR weekly during fluorouracil therapy until stable, then prior to each cycle"] }
      ]
    }
  },

  {
    key:"GI-GIGAVCOXN", cat:"GI", bcc:true,
    name:"Oxaliplatin, Capecitabine and Nivolumab (CAPOX + Nivolumab) for Gastroesophageal/Gastric Adenocarcinoma",
    cycle:21,
    notes:"First-line treatment of locally advanced or metastatic esophageal, gastroesophageal junction, or gastric adenocarcinoma with PD-L1 CPS ≥1 or dMMR/MSI-H; HER2-negative. Nivolumab until progression or maximum 2 years; chemotherapy until progression or unacceptable toxicity. (GIGAVCOXN). BC Cancer GIGAVCOXN.",
    drugs:[
      { name:"nivolumab", dose:4.5, unit:"mg/kg", basis:"weight", max:360, route:"IV", days:"Day 1", reducible:false, note:"Maximum 360 mg. No dose modifications; manage toxicity by delay (see SCIMMUNE). Administer over 30 min with 0.2 micron in-line filter." },
      { name:"oxaliplatin", dose:130, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:true, note:"Infuse over 2 hours in D5W. Not compatible with NS.", levels:[100, 85] },
      { name:"capecitabine", dose:1000, unit:"mg/m²", basis:"bsa", max:null, route:"PO", days:"Days 1–14 (twice daily)", reducible:true, note:"1000 mg/m² BID; total daily dose 2000 mg/m². Reduce to 75% for CrCl 30–50 mL/min; discontinue <30 mL/min.", levels:[750, 500] }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "ALT",
        "alkaline phosphatase",
        "total bilirubin",
        "albumin",
        "sodium",
        "potassium",
        "DPYD test",
        "TSH",
        "morning serum cortisol",
        "chest x-ray or CT chest"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "ALT",
        "total bilirubin",
        "sodium",
        "potassium",
        "TSH"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["creatine kinase", "troponin", "free T3", "free T4", "GGT", "lipase", "random glucose", "serum/urine HCG", "serum ACTH", "testosterone", "estradiol", "FSH", "LH", "CEA", "CA19-9", "ECG"] },
        { label:"Warfarin patients", tests:["INR weekly until stable, then prior to each cycle"] }
      ]
    }
  },

  {
    key:"GI-GIGAVCOXP", cat:"GI", bcc:true,
    name:"Oxaliplatin, Capecitabine and Pembrolizumab (CAPOX + Pembrolizumab) for Gastroesophageal Cancer",
    cycle:21,
    notes:"First-line treatment of locally advanced unresectable or metastatic HER2-negative esophageal (adeno or SCC), gastroesophageal junction, or gastric carcinoma with PD-L1 CPS ≥1 or dMMR/MSI-H. Pembrolizumab maximum 35 cycles (2 years); chemotherapy until progression or unacceptable toxicity. (GIGAVCOXP). BC Cancer GIGAVCOXP.",
    drugs:[
      { name:"pembrolizumab", dose:2, unit:"mg/kg", basis:"weight", max:200, route:"IV", days:"Day 1", reducible:false, note:"Maximum 200 mg. No dose modifications; manage toxicity by delay (see SCIMMUNE). Infuse over 30 min with 0.2 micron in-line filter." },
      { name:"oxaliplatin", dose:130, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:true, note:"Infuse over 2 hours in D5W. Not compatible with NS.", levels:[100, 85] },
      { name:"capecitabine", dose:1000, unit:"mg/m²", basis:"bsa", max:null, route:"PO", days:"Days 1–14 (twice daily)", reducible:true, note:"1000 mg/m² BID; total daily dose 2000 mg/m². Reduce to 75% for CrCl 30–50 mL/min; discontinue <30 mL/min.", levels:[750, 500] }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "ALT",
        "alkaline phosphatase",
        "total bilirubin",
        "albumin",
        "sodium",
        "potassium",
        "DPYD test",
        "TSH",
        "morning serum cortisol",
        "chest x-ray or CT chest"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "ALT",
        "total bilirubin",
        "sodium",
        "potassium",
        "TSH"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["ECG", "CEA", "CA19-9", "creatine kinase", "troponin", "free T3", "free T4", "GGT", "lipase", "random glucose", "serum/urine HCG", "serum ACTH", "testosterone", "estradiol", "FSH", "LH"] },
        { label:"Warfarin patients", tests:["INR weekly until stable, then prior to each cycle"] }
      ]
    }
  },

  {
    key:"GI-GIGAVCOX", cat:"GI", bcc:true,
    name:"Capecitabine and Oxaliplatin (CAPOX)",
    cycle:21,
    notes:"First-line palliative treatment of metastatic or locally advanced gastric, gastroesophageal junction, or esophageal carcinoma. Also used after progression on single-agent fluoropyrimidine. (GIGAVCOX). BC Cancer GIGAVCOX.",
    drugs:[
      { name:"Oxaliplatin", dose:130, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:true, note:"Not compatible with NS. Infuse in D5W over 2 hours.", levels:[100, 85] },
      { name:"Capecitabine", dose:1000, unit:"mg/m²", basis:"bsa", max:null, route:"PO", days:"Days 1–14 BID", reducible:true, note:"Total daily dose 2000 mg/m²/day. Reduce to 75% if CrCl 30–50 mL/min. Discontinue if CrCl <30 mL/min.", levels:[750, 500] }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "Creatinine",
        "ALT",
        "Alkaline phosphatase",
        "Total bilirubin",
        "Albumin",
        "Sodium",
        "Potassium",
        "DPYD test"
      ],
      cycle:[
        "CBC & Diff",
        "Creatinine",
        "Total bilirubin",
        "ALT"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA", "CA 19-9", "GGT", "ECG"] },
        { label:"Warfarin patients", tests:["Weekly INR until stable, then INR each cycle"] }
      ]
    }
  },

  {
    key:"GI-GIGAVCOXT", cat:"GI", bcc:true,
    name:"Capecitabine, Oxaliplatin, and Trastuzumab (CAPOX-T)",
    cycle:21,
    notes:"First-line palliative treatment of HER2-positive metastatic or locally advanced gastric, gastroesophageal junction, or esophageal adenocarcinoma (IHC3+ or FISH ratio ≥2). (GIGAVCOXT). BC Cancer GIGAVCOXT.",
    drugs:[
      { name:"Oxaliplatin", dose:130, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:true, note:"Not compatible with NS. Infuse in D5W over 2 hours.", levels:[100, 85] },
      { name:"Trastuzumab", dose:8, unit:"mg/kg", basis:"weight", max:null, route:"IV", days:"Day 1, Cycle 1 (loading); then 6 mg/kg Day 1 each subsequent cycle", reducible:false, note:"Loading dose 8 mg/kg Cycle 1 only; maintenance 6 mg/kg. No dose modifications; discontinue for unacceptable toxicity." },
      { name:"Capecitabine", dose:1000, unit:"mg/m²", basis:"bsa", max:null, route:"PO", days:"Days 1–14 BID", reducible:true, note:"Total daily dose 2000 mg/m²/day. Reduce to 75% if CrCl 30–50 mL/min. Discontinue if CrCl <30 mL/min.", levels:[750, 500] }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "Creatinine",
        "ALT",
        "Alkaline phosphatase",
        "Total bilirubin",
        "Albumin",
        "Sodium",
        "Potassium",
        "DPYD test"
      ],
      cycle:[
        "CBC & Diff",
        "Creatinine",
        "Total bilirubin",
        "ALT"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA", "CA 19-9", "GGT", "ECG", "Echocardiogram or MUGA scan (LVEF)"] },
        { label:"Warfarin patients", tests:["Weekly INR until stable, then INR each cycle"] }
      ]
    }
  },

  {
    key:"GI-GIGAVCOXZ", cat:"GI", bcc:true,
    name:"Capecitabine, Oxaliplatin, and Zolbetuximab (CAPOX-Z)",
    cycle:21,
    notes:"First-line treatment of HER2-negative, CLDN18.2-positive (≥75% moderate–strong IHC) metastatic or locally advanced gastric, GEJ, or esophageal adenocarcinoma. Cycle 1: zolbetuximab 800 mg/m² Day 1, oxaliplatin and capecitabine Day 2 onwards. (GIGAVCOXZ). BC Cancer GIGAVCOXZ.",
    drugs:[
      { name:"Zolbetuximab", dose:800, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1, Cycle 1 (800 mg/m²); then 600 mg/m² Day 1, Cycles 2+", reducible:false, note:"Loading dose 800 mg/m² Cycle 1; maintenance 600 mg/m². Titrated infusion rate — see protocol. Highly emetogenic; premedicate accordingly. No dose modifications; manage by infusion delay." },
      { name:"Oxaliplatin", dose:130, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 2 (Cycle 1); Day 1 (Cycles 2+)", reducible:true, note:"Not compatible with NS. Infuse in D5W over 2 hours.", levels:[100, 85] },
      { name:"Capecitabine", dose:1000, unit:"mg/m²", basis:"bsa", max:null, route:"PO", days:"Days 2–15 BID (Cycle 1); Days 1–14 BID (Cycles 2+)", reducible:true, note:"Total daily dose 2000 mg/m²/day. Reduce to 75% if CrCl 30–50 mL/min. Discontinue if CrCl <30 mL/min.", levels:[750, 500] }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "Creatinine",
        "ALT",
        "Alkaline phosphatase",
        "Total bilirubin",
        "Albumin",
        "Sodium",
        "Potassium",
        "DPYD test"
      ],
      cycle:[
        "CBC & Diff",
        "Creatinine",
        "Total bilirubin",
        "ALT"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA", "CA 19-9", "GGT", "Magnesium", "Random glucose", "ECG"] },
        { label:"Warfarin patients", tests:["Weekly INR until stable, then INR each cycle"] }
      ]
    }
  },

  {
    key:"GI-GIGAVENH", cat:"GI", bcc:true,
    name:"Trastuzumab Deruxtecan (ENHERTU)",
    cycle:21,
    notes:"Second-line treatment of HER2-positive (IHC3+ or FISH ratio ≥2) metastatic or locally advanced gastric, GEJ, or esophageal adenocarcinoma after prior trastuzumab-based first-line therapy. (GIGAVENH). BC Cancer GIGAVENH.",
    drugs:[
      { name:"Trastuzumab Deruxtecan", dose:6.4, unit:"mg/kg", basis:"weight", max:null, route:"IV", days:"Day 1", reducible:true, note:"Infuse in 100 mL D5W over 90 min (Cycle 1); 30 min subsequently. Use 0.2 micron in-line filter. Monitor for ILD/pneumonitis — permanently discontinue if Grade ≥2. Monitor LVEF.", levels:[5.4, 4.4] }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "Creatinine",
        "Total bilirubin",
        "ALT"
      ],
      cycle:[
        "CBC & Diff",
        "Creatinine",
        "Total bilirubin",
        "ALT"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA", "CA 19-9", "GGT", "Echocardiogram or MUGA scan (LVEF)"] },
        { label:"Every 12 weeks if clinically indicated", tests:["Echocardiogram or MUGA scan (LVEF)"] }
      ]
    }
  },

  {
    key:"GI-GIGAVFFOX", cat:"GI", bcc:true,
    name:"Oxaliplatin, Fluorouracil, and Leucovorin (mFOLFOX6)",
    cycle:14,
    notes:"First-line palliative treatment of metastatic or locally advanced gastric, gastroesophageal junction, or esophageal carcinoma. Also used after progression on single-agent fluorouracil. (GIGAVFFOX). BC Cancer GIGAVFFOX.",
    drugs:[
      { name:"Oxaliplatin", dose:85, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:true, note:"Not compatible with NS. Infuse in D5W over 2 hours concurrently with leucovorin via Y-site.", levels:[65, 50] },
      { name:"Leucovorin", dose:400, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:false, note:"Infuse in D5W over 2 hours concurrent with oxaliplatin via Y-site. No dose modifications." },
      { name:"Fluorouracil", dose:400, unit:"mg/m²", basis:"bsa", max:null, route:"IV push", days:"Day 1", reducible:true, note:"IV bolus optional in advanced setting; may be omitted.", levels:[320, 200] },
      { name:"Fluorouracil", dose:2400, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1–3 (46-hour CI)", reducible:true, note:"46-hour continuous infusion via Baxter LV5 INFUSOR. Inpatient alternative: 1200 mg/m²/day over 23h × 2 days.", levels:[2000, 1600] }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "Creatinine",
        "ALT",
        "Alkaline phosphatase",
        "Total bilirubin",
        "Albumin",
        "Sodium",
        "Potassium",
        "DPYD test"
      ],
      cycle:[
        "CBC & Diff",
        "Creatinine",
        "Total bilirubin",
        "ALT"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA", "CA 19-9", "GGT", "ECG"] },
        { label:"Warfarin patients", tests:["Weekly INR during fluorouracil, then INR each cycle"] }
      ]
    }
  },

  {
    key:"GI-GIGAVFFOXN", cat:"GI", bcc:true,
    name:"FOLFOX + Nivolumab",
    cycle:14,
    notes:"First-line treatment of locally advanced or metastatic esophageal, GEJ, or gastric adenocarcinoma with PD-L1 CPS ≥1 or dMMR/MSI-H; HER2-negative; no squamous cell carcinoma. Nivolumab up to 2 years; chemotherapy until progression. (GIGAVFFOXN). BC Cancer GIGAVFFOXN.",
    drugs:[
      { name:"Nivolumab", dose:3, unit:"mg/kg", basis:"weight", max:240, route:"IV", days:"Day 1", reducible:false, note:"Maximum 240 mg. Infuse in 50–100 mL NS over 30 min using 0.2 micron filter. No dose modifications; manage immune-mediated toxicity per SCIMMUNE." },
      { name:"Oxaliplatin", dose:85, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:true, note:"Not compatible with NS. Infuse in D5W over 2 hours concurrently with leucovorin via Y-site.", levels:[65, 50] },
      { name:"Leucovorin", dose:400, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:false, note:"Infuse in D5W over 2 hours concurrent with oxaliplatin via Y-site. No dose modifications." },
      { name:"Fluorouracil", dose:400, unit:"mg/m²", basis:"bsa", max:null, route:"IV push", days:"Day 1", reducible:true, note:"IV bolus optional in advanced setting; may be omitted.", levels:[320, 200] },
      { name:"Fluorouracil", dose:2400, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1–3 (46-hour CI)", reducible:true, note:"46-hour continuous infusion via Baxter LV5 INFUSOR.", levels:[2000, 1600] }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "Creatinine",
        "ALT",
        "Alkaline phosphatase",
        "Total bilirubin",
        "Albumin",
        "Sodium",
        "Potassium",
        "DPYD test",
        "TSH",
        "Morning serum cortisol",
        "Chest X-ray or CT chest"
      ],
      cycle:[
        "CBC & Diff",
        "Creatinine",
        "ALT",
        "Total bilirubin",
        "Sodium",
        "Potassium",
        "TSH"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA", "CA 19-9", "ECG", "Creatine kinase", "Troponin", "Free T3 and T4", "GGT", "Lipase", "Random glucose", "Serum/urine HCG", "Serum ACTH", "Testosterone", "Estradiol", "FSH", "LH"] },
        { label:"Warfarin patients", tests:["Weekly INR during fluorouracil, then INR each cycle"] }
      ]
    }
  },

  {
    key:"GI-GIGAVFFOXP", cat:"GI", bcc:true,
    name:"FOLFOX + Pembrolizumab",
    cycle:42,
    notes:"First-line treatment of HER2-negative locally advanced or metastatic gastroesophageal cancer (esophageal, GEJ, or gastric; adenocarcinoma or SCC) with PD-L1 CPS ≥1 or dMMR/MSI-H. Pembrolizumab 4 mg/kg Day 1 q6w (max 400 mg); FOLFOX Days 1, 15, 29 (q2w within 42-day cycle). Pembrolizumab up to 18 cycles/2 years. (GIGAVFFOXP). BC Cancer GIGAVFFOXP.",
    drugs:[
      { name:"Pembrolizumab", dose:4, unit:"mg/kg", basis:"weight", max:400, route:"IV", days:"Day 1", reducible:false, note:"Maximum 400 mg per dose. Infuse in 50 mL NS over 30 min using 0.2 micron filter. No dose modifications; manage immune-mediated toxicity per SCIMMUNE." },
      { name:"Oxaliplatin", dose:85, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Days 1, 15, 29", reducible:true, note:"Not compatible with NS. Infuse in D5W over 2 hours.", levels:[65, 50] },
      { name:"Leucovorin", dose:400, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Days 1, 15, 29", reducible:false, note:"Infuse in D5W over 2 hours concurrent with oxaliplatin via Y-site. No dose modifications." },
      { name:"Fluorouracil", dose:400, unit:"mg/m²", basis:"bsa", max:null, route:"IV push", days:"Days 1, 15, 29", reducible:true, note:"IV bolus optional in advanced setting; may be omitted.", levels:[320, 200] },
      { name:"Fluorouracil", dose:2400, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Days 1, 15, 29 (46-hour CI each)", reducible:true, note:"46-hour continuous infusion via Baxter LV5 INFUSOR after each bolus dose.", levels:[2000, 1600] }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "Creatinine",
        "ALT",
        "Alkaline phosphatase",
        "Total bilirubin",
        "Albumin",
        "Sodium",
        "Potassium",
        "DPYD test",
        "TSH",
        "Morning serum cortisol",
        "Chest X-ray or CT chest"
      ],
      cycle:[
        "CBC & Diff",
        "Creatinine",
        "ALT",
        "Total bilirubin",
        "Sodium",
        "Potassium",
        "TSH"
      ],
      conditional:[
        { label:"Prior to Days 15 and 29 each cycle", tests:["CBC & Diff", "Creatinine", "Total bilirubin", "ALT"] },
        { label:"Baseline if clinically indicated", tests:["CEA", "CA 19-9", "ECG", "Creatine kinase", "Troponin", "Free T3 and T4", "GGT", "Lipase", "Random glucose", "Serum/urine HCG", "Serum ACTH", "Testosterone", "Estradiol", "FSH", "LH"] },
        { label:"Warfarin patients", tests:["Weekly INR during fluorouracil, then INR each cycle"] }
      ]
    }
  },

  {
    key:"GI-GIGAVFFOXT", cat:"GI", bcc:true,
    name:"FOLFOX + Trastuzumab",
    cycle:14,
    notes:"First-line palliative treatment of HER2-positive (IHC3+ or FISH ratio ≥2) metastatic or locally advanced gastric, GEJ, or esophageal adenocarcinoma. Up to 9 cycles of FOLFOX; trastuzumab continues as single agent until progression. (GIGAVFFOXT). BC Cancer GIGAVFFOXT.",
    drugs:[
      { name:"Oxaliplatin", dose:85, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:true, note:"Not compatible with NS. Infuse in D5W over 2 hours concurrently with leucovorin via Y-site.", levels:[65, 50] },
      { name:"Leucovorin", dose:400, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:false, note:"Infuse in D5W over 2 hours concurrent with oxaliplatin via Y-site. No dose modifications." },
      { name:"Fluorouracil", dose:400, unit:"mg/m²", basis:"bsa", max:null, route:"IV push", days:"Day 1", reducible:true, note:"IV bolus optional in advanced setting; may be omitted.", levels:[320, 200] },
      { name:"Trastuzumab", dose:6, unit:"mg/kg", basis:"weight", max:null, route:"IV", days:"Day 1, Cycle 1 (loading dose); then 4 mg/kg Day 1 each subsequent cycle", reducible:false, note:"Loading dose 6 mg/kg Cycle 1 only; maintenance 4 mg/kg. No dose modifications; discontinue for unacceptable toxicity. Continues as single agent after FOLFOX completion (see GIGAVTR)." },
      { name:"Fluorouracil", dose:2400, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1–3 (46-hour CI)", reducible:true, note:"46-hour continuous infusion via Baxter LV5 INFUSOR.", levels:[2000, 1600] }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "Creatinine",
        "ALT",
        "Alkaline phosphatase",
        "Total bilirubin",
        "Albumin",
        "Sodium",
        "Potassium",
        "DPYD test"
      ],
      cycle:[
        "CBC & Diff",
        "Creatinine",
        "Total bilirubin",
        "ALT"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA", "CA 19-9", "GGT", "ECG", "Echocardiogram or MUGA scan (LVEF)"] },
        { label:"Warfarin patients", tests:["Weekly INR during fluorouracil, then INR each cycle"] }
      ]
    }
  },

  {
    key:"GI-GIGAVFFOXZ", cat:"GI", bcc:true,
    name:"FOLFOX + Zolbetuximab",
    cycle:14,
    notes:"First-line treatment of HER2-negative, CLDN18.2-positive (≥75% moderate–strong IHC) metastatic or locally advanced gastric, GEJ, or esophageal adenocarcinoma. Cycle 1: zolbetuximab 800 mg/m² Day 1, FOLFOX Day 2. Cycle 2+: zolbetuximab 400 mg/m² Day 1, FOLFOX Day 2. (GIGAVFFOXZ). BC Cancer GIGAVFFOXZ.",
    drugs:[
      { name:"Zolbetuximab", dose:800, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1, Cycle 1 (800 mg/m²); then 400 mg/m² Day 1, Cycles 2+", reducible:false, note:"Loading dose 800 mg/m² Cycle 1; maintenance 400 mg/m². Titrated infusion rate in NS via 0.2 micron filter. Highly emetogenic; premedicate accordingly. No dose modifications; manage by infusion delay." },
      { name:"Oxaliplatin", dose:85, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 2 (all cycles)", reducible:true, note:"Not compatible with NS. Infuse in D5W over 2 hours.", levels:[65, 50] },
      { name:"Leucovorin", dose:400, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 2", reducible:false, note:"Infuse in D5W over 2 hours concurrent with oxaliplatin via Y-site. No dose modifications." },
      { name:"Fluorouracil", dose:400, unit:"mg/m²", basis:"bsa", max:null, route:"IV push", days:"Day 2", reducible:true, note:"IV bolus optional in advanced setting; may be omitted.", levels:[320, 200] },
      { name:"Fluorouracil", dose:2400, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 2–4 (46-hour CI)", reducible:true, note:"46-hour continuous infusion via Baxter LV5 INFUSOR starting Day 2.", levels:[2000, 1600] }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "Creatinine",
        "ALT",
        "Alkaline phosphatase",
        "Total bilirubin",
        "Albumin",
        "Sodium",
        "Potassium",
        "DPYD test"
      ],
      cycle:[
        "CBC & Diff",
        "Creatinine",
        "Total bilirubin",
        "ALT"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA", "CA 19-9", "GGT", "Magnesium", "Random glucose", "ECG"] },
        { label:"Warfarin patients", tests:["Weekly INR during fluorouracil, then INR each cycle"] }
      ]
    }
  },

  {
    key:"GI-GIGAVPCOXT", cat:"GI", bcc:true,
    name:"Pembrolizumab, Capecitabine, Oxaliplatin, and Trastuzumab (KEYNOTE-811)",
    cycle:21,
    notes:"First-line treatment of HER2-positive (IHC3+ or FISH ratio ≥2), PD-L1 CPS ≥1 metastatic or locally advanced gastric, GEJ, or esophageal adenocarcinoma. Pembrolizumab 2 mg/kg (max 200 mg) q3w up to 35 cycles/2 years; trastuzumab and chemotherapy until progression. (GIGAVPCOXT). BC Cancer GIGAVPCOXT.",
    drugs:[
      { name:"Pembrolizumab", dose:2, unit:"mg/kg", basis:"weight", max:200, route:"IV", days:"Day 1", reducible:false, note:"Maximum 200 mg per dose. Infuse in 50 mL NS over 30 min using 0.2 micron filter. No dose modifications; manage immune-mediated toxicity per SCIMMUNE." },
      { name:"Trastuzumab", dose:8, unit:"mg/kg", basis:"weight", max:null, route:"IV", days:"Day 1, Cycle 1 (loading); then 6 mg/kg Day 1 each subsequent cycle", reducible:false, note:"Loading dose 8 mg/kg Cycle 1 only; maintenance 6 mg/kg. No dose modifications; discontinue for unacceptable toxicity." },
      { name:"Oxaliplatin", dose:130, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:true, note:"Not compatible with NS. Infuse in D5W over 2 hours.", levels:[100, 85] },
      { name:"Capecitabine", dose:1000, unit:"mg/m²", basis:"bsa", max:null, route:"PO", days:"Days 1–14 BID", reducible:true, note:"Total daily dose 2000 mg/m²/day. Reduce to 75% if CrCl 30–50 mL/min. Discontinue if CrCl <30 mL/min.", levels:[750, 500] }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "Creatinine",
        "ALT",
        "Alkaline phosphatase",
        "Total bilirubin",
        "Albumin",
        "Sodium",
        "Potassium",
        "TSH",
        "Morning serum cortisol",
        "DPYD test",
        "Chest X-ray or CT chest"
      ],
      cycle:[
        "CBC & Diff",
        "Creatinine",
        "ALT",
        "Total bilirubin",
        "Sodium",
        "Potassium",
        "TSH"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA", "CA 19-9", "Creatine kinase", "Troponin", "Free T3 and T4", "GGT", "Lipase", "Random glucose", "Serum/urine HCG", "Serum ACTH", "Testosterone", "Estradiol", "FSH", "LH", "ECG", "Echocardiogram or MUGA scan (LVEF)"] },
        { label:"Warfarin patients", tests:["Weekly INR until stable, then INR each cycle"] }
      ]
    }
  },

  {
    key:"GI-GIGAVPFOXT", cat:"GI", bcc:true,
    name:"Pembrolizumab + Oxaliplatin + Fluorouracil + Leucovorin + Trastuzumab (GIGAVPFOXT)",
    cycle:42,
    notes:"First-line therapy for metastatic or inoperable locally advanced gastric, gastroesophageal junction, or esophageal adenocarcinoma; HER-2 overexpression (IHC3+ or FISH ≥2) and PD-L1 CPS ≥1. Cycle 1 is 42 days with dosing on Days 1, 15, and 29; subsequent cycles repeat every 42 days. (GIGAVPFOXT). BC Cancer GIGAVPFOXT.",
    drugs:[
      { name:"Pembrolizumab", dose:4, unit:"mg/kg", basis:"weight", max:400, route:"IV", days:"Day 1 of each cycle", reducible:false, note:"No dose modifications; manage toxicity with treatment delay. Maximum 400 mg. 0.2 micron in-line filter required." },
      { name:"Trastuzumab", dose:6, unit:"mg/kg", basis:"weight", max:null, route:"IV", days:"Day 1 Cycle 1 (loading 6 mg/kg), then 4 mg/kg Days 15, 29; Cycle 2+ 4 mg/kg Days 1, 15, 29", reducible:false, note:"Cycle 1 Day 1: 6 mg/kg loading over 90 min; subsequent doses 4 mg/kg over 30 min. No dose modifications; discontinue for unacceptable toxicity." },
      { name:"Oxaliplatin", dose:85, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Days 1, 15, 29", reducible:true, note:"IV in 250–500 mL D5W over 2 hours. Not compatible with NS.", levels:[65, 50] },
      { name:"Leucovorin", dose:400, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Days 1, 15, 29", reducible:false, note:"IV in 250 mL D5W over 2 hours concurrently with oxaliplatin via Y-site." },
      { name:"Fluorouracil", dose:400, unit:"mg/m²", basis:"bsa", max:null, route:"IV push", days:"Days 1, 15, 29", reducible:true, note:"IV push (optional in advanced setting).", levels:[320, 200] },
      { name:"Fluorouracil", dose:2400, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Days 1, 15, 29", reducible:true, note:"Continuous infusion over 46 hours via Baxter LV5 INFUSOR.", levels:[2000, 1600] }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "alkaline phosphatase",
        "ALT",
        "total bilirubin",
        "albumin",
        "sodium",
        "potassium",
        "TSH",
        "morning serum cortisol",
        "DPYD test",
        "chest x-ray or CT chest"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "ALT",
        "total bilirubin",
        "sodium",
        "potassium",
        "TSH"
      ],
      conditional:[
        { label:"Prior to Days 15 and 29", tests:["CBC & Diff", "creatinine", "total bilirubin", "ALT"] }
      ]
    }
  },

  {
    key:"GI-GIGAVRAMT", cat:"GI", bcc:true,
    name:"Ramucirumab + Paclitaxel (GIGAVRAMT)",
    cycle:28,
    notes:"Second- or third-line therapy for metastatic or locally advanced gastric or gastroesophageal junction adenocarcinoma after progression on first-line chemotherapy (including after second-line trastuzumab deruxtecan). (GIGAVRAMT). BC Cancer GIGAVRAMT.",
    drugs:[
      { name:"Ramucirumab", dose:8, unit:"mg/kg", basis:"weight", max:null, route:"IV", days:"Days 1 and 15", reducible:false, note:"IV in 250–500 mL NS over 60–90 min; maximum infusion rate 25 mg/min. 0.2 micron in-line filter. Administer before paclitaxel." },
      { name:"Paclitaxel", dose:80, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Days 1, 8, and 15", reducible:true, note:"IV in 100–250 mL NS over 1 hour. Use non-DEHP bag and tubing with 0.2 micron in-line filter.", levels:[65, 50] }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "ALT",
        "alkaline phosphatase",
        "total bilirubin",
        "albumin",
        "sodium",
        "potassium",
        "TSH",
        "urine dipstick for protein",
        "blood pressure measurement"
      ],
      cycle:[
        "CBC & Diff",
        "urine dipstick or laboratory urinalysis for protein",
        "blood pressure measurement",
        "creatinine",
        "total bilirubin",
        "ALT"
      ],
      conditional:[
        { label:"Prior to Day 8", tests:["CBC & Diff"] }
      ]
    }
  },

  {
    key:"GI-GIGAVTR", cat:"GI", bcc:true,
    name:"Trastuzumab Maintenance (GIGAVTR)",
    cycle:21,
    notes:"Continuation of palliative treatment for metastatic or inoperable locally advanced gastric or gastroesophageal junction adenocarcinoma (HER-2 overexpression) after response to GIGAVCFT, GIGAVCCT, GIGAVCOXT, GIGAVFFOXT, GIGAVPCOXT, or GIGAVPFOXT. (GIGAVTR). BC Cancer GIGAVTR.",
    drugs:[
      { name:"Trastuzumab", dose:6, unit:"mg/kg", basis:"weight", max:null, route:"IV", days:"Day 1", reducible:false, note:"IV in 250 mL NS over 30 min (observe 60 min post-infusion; not required after 3 consecutive treatments with no reaction). No dose modifications; discontinue for unacceptable toxicity." }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT",
        "alkaline phosphatase",
        "albumin",
        "GGT",
        "sodium",
        "potassium"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA", "CA 19-9", "ECG", "echocardiogram or MUGA scan"] }
      ]
    }
  },

  {
    key:"GI-GIGAVTT", cat:"GI", bcc:true,
    name:"Trifluridine-Tipiracil (GIGAVTT)",
    cycle:28,
    notes:"Third- or later-line therapy for metastatic gastric cancer or gastroesophageal junction adenocarcinoma after ≥2 prior lines including fluoropyrimidine, platinum, taxane or irinotecan, and HER2-directed therapy if HER2-positive. (GIGAVTT). BC Cancer GIGAVTT.",
    drugs:[
      { name:"Trifluridine-Tipiracil", dose:35, unit:"mg/m²", basis:"bsa", max:80, route:"PO", days:"Days 1–5 and Days 8–12 (BID)", reducible:true, note:"Dose based on trifluridine component; maximum 80 mg/dose. Round to nearest 5 mg. Given twice daily.", levels:[30, 25] }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "ALT",
        "alkaline phosphatase",
        "total bilirubin",
        "albumin"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT"
      ],
      conditional:[
        { label:"Day 15 Cycle 1 (and subsequent cycles if dose modification)", tests:["CBC & Diff"] }
      ]
    }
  },

  {
    key:"GI-GIGFLODOC", cat:"GI", bcc:true,
    name:"Docetaxel + Oxaliplatin + Fluorouracil + Leucovorin – FLOT (GIGFLODOC)",
    cycle:14,
    notes:"Perioperative treatment of resectable adenocarcinoma of stomach, gastroesophageal junction, or lower 1/3 esophagus (Stage IB or greater). 4 cycles pre-surgery and 4 cycles post-surgery. (GIGFLODOC). BC Cancer GIGFLODOC.",
    drugs:[
      { name:"Docetaxel", dose:50, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:true, note:"IV in 100–250 mL NS over 1 hour. Use non-DEHP equipment.", levels:[40, 30] },
      { name:"Oxaliplatin", dose:85, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:true, note:"IV in 250–500 mL D5W over 2 hours. Not compatible with NS. Omit if CrCl <30 mL/min.", levels:[65, 50] },
      { name:"Leucovorin", dose:200, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:false, note:"IV in 250 mL D5W over 2 hours concurrently with oxaliplatin via Y-site." },
      { name:"Fluorouracil", dose:2600, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:true, note:"Continuous infusion over 24 hours via appropriate infusor device.", levels:[2000, 1600] },
      { name:"Filgrastim (G-CSF)", dose:5, unit:"mcg/kg", basis:"weight", max:null, route:"SC", days:"Every other day starting Day 5 for 5 doses", reducible:false, note:"300 mcg or 480 mcg fixed doses. Consider Pharmacare approval. Adjust as needed based on neutrophil count." }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "ALT",
        "alkaline phosphatase",
        "total bilirubin",
        "albumin",
        "sodium",
        "potassium",
        "DPYD test"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT"
      ]
    }
  },

  {
    key:"GI-GIGFOLFIRI", cat:"GI", bcc:true,
    name:"Irinotecan + Fluorouracil + Leucovorin – FOLFIRI (GIGFOLFIRI)",
    cycle:14,
    notes:"Second- or third-line palliative chemotherapy for locally advanced, locally recurrent or metastatic gastric or esophageal adenocarcinoma, or esophageal squamous cell carcinoma after 1–2 prior lines of treatment in advanced setting. (GIGFOLFIRI). BC Cancer GIGFOLFIRI.",
    drugs:[
      { name:"Irinotecan", dose:180, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:true, note:"IV in 500 mL D5W over 90 min. May be infused concurrently with leucovorin via Y-connector.", levels:[150, 120] },
      { name:"Leucovorin", dose:400, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:false, note:"IV in 250 mL D5W over 90 min concurrently with irinotecan via Y-connector." },
      { name:"Fluorouracil", dose:400, unit:"mg/m²", basis:"bsa", max:null, route:"IV push", days:"Day 1", reducible:true, note:"IV push (optional in advanced setting).", levels:[320, 240] },
      { name:"Fluorouracil", dose:2400, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:true, note:"Continuous infusion over 46 hours via Baxter LV5 INFUSOR.", levels:[2000, 1600] }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT",
        "alkaline phosphatase",
        "albumin",
        "sodium",
        "potassium",
        "DPYD test",
        "appropriate imaging study"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT"
      ]
    }
  },

  {
    key:"GI-GIIRINALT", cat:"GI", bcc:true,
    name:"Irinotecan Weekly (GIIRINALT)",
    cycle:42,
    notes:"Palliative chemotherapy for metastatic colorectal cancer in patients who may not tolerate the q3-weekly irinotecan schedule (GIIR); for patients with high-risk features such as advanced age, prior pelvic irradiation, or impaired hepatic function. Maximum 6 cycles. (GIIRINALT). BC Cancer GIIRINALT.",
    drugs:[
      { name:"Irinotecan", dose:125, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Days 1, 8, 15, 22 (no treatment Days 29, 36)", reducible:true, note:"IV in 500 mL D5W over 90 min. Omitted treatments can be given on week 5 or 6 of the same cycle (maximum 4 treatments per 6-week cycle). Dose reductions by 25 mg/m² increments." }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "ALT",
        "alkaline phosphatase",
        "total bilirubin",
        "albumin",
        "sodium",
        "potassium"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT"
      ]
    }
  },

  {
    key:"GI-GIIR", cat:"GI", bcc:true,
    name:"Irinotecan q3 Weekly (GIIR)",
    cycle:21,
    notes:"Palliative chemotherapy for metastatic colorectal cancer. Starting dose 300 mg/m² for patients age ≥70 years or ECOG 2. (GIIR). BC Cancer GIIR.",
    drugs:[
      { name:"Irinotecan", dose:350, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:true, note:"IV in 500 mL D5W over 90 min. Starting dose 300 mg/m² for age ≥70 or ECOG 2. Dose reductions by 50 mg/m² increments." }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "ALT",
        "alkaline phosphatase",
        "total bilirubin",
        "albumin",
        "sodium",
        "potassium"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT"
      ]
    }
  },

  {
    key:"GI-GINPRRT", cat:"GI", bcc:true,
    name:"Peptide Receptor Radionuclide Therapy (GINPRRT)",
    cycle:null,
    notes:"Out-of-province peptide receptor radionuclide therapy (PRRT) for advanced well-to-moderately differentiated neuroendocrine tumors (Ki67 ≤20%) with progressive or symptomatic disease despite octreotide LAT. Patients referred to Cross Cancer Institute, Edmonton. Requires out-of-province funding approval. (GINPRRT). BC Cancer GINPRRT.",
    drugs:[
      { name:"Lutetium-177 Octreotate or 131I-mIBG", dose:0, unit:"mg", basis:"flat", max:null, route:"IV", days:"Every 4–6 weeks, up to 4 cycles", reducible:false, note:"Radioisotope therapy administered at Cross Cancer Institute, Edmonton. Lutetium-177 octreotate for octreotide-avid disease; 131I-mIBG for mIBG-avid disease. Requires out-of-province funding approval." }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "platelets",
        "electrolytes",
        "creatinine",
        "BUN",
        "bilirubin",
        "AST",
        "LDH",
        "alkaline phosphatase",
        "INR",
        "albumin",
        "serum chromogranin A",
        "24-hour urine 5-HIAA",
        "octreotide scan (within 6 months)",
        "mIBG scan (within 6 months)",
        "CT or MRI (within 6 months)"
      ],
      cycle:[
        "CBC, chemistry per protocol"
      ]
    }
  },

  {
    key:"GI-GIPAJFIROX", cat:"GI", bcc:true,
    name:"mFOLFIRINOX – Irinotecan + Oxaliplatin + Fluorouracil + Leucovorin (GIPAJFIROX)",
    cycle:14,
    notes:"Adjuvant chemotherapy for resected pancreatic adenocarcinoma (R0 or R1 resection) or borderline resectable pancreatic adenocarcinoma. Maximum 12 cycles total including pre-operative and post-operative. (GIPAJFIROX). BC Cancer GIPAJFIROX.",
    drugs:[
      { name:"Oxaliplatin", dose:85, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:true, note:"IV in 250–500 mL D5W over 2 hours. Not compatible with NS.", levels:[60] },
      { name:"Leucovorin", dose:400, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:false, note:"IV in 250 mL D5W over 90 min concurrently with irinotecan via Y-connector." },
      { name:"Irinotecan", dose:150, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:true, note:"IV in 500 mL D5W over 90 min. May be infused concurrently with leucovorin via Y-connector.", levels:[120] },
      { name:"Fluorouracil", dose:2400, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:true, note:"Continuous infusion over 46 hours via Baxter LV5 INFUSOR.", levels:[1800] }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT",
        "alkaline phosphatase",
        "albumin",
        "sodium",
        "potassium",
        "random glucose",
        "HbA1c",
        "DPYD test"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT"
      ]
    }
  },

  {
    key:"GI-GIPAJGCAP", cat:"GI", bcc:true,
    name:"Adjuvant Gemcitabine and Capecitabine for Resected Pancreatic Adenocarcinoma",
    cycle:28,
    notes:"Adjuvant chemotherapy for resected (R0 or R1) node-negative or node-positive pancreatic adenocarcinoma. 6 cycles total. (GIPAJGCAP). BC Cancer GIPAJGCAP.",
    drugs:[
      { name:"Gemcitabine", dose:1000, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Days 1, 8, 15", reducible:true, note:"IV in 250 mL NS over 30 minutes. Reduce to 75% for ANC 0.5–<1.0 or platelets 50–<100. Omit Day 8/15 if ANC <0.5 or platelets <50.", levels:[750, 500] },
      { name:"Capecitabine", dose:830, unit:"mg/m²", basis:"bsa", max:null, route:"PO", days:"Days 1–21 BID (total 1660 mg/m²/day)", reducible:true, note:"Select dose per dose banding table. Dose per administration; total daily dose = 1660 mg/m². DPYD testing required before starting if not previously tested.", levels:[623, 415] }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT",
        "alkaline phosphatase",
        "albumin",
        "sodium",
        "potassium",
        "random glucose",
        "HbA1c",
        "DPYD test"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT"
      ],
      conditional:[
        { label:"Days 8 and 15", tests:["CBC & Diff"] },
        { label:"Baseline if clinically indicated", tests:["CA 19-9", "CEA", "GGT", "ECG"] }
      ]
    }
  },

  {
    key:"GI-GIPAJGEM", cat:"GI", bcc:true,
    name:"Adjuvant Gemcitabine for Pancreatic Adenocarcinoma",
    cycle:28,
    notes:"Adjuvant chemotherapy for resected pancreatic adenocarcinoma or node-positive margin-negative ampullary cancer. 6 cycles total. (GIPAJGEM). BC Cancer GIPAJGEM.",
    drugs:[
      { name:"Gemcitabine", dose:1000, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Days 1, 8, 15", reducible:true, note:"IV in 250 mL NS over 30 minutes. Reduce to 75% for ANC 0.5–1.0 or platelets 50–100. Delay if ANC <0.5 or platelets <50.", levels:[750, 500] }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "ALT",
        "alkaline phosphatase",
        "total bilirubin",
        "albumin",
        "sodium",
        "potassium",
        "random glucose",
        "HbA1c"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT"
      ],
      conditional:[
        { label:"Days 8 and 15", tests:["CBC & Diff"] },
        { label:"Baseline if clinically indicated", tests:["ECG", "CEA", "CA19-9", "GGT"] }
      ]
    }
  },

  {
    key:"GI-GIPAVFFIRI", cat:"GI", bcc:true,
    name:"FOLFIRI for Metastatic Pancreatic or Biliary Tract Cancer",
    cycle:14,
    notes:"Second or third-line treatment for locally advanced unresectable or metastatic pancreatic adenocarcinoma or biliary tract cancer (cholangiocarcinoma or gallbladder). (GIPAVFFIRI). BC Cancer GIPAVFFIRI.",
    drugs:[
      { name:"Irinotecan", dose:180, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:true, note:"IV in 500 mL D5W over 90 minutes. May co-infuse with leucovorin via Y-connector. Avoid prochlorperazine on same day.", levels:[150, 120] },
      { name:"Leucovorin", dose:400, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:false, note:"IV in 250 mL D5W over 90 minutes concurrent with irinotecan. May omit if fluorouracil push omitted; or use 20 mg/m² IV push." },
      { name:"Fluorouracil", dose:400, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1 (bolus)", reducible:true, note:"IV push bolus. Optional in advanced setting — may be omitted.", levels:[320, 240] },
      { name:"Fluorouracil", dose:2400, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1–2 (46-hour infusion)", reducible:true, note:"Continuous infusion over 46 hours via Baxter LV5 INFUSOR. DPYD testing required. Patients should have loperamide on hand.", levels:[2000, 1600] }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT",
        "alkaline phosphatase",
        "albumin",
        "sodium",
        "potassium",
        "random glucose",
        "HbA1c",
        "DPYD test"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA", "CA 19-9", "GGT", "ECG"] }
      ]
    }
  },

  {
    key:"GI-GIPAVFFOX", cat:"GI", bcc:true,
    name:"FOLFOX for Metastatic Pancreatic or Biliary Tract Cancer",
    cycle:14,
    notes:"Second or third-line treatment for locally advanced unresectable or metastatic pancreatic adenocarcinoma or biliary tract cancer (cholangiocarcinoma or gallbladder). Consider for patients with Gilbert's syndrome or intolerance to irinotecan. (GIPAVFFOX). BC Cancer GIPAVFFOX.",
    drugs:[
      { name:"Oxaliplatin", dose:85, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:true, note:"IV in 250–500 mL D5W over 2 hours. NOT compatible with NS. May co-infuse with leucovorin via Y-site. Counsel patients to avoid cold exposure for 3–5 days post-infusion.", levels:[65, 50] },
      { name:"Leucovorin", dose:400, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:false, note:"IV in 250 mL D5W over 2 hours concurrent with oxaliplatin. No dose modification. May omit if fluorouracil push omitted; or use 20 mg/m² IV push." },
      { name:"Fluorouracil", dose:400, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1 (bolus)", reducible:true, note:"IV push bolus. Optional in advanced setting — may be omitted.", levels:[320, 200] },
      { name:"Fluorouracil", dose:2400, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1–2 (46-hour infusion)", reducible:true, note:"Continuous infusion over 46 hours via Baxter LV5 INFUSOR. DPYD testing required.", levels:[2000, 1600] }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "random glucose",
        "HbA1c",
        "total bilirubin",
        "ALT",
        "alkaline phosphatase",
        "albumin",
        "sodium",
        "potassium",
        "DPYD test"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["ECG", "CEA", "CA 19-9", "GGT"] }
      ]
    }
  },

  {
    key:"GI-GIPE", cat:"GI", bcc:true,
    name:"Cisplatin and Etoposide for Poorly Differentiated Neuroendocrine Carcinoma",
    cycle:21,
    notes:"Palliative therapy for poorly differentiated neuroendocrine carcinoma. Carboplatin may substitute for cisplatin in patients with toxicity, poor performance status, or age >75. (GIPE). BC Cancer GIPE.",
    drugs:[
      { name:"Cisplatin", dose:25, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Days 1–3", reducible:true, note:"IV in 100–250 mL NS over 30 minutes. Reduce to 80% if CrCl 45–<60 mL/min; hold if CrCl <45. May substitute carboplatin AUC 5 Day 1 for cisplatin toxicity or poor PS or age >75." },
      { name:"Etoposide", dose:100, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Days 1–3", reducible:true, note:"IV in 250–1000 mL NS over 45–90 minutes using non-DEHP equipment with 0.2 micron in-line filter. Reduce for hematologic toxicity and hepatic dysfunction.", levels:[75, 50] }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "ALT",
        "alkaline phosphatase",
        "total bilirubin",
        "albumin",
        "sodium",
        "potassium"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["GGT", "ECG"] }
      ]
    }
  },

  {
    key:"GI-GIPGEMABR", cat:"GI", bcc:true,
    name:"Nab-Paclitaxel and Gemcitabine for Metastatic Pancreatic Cancer",
    cycle:28,
    notes:"First-line treatment for locally advanced unresectable or metastatic pancreatic cancer. (GIPGEMABR). BC Cancer GIPGEMABR.",
    drugs:[
      { name:"Paclitaxel (nab)", dose:125, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Days 1, 8, 15", reducible:true, note:"IV over 30 minutes in empty sterile bags with 15 micron filter. Select dose per dose banding table. Do NOT substitute with other paclitaxel formulations.", levels:[100, 75] },
      { name:"Gemcitabine", dose:1000, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Days 1, 8, 15", reducible:true, note:"IV in 250 mL NS over 30 minutes.", levels:[800, 600] }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT",
        "alkaline phosphatase",
        "albumin",
        "sodium",
        "potassium",
        "random glucose",
        "HbA1c"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT"
      ],
      conditional:[
        { label:"Days 8 and 15", tests:["CBC & Diff"] },
        { label:"Baseline if clinically indicated", tests:["ECG", "CEA", "CA19-9", "GGT"] }
      ]
    }
  },

  {
    key:"GI-GIPGEM", cat:"GI", bcc:true,
    name:"Gemcitabine for Pancreatic Adenocarcinoma, Gallbladder Cancer, and Cholangiocarcinoma",
    cycle:28,
    notes:"Palliative chemotherapy for metastatic or unresectable pancreatic adenocarcinoma, gallbladder cancer, or cholangiocarcinoma. Continue while clinical benefit (response or stable disease with symptom improvement). (GIPGEM). BC Cancer GIPGEM.",
    drugs:[
      { name:"Gemcitabine", dose:1000, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Days 1, 8, 15", reducible:true, note:"IV in 250 mL NS over 30 minutes. Reduce to 75% or delay for ANC 0.5–1.0 or platelets 50–100. Delay if ANC <0.5 or platelets <50.", levels:[750, 500] }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "ALT",
        "alkaline phosphatase",
        "total bilirubin",
        "albumin",
        "sodium",
        "potassium",
        "random glucose",
        "HbA1c"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT"
      ],
      conditional:[
        { label:"Days 8 and 15", tests:["CBC & Diff"] },
        { label:"Baseline if clinically indicated", tests:["ECG", "CEA", "CA19-9", "GGT"] }
      ]
    }
  },

  {
    key:"GI-GIPMHIPEC", cat:"GI", bcc:true,
    name:"HIPEC for Peritoneal Mesothelioma (Doxorubicin, Cisplatin, Paclitaxel)",
    cycle:null,
    notes:"Hyperthermic intraperitoneal chemotherapy (HIPEC) combined with cytoreductive surgery (CRS) for peritoneal mesothelioma. Performed only at Vancouver General Hospital. All cases require multidisciplinary review. Doses based on ideal body weight. (GIPMHIPEC). BC Cancer GIPMHIPEC.",
    drugs:[
      { name:"Cisplatin", dose:50, unit:"mg/m²", basis:"bsa", max:null, route:"Intraperitoneal", days:"Day 1 (intraoperative)", reducible:true, note:"Mixed with doxorubicin in 3L of 1.5% dextrose peritoneal dialysis solution (DIANEAL). Perfused for 90 min at 40–42°C. Doses based on IBW. Reduce to 75% if CrCl 45–60 mL/min; consider omitting if CrCl <45. All drugs reduced to 75% for patients >60 years." },
      { name:"Doxorubicin", dose:15, unit:"mg/m²", basis:"bsa", max:null, route:"Intraperitoneal", days:"Day 1 (intraoperative)", reducible:true, note:"Mixed with cisplatin in 3L of 1.5% dextrose peritoneal dialysis solution (DIANEAL). Perfused for 90 min at 40–42°C. Doses based on IBW. Cardiotoxic — use with caution in patients with severe hypertension or cardiac dysfunction." },
      { name:"Paclitaxel", dose:20, unit:"mg/m²", basis:"bsa", max:null, route:"Intraperitoneal", days:"Days 1–5 post-op (POD 1–5)", reducible:true, note:"Intraperitoneal via catheter in 1.5L of 1.5% dextrose peritoneal dialysis solution; 23-hour dwell, 1-hour drainage, daily for up to 5 days. May be shortened at surgeon's discretion. Doses based on IBW." }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "AST",
        "alkaline phosphatase",
        "tumour markers",
        "CT chest/abdomen/pelvis"
      ],
      cycle:[
        "CBC, chemistry per protocol"
      ]
    }
  },

  {
    key:"GI-GIPNEVER", cat:"GI", bcc:true,
    name:"Everolimus for Advanced Pancreatic Neuroendocrine Tumours",
    cycle:28,
    notes:"Palliative treatment for well to moderately differentiated unresectable or metastatic pancreatic neuroendocrine tumours. Note: approvals for GIPNEVER or GIPNSUNI — not both (unless intolerance within first month). (GIPNEVER). BC Cancer GIPNEVER.",
    drugs:[
      { name:"Everolimus", dose:10, unit:"mg", basis:"flat", max:null, route:"PO", days:"Daily continuously", reducible:true, note:"Take once daily. Prophylactic dexamethasone mouthwash 0.1 mg/mL (alcohol-free) 10 mL QID recommended for first 8–16 weeks to prevent stomatitis. Continue until disease progression or unacceptable toxicity.", levels:[5, 2.5] }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "sodium",
        "potassium",
        "creatinine",
        "urea",
        "random glucose",
        "calcium",
        "phosphate",
        "ALT",
        "LDH",
        "total bilirubin",
        "albumin",
        "INR",
        "alkaline phosphatase",
        "total cholesterol",
        "triglycerides"
      ],
      cycle:[
        "CBC & Diff"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["total protein", "GGT", "HBsAg", "HBsAb", "HBcoreAb", "chest x-ray", "oxygen saturation"] }
      ]
    }
  },

  {
    key:"GI-GIPNSUNI", cat:"GI", bcc:true,
    name:"Sunitinib for Advanced Pancreatic Neuroendocrine Tumours",
    cycle:28,
    notes:"Palliative treatment for well to moderately differentiated unresectable or metastatic pancreatic neuroendocrine tumours (PNET). Note: approvals for GIPNSUNI or GIPNEVER — not both (unless intolerance within first month). (GIPNSUNI). BC Cancer GIPNSUNI.",
    drugs:[
      { name:"Sunitinib", dose:37.5, unit:"mg", basis:"flat", max:null, route:"PO", days:"Daily continuously", reducible:true, note:"Take once daily. Continue until disease progression or unacceptable toxicity. May escalate to 50 mg/day if no response after 8 weeks and toxicity Grade ≤1 non-hematologic or ≤2 hematologic. Monitor BP daily for first 2 cycles. TSH every cycle for cycles 1–4 then every 2–3 months.", levels:[25] }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "ALT",
        "alkaline phosphatase",
        "total bilirubin",
        "albumin",
        "sodium",
        "potassium",
        "random glucose",
        "dipstick urinalysis for protein",
        "TSH"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "sodium",
        "potassium",
        "magnesium",
        "phosphate",
        "calcium",
        "random glucose",
        "total bilirubin",
        "ALT"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["GGT", "ECG"] }
      ]
    }
  },

  {
    key:"GI-GIRAJCOX", cat:"GI", bcc:true,
    name:"Adjuvant Oxaliplatin + Capecitabine for Stage III Rectal Cancer",
    cycle:21,
    notes:"Adjuvant therapy for upfront resected stage III (node positive) rectal cancer. 8 cycles if prior RT without concurrent fluoropyrimidine; 6 cycles if prior RT with concurrent capecitabine or fluorouracil. (GIRAJCOX). BC Cancer GIRAJCOX.",
    drugs:[
      { name:"Oxaliplatin", dose:130, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:true, note:"IV in 250–500 mL D5W over 2 hours. Not compatible with NS.", levels:[100, 85] },
      { name:"Capecitabine", dose:1000, unit:"mg/m²", basis:"bsa", max:null, route:"PO", days:"Days 1–14 BID", reducible:true, note:"1000 mg/m² BID (total 2000 mg/m²/day); select dose per dose banding table. DPYD testing required.", levels:[750, 500] }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "ALT",
        "alkaline phosphatase",
        "total bilirubin",
        "albumin",
        "sodium",
        "potassium",
        "DPYD test"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA", "CA19-9", "GGT", "ECG"] },
        { label:"Each cycle if clinically indicated", tests:["CEA", "CA19-9", "alkaline phosphatase", "albumin", "GGT", "sodium", "potassium", "ECG"] },
        { label:"Patients on warfarin", tests:["Weekly INR until stable dose, then INR prior to each cycle"] }
      ]
    }
  },

  {
    key:"GI-GIRAJFFOX", cat:"GI", bcc:true,
    name:"Adjuvant FOLFOX (Oxaliplatin + Fluorouracil + Leucovorin) for Stage III Rectal Cancer",
    cycle:14,
    notes:"Adjuvant therapy for upfront resected stage III (node positive) rectal cancer. 12 cycles if prior RT without concurrent fluoropyrimidine; 8 cycles if prior RT with concurrent capecitabine or fluorouracil. (GIRAJFFOX). BC Cancer GIRAJFFOX.",
    drugs:[
      { name:"Oxaliplatin", dose:85, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:true, note:"IV in 250–500 mL D5W over 2 hours. Not compatible with NS.", levels:[65, 50] },
      { name:"Leucovorin", dose:400, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:false, note:"IV in 250 mL D5W over 2 hours concurrent with oxaliplatin via Y-site." },
      { name:"Fluorouracil", dose:400, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:true, note:"IV bolus push on Day 1.", levels:[320, 200] },
      { name:"Fluorouracil", dose:2400, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Days 1–2 (46h CI)", reducible:true, note:"IV continuous infusion over 46 hours via Baxter LV5 INFUSOR. DPYD testing required.", levels:[1900, 1500] }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "ALT",
        "alkaline phosphatase",
        "total bilirubin",
        "albumin",
        "sodium",
        "potassium",
        "DPYD test"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA", "CA19-9", "GGT", "ECG"] },
        { label:"Each cycle if clinically indicated", tests:["CEA", "CA19-9", "alkaline phosphatase", "albumin", "GGT", "sodium", "potassium", "ECG"] },
        { label:"Patients on warfarin", tests:["Weekly INR until stable dose, then INR prior to each cycle"] }
      ]
    }
  },

  {
    key:"GI-GIRALT", cat:"GI", bcc:true,
    name:"Palliative Raltitrexed for Metastatic Colorectal Cancer",
    cycle:21,
    notes:"Palliative chemotherapy for metastatic or unresectable colorectal adenocarcinoma in patients who are unable to tolerate fluorouracil or capecitabine despite dose reductions, or in late relapse (>6 months) after poorly tolerated adjuvant fluorouracil-based treatment. (GIRALT). BC Cancer GIRALT.",
    drugs:[
      { name:"Raltitrexed", dose:3, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:true, note:"IV in 100 mL NS over 15 minutes. Dose modified for renal impairment (CrCl <65 mL/min). Leucovorin/folic acid must NOT be co-administered." }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "ALT",
        "alkaline phosphatase",
        "total bilirubin",
        "albumin",
        "sodium",
        "potassium"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA", "CA19-9", "GGT", "ECG"] },
        { label:"Each cycle if clinically indicated", tests:["CEA", "CA19-9", "alkaline phosphatase", "albumin", "GGT", "sodium", "potassium", "ECG"] }
      ]
    }
  },

  {
    key:"GI-GIRCAP", cat:"GI", bcc:true,
    name:"Adjuvant Capecitabine for Stage II/III Rectal Cancer (Post-RT)",
    cycle:21,
    notes:"Adjuvant capecitabine monotherapy for stage II or III rectal adenocarcinoma previously treated with preoperative or postoperative radiation or chemoradiation therapy. 8 cycles total. (GIRCAP). BC Cancer GIRCAP.",
    drugs:[
      { name:"Capecitabine", dose:1250, unit:"mg/m²", basis:"bsa", max:null, route:"PO", days:"Days 1–14 BID", reducible:true, note:"1000–1250 mg/m² BID (total 2000–2500 mg/m²/day) x 14 days; starting dose of 1000 mg/m² BID recommended for elderly or ECOG 2. DPYD testing required." }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "ALT",
        "alkaline phosphatase",
        "total bilirubin",
        "albumin",
        "sodium",
        "potassium",
        "DPYD test"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA", "CA19-9", "GGT", "ECG"] },
        { label:"Each cycle if clinically indicated", tests:["CEA", "CA19-9", "alkaline phosphatase", "albumin", "GGT", "sodium", "potassium", "ECG"] },
        { label:"Patients on warfarin", tests:["Weekly INR until stable dose, then INR prior to each cycle"] }
      ]
    }
  },

  {
    key:"GI-GIRCRT", cat:"GI", bcc:true,
    name:"Combined Modality Adjuvant Capecitabine + Radiation for High-Risk Rectal Cancer",
    cycle:21,
    notes:"Combined modality adjuvant therapy for stage II/III or resectable stage IV rectal adenocarcinoma using capecitabine concurrent with pelvic radiotherapy (45 Gy/25 fractions). NOTE: new patients should be started on GIRLCRT. Only use GIRCRT to complete treatment for existing patients. (GIRCRT). BC Cancer GIRCRT.",
    drugs:[
      { name:"Capecitabine", dose:825, unit:"mg/m²", basis:"bsa", max:null, route:"PO", days:"Each RT day BID (Chemoradiation cycle)", reducible:true, note:"825 mg/m² BID on each RT day (total 1650 mg/m²/day) during chemoradiation; 1250 mg/m² BID x 14 days for non-concurrent cycles. DPYD testing required." }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "ALT",
        "alkaline phosphatase",
        "total bilirubin",
        "albumin",
        "sodium",
        "potassium",
        "DPYD test"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA", "CA19-9", "GGT", "ECG"] },
        { label:"Weekly during radiation therapy", tests:["CBC & Diff", "creatinine"] },
        { label:"Each cycle if clinically indicated", tests:["CEA", "CA19-9", "alkaline phosphatase", "albumin", "GGT", "sodium", "potassium", "ECG"] },
        { label:"Patients on warfarin", tests:["Weekly INR until stable dose, then INR prior to each cycle"] }
      ]
    }
  },

  {
    key:"GI-GIREGO", cat:"GI", bcc:true,
    name:"Regorafenib for Advanced Hepatocellular Carcinoma",
    cycle:28,
    notes:"Second-line treatment for advanced hepatocellular carcinoma with disease progression on first-line sorafenib or lenvatinib. Child-Pugh A only. (GIREGO). BC Cancer GIREGO.",
    drugs:[
      { name:"Regorafenib", dose:160, unit:"mg", basis:"flat", max:null, route:"PO", days:"Days 1–21", reducible:true, note:"160 mg once daily Days 1–21 followed by 7-day rest. Take after a light, low-fat meal (<30% fat, ~300–550 calories). May start at 80–120 mg and escalate to 160 mg if tolerated.", levels:[120, 80] }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "ALT",
        "alkaline phosphatase",
        "total bilirubin",
        "albumin",
        "sodium",
        "potassium",
        "INR",
        "TSH",
        "urinalysis",
        "Blood pressure measurement"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT",
        "INR",
        "albumin",
        "urinalysis",
        "Blood pressure measurement"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["AFP", "GGT", "ECG"] },
        { label:"Each cycle if clinically indicated", tests:["AFP", "TSH", "alkaline phosphatase", "GGT", "sodium", "potassium", "ECG", "MUGA scan or echocardiogram"] },
        { label:"Patients on warfarin", tests:["Weekly INR until stable dose, then INR prior to each cycle"] }
      ]
    }
  },

  {
    key:"GI-GIRINFRT", cat:"GI", bcc:true,
    name:"Combined Modality Adjuvant Capecitabine/Infusional Fluorouracil + Radiation for High-Risk Rectal Cancer",
    cycle:21,
    notes:"Combined modality adjuvant therapy for stage II/III rectal adenocarcinoma using infusional fluorouracil concurrent with pelvic radiotherapy (45 Gy/25 fractions) followed by adjuvant capecitabine. Appropriate for colostomy/ileostomy patients who cannot tolerate capecitabine due to output issues. (GIRINFRT). BC Cancer GIRINFRT.",
    drugs:[
      { name:"Fluorouracil", dose:225, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Continuous infusion daily during RT", reducible:true, note:"225 mg/m²/day continuous IV infusion for duration of RT (up to 35 calendar days) via central venous access. DPYD testing required." },
      { name:"Capecitabine", dose:1250, unit:"mg/m²", basis:"bsa", max:null, route:"PO", days:"Days 1–14 BID (post-RT cycles)", reducible:true, note:"1250 mg/m² BID x 14 days for adjuvant cycles following radiation. DPYD testing required." }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "ALT",
        "alkaline phosphatase",
        "total bilirubin",
        "albumin",
        "sodium",
        "potassium",
        "DPYD test"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA", "CA19-9", "GGT", "ECG"] },
        { label:"Weekly during radiation therapy", tests:["CBC & Diff"] },
        { label:"Each cycle if clinically indicated", tests:["CEA", "CA19-9", "alkaline phosphatase", "albumin", "GGT", "sodium", "potassium", "ECG"] },
        { label:"Patients on warfarin", tests:["Weekly INR until stable dose, then INR prior to each cycle"] }
      ]
    }
  },

  {
    key:"GI-GIRLCRT", cat:"GI", bcc:true,
    name:"Combined Modality Capecitabine + Radiation for Rectal Cancer (Neoadjuvant or Adjuvant)",
    cycle:null,
    notes:"Capecitabine concurrent with pelvic radiotherapy (45 Gy/25 fractions) for colorectal adenocarcinoma planned for combination chemoradiotherapy. May be given neoadjuvantly (before or after GIRNACOX/GIRNAFFOX) or adjuvantly. Supersedes GIRCRT for new patients. (GIRLCRT). BC Cancer GIRLCRT.",
    drugs:[
      { name:"Capecitabine", dose:825, unit:"mg/m²", basis:"bsa", max:null, route:"PO", days:"Each RT day BID", reducible:true, note:"825 mg/m² BID on each RT day (total 1650 mg/m²/day) given on days that RT is administered. DPYD testing required." }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "ALT",
        "alkaline phosphatase",
        "total bilirubin",
        "albumin",
        "sodium",
        "potassium",
        "DPYD test"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA", "CA19-9", "GGT", "ECG"] },
        { label:"Weekly during radiation therapy", tests:["CBC & Diff", "creatinine"] },
        { label:"Each cycle if clinically indicated", tests:["CEA", "CA19-9", "alkaline phosphatase", "albumin", "GGT", "sodium", "potassium", "ECG"] },
        { label:"Patients on warfarin", tests:["Weekly INR until stable dose, then INR prior to each cycle"] }
      ]
    }
  },

  {
    key:"GI-GIRNACOX", cat:"GI", bcc:true,
    name:"Neoadjuvant Oxaliplatin + Capecitabine (CAPOX) for Locally Advanced Rectal Cancer",
    cycle:21,
    notes:"Neoadjuvant treatment for rectal adenocarcinoma treated with curative intent. Up to 9 cycles. Often given before or after GIRLCRT. (GIRNACOX). BC Cancer GIRNACOX.",
    drugs:[
      { name:"Oxaliplatin", dose:130, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:true, note:"IV in 250–500 mL D5W over 2 hours. Not compatible with NS.", levels:[100, 85] },
      { name:"Capecitabine", dose:1000, unit:"mg/m²", basis:"bsa", max:null, route:"PO", days:"Days 1–14 BID", reducible:true, note:"1000 mg/m² BID (total 2000 mg/m²/day) x 14 days; select dose per dose banding table. DPYD testing required.", levels:[750, 500] }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "ALT",
        "alkaline phosphatase",
        "total bilirubin",
        "albumin",
        "sodium",
        "potassium",
        "DPYD test"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA", "CA19-9", "GGT", "ECG"] },
        { label:"Each cycle if clinically indicated", tests:["CEA", "CA19-9", "alkaline phosphatase", "albumin", "GGT", "sodium", "potassium", "ECG"] },
        { label:"Patients on warfarin", tests:["Weekly INR until stable dose, then INR prior to each cycle"] }
      ]
    }
  },

  {
    key:"GI-GIRNAFFOX", cat:"GI", bcc:true,
    name:"Neoadjuvant FOLFOX (Oxaliplatin + Fluorouracil + Leucovorin) for Locally Advanced Rectal Cancer",
    cycle:14,
    notes:"Neoadjuvant treatment for rectal adenocarcinoma treated with curative intent. Up to 12 cycles. Often given before or after GIRLCRT. (GIRNAFFOX). BC Cancer GIRNAFFOX.",
    drugs:[
      { name:"Oxaliplatin", dose:85, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:true, note:"IV in 250–500 mL D5W over 2 hours. Not compatible with NS.", levels:[65, 50] },
      { name:"Leucovorin", dose:400, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:false, note:"IV in 250 mL D5W over 2 hours concurrent with oxaliplatin via Y-site." },
      { name:"Fluorouracil", dose:400, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Day 1", reducible:true, note:"IV bolus push on Day 1.", levels:[320, 200] },
      { name:"Fluorouracil", dose:2400, unit:"mg/m²", basis:"bsa", max:null, route:"IV", days:"Days 1–2 (46h CI)", reducible:true, note:"IV continuous infusion over 46 hours via Baxter LV5 INFUSOR. DPYD testing required.", levels:[1900, 1500] }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "ALT",
        "alkaline phosphatase",
        "total bilirubin",
        "albumin",
        "sodium",
        "potassium",
        "DPYD test"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA", "CA19-9", "GGT", "ECG"] },
        { label:"Each cycle if clinically indicated", tests:["CEA", "CA19-9", "alkaline phosphatase", "albumin", "GGT", "sodium", "potassium", "ECG"] },
        { label:"Patients on warfarin", tests:["Weekly INR until stable dose, then INR prior to each cycle"] }
      ]
    }
  },

  {
    key:"GI-GISORAF", cat:"GI", bcc:true,
    name:"Sorafenib for Advanced Hepatocellular Carcinoma",
    cycle:28,
    notes:"Advanced hepatocellular carcinoma; no prior systemic therapy and lenvatinib-intolerant, or progression on first-line GIATZB or GITREMDUR and lenvatinib-intolerant. (GISORAF). BC Cancer GISORAF.",
    drugs:[
      { name:"Sorafenib", dose:400, unit:"mg", basis:"flat", max:null, route:"PO", days:"BID continuously", reducible:true, note:"400 mg BID continuously. Dose level -1: 400 mg once daily. Dose level -2: 400 mg every other day.", levels:[400, 200] }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "ALT",
        "alkaline phosphatase",
        "total bilirubin",
        "albumin",
        "sodium",
        "potassium",
        "INR",
        "TSH"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT",
        "INR",
        "albumin"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["AFP", "GGT", "ECG"] },
        { label:"If clinically indicated", tests:["AFP", "alkaline phosphatase", "GGT", "sodium", "potassium", "lipase", "TSH", "ECG", "MUGA scan or echocardiogram"] },
        { label:"Patients on warfarin", tests:["Weekly INR until stable warfarin dose, then prior to each cycle"] }
      ]
    }
  },

  {
    key:"GI-GITREMDUR", cat:"GI", bcc:true,
    name:"Tremelimumab + Durvalumab for Advanced Hepatocellular Carcinoma",
    cycle:28,
    notes:"First-line treatment of previously untreated unresectable or metastatic hepatocellular carcinoma (HCC). Cycle 1: tremelimumab + durvalumab; Cycles 2–4: durvalumab monotherapy; Cycles 5+: durvalumab monotherapy (with option for one-time tremelimumab retreatment). (GITREMDUR). BC Cancer GITREMDUR.",
    drugs:[
      { name:"Tremelimumab", dose:300, unit:"mg", basis:"flat", max:null, route:"IV", days:"Day 1 (Cycle 1 only; one-time retreatment possible)", reducible:false, note:"300 mg IV in 50 mL NS over 60 minutes using a 0.2 micron in-line filter. Cycle 1 and one-time retreatment only. No dose modifications." },
      { name:"Durvalumab", dose:20, unit:"mg/kg", basis:"weight", max:1500, route:"IV", days:"Day 1 every 4 weeks", reducible:false, note:"20 mg/kg (max 1500 mg) IV in 100 mL NS over 60 minutes using a 0.2 micron in-line filter. All cycles. No dose modifications; toxicity managed by treatment delay." }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "alkaline phosphatase",
        "ALT",
        "total bilirubin",
        "albumin",
        "sodium",
        "potassium",
        "INR",
        "TSH",
        "morning serum cortisol",
        "chest x-ray or CT chest"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "sodium",
        "potassium",
        "total bilirubin",
        "ALT",
        "albumin",
        "INR",
        "TSH"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["AFP", "troponin", "creatine kinase", "free T3 and free T4", "GGT", "lipase", "random glucose", "serum or urine HCG", "serum ACTH levels", "testosterone", "estradiol", "FSH", "LH", "ECG"] },
        { label:"If clinically indicated", tests:["AFP", "alkaline phosphatase", "GGT", "morning serum cortisol", "lipase", "random glucose", "serum or urine HCG", "free T3 and free T4", "creatine kinase", "troponin", "serum ACTH levels", "testosterone", "estradiol", "FSH", "LH", "chest x-ray", "ECG"] }
      ]
    }
  },

  {
    key:"UGI-AVPANEN", cat:"GI", bcc:true,
    name:"Panitumumab + Encorafenib for BRAF V600E-Mutated Metastatic Colorectal Cancer",
    cycle:14,
    notes:"BRAF V600E-mutated metastatic colorectal cancer; progression after one or more lines of systemic therapy in the metastatic setting. Requires BC Cancer Compassionate Access Program approval. (UGIAVPANEN). BC Cancer UGIAVPANEN.",
    drugs:[
      { name:"Panitumumab", dose:6, unit:"mg/kg", basis:"weight", max:null, route:"IV", days:"Day 1", reducible:true, note:"6 mg/kg IV in 100 mL NS over 1 hour using 0.2 micron in-line filter; over 30 minutes if tolerated in subsequent cycles. No formal dose levels defined; discontinue if encorafenib discontinued." },
      { name:"Encorafenib", dose:300, unit:"mg", basis:"flat", max:null, route:"PO", days:"Daily continuously", reducible:true, note:"300 mg PO daily continuously.", levels:[225, 150] }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "ALT",
        "alkaline phosphatase",
        "total bilirubin",
        "albumin",
        "sodium",
        "potassium",
        "blood pressure"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT",
        "magnesium"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA", "CA19-9", "GGT", "magnesium", "calcium", "ECG", "dermatologic evaluation", "ophthalmology consult"] },
        { label:"If clinically indicated", tests:["CEA", "CA19-9", "alkaline phosphatase", "albumin", "calcium", "GGT", "sodium", "potassium", "ECG", "ophthalmology consult"] },
        { label:"Week 8", tests:["Consider dermatologic evaluation (secondary malignancy assessment)"] }
      ]
    }
  },

  {
    key:"UGI-AVPEM6", cat:"GI", bcc:true,
    name:"Pembrolizumab (6-Weekly) for First-Line dMMR/MSI-H Metastatic Colorectal Cancer",
    cycle:42,
    notes:"First-line treatment of dMMR/MSI-H metastatic colorectal adenocarcinoma. Requires BC Cancer Compassionate Access Program approval. Maximum 18 cycles (6-weekly dosing) or 2 years. (UGIAVPEM6). BC Cancer UGIAVPEM6.",
    drugs:[
      { name:"Pembrolizumab", dose:4, unit:"mg/kg", basis:"weight", max:400, route:"IV", days:"Day 1", reducible:false, note:"4 mg/kg (max 400 mg) IV in 50 mL NS over 30 minutes using 0.2 micron in-line filter. No dose modifications; toxicity managed by treatment delay (see SCIMMUNE)." }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "ALT",
        "alkaline phosphatase",
        "total bilirubin",
        "albumin",
        "sodium",
        "potassium",
        "TSH",
        "morning serum cortisol",
        "chest x-ray or CT chest"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "ALT",
        "total bilirubin",
        "sodium",
        "potassium",
        "TSH"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA", "CA19-9", "creatine kinase", "troponin", "free T3 and free T4", "GGT", "lipase", "random glucose", "serum or urine HCG", "serum ACTH levels", "testosterone", "estradiol", "FSH", "LH", "ECG"] },
        { label:"If clinically indicated", tests:["CEA", "CA19-9", "morning serum cortisol", "lipase", "random glucose", "serum or urine HCG", "free T3 and free T4", "serum ACTH levels", "testosterone", "estradiol", "FSH", "LH", "alkaline phosphatase", "albumin", "GGT", "creatine kinase", "troponin", "ECG", "chest x-ray"] }
      ]
    }
  },

  {
    key:"UGI-AVPEM", cat:"GI", bcc:true,
    name:"Pembrolizumab (3-Weekly) for First-Line dMMR/MSI-H Metastatic Colorectal Cancer",
    cycle:21,
    notes:"First-line treatment of dMMR/MSI-H metastatic colorectal adenocarcinoma. Requires BC Cancer Compassionate Access Program approval. Maximum 35 cycles (3-weekly dosing) or 2 years. (UGIAVPEM). BC Cancer UGIAVPEM.",
    drugs:[
      { name:"Pembrolizumab", dose:2, unit:"mg/kg", basis:"weight", max:200, route:"IV", days:"Day 1", reducible:false, note:"2 mg/kg (max 200 mg) IV in 50 mL NS over 30 minutes using 0.2 micron in-line filter. No dose modifications; toxicity managed by treatment delay (see SCIMMUNE)." }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "alkaline phosphatase",
        "ALT",
        "total bilirubin",
        "albumin",
        "sodium",
        "potassium",
        "TSH",
        "morning serum cortisol",
        "chest x-ray or CT chest"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "ALT",
        "total bilirubin",
        "sodium",
        "potassium",
        "TSH"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA", "CA19-9", "creatine kinase", "troponin", "free T3 and free T4", "GGT", "lipase", "random glucose", "serum or urine HCG", "serum ACTH levels", "testosterone", "estradiol", "FSH", "LH", "ECG"] },
        { label:"If clinically indicated", tests:["CEA", "CA19-9", "morning serum cortisol", "lipase", "random glucose", "serum or urine HCG", "free T3 and free T4", "serum ACTH levels", "testosterone", "estradiol", "FSH", "LH", "alkaline phosphatase", "albumin", "GGT", "creatine kinase", "troponin", "ECG", "chest x-ray"] }
      ]
    }
  },

  {
    key:"UGI-BPEMI", cat:"GI", bcc:true,
    name:"Pemigatinib for Advanced FGFR2-Mutated Cholangiocarcinoma",
    cycle:21,
    notes:"Metastatic or unresectable locally advanced cholangiocarcinoma with FGFR2 fusions or rearrangements; progression or intolerance to at least 1 prior systemic therapy. Requires BC Cancer Compassionate Access Program approval. Days 1–14 on, 7 days off per 21-day cycle. (UGIBPEMI). BC Cancer UGIBPEMI.",
    drugs:[
      { name:"Pemigatinib", dose:13.5, unit:"mg", basis:"flat", max:null, route:"PO", days:"Days 1–14 (7 days off)", reducible:true, note:"13.5 mg PO Days 1–14, followed by 7 days off per 21-day cycle. Severe hepatic or renal impairment: reduce starting dose to 9 mg.", levels:[9, 4.5] }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "ALT",
        "alkaline phosphatase",
        "total bilirubin",
        "phosphate",
        "albumin",
        "sodium",
        "potassium",
        "calcium"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT",
        "alkaline phosphatase",
        "phosphate",
        "calcium"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["CEA", "CA19-9", "GGT"] },
        { label:"Day 8 and 15 of Cycle 1", tests:["phosphate", "calcium", "creatinine"] },
        { label:"If clinically indicated", tests:["CEA", "CA19-9", "albumin", "GGT", "sodium", "potassium", "magnesium"] },
        { label:"Ophthalmologic monitoring", tests:["Comprehensive ophthalmologic exam at baseline, every 2 months for first 6 months, then every 3 months"] }
      ]
    }
  },

  {
    key:"UGI-CABO", cat:"GI", bcc:true,
    name:"Cabozantinib for Advanced Hepatocellular Carcinoma",
    cycle:28,
    notes:"Advanced hepatocellular carcinoma with disease progression on first-line sorafenib or lenvatinib, or intolerance to regorafenib. Second-line therapy. Requires BC Cancer Compassionate Access Program approval. (UGICABO). BC Cancer UGICABO.",
    drugs:[
      { name:"Cabozantinib", dose:60, unit:"mg", basis:"flat", max:null, route:"PO", days:"Daily continuously", reducible:true, note:"60 mg PO daily. Mild-moderate hepatic impairment: reduce starting dose to 40 mg.", levels:[40, 20] }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "creatinine",
        "ALT",
        "alkaline phosphatase",
        "total bilirubin",
        "albumin",
        "sodium",
        "potassium",
        "INR",
        "TSH",
        "blood pressure measurement"
      ],
      cycle:[
        "CBC & Diff",
        "creatinine",
        "total bilirubin",
        "ALT",
        "INR",
        "albumin",
        "blood pressure measurement"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["AFP", "GGT", "urinalysis", "ECG"] },
        { label:"If clinically indicated", tests:["AFP", "TSH", "alkaline phosphatase", "GGT", "sodium", "potassium", "urinalysis", "MUGA scan or echocardiogram", "ECG"] },
        { label:"Patients on warfarin", tests:["Weekly INR until stable warfarin dose, then prior to each cycle"] }
      ]
    }
  },

  {
    key:"UGI-NETEV", cat:"GI", bcc:true,
    name:"Everolimus for Advanced Gastrointestinal Neuroendocrine Tumours",
    cycle:28,
    notes:"Well-differentiated, non-functional neuroendocrine tumours of gastrointestinal origin, unknown primary, or other origins (except lung); unresectable, locally advanced or metastatic disease. Requires BC Cancer Compassionate Access Program approval. (UGINETEV). BC Cancer UGINETEV.",
    drugs:[
      { name:"Everolimus", dose:10, unit:"mg", basis:"flat", max:null, route:"PO", days:"Daily continuously", reducible:true, note:"10 mg PO once daily continuously. Mild hepatic impairment (Child-Pugh A): reduce to 7.5 mg. Moderate (Child-Pugh B): 5 mg. Severe (Child-Pugh C): max 2.5 mg.", levels:[5, 2.5] },
      { name:"Dexamethasone mouthwash", dose:0.1, unit:"mg/mL", basis:"flat", max:null, route:"Swish and spit", days:"QID Days 1–56 (first 8 weeks)", reducible:false, note:"Dexamethasone 0.1 mg/mL alcohol-free mouthwash, 10 mL QID for stomatitis prophylaxis. Swish 2 minutes then spit. Do not eat or drink for 1 hour after. Continue for 8 weeks (2 cycles) up to 16 weeks." }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "sodium",
        "potassium",
        "creatinine",
        "urea",
        "random glucose",
        "calcium",
        "phosphate",
        "ALT",
        "LDH",
        "total bilirubin",
        "albumin",
        "INR",
        "alkaline phosphatase",
        "total cholesterol",
        "triglycerides"
      ],
      cycle:[
        "CBC & Diff"
      ],
      conditional:[
        { label:"Baseline if clinically indicated", tests:["total protein", "GGT", "HBsAg", "HBsAb", "HBcoreAb", "chest x-ray", "oxygen saturation"] },
        { label:"If clinically indicated", tests:["total protein", "albumin", "total bilirubin", "INR", "GGT", "alkaline phosphatase", "LDH", "ALT", "urea", "random glucose", "HbA1c", "total cholesterol", "triglycerides", "creatinine", "sodium", "potassium", "magnesium", "calcium", "phosphate", "creatine kinase", "urinalysis for protein", "24 hour urine protein if indicated"] }
      ]
    }
  },

  {
    key:"UGI-PRRT", cat:"GI", bcc:true,
    name:"Lutetium 177Lu-Dotatate (PRRT) for Somatostatin Receptor-Positive Neuroendocrine Tumours",
    cycle:56,
    notes:"Well-differentiated neuroendocrine tumour of pancreas or mid-gut; unresectable or metastatic; somatostatin receptor positive on imaging; radiographic progression on somatostatin analogue (or contraindicated/intolerant). PRRT available at BC Cancer Vancouver Centre only. Maximum 4 doses every 8 weeks. Requires BC Cancer Compassionate Access Program approval. (UGIPRRT). BC Cancer UGIPRRT.",
    drugs:[
      { name:"Ondansetron", dose:8, unit:"mg", basis:"flat", max:null, route:"PO or IV", days:"Day 1 (30 min prior)", reducible:false, note:"Premedication 30 minutes prior to 177Lu-Dotatate infusion." },
      { name:"Lys-Arg Amino Acid Solution (2.5%)", dose:250, unit:"mL/hr", basis:"flat", max:null, route:"IV", days:"Day 1 (starting 30 min before and continuing during and for at least 3 hours after 177Lu-Dotatate)", reducible:false, note:"Nephroprotective amino acid infusion at 250 mL/hour (or as directed). Start 30 minutes before 177Lu-Dotatate and continue during infusion and for at least 3 hours after." },
      { name:"Lutetium 177Lu-Dotatate (Lutathera)", dose:7.4, unit:"GBq", basis:"flat", max:null, route:"IV", days:"Day 1 every 8 weeks (max 4 doses)", reducible:true, note:"7.4 GBq (200 mCi) IV over 30 minutes in radiation-shielded room with qualified nuclear medicine personnel. Dose may be reduced to 3.7 GBq (100 mCi) for hematologic, hepatic, or renal toxicity.", levels:[3.7] }
    ],
    labs:{
      baseline:[
        "CBC & Diff",
        "platelets",
        "creatinine",
        "sodium",
        "potassium",
        "calcium",
        "magnesium",
        "urea",
        "uric acid",
        "albumin",
        "total bilirubin",
        "ALT",
        "alkaline phosphatase",
        "GGT",
        "LDH",
        "TSH",
        "random glucose",
        "INR",
        "PT",
        "Chromogranin-A (CgA)",
        "functional somatostatin receptor imaging",
        "cross-sectional imaging",
        "transthoracic echocardiogram"
      ],
      cycle:[
        "CBC & Diff",
        "platelets",
        "creatinine",
        "sodium",
        "potassium",
        "calcium",
        "magnesium",
        "albumin",
        "total bilirubin",
        "ALT",
        "INR"
      ],
      conditional:[
        { label:"Pre-cycle (2 weeks prior to each treatment)", tests:["CBC & Diff", "platelets", "creatinine", "sodium", "potassium", "calcium", "magnesium", "albumin", "total bilirubin", "ALT", "INR"] },
        { label:"If clinically indicated", tests:["CgA", "HbA1c", "PT", "ECG"] }
      ]
    }
  },

  // =========================================================
  // GYNE (BC Cancer GO protocols)
  // =========================================================

  {
    key:"GO-GOCXBP",
    cat:"Gyne",
    bcc:true,
    name:"GOCXBP - Pembrolizumab ± Bevacizumab Maintenance [Cervix]",
    cycle:21,
    notes:"Maintenance therapy after completing chemotherapy portion of UGOCXCATP, UGOCXCATBP, GOCXCPNBP, or GOCXCPNP. Requires PD-L1 CPS ≥1. Pembrolizumab max 35 cycles (3-weekly) or 18 cycles (6-weekly), or 2 years total. Bevacizumab continued to progression or intolerance. Retreatment allowed for additional 1 year at progression if initial course completed without progression.",
    drugs:[
      { name:"Pembrolizumab", dose:2, unit:"mg/kg", basis:"weight", max:200, weightCap:null, route:"IV", days:"Day 1", reducible:false, note:"Cap 200 mg. No dose reductions; manage toxicity by treatment delay." },
      { name:"Bevacizumab", dose:15, unit:"mg/kg", basis:"weight", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:false, note:"Optional. Dose not recalculated if weight changes. Reduce to 10 mg/kg if 24-hr urine protein >2–4 g/24h." }
    ],
    labs:{
      baseline:["CBC & Diff", "creatinine", "ALT", "total bilirubin", "alkaline phosphatase", "sodium", "potassium", "TSH"],
      cycle:["CBC & Diff", "creatinine", "ALT", "total bilirubin", "alkaline phosphatase", "sodium", "potassium", "TSH"]
    }
  },

  {
    key:"GO-GOCXBP6",
    cat:"Gyne",
    bcc:true,
    name:"GOCXBP6 - Pembrolizumab ± Bevacizumab Maintenance 6-Weekly [Cervix]",
    cycle:42,
    notes:"6-weekly pembrolizumab maintenance after completing chemotherapy portion of UGOCXCATP, UGOCXCATBP, GOCXCPNBP, or GOCXCPNP. Requires PD-L1 CPS ≥1. Max 18 cycles (6-weekly) or 35 cycles (3-weekly) or 2 years total. Bevacizumab 15 mg/kg on Days 1 and 22. Retreatment allowed for additional 1 year at progression if initial course completed without progression.",
    drugs:[
      { name:"Pembrolizumab", dose:4, unit:"mg/kg", basis:"weight", max:400, weightCap:null, route:"IV", days:"Day 1", reducible:false, note:"Cap 400 mg. No dose reductions; manage toxicity by treatment delay." },
      { name:"Bevacizumab", dose:15, unit:"mg/kg", basis:"weight", max:null, weightCap:null, route:"IV", days:"Days 1, 22", reducible:false, note:"Optional. Dose not recalculated if weight changes. Reduce to 10 mg/kg if 24-hr urine protein >2–4 g/24h." }
    ],
    labs:{
      baseline:["CBC & Diff", "creatinine", "ALT", "total bilirubin", "alkaline phosphatase", "sodium", "potassium", "TSH"],
      cycle:["CBC & Diff", "creatinine", "ALT", "total bilirubin", "alkaline phosphatase", "sodium", "potassium", "TSH"]
    }
  },

  {
    key:"GO-GOCXCATB",
    cat:"Gyne",
    bcc:true,
    name:"GOCXCATB - CARBOplatin + PACLitaxel + Bevacizumab [Cervix/Vulva/Vagina]",
    cycle:21,
    notes:"Primary treatment of metastatic or recurrent non-small cell carcinoma of cervix, vulva, or vagina. Up to 6 cycles (may extend to 9 if ongoing response). CARBOplatin AUC 6; use AUC 5 if prior pelvic radiation. GFR capped at 125 mL/min. Conservative PACLitaxel 155 or 135 mg/m² may be used; reduce to 135 mg/m² for persistent arthralgia/myalgia.",
    drugs:[
      { name:"PACLitaxel", dose:175, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:true, note:"Over 3 hours. Conservative dosing 155 or 135 mg/m² may be used. Reduce to 135 mg/m² for persistent arthralgia/myalgia.", levels:[140, 105] },
      { name:"CARBOplatin", dose:6, unit:"AUC", basis:"auc", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:true, note:"AUC 6; use AUC 5 if prior pelvic radiation. GFR capped at 125 mL/min.", levels:[5, 4] },
      { name:"Bevacizumab", dose:15, unit:"mg/kg", basis:"weight", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:false, note:"Dose not recalculated after Cycle 1. Reduce to 10 mg/kg if 24-hr urine protein >2–4 g/24h." }
    ],
    labs:{
      baseline:["CBC & Diff", "creatinine", "total bilirubin", "ALT", "urinalysis for protein", "blood pressure"],
      cycle:["CBC & Diff", "creatinine", "total bilirubin", "ALT", "urinalysis for protein", "blood pressure"],
      conditional:[
        { label:"Day 14 (if clinically indicated)", tests:["CBC & Diff"] }
      ]
    }
  },

  {
    key:"GO-GOEAVDCAT",
    cat:"Gyne",
    bcc:true,
    name:"GOEAVDCAT - Dostarlimab + CARBOplatin + PACLitaxel [Endometrial MSI-H/dMMR]",
    cycle:21,
    notes:"MSI-H or dMMR advanced/metastatic endometrial cancer. Cycles 1–6: dostarlimab 500 mg + PACLitaxel 175 mg/m² + CARBOplatin AUC 5 or 6 q3 weeks. Cycles 7–23: dostarlimab 1000 mg q6 weeks. Maximum ~3 years total dostarlimab. CARBOplatin AUC 6; use AUC 5 if extensive prior radiation. GFR capped at 125 mL/min. No dose reductions for dostarlimab.",
    drugs:[
      { name:"Dostarlimab", dose:500, unit:"mg", basis:"flat", max:null, weightCap:null, route:"IV", days:"Day 1 (Cycles 1–6); 1000 mg q6w (Cycles 7–23)", reducible:false, note:"500 mg cycles 1–6; 1000 mg cycles 7–23 every 6 weeks. No dose modifications; manage toxicity by delay." },
      { name:"PACLitaxel", dose:175, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Day 1 (Cycles 1–6)", reducible:true, note:"Cycles 1–6 only. Conservative dosing 155 or 135 mg/m² may be used. Reduce to 80% for febrile neutropenia.", levels:[140, 105] },
      { name:"CARBOplatin", dose:6, unit:"AUC", basis:"auc", max:null, weightCap:null, route:"IV", days:"Day 1 (Cycles 1–6)", reducible:true, note:"Cycles 1–6 only. AUC 6; use AUC 5 if extensive prior radiation. GFR capped at 125 mL/min.", levels:[5, 4] }
    ],
    labs:{
      baseline:["CBC & Diff", "creatinine", "ALT", "alkaline phosphatase", "total bilirubin", "sodium", "potassium", "TSH", "random glucose", "morning serum cortisol", "chest x-ray"],
      cycle:["CBC & Diff", "creatinine", "ALT", "alkaline phosphatase", "total bilirubin", "sodium", "potassium", "TSH"]
    }
  },

  {
    key:"GO-GOEAVPCAT",
    cat:"Gyne",
    bcc:true,
    name:"GOEAVPCAT - Pembrolizumab + CARBOplatin + PACLitaxel [Endometrial]",
    cycle:21,
    notes:"Advanced or recurrent endometrial cancer (any histology except carcinosarcoma). Cycles 1–6: pembrolizumab 2 mg/kg (max 200 mg) + PACLitaxel 175 mg/m² + CARBOplatin AUC 5 or 6 q3 weeks. Cycles 7–20: pembrolizumab 4 mg/kg (max 400 mg) q6 weeks. Max 20 combined pembrolizumab cycles. CARBOplatin AUC 6; use AUC 5 if extensive prior radiation. GFR capped at 125 mL/min.",
    drugs:[
      { name:"Pembrolizumab", dose:2, unit:"mg/kg", basis:"weight", max:200, weightCap:null, route:"IV", days:"Day 1 (Cycles 1–6); 4 mg/kg max 400 mg q6w (Cycles 7–20)", reducible:false, note:"2 mg/kg (max 200 mg) cycles 1–6; 4 mg/kg (max 400 mg) cycles 7–20. No dose reductions; manage toxicity by delay." },
      { name:"PACLitaxel", dose:175, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Day 1 (Cycles 1–6)", reducible:true, note:"Cycles 1–6 only. Conservative dosing 155 or 135 mg/m² may be used. Reduce to 80% for febrile neutropenia.", levels:[140, 105] },
      { name:"CARBOplatin", dose:6, unit:"AUC", basis:"auc", max:null, weightCap:null, route:"IV", days:"Day 1 (Cycles 1–6)", reducible:true, note:"Cycles 1–6 only. AUC 6; use AUC 5 if extensive prior radiation. GFR capped at 125 mL/min.", levels:[5, 4] }
    ],
    labs:{
      baseline:["CBC & Diff", "creatinine", "ALT", "alkaline phosphatase", "total bilirubin", "sodium", "potassium", "TSH", "random glucose", "morning serum cortisol", "chest x-ray"],
      cycle:["CBC & Diff", "creatinine", "ALT", "alkaline phosphatase", "total bilirubin", "sodium", "potassium", "TSH"]
    }
  },

  {
    key:"GO-GOOVCAG",
    cat:"Gyne",
    bcc:true,
    name:"GOOVCAG - CARBOplatin + Gemcitabine [Ovarian, Recurrent Platinum-Sensitive]",
    cycle:21,
    notes:"Advanced ovarian, tubal, or peritoneal cancer recurring after first-line platinum-based treatment. CARBOplatin AUC 5 (may increase to AUC 6 if interval platelet count ≥150). Gemcitabine max 2000 mg. Usual 9 cycles; consider switching to GOOVCARB after 6 cycles if ongoing response. GFR capped at 125 mL/min.",
    drugs:[
      { name:"Gemcitabine", dose:800, unit:"mg/m²", basis:"bsa", max:2000, weightCap:null, route:"IV", days:"Days 1, 8", reducible:true, note:"Omit Day 8 if ANC <1.0 or platelets <100. Reduce to 700 mg/m² for hematologic toxicity.", levels:[700] },
      { name:"CARBOplatin", dose:5, unit:"AUC", basis:"auc", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:true, note:"AUC 5 standard; may increase to AUC 6 if interval platelet count ≥150. Reduce to AUC 4 for hematologic toxicity. GFR capped at 125 mL/min.", levels:[4] }
    ],
    labs:{
      baseline:["CBC & Diff", "creatinine"],
      cycle:["CBC & Diff", "creatinine"],
      conditional:[
        { label:"Before Day 8", tests:["CBC & Diff"] }
      ]
    }
  },

  {
    key:"GO-GOOVCATB",
    cat:"Gyne",
    bcc:true,
    name:"GOOVCATB - Bevacizumab + CARBOplatin + PACLitaxel [Ovarian, High Risk First-Line]",
    cycle:21,
    notes:"Induction: PACLitaxel + CARBOplatin ± bevacizumab (starting Cycle 2) q21 days x 6 cycles (may extend to 9). Maintenance: bevacizumab 7.5 mg/kg q21 days x 12 additional cycles (17 total doses). CARBOplatin AUC 6; use AUC 5 if prior pelvic RT. GFR capped at 125 mL/min. Conservative PACLitaxel dosing (135–155 mg/m²) for ECOG >2, myelosuppression, neuropathy, prior RT, or age >75.",
    drugs:[
      { name:"PACLitaxel", dose:175, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:true, note:"Conservative dosing 135–155 mg/m² for ECOG >2, myelosuppression, neuropathy, prior pelvic RT, or age >75. Reduce to 80% for febrile neutropenia.", levels:[140, 105] },
      { name:"CARBOplatin", dose:6, unit:"AUC", basis:"auc", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:true, note:"AUC 6 (AUC 5 if prior pelvic RT). GFR capped at 125 mL/min. Reduce to 80% for febrile neutropenia.", levels:[5, 4] },
      { name:"Bevacizumab", dose:7.5, unit:"mg/kg", basis:"weight", max:null, weightCap:null, route:"IV", days:"Day 1 (starting Cycle 2)", reducible:false, note:"Begins Cycle 2. Dose not recalculated after Cycle 1. Maintenance: continue q21 days x 12 additional cycles after induction (17 total)." }
    ],
    labs:{
      baseline:["CBC & Diff", "creatinine", "total bilirubin", "ALT", "urinalysis for protein", "blood pressure"],
      cycle:["CBC & Diff", "creatinine", "total bilirubin", "ALT", "urinalysis for protein", "blood pressure"],
      conditional:[
        { label:"Day 14 (nadir monitoring, induction)", tests:["CBC & Diff"] }
      ]
    }
  },

  {
    key:"GO-GOOVCATX",
    cat:"Gyne",
    bcc:true,
    name:"GOOVCATX - CARBOplatin + PACLitaxel [Ovarian, Visible Residual/Recurrent]",
    cycle:21,
    notes:"PACLitaxel 175 mg/m² + CARBOplatin AUC 6 q21–28 days x 6 cycles (may continue until progression if responding but not CR). GFR capped at 125 mL/min. Conservative PACLitaxel dosing (135–155 mg/m²) for ECOG >2, myelosuppression, neuropathy, prior pelvic RT, or age >75. If PACLitaxel not tolerated, consider single-agent carboplatin (GOOVCARB).",
    drugs:[
      { name:"PACLitaxel", dose:175, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:true, note:"Conservative dosing 135–155 mg/m² for ECOG >2, myelosuppression, neuropathy, prior pelvic RT, or age >75. Reduce to 80% for febrile neutropenia.", levels:[140, 105] },
      { name:"CARBOplatin", dose:6, unit:"AUC", basis:"auc", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:true, note:"AUC 6 (AUC 5 if extensive prior RT). GFR capped at 125 mL/min. Reduce to 80% for febrile neutropenia.", levels:[5, 4] }
    ],
    labs:{
      baseline:["CBC & Diff", "creatinine", "total bilirubin", "ALT"],
      cycle:["CBC & Diff", "creatinine", "total bilirubin", "ALT"],
      conditional:[
        { label:"Day 14 (if clinically indicated)", tests:["CBC & Diff"] }
      ]
    }
  },

  {
    key:"GO-GOOVBEVG",
    cat:"Gyne",
    bcc:true,
    name:"GOOVBEVG - Bevacizumab + Gemcitabine [Ovarian, Platinum-Resistant/Refractory]",
    cycle:28,
    notes:"Epithelial ovarian, primary peritoneal, or fallopian tube carcinoma. Platinum resistant, refractory, or rarely platinum-sensitive with contraindication to re-challenge. Gemcitabine Days 1, 8, 15; bevacizumab Day 1. Usual 6 cycles; may continue bevacizumab alone if gemcitabine stopped for toxicity.",
    drugs:[
      { name:"Gemcitabine", dose:800, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Days 1, 8, 15", reducible:true, note:"Reduce to 700 mg/m² for hematologic toxicity or febrile neutropenia. May omit Day 8 or 15 for low counts.", levels:[700] },
      { name:"Bevacizumab", dose:15, unit:"mg/kg", basis:"weight", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:false, note:"Dose not recalculated after Cycle 1. May reduce to 10 mg/kg for proteinuria (24h urine >2–4 g). Discontinue for hypertensive crisis, Grade 4 proteinuria, or GI perforation." }
    ],
    labs:{
      baseline:["CBC & Diff", "urinalysis for protein", "blood pressure"],
      cycle:["CBC & Diff", "urinalysis for protein", "blood pressure"],
      conditional:[
        { label:"Before Days 8, 15", tests:["CBC & Diff"] }
      ]
    }
  },

  {
    key:"GO-GOOVBEVLD",
    cat:"Gyne",
    bcc:true,
    name:"GOOVBEVLD - Bevacizumab + DOXOrubicin Liposomal [Ovarian, Platinum-Resistant/Refractory]",
    cycle:28,
    notes:"Epithelial ovarian, primary peritoneal, or fallopian tube carcinoma. Platinum resistant, refractory, or rarely platinum-sensitive with contraindication to re-challenge. DOXOrubicin PLD Day 1; bevacizumab Days 1 and 15. Usual 6 cycles; may continue bevacizumab alone if PLD stopped for toxicity. Hepatic dose adjustment: bilirubin 21–50 µmol/L → PLD 30 mg/m²; >50 µmol/L → 20 mg/m².",
    drugs:[
      { name:"DOXOrubicin pegylated liposomal", dose:40, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:true, note:"Reduce by 10 mg/m² for febrile neutropenia; reduce to 30 mg/m² for Grade 2–3 stomatitis or PPE; 30 mg/m² if bilirubin 21–50 µmol/L; 20 mg/m² if >50 µmol/L.", levels:[30, 20] },
      { name:"Bevacizumab", dose:10, unit:"mg/kg", basis:"weight", max:null, weightCap:null, route:"IV", days:"Days 1, 15", reducible:false, note:"Dose not recalculated after Cycle 1. Discontinue for hypertensive crisis, Grade 4 proteinuria, or GI perforation." }
    ],
    labs:{
      baseline:["CBC & Diff", "ALT", "alkaline phosphatase", "total bilirubin", "urinalysis for protein", "blood pressure"],
      cycle:["CBC & Diff", "urinalysis for protein", "blood pressure"]
    }
  },

  {
    key:"GO-GOOVBEVP",
    cat:"Gyne",
    bcc:true,
    name:"GOOVBEVP - Bevacizumab + PACLitaxel [Ovarian, Platinum-Resistant/Refractory]",
    cycle:21,
    notes:"Epithelial ovarian, primary peritoneal, or fallopian tube carcinoma. Platinum resistant, refractory, or rarely platinum-sensitive with contraindication to re-challenge. Both drugs Day 1. Usual 6 cycles; may continue bevacizumab alone if paclitaxel stopped for toxicity. Conservative paclitaxel 155 or 135 mg/m² may be used.",
    drugs:[
      { name:"PACLitaxel", dose:175, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:true, note:"Reduce to 135 mg/m² for persistent arthralgia/myalgia or neuropathy. Hepatic dysfunction adjustments apply.", levels:[135] },
      { name:"Bevacizumab", dose:15, unit:"mg/kg", basis:"weight", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:false, note:"Dose not recalculated after Cycle 1. May reduce to 10 mg/kg after hold for proteinuria. Discontinue for hypertensive crisis, Grade 4 proteinuria, or GI perforation." }
    ],
    labs:{
      baseline:["CBC & Diff", "ALT", "total bilirubin", "urinalysis for protein", "blood pressure"],
      cycle:["CBC & Diff", "total bilirubin", "ALT", "urinalysis for protein", "blood pressure"]
    }
  },

  {
    key:"GO-GOOVCARB",
    cat:"Gyne",
    bcc:true,
    name:"GOOVCARB - CARBOplatin [Ovarian/Peritoneal/Fallopian Tube/Cervical/Endometrial]",
    cycle:28,
    notes:"Single-agent carboplatin, first or second line. AUC 6 standard; use AUC 5 for extensive prior radiation, significant cytopenia with prior therapy, or age >80. Usual 6–9 cycles. GFR capped at 125 mL/min. Reduce to 80% for febrile neutropenia or threshold nadir counts.",
    drugs:[
      { name:"CARBOplatin", dose:6, unit:"AUC", basis:"auc", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:true, note:"AUC 6 standard; AUC 5 for prior extensive radiation, cytopenia, or age >80. Reduce to 80% for febrile neutropenia or nadir hematologic toxicity.", levels:[5] }
    ],
    labs:{
      baseline:["CBC & Diff", "creatinine"],
      cycle:["CBC & Diff", "creatinine"],
      conditional:[
        { label:"Days 14, 21 (nadir monitoring until pattern established)", tests:["CBC & Diff"] }
      ]
    }
  },

  {
    key:"GO-GOOVDOC",
    cat:"Gyne",
    bcc:true,
    name:"GOOVDOC - DOCEtaxel [Ovarian, Relapsed/Progressing]",
    cycle:21,
    notes:"Platinum-refractory/resistant ovarian, fallopian tube, or peritoneal carcinoma, or platinum-sensitive where platinum re-challenge not feasible. DOCEtaxel 75 mg/m² q21 days until progression (usual 9 cycles). Dexamethasone 8 mg PO BID x 3 days (starting 1 day prior) required each cycle.",
    drugs:[
      { name:"DOCEtaxel", dose:75, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:true, note:"Reduce to 60 mg/m² for ANC <1.0 or febrile neutropenia. Second febrile neutropenia: add G-CSF or discontinue.", levels:[60] }
    ],
    labs:{
      baseline:["CBC & Diff", "ALT", "alkaline phosphatase", "total bilirubin"],
      cycle:["CBC & Diff"]
    }
  },

  {
    key:"GO-GOOVETO",
    cat:"Gyne",
    bcc:true,
    name:"GOOVETO - Etoposide [Ovarian, Relapsed/Progressing]",
    cycle:21,
    notes:"Platinum-refractory/resistant ovarian, fallopian tube, or peritoneal carcinoma. Regimen A (no prior neutropenia): etoposide 50 mg PO BID x 10 days. Regimen B (prior neutropenia, age ≥70, or heavily pre-treated): alternating 100 mg/50 mg PO daily x 10 days — escalate to A if no toxicity. Regimen C (unable to take PO): etoposide 100 mg IV daily x 5 days. Repeat q21 days (usual 9 cycles).",
    drugs:[
      { name:"Etoposide (Regimen A)", dose:50, unit:"mg", basis:"flat", max:null, weightCap:null, route:"PO", days:"Days 1–10 (BID)", reducible:true, note:"For patients with no prior neutropenia. Reduce duration to 7 days for nadir toxicity." },
      { name:"Etoposide (Regimen C — IV)", dose:100, unit:"mg", basis:"flat", max:null, weightCap:null, route:"IV", days:"Days 1–5", reducible:true, note:"For patients unable to tolerate oral route. Reduce to 80 mg daily for Grade 3/4 toxicity." }
    ],
    labs:{
      baseline:["CBC & Diff", "creatinine", "ALT", "total bilirubin"],
      cycle:["CBC & Diff", "creatinine"],
      conditional:[
        { label:"Days 8, 15 (Cycle 1; any cycle with dose modification)", tests:["CBC & Diff"] }
      ]
    }
  },

  {
    key:"GO-GOOVFPLDC",
    cat:"Gyne",
    bcc:true,
    name:"GOOVFPLDC - DOXOrubicin Liposomal + CARBOplatin [Ovarian, First-Line]",
    cycle:28,
    notes:"First-line therapy when paclitaxel-carboplatin is not appropriate (anaphylaxis, neuropathy, intolerable side effects, or contraindication to high-dose steroids). DOXOrubicin PLD 30 mg/m² + CARBOplatin AUC 5 (AUC 4 if extensive prior RT) q28 days x 6 cycles (may extend to 9). GFR capped at 125 mL/min.",
    drugs:[
      { name:"DOXOrubicin pegylated liposomal", dose:30, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:true, note:"First infusion at 1 mg/min; subsequent over 1 hour if no prior reaction. Reduce to 25 mg/m² for febrile neutropenia; to 20 mg/m² for Grade 2–3 stomatitis or PPE.", levels:[25, 20] },
      { name:"CARBOplatin", dose:5, unit:"AUC", basis:"auc", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:true, note:"AUC 5 (AUC 4 if extensive prior RT). GFR capped at 125 mL/min. Reduce to 80% for febrile neutropenia.", levels:[4, 3] }
    ],
    labs:{
      baseline:["CBC & Diff", "creatinine", "total bilirubin", "ALT", "alkaline phosphatase"],
      cycle:["CBC & Diff", "creatinine"],
      conditional:[
        { label:"Days 14, 21 (nadir monitoring)", tests:["CBC & Diff"] }
      ]
    }
  },

  {
    key:"GO-GOOVGEM",
    cat:"Gyne",
    bcc:true,
    name:"GOOVGEM - Gemcitabine [Ovarian, Platinum-Resistant/Refractory]",
    cycle:28,
    notes:"Single-agent gemcitabine for platinum-refractory, resistant, or sensitive (carboplatin-intolerant) ovarian, primary peritoneal, or fallopian tube carcinoma. Gemcitabine 800 mg/m² Days 1, 8, 15. Usual 9 cycles. If hematologic toxicity recurs despite reduction to 700 mg/m²: discontinue or change to Day 1 & 8 or Day 1 & 15 schedule.",
    drugs:[
      { name:"Gemcitabine", dose:800, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Days 1, 8, 15", reducible:true, note:"Reduce to 700 mg/m² for hematologic toxicity, febrile neutropenia, or Grade 3 non-hematologic toxicity.", levels:[700] }
    ],
    labs:{
      baseline:["CBC & Diff"],
      cycle:["CBC & Diff"],
      conditional:[
        { label:"Before Days 1, 8, 15 (Cycle 1 and any cycle with dose change)", tests:["CBC & Diff"] }
      ]
    }
  },

  {
    key:"GO-GOOVLDOX",
    cat:"Gyne",
    bcc:true,
    name:"GOOVLDOX - DOXOrubicin Liposomal [Ovarian, Platinum-Resistant/Refractory]",
    cycle:28,
    notes:"Single-agent pegylated liposomal doxorubicin for platinum-refractory, resistant, or sensitive (carboplatin-intolerant) ovarian, primary peritoneal, or fallopian tube carcinoma. DOXOrubicin PLD 40 mg/m² Day 1. Usual 9 cycles. Initial infusion at 1 mg/min; subsequent doses over 1 hour if no prior reaction. Hepatic dose adjustment: bilirubin 21–50 µmol/L → 30 mg/m²; >50 µmol/L → 20 mg/m².",
    drugs:[
      { name:"DOXOrubicin pegylated liposomal", dose:40, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:true, note:"Reduce by 10 mg/m² for febrile neutropenia or Grade 3/4 non-hematologic toxicity; reduce to 30 mg/m² for Grade 2–3 stomatitis or PPE.", levels:[30, 20] }
    ],
    labs:{
      baseline:["CBC & Diff", "total bilirubin", "ALT", "alkaline phosphatase"],
      cycle:["CBC & Diff"]
    }
  },

  {
    key:"GO-GOOVPLDC",
    cat:"Gyne",
    bcc:true,
    name:"GOOVPLDC - DOXOrubicin Liposomal + CARBOplatin [Ovarian, Platinum-Sensitive Relapsed]",
    cycle:28,
    notes:"Platinum-sensitive relapsed ovarian, primary peritoneal, or fallopian tube carcinoma. DOXOrubicin PLD 30 mg/m² + CARBOplatin AUC 5 (AUC 4 if extensive prior RT) q28 days x 6 cycles (may extend to 9 if ongoing partial response). GFR capped at 125 mL/min.",
    drugs:[
      { name:"DOXOrubicin pegylated liposomal", dose:30, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:true, note:"Reduce to 25 mg/m² for febrile neutropenia; reduce to 20 mg/m² for Grade 2–3 stomatitis or PPE; bilirubin >50 µmol/L → 20 mg/m².", levels:[25, 20] },
      { name:"CARBOplatin", dose:5, unit:"AUC", basis:"auc", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:true, note:"AUC 5 (AUC 4 if extensive prior RT). GFR capped at 125 mL/min. Recalculate if creatinine increases >20%.", levels:[4] }
    ],
    labs:{
      baseline:["CBC & Diff", "creatinine", "total bilirubin", "ALT", "alkaline phosphatase", "echocardiogram or MUGA scan"],
      cycle:["CBC & Diff", "creatinine"],
      conditional:[
        { label:"Days 14, 21 after Cycle 1 (and any cycle with dose modification)", tests:["CBC & Diff"] }
      ]
    }
  },

  {
    key:"GO-GOOVTAX3",
    cat:"Gyne",
    bcc:true,
    name:"GOOVTAX3 - PACLitaxel [Ovarian, Platinum-Resistant/Refractory]",
    cycle:21,
    notes:"Single-agent paclitaxel for platinum-refractory, resistant, or sensitive (carboplatin-intolerant) ovarian, primary peritoneal, or fallopian tube carcinoma. PACLitaxel 175 mg/m² Day 1. Usual 9 cycles. Reduced starting dose 155 mg/m² for patients at increased risk. Premedicate with dexamethasone, diphenhydrAMINE, famotidine.",
    drugs:[
      { name:"PACLitaxel", dose:175, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:true, note:"Reduce to 155 mg/m² for febrile neutropenia. Hepatic dysfunction: bilirubin 1.26–2× ULN → 135 mg/m²; 2.01–5× ULN → 90 mg/m².", levels:[155, 135, 90] }
    ],
    labs:{
      baseline:["CBC & Diff", "total bilirubin", "ALT"],
      cycle:["CBC & Diff", "total bilirubin", "ALT"]
    }
  },

  {
    key:"GO-UGOCXCATBP",
    cat:"Gyne",
    bcc:true,
    name:"UGOCXCATBP - Pembrolizumab + PACLitaxel + CARBOplatin + Bevacizumab [Cervical Cancer]",
    cycle:21,
    notes:"Persistent, recurrent, or metastatic squamous/adenocarcinoma/adenosquamous cervical cancer with PD-L1 CPS ≥1. Requires CAP approval. Chemotherapy usually 6 cycles (may extend); pembrolizumab up to 35 cycles (3-weekly) or 18 cycles (6-weekly) or 2 years; bevacizumab to progression. GFR capped at 125 mL/min. Premedicate with dexamethasone, diphenhydrAMINE, famotidine prior to PACLitaxel.",
    drugs:[
      { name:"Pembrolizumab", dose:2, unit:"mg/kg", basis:"weight", max:200, weightCap:null, route:"IV", days:"Day 1", reducible:false, note:"Max 200 mg. No dose reductions; manage toxicity by delay per SCIMMUNE protocol." },
      { name:"PACLitaxel", dose:175, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:true, note:"Reduce to 80% for febrile neutropenia; reduce to 135 mg/m² for persistent arthralgia/myalgia.", levels:[140, 105] },
      { name:"CARBOplatin", dose:5, unit:"AUC", basis:"auc", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:true, note:"GFR capped at 125 mL/min. Reduce to 80% for febrile neutropenia. Recalculate if creatinine increases >20%.", levels:[4] },
      { name:"Bevacizumab", dose:15, unit:"mg/kg", basis:"weight", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:false, note:"Dose fixed after Cycle 1. Hold/discontinue for proteinuria >2 g/24h, hypertensive crisis, or Grade 3/4 hemorrhage/thrombosis." }
    ],
    labs:{
      baseline:["CBC & Diff", "creatinine", "ALT", "total bilirubin", "alkaline phosphatase", "sodium", "potassium", "TSH", "random glucose", "morning serum cortisol", "urinalysis for protein", "chest x-ray or CT chest"],
      cycle:["CBC & Diff", "creatinine", "ALT", "alkaline phosphatase", "total bilirubin", "sodium", "potassium", "TSH", "urinalysis for protein", "blood pressure"]
    }
  },

  {
    key:"GO-UGOCXCATP",
    cat:"Gyne",
    bcc:true,
    name:"UGOCXCATP - Pembrolizumab + PACLitaxel + CARBOplatin [Cervical Cancer]",
    cycle:21,
    notes:"Persistent, recurrent, or metastatic squamous/adenocarcinoma/adenosquamous cervical cancer with PD-L1 CPS ≥1. Requires CAP approval. Chemotherapy usually 6 cycles (may extend); pembrolizumab up to 35 cycles (3-weekly) or 18 cycles (6-weekly) or 2 years. GFR capped at 125 mL/min. Premedicate with dexamethasone, diphenhydrAMINE, famotidine prior to PACLitaxel. Monitor TSH each cycle.",
    drugs:[
      { name:"Pembrolizumab", dose:2, unit:"mg/kg", basis:"weight", max:200, weightCap:null, route:"IV", days:"Day 1", reducible:false, note:"Max 200 mg. No dose reductions; manage toxicity by delay per SCIMMUNE protocol." },
      { name:"PACLitaxel", dose:175, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:true, note:"Reduce to 80% for febrile neutropenia; reduce to 135 mg/m² for persistent arthralgia/myalgia.", levels:[140, 105] },
      { name:"CARBOplatin", dose:5, unit:"AUC", basis:"auc", max:null, weightCap:null, route:"IV", days:"Day 1", reducible:true, note:"GFR capped at 125 mL/min. Reduce to 80% for febrile neutropenia. Recalculate if creatinine increases >20%.", levels:[4] }
    ],
    labs:{
      baseline:["CBC & Diff", "creatinine", "ALT", "total bilirubin", "alkaline phosphatase", "sodium", "potassium", "TSH", "random glucose", "morning serum cortisol", "chest x-ray or CT chest"],
      cycle:["CBC & Diff", "creatinine", "ALT", "alkaline phosphatase", "total bilirubin", "sodium", "potassium", "TSH"]
    }
  },

  {
    key:"GO-UGOENDAVP6",
    cat:"Gyne",
    bcc:true,
    name:"UGOENDAVP6 - Pembrolizumab 6-Weekly [Endometrial MSI-H/dMMR]",
    cycle:42,
    notes:"Pembrolizumab monotherapy (6-weekly dosing) for MSI-H or dMMR advanced/metastatic endometrial cancer after at least one prior line of therapy. Requires CAP approval. Max 18 cycles (6-weekly) or 35 cycles (3-weekly) or 2 years. No dose reductions — toxicity managed by delay per SCIMMUNE protocol.",
    drugs:[
      { name:"Pembrolizumab", dose:4, unit:"mg/kg", basis:"weight", max:400, weightCap:null, route:"IV", days:"Day 1", reducible:false, note:"Max 400 mg. No dose reductions; manage toxicity by delay per SCIMMUNE protocol." }
    ],
    labs:{
      baseline:["CBC & Diff", "creatinine", "ALT", "alkaline phosphatase", "total bilirubin", "sodium", "potassium", "TSH", "random glucose", "morning serum cortisol", "chest x-ray or CT chest"],
      cycle:["CBC & Diff", "creatinine", "ALT", "alkaline phosphatase", "total bilirubin", "sodium", "potassium", "TSH"]
    }
  },

  // =========================================================
  // GU — additional protocols
  // =========================================================

{
  key: "GU-TIP",
  cat: "GU",
  bcc: true,
  name: "TIP [GCT — Salvage]",
  cycle: 21,
  notes: "Salvage therapy for germ cell tumours. Paclitaxel + ifosfamide + cisplatin.",
  drugs: [
    { name: "PACLitaxel",   dose: 250,  unit: "mg/m²", basis: "bsa", max: null, weightCap: null, route: "IV over 24h", days: "Day 1",    reducible: true },
    { name: "Ifosfamide",   dose: 1500, unit: "mg/m²", basis: "bsa", max: null, weightCap: null, route: "IV",          days: "Days 2–6", reducible: true },
    { name: "CISplatin",    dose: 25,   unit: "mg/m²", basis: "bsa", max: null, weightCap: null, route: "IV",          days: "Days 2–6", reducible: true },
    { name: "Mesna",        dose: 500,  unit: "mg/m²", basis: "bsa", max: null, weightCap: null, route: "IV",          days: "With ifosfamide", reducible: false }
  ],
  labs: {
      baseline: ["CBC & Diff", "platelets", "creatinine", "electrolytes", "magnesium", "total bilirubin", "ALT", "AFP", "beta-hCG", "LDH"],
      cycle: ["CBC & Diff", "platelets", "creatinine", "electrolytes", "magnesium", "total bilirubin", "ALT", "AFP", "beta-hCG"],
      conditional: [
        { label: "Day 5", tests: ["CBC & Diff", "platelets", "creatinine"] },
        { label: "Days 10 and 14", tests: ["CBC & Diff", "platelets"] },
        { label: "Pre-treatment and daily during chemotherapy", tests: ["urine dipstick for hematuria"] }
      ]
    }
},

{
  key: "GU-BCG-Intravesical",
  cat: "GU",
  bcc: true,
  name: "BCG Intravesical [NMIBC]",
  cycle: null,
  notes: "Induction: weekly ×6 instillations. Maintenance: weekly ×3 at months 3, 6, 12, 18, 24, 30, 36 (high-risk) or months 3, 6, 12 (intermediate-risk). BC Cancer GUBCG.",
  drugs: [
    { name: "BCG (ONCOTICE)", dose: 50, unit: "mg", basis: "flat", max: null, weightCap: null, route: "Intravesical", days: "Weekly ×6 induction; weekly ×3 at intervals", reducible: false },
    { name: "BCG (VERITY — alt)", dose: 80, unit: "mg", basis: "flat", max: null, weightCap: null, route: "Intravesical", days: "Same schedule as ONCOTICE", reducible: false }
  ],
  labs: {
      baseline: ["CBC & Diff", "urinalysis and urine C&S"],
      cycle: ["urinalysis"],
      conditional: []
    }
},

{
  key: "GU-Gem-Intravesical",
  cat: "GU",
  bcc: true,
  name: "Gemcitabine Intravesical [NMIBC — BCG-Unresponsive]",
  cycle: null,
  notes: "Induction: weekly ×6. Maintenance: monthly ×10. BCG-unresponsive NMIBC. BC Cancer GUBGEM.",
  drugs: [
    { name: "Gemcitabine", dose: 2000, unit: "mg", basis: "flat", max: null, weightCap: null, route: "Intravesical", days: "Weekly ×6 (induction); monthly ×10 (maintenance)", reducible: false }
  ],
  labs: {
      baseline: ["CBC & Diff", "urinalysis and urine C&S"],
      cycle: ["urinalysis"],
      conditional: []
    }
},

{
  key: "GU-Gem-Doc-Intravesical",
  cat: "GU",
  bcc: true,
  name: "Gemcitabine + Docetaxel Intravesical [NMIBC]",
  cycle: null,
  notes: "Sequential instillation — gemcitabine first, then docetaxel same session. Induction: weekly ×6. Maintenance: monthly ×10. BCG-unresponsive or BCG-naive high-risk. BC Cancer GUBGEMDOC.",
  drugs: [
    { name: "Gemcitabine", dose: 1000, unit: "mg", basis: "flat", max: null, weightCap: null, route: "Intravesical (first)", days: "Weekly ×6 (induction); monthly ×10 (maintenance)", reducible: false },
    { name: "Docetaxel",   dose: 37.5, unit: "mg", basis: "flat", max: null, weightCap: null, route: "Intravesical (after gemcitabine same session)", days: "Same session", reducible: false }
  ],
  labs: {
      baseline: ["CBC & Diff", "urinalysis and urine C&S"],
      cycle: ["urinalysis"],
      conditional: []
    }
},

{
  key: "GU-Mito-Intravesical",
  cat: "GU",
  bcc: true,
  name: "Mitomycin Intravesical [NMIBC]",
  cycle: null,
  notes: "Induction: weekly ×6. Maintenance: monthly ×10. BC Cancer GUBMITO.",
  drugs: [
    { name: "Mitomycin", dose: 40, unit: "mg", basis: "flat", max: null, weightCap: null, route: "Intravesical", days: "Weekly ×6 (induction); monthly ×10 (maintenance)", reducible: false }
  ],
  labs: {
      baseline: ["CBC & Diff", "urinalysis and urine C&S"],
      cycle: ["urinalysis"],
      conditional: []
    }
},

{
  key: "GU-GUSUNI",
  cat: "GU",
  bcc: true,
  name: "GUSUNI - SUNItinib [RCC]",
  cycle: 42,
  notes: "Advanced RCC, any histology and IMDC risk group. First-line or after failure of first-line immunotherapy. Standard schedule: 50 mg PO daily × 4 weeks on / 2 weeks off (cycle = 6 weeks). Alternative continuous schedule: 37.5 mg PO daily if rapid progression during rest period. Monitor TSH every cycle for first 4 cycles then every 2–3 months. Monitor blood pressure daily for at least first 2 cycles.",
  drugs: [
    {
      name: "SUNItinib",
      dose: 50,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "PO once daily",
      days: "Days 1–28, then 2 weeks rest (4 weeks on / 2 weeks off)",
      reducible: true,
      note: "Alternative: 37.5 mg PO daily continuously if rapid progression during rest period.",
      levels: [37.5, 25]
    }
  ],
  labs: {
    baseline: ["CBC & Diff", "sodium", "potassium", "creatinine", "ALT", "alkaline phosphatase", "total bilirubin", "total protein", "albumin", "urinalysis for protein", "uric acid", "TSH"],
    cycle: ["CBC & Diff", "creatinine", "uric acid", "ALT", "total bilirubin", "urinalysis for protein"],
    conditional: [
      { label: "Every other cycle (or if clinically indicated)", tests: ["TSH"] },
      { label: "Baseline if clinically indicated", tests: ["magnesium", "calcium", "phosphate", "random glucose", "GGT", "ECG", "MUGA scan or echocardiogram"] },
      { label: "If clinically indicated", tests: ["sodium", "potassium", "magnesium", "phosphate", "calcium", "albumin", "random glucose", "alkaline phosphatase", "GGT", "24-hour urine protein (if urinalysis ≥ 1 g/L or dipstick 2+/3+)", "total protein", "LDH", "TSH", "ECG", "MUGA scan or echocardiogram"] }
    ]
  }
},

{
  key: "GU-UGUPOLAP",
  cat: "GU",
  bcc: true,
  name: "UGUPOLAP - Olaparib [Prostate — mCRPC, HRR-Mutated (BRCA1/2 or ATM)]",
  cycle: 28,
  notes: "mCRPC with BRCA1/2 or ATM mutation; progressed on prior ARAT therapy (enzalutamide, abiraterone, apalutamide, or darolutamide). CAP approval required. Dispense 30-day supply in original container. Dose level −1: 250 mg BID; level −2: 200 mg BID. Reduce to 200 mg BID if CrCl 31–50 mL/min. Not recommended if CrCl ≤30 mL/min.",
  drugs: [
    {
      name: "olaparib",
      dose: 300,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "PO twice daily",
      days: "Daily (continuous)",
      reducible: true,
      note: "Dispense in original manufacturer container with desiccant. Reduce to 200 mg BID if CrCl 31–50 mL/min.",
      levels: [250, 200]
    }
  ],
  labs: {
    baseline: ["CBC & Diff", "creatinine", "sodium", "potassium", "ALT", "total bilirubin", "alkaline phosphatase"],
    cycle: ["CBC & Diff", "PSA"],
    conditional: [
      { label: "Day 14 if clinically indicated", tests: ["CBC & Diff"] },
      { label: "If clinically indicated", tests: ["creatinine", "sodium", "potassium", "ALT", "total bilirubin", "alkaline phosphatase", "albumin", "GGT", "LDH", "urea"] }
    ]
  }
},

{
  key: "GU-Mitox-Pred-mCRPC",
  cat: "GU",
  bcc: true,
  name: "Mitoxantrone + Prednisone [Prostate — mCRPC Palliative]",
  cycle: 21,
  notes: "Palliative mCRPC. Maximum 8–10 cycles. Lifetime anthracycline limit applies.",
  drugs: [
    { name: "Mitoxantrone", dose: 12,  unit: "mg/m²", basis: "bsa",  max: null, weightCap: null, route: "IV over 15–30 min", days: "Day 1",           reducible: true  },
    { name: "predniSONE",   dose: 10,  unit: "mg",    basis: "flat", max: null, weightCap: null, route: "PO daily",          days: "Daily (continuous)", reducible: false }
  ],
  labs: {
      baseline: ["CBC & Diff", "platelets", "creatinine", "total bilirubin", "ALT", "alkaline phosphatase", "PSA", "testosterone", "LVEF (MUGA or echocardiogram)"],
      cycle: ["CBC & Diff", "platelets", "creatinine", "total bilirubin", "ALT", "PSA"],
      conditional: [
        { label: "At cumulative dose ≥100 mg/m² and every 50 mg/m² thereafter", tests: ["LVEF"] }
      ]
    }
},

{
  key: "GU-Dox-Adrenal",
  cat: "GU",
  bcc: true,
  name: "DOXOrubicin [Adrenocortical Carcinoma — Palliative]",
  cycle: 21,
  notes: "Single-agent doxorubicin for adrenocortical carcinoma. Monitor cumulative anthracycline dose.",
  drugs: [
    { name: "DOXOrubicin", dose: 60, unit: "mg/m²", basis: "bsa", max: null, weightCap: null, route: "IV", days: "Day 1", reducible: true }
  ],
  labs: {
      baseline: ["CBC & Diff", "platelets", "creatinine", "total bilirubin", "ALT", "alkaline phosphatase", "cortisol", "DHEA-S", "LVEF (MUGA or echocardiogram)"],
      cycle: ["CBC & Diff", "platelets", "total bilirubin", "ALT"],
      conditional: [
        { label: "At cumulative doxorubicin dose ≥450 mg/m²", tests: ["LVEF"] }
      ]
    }
},

{
  key: "GU-EDP-M-Adrenal",
  cat: "GU",
  bcc: true,
  name: "EDP-M [Adrenocortical Carcinoma]",
  cycle: 28,
  notes: "Etoposide + Doxorubicin + Cisplatin + Mitotane for advanced ACC. Mitotane requires therapeutic drug monitoring (target 14–20 mg/L).",
  drugs: [
    { name: "Etoposide",   dose: 100,  unit: "mg/m²", basis: "bsa",  max: null, weightCap: null, route: "IV",       days: "Days 5–7",    reducible: true  },
    { name: "DOXOrubicin", dose: 40,   unit: "mg/m²", basis: "bsa",  max: null, weightCap: null, route: "IV",       days: "Day 1",       reducible: true  },
    { name: "CISplatin",   dose: 40,   unit: "mg/m²", basis: "bsa",  max: null, weightCap: null, route: "IV",       days: "Days 1, 9",   reducible: true  },
    { name: "Mitotane",    dose: 4000, unit: "mg",    basis: "flat", max: null, weightCap: null, route: "PO daily", days: "Continuous",  reducible: true, note: "Target plasma level 14–20 mg/L; requires TDM" }
  ],
  labs: {
      baseline: ["CBC & Diff", "platelets", "creatinine", "electrolytes", "magnesium", "total bilirubin", "ALT", "alkaline phosphatase", "cortisol", "DHEA-S", "LVEF (MUGA or echocardiogram)", "mitotane level"],
      cycle: ["CBC & Diff", "platelets", "creatinine", "electrolytes", "total bilirubin", "ALT", "mitotane level"],
      conditional: [
        { label: "Mitotane target level 14–20 mg/L; check every 4 weeks until stable", tests: ["mitotane level"] },
        { label: "At cumulative doxorubicin dose ≥450 mg/m²", tests: ["LVEF"] }
      ]
    }
},

{
  key: "GU-PE-SmallCell",
  cat: "GU",
  bcc: true,
  name: "Cisplatin + Etoposide [GU Small Cell / Neuroendocrine]",
  cycle: 21,
  notes: "Small-cell or high-grade neuroendocrine GU carcinoma. See also GUSCPE (BC Cancer code) for chemoRT option.",
  drugs: [
    { name: "CISplatin", dose: 75,  unit: "mg/m²", basis: "bsa", max: null, weightCap: null, route: "IV", days: "Day 1",    reducible: true },
    { name: "Etoposide", dose: 100, unit: "mg/m²", basis: "bsa", max: null, weightCap: null, route: "IV", days: "Days 1–3", reducible: true }
  ],
  labs: {
      baseline: ["CBC & Diff", "platelets", "creatinine", "electrolytes", "magnesium", "total bilirubin", "ALT", "chromogranin A", "neuron-specific enolase"],
      cycle: ["CBC & Diff", "platelets", "creatinine", "electrolytes", "magnesium"],
      conditional: [
        { label: "Day 8", tests: ["CBC & Diff", "platelets"] }
      ]
    }
},

  // =========================================================
  // GU — Urothelial / Bladder Cancer
  // =========================================================

  // =========================================================
  // GU — Urothelial / Bladder Cancer
  // =========================================================

// GU — UROTHELIAL / BLADDER CANCER
  {
    key: "GU-GUAVPG",
    cat: "GU",
    bcc: true,
    name: "GUAVPG - Gemcitabine + CISplatin [Urothelial — Palliative]",
    cycle: 21,
    notes: "First-line treatment for advanced or metastatic urothelial carcinoma. CISplatin may be replaced with CARBOplatin AUC 5 for patients with CrCl 45–59 mL/min or other CISplatin contraindications (reduce gemcitabine to 1000 mg/m²).",
    drugs: [
      { name:"Gemcitabine", dose:1250, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV in 250 mL NS over 30 min", days:"Days 1, 8", reducible:true, note:"Heme reduction tier: 75% (937.5 mg/m²) for ANC 0.5–1.0 or platelets 75–100; omit below.", levels:[937.5] },
      { name:"CISplatin", dose:70, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV in 500 mL NS over 1 h (with prehydration)", days:"Day 1", reducible:true, note:"Split-dose option: 35 mg/m² Days 1+2 or Days 1+8 if CrCl 45–59 mL/min" },
    ],
    labs: {
      baseline: ["CBC & Diff", "platelets", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin"],
      cycle: ["CBC & Diff", "platelets", "creatinine", "ALT", "alkaline phosphatase", "total bilirubin"],
      conditional: [{ label:"Day 8", tests:["CBC & Diff", "platelets", "creatinine"] }],
    },
  },
  {
    key: "GU-GUNAJPG",
    cat: "GU",
    bcc: true,
    name: "GUNAJPG - Gemcitabine + CISplatin [Urothelial — Neoadjuvant]",
    cycle: 21,
    notes: "Neoadjuvant chemotherapy for muscle-invasive urothelial cancer prior to cystectomy. Plan 4 cycles maximum prior to surgery. Preferred regimen is GUBDDMVAC; GUNAJPG used when dd-MVAC is contraindicated.",
    drugs: [
      { name:"Gemcitabine", dose:1250, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV in 250 mL NS over 30 min", days:"Days 1, 8", reducible:true, note:"Heme reduction tier: 75% (937.5 mg/m²) for ANC 0.5–1.0 or platelets 75–100; omit below.", levels:[937.5] },
      { name:"CISplatin", dose:70, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV in 500 mL NS over 1 h (with prehydration)", days:"Day 1", reducible:true, note:"Split-dose option: 35 mg/m² Days 1+8 if CrCl 45–59 mL/min" },
    ],
    labs: {
      baseline: ["CBC & Diff", "platelets", "creatinine", "total bilirubin", "ALT", "alkaline phosphatase", "baseline bladder and pelvis imaging"],
      cycle: ["CBC & Diff", "platelets", "creatinine", "total bilirubin", "ALT", "alkaline phosphatase"],
      conditional: [{ label:"Day 8", tests:["CBC & Diff", "platelets", "creatinine"] }],
    },
  },
  {
    key: "GU-GUAJPG",
    cat: "GU",
    bcc: true,
    name: "GUAJPG - Gemcitabine + CISplatin [Urothelial — Adjuvant]",
    cycle: 21,
    notes: "Adjuvant chemotherapy (4 cycles) for high-risk muscle-invasive urothelial carcinoma after radical cystectomy. CARBOplatin AUC 5 + gemcitabine 1000 mg/m² may substitute if CISplatin contraindicated.",
    drugs: [
      { name:"Gemcitabine", dose:1250, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV in 250 mL NS over 30 min", days:"Days 1, 8", reducible:true, note:"Heme reduction tier: 75% (937.5 mg/m²) for ANC 0.5–1.0 or platelets 75–100; omit below.", levels:[937.5] },
      { name:"CISplatin", dose:70, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV in 500 mL NS over 1 h (with prehydration)", days:"Day 1", reducible:true, note:"Split-dose: 35 mg/m² Days 1+8 if CrCl 45–59; CARBOplatin AUC 5 option if CISplatin contraindicated" },
    ],
    labs: {
      baseline: ["CBC & Diff", "platelets", "creatinine", "total bilirubin", "ALT", "alkaline phosphatase"],
      cycle: ["CBC & Diff", "platelets", "creatinine", "total bilirubin", "ALT", "alkaline phosphatase"],
      conditional: [{ label:"Day 8", tests:["CBC & Diff", "platelets", "creatinine"] }],
    },
  },
  {
    key: "GU-GUBDDMVAC",
    cat: "GU",
    bcc: true,
    name: "GUBDDMVAC - Dose-Dense MVAC [Urothelial — Neoadjuvant]",
    cycle: 14,
    notes: "Preferred neoadjuvant regimen for muscle-invasive urothelial cancer (cT2–T4). G-CSF support mandatory Days 4–10. Plan 4 cycles; up to 6 may be considered.",
    drugs: [
      { name:"Methotrexate", dose:30, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV push", days:"Day 1", reducible:true, note:null },
      { name:"VinBLAStine", dose:3, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV in 50 mL NS over 15 min", days:"Day 2", reducible:true, note:null },
      { name:"DOXOrubicin", dose:30, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV push", days:"Day 2", reducible:true, note:null },
      { name:"CISplatin", dose:70, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV in 500 mL NS over 1 h (with prehydration)", days:"Day 2", reducible:true, note:"Split-dose: 35 mg/m² Days 1+2 if CrCl 45–59 mL/min" },
      { name:"Filgrastim (G-CSF)", dose:5, unit:"mcg/kg", basis:"weight", max:null, weightCap:null, route:"SC", days:"Days 4–10", reducible:false, note:"Mandatory G-CSF support" },
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH"],
      cycle: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH"],
      conditional: [],
    },
  },
  {
    key: "GU-GUMVAC",
    cat: "GU",
    bcc: true,
    name: "GUMVAC - Classic MVAC [Urothelial — Palliative]",
    cycle: 28,
    notes: "Classic MVAC for advanced or high-risk resected urothelial carcinoma. Largely superseded by dose-dense MVAC (GUBDDMVAC) for neoadjuvant use. Requires CrCl ≥60 mL/min.",
    drugs: [
      { name:"Methotrexate", dose:30, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV push", days:"Days 1, 15, 22", reducible:true, note:null },
      { name:"VinBLAStine", dose:3, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV in 50 mL NS over 15 min", days:"Days 2, 15, 22", reducible:true, note:null },
      { name:"DOXOrubicin", dose:30, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV push", days:"Day 2", reducible:true, note:null },
      { name:"CISplatin", dose:70, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV in 500 mL NS over 1 h (with prehydration)", days:"Day 2", reducible:true, note:null },
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "total bilirubin", "ALT", "alkaline phosphatase"],
      cycle: ["CBC & Diff", "creatinine", "total bilirubin", "ALT"],
      conditional: [],
    },
  },
  {
    key: "GU-GUSCPE",
    cat: "GU",
    bcc: true,
    name: "GUSCPE - CISplatin + Etoposide [GU Small Cell / High-Grade Neuroendocrine]",
    cycle: 21,
    notes: "Small cell carcinoma of the bladder or prostate, or high-grade neuroendocrine GU tumours. CARBOplatin AUC 5 may substitute for CISplatin in cases of CISplatin toxicity or poor PS.",
    drugs: [
      { name:"CISplatin", dose:25, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV in 100–250 mL NS over 30 min", days:"Days 1–3", reducible:true, note:"Renal reduction: 15 mg/m²/day for CrCl 45–<60 mL/min; delay if CrCl <45.", levels:[15] },
      { name:"Etoposide", dose:100, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV in 250–1000 mL NS over 45–90 min", days:"Days 1–3", reducible:true, note:"Heme reduction tier: 75% (75 mg/m²/day) for ANC 0.5–1.0 or platelets 75–100. Hepatic adjustment: bilirubin 25–50 µmol/L → 50%; 51–85 → 25%; >85 → delay.", levels:[75] },
    ],
    labs: {
      baseline: ["CBC & Diff", "platelets", "creatinine", "total bilirubin", "ALT", "alkaline phosphatase", "albumin", "INR"],
      cycle: ["CBC & Diff", "platelets", "creatinine"],
      conditional: [{ label:"If clinically indicated", tests:["total bilirubin"] }],
    },
  },
  {
    key: "GU-GUSCPERT",
    cat: "GU",
    bcc: true,
    name: "GUSCPERT - CISplatin + Etoposide + RT [GU Small Cell — ChemoRT]",
    cycle: 21,
    notes: "Concurrent chemoradiation for limited-stage small cell carcinoma of the bladder or prostate and high-grade GU neuroendocrine tumours. RT given concurrently; cycles concurrent with pelvic RT may be spaced every 4 weeks. CARBOplatin AUC 5 may substitute.",
    drugs: [
      { name:"CISplatin", dose:25, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV in 100–250 mL NS over 30 min", days:"Days 1–3", reducible:true, note:"Renal reduction: 15 mg/m²/day for CrCl 45–<60 mL/min; delay if CrCl <45.", levels:[15] },
      { name:"Etoposide", dose:100, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV in 250–1000 mL NS over 45–90 min", days:"Days 1–3", reducible:true, note:"Heme reduction tier: 75% (75 mg/m²/day) for ANC 0.5–1.0 or platelets 75–100. Hepatic adjustment: bilirubin 25–50 µmol/L → 50%; 51–85 → 25%; >85 → delay.", levels:[75] },
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "total bilirubin", "ALT", "alkaline phosphatase", "albumin", "INR"],
      cycle: ["CBC & Diff", "creatinine"],
      conditional: [{ label:"If clinically indicated", tests:["total bilirubin"] }],
    },
  },
  {
    key: "GU-GUFUPRT",
    cat: "GU",
    bcc: true,
    name: "GUFUPRT - CISplatin + Fluorouracil + RT [Penile / GU SCC — ChemoRT]",
    cycle: 28,
    notes: "Combined modality therapy for locally advanced squamous cell carcinoma of the GU system including penile cancer. Fluorouracil as 96-hour continuous infusion. DPYD testing recommended. Repeat every 28 days for 4–6 cycles.",
    drugs: [
      { name:"CISplatin", dose:25, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV in 100–250 mL NS over 30 min", days:"Days 1–3", reducible:true, note:null },
      { name:"Fluorouracil", dose:1000, unit:"mg/m²", basis:"bsa", max:null, weightCap:null, route:"IV continuous infusion over 24 h (D5W, 5 mL/h)", days:"Days 1–4 (96 h total)", reducible:true, note:"DPYD testing recommended before fluorouracil" },
    ],
    labs: {
      baseline: ["CBC & Diff", "platelets", "creatinine", "albumin", "DPYD test"],
      cycle: ["CBC & Diff", "platelets", "creatinine"],
      conditional: [{ label:"If clinically indicated", tests:["total bilirubin", "ALT", "LDH", "alkaline phosphatase"] }],
    },
  },
  // Immunotherapy — Urothelial
  {
    key: "GU-GUAVPEM",
    cat: "GU",
    bcc: true,
    name: "GUAVPEM - Pembrolizumab q3w [Urothelial — Palliative]",
    cycle: 21,
    notes: "Second-line or later treatment for advanced or metastatic urothelial carcinoma after platinum-based chemotherapy. Max 35 cycles or 2 years. May switch to q6w dosing (GUAVPEM6) without additional CAP approval.",
    drugs: [
      { name:"Pembrolizumab", dose:2, unit:"mg/kg", basis:"weight", max:200, weightCap:null, route:"IV in 50 mL NS over 30 min", days:"Day 1", reducible:false, note:"Max 200 mg per dose; no dose reductions — manage toxicity by delay" },
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "morning serum cortisol", "chest x-ray"],
      cycle: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH"],
      conditional: [{ label:"If clinically indicated", tests:["chest x-ray", "morning serum cortisol", "lipase", "free T3", "free T4", "random glucose", "serum ACTH", "ECG", "CRP", "creatine kinase", "troponin"] }],
    },
  },
  {
    key: "GU-GUAJPEM",
    cat: "GU",
    bcc: true,
    name: "GUAJPEM - Pembrolizumab q3w [Urothelial — Adjuvant]",
    cycle: 21,
    notes: "Adjuvant treatment for high-risk muscle-invasive urothelial carcinoma after radical cystectomy. Max 18 cycles (~1 year, combined with GUAJPEM6). May switch to q6w dosing without additional CAP approval.",
    drugs: [
      { name:"Pembrolizumab", dose:2, unit:"mg/kg", basis:"weight", max:200, weightCap:null, route:"IV in 50 mL NS over 30 min", days:"Day 1", reducible:false, note:"Max 200 mg per dose; no dose reductions — manage toxicity by delay" },
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "morning serum cortisol", "chest x-ray"],
      cycle: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH"],
      conditional: [{ label:"If clinically indicated", tests:["chest x-ray", "morning serum cortisol", "lipase", "free T3", "free T4", "serum ACTH", "random glucose", "ECG", "CRP", "creatine kinase", "troponin"] }],
    },
  },
  {
    key: "GU-GUAVPEM6",
    cat: "GU",
    bcc: true,
    name: "GUAVPEM6 - Pembrolizumab q6w [Urothelial — Palliative]",
    cycle: 42,
    notes: "6-weekly dosing option for advanced urothelial carcinoma. Switch from GUAVPEM permitted without CAP approval. Max 18 cycles (q6w) or 35 cycles (q3w) or 2 years.",
    drugs: [
      { name:"Pembrolizumab", dose:4, unit:"mg/kg", basis:"weight", max:400, weightCap:null, route:"IV in 50 mL NS over 30 min", days:"Day 1", reducible:false, note:"Max 400 mg per dose; no dose reductions" },
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "morning serum cortisol", "chest x-ray"],
      cycle: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH"],
      conditional: [{ label:"If clinically indicated", tests:["chest x-ray", "morning serum cortisol", "lipase", "free T3", "free T4", "random glucose", "serum ACTH", "ECG", "CRP", "creatine kinase", "troponin"] }],
    },
  },
  {
    key: "GU-GUAJPEM6",
    cat: "GU",
    bcc: true,
    name: "GUAJPEM6 - Pembrolizumab q6w [Urothelial — Adjuvant]",
    cycle: 42,
    notes: "6-weekly adjuvant dosing option for urothelial carcinoma after cystectomy. Switch from GUAJPEM permitted without additional CAP approval. Max 9 cycles (q6w) or 18 combined with q3w (~1 year total).",
    drugs: [
      { name:"Pembrolizumab", dose:4, unit:"mg/kg", basis:"weight", max:400, weightCap:null, route:"IV in 50 mL NS over 30 min", days:"Day 1", reducible:false, note:"Max 400 mg per dose; no dose reductions" },
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "morning serum cortisol", "chest x-ray"],
      cycle: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH"],
      conditional: [{ label:"If clinically indicated", tests:["chest x-ray", "morning serum cortisol", "lipase", "free T3", "free T4", "serum ACTH", "random glucose", "ECG", "CRP", "creatine kinase", "troponin"] }],
    },
  },
  {
    key: "GU-GUAVNIV",
    cat: "GU",
    bcc: true,
    name: "GUAVNIV - Nivolumab q2w [Urothelial — Palliative]",
    cycle: 14,
    notes: "Post-platinum advanced or metastatic urothelial carcinoma. Max 52 weeks or 26 doses (combined with GUAVNIV4). May switch to q4w dosing (GUAVNIV4) without additional CAP approval.",
    drugs: [
      { name:"Nivolumab", dose:3, unit:"mg/kg", basis:"weight", max:240, weightCap:null, route:"IV in 50–100 mL NS over 30 min", days:"Day 1", reducible:false, note:"Max 240 mg per dose; no dose reductions" },
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "morning serum cortisol", "chest x-ray"],
      cycle: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH"],
      conditional: [{ label:"If clinically indicated", tests:["chest x-ray", "morning serum cortisol", "lipase", "random glucose", "free T3", "free T4", "serum ACTH", "ECG"] }],
    },
  },
  {
    key: "GU-UGUAJNIV",
    cat: "GU",
    bcc: true,
    name: "UGUAJNIV - Nivolumab q2w [Urothelial — Adjuvant]",
    cycle: 14,
    notes: "Adjuvant treatment of high-risk muscle-invasive urothelial carcinoma after radical cystectomy. Max 52 weeks (combined with UGUAJNIV4). May switch to q4w dosing without additional CAP approval.",
    drugs: [
      { name:"Nivolumab", dose:3, unit:"mg/kg", basis:"weight", max:240, weightCap:null, route:"IV in 50–100 mL NS over 30 min", days:"Day 1", reducible:false, note:"Max 240 mg per dose; no dose reductions" },
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "morning serum cortisol", "chest x-ray"],
      cycle: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH"],
      conditional: [{ label:"If clinically indicated", tests:["chest x-ray", "morning serum cortisol", "lipase", "random glucose", "free T3", "free T4", "serum ACTH", "ECG"] }],
    },
  },
  {
    key: "GU-GUAVNIV4",
    cat: "GU",
    bcc: true,
    name: "GUAVNIV4 - Nivolumab q4w [Urothelial — Palliative]",
    cycle: 28,
    notes: "4-weekly dosing option for post-platinum advanced urothelial carcinoma. Switch from GUAVNIV permitted without additional CAP approval. Max 52 weeks (combined with GUAVNIV).",
    drugs: [
      { name:"Nivolumab", dose:6, unit:"mg/kg", basis:"weight", max:480, weightCap:null, route:"IV in 50–100 mL NS over 30 min", days:"Day 1", reducible:false, note:"Max 480 mg per dose; no dose reductions" },
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "morning serum cortisol", "chest x-ray"],
      cycle: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH"],
      conditional: [{ label:"If clinically indicated", tests:["chest x-ray", "morning serum cortisol", "lipase", "random glucose", "free T3", "free T4", "serum ACTH", "ECG"] }],
    },
  },
  {
    key: "GU-UGUAJNIV4",
    cat: "GU",
    bcc: true,
    name: "UGUAJNIV4 - Nivolumab q4w [Urothelial — Adjuvant]",
    cycle: 28,
    notes: "4-weekly adjuvant dosing option after radical cystectomy for high-risk MIUC. Switch from UGUAJNIV permitted without additional CAP approval. Max 52 weeks combined.",
    drugs: [
      { name:"Nivolumab", dose:6, unit:"mg/kg", basis:"weight", max:480, weightCap:null, route:"IV in 50–100 mL NS over 30 min", days:"Day 1", reducible:false, note:"Max 480 mg per dose; no dose reductions" },
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "morning serum cortisol", "chest x-ray"],
      cycle: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH"],
      conditional: [{ label:"If clinically indicated", tests:["chest x-ray", "morning serum cortisol", "lipase", "random glucose", "free T3", "free T4", "serum ACTH", "ECG"] }],
    },
  },
  {
    key: "GU-GUAVNIVC",
    cat: "GU",
    bcc: true,
    name: "GUAVNIVC - Nivolumab q2w + Cabozantinib [RCC — First-Line]",
    cycle: 14,
    notes: "First-line treatment for advanced or metastatic RCC. Nivolumab 3 mg/kg q2w (max 240 mg) + cabozantinib 40 mg PO daily continuously. Max 52 nivolumab cycles or 2 years. May switch to q4w nivolumab (GUAVNIVC4) without CAP approval.",
    drugs: [
      { name:"Nivolumab", dose:3, unit:"mg/kg", basis:"weight", max:240, weightCap:null, route:"IV in 50–100 mL NS over 30 min", days:"Day 1", reducible:false, note:"No dose reductions; manage toxicity by delay" },
      { name:"Cabozantinib", dose:40, unit:"mg", basis:"flat", max:null, weightCap:null, route:"PO once daily", days:"Continuously", reducible:true, note:"Dose levels: 40 → 20 mg daily", levels:[20] },
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "morning serum cortisol", "total protein", "albumin", "urinalysis for protein", "uric acid", "calcium", "magnesium", "blood pressure"],
      cycle: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "urinalysis for protein", "uric acid", "blood pressure"],
      conditional: [{ label:"If clinically indicated", tests:["chest x-ray", "morning serum cortisol", "lipase", "random glucose", "free T3", "free T4", "serum ACTH", "GGT", "calcium", "magnesium", "phosphate", "troponin", "ECG"] }],
    },
  },
  {
    key: "GU-GUAVNIVC4",
    cat: "GU",
    bcc: true,
    name: "GUAVNIVC4 - Nivolumab q4w + Cabozantinib [RCC — First-Line]",
    cycle: 28,
    notes: "First-line treatment for advanced or metastatic RCC. Nivolumab 6 mg/kg q4w (max 480 mg) + cabozantinib 40 mg PO daily. Max 26 nivolumab cycles or 2 years. Switch from GUAVNIVC permitted without additional CAP approval.",
    drugs: [
      { name:"Nivolumab", dose:6, unit:"mg/kg", basis:"weight", max:480, weightCap:null, route:"IV in 50–100 mL NS over 30 min", days:"Day 1", reducible:false, note:"No dose reductions; manage toxicity by delay" },
      { name:"Cabozantinib", dose:40, unit:"mg", basis:"flat", max:null, weightCap:null, route:"PO once daily", days:"Continuously", reducible:true, note:"Dose levels: 40 → 20 mg daily", levels:[20] },
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "morning serum cortisol", "total protein", "albumin", "urinalysis for protein", "uric acid", "calcium", "magnesium", "blood pressure"],
      cycle: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "urinalysis for protein", "uric acid", "blood pressure"],
      conditional: [{ label:"If clinically indicated", tests:["chest x-ray", "morning serum cortisol", "lipase", "random glucose", "free T3", "free T4", "serum ACTH", "GGT", "calcium", "magnesium", "phosphate", "troponin", "ECG"] }],
    },
  },
  {
    key: "GU-GUAVIPNI",
    cat: "GU",
    bcc: true,
    name: "GUAVIPNI - Nivolumab + Ipilimumab [RCC — First-Line Induction]",
    cycle: 21,
    notes: "First-line induction for intermediate- or poor-risk advanced RCC. Induction: nivolumab 3 mg/kg + ipilimumab 1 mg/kg q3w × 4 cycles. Followed by nivolumab maintenance monotherapy (3 mg/kg q2w or 6 mg/kg q4w).",
    drugs: [
      { name:"Nivolumab", dose:3, unit:"mg/kg", basis:"weight", max:null, weightCap:null, route:"IV in 50–100 mL NS over 30 min", days:"Day 1", reducible:false, note:"Induction ×4: no cap. Maintenance: GUAVNIV/GUAVNIV4" },
      { name:"Ipilimumab", dose:1, unit:"mg/kg", basis:"weight", max:null, weightCap:null, route:"IV in 25–50 mL NS over 30 min", days:"Day 1", reducible:false, note:"Induction phase only (×4 cycles); separate line from nivolumab" },
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "random glucose", "TSH", "morning serum cortisol", "chest x-ray", "HBsAg", "HBsAb", "HBcoreAb"],
      cycle: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "creatine kinase", "random glucose"],
      conditional: [{ label:"If clinically indicated", tests:["chest x-ray", "morning serum cortisol", "lipase", "free T3", "free T4", "serum ACTH", "ECG"] }],
    },
  },
  {
    key: "GU-GUBAVE",
    cat: "GU",
    bcc: true,
    name: "GUBAVE - Avelumab [Urothelial — Maintenance]",
    cycle: 14,
    notes: "Maintenance therapy for locally advanced or metastatic urothelial carcinoma that has not progressed after 4–6 cycles of platinum-based chemotherapy. Premedicate with diphenhydramine + acetaminophen for first 4 infusions.",
    drugs: [
      { name:"Avelumab", dose:10, unit:"mg/kg", basis:"weight", max:null, weightCap:null, route:"IV in 250 mL NS over 60 min", days:"Day 1", reducible:false, note:"No dose reductions; manage toxicity by delay" },
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "morning serum cortisol", "random glucose"],
      cycle: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "TSH", "random glucose"],
      conditional: [{ label:"If clinically indicated", tests:["chest x-ray", "morning serum cortisol", "lipase", "free T3", "free T4", "serum ACTH", "fasting glucose", "ECG"] }],
    },
  },
  {
    key: "GU-GUAVEV",
    cat: "GU",
    bcc: true,
    name: "GUAVEV - Enfortumab Vedotin [Urothelial — Post-Platinum/IO]",
    cycle: 28,
    notes: "ADC targeting Nectin-4 for unresectable locally advanced or metastatic urothelial carcinoma after platinum-based chemotherapy and PD-1/PD-L1 inhibitor. Days 1, 8, 15 of 28-day cycle. Use actual body weight. Max 125 mg/dose.",
    drugs: [
      { name:"Enfortumab Vedotin", dose:1.25, unit:"mg/kg", basis:"weight", max:125, weightCap:null, route:"IV in 50 mL NS over 30 min", days:"Days 1, 8, 15", reducible:true, note:"Observe 60 min post-infusion cycle 1; dose levels: 1.25 → 1.0 → 0.75 → 0.5 mg/kg", levels:[1.0, 0.75, 0.5] },
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "sodium", "potassium", "phosphate", "random glucose", "uric acid", "lipase", "HbA1c"],
      cycle: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "sodium", "potassium", "phosphate", "random glucose"],
      conditional: [
        { label:"Days 8 and 15 of Cycle 1", tests:["CBC & Diff", "random glucose"] },
        { label:"If clinically indicated", tests:["uric acid", "lipase", "HbA1c", "ophthalmologic consult"] },
      ],
    },
  },
  {
    key: "GU-GUAVEVPEM",
    cat: "GU",
    bcc: true,
    name: "GUAVEVPEM - Enfortumab Vedotin + Pembrolizumab [Urothelial — First-Line]",
    cycle: 21,
    notes: "First-line treatment for unresectable locally advanced or metastatic urothelial carcinoma. EV 1.25 mg/kg Days 1, 8 + pembrolizumab 2 mg/kg (max 200 mg) Day 1 every 21 days. Pembrolizumab max 35 cycles or 2 years.",
    drugs: [
      { name:"Enfortumab Vedotin", dose:1.25, unit:"mg/kg", basis:"weight", max:125, weightCap:null, route:"IV in 50 mL NS over 30 min", days:"Days 1, 8", reducible:true, note:"Observe 60 min post-infusion; dose levels: 1.25 → 1.0 → 0.75 → 0.5 mg/kg", levels:[1.0, 0.75, 0.5] },
      { name:"Pembrolizumab", dose:2, unit:"mg/kg", basis:"weight", max:200, weightCap:null, route:"IV in 50 mL NS over 30 min", days:"Day 1", reducible:false, note:"Max 200 mg; no dose reductions" },
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "sodium", "potassium", "phosphate", "random glucose", "uric acid", "lipase", "HbA1c", "TSH", "LDH"],
      cycle: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "sodium", "potassium", "phosphate", "random glucose", "TSH", "LDH"],
      conditional: [
        { label:"Day 8 of each cycle", tests:["CBC & Diff", "random glucose"] },
        { label:"If clinically indicated", tests:["uric acid", "lipase", "HbA1c", "chest x-ray", "morning serum cortisol", "free T3", "free T4", "serum ACTH", "ECG", "CRP", "creatine kinase", "troponin", "ophthalmologic consult"] },
      ],
    },
  },
  {
    key: "GU-GUAVPEML",
    cat: "GU",
    bcc: true,
    name: "GUAVPEML - Pembrolizumab + Lenvatinib q3w [RCC — First-Line]",
    cycle: 21,
    notes: "First-line treatment for advanced or metastatic RCC (any histology). Pembrolizumab 2 mg/kg (max 200 mg) Day 1 + lenvatinib 20 mg PO daily. Lenvatinib continuous; pembrolizumab max 35 cycles or 2 years. Reduce lenvatinib to 10 mg/day if CrCl <30 mL/min or Child-Pugh C.",
    drugs: [
      { name:"Pembrolizumab", dose:2, unit:"mg/kg", basis:"weight", max:200, weightCap:null, route:"IV in 50 mL NS over 30 min", days:"Day 1", reducible:false, note:"Max 200 mg; no dose reductions" },
      { name:"Lenvatinib", dose:20, unit:"mg", basis:"flat", max:null, weightCap:null, route:"PO once daily", days:"Continuously", reducible:true, note:"Dose levels: 20 → 14 → 10 → 8 → 4 mg daily", levels:[14, 10, 8, 4] },
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "ALT", "alkaline phosphatase", "total bilirubin", "GGT", "sodium", "potassium", "magnesium", "calcium", "albumin", "TSH", "random glucose", "urinalysis for protein", "LDH", "blood pressure"],
      cycle: ["CBC & Diff", "creatinine", "ALT", "alkaline phosphatase", "total bilirubin", "sodium", "potassium", "magnesium", "calcium", "TSH", "urinalysis for protein", "blood pressure"],
      conditional: [
        { label:"Every 2 weeks for first 2 months", tests:["blood pressure", "ALT", "alkaline phosphatase", "total bilirubin", "albumin"] },
        { label:"If clinically indicated", tests:["morning serum cortisol", "lipase", "random glucose", "creatine kinase", "free T3", "free T4", "serum ACTH", "GGT", "total protein", "phosphate", "CRP", "troponin", "ECG", "chest x-ray"] },
      ],
    },
  },
  {
    key: "GU-GUAVPEML6",
    cat: "GU",
    bcc: true,
    name: "GUAVPEML6 - Pembrolizumab + Lenvatinib q6w [RCC — First-Line]",
    cycle: 42,
    notes: "6-weekly dosing option for first-line advanced or metastatic RCC. Pembrolizumab 4 mg/kg (max 400 mg) Day 1 + lenvatinib 20 mg PO daily. Switch from GUAVPEML permitted without additional CAP approval. Pembrolizumab max 18 cycles (q6w) or 35 cycles (q3w) or 2 years.",
    drugs: [
      { name:"Pembrolizumab", dose:4, unit:"mg/kg", basis:"weight", max:400, weightCap:null, route:"IV in 50 mL NS over 30 min", days:"Day 1", reducible:false, note:"Max 400 mg; no dose reductions" },
      { name:"Lenvatinib", dose:20, unit:"mg", basis:"flat", max:null, weightCap:null, route:"PO once daily", days:"Continuously", reducible:true, note:"Dose levels: 20 → 14 → 10 → 8 → 4 mg daily", levels:[14, 10, 8, 4] },
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "ALT", "alkaline phosphatase", "total bilirubin", "GGT", "sodium", "potassium", "magnesium", "calcium", "albumin", "TSH", "random glucose", "urinalysis for protein", "LDH", "blood pressure"],
      cycle: ["CBC & Diff", "creatinine", "ALT", "alkaline phosphatase", "total bilirubin", "sodium", "potassium", "magnesium", "calcium", "TSH", "urinalysis for protein", "blood pressure"],
      conditional: [
        { label:"Every 2 weeks for first 2 months", tests:["blood pressure", "ALT", "alkaline phosphatase", "total bilirubin", "albumin"] },
        { label:"If clinically indicated", tests:["morning serum cortisol", "lipase", "random glucose", "creatine kinase", "free T3", "free T4", "serum ACTH", "GGT", "total protein", "phosphate", "CRP", "troponin", "ECG", "chest x-ray"] },
      ],
    },
  },
  {
    key: "GU-UGUAVERD",
    cat: "GU",
    bcc: true,
    name: "UGUAVERD - Erdafitinib [Urothelial — FGFR3-Altered]",
    cycle: 28,
    notes: "FGFR inhibitor for locally advanced or metastatic urothelial carcinoma with susceptible FGFR3 mutations or fusions after prior platinum and PD-1/PD-L1 inhibitor therapy. Starting dose 8 mg/day; may increase to 9 mg in Cycle 2 if phosphate <2.25 mmol/L. Ophthalmologic monitoring required.",
    drugs: [
      { name:"Erdafitinib", dose:8, unit:"mg", basis:"flat", max:null, weightCap:null, route:"PO once daily", days:"Continuously", reducible:true, note:"May escalate to 9 mg in Cycle 2 if phosphate <2.25 mmol/L; dose levels: 8 → 6 → 5 → 4 mg", levels:[6, 5, 4] },
    ],
    labs: {
      baseline: ["CBC & Diff", "creatinine", "total bilirubin", "ALT", "alkaline phosphatase", "LDH", "phosphate", "albumin", "sodium", "potassium", "calcium", "urea"],
      cycle: ["CBC & Diff", "creatinine", "total bilirubin", "ALT", "alkaline phosphatase", "phosphate", "calcium", "sodium", "potassium"],
      conditional: [
        { label:"Day 14 and Day 21 of Cycle 1", tests:["phosphate", "calcium", "creatinine"] },
        { label:"Ophthalmologic exam", tests:["Baseline, monthly ×4, then every 3 months"] },
        { label:"If clinically indicated", tests:["LDH", "albumin", "magnesium", "urinalysis", "urea"] },
      ],
    },
  },

  // =========================================================
  // GU — Germ Cell Tumours (Testicular) / RCC / Other
  // =========================================================

// GU — TESTICULAR / GERM CELL TUMOURS

{
  key: "GU-GUBEP",
  cat: "GU",
  bcc: true,
  name: "GUBEP - BLEOmycin + Etoposide + CISplatin [Germ Cell — BEP]",
  cycle: 21,
  notes: "Standard curative therapy for germ cell tumours. Adjuvant: 2 cycles; good risk metastatic: 3 cycles; intermediate/poor risk metastatic: 4 cycles. Bleomycin given weekly (Days 1, 8, 15 each cycle). No dose reduction or delay permitted — curative intent; consult expert centre if any issue. Standard 5-day schedule preferred; 4-day alternative (cisplatin 25 mg/m² + etoposide 125 mg/m² Days 1–4) allowed only if statutory holiday conflict. Filgrastim indicated from 2nd cycle onwards if prior febrile neutropenia or neutrophil count not recovered by Day 5.",
  drugs: [
    {
      name: "CISplatin",
      dose: 20,
      unit: "mg/m²",
      basis: "bsa",
      max: null,
      weightCap: null,
      route: "IV in 100 mL NS over 30 min",
      days: "Days 1–5",
      reducible: false,
      note: "No dose reduction permitted — curative intent. 4-day alternative: 25 mg/m² Days 1–4."
    },
    {
      name: "Etoposide",
      dose: 100,
      unit: "mg/m²",
      basis: "bsa",
      max: null,
      weightCap: null,
      route: "IV in 250–1000 mL NS over 45–90 min (non-DEHP, 0.2 µm filter)",
      days: "Days 1–5",
      reducible: false,
      note: "No dose reduction permitted — curative intent. 4-day alternative: 125 mg/m² Days 1–4."
    },
    {
      name: "BLEOmycin",
      dose: 30,
      unit: "Units",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "IV in 50 mL NS over at least 10 min",
      days: "Days 1, 8, 15 (weekly)",
      reducible: false,
      note: "Given weekly — not tied to 21-day cycle boundary. Hydrocortisone premedication for each dose. Monitor for pulmonary toxicity before each cycle; creatinine required within 24h prior to Day 8 and Day 15."
    }
  ],
  labs: {
    baseline: ["CBC & Diff", "total bilirubin", "ALT", "alkaline phosphatase", "LDH", "creatinine", "sodium", "potassium", "magnesium", "calcium", "AFP", "beta-hCG", "CEA", "random glucose"],
    cycle: ["CBC & Diff", "creatinine", "LDH", "AFP", "beta-hCG", "magnesium", "sodium", "potassium", "random glucose"],
    conditional: [
      { label: "Day 5 (if ANC on Day 1 < 1.0 × 10⁹/L; not required in Cycle 1)", tests: ["CBC & Diff"] },
      { label: "Day 5 (if creatinine on Day 1 > ULN)", tests: ["creatinine"] },
      { label: "Within 24h prior to Day 8 and Day 15 (bleomycin days)", tests: ["creatinine"] },
      { label: "Baseline if indicated", tests: ["pulmonary function tests", "audiogram"] }
    ]
  }
},

{
  key: "GU-GUEP",
  cat: "GU",
  bcc: true,
  name: "GUEP - Etoposide + CISplatin [Germ Cell — EP, bleomycin-sparing]",
  cycle: 21,
  notes: "Bleomycin-sparing alternative for good-risk germ cell tumours (seminoma or nonseminoma) when there are contraindications to bleomycin. Duration: 4 cycles (3 cycles if adjuvant). No dose reduction or delay permitted — curative intent. Filgrastim indicated from 2nd cycle if prior febrile neutropenia or neutrophil count not recovered by Day 5. BEP × 3 remains the preferred regimen for good-risk disease.",
  drugs: [
    {
      name: "CISplatin",
      dose: 20,
      unit: "mg/m²",
      basis: "bsa",
      max: null,
      weightCap: null,
      route: "IV in 100 mL NS over 30 min",
      days: "Days 1–5",
      reducible: false,
      note: "No dose reduction permitted — curative intent."
    },
    {
      name: "Etoposide",
      dose: 100,
      unit: "mg/m²",
      basis: "bsa",
      max: null,
      weightCap: null,
      route: "IV in 250–1000 mL NS over 45–90 min (non-DEHP, 0.2 µm filter)",
      days: "Days 1–5",
      reducible: false,
      note: "No dose reduction permitted — curative intent."
    }
  ],
  labs: {
    baseline: ["CBC & Diff", "total bilirubin", "ALT", "alkaline phosphatase", "LDH", "creatinine", "sodium", "potassium", "magnesium", "calcium", "AFP", "beta-hCG", "random glucose"],
    cycle: ["CBC & Diff", "creatinine", "LDH", "AFP", "beta-hCG", "magnesium", "sodium", "potassium", "random glucose"],
    conditional: [
      { label: "Day 5 (if ANC on Day 1 < 1.0 × 10⁹/L; not required in Cycle 1)", tests: ["CBC & Diff"] },
      { label: "Day 5 (if creatinine on Day 1 > ULN)", tests: ["creatinine"] },
      { label: "Baseline if indicated", tests: ["audiogram"] }
    ]
  }
},

{
  key: "GU-GUVEIP",
  cat: "GU",
  bcc: true,
  name: "GUVEIP - VinBLAStine + Etoposide + Ifosfamide + CISplatin [Germ Cell — VeIP Salvage]",
  cycle: 21,
  notes: "Consolidation/salvage for germ cell tumours relapsed after etoposide-containing regimens (EP, BEP, VIP2), or for etoposide intolerance. Ifosfamide given Days 1–4 with mesna uroprotection (total ifosfamide dose maintained per published schedule). Vinblastine Days 1–2 only. Cisplatin given Days 1–5. Potentially curative — G-CSF may be used to maintain dose intensity. Monitor urine dipstick daily for hematuria during chemotherapy.",
  drugs: [
    {
      name: "VinBLAStine",
      dose: 0.11,
      unit: "mg/kg",
      basis: "weight",
      max: null,
      weightCap: null,
      route: "IV in 50 mL NS over 15 min",
      days: "Days 1–2",
      reducible: true,
      note: null
    },
    {
      name: "CISplatin",
      dose: 20,
      unit: "mg/m²",
      basis: "bsa",
      max: null,
      weightCap: null,
      route: "IV in 100 mL NS over 30 min",
      days: "Days 1–5",
      reducible: true,
      note: "Reduce by 25% if creatinine > 300 µmol/L."
    },
    {
      name: "Ifosfamide",
      dose: 1500,
      unit: "mg/m²",
      basis: "bsa",
      max: null,
      weightCap: null,
      route: "IV in 500 mL D5W-½NS over 1 hour",
      days: "Days 1–4",
      reducible: true,
      note: "Reduce by 25% if creatinine 200–300 µmol/L; reduce by 33% if creatinine > 300 µmol/L."
    },
    {
      name: "Mesna",
      dose: 300,
      unit: "mg/m²",
      basis: "bsa",
      max: null,
      weightCap: null,
      route: "IV in 100 mL D5W over 15 min × 3 doses (at Hours 1, 6.5, 10.5 relative to ifosfamide start)",
      days: "Days 1–4 (with each ifosfamide dose)",
      reducible: false,
      note: "Alternatively: mesna 720 mg/m² PO in carbonated beverage at 2h and 6h after ifosfamide."
    }
  ],
  labs: {
    baseline: ["CBC & Diff", "platelets", "creatinine", "electrolytes", "magnesium", "total bilirubin", "ALT", "alkaline phosphatase", "LDH", "albumin", "AFP", "beta-hCG"],
    cycle: ["CBC & Diff", "platelets", "creatinine", "electrolytes", "magnesium", "total bilirubin", "ALT", "alkaline phosphatase", "LDH", "albumin", "AFP", "beta-hCG"],
    conditional: [
      { label: "Day 5", tests: ["CBC & Diff", "platelets", "creatinine"] },
      { label: "Daily during chemotherapy", tests: ["Urine dipstick for hematuria"] }
    ]
  }
},

{
  key: "GU-GUTAXGEM",
  cat: "GU",
  bcc: true,
  name: "GUTAXGEM - PACLitaxel + Gemcitabine [Germ Cell — Salvage]",
  cycle: 28,
  notes: "Palliative salvage for cisplatin-refractory germ cell tumours (failed 1st-line EP/BEP and 2nd-line VIP/VeIP), including post-BMT relapse. Repeat every 28 days × 2–6 cycles; discontinue if no response after 2 cycles. Paclitaxel premedication required (dexamethasone 20 mg IV 45 min prior; diphenhydrAMINE 50 mg IV + famotidine 20 mg IV 30 min prior).",
  drugs: [
    {
      name: "PACLitaxel",
      dose: 110,
      unit: "mg/m²",
      basis: "bsa",
      max: null,
      weightCap: null,
      route: "IV in 250–500 mL NS over 1 hour (non-DEHP, 0.2 µm filter)",
      days: "Days 1, 8, 15",
      reducible: true,
      note: "Dose reduce per hematological toxicity table (75% or 50% of previous cycle).",
      levels: [82.5, 55]
    },
    {
      name: "Gemcitabine",
      dose: 1000,
      unit: "mg/m²",
      basis: "bsa",
      max: null,
      weightCap: null,
      route: "IV in 250 mL NS over 30 min",
      days: "Days 1, 8, 15",
      reducible: true,
      note: "Dose reduce per hematological and GI toxicity tables.",
      levels: [750, 500]
    }
  ],
  labs: {
    baseline: ["CBC & Diff", "platelets", "creatinine", "ALT", "alkaline phosphatase", "total bilirubin", "LDH", "AFP", "beta-hCG"],
    cycle: ["creatinine", "ALT", "alkaline phosphatase", "total bilirubin", "LDH", "AFP", "beta-hCG"],
    conditional: [
      { label: "Weekly during treatment", tests: ["CBC & Diff", "platelets"] },
      { label: "Every 8 weeks (baseline and alternate cycles)", tests: ["Imaging for response"] }
    ]
  }
},

{
  key: "GU-GUSCARB",
  cat: "GU",
  bcc: true,
  name: "GUSCARB - CARBOplatin AUC 7 [Seminoma — Adjuvant Stage I]",
  cycle: 28,
  notes: "Adjuvant therapy for high-risk Stage I seminoma. Requires CrCl ≥ 50 mL/min (Cockcroft-Gault). GFR capped at 125 mL/min for dose calculation. 2 cycles total. Measured GFR (nuclear renogram) preferred when feasible; lab-reported MDRD or Cockcroft-Gault may be used. Delay if ANC < 1.2 × 10⁹/L or platelets < 120 × 10⁹/L on treatment day.",
  drugs: [
    {
      name: "CARBOplatin",
      dose: 7,
      unit: "AUC",
      basis: "auc",
      max: null,
      weightCap: null,
      route: "IV in 100–250 mL NS over 30 min",
      days: "Day 1",
      reducible: true,
      note: "Calvert formula: dose (mg) = AUC 7 × (GFR + 25). GFR capped at 125 mL/min. Recalculate GFR at each cycle."
    }
  ],
  labs: {
    baseline: ["CBC & Diff", "platelets", "creatinine", "ALT", "alkaline phosphatase", "total bilirubin", "LDH"],
    cycle: ["CBC & Diff", "platelets", "creatinine"],
    conditional: [
      { label: "Days 14 and 21", tests: ["CBC & Diff", "platelets"] },
      { label: "If clinically indicated", tests: ["ALT", "alkaline phosphatase", "total bilirubin", "LDH"] }
    ]
  }
},

// GU — GCT SALVAGE (no PDF — keep existing)

{
  key: "GU-VIP",
  cat: "GU",
  bcc: true,
  name: "VIP [GCT — Salvage]",
  cycle: 21,
  notes: "Salvage therapy for germ cell tumours. Ifosfamide requires mesna uroprotection.",
  drugs: [
    { name: "Vinblastine",  dose: 0.11, unit: "mg/kg", basis: "weight", max: null, weightCap: null, route: "IV",      days: "Days 1–2", reducible: true },
    { name: "Ifosfamide",   dose: 1200, unit: "mg/m²", basis: "bsa",    max: null, weightCap: null, route: "IV",      days: "Days 1–5", reducible: true },
    { name: "CISplatin",    dose: 20,   unit: "mg/m²", basis: "bsa",    max: null, weightCap: null, route: "IV",      days: "Days 1–5", reducible: true },
    { name: "Mesna",        dose: 400,  unit: "mg/m²", basis: "bsa",    max: null, weightCap: null, route: "IV",      days: "With ifosfamide", reducible: false }
  ],
    labs: {
      baseline: ["CBC & Diff", "platelets", "creatinine", "electrolytes", "magnesium", "total bilirubin", "albumin", "AFP", "beta-hCG", "random glucose"],
      cycle: ["CBC & Diff", "platelets", "creatinine", "electrolytes", "magnesium", "total bilirubin", "albumin", "AFP", "beta-hCG", "random glucose"],
      conditional: [
        { label: "Day 5", tests: ["CBC & Diff", "platelets", "creatinine"] },
        { label: "Days 10 and 14", tests: ["CBC & Diff", "platelets"] },
        { label: "Pre-treatment and daily during chemotherapy", tests: ["urine dipstick for hematuria"] },
        { label: "Baseline if clinically indicated", tests: ["magnesium", "calcium", "phosphate", "random glucose", "GGT", "ECG", "MUGA scan or echocardiogram"] },
        { label: "If clinically indicated", tests: ["sodium", "potassium", "magnesium", "phosphate", "calcium", "albumin", "random glucose", "alkaline phosphatase", "GGT", "24-hour urine protein (if urinalysis ≥ 1 g/L or dipstick 2+/3+)", "total protein", "LDH", "TSH", "ECG", "MUGA scan or echocardiogram"] }
      ]
    }
},

{
  key: "GU-GUPAZO",
  cat: "GU",
  bcc: true,
  name: "GUPAZO - PAZOpanib [RCC]",
  cycle: 28,
  notes: "Advanced RCC, any histology and IMDC risk group. First-line or after failure of first-line immunotherapy. Monitor liver function closely — severe hepatotoxicity reported. Increase monitoring frequency during weeks 2, 4, 6, 8 and prior to each cycle. Monitor blood pressure daily for at least first 2 cycles.",
  drugs: [
    {
      name: "PAZOpanib",
      dose: 800,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "PO once daily",
      days: "Daily continuously",
      reducible: true,
      note: null,
      levels: [400, 200]
    }
  ],
  labs: {
    baseline: ["CBC & Diff", "platelets", "sodium", "potassium", "creatinine", "total protein", "albumin", "total bilirubin", "alkaline phosphatase", "ALT", "urinalysis", "TSH"],
    cycle: ["CBC & Diff", "platelets", "creatinine", "ALT", "total bilirubin"],
    conditional: [
      { label: "Every 2 weeks for Cycles 1 and 2", tests: ["CBC & Diff", "platelets", "creatinine", "ALT", "total bilirubin"] },
      { label: "Every other cycle or if clinically indicated", tests: ["TSH"] },
      { label: "If clinically indicated or history of cardiac problems", tests: ["MUGA scan or echocardiogram"] }
    ]
  }
},

{
  key: "GU-GUAXIT",
  cat: "GU",
  bcc: true,
  name: "GUAXIT - aXitinib [RCC — 2nd line]",
  cycle: 28,
  notes: "Metastatic RCC, any histology or IMDC risk group. After failure of first-line TKI (sunitinib, sorafenib, or pazopanib) OR after failure of first-line immunotherapy, OR intolerance to everolimus. Patients eligible for everolimus OR axitinib but not sequential use except for intolerance. Dose range 2–10 mg PO BID; may escalate to 10 mg BID if tolerated at starting dose with no > Grade 2 AEs for ≥ 2 consecutive weeks while normotensive without antihypertensives.",
  drugs: [
    {
      name: "aXitinib",
      dose: 5,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "PO twice daily",
      days: "Daily continuously",
      reducible: true,
      note: "Dose range 2–10 mg PO BID. May escalate to 10 mg BID if tolerated. May reduce to 2–4 mg BID for toxicity."
    }
  ],
  labs: {
    baseline: ["CBC & Diff", "sodium", "potassium", "creatinine", "total protein", "albumin", "total bilirubin", "alkaline phosphatase", "urinalysis", "uric acid", "TSH"],
    cycle: ["CBC & Diff", "urinalysis", "creatinine", "uric acid", "ALT", "total bilirubin"],
    conditional: [
      { label: "Every other cycle or if clinically indicated", tests: ["TSH"] },
      { label: "If clinically indicated or history of cardiac problems", tests: ["MUGA scan or echocardiogram"] }
    ]
  }
},

{
  key: "GU-GUSORAF",
  cat: "GU",
  bcc: true,
  name: "GUSORAF - SORAfenib [RCC]",
  cycle: 28,
  notes: "Advanced RCC after cytokine failure, any histology and IMDC risk group. Also for selected patients with severe early toxicity from sunitinib. Continuous dosing (no break). Monitor blood pressure daily for at least first 2 cycles. CYP3A4 drug interactions — review concurrent medications.",
  drugs: [
    {
      name: "SORAfenib",
      dose: 400,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "PO twice daily",
      days: "Daily continuously",
      reducible: true,
      note: "Level −1: 400 mg once daily. Level −2: 400 mg every other day.",
      levels: [400, 200]
    }
  ],
  labs: {
    baseline: ["CBC", "differential", "platelets", "sodium", "potassium", "creatinine", "total protein", "albumin", "total bilirubin", "alkaline phosphatase", "urinalysis", "TSH"],
    cycle: ["CBC", "differential", "platelets", "creatinine", "ALT", "total bilirubin"],
    conditional: [
      { label: "If clinically indicated or history of cardiac problems", tests: ["MUGA scan or echocardiogram"] }
    ]
  }
},

{
  key: "GU-GUTEM",
  cat: "GU",
  bcc: true,
  name: "GUTEM - Temsirolimus [RCC — Poor Prognosis]",
  cycle: 28,
  notes: "Advanced RCC with poor prognostic factors, any histology. Weekly IV dosing. diphenhydrAMINE 25–50 mg IV premedication 30 min before each infusion. Discontinue if tumour progression or Grade 3–4 toxicities not recovering to Grade 0–2 within 3 weeks. Response evaluation recommended every 8–10 weeks. CYP3A4 drug interactions — review concurrent medications. Risk of pneumonitis (mTOR class effect).",
  drugs: [
    {
      name: "Temsirolimus",
      dose: 25,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "IV in 250 mL NS (non-DEHP bag, non-DEHP tubing, 0.2 µm filter) over 30–60 min",
      days: "Day 1 weekly (every 7 days)",
      reducible: true,
      note: "Doses may be given up to 2 days early or late for holiday/scheduling.",
      levels: [20, 15]
    }
  ],
  labs: {
    baseline: ["CBC", "differential", "platelets", "sodium", "potassium", "creatinine", "BUN", "random glucose", "calcium", "phosphorus", "ALT", "LDH", "total bilirubin", "alkaline phosphatase", "total cholesterol", "triglycerides", "chest x-ray", "oxygen saturation"],
    cycle: ["CBC", "differential", "platelets"],
    conditional: [
      { label: "Prior to each cycle (required, results not needed before first treatment)", tests: ["sodium", "potassium", "creatinine", "BUN", "random glucose", "calcium", "phosphorus", "ALT", "LDH", "total bilirubin", "alkaline phosphatase", "total cholesterol", "triglycerides"] },
      { label: "If on anticoagulants", tests: ["INR", "PTT"] },
      { label: "If clinically indicated", tests: ["any abnormal baseline tests"] }
    ]
  }
},

{
  key: "GU-GUOTEVER",
  cat: "GU",
  bcc: true,
  name: "GUOTEVER - Everolimus [Tuberous Sclerosis Complex — Renal Angiomyolipoma]",
  cycle: 28,
  notes: "Tuberous sclerosis complex (TSC) with renal angiomyolipoma ≥ 3 cm on imaging. Distinct from RCC everolimus protocol. Continue until disease progression or unacceptable toxicity. Stomatitis prophylaxis: dexamethasone mouthwash 0.1 mg/mL (alcohol-free) 10 mL QID × 8 weeks (up to 16 weeks at oncologist discretion). Monitor for pneumonitis (mTOR class effect), hyperglycemia, hypercholesterolemia, hypertriglyceridemia.",
  drugs: [
    {
      name: "Everolimus",
      dose: 10,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "PO once daily",
      days: "Daily continuously",
      reducible: true,
      note: "Level −1: 5 mg daily. Level −2: 5 mg every other day. Hepatic impairment: Child-Pugh A → 7.5 mg; Child-Pugh B → 5 mg; Child-Pugh C → max 2.5 mg.",
      levels: [5, 2.5]
    }
  ],
  labs: {
    baseline: ["CBC & Diff", "sodium", "potassium", "creatinine", "urea", "random glucose", "magnesium", "calcium", "phosphate", "ALT", "LDH", "total bilirubin", "albumin", "INR", "alkaline phosphatase", "total cholesterol", "triglycerides", "urinalysis for protein", "blood pressure"],
    cycle: ["CBC & Diff", "creatinine", "urinalysis for protein"],
    conditional: [
      { label: "Prior to Cycles 2–4, then each visit", tests: ["CBC & Diff", "creatinine", "urinalysis for protein"] },
      { label: "Baseline if clinically indicated", tests: ["total protein", "albumin", "GGT", "HBsAg", "HBsAb", "HBcoreAb", "chest x-ray", "oxygen saturation"] },
      { label: "If clinically indicated", tests: ["total protein", "albumin", "total bilirubin", "INR", "GGT", "alkaline phosphatase", "LDH", "ALT", "urea", "random glucose", "HbA1c", "total cholesterol", "triglycerides", "sodium", "potassium", "magnesium", "calcium", "phosphate", "creatine kinase", "24-hour urine protein (if urinalysis ≥ 1 g/L or dipstick 2+/3+)"] }
    ]
  }
},

{
  key: "GU-GUOTSUNI",
  cat: "GU",
  bcc: true,
  name: "GUOTSUNI - SUNItinib [Pheochromocytoma / Paraganglioma]",
  cycle: 42,
  notes: "Unresectable malignant pheochromocytoma or secretory paraganglioma with documented progression, symptomatic disease, or risk of end-organ compromise. All patients with confirmed secretory tumours must receive appropriate alpha-adrenergic blockade ≥ 7–14 days prior to initiating therapy. Avoid dopamine receptor antagonists (metoclopramide, prochlorperazine) as antiemetics. Standard schedule: 50 mg PO daily × 4 weeks on / 2 weeks off (cycle = 6 weeks). Monitor TSH every cycle × 4, then every 2–3 months. Monitor blood pressure daily for at least first 2 cycles.",
  drugs: [
    {
      name: "SUNItinib",
      dose: 50,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "PO once daily",
      days: "Days 1–28, then 2 weeks rest (4 weeks on / 2 weeks off)",
      reducible: true,
      note: "Alternative: 37.5 mg PO daily continuously. Require alpha-adrenergic blockade before starting in secretory tumours.",
      levels: [37.5, 25]
    }
  ],
  labs: {
    baseline: ["CBC & Diff", "creatinine", "ALT", "alkaline phosphatase", "total bilirubin", "albumin", "total protein", "random glucose", "sodium", "potassium", "magnesium", "phosphate", "calcium", "urinalysis for protein", "TSH", "blood pressure", "24-hour urine metanephrines and catecholamines"],
    cycle: ["CBC & Diff", "creatinine", "total bilirubin", "ALT", "albumin", "random glucose", "sodium", "potassium"],
    conditional: [
      { label: "Cycle 2 prior to Day 1 (required before proceeding)", tests: ["CBC & Diff", "creatinine", "total bilirubin", "ALT", "albumin", "random glucose", "sodium", "potassium", "magnesium", "phosphate", "calcium"] },
      { label: "Cycles 3+ prior to Day 1", tests: ["CBC & Diff", "creatinine", "total bilirubin", "ALT", "random glucose", "sodium", "potassium"] },
      { label: "Baseline if clinically indicated", tests: ["ECG"] },
      { label: "If clinically indicated", tests: ["alkaline phosphatase", "albumin", "GGT", "magnesium", "phosphate", "calcium", "24-hour urine metanephrines and catecholamines", "TSH", "urinalysis for protein", "24-hour urine protein (if urinalysis ≥ 1 g/L or dipstick 2+/3+)", "ECG", "MUGA scan or echocardiogram"] }
    ]
  }
},

{
  key: "GU-UGUVHLBEL",
  cat: "GU",
  bcc: true,
  name: "UGUVHLBEL - Belzutifan [VHL Disease — RCC / Hemangioblastoma / pNET]",
  cycle: 28,
  notes: "Von Hippel-Lindau (vHL) disease-associated non-metastatic RCC, CNS hemangioblastomas, or nonmetastatic pancreatic neuroendocrine tumours not requiring immediate surgery. Requires BC Cancer Compassionate Access Program approval prior to treatment. Must have home pulse oximeter — check SpO₂ daily for first 2 weeks then as directed. Anemia is a key toxicity; do not use erythropoiesis-stimulating agents. Hormonal contraceptives may be ineffective — use non-hormonal contraception.",
  drugs: [
    {
      name: "Belzutifan",
      dose: 120,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "PO once daily",
      days: "Daily continuously",
      reducible: true,
      note: "Level −1: 80 mg daily. Level −2: 40 mg daily. Level −3: discontinue.",
      levels: [80, 40]
    }
  ],
  labs: {
    baseline: ["CBC & Diff", "creatinine", "total bilirubin", "ALT", "alkaline phosphatase", "random glucose", "iron studies", "pulse oximetry"],
    cycle: ["CBC & Diff", "creatinine", "total bilirubin", "ALT", "alkaline phosphatase", "random glucose", "pulse oximetry"],
    conditional: [
      { label: "Person of child-bearing potential — 7 days prior to initial prescription", tests: ["quantitative beta-hCG"] },
      { label: "Daily for first 2 weeks (home monitoring)", tests: ["pulse oximetry"] },
      { label: "If clinically indicated", tests: ["serum beta-hCG"] }
    ]
  }
},

{
  key: "GU-GUAVPEMAX",
  cat: "GU",
  bcc: true,
  name: "GUAVPEMAX - Pembrolizumab + aXitinib q3w [RCC — 1st Line]",
  cycle: 21,
  notes: "First-line metastatic RCC, any histology and IMDC risk group. Pembrolizumab 2 mg/kg (max 200 mg) IV q3w for up to 35 cycles (or 2 years). aXitinib 5 mg PO BID continuously; dose range 2–10 mg BID. No dose modifications for pembrolizumab — manage toxicity by delay. Retreatment with pembrolizumab ± axitinib permitted after progression if initial course completed without progression. Switch between 3-weekly and 6-weekly pembrolizumab does not require CAP approval. Monitor BP daily for at least first 2 cycles. Weekly nursing assessment for side effects during combination phase (optional).",
  drugs: [
    {
      name: "Pembrolizumab",
      dose: 200,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "IV in 50 mL NS over 30 min (0.2 µm in-line filter)",
      days: "Day 1",
      reducible: false,
      note: "Weight-based dosing: 2 mg/kg capped at 200 mg. No dose reductions — manage toxicity by delay. Dose banding applies (see protocol appendix)."
    },
    {
      name: "aXitinib",
      dose: 5,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "PO twice daily",
      days: "Daily continuously",
      reducible: true,
      note: "Starting dose 5 mg BID; may escalate to 10 mg BID if tolerated (no > Grade 2 AEs × 2 consecutive weeks, normotensive without antihypertensives). May reduce to 2 mg BID for toxicity. Hold for proteinuria ≥ 1 g/24h; discontinue for ≥ 3.5 g/24h."
    }
  ],
  labs: {
    baseline: ["CBC & Diff", "sodium", "potassium", "creatinine", "albumin", "ALT", "alkaline phosphatase", "total bilirubin", "LDH", "uric acid", "TSH", "morning serum cortisol", "urinalysis for protein", "chest x-ray"],
    cycle: ["CBC & Diff", "sodium", "potassium", "creatinine", "ALT", "alkaline phosphatase", "total bilirubin", "LDH", "uric acid", "TSH", "urinalysis for protein"],
    conditional: [
      { label: "During aXitinib monotherapy (after pembrolizumab completion)", tests: ["CBC & Diff", "creatinine", "ALT", "total bilirubin", "uric acid", "urinalysis for protein"] },
      { label: "TSH during aXitinib monotherapy", tests: ["TSH every other cycle or if clinically indicated"] },
      { label: "If clinically indicated (combination phase)", tests: ["serum or urine HCG (if pregnancy suspected)", "free T3", "free T4", "morning serum cortisol", "serum ACTH", "FSH", "LH", "estradiol", "testosterone", "albumin", "GGT", "total protein", "lipase", "calcium", "phosphate", "random glucose", "CRP", "creatine kinase", "troponin", "MUGA scan or echocardiogram", "ECG", "chest x-ray"] },
      { label: "If clinically indicated (aXitinib monotherapy phase)", tests: ["sodium", "potassium", "calcium", "phosphate", "albumin", "alkaline phosphatase", "GGT", "LDH", "total protein", "TSH", "MUGA scan or echocardiogram"] },
      { label: "If urinalysis ≥ 1 g/L or dipstick 2+/3+", tests: ["24-hour urine protein"] }
    ]
  }
},

{
  key: "GU-GUAVPEMAX6",
  cat: "GU",
  bcc: true,
  name: "GUAVPEMAX6 - Pembrolizumab + aXitinib q6w [RCC — 1st Line]",
  cycle: 42,
  notes: "First-line metastatic RCC, any histology and IMDC risk group. 6-weekly pembrolizumab variant. Pembrolizumab 4 mg/kg (max 400 mg) IV q6w for up to 18 cycles (or 2 years). aXitinib 5 mg PO BID continuously; dose range 2–10 mg BID. No dose modifications for pembrolizumab — manage toxicity by delay. Retreatment permitted after progression if initial course completed without progression. Switch between 3-weekly and 6-weekly pembrolizumab does not require CAP approval. Monitor BP daily for at least first 2 cycles. Weekly nursing assessment for side effects during combination phase (optional).",
  drugs: [
    {
      name: "Pembrolizumab",
      dose: 400,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "IV in 50 mL NS over 30 min (0.2 µm in-line filter)",
      days: "Day 1",
      reducible: false,
      note: "Weight-based dosing: 4 mg/kg capped at 400 mg. No dose reductions — manage toxicity by delay. Dose banding applies (see protocol appendix)."
    },
    {
      name: "aXitinib",
      dose: 5,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "PO twice daily",
      days: "Daily continuously",
      reducible: true,
      note: "Starting dose 5 mg BID; may escalate to 10 mg BID if tolerated (no > Grade 2 AEs × 2 consecutive weeks, normotensive without antihypertensives). May reduce to 2 mg BID for toxicity. Hold for proteinuria ≥ 1 g/24h; discontinue for ≥ 3.5 g/24h."
    }
  ],
  labs: {
    baseline: ["CBC & Diff", "sodium", "potassium", "creatinine", "albumin", "ALT", "alkaline phosphatase", "total bilirubin", "LDH", "uric acid", "TSH", "morning serum cortisol", "urinalysis for protein", "chest x-ray"],
    cycle: ["CBC & Diff", "sodium", "potassium", "creatinine", "ALT", "alkaline phosphatase", "total bilirubin", "LDH", "uric acid", "TSH", "urinalysis for protein"],
    conditional: [
      { label: "During aXitinib monotherapy (after pembrolizumab completion)", tests: ["CBC & Diff", "creatinine", "ALT", "total bilirubin", "uric acid", "urinalysis for protein"] },
      { label: "TSH during aXitinib monotherapy", tests: ["TSH every other cycle or if clinically indicated"] },
      { label: "If clinically indicated (combination phase)", tests: ["serum or urine HCG (if pregnancy suspected)", "free T3", "free T4", "morning serum cortisol", "serum ACTH", "FSH", "LH", "estradiol", "testosterone", "albumin", "GGT", "total protein", "lipase", "calcium", "phosphate", "random glucose", "CRP", "creatine kinase", "troponin", "MUGA scan or echocardiogram", "ECG", "chest x-ray"] },
      { label: "If clinically indicated (aXitinib monotherapy phase)", tests: ["sodium", "potassium", "calcium", "phosphate", "albumin", "alkaline phosphatase", "GGT", "LDH", "total protein", "TSH", "MUGA scan or echocardiogram"] },
      { label: "If urinalysis ≥ 1 g/L or dipstick 2+/3+", tests: ["24-hour urine protein"] }
    ]
  }
},

  // =========================================================
  // GU — Prostate Cancer
  // =========================================================

// GU — PROSTATE CANCER

// mCRPC — Docetaxel
{
  key: "GU-GUPDOC",
  cat: "GU",
  bcc: true,
  name: "GUPDOC - DOCEtaxel + predniSONE [Prostate — mCRPC]",
  cycle: 21,
  notes: "Palliative mCRPC. Up to 10 cycles; BC Cancer Compassionate Access Program approval required beyond 10 cycles. Maintain ADT (LHRH agonist/antagonist). Dexamethasone premedication required (8 mg PO BID x 3 days starting 1 day prior). Hepatic dose adjustment required.",
  drugs: [
    {
      name: "DOCEtaxel",
      dose: 75,
      unit: "mg/m²",
      basis: "bsa",
      max: null,
      weightCap: null,
      route: "IV in 250–500 mL NS over 1 hour",
      days: "Day 1",
      reducible: true,
      note: "Use non-DEHP equipment. 75% dose after neutropenic sepsis."
    },
    {
      name: "predniSONE",
      dose: 10,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "PO daily",
      days: "Daily (continuous)",
      reducible: false,
      note: "Or 5 mg BID. May substitute dexamethasone 1.5 mg PO daily."
    }
  ],
  labs: {
    baseline: ["CBC & Diff", "platelets", "total bilirubin", "ALT", "alkaline phosphatase", "PSA"],
    cycle: ["CBC & Diff", "platelets"],
    conditional: [
      { label: "Before Cycle 4 and if clinically indicated", tests: ["total bilirubin", "ALT", "alkaline phosphatase", "LDH"] },
      { label: "Every 3 weeks", tests: ["PSA"] }
    ]
  }
},

// mCSPC — Docetaxel
{
  key: "GU-GUPDOCADT",
  cat: "GU",
  bcc: true,
  name: "GUPDOCADT - DOCEtaxel + ADT [Prostate — mCSPC]",
  cycle: 21,
  notes: "First-line mCSPC (high-volume disease). DOCEtaxel started within 4 months of ADT initiation. 6 cycles. ADT options: LHRH agonist (goserelin/leuprolide), LHRH agonist + anti-androgen, or LHRH antagonist (degarelix/relugolix) — see GUPADT. Dexamethasone premedication required.",
  drugs: [
    {
      name: "DOCEtaxel",
      dose: 75,
      unit: "mg/m²",
      basis: "bsa",
      max: null,
      weightCap: null,
      route: "IV in 250–500 mL NS over 1 hour",
      days: "Day 1",
      reducible: true,
      note: "Use non-DEHP equipment. 75% dose after neutropenic sepsis."
    }
  ],
  labs: {
    baseline: ["CBC & Diff", "total bilirubin", "ALT", "alkaline phosphatase", "PSA"],
    cycle: ["CBC & Diff"],
    conditional: [
      { label: "Before Cycle 4 and if clinically indicated", tests: ["total bilirubin", "ALT", "alkaline phosphatase", "LDH"] },
      { label: "Every 3 weeks", tests: ["PSA"] }
    ]
  }
},

// mCSPC — Darolutamide + Docetaxel
{
  key: "GU-UGUMCSPDD",
  cat: "GU",
  bcc: true,
  name: "UGUMCSPDD - Darolutamide + DOCEtaxel [Prostate — mCSPC]",
  cycle: 21,
  notes: "mCSPC. CAP approval required. Darolutamide 600 mg BID continuous + DOCEtaxel x 6 cycles, then darolutamide monotherapy until progression. Must discontinue antiandrogen (e.g. bicalutamide) before starting. Dose level −1 for darolutamide: 300 mg BID.",
  drugs: [
    {
      name: "darolutamide",
      dose: 600,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "PO twice daily",
      days: "Daily (continuous)",
      reducible: true,
      note: "Cycles 1–6: with DOCEtaxel; Cycles 7+: monotherapy. Reduce to 300 mg BID for Grade ≥3 toxicity.",
      levels: [300]
    },
    {
      name: "DOCEtaxel",
      dose: 75,
      unit: "mg/m²",
      basis: "bsa",
      max: null,
      weightCap: null,
      route: "IV in 250–500 mL NS over 1 hour",
      days: "Day 1 (Cycles 1–6 only)",
      reducible: true,
      note: "Use non-DEHP equipment. 75% dose after neutropenic sepsis."
    }
  ],
  labs: {
    baseline: ["CBC & Diff", "creatinine", "sodium", "potassium", "total bilirubin", "ALT", "alkaline phosphatase", "GGT", "albumin", "INR", "PSA", "testosterone", "blood pressure"],
    cycle: ["CBC & Diff", "PSA"],
    conditional: [
      { label: "Before DOCEtaxel Cycle 4 and if clinically indicated", tests: ["total bilirubin", "ALT", "alkaline phosphatase", "LDH", "testosterone"] },
      { label: "Cycles 7+ (each physician visit)", tests: ["PSA", "blood pressure"] }
    ]
  }
},

// mCRPC — Cabazitaxel
{
  key: "GU-GUPCABA",
  cat: "GU",
  bcc: true,
  name: "GUPCABA - CabazitAXEL + predniSONE [Prostate — mCRPC]",
  cycle: 21,
  notes: "mCRPC post-DOCEtaxel or post-NHA therapy. Up to 10 cycles. Maintain ADT. Premedications required 45 min prior: dexamethasone 8 mg IV, diphenhydrAMINE 50 mg IV, famotidine 20 mg IV.",
  drugs: [
    {
      name: "cabazitaxel",
      dose: 25,
      unit: "mg/m²",
      basis: "bsa",
      max: null,
      weightCap: null,
      route: "IV in 100–250 mL NS over 60 min",
      days: "Day 1",
      reducible: true,
      note: "Use non-DEHP 0.2 micron in-line filter."
    },
    {
      name: "predniSONE",
      dose: 10,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "PO daily",
      days: "Daily (continuous)",
      reducible: false,
      note: "Or 5 mg BID. May substitute dexamethasone 1.5 mg PO daily."
    }
  ],
  labs: {
    baseline: ["CBC & Diff", "platelets", "total bilirubin", "ALT", "creatinine", "sodium", "potassium"],
    cycle: ["CBC & Diff", "platelets"],
    conditional: [
      { label: "Every 3 weeks", tests: ["PSA"] },
      { label: "If clinically indicated", tests: ["creatinine", "total bilirubin"] }
    ]
  }
},

// Abiraterone — mCRPC
{
  key: "GU-UGUPABI",
  cat: "GU",
  bcc: true,
  name: "UGUPABI - Abiraterone + predniSONE [Prostate — mCRPC]",
  cycle: 30,
  notes: "mCRPC (chemo-naive or post-DOCEtaxel). CAP approval required. Maintain ADT. One cycle = 30 days. Cycles 1–3: dispense 30-day supply; Cycles 4+: dispense 90-day supply. Monitor potassium and blood pressure closely; q2 weeks for first 3 months.",
  drugs: [
    {
      name: "abiraterone",
      dose: 1000,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "PO once daily (fasting)",
      days: "Daily (continuous)",
      reducible: true,
      note: "Hold and reduce by 250 mg for bilirubin >3x ULN or ALT >5x ULN; resume only after recovery to Grade 1.",
      levels: [750, 500]
    },
    {
      name: "predniSONE",
      dose: 10,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "PO daily",
      days: "Daily (continuous)",
      reducible: false,
      note: "Or 5 mg BID, or 5 mg daily. May substitute dexamethasone."
    }
  ],
  labs: {
    baseline: ["CBC & Diff", "total bilirubin", "ALT", "alkaline phosphatase", "creatinine", "random glucose", "sodium", "potassium", "PSA", "testosterone"],
    cycle: ["CBC & Diff", "total bilirubin", "ALT", "alkaline phosphatase", "creatinine", "random glucose", "sodium", "potassium", "blood pressure", "PSA"],
    conditional: [
      { label: "Cycles 1–3, every 2 weeks", tests: ["potassium", "ALT", "alkaline phosphatase", "total bilirubin", "blood pressure"] }
    ]
  }
},

// Abiraterone — adjuvant (very high-risk nmCSPC post-RP/RT)
{
  key: "GU-UGUPAJABI",
  cat: "GU",
  bcc: true,
  name: "UGUPAJABI - Abiraterone + predniSONE [Prostate — Adjuvant, Very High-Risk nmCSPC]",
  cycle: 30,
  notes: "Castration sensitive very high-risk non-metastatic prostate cancer planned for curative radiotherapy. CAP approval required. Maximum 25 cycles (2 years). Maintain ADT. One cycle = 30 days. Cycles 1–3: 30-day supply; Cycles 4+: 90-day supply. Monitor potassium and blood pressure q2 weeks for first 3 months.",
  drugs: [
    {
      name: "abiraterone",
      dose: 1000,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "PO once daily (fasting)",
      days: "Daily (continuous)",
      reducible: true,
      note: "Hold and reduce by 250 mg for bilirubin >3x ULN or ALT >5x ULN; resume only after recovery to Grade 1.",
      levels: [750, 500]
    },
    {
      name: "predniSONE",
      dose: 10,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "PO daily",
      days: "Daily (continuous)",
      reducible: false,
      note: "Or 5 mg BID, or 5 mg daily. May substitute dexamethasone."
    }
  ],
  labs: {
    baseline: ["CBC & Diff", "total bilirubin", "ALT", "alkaline phosphatase", "creatinine", "random glucose", "sodium", "potassium", "PSA", "testosterone"],
    cycle: ["CBC & Diff", "total bilirubin", "ALT", "alkaline phosphatase", "creatinine", "random glucose", "sodium", "potassium", "blood pressure", "PSA"],
    conditional: [
      { label: "Cycles 1–3, every 2 weeks", tests: ["potassium", "ALT", "total bilirubin", "alkaline phosphatase", "blood pressure"] }
    ]
  }
},

// Abiraterone — mCSPC
{
  key: "GU-GUMCSPABI",
  cat: "GU",
  bcc: true,
  name: "GUMCSPABI - Abiraterone + predniSONE [Prostate — mCSPC]",
  cycle: 30,
  notes: "mCSPC (chemo-naive or post-DOCEtaxel). Not for sequential use with enzalutamide, apalutamide, or darolutamide+docetaxel for mCSPC. Maintain ADT. One cycle = 30 days. Cycles 1–3: 30-day supply; Cycles 4+: 90-day supply. Monitor potassium and BP q2 weeks for first 3 months.",
  drugs: [
    {
      name: "abiraterone",
      dose: 1000,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "PO once daily (fasting)",
      days: "Daily (continuous)",
      reducible: true,
      note: "Hold and reduce by 250 mg for bilirubin >3x ULN or ALT >5x ULN; resume only after recovery to Grade 1.",
      levels: [750, 500]
    },
    {
      name: "predniSONE",
      dose: 10,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "PO daily",
      days: "Daily (continuous)",
      reducible: false,
      note: "Or 5 mg BID, or 5 mg daily. May substitute dexamethasone."
    }
  ],
  labs: {
    baseline: ["CBC & Diff", "total bilirubin", "ALT", "alkaline phosphatase", "creatinine", "random glucose", "sodium", "potassium", "testosterone", "PSA"],
    cycle: ["CBC & Diff", "total bilirubin", "ALT", "alkaline phosphatase", "creatinine", "random glucose", "sodium", "potassium", "blood pressure", "PSA"],
    conditional: [
      { label: "Cycles 1–3, every 2 weeks", tests: ["potassium", "ALT", "total bilirubin", "alkaline phosphatase", "blood pressure"] }
    ]
  }
},

// Niraparib-abiraterone — mCRPC (BRCA1/2)
{
  key: "GU-UGUPAVNABI",
  cat: "GU",
  bcc: true,
  name: "UGUPAVNABI - Niraparib-Abiraterone + predniSONE [Prostate — mCRPC, BRCA1/2]",
  cycle: 30,
  notes: "mCRPC with BRCA1/2 mutation; not candidate for chemotherapy. CAP approval required. Fixed-dose combination tablet (niraparib 200 mg + abiraterone 1000 mg) once daily. Maintain ADT. Dose level −1 (hematologic): 100 mg–1000 mg once daily. Dose level −1 (hepatotoxicity): 100 mg–500 mg once daily. Monitor CBC weekly for first 2 months.",
  drugs: [
    {
      name: "niraparib-abiraterone",
      dose: 200,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "PO once daily",
      days: "Daily (continuous)",
      reducible: true,
      note: "Fixed-dose combination: 200 mg niraparib + 1000 mg abiraterone per dose. Reduce to 100 mg–1000 mg (hematologic) or 100 mg–500 mg (hepatotoxicity) at dose level −1.",
      levels: [100]
    },
    {
      name: "predniSONE",
      dose: 10,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "PO daily",
      days: "Daily (continuous)",
      reducible: false,
      note: "Or 5 mg BID, or 5 mg daily. May substitute dexamethasone."
    }
  ],
  labs: {
    baseline: ["CBC & Diff", "total bilirubin", "ALT", "alkaline phosphatase", "creatinine", "random glucose", "sodium", "potassium", "PSA", "testosterone", "blood pressure"],
    cycle: ["CBC & Diff", "total bilirubin", "ALT", "alkaline phosphatase", "creatinine", "random glucose", "sodium", "potassium", "blood pressure", "PSA"],
    conditional: [
      { label: "Cycle 1, Days 8 and 22", tests: ["CBC & Diff"] },
      { label: "Cycles 1–3, Day 15", tests: ["CBC & Diff", "total bilirubin", "ALT", "alkaline phosphatase", "potassium"] },
      { label: "Cycles 1 and 2 (weekly)", tests: ["blood pressure"] }
    ]
  }
},

// Olaparib-abiraterone — mCRPC (BRCA1/2)
{
  key: "GU-UGUPAVOABI",
  cat: "GU",
  bcc: true,
  name: "UGUPAVOABI - Olaparib + Abiraterone + predniSONE [Prostate — mCRPC, BRCA1/2]",
  cycle: 30,
  notes: "mCRPC with BRCA1/2 mutation; not candidate for chemotherapy. CAP approval required. Maintain ADT. Olaparib dose levels: 300 mg BID (0), 250 mg BID (−1), 200 mg BID (−2). Abiraterone: hold and reduce by 250 mg for severe hepatotoxicity. Monitor BP q2 weeks for first 3 months.",
  drugs: [
    {
      name: "olaparib",
      dose: 300,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "PO twice daily",
      days: "Daily (continuous)",
      reducible: true,
      note: "Dispense in original manufacturer container with desiccant. Reduce to 200 mg BID if CrCl 31–50 mL/min.",
      levels: [250, 200]
    },
    {
      name: "abiraterone",
      dose: 1000,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "PO once daily (fasting)",
      days: "Daily (continuous)",
      reducible: true,
      note: "Hold and reduce by 250 mg for bilirubin >3x ULN or ALT >5x ULN.",
      levels: [750, 500]
    },
    {
      name: "predniSONE",
      dose: 10,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "PO daily",
      days: "Daily (continuous)",
      reducible: false,
      note: "Or 5 mg BID, or 5 mg daily. May substitute dexamethasone."
    }
  ],
  labs: {
    baseline: ["CBC & Diff", "total bilirubin", "ALT", "alkaline phosphatase", "creatinine", "random glucose", "sodium", "potassium", "PSA", "testosterone"],
    cycle: ["CBC & Diff", "total bilirubin", "ALT", "alkaline phosphatase", "creatinine", "random glucose", "sodium", "potassium", "blood pressure", "PSA"],
    conditional: [
      { label: "Cycles 1–3, every 2 weeks", tests: ["potassium", "ALT", "total bilirubin", "alkaline phosphatase", "blood pressure"] },
      { label: "Day 14 if clinically indicated", tests: ["CBC & Diff"] }
    ]
  }
},

// Enzalutamide — mCRPC
{
  key: "GU-UGUPENZ",
  cat: "GU",
  bcc: true,
  name: "UGUPENZ - Enzalutamide [Prostate — mCRPC]",
  cycle: null,
  notes: "mCRPC (chemo-naive or post-DOCEtaxel). CAP approval required. Maintain ADT; discontinue other antiandrogens (e.g. bicalutamide). Dispense 90-day supply. Dose level −1: 120 mg daily; dose level −2: 80 mg daily. Monitor BP q2 weeks for first 3 months.",
  drugs: [
    {
      name: "enzalutamide",
      dose: 160,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "PO once daily",
      days: "Daily (continuous)",
      reducible: true,
      note: "Reduce to 80 mg daily if combined with strong CYP2C8 inhibitor (e.g. gemfibrozil).",
      levels: [120, 80]
    }
  ],
  labs: {
    baseline: ["CBC & Diff", "creatinine", "sodium", "potassium", "PSA", "testosterone", "blood pressure"],
    cycle: ["PSA", "blood pressure"],
    conditional: [
      { label: "If clinically indicated", tests: ["creatinine", "sodium", "potassium", "testosterone", "ECG"] }
    ]
  }
},

// Enzalutamide — adjuvant (high-risk nmCSPC biochemical recurrence)
{
  key: "GU-UGUPAJENZ",
  cat: "GU",
  bcc: true,
  name: "UGUPAJENZ - Enzalutamide [Prostate — Adjuvant, High-Risk nmCSPC, Biochemical Recurrence]",
  cycle: null,
  notes: "Castration sensitive high-risk non-metastatic prostate cancer with biochemical recurrence post-RP or RT (PSA doubling time ≤9 months). CAP approval required. Salvage RT should be considered first. May give with or without ADT (preferred with ADT). Hold if PSA <0.2 ng/mL after 36 weeks; restart per physician discretion. Dose levels: −1: 120 mg; −2: 80 mg.",
  drugs: [
    {
      name: "enzalutamide",
      dose: 160,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "PO once daily",
      days: "Daily (continuous)",
      reducible: true,
      note: "Reduce to 80 mg daily if combined with strong CYP2C8 inhibitor.",
      levels: [120, 80]
    }
  ],
  labs: {
    baseline: ["PSA", "testosterone", "blood pressure"],
    cycle: ["PSA", "blood pressure"],
    conditional: [
      { label: "Baseline if clinically indicated", tests: ["ECG", "CBC & Diff", "creatinine", "sodium", "potassium"] },
      { label: "If clinically indicated", tests: ["creatinine", "sodium", "potassium", "testosterone", "ECG"] }
    ]
  }
},

// Enzalutamide — mCSPC
{
  key: "GU-GUMCSPENZ",
  cat: "GU",
  bcc: true,
  name: "GUMCSPENZ - Enzalutamide [Prostate — mCSPC]",
  cycle: null,
  notes: "mCSPC (chemo-naive or post-DOCEtaxel). Not for sequential use with apalutamide, abiraterone, or darolutamide+docetaxel for mCSPC. Maintain ADT; discontinue other antiandrogens. Dispense 90-day supply. Dose level −1: 120 mg; −2: 80 mg. Monitor BP q2 weeks for first 3 months.",
  drugs: [
    {
      name: "enzalutamide",
      dose: 160,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "PO once daily",
      days: "Daily (continuous)",
      reducible: true,
      note: "Reduce to 80 mg daily if combined with strong CYP2C8 inhibitor.",
      levels: [120, 80]
    }
  ],
  labs: {
    baseline: ["CBC & Diff", "creatinine", "sodium", "potassium", "blood pressure", "PSA", "testosterone"],
    cycle: ["PSA", "blood pressure"],
    conditional: [
      { label: "If clinically indicated", tests: ["creatinine", "sodium", "potassium", "testosterone", "ECG"] }
    ]
  }
},

// Enzalutamide — nmCRPC
{
  key: "GU-UGUNMPENZ",
  cat: "GU",
  bcc: true,
  name: "UGUNMPENZ - Enzalutamide [Prostate — nmCRPC]",
  cycle: null,
  notes: "Non-metastatic CRPC (PSA doubling time ≤10 months). CAP approval required. Maintain ADT; discontinue other antiandrogens. Dispense 90-day supply. Dose level −1: 120 mg; −2: 80 mg. On progression to mCRPC: eligible for DOCEtaxel, cabazitaxel, radium-223; NOT eligible for enzalutamide or abiraterone.",
  drugs: [
    {
      name: "enzalutamide",
      dose: 160,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "PO once daily",
      days: "Daily (continuous)",
      reducible: true,
      note: "Reduce to 80 mg daily if combined with strong CYP2C8 inhibitor.",
      levels: [120, 80]
    }
  ],
  labs: {
    baseline: ["CBC & Diff", "creatinine", "sodium", "potassium", "PSA", "testosterone", "blood pressure"],
    cycle: ["PSA", "blood pressure"],
    conditional: [
      { label: "If clinically indicated", tests: ["creatinine", "sodium", "potassium", "testosterone", "ECG"] }
    ]
  }
},

// Apalutamide — nmCRPC
{
  key: "GU-UGUPAPA",
  cat: "GU",
  bcc: true,
  name: "UGUPAPA - Apalutamide [Prostate — nmCRPC]",
  cycle: null,
  notes: "Non-metastatic CRPC (PSA doubling time ≤10 months). CAP approval required. Maintain ADT; discontinue other antiandrogens. Dispense 90-day supply in original container. Dose level −1: 180 mg; −2: 120 mg. Monitor TSH. On progression to mCRPC: eligible for DOCEtaxel, cabazitaxel, radium-223; NOT eligible for enzalutamide or abiraterone.",
  drugs: [
    {
      name: "apalutamide",
      dose: 240,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "PO once daily",
      days: "Daily (continuous)",
      reducible: true,
      note: "Monitor for rash (25% incidence) and hypothyroidism (up to 22%). Seizure risk.",
      levels: [180, 120]
    }
  ],
  labs: {
    baseline: ["CBC & Diff", "creatinine", "sodium", "potassium", "testosterone", "blood pressure", "TSH", "PSA"],
    cycle: ["PSA", "blood pressure"],
    conditional: [
      { label: "If clinically indicated", tests: ["TSH", "creatinine", "sodium", "potassium", "testosterone", "ECG"] }
    ]
  }
},

// Apalutamide — mCSPC
{
  key: "GU-GUMCSPAPA",
  cat: "GU",
  bcc: true,
  name: "GUMCSPAPA - Apalutamide [Prostate — mCSPC]",
  cycle: null,
  notes: "mCSPC (chemo-naive or post-DOCEtaxel). Not for sequential use with enzalutamide, abiraterone, or darolutamide+docetaxel for mCSPC. Maintain ADT; discontinue other antiandrogens. Dispense 90-day supply in original container. Dose level −1: 180 mg; −2: 120 mg. Monitor TSH.",
  drugs: [
    {
      name: "apalutamide",
      dose: 240,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "PO once daily",
      days: "Daily (continuous)",
      reducible: true,
      note: "Monitor for rash and hypothyroidism. Seizure risk.",
      levels: [180, 120]
    }
  ],
  labs: {
    baseline: ["CBC & Diff", "creatinine", "sodium", "potassium", "blood pressure", "TSH", "PSA", "testosterone"],
    cycle: ["PSA", "blood pressure"],
    conditional: [
      { label: "If clinically indicated", tests: ["TSH", "creatinine", "sodium", "potassium", "testosterone", "ECG"] }
    ]
  }
},

// Darolutamide — nmCRPC
{
  key: "GU-UGUNMPDAR",
  cat: "GU",
  bcc: true,
  name: "UGUNMPDAR - Darolutamide [Prostate — nmCRPC]",
  cycle: null,
  notes: "Non-metastatic CRPC (PSA doubling time ≤10 months). CAP approval required. Maintain ADT; discontinue other antiandrogens. Dispense 90-day supply. Dose level −1: 300 mg BID. Moderate hepatic impairment (Child-Pugh B): reduce to 300 mg BID. CrCl 15–29: reduce to 300 mg BID.",
  drugs: [
    {
      name: "darolutamide",
      dose: 600,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "PO twice daily",
      days: "Daily (continuous)",
      reducible: true,
      note: "Reduce to 300 mg BID for Grade ≥3 toxicity, moderate hepatic impairment, or CrCl 15–29 mL/min.",
      levels: [300]
    }
  ],
  labs: {
    baseline: ["CBC & Diff", "albumin", "total bilirubin", "alkaline phosphatase", "GGT", "INR", "ALT", "creatinine", "sodium", "potassium", "PSA", "testosterone", "blood pressure"],
    cycle: ["PSA", "blood pressure"],
    conditional: [
      { label: "If clinically indicated", tests: ["albumin", "total bilirubin", "INR", "ALT", "creatinine", "sodium", "potassium", "TSH", "ECG", "HbA1c", "calcium", "random glucose", "testosterone"] }
    ]
  }
},

// Radiopharmaceutical — Lutetium-177 PSMA
{
  key: "GU-UGUPLVT",
  cat: "GU",
  bcc: true,
  name: "UGUPLVT - 177Lu Vipivotide Tetraxetan (PLUVICTO) [Prostate — mCRPC, PSMA+]",
  cycle: 42,
  notes: "mCRPC post-ARPI and post-taxane. PSMA-PET required (all lesions ≥2.5 cm PSMA-positive). CAP approval required. Max 6 doses every 6 weeks. Must be administered in licensed facility by qualified radiopharmaceutical personnel. Dose reduction by 20% (to 5.9 GBq / 160 mCi) once only. Interval may extend to 10 weeks for AE recovery.",
  drugs: [
    {
      name: "177Lu vipivotide tetraxetan",
      dose: 7400,
      unit: "MBq",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "Slow IV push over 1–10 minutes",
      days: "Day 1 every 6 weeks (max 6 doses)",
      reducible: true,
      note: "7.4 GBq (200 mCi). Reduce by 20% to 5.9 GBq (160 mCi) once for Grade 3–4 hematologic, renal, or other toxicity. Administered in shielded room under CNSC-licensed facility.",
      levels: [5900]
    }
  ],
  labs: {
    baseline: ["CBC & Diff", "creatinine", "albumin", "total bilirubin", "ALT", "alkaline phosphatase", "PSA", "testosterone"],
    cycle: ["CBC & Diff", "creatinine", "albumin", "total bilirubin", "ALT", "alkaline phosphatase", "PSA"],
    conditional: [
      { label: "7 days prior to all treatments and on Day 21", tests: ["CBC & Diff", "creatinine", "albumin", "total bilirubin", "ALT", "alkaline phosphatase"] },
      { label: "If clinically indicated", tests: ["calcium", "sodium", "potassium"] }
    ]
  }
},

// Radiopharmaceutical — Radium-223
{
  key: "GU-GUPRAD",
  cat: "GU",
  bcc: true,
  name: "GUPRAD - Radium-223 [Prostate — mCRPC, Bone Metastases]",
  cycle: 28,
  notes: "mCRPC with symptomatic bone metastases, no liver/lung/brain metastases. 6 cycles every 4 weeks. Weight-based dosing. Delay dose if counts insufficient; discontinue if no recovery within 6 weeks. Radium-223 should not be used concurrently with abiraterone. Alpha emitter — standard body fluid precautions apply.",
  drugs: [
    {
      name: "radium-223",
      dose: 55,
      unit: "kBq/kg",
      basis: "weight",
      max: null,
      weightCap: null,
      route: "IV bolus over 1 minute",
      days: "Day 1 every 4 weeks (x 6 cycles)",
      reducible: false,
      note: "No dose modification by hepatic or renal function. Delay for count recovery only."
    }
  ],
  labs: {
    baseline: ["CBC & Diff", "platelets", "creatinine", "sodium", "albumin", "total bilirubin", "alkaline phosphatase", "ALT", "PSA"],
    cycle: ["CBC & Diff", "platelets", "creatinine", "total bilirubin", "alkaline phosphatase", "ALT", "PSA"],
    conditional: []
  }
},

// ADT — Androgen Deprivation Therapy
{
  key: "GU-GUPADT",
  cat: "GU",
  bcc: true,
  name: "GUPADT - Androgen Deprivation Therapy [Prostate]",
  cycle: null,
  notes: "Injectable options: goserelin 3.6 mg SC monthly or 10.8 mg SC q3 months; leuprolide 7.5 mg IM monthly, 22.5 mg q3 months, 30 mg q4 months (Lupron Depot), or equivalent Eligard doses; degarelix 240 mg SC loading (2 injections of 120 mg) then 80 mg SC monthly. Oral option: relugolix 360 mg PO loading dose Day 1, then 120 mg PO daily. Add anti-androgen (bicalutamide 50 mg daily, preferred; or flutamide 250 mg TID) to block LHRH agonist flare (start 1–2 weeks before LHRH agonist). Degarelix and relugolix do not cause testosterone surge — anti-androgen not required.",
  drugs: [
    {
      name: "goserelin (or leuprolide)",
      dose: 10.8,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "SC every 3 months",
      days: "Every 3 months (or monthly at 3.6 mg)",
      reducible: false,
      note: "LHRH agonist — multiple dosing intervals available. Add anti-androgen for first 3–4 weeks to prevent flare."
    },
    {
      name: "relugolix",
      dose: 120,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "PO once daily",
      days: "Daily after 360 mg loading dose on Day 1",
      reducible: false,
      note: "Oral GnRH antagonist. If interrupted >7 days, restart with 360 mg loading dose. No anti-androgen flare prophylaxis needed."
    }
  ],
    labs: {
      conditional: [
        { label: "If clinically indicated (baseline and throughout treatment)", tests: ["PSA", "testosterone", "potassium", "sodium", "calcium", "magnesium", "ECG"] },
        { label: "Every 3 months if taking flutamide", tests: ["total bilirubin", "ALT", "alkaline phosphatase"] }
      ]
    }
},

// GIAVIPNI — Ipilimumab + Nivolumab [dMMR/MSI-H CRC]
{
  key: "GI-GIAVIPNI",
  cat: "GI",
  bcc: true,
  name: "GIAVIPNI - Ipilimumab + Nivolumab [dMMR/MSI-H Colorectal]",
  cycle: 21,
  notes: "First-line treatment of unresectable or metastatic dMMR/MSI-H colorectal adenocarcinoma. Induction phase (Cycles 1-4): nivolumab 3 mg/kg (max 240 mg) + ipilimumab 1 mg/kg IV every 3 weeks. Maintenance phase (begins 3 weeks after last induction dose): nivolumab 6 mg/kg (max 480 mg) IV every 4 weeks, up to a maximum of 27 cycles total (including induction) or 2 years. If nivolumab discontinued for toxicity, discontinue ipilimumab; if ipilimumab discontinued for toxicity, nivolumab may continue as monotherapy. Retreatment with nivolumab ± ipilimumab is allowed after progression if initial induction was completed without progression and progression occurred >6 months after treatment completion. Manage immune-mediated adverse reactions per SCIMMUNE. BC Cancer protocol activated 1 Apr 2026.",
  drugs: [
    {
      name: "nivolumab",
      dose: 3,
      unit: "mg/kg",
      basis: "weight",
      max: 240,
      weightCap: null,
      route: "IV",
      days: "Day 1",
      reducible: false,
      note: "Induction (Cycles 1-4): 3 mg/kg IV (max 240 mg) over 30 min q3w. Maintenance (Cycle 5+): 6 mg/kg IV (max 480 mg) over 30 min q4w. Use 0.2 micron in-line filter; separate line from ipilimumab. No specific dose modifications — manage toxicity by delay."
    },
    {
      name: "ipilimumab",
      dose: 1,
      unit: "mg/kg",
      basis: "weight",
      max: null,
      weightCap: null,
      route: "IV",
      days: "Day 1 (Cycles 1-4 only)",
      reducible: false,
      note: "Induction phase only — 4 cycles q3w. IV in 25-100 mL NS over 30 min using 0.2 micron in-line filter. No specific dose modifications — manage toxicity by delay (see SCIMMUNE)."
    }
  ],
  labs: {
    baseline: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "albumin", "sodium", "potassium", "TSH", "morning serum cortisol", "chest x-ray or CT chest"],
    cycle: ["CBC & Diff", "creatinine", "ALT", "total bilirubin", "sodium", "potassium", "TSH"],
    conditional: [
      { label: "Baseline if clinically indicated", tests: ["CEA", "CA19-9", "creatine kinase", "troponin", "free T3", "free T4", "GGT", "lipase", "random glucose", "serum or urine HCG", "serum ACTH", "testosterone", "estradiol", "FSH", "LH", "ECG"] },
      { label: "If clinically indicated", tests: ["CEA", "CA19-9", "morning serum cortisol", "lipase", "random glucose", "serum or urine HCG", "free T3", "free T4", "serum ACTH", "testosterone", "estradiol", "FSH", "LH", "alkaline phosphatase", "albumin", "GGT", "creatine kinase", "troponin", "ECG", "chest x-ray"] }
    ]
  }
},

// GUMCSPDAR — Darolutamide [mCSPC]
{
  key: "GU-GUMCSPDAR",
  cat: "GU",
  bcc: true,
  name: "GUMCSPDAR - Darolutamide [Metastatic Castration-Sensitive Prostate]",
  cycle: null,
  notes: "Metastatic castration-sensitive prostate cancer (mCSPC) — darolutamide 600 mg PO twice daily, continued with ongoing ADT (see GUPADT) until disease progression or unacceptable toxicity. Discontinue any antiandrogen (e.g., bicalutamide) used as part of combined androgen blockade prior to starting darolutamide. Dose level -1 = 300 mg PO BID; do not reduce below 300 mg BID. Patients are eligible for any one of apalutamide (GUMCSPAPA), abiraterone (GUMCSPABI), darolutamide (GUMCSPDAR), darolutamide + docetaxel (UGUMCSPDD), or enzalutamide (GUMCSPENZ) — but not sequential use. Patients treated with darolutamide for mCSPC who develop castration-resistant disease are NOT eligible for abiraterone or enzalutamide. Hepatic adjustment: Child-Pugh B → 300 mg BID; Child-Pugh C → not recommended. Renal adjustment: CrCl 15-29 mL/min → 300 mg BID; <15 → not recommended. Major CYP3A4 substrate (caution with strong inducers/inhibitors). BC Cancer protocol activated 1 May 2026.",
  drugs: [
    {
      name: "darolutamide",
      dose: 600,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "PO BID",
      days: "Continuous, twice daily",
      reducible: true,
      note: "Dispense 90-day supply per visit. Take with food. Continue until progression or unacceptable toxicity.",
      levels: [300]
    }
  ],
  labs: {
    baseline: ["CBC & Diff", "albumin", "total bilirubin", "alkaline phosphatase", "GGT", "INR", "ALT", "creatinine", "sodium", "potassium", "PSA", "testosterone", "blood pressure"],
    cycle: ["PSA", "blood pressure"],
    conditional: [
      { label: "Baseline if clinically indicated", tests: ["ECG"] },
      { label: "If clinically indicated", tests: ["albumin", "total bilirubin", "INR", "ALT", "creatinine", "sodium", "potassium", "TSH", "ECG", "HbA1c", "calcium", "random glucose", "testosterone"] }
    ]
  }
},

// LUAVSEL — Selpercatinib [RET+ NSCLC]
{
  key: "LU-LUAVSEL",
  cat: "Lung",
  bcc: true,
  name: "LUAVSEL - Selpercatinib [RET Fusion-Positive NSCLC]",
  cycle: 30,
  notes: "RET fusion-positive metastatic NSCLC — selpercatinib monotherapy. Starting dose 160 mg PO BID for body weight ≥50 kg; 120 mg PO BID for body weight <50 kg. For severe hepatic impairment (Child-Pugh C) at baseline: start at 80 mg PO BID regardless of weight. Continue until progression or unacceptable toxicity. Dose levels for weight ≥50 kg: 0=160 mg BID, -1=120 mg BID, -2=80 mg BID, -3=40 mg BID. For weight <50 kg: 0=120 mg BID, -1=80 mg BID, -2=40 mg BID, -3=40 mg once daily. Do not initiate if QTc >470 ms. Monitor BP, electrolytes (K/Mg/Ca), LFTs, ECG. Hold for QTc ≥501 ms, ANC <1.0 or platelets <75, BP >160/100, or ALT/AST 5-20× ULN; restart at reduced dose per protocol. Hypersensitivity (4-6%) presents as maculopapular rash with fever/arthralgia/myalgia — hold, give prednisone 1 mg/kg, restart 3 levels lower with continued steroid. CYP3A4 substrate; inhibits CYP2C8, P-gp, MATE1 (so creatinine may rise without true GFR change). Hold ≥7 days before elective surgery; do not restart for ≥2 weeks after major surgery. BC Cancer protocol activated 1 Sep 2023.",
  drugs: [
    {
      name: "selpercatinib",
      dose: 160,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "PO BID",
      days: "Continuous, twice daily",
      reducible: true,
      note: "Default 160 mg BID for ≥50 kg; use 120 mg BID for <50 kg (see protocol notes for weight-based dose levels). Take on an empty stomach if used with proton pump inhibitors; otherwise may take with or without food. Repeat every 30 days = 1 cycle.",
      levels: [120, 80, 40]
    }
  ],
  labs: {
    baseline: ["CBC & Diff", "platelets", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "sodium", "potassium", "magnesium", "calcium", "albumin", "blood pressure", "ECG"],
    cycle: ["CBC & Diff", "platelets", "creatinine", "ALT", "total bilirubin", "sodium", "potassium", "magnesium", "calcium", "albumin", "LDH", "blood pressure"],
    conditional: [
      { label: "Day 7 after start", tests: ["sodium", "potassium", "magnesium", "calcium", "blood pressure", "ECG"] },
      { label: "Every 2 weeks for first 3 months", tests: ["ALT", "total bilirubin"] },
      { label: "Monthly Months 1-6", tests: ["CBC & Diff", "platelets", "creatinine", "ALT", "total bilirubin", "sodium", "potassium", "magnesium", "calcium", "albumin", "LDH", "blood pressure", "ECG"] },
      { label: "If clinically indicated", tests: ["random glucose", "uric acid", "phosphorus", "total cholesterol", "BUN", "ECG", "chest x-ray", "C-reactive protein"] }
    ]
  }
},

// ULUAVPPAF — CARBOplatin + Pemetrexed + Amivantamab (1L EGFR exon 20 insertion NSCLC)
{
  key: "LU-ULUAVPPAF",
  cat: "Lung",
  bcc: true,
  name: "ULUAVPPAF - CARBOplatin + Pemetrexed + Amivantamab [1L EGFR Exon 20 Insertion NSCLC]",
  cycle: 21,
  notes: "First-line treatment of advanced non-squamous NSCLC with EGFR exon 20 insertion mutation. Compassionate Access Program approval required. CARBOplatin + pemetrexed given Cycles 1-4 only; amivantamab and pemetrexed continue as maintenance from Cycle 5+. Amivantamab dosing is weight-banded (<80 kg vs ≥80 kg) and schedule changes each cycle — see below. Cycle 1: split amivantamab loading (Day 1 = 350 mg, Day 2 = 1050 or 1400 mg, Day 8 + 15 = 1400 or 1750 mg). Cycle 2 Day 1: 1400 mg (<80 kg) or 1750 mg (≥80 kg). Cycles 3-4 Day 1: 1750 mg (<80 kg) or 2100 mg (≥80 kg). Cycle 5+ (maintenance, no carboplatin): pemetrexed + amivantamab 1750/2100 mg Day 1. Repeat q21d until progression or intolerable toxicity. Dexamethasone 8 mg PO BID × 4 doses starting 2 days before Cycle 1 Day 1. Folic acid 0.4-1 mg PO daily and vitamin B12 1000 mcg IM q9 weeks mandatory (start ≥7 days before first pemetrexed; continue 21 days after last). Skin/nail prophylaxis: doxycycline or minocycline 100 mg PO BID × 12 weeks, then clindamycin 1% topical lotion to scalp × 9 months; chlorhexidine 4% soap for hands/feet; non-comedogenic moisturizer. Amivantamab dose reduction tiers (any toxicity): 1050→700→350; 1400→1050→700; 1750→1400→1050; 2100→1750→1400, then discontinue. BC Cancer protocol activated 1 Apr 2026.",
  drugs: [
    {
      name: "pemetrexed",
      dose: 500,
      unit: "mg/m²",
      basis: "bsa",
      max: null,
      weightCap: null,
      route: "IV",
      days: "Day 1 (every cycle)",
      reducible: true,
      note: "IV in 100 mL NS over 10 min. Hold if CrCl <45 mL/min. Mucositis Grade 3-4 → 50% prior dose (discontinue after 2 reductions). Folic acid + B12 mandatory."
    },
    {
      name: "CARBOplatin",
      dose: 5,
      unit: "AUC",
      basis: "auc",
      max: null,
      weightCap: null,
      route: "IV",
      days: "Day 1 (Cycles 1-4 only)",
      reducible: true,
      note: "Calvert: AUC 5 × (GFR + 25), GFR capped at 125 mL/min. IV in 100-250 mL NS over 30 min. Recalculate GFR if creatinine rises >20% or above ULN. Stopped after Cycle 4 (pemetrexed + amivantamab continue as maintenance)."
    },
    {
      name: "amivantamab",
      dose: 1750,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "IV",
      days: "Cycle 1: Days 1, 2, 8, 15 (split loading); Cycle 2+: Day 1",
      reducible: true,
      note: "Weight-banded fixed dosing — see protocol notes. Default shown is steady-state Cycle 5+ dose for body weight <80 kg (≥80 kg = 2100 mg). Cycle 1 split-load dosing differs (350 mg D1, 1050/1400 mg D2, 1400/1750 mg D8 and D15). Use 0.2 micron in-line filter; peripheral line in Cycle 1. Premedicate: dexamethasone IV + diphenhydrAMINE IV + famotidine IV + acetaminophen PO before D1 and D2; dexamethasone PO before pemetrexed Cycle 2+.",
      levels: [1400, 1050]
    }
  ],
  labs: {
    baseline: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "GGT", "albumin", "sodium", "potassium", "magnesium", "random glucose"],
    cycle: ["CBC & Diff", "creatinine", "total bilirubin", "ALT"],
    conditional: [
      { label: "If clinically indicated, prior to Cycle 1 Days 8 and 15", tests: ["CBC & Diff", "creatinine", "total bilirubin", "ALT"] },
      { label: "If clinically indicated", tests: ["alkaline phosphatase", "LDH", "GGT", "albumin", "sodium", "potassium", "magnesium", "random glucose"] }
    ]
  }
},

// ULUAVPPAMI — CARBOplatin + Pemetrexed + Amivantamab (post-osimertinib EGFR ex19del/L858R NSCLC)
{
  key: "LU-ULUAVPPAMI",
  cat: "Lung",
  bcc: true,
  name: "ULUAVPPAMI - CARBOplatin + Pemetrexed + Amivantamab [Post-Osimertinib EGFR ex19del/L858R NSCLC]",
  cycle: 21,
  notes: "Treatment of advanced non-squamous NSCLC with EGFR exon 19 deletion or exon 21 L858R substitution after progression on osimertinib (MARIPOSA-2 regimen, no lazertinib). Last platinum exposure must be >6 months prior. CARBOplatin + pemetrexed given Cycles 1-4 only; amivantamab and pemetrexed continue as maintenance from Cycle 5+. Amivantamab dosing identical to ULUAVPPAF — weight-banded (<80 kg vs ≥80 kg), Cycle 1 split-load (Day 1 = 350 mg, Day 2 = 1050 or 1400 mg, Days 8 and 15 = 1400 or 1750 mg). Cycle 2 Day 1: 1400 mg or 1750 mg. Cycles 3-4 Day 1: 1750 mg or 2100 mg. Cycle 5+ (maintenance, no carboplatin): pemetrexed + amivantamab 1750 mg or 2100 mg Day 1. Repeat q21d until progression or intolerable toxicity. Premedications and skin/nail prophylaxis identical to ULUAVPPAF: dexamethasone 8 mg PO BID × 4 doses starting 2 days before C1D1; folic acid 0.4-1 mg PO daily + vitamin B12 1000 mcg IM q9 weeks; doxycycline/minocycline 100 mg PO BID × 12 weeks then clindamycin 1% lotion × 9 months. Amivantamab dose reduction tiers (any toxicity): 1050→700→350; 1400→1050→700; 1750→1400→1050; 2100→1750→1400, then discontinue. BC Cancer protocol activated 1 Apr 2026.",
  drugs: [
    {
      name: "pemetrexed",
      dose: 500,
      unit: "mg/m²",
      basis: "bsa",
      max: null,
      weightCap: null,
      route: "IV",
      days: "Day 1 (every cycle)",
      reducible: true,
      note: "IV in 100 mL NS over 10 min. Hold if CrCl <45 mL/min. Mucositis Grade 3-4 → 50% prior dose (discontinue after 2 reductions). Folic acid + B12 mandatory."
    },
    {
      name: "CARBOplatin",
      dose: 5,
      unit: "AUC",
      basis: "auc",
      max: null,
      weightCap: null,
      route: "IV",
      days: "Day 1 (Cycles 1-4 only)",
      reducible: true,
      note: "Calvert: AUC 5 × (GFR + 25), GFR capped at 125 mL/min. IV in 100-250 mL NS over 30 min. Recalculate GFR if creatinine rises >20% or above ULN. Stopped after Cycle 4 (pemetrexed + amivantamab continue as maintenance)."
    },
    {
      name: "amivantamab",
      dose: 1750,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "IV",
      days: "Cycle 1: Days 1, 2, 8, 15 (split loading); Cycle 2+: Day 1",
      reducible: true,
      note: "Weight-banded fixed dosing — see protocol notes. Default shown is steady-state Cycle 5+ dose for body weight <80 kg (≥80 kg = 2100 mg). Cycle 1 split-load dosing differs (350 mg D1, 1050/1400 mg D2, 1400/1750 mg D8 and D15). Use 0.2 micron in-line filter; peripheral line in Cycle 1. Premedicate: dexamethasone IV + diphenhydrAMINE IV + famotidine IV + acetaminophen PO before D1 and D2; dexamethasone PO before pemetrexed Cycle 2+.",
      levels: [1400, 1050]
    }
  ],
  labs: {
    baseline: ["CBC & Diff", "creatinine", "alkaline phosphatase", "ALT", "total bilirubin", "LDH", "GGT", "albumin", "sodium", "potassium", "magnesium", "random glucose"],
    cycle: ["CBC & Diff", "creatinine", "total bilirubin", "ALT"],
    conditional: [
      { label: "If clinically indicated, prior to Cycle 1 Days 8 and 15", tests: ["CBC & Diff", "creatinine", "total bilirubin", "ALT"] },
      { label: "If clinically indicated", tests: ["alkaline phosphatase", "LDH", "GGT", "albumin", "sodium", "potassium", "magnesium", "random glucose"] }
    ]
  }
},
{
  key: "LY-ULYOGGEMOX",
  cat: "Lymphoma",
  bcc: true,
  name: "ULYOGGEMOX — oBINutuzumab + Glofitamab + Gemcitabine + Oxaliplatin [DLBCL, R/R]",
  cycle: 21,
  notes: "STARGLO regimen (Abramson, Lancet 2024) — relapsed/refractory DLBCL NOS, transformed DLBCL, high-grade B-cell lymphoma, PMBCL, or FL Grade 3b. Eligible if ASCT-ineligible (≥1 prior line), or ≥2 prior lines and CAR-T ineligible, or prior CAR-T. CAP approval required. Treatment centre must manage CRS/ICANS. Schema: Cycle 1 Day 1 oBINutuzumab 1000 mg → Day 2 gemcitabine + oxaliplatin → Day 8 glofitamab 2.5 mg (step-up 1, inpatient ≥24 h) → Day 15 glofitamab 10 mg (step-up 2). Cycle 2 starts 7 days after C1D15 (glofitamab 30 mg + gem + oxali). Cycles 3–8: glofitamab 30 mg + gem + oxali Day 1 q21d. Cycles 9–12: glofitamab 30 mg Day 1 only q21d. Max 12 cycles. No dose reductions for oBINutuzumab, glofitamab, or gemcitabine — interrupt/hold/rate-reduce only. Oxaliplatin: reduce to 75 mg/m² for Grade 2–3 neuropathy. Do not start next glofitamab dose until CRS resolved ≥72 h. Permanently discontinue glofitamab for recurrent Grade 3 or any Grade 4 CRS, Grade 4 ICANS. Very high HBV reactivation risk — follow SCHBV if HBsAg/HBcoreAb positive. Mandatory valACYclovir 500 mg PO daily + cotrimoxazole DS 3×/wk during treatment and 3 months after.",
  drugs: [
    {
      name: "oBINutuzumab",
      dose: 1000,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "IV",
      days: "Cycle 1 Day 1 only",
      reducible: false,
      note: "IV in 250 mL NS; initiate at 50 mg/h, increase by 50 mg/h q30 min to max 400 mg/h; constant visual observation during infusion and 30 min after. Premed: dexamethasone 20 mg IV + acetaminophen 650–975 mg PO + diphenhydrAMINE 50 mg PO/IV."
    },
    {
      name: "gemcitabine",
      dose: 1000,
      unit: "mg/m²",
      basis: "bsa",
      max: null,
      weightCap: null,
      route: "IV",
      days: "Cycle 1 Day 2; Cycles 2–8 Day 1",
      reducible: false,
      note: "IV in 250 mL NS over 30 min. No dose reductions per protocol — hold/delay only. Possible warfarin interaction; monitor INR weekly during therapy and 1–2 mo after stopping."
    },
    {
      name: "oxaliplatin",
      dose: 100,
      unit: "mg/m²",
      basis: "bsa",
      max: null,
      weightCap: null,
      route: "IV",
      days: "Cycle 1 Day 2; Cycles 2–8 Day 1",
      reducible: true,
      note: "IV in 250–500 mL D5W over 2 h (NOT NS — incompatible). Avoid cold drinks/air ×3–5 days. NO cryotherapy. Reduce to 75 mg/m² for Grade 2–3 neuropathy not recovered to Grade 1 by next dose; permanently discontinue for persistent/recurrent Grade 3 or any Grade 4 neuropathy. For Grade 1–2 hypersensitivity: premedicate with dexamethasone 20 mg IV + diphenhydrAMINE 50 mg IV + famotidine 20 mg IV.",
      levels: [75]
    },
    {
      name: "glofitamab (step-up dose 1)",
      dose: 2.5,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "IV",
      days: "Cycle 1 Day 8",
      reducible: false,
      note: "IV in 25 mL NS over 4 h with Y-site NS TKVO at 20 mL/h. Inpatient monitoring during infusion and ≥24 h after — highest CRS risk (median onset 13 h). Premed: dexamethasone 20 mg IV + acetaminophen 650–975 mg PO + diphenhydrAMINE 50 mg PO/IV. Optional 500 mL NS prehydration over 30 min."
    },
    {
      name: "glofitamab (step-up dose 2)",
      dose: 10,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "IV",
      days: "Cycle 1 Day 15",
      reducible: false,
      note: "IV in 100 mL NS over 4 h (extend to 8 h if any prior CRS). Ambulatory if no CRS with Day 8; inpatient if any grade CRS or treatment interruption with Day 8. Patient must remain near facility ≥24 h post-infusion. Same premeds as step-up 1."
    },
    {
      name: "glofitamab (full dose)",
      dose: 30,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "IV",
      days: "Cycles 2–12 Day 1",
      reducible: false,
      note: "Cycle 2: IV in 100 mL NS over 4 h, observe 90 min post-infusion. Cycles 3–12: over 2 h (or 4 h if any prior CRS); observation may be discontinued after 3 consecutive CRS-free doses. Inpatient if Grade ≥2 CRS with previous dose. Cycles 9–12 = glofitamab monotherapy. Max 12 cycles total. Premeds C2–C3 same as step-ups; C4+ omit dexamethasone if no prior CRS."
    }
  ],
  labs: {
    baseline: ["CBC & Diff", "creatinine", "total bilirubin", "ALT", "HCAb", "HBsAg", "HBsAb", "HBcoreAb"],
    cycle: ["CBC & Diff", "creatinine", "total bilirubin", "ALT", "vital signs"],
    conditional: [
      { label: "Baseline if clinically indicated", tests: ["sodium", "potassium", "urea", "uric acid", "alkaline phosphatase", "phosphate", "calcium", "albumin", "LDH", "random glucose", "immunoglobulin panel (IgA, IgG, IgM)"] },
      { label: "Cycle 1 prior to Days 8 and 15", tests: ["CBC & Diff"] },
      { label: "Cycle 1 Day 9 if clinically indicated", tests: ["CBC & Diff", "creatinine", "sodium", "potassium", "phosphate", "calcium", "magnesium", "total bilirubin", "ALT", "alkaline phosphatase", "LDH"] },
      { label: "If clinically indicated", tests: ["sodium", "potassium", "phosphate", "calcium", "magnesium", "uric acid", "albumin", "alkaline phosphatase", "LDH", "random glucose", "GGT", "immunoglobulin panel (IgA, IgG, IgM)", "HBV viral load"] }
    ]
  }
},
{
  key: "LY-LYMCIV",
  cat: "Lymphoma",
  bcc: true,
  name: "LYMCIV — Venetoclax + iBRUtinib [Mantle Cell Lymphoma, R/R]",
  cycle: 28,
  notes: "SYMPATICO regimen (Wang, Lancet Oncol 2025) — relapsed/refractory mantle cell lymphoma after ≥1 prior line. Cycle 1 = 35 days (5-week venetoclax ramp-up): Week 1: venetoclax 20 mg PO daily, Week 2: 50 mg, Week 3: 100 mg, Week 4: 200 mg, Week 5: 400 mg; ibrutinib 560 mg PO daily throughout. Cycles 2–24 = 28 days: ibrutinib 560 mg + venetoclax 400 mg PO daily. Cycles 25+: ibrutinib 560 mg PO daily until PD or intolerance (venetoclax discontinued after 24 cycles total). TLS risk highest during ramp-up — stratify by tumour burden (Low: CrCl ≥60 AND lesions ≤5 cm OR ALC ≤25; High: CrCl <60, any lesion >10 cm, or ≥5 cm lesion + ALC ≤25). Low-risk patients: outpatient, start on a Thursday at 6 AM, STAT TLS labs at 6h and 24h post first 20 mg and 50 mg doses. High-risk: inpatient for first 20 mg and 50 mg doses with monitoring at 4/8/12/24h. Allopurinol 300 mg PO daily × ≥72h pre-dose; oral hydration 1.5–2 L/day × 48h pre through week 5 (add IV NS 150–200 mL/h for high-risk); consider rasburicase for high-risk if baseline uric acid elevated. Strong CYP3A4 inhibitors CONTRAINDICATED during ramp-up. VZV prophylaxis (valACYclovir 500 mg PO BID) and PJP prophylaxis (cotrimoxazole DS 3×/wk) if increased infection risk. HBV reactivation risk — SCHBV if HBsAg/HBcoreAb positive. Ibrutinib hold 3–7 days pre/post surgery. Mild hepatic impairment (Child-Pugh A): ibrutinib 140 mg PO daily; moderate/severe (B or C): do not use.",
  drugs: [
    {
      name: "iBRUtinib",
      dose: 560,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "PO",
      days: "Once daily continuously (all cycles)",
      reducible: true,
      note: "Cardiac toxicity (Grade 2 CHF or Grade 3 arrhythmia): reduce to 420 → 280 mg then discontinue. Grade 3/4 CHF or Grade 4 arrhythmia: discontinue. Mild hepatic impairment: 140 mg daily. Avoid strong/moderate CYP3A inhibitors.",
      levels: [420, 280, 140]
    },
    {
      name: "venetoclax (ramp-up, Cycle 1)",
      dose: 400,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "PO",
      days: "Cycle 1: Week 1: 20 mg × 7d; Week 2: 50 mg × 7d; Week 3: 100 mg × 7d; Week 4: 200 mg × 7d; Week 5: 400 mg × 7d",
      reducible: true,
      note: "5-week ramp-up per TLS risk. Displayed target dose = 400 mg. TLS labs mandatory before each dose increase and 6h/24h post first 20 mg and 50 mg doses (low-risk); 4/8/12/24h post first 20 mg and 50 mg doses (high-risk, inpatient). Strong CYP3A4 inhibitors CONTRAINDICATED during ramp-up.",
      levels: [300, 200, 100, 50, 20]
    },
    {
      name: "venetoclax (steady-state, Cycles 2–24)",
      dose: 400,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "PO",
      days: "Once daily, Cycles 2–24 only (discontinue after 24 cycles)",
      reducible: true,
      note: "Reductions after ramp-up: 300 → 200 → 100 → 50 → 20 → 10 mg. Consider discontinuing if reduced <100 mg for >2 weeks. After ramp-up: strong CYP3A4 inhibitor → reduce dose 75%; moderate CYP3A4 inhibitor or P-gp inhibitor → reduce dose ≥50% (azithromycin exempted).",
      levels: [300, 200, 100, 50, 20, 10]
    }
  ],
  labs: {
    baseline: ["CBC & Diff", "potassium", "calcium", "magnesium", "phosphate", "uric acid", "creatinine", "urea", "total bilirubin", "ALT", "LDH", "albumin", "PTT", "INR", "HBsAg", "HBsAb", "HBcoreAb"],
    cycle: ["CBC & Diff", "creatinine", "total bilirubin", "ALT", "blood pressure"],
    conditional: [
      { label: "Baseline within 72 h of first treatment (required)", tests: ["CBC & Diff", "potassium", "calcium", "magnesium", "phosphate", "uric acid", "creatinine", "urea", "total bilirubin", "ALT", "LDH", "albumin", "PTT", "INR"] },
      { label: "Baseline if clinically indicated", tests: ["ECG", "MUGA scan or echocardiogram"] },
      { label: "Prior to each dose increment during ramp-up (Cycle 1 Weeks 1–5)", tests: ["potassium", "calcium", "phosphate", "uric acid", "creatinine", "LDH", "albumin"] },
      { label: "TLS labs — 6 h and 24 h post first 20 mg and 50 mg doses (low-risk); 4/8/12/24 h inpatient (high-risk)", tests: ["potassium", "calcium", "phosphate", "uric acid", "creatinine", "LDH", "albumin"] },
      { label: "If clinically indicated", tests: ["PTT", "INR", "ECG", "MUGA scan or echocardiogram", "HBV viral load"] }
    ]
  }
},
{
  key: "MY-MYDBLDFTI",
  cat: "Multiple Myeloma",
  bcc: true,
  name: "MYDBLDFTI — daratumumab + bortezomib + lenalidomide + dexamethasone [MM — Transplant-Ineligible, Frontline]",
  cycle: 28,
  notes: "CEPHEUS regimen (Usmani, Nat Med 2025) — previously untreated MM, transplant-ineligible or transplant-deferred. RevAid Program registration required for lenalidomide. Two phases: Cycles 1–8 (Vd-containing induction, bortezomib weekly Days 1/8/15/22), Cycle 9+ (dara + len + dex maintenance, no bortezomib) — continuous 28-day cycles until PD or intolerance. Bortezomib STARTING dose 1.3 mg/m² (may start at 1.5 mg/m² per clinician judgement). Daratumumab schedule: C1–C2 weekly (D1,8,15,22), C3–C4 q2wk (D1,15), C5–C8 monthly (D1 only), C9+ monthly. Dexamethasone 40 mg PO weekly (20 mg weekly if ≥75 y; may discontinue after 2 cycles in elderly if responding). Patients eligible for only one line of anti-CD38 mAb therapy. Daratumumab interferes with Coombs/cross-match for ≤6 mo — type and screen + RBC phenotype required pre-daratumumab. Very high HBV reactivation risk — SCHBV if HBsAg/HBcoreAb positive. VZV prophylaxis (valACYclovir 500 mg PO daily) and anticoagulation (ASA 81 mg / DOAC / LMWH) required for lenalidomide. Green tea avoidance while on bortezomib. Live vaccines contraindicated. Renamed protocol: distinct from MYDBLDFTE (transplant-eligible D-VRd, PERSEUS).",
  drugs: [
    {
      name: "daratumumab (SC)",
      dose: 1800,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "SC",
      days: "C1–C2: Days 1, 8, 15, 22; C3–C4: Days 1, 15; C5+: Day 1 only",
      reducible: false,
      note: "Fixed 1800 mg in 15 mL SC over 5 min in abdomen. No renal or hepatic dose adjustment. No dose reductions for IRRs — manage with premeds/observation. Observe 1 h after C1D1 injection only. Premeds Cycle 1 only: acetaminophen 650 mg PO + loratadine 10 mg PO (or diphenhydrAMINE 50 mg) + montelukast 10 mg PO (C1D1) + dexamethasone 20–40 mg PO. After 4 consecutive doses without reaction, may discontinue antihistamine/montelukast/acetaminophen premeds."
    },
    {
      name: "bortezomib",
      dose: 1.3,
      unit: "mg/m²",
      basis: "bsa",
      max: null,
      weightCap: null,
      route: "SC",
      days: "Cycles 1–8, Days 1, 8, 15, 22",
      reducible: true,
      note: "SC (abdomen/thigh; back of arm as 3rd option). STARTING dose 1.3 mg/m² per protocol (may start at 1.5 mg/m² at clinician discretion). Dose reductions for Grade 1 with pain / Grade 2 neuropathy → 1 mg/m² × 2; Grade 3 delay → 1 mg/m²; Grade 4 discontinue. Moderate/severe hepatic impairment: start 0.7 mg/m². Green tea reduces bortezomib activity — avoid. Discontinued after Cycle 8.",
      levels: [1.0, 0.7, 0.5]
    },
    {
      name: "lenalidomide",
      dose: 25,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "PO",
      days: "Days 1–21 (each 28-day cycle)",
      reducible: true,
      note: "PO, evening preferred. Continuous throughout all cycles. Renal dose: CrCl 30–60 → 10 mg daily; CrCl <30 not on dialysis → 15 mg q other day; CrCl <30 on dialysis → 5 mg daily post-dialysis. Grade 3–4 non-heme toxicity: reduce one level (do not dose below 2.5 mg). Grade 3+ exfoliative rash/SJS/TEN: discontinue. Pneumonitis: hold and investigate. Teratogenic — RevAid Program registration mandatory.",
      levels: [20, 15, 10, 5, 2.5]
    },
    {
      name: "dexamethasone",
      dose: 40,
      unit: "mg",
      basis: "flat",
      max: null,
      weightCap: null,
      route: "PO",
      days: "Days 1, 8, 15, 22 (all cycles)",
      reducible: true,
      note: "Weekly. Age ≥75 y: start at 20 mg weekly (in elderly, may discontinue after 2 cycles if responding well). Doses of 4–40 mg PO weekly acceptable based on tolerance. predniSONE 10–100 mg PO weekly can substitute. Continue even if lenalidomide held for toxicity. Cycle 1: also serves as daratumumab premed steroid."
    }
  ],
  labs: {
    baseline: ["Red Blood Cell phenotype", "Group and Screen", "CBC & Diff", "creatinine", "total bilirubin", "ALT", "alkaline phosphatase", "calcium", "albumin", "LDH", "random glucose", "serum protein electrophoresis", "serum free light chain levels", "immunoglobulin panel (IgA, IgG, IgM)", "HCAb", "HBsAg", "HBsAb", "HBcoreAb", "TSH", "beta-2 microglobulin"],
    cycle: ["CBC & Diff", "creatinine", "total bilirubin", "ALT", "alkaline phosphatase", "calcium", "albumin", "LDH", "serum protein electrophoresis", "serum free light chain levels"],
    conditional: [
      { label: "Baseline if clinically indicated", tests: ["urea", "sodium", "potassium"] },
      { label: "Every 4 weeks (optional, encouraged prior to each cycle)", tests: ["urine protein electrophoresis", "immunoglobulin panel (IgA, IgG, IgM)"] },
      { label: "Days 8, 15, 22 if pre-cycle cytopenias or hepatic/renal dysfunction (optional)", tests: ["CBC & Diff", "creatinine", "sodium", "potassium", "total bilirubin", "ALT", "alkaline phosphatase", "calcium", "albumin"] },
      { label: "Every 3 months (required for lenalidomide)", tests: ["TSH"] },
      { label: "If female of childbearing potential — 7–14 d and 24 h prior to first Rx, then weekly × 4 weeks during Cycle 1, then every 4 weeks", tests: ["quantitative beta-hCG"] },
      { label: "If clinically indicated", tests: ["urea", "sodium", "potassium", "HBV viral load"] }
    ]
  }
}
]; // end PROTOCOLS
