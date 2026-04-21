import { pageSeo } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { AboutContent } from "./AboutContent";

export const metadata = pageSeo({
  title: "About Us",
  description:
    "The Sustainability Nexus Ltd is a sustainability consultancy in Bangladesh helping organizations build resilient, sustainable business practices through advisory and training.",
  path: "/about",
});

const partnerLogos = [
  { file: "SusNex Partners Logo_AVD Consulting.png", name: "AVD Consulting" },
  { file: "SusNex Partners Logo_Dimension Nano Engineering.png", name: "Dimension Nano Engineering" },
  { file: "SusNex Partners Logo_DPL.png", name: "DPL" },
  { file: "SusNex Partners Logo_ENRGTECH.png", name: "ENRGTECH" },
  { file: "SusNex Partners Logo_GSM GmBH.png", name: "GSM GmBH" },
  { file: "SusNex Partners Logo_Kingsley.png", name: "Kingsley" },
  { file: "SusNex Partners Logo_Selenite.png", name: "Selenite" },
  { file: "SusNex Partners Logo_The Green Canvas.png", name: "The Green Canvas" },
  { file: "SusNex Partners Logo_Therbligs Associates.png", name: "Therbligs Associates" },
  { file: "LRQA-ResetCarbon-Secondary-Reverse.png", name: "Reset Carbon" },
  { file: "systain.svg", name: "Systain Consulting" },
  { file: "unnamed.png", name: "NexusX" },
].map((p) => ({ src: `/images/partners/${p.file}`, alt: p.name }));

