import type { Expert } from "@/components/services/ServicePageTemplate";

export interface TrainingCourse {
  slug: string;
  title: string;
  trainers: Expert[];
  duration: string;
  level: string;
  format: string;
  description: string;
  /**
   * Curriculum topics that will be covered. Rendered as a tag/pill grid
   * on the course page so participants can scan exactly what is taught.
   */
  whatsIncluded: string[];
  /**
   * Single-paragraph statement of what the participant gains
   * professionally — the "career outcome" callout.
   */
  professionalBenefits: string;
  /**
   * Sequenced phases of the program. Rendered as a numbered flow on
   * the course page so participants understand the learning journey.
   */
  courseStructure: string[];
  keyOutcomes: string[];
  benefits: string[];
  whoShouldAttend: string[];
  coverImage: string;
  badge?: string;
}

const trainerLookup = {
  nurulHuda: {
    name: "S M Nurul Huda",
    role: "Director Compliance & Sustainability",
    photo: "/images/team/sm-nurul-huda.jpg",
    linkedin: "https://www.linkedin.com/in/sm-nurul-huda-6b8a19123/",
  },
  montasir: {
    name: "Montasir Nahid",
    role: "Director - ESG",
    photo: "/images/team/montasir-nahid.jpg",
    linkedin: "https://www.linkedin.com/in/montasir-nahid-918b7319/",
  },
  rajib: {
    name: "Rajib Ul Haque",
    role: "Director & Chief Environmental Expert",
    photo: "/images/team/rajib-ul-haque.jpg",
    linkedin: "https://www.linkedin.com/in/rajib-ul-haque-a10b0081/",
  },
  nishat: {
    name: "Nishat Anzum",
    role: "ESG Specialist & GRI Trainer",
    photo: "/images/team/nishat-anzum.jpg",
    linkedin: "https://www.linkedin.com/in/nishat-anzum-shova-b07147174/",
  },
  aleya: {
    name: "Aleya Aktar",
    role: "Director - Ethical Sourcing & CSR",
    photo: "/images/team/aleya-aktar.jpg",
    linkedin: "https://www.linkedin.com/in/aleya-aktar-94411741/",
  },
  yousuf: {
    name: "Engr. Yousuf Ali",
    role: "Director & Chief Energy Expert",
    photo: "/images/team/yousuf-ali.jpg",
    linkedin: "https://www.linkedin.com/in/md-yousuf-ali-b45624117/",
  },
  engrRajib: {
    name: "Engr. M M Haque Rajib",
    role: "Director & Structural Expert",
    photo: "/images/team/rajib.jpg",
    linkedin:
      "https://www.linkedin.com/in/engr-rajib-ahmed-%E5%B7%A5%E7%A8%8B%E5%B8%AB-%E6%8B%89%E5%90%89%E5%B8%83-%F0%9F%8C%BF-45b1a0186/",
  },
  charles: {
    name: "Dr. Charles Dagher",
    role: "Strategic Partner - Productivity & Efficiency",
    photo: "/images/team/charles-dagher.jpg",
    linkedin: "https://www.linkedin.com/in/dr-charles-dagher-b474b92a/",
  },
} as const;

