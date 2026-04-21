export interface CaseStudy {
  slug: string;
  title: string;
  industry: string;
  client?: string;
  challenge: string[];
  approach: string[];
  result: string[];
  tags: string[];
  referenceLinks?: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "energy-ghg-reduction",
    title: "Energy Enhancement & GHG Reduction Project for Producer Factories",
    industry: "Textiles & Garments",
    challenge: [
      "EU regulatory pressure demanding verifiable energy and emissions data from producer factories",
      "Inaccurate energy consumption and emissions data across factory operations",
      "Lack of awareness among factory management about energy efficiency opportunities",
      "Limited access to affordable clean energy technology and technical support",
    ],
    approach: [
      "Conducted comprehensive energy audits across participating factories to establish baselines",
      "Performed GHG mapping and emissions inventories using internationally recognized protocols",
      "Delivered capacity-building programs for factory engineers and management teams",
      "Evaluated and recommended solar energy solutions tailored to factory infrastructure",
    ],
    result: [
      "Achieved 21.77% reduction in energy consumption across participating factories",
      "Reduced GHG emissions by 14.79% through energy efficiency measures alone",
      "Projected 34.76% GHG reduction without solar, scaling to 93.83% with solar adoption",
      "Generated USD 200,212 in annual cost savings from energy efficiency improvements",
    ],
    tags: ["Energy & Carbon", "Manufacturing", "GHG Reduction"],
  },
  {
    slug: "bgmea-sustainability-reporting",
    title: "BGMEA's 2nd Sustainability Reporting Project with GIZ",
    industry: "RMG",
    client: "BGMEA",
    challenge: [
      "ESG data quality issues across a large and diverse membership base",
      "Rising buyer expectations for credible ESG disclosures from industry associations",
      "Capacity gaps in member factories for systematic data collection and reporting",
      "Increasing regulatory pressure from EU sustainability due diligence requirements",
    ],
    approach: [
      "Partnered with GIZ to deliver capacity-building workshops on GRI Standards and ESG data management",
      "Designed and implemented a data verification system to improve reporting accuracy",
      "Conducted stakeholder consultations to identify material topics and reporting priorities",
      "Led the full report development process from data collection through publication",
    ],
    result: [
      "Published BGMEA's 2nd GRI-aligned sustainability report with improved data quality",
      "Established improved ESG data management processes across member factories",
      "Enhanced BGMEA's market relevance through demonstrated commitment to transparency",
      "Built a self-sustaining internal team capable of leading future reporting cycles",
    ],
    tags: ["ESG Reporting", "GRI", "RMG"],
    referenceLinks: [
      "https://www.giz.de/en/worldwide/351.html",
      "https://www.bgmea.com.bd/",
    ],
  },
  {
    slug: "amfori-bsci-remediation",
    title: "amfori BSCI Investigation Handler & Remediation Handler",
    industry: "Manufacturing",
    challenge: [
      "Unresolved worker grievances creating risks for factory compliance and buyer relationships",
      "Informal and undocumented disciplinary procedures lacking transparency",
      "Ineffective worker participation committees failing to address systemic issues",
      "Worker hesitancy to engage with existing grievance channels due to fear of retaliation",
    ],
    approach: [
      "Conducted formal investigations into reported grievances following amfori BSCI protocols",
      "Performed baseline assessments of factory grievance mechanisms and social dialogue structures",
      "Designed and implemented structured remediation programs with measurable milestones",
    ],
    result: [
      "Achieved 80% reduction in negative workplace behaviors through targeted interventions",
      "Strengthened grievance mechanisms with accessible, trusted, and documented processes",
      "Enhanced worker and management training on rights, responsibilities, and social dialogue",
    ],
    tags: ["Social Compliance", "Grievance Mechanism", "BSCI"],
  },
  {
    slug: "ghg-lca-textile",
    title: "GHG Life Cycle Assessment of Solid & Allover Print Products",
    industry: "Fashion & Apparel",
    challenge: [
      "Limited visibility into GHG hotspots across the product lifecycle",
      "Growing cut-make-waste pressure from buyers demanding lower carbon footprints",
      "Recycled content pledges requiring verifiable lifecycle emissions data",
      "Upcoming ESPR and CSDDD regulations demanding product-level environmental disclosures",
    ],
    approach: [
      "Conducted full ISO 14040/44 compliant Life Cycle Assessment across product categories",
      "Collected primary energy data from factory operations and upstream supply chain",
      "Applied GHG Protocol product lifecycle calculator for emissions quantification",
      "Mapped 3,187 individual pieces across solid and allover print product lines",
    ],
    result: [
      "Quantified emissions at 1.29 kg CO₂e/piece for solid vs 1.16 kg CO₂e/piece for allover print",
      "Identified cotton farming and spinning as the dominant hotspot at 48% of total lifecycle emissions",
      "Identified quick-win reduction opportunities in energy, logistics, and material sourcing",
    ],
    tags: ["LCA", "GHG", "Fashion & Apparel"],
  },
  {
    slug: "swisscontact-ltcp",
    title:
      "Swisscontact LTCP Project: Enhancing Local Capacity for Sustainability Reporting",
    industry: "RMG & Consulting",
    challenge: [
      "Over-reliance on expensive international consultants for sustainability reporting",
      "Lack of local GRI-certified expertise in Bangladesh's consultancy market",
      "Growing buyer pressure on factories to produce credible sustainability disclosures",
    ],
    approach: [
      "Delivered GRI Standards capacity-building programs for 10 local consultancy firms",
      "Supported 20 pilot companies through their first sustainability reporting cycles",
      "Facilitated market development to connect trained LTCPs with factory demand",
      "Established the National Sustainability Reporting Consultants (NSRC) network",
    ],
    result: [
      "Built sustainability reporting capacity in 10 local consultancy firms",
      "Enabled 20 companies to publish their first GRI-aligned sustainability reports",
      "Created sustained market growth for local sustainability consultancy services",
    ],
    tags: ["GRI", "Capacity Building", "RMG"],
  },
  {
    slug: "bkmea-sustainability-reporting",
    title: "BKMEA Member Factories Sustainability Reporting Project",
    industry: "Knitwear Manufacturing",
    client: "BKMEA",
    challenge: [
      "Lack of quality ESG data across BKMEA member factories",
      "Increasing buyer pressure for transparent sustainability disclosures",
      "Limited internal capacity for systematic data collection and GRI reporting",
    ],
    approach: [
      "Delivered GRI Standards training to BKMEA member factory teams",
      "Implemented data verification processes to ensure reporting accuracy",
      "Facilitated stakeholder engagement workshops to identify material topics",
    ],
    result: [
      "Successfully produced GRI-aligned sustainability reports for member factories",
      "Improved ESG data management practices and internal governance structures",
      "Strengthened buyer confidence through credible and transparent disclosures",
    ],
    tags: ["ESG Reporting", "GRI", "RMG"],
  },
  {
    slug: "mbm-group-esg",
    title: "ESG Reporting & Capacity Development for MBM Group",
    industry: "Garment Manufacturing",
    client: "MBM Group",
    challenge: [
      "Pressure from global sustainability standards and buyer ESG requirements",
      "Need to integrate ESG considerations into core business operations",
      "Preparation required for EU CSDDD compliance and due diligence obligations",
    ],
    approach: [
      "Conducted comprehensive ESG gap assessment across MBM Group operations",
      "Developed tailored ESG policies and governance frameworks",
      "Delivered capacity-building programs for internal sustainability teams",
      "Prepared GRI and ESRS-aligned ESG reports with verified data",
    ],
    result: [
      "Achieved alignment with both GRI and ESRS reporting frameworks",
      "Enhanced ESG performance across environmental, social, and governance dimensions",
      "Strengthened buyer confidence with key accounts including Levi's and H&M",
      "Built an internal team capable of sustaining ESG reporting independently",
    ],
    tags: ["ESG Reporting", "Capacity Building", "Manufacturing"],
  },
  {
    slug: "gotan-tannery-safety",
    title: "Good Working Conditions in Tanneries (GOTAN)",
    industry: "Leather & Tannery",
    challenge: [
      "Weak OHS regulatory enforcement in Bangladesh's tannery sector",
      "Insufficient training and awareness among tannery workers and management",
      "Resistance to change from established operational practices",
      "Complex coordination across multiple stakeholders including government and industry",
    ],
    approach: [
      "Delivered capacity-building programs on occupational health and safety standards",
      "Engaged stakeholders across government, industry associations, and buyer networks",
      "Drove demand for improved working conditions through buyer and market incentives",
      "Established progress monitoring systems with measurable OHS indicators",
    ],
    result: [
      "Achieved meaningful stakeholder engagement across government, industry, and buyer groups",
      "Identified and documented critical OHS gaps in participating tanneries",
      "Increased adoption of improved safety practices and management systems",
      "Created market incentives linking better working conditions to commercial benefits",
    ],
    tags: ["OHS", "Leather", "Social Compliance"],
  },
  {
    slug: "hredd-leather",
    title:
      "Human Rights and Environmental Due Diligence Guide for Leather Industry",
    industry: "Leather",
    challenge: [
      "Fragmented supply chain with limited visibility beyond Tier-1 suppliers",
      "Risks of child labour and exploitative working conditions in upstream operations",
      "Environmental pollution from tanning processes and chemical discharge",
      "Overlapping and duplicative audit requirements across multiple buyer frameworks",
      "No sector-specific HREDD guide available for the leather industry",
    ],
    approach: [
      "Established the conceptual frame and aligned the guide with UNGP and OECD Due Diligence Guidance",
      "Built the evidence base through primary research and stakeholder interviews",
      "Conducted supply-chain risk mapping across leather value chain tiers",
      "Co-designed the guide structure and content with industry stakeholders",
      "Drafted the complete guide in English and Bangla with practical action tables",
      "Planned the roll-out strategy including training materials and facilitator support",
    ],
    result: [
      "Produced a camera-ready HREDD guide tailored to the leather industry",
      "Developed practical action tables for each due diligence step",
      "Created comprehensive supply-chain risk maps covering environmental and social risks",
      "Included real-world case studies demonstrating due diligence implementation",
      "Prepared facilitator materials for training and capacity-building sessions",
      "Integrated a KPI annex for monitoring due diligence effectiveness",
    ],
    tags: ["Human Rights", "Due Diligence", "Leather"],
  },
  {
    slug: "climate-check-rmg",
    title:
      "Climate Check: Climate Change & Fossil-Fuel Impacts on Bangladesh's RMG Workers",
    industry: "RMG",
    challenge: [
      "Indoor workplace temperatures exceeding 31°C WBGT in garment factories",
      "48% of workers reporting unsafe thermal conditions during peak months",
      "Up to 20% productivity loss attributable to heat stress in factory environments",
      "Estimated 361 kt CO₂e annual emissions from surveyed factory operations",
    ],
    approach: [
      "Conducted worker diagnostic surveys on heat exposure and working conditions",
      "Performed carbon accounting and emissions analysis for factory operations",
      "Co-designed climate adaptation and mitigation strategies with Oxfam and factory stakeholders",
    ],
    result: [
      "Quantified the cost of climate inaction for Bangladesh's RMG sector",
      "Identified 210 kt CO₂e in avertable emissions by 2030 through targeted interventions",
      "Implemented pilot programs in 2 factories demonstrating replicable solutions",
      "Generated policy traction with industry and government stakeholders",
    ],
    tags: ["Climate Action", "Worker Welfare", "RMG"],
  },
  {
    slug: "jhoot-waste-circularity",
    title:
      "Jhoot Waste Management & Circularity in Bangladesh's Textile Industry",
    industry: "Textiles",
    challenge: [
      "Approximately 330,000 tonnes of Jhoot (textile waste) generated annually in Bangladesh",
      "Informal and unregulated waste management practices across the supply chain",
      "Significant environmental pollution from improper textile waste disposal",
    ],
    approach: [
      "Conducted comprehensive stakeholder mapping across the Jhoot value chain",
      "Performed environmental assessment of current waste management practices",
      "Developed policy recommendations for formalizing Jhoot management and promoting circularity",
    ],
    result: [
      "Achieved broad stakeholder engagement across industry, government, and civil society",
      "Produced a policy framework for sustainable textile waste management",
      "Established a formalization pathway for integrating informal waste networks into circular systems",
    ],
    tags: ["Circular Economy", "Waste Management", "Textiles"],
  },
  {
    slug: "bnsb-hospital-sustainability",
    title:
      "Environmental Sustainability Assessment of Dr. K. Zaman BNSB Eye Hospital",
    industry: "Healthcare",
    client: "BNSB",
    challenge: [
      "No formal sustainability strategy or environmental management framework in place",
      "Limited staff training and awareness on environmental sustainability practices",
      "Energy inefficiency, inadequate waste management, and excessive water consumption",
    ],
    approach: [
      "Collected and analyzed operational data across energy, waste, and water systems",
      "Conducted Scope 1, 2, and 3 emissions assessment to establish a GHG baseline",
      "Reviewed existing policies and identified gaps against sustainability best practices",
      "Engaged hospital staff and management through stakeholder consultation workshops",
    ],
    result: [
      "Delivered solar energy adoption recommendations with projected cost and emissions savings",
      "Proposed waste management improvements aligned with healthcare regulatory requirements",
      "Identified water conservation measures to reduce consumption and operational costs",
      "Launched staff awareness programs to embed sustainability into daily hospital operations",
    ],
    tags: ["Healthcare", "Environmental Assessment", "GHG"],
  },
  {
    slug: "sajida-esg-framework",
    title: "ESG Policy & Reporting Framework for SAJIDA Foundation",
    industry: "NGO",
    client: "SAJIDA Foundation",
    challenge: [
      "Growing donor expectations for transparent and measurable ESG performance",
      "Evolving regulatory trends requiring structured sustainability disclosures",
      "Need to integrate ESG principles into organizational strategy and operations",
    ],
    approach: [
      "Developed a comprehensive ESG strategy aligned with the foundation's mission and operations",
      "Conducted materiality assessment to identify priority ESG topics",
      "Designed a GRI-aligned reporting framework with structured disclosure templates",
      "Established SMART goals and KPIs for tracking ESG performance over time",
    ],
    result: [
      "Strengthened donor confidence through structured and transparent ESG reporting",
      "Defined measurable ESG targets with clear accountability and timelines",
      "Created competitive advantage in donor funding through demonstrated ESG maturity",
      "Established a framework for annual GRI-aligned sustainability reports",
    ],
    tags: ["ESG Reporting", "NGO", "Governance"],
  },
];