const clientLogos = [
  { file: "SusNex Clients Logo_Akij Resources.png", name: "Akij Resources" },
  { file: "SusNex Clients Logo_Apex.png", name: "Apex" },
  { file: "SusNex Clients Logo_Auchan Retail.png", name: "Auchan Retail" },
  { file: "SusNex Clients Logo_Avery Dennison.png", name: "Avery Dennison" },
  { file: "SusNex Clients Logo_Bashundhara Group.png", name: "Bashundhara Group" },
  { file: "SusNex Clients Logo_BASHUNDHARA MULTI STEEL INDUSTRIES LIMITED.png", name: "Bashundhara Multi Steel Industries" },
  { file: "SusNex Clients Logo_Bashundhara Paper Mills Ltd.png", name: "Bashundhara Paper Mills" },
  { file: "SusNex Clients Logo_Bashundhara Ready Mix & Construction Industries Ltd.png", name: "Bashundhara Ready Mix & Construction" },
  { file: "SusNex Clients Logo_Beximco Pharma Ltd.png", name: "Beximco Pharma" },
  { file: "SusNex Clients Logo_beyond.png", name: "Beyond" },
  { file: "SusNex Clients Logo_BGMEA.png", name: "BGMEA" },
  { file: "SusNex Clients Logo_Bitopi Group.png", name: "Bitopi Group" },
  { file: "SusNex Clients Logo_BKMEA.png", name: "BKMEA" },
  { file: "SusNex Clients Logo_British American Tobacco Ltd.png", name: "British American Tobacco" },
  { file: "SusNex Clients Logo_Centro Tex Ltd.png", name: "Centro Tex" },
  { file: "SusNex Clients Logo_CocaCola.png", name: "Coca-Cola" },
  { file: "SusNex Clients Logo_Columbia Washing Plant Ltd.png", name: "Columbia Washing Plant" },
  { file: "SusNex Clients Logo_DBL Group.png", name: "DBL Group" },
  { file: "SusNex Clients Logo_Denim Expert Ltd.png", name: "Denim Expert" },
  { file: "SusNex Clients Logo_Gildan.png", name: "Gildan" },
  { file: "SusNex Clients Logo_GIZ.png", name: "GIZ" },
  { file: "SusNex Clients Logo_Global Reporting Initiative (GRI).png", name: "Global Reporting Initiative (GRI)" },
  { file: "SusNex Clients Logo_Hameem Group.png", name: "Hameem Group" },
  { file: "SusNex Clients Logo_Hidramani Group.png", name: "Hidramani Group" },
  { file: "SusNex Clients Logo_HSBC Bank PLC.png", name: "HSBC Bank" },
  { file: "SusNex Clients Logo_ICON Institut.png", name: "ICON Institut" },
  { file: "SusNex Clients Logo_Ispahani.png", name: "Ispahani" },
  { file: "SusNex Clients Logo_Kontoor.png", name: "Kontoor" },
  { file: "SusNex Clients Logo_Kumudini Cares.png", name: "Kumudini Cares" },
  { file: "SusNex Clients Logo_Mohammadi Group.png", name: "Mohammadi Group" },
  { file: "SusNex Clients Logo_Nassa Group.png", name: "Nassa Group" },
  { file: "SusNex Clients Logo_Navana Group.png", name: "Navana Group" },
  { file: "SusNex Clients Logo_NOMAN Terry Towel Mills Ltd.png", name: "NOMAN Terry Towel Mills" },
  { file: "SusNex Clients Logo_Oxfam.png", name: "Oxfam" },
  { file: "SusNex Clients Logo_Paddock's Jeans.png", name: "Paddock's Jeans" },
  { file: "SusNex Clients Logo_Palmal Group.png", name: "Palmal Group" },
  { file: "SusNex Clients Logo_Perfetti.png", name: "Perfetti" },
  { file: "SusNex Clients Logo_Pioneer Denim.png", name: "Pioneer Denim" },
  { file: "SusNex Clients Logo_Posh Garments.png", name: "Posh Garments" },
  { file: "SusNex Clients Logo_Pran-RFL Group.png", name: "Pran-RFL Group" },
  { file: "SusNex Clients Logo_RAK Ceramics.png", name: "RAK Ceramics" },
  { file: "SusNex Clients Logo_Remi Holdings.png", name: "Remi Holdings" },
  { file: "SusNex Clients Logo_Sainsbury's.png", name: "Sainsbury's" },
  { file: "SusNex Clients Logo_Sajida Foundation.png", name: "Sajida Foundation" },
  { file: "SusNex Clients Logo_Shin Shin Group.png", name: "Shin Shin Group" },
  { file: "SusNex Clients Logo_Simens.png", name: "Siemens" },
  { file: "SusNex Clients Logo_Solidaridad.png", name: "Solidaridad" },
  { file: "SusNex Clients Logo_SQ Group.png", name: "SQ Group" },
  { file: "SusNex Clients Logo_SREDA.png", name: "SREDA" },
  { file: "SusNex Clients Logo_Sterling Denims Ltd.png", name: "Sterling Denims" },
  { file: "SusNex Clients Logo_Sun Pharma.png", name: "Sun Pharma" },
  { file: "SusNex Clients Logo_Swisscontact.png", name: "Swisscontact" },
  { file: "SusNex Clients Logo_Team Group.png", name: "Team Group" },
  { file: "SusNex Clients Logo_Toggi Digital Liberation.png", name: "Toggi Digital Liberation" },
  { file: "SusNex Clients Logo_Toggi Shipping & Logistics Limited.png", name: "Toggi Shipping & Logistics" },
  { file: "SusNex Clients Logo_Trademark Textiles.png", name: "Trademark Textiles" },
  { file: "SusNex Clients Logo_Tsports.png", name: "Tsports" },
  { file: "SusNex Clients Logo_Tusuka Group.png", name: "Tusuka Group" },
  { file: "SusNex Clients Logo_T\u00DCVRheinland.png", name: "TÜV Rheinland" },
  { file: "SusNex Clients Logo_Urmi Group.png", name: "Urmi Group" },
  { file: "SusNex Clients Logo_World Bank.png", name: "World Bank" },
  { file: "SusNex Clients Logo_YKK.png", name: "YKK" },
  { file: "SusNex Clients Logo_ZABER & ZUBAIR Fabrics Bangladesh.png", name: "Zaber & Zubair Fabrics" },
].map((c) => ({ src: `/images/clients/${c.file}`, alt: c.name }));

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        title="About Us"
        description="The Sustainability Nexus — your partner in professional sustainability, ethical trading, and conformity services."
      />
      <AboutContent partnerLogos={partnerLogos} clientLogos={clientLogos} />
    </main>
  );
}