export const additionalTrainingCourses: TrainingCourse[] = [
  {
    slug: "sustainability-reporting-gri-masterclass",
    title:
      "Strategic Sustainability Reporting & GRI Certification Masterclass",
    badge: "9-Day Intensive",
    trainers: [trainerLookup.montasir, trainerLookup.rajib, trainerLookup.nishat],
    duration: "9 Days",
    level: "Intermediate to Advanced",
    format: "Online / In-Person",
    description:
      "A complete reporting-to-certification pathway covering GRI standards application, materiality assessment, data management workflows, disclosure writing, assurance readiness, and exam preparation. Participants graduate with the practical ability to lead sustainability report development and sit for GRI professional certification.",
    whatsIncluded: [
      "GRI Standards application",
      "Double materiality assessment",
      "Stakeholder engagement",
      "ESG data collection workflows",
      "Disclosure writing",
      "Assurance readiness",
      "GRI Professional Certification exam prep",
      "Mock test workshops",
    ],
    professionalBenefits:
      "Build the practical capability to lead sustainability reporting projects end-to-end, improve ESG disclosure quality across your organization, and prepare with confidence to sit for the GRI Professional Certification Exam — a globally recognized credential for sustainability reporting professionals.",
    courseStructure: [
      "GRI fundamentals & reporting principles",
      "Materiality assessment & stakeholder mapping",
      "ESG data management & governance",
      "Disclosure writing across Universal, Sector & Topic Standards",
      "Assurance readiness & report quality review",
      "Mock exam, peer review & reporting workshop",
    ],
    keyOutcomes: [
      "Build publication-ready sustainability report structures",
      "Master GRI Universal, Sector, and Topic Standards",
      "Conduct double materiality and stakeholder engagement",
      "Translate raw data into GRI-aligned disclosures",
      "Improve assurance readiness and reporting governance",
      "Prepare confidently for the GRI Professional Certification Exam",
    ],
    benefits: [
      "Globally recognized GRI certification pathway",
      "Hands-on practice with real reporting scenarios",
      "Access to mock tests and exam prep workshops",
      "Network with sustainability professionals",
      "Immediately applicable skills for your organization",
    ],
    whoShouldAttend: [
      "Sustainability managers and officers",
      "ESG analysts and compliance professionals",
      "Corporate communications teams",
      "Finance and investor relations staff involved in ESG disclosure",
    ],
    coverImage: "/images/training/gri-masterclass.jpg",
  },
  {
    slug: "energy-audit-essentials",
    title: "Energy Audit Essentials for Industrial Facilities",
    badge: "Technical",
    trainers: [trainerLookup.yousuf],
    duration: "5 Days",
    level: "Intermediate",
    format: "In-Person",
    description:
      "Comprehensive ASHRAE-protocol energy audit training for industrial facilities. Covers energy fundamentals, primary/secondary energy sources, Bangladesh energy policy context, walk-through and detailed audit methods, direct and indirect loss identification, supply/demand side management, cogeneration and trigeneration systems, energy carrier quality, and energy efficiency & conservation (EE&C) measures — with SBTi-aligned emission reduction framing.",
    whatsIncluded: [
      "Energy fundamentals & sources",
      "ASHRAE walk-through & detailed audit methods",
      "Energy balance calculation",
      "Direct & indirect loss identification",
      "Supply-side management",
      "Demand-side management",
      "Cogeneration & trigeneration",
      "EE&C measures & investment-grade reporting",
    ],
    professionalBenefits:
      "Gain practical, on-the-job audit skills that let you identify energy savings, reduce operational costs, and support corporate carbon reduction targets — positioning you as a credible energy auditor for industrial facilities, sustainability programs, and BERC compliance.",
    courseStructure: [
      "Energy systems & Bangladesh policy context",
      "Audit planning & ASHRAE protocol overview",
      "Site walkthrough & data-collection methods",
      "Loss identification & energy balance analysis",
      "Savings calculation & EE&C measure prioritization",
      "Investment-grade audit report preparation",
    ],
    keyOutcomes: [
      "Understand energy forms, conversion, and the Bangladesh energy supply landscape",
      "Conduct ASHRAE-protocol walk-through and detailed energy audits",
      "Identify and quantify direct losses (equipment, process) and indirect losses (carrier quality, downtime)",
      "Evaluate supply side management (generation efficiency, distribution losses) and demand side management (load profiling, peak reduction)",
      "Assess cogeneration/trigeneration recovery potential (up to 75% plant efficiency)",
      "Develop prioritized EE&C measures and investment-grade audit reports",
      "Connect audit findings to SBTi targets and 2030/2050 decarbonization commitments",
    ],
    benefits: [
      "Practical audit skills applicable immediately on-site",
      "Hands-on exercises with real industrial facility data",
      "Curriculum aligned with ASHRAE, ISO 50002, and BERC standards",
      "Access to audit tools, templates, and energy balance worksheets",
      "Understanding of Bangladesh regulatory energy efficiency context",
    ],
    whoShouldAttend: [
      "Energy managers and utility engineers",
      "Facility and operations managers",
      "Sustainability engineers working on carbon reduction",
      "Consultants offering energy advisory services",
      "Compliance staff meeting BERC and buyer energy requirements",
    ],
    coverImage: "/images/training/energy-audit.jpg",
  },
  {
    slug: "slcp-supplier-readiness",
    title: "SLCP Supplier Readiness: CAF Data, Verification & Corrective Action",
    badge: "Compliance",
    trainers: [trainerLookup.nurulHuda],
    duration: "3 Days",
    level: "Intermediate",
    format: "Online / In-Person",
    description:
      "Practical preparation for SLCP Converged Assessment Framework (CAF) completion, covering data collection quality, self-assessment best practices, verification readiness, worker engagement techniques, and corrective action plan execution.",
    whatsIncluded: [
      "SLCP & CAF overview",
      "CAF data collection",
      "Self-assessment quality",
      "Verification readiness",
      "Worker engagement techniques",
      "Corrective action planning",
      "Evidence management",
    ],
    professionalBenefits:
      "Equip yourself to lead SLCP submissions confidently — improving verification outcomes, reducing audit fatigue, and strengthening buyer confidence in your facility's social compliance maturity.",
    courseStructure: [
      "SLCP & Converged Assessment Framework introduction",
      "Data collection planning & responsibilities",
      "Self-assessment workshop with real CAF scenarios",
      "Verification readiness drills",
      "Corrective action planning & evidence packaging",
    ],
    keyOutcomes: [
      "Reduce data errors and inconsistencies in CAF submissions",
      "Improve verification pass rates and audit outcomes",
      "Strengthen worker engagement in the assessment process",
      "Build effective corrective action plans and close findings",
    ],
    benefits: [
      "Eliminate duplicate social audits through SLCP convergence",
      "Increase buyer confidence with higher-quality assessments",
      "Reduce audit fatigue across supply chain partners",
    ],
    whoShouldAttend: [
      "Compliance officers and social auditors",
      "Factory HR and admin managers",
      "Brand sustainability and sourcing teams",
    ],
    coverImage: "/images/training/slcp-readiness.jpg",
  },
  {
    slug: "gesi-practice",
    title: "GESI in Practice: Policy, Prevention & Workplace Transformation",
    badge: "Social Impact",
    trainers: [trainerLookup.aleya],
    duration: "3 Days",
    level: "Intermediate",
    format: "Online / In-Person",
    description:
      "Design and operationalize Gender Equality and Social Inclusion (GESI) frameworks covering policy architecture, anti-harassment committee formation, prevention mechanisms, and performance monitoring systems.",
    whatsIncluded: [
      "GESI principles & frameworks",
      "Gender-responsive policy design",
      "Anti-harassment committee setup",
      "Prevention & response protocols",
      "Inclusive workplace practices",
      "Grievance response handling",
      "Workplace inclusion indicators",
    ],
    professionalBenefits:
      "Build the capacity to design, implement, and monitor inclusive workplaces that meet buyer and social compliance expectations — strengthening your role as an HR, CSR, or compliance leader driving cultural change at scale.",
    courseStructure: [
      "GESI principles & global standards",
      "Workplace risk mapping & gender analysis",
      "Policy & anti-harassment committee setup",
      "Prevention & response system design",
      "Monitoring indicators & continuous improvement",
    ],
    keyOutcomes: [
      "Develop gender-responsive workplace policies",
      "Establish functional anti-harassment committees",
      "Build prevention and response protocols",
      "Create measurable inclusion indicators",
      "Reduce workplace risk and grievance recurrence",
    ],
    benefits: [
      "Improved buyer compliance on gender requirements",
      "Stronger employee retention and satisfaction",
      "Reduced legal and reputational exposure",
    ],
    whoShouldAttend: [
      "HR and welfare managers",
      "Compliance and CSR officers",
      "Factory management teams",
      "Brand social sustainability professionals",
    ],
    coverImage: "/images/training/gesi-practice.jpg",
  },
  {
    slug: "grievance-mechanism-bd-labour-law",
    title: "Grievance Mechanism Design Aligned with Bangladesh Labour Law",
    badge: "Legal Compliance",
    trainers: [trainerLookup.aleya],
    duration: "2 Days",
    level: "Intermediate",
    format: "Online / In-Person",
    description:
      "Build legally compliant and worker-trusted grievance mechanisms with structured intake, triage, investigation, remedy, and closure protocols aligned with Bangladesh Labour Act requirements.",
    whatsIncluded: [
      "Bangladesh Labour Law requirements",
      "Worker complaint intake design",
      "Triage & escalation protocols",
      "Investigation & remedy planning",
      "Closure & documentation systems",
      "Audit-ready evidence",
      "Simulation & corrective action",
    ],
    professionalBenefits:
      "Develop the legal, procedural, and HR fluency needed to design grievance systems that hold up to Bangladesh Labour Law, buyer audits, and worker scrutiny — making you a trusted internal lead for workplace dispute resolution.",
    courseStructure: [
      "Bangladesh Labour Law & legal expectations",
      "Mechanism architecture & roles",
      "Case-handling workflow design",
      "Documentation & escalation systems",
      "Simulation, role-play & corrective action workshop",
    ],
    keyOutcomes: [
      "Design legally aligned grievance intake and response flows",
      "Establish clear roles, timelines, and escalation procedures",
      "Create audit-ready grievance documentation systems",
      "Improve worker trust and participation rates",
    ],
    benefits: [
      "Full compliance with Bangladesh Labour Law provisions",
      "Reduced buyer non-conformance findings",
      "Improved workplace climate and dispute resolution",
    ],
    whoShouldAttend: [
      "HR managers and labour relations officers",
      "Factory compliance teams",
      "Legal and corporate affairs staff",
    ],
    coverImage: "/images/training/grievance-mechanism.jpg",
  },
  {
    slug: "iso-ims-9001-14001-45001",
    title: "Integrated Management Systems: ISO 9001, 14001 & 45001",
    badge: "Standards",
    trainers: [trainerLookup.nurulHuda],
    duration: "4 Days",
    level: "Intermediate",
    format: "Online / In-Person",
    description:
      "Comprehensive training on integrated planning, deployment, and internal audit of Quality (ISO 9001), Environmental (ISO 14001), and Occupational Health & Safety (ISO 45001) management systems.",
    whatsIncluded: [
      "ISO 9001, 14001 & 45001 integration",
      "Annex SL high-level structure",
      "Risk-based thinking",
      "Process mapping",
      "Documentation control",
      "Internal audit planning",
      "Nonconformity management",
      "Certification readiness",
    ],
    professionalBenefits:
      "Become a confident IMS practitioner who can reduce documentation duplication, improve cross-functional process control, and accelerate your organization's path to multi-standard ISO certification.",
    courseStructure: [
      "IMS fundamentals & Annex SL alignment",
      "Process & risk mapping across three standards",
      "Integrated documentation & control design",
      "Internal audit planning & execution",
      "Certification readiness roadmap",
    ],
    keyOutcomes: [
      "Build a unified IMS architecture across three standards",
      "Map processes, risks, and controls to Annex SL structure",
      "Develop internal audit capability and nonconformity management",
      "Create a practical certification readiness roadmap",
    ],
    benefits: [
      "Reduced documentation burden through integration",
      "Improved cross-functional process accountability",
      "Faster path to multi-standard certification",
    ],
    whoShouldAttend: [
      "Management system coordinators",
      "Quality, environment, and safety managers",
      "Internal auditors and compliance officers",
    ],
    coverImage: "/images/training/iso-ims.jpg",
  },
  {
    slug: "sedex-smeta-readiness",
    title: "SEDEX/SMETA Supplier Compliance & Audit Readiness",
    badge: "Ethical Trade",
    trainers: [trainerLookup.nurulHuda],
    duration: "3 Days",
    level: "Intermediate",
    format: "Online / In-Person",
    description:
      "Prepare facilities for SMETA 2-pillar and 4-pillar audit expectations. Covers documentation quality, policy frameworks, worker interview preparedness, and corrective action plan closure aligned with ETI Base Code standards.",
    whatsIncluded: [
      "SMETA 2-pillar & 4-pillar requirements",
      "ETI Base Code compliance",
      "Documentation quality",
      "Policy framework review",
      "Worker interview preparation",
      "Corrective action plan management",
      "Audit evidence packaging",
    ],
    professionalBenefits:
      "Step into ethical trade audits with confidence — reduce repeat findings, lift your facility's compliance maturity, and become the trusted internal point of contact for SEDEX members and brand sourcing teams.",
    courseStructure: [
      "SEDEX & SMETA framework overview",
      "Pillar-by-pillar requirements deep dive",
      "Documentation review & evidence preparation",
      "Worker & management interview readiness drills",
      "CAP closure planning & follow-up systems",
    ],
    keyOutcomes: [
      "Achieve higher audit preparedness and reduced findings",
      "Build robust documentation for all four SMETA pillars",
      "Train management and workers for auditor interactions",
      "Develop effective CAP closure and follow-up processes",
    ],
    benefits: [
      "Reduced repeat non-conformances",
      "Stronger ethical trade governance structures",
      "Improved buyer-supplier trust",
    ],
    whoShouldAttend: [
      "Factory compliance officers and social auditors",
      "HR and admin managers",
      "Supplier development teams from brands",
    ],
    coverImage: "/images/training/sedex-smeta.jpg",
  },
  {
    slug: "bsci-implementation",
    title: "BSCI Implementation & Social Performance Improvement",
    badge: "Social Compliance",
    trainers: [trainerLookup.nurulHuda],
    duration: "3 Days",
    level: "Intermediate",
    format: "Online / In-Person",
    description:
      "Operationalize amfori BSCI Code of Conduct requirements through management system design, worker rights implementation, monitoring controls, and continuous improvement planning.",
    whatsIncluded: [
      "BSCI Code of Conduct",
      "BSCI performance areas",
      "Worker rights implementation",
      "Management system design",
      "Monitoring & evidence capture",
      "Corrective action workflows",
      "Continuous improvement planning",
    ],
    professionalBenefits:
      "Build the implementation expertise that helps factories move from audit findings to sustained social compliance performance — strengthening your value to suppliers, brand CSR teams, and amfori stakeholders.",
    courseStructure: [
      "BSCI framework & Code of Conduct overview",
      "Gap assessment against performance areas",
      "Implementation workshops per performance area",
      "Evidence-based corrective action design",
      "Remediation, monitoring & continuous improvement planning",
    ],
    keyOutcomes: [
      "Implement BSCI performance areas systematically",
      "Build evidence-based corrective action workflows",
      "Improve social compliance maturity scores",
      "Strengthen buyer confidence through documented performance",
    ],
    benefits: [
      "Clear path from audit findings to sustained compliance",
      "Reduced re-audit costs and buyer escalations",
      "Stronger internal social governance capability",
    ],
    whoShouldAttend: [
      "Compliance officers and BSCI coordinators",
      "Factory management teams",
      "CSR professionals in buying organizations",
    ],
    coverImage: "/images/training/bsci-implementation.jpg",
  },
  {
    slug: "higg-fem-4",
    title: "Higg FEM 4.0 Implementation for Facilities",
    badge: "Environmental",
    trainers: [trainerLookup.nurulHuda],
    duration: "3 Days",
    level: "Intermediate to Advanced",
    format: "Online / In-Person",
    description:
      "Module-by-module implementation support for Higg FEM 4.0 covering EMS, Energy/GHG, Water, Wastewater, Air Emissions, Waste, and Chemical Management. Focuses on data quality, level progression, and scoring optimization.",
    whatsIncluded: [
      "Environmental Management Systems",
      "Energy & GHG module",
      "Water module",
      "Wastewater module",
      "Air emissions module",
      "Waste module",
      "Chemical management module",
      "FEM data quality & scoring",
    ],
    professionalBenefits:
      "Become the in-house Higg FEM expert your facility relies on — improving FEM scores, reducing verification corrections, and turning environmental data into a credible improvement roadmap visible to brands on Worldly.",
    courseStructure: [
      "Higg FEM 4.0 framework overview",
      "Module-by-module requirements deep dive",
      "Data collection & evidence workshops",
      "Documentation review & gap analysis",
      "Scoring improvement & level progression roadmap",
    ],
    keyOutcomes: [
      "Complete higher-quality FEM responses across all modules",
      "Progress through Level 1 to Level 3 requirements",
      "Improve environmental data collection and governance",
      "Strengthen year-on-year performance tracking",
    ],
    benefits: [
      "Better Worldly platform scores and buyer visibility",
      "Reduced verification corrections and rejections",
      "Actionable environmental improvement roadmaps",
    ],
    whoShouldAttend: [
      "Environmental and sustainability managers",
      "EHS officers and utility engineers",
      "Brand supplier development teams",
    ],
    coverImage: "/images/training/higg-fem.jpg",
  },
  {
    slug: "step-oekotex",
    title: "STeP by OEKO-TEX: Facility Readiness & Certification Pathway",
    badge: "Certification",
    trainers: [trainerLookup.nurulHuda],
    duration: "3 Days",
    level: "Intermediate",
    format: "Online / In-Person",
    description:
      "Prepare textile and leather production facilities for OEKO-TEX STeP certification across all six assessment modules: Chemical Management, Environmental Performance, Environmental Management, Social Responsibility, Quality Management, and Health & Safety.",
    whatsIncluded: [
      "Chemical management",
      "Environmental performance",
      "Environmental management",
      "Social responsibility",
      "Quality management",
      "Health & safety",
      "STeP documentation packs",
      "Audit verification readiness",
    ],
    professionalBenefits:
      "Lead your facility through STeP by OEKO-TEX certification with confidence — opening the pathway to MADE IN GREEN eligibility and elevating your reputation as a trusted certification specialist.",
    courseStructure: [
      "STeP framework & certification process overview",
      "Six-module gap assessment",
      "Documentation planning per module",
      "Module-specific corrective action roadmap",
      "Audit verification readiness workshop",
    ],
    keyOutcomes: [
      "Complete gap assessment against STeP criteria",
      "Build prioritized corrective action plans per module",
      "Prepare documentation for self-assessment phase",
      "Increase confidence for on-site audit verification",
    ],
    benefits: [
      "Pathway to OEKO-TEX MADE IN GREEN eligibility",
      "Structured improvement across all six facility dimensions",
      "Industry recognition and supply chain transparency",
    ],
    whoShouldAttend: [
      "Factory quality and compliance managers",
      "Environmental and chemical management officers",
      "Sourcing teams requiring STeP-certified suppliers",
    ],
    coverImage: "/images/training/step-oekotex.jpg",
  },
  {
    slug: "ghg-reduction-sbti",
    title: "GHG Emission Reduction Roadmap Aligned with SBTi",
    badge: "Climate Action",
    trainers: [trainerLookup.rajib],
    duration: "3 Days",
    level: "Advanced",
    format: "Online / In-Person",
    description:
      "Build practical decarbonization roadmaps from GHG inventory baselines to structured reduction initiatives aligned with science-based pathways. Covers Scope 1, 2, and 3 abatement strategies, marginal cost analysis, and implementation governance.",
    whatsIncluded: [
      "GHG baseline review",
      "Scope 1, 2 & 3 reduction strategies",
      "Abatement opportunity identification",
      "Marginal abatement cost prioritization",
      "Implementation governance",
      "SBTi-aligned reduction targets",
      "Investment-grade business cases",
    ],
    professionalBenefits:
      "Build credible, science-aligned decarbonization plans your leadership and investors can defend — positioning you as a strategic climate lead capable of moving from inventory to validated SBTi commitment.",
    courseStructure: [
      "GHG baseline review & data quality check",
      "Scope-by-scope reduction opportunity mapping",
      "Marginal abatement cost prioritization workshop",
      "Reduction roadmap design & target alignment",
      "Implementation governance & accountability planning",
    ],
    keyOutcomes: [
      "Develop structured reduction portfolios per emission scope",
      "Apply marginal abatement cost prioritization",
      "Design implementation governance and accountability structures",
      "Align reduction plans with SBTi near-term and net-zero criteria",
    ],
    benefits: [
      "Credible decarbonization commitments backed by science",
      "Investment-grade emissions reduction business cases",
      "Stronger stakeholder and investor climate narrative",
    ],
    whoShouldAttend: [
      "Climate and energy managers",
      "Sustainability strategists and ESG officers",
      "Operations and procurement leaders",
    ],
    coverImage: "/images/training/ghg-reduction.jpg",
  },
  {
    slug: "sbti-practitioner",
    title: "SBTi Target-Setting Practitioner Program",
    badge: "Climate Action",
    trainers: [trainerLookup.rajib],
    duration: "2 Days",
    level: "Advanced",
    format: "Online / In-Person",
    description:
      "Focused training on SBTi target boundary definition, scope treatment, method selection, and submission-ready target formulation for corporate teams pursuing validated science-based targets.",
    whatsIncluded: [
      "SBTi target boundaries",
      "Scope 1, 2 & 3 treatment",
      "Method selection",
      "Near-term target formulation",
      "Net-zero principles",
      "Submission documentation",
      "Validation readiness",
    ],
    professionalBenefits:
      "Gain practical confidence to drive your organization's SBTi journey from commitment letter to validated target — reducing rejection risk and positioning yourself as a credible climate disclosure practitioner.",
    courseStructure: [
      "SBTi fundamentals & criteria overview",
      "Boundary setting & organizational alignment",
      "Scope treatment & method selection",
      "Target calculation & near-term/net-zero design",
      "Documentation & validation submission readiness",
    ],
    keyOutcomes: [
      "Define organizational and operational target boundaries",
      "Apply correct scope 1, 2, and 3 treatment to targets",
      "Select and apply appropriate target-setting methods",
      "Prepare submission-ready documentation for SBTi validation",
    ],
    benefits: [
      "Faster path from commitment to validated targets",
      "Reduced submission rejection risk",
      "Stronger internal alignment on climate ambition",
    ],
    whoShouldAttend: [
      "Sustainability managers leading SBTi commitments",
      "Climate consultants supporting corporate target-setting",
      "ESG reporting teams needing SBTi disclosure capability",
    ],
    coverImage: "/images/training/sbti-practitioner.jpg",
  },
  {
    slug: "detailed-engineering-assessment",
    title: "Detailed Engineering Assessment Essentials",
    badge: "Technical",
    trainers: [trainerLookup.engrRajib],
    duration: "4 Days",
    level: "Advanced",
    format: "In-Person",
    description:
      "Methodical training on conducting detailed engineering assessments for industrial and commercial structures. Covers structural evaluation protocols, risk classification, remediation planning, and professional report preparation.",
    whatsIncluded: [
      "Structural assessment methodology",
      "Risk classification protocols",
      "Defect identification",
      "Remediation planning",
      "Technical documentation",
      "Evidence collection",
      "Professional report preparation",
    ],
    professionalBenefits:
      "Strengthen your engineering practice with structured, defensible assessment skills that improve safety decisions, technical due diligence, and the quality of compliance reporting you deliver to clients and regulators.",
    courseStructure: [
      "Assessment principles & evaluation protocols",
      "Structural risk inspection & classification",
      "Evidence collection & defect documentation",
      "Remediation planning & prioritization",
      "Professional report preparation workshop",
    ],
    keyOutcomes: [
      "Apply systematic structural assessment methodologies",
      "Classify structural risks and prioritize interventions",
      "Develop evidence-based remediation recommendations",
      "Prepare professional-grade engineering assessment reports",
    ],
    benefits: [
      "Stronger technical due diligence capacity",
      "Improved safety and reliability decisions",
      "Higher-quality reporting for compliance and investment",
    ],
    whoShouldAttend: [
      "Structural and civil engineers",
      "Building safety and compliance officers",
      "Facility operations and maintenance managers",
    ],
    coverImage: "/images/training/engineering-assessment.jpg",
  },
  {
    slug: "sheba-lean-productivity",
    title: "Productivity & Efficiency: Sheba Lean Module",
    badge: "Operational Excellence",
    trainers: [trainerLookup.charles],
    duration: "3 Days",
    level: "Intermediate",
    format: "Online / In-Person",
    description:
      "Lean transformation fundamentals designed for manufacturing environments. Covers value stream mapping, waste elimination, flow optimization, visual management, and establishing sustainable continuous improvement routines.",
    whatsIncluded: [
      "Lean fundamentals",
      "Value stream mapping",
      "Waste elimination (Muda)",
      "Flow optimization",
      "Visual management",
      "Standard work",
      "Daily improvement routines",
    ],
    professionalBenefits:
      "Become the operational excellence champion who can lift productivity, reduce process waste, and embed continuous improvement habits across factory teams — a high-impact capability for any production or industrial engineering career.",
    courseStructure: [
      "Lean principles & manufacturing context",
      "Current-state value stream mapping",
      "Waste analysis & root-cause workshops",
      "Future-state design & flow optimization",
      "Visual management & daily routine deployment",
    ],
    keyOutcomes: [
      "Map and analyze value streams to identify waste",
      "Apply lean tools for flow optimization and pull systems",
      "Implement visual management and standard work",
      "Establish daily management routines for sustained improvement",
    ],
    benefits: [
      "Measurable throughput and productivity gains",
      "Reduced process waste and lead times",
      "Culturally embedded continuous improvement habits",
    ],
    whoShouldAttend: [
      "Production and operations managers",
      "Industrial engineers and process improvement leads",
      "Factory leadership driving efficiency programs",
    ],
    coverImage: "/images/training/lean-productivity.jpg",
  },
];
