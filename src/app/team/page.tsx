import { pageSeo } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { MemberCard, type TeamMember } from "./MemberCard";
import { TeamBackground } from "./TeamBackground";

export const metadata = pageSeo({
  title: "Our Team",
  description:
    "Meet SusNex sustainability experts: ESG, energy, environmental science, social sustainability, and ethical sourcing professionals based in Bangladesh and globally.",
  path: "/team",
});

const leadership: TeamMember[] = [
  {
    name: "Sadia Sultana",
    role: "Chairman",
    photo: "/images/team/sadia-sultana.jpg",
  },
  {
    name: "S W Rubbani",
    role: "Director & CEO",
    photo: "/images/team/sw-rubbani.jpg",
    linkedin: "https://www.linkedin.com/in/saiad-wahid-rubbani-214099b9/",
  },
  {
    name: "Montasir Nahid",
    role: "Director - ESG",
    photo: "/images/team/montasir-nahid.jpg",
    linkedin: "https://www.linkedin.com/in/montasir-nahid-918b7319/",
    badges: ["GRI Certified Sustainability Professional"],
  },
  {
    name: "Karen Frauen",
    role: "International Expert - Sustainability Reporting",
    photo: "/images/team/karen-frauen.jpg",
    linkedin: "https://www.linkedin.com/in/karen-frauen-863733b9/",
  },
  {
    name: "Michael Vennard",
    role: "International Expert - Leather Technology",
    photo: "/images/team/michael-vennard.jpg",
    linkedin: "https://www.linkedin.com/in/michael-vennard-59541b28/",
  },
  {
    name: "Dr. Charles Dagher",
    role: "Strategic Partner - Productivity & Efficiency",
    photo: "/images/team/charles-dagher.jpg",
    linkedin: "https://www.linkedin.com/in/dr-charles-dagher-b474b92a/",
  },
  {
    name: "Aliya Khondker",
    role: "International Expert - ESG",
    photo: "/images/team/aliya-khondker.jpg",
    linkedin: "https://www.linkedin.com/in/aliyakhondker/",
  },
  {
    name: "Tanzida Islam",
    role: "International Expert - ESG",
    photo: "/images/team/tanzida-islam.jpg",
    linkedin: "https://www.linkedin.com/in/tanzida-islam-65930441/",
  },
  {
    name: "Shamiul Hoque",
    role: "Director - Sustainability Programs & Circular Economy",
    photo: "/images/team/shamiul-hoque.jpg",
    linkedin: "https://www.linkedin.com/in/shamiulhoque/",
  },
  {
    name: "Rajib Ul Haque",
    role: "Director & Chief Environmental Expert",
    photo: "/images/team/rajib-ul-haque.jpg",
    linkedin: "https://www.linkedin.com/in/rajib-ul-haque-a10b0081/",
    badges: ["GRI Certified Sustainability Professional"],
  },
  {
    name: "Aleya Aktar",
    role: "Director - Ethical Sourcing & CSR",
    photo: "/images/team/aleya-aktar.jpg",
    linkedin: "https://www.linkedin.com/in/aleya-aktar-94411741/",
  },
  {
    name: "Engr. Yousuf Ali",
    role: "Director & Chief Energy Expert",
    photo: "/images/team/yousuf-ali.jpg",
    linkedin: "https://www.linkedin.com/in/md-yousuf-ali-b45624117/",
  },
  {
    name: "S M Nurul Huda",
    role: "Director Compliance & Sustainability",
    photo: "/images/team/sm-nurul-huda.jpg",
    linkedin: "https://www.linkedin.com/in/sm-nurul-huda-6b8a19123/",
  },
  {
    name: "Mahbub Khan",
    role: "Director & Sustainable Finance Expert",
    photo: "/images/team/mahbub-khan.jpg",
    linkedin: "https://www.linkedin.com/in/mahbub-khan-consultant/",
  },
  {
    name: "Engr. M M Haque Rajib",
    role: "Director & Structural Expert",
    photo: "/images/team/rajib.jpg",
    linkedin:
      "https://www.linkedin.com/in/engr-rajib-ahmed-%E5%B7%A5%E7%A8%8B%E5%B8%88-%E6%8B%89%E5%90%89%E5%B8%83-%F0%9F%8C%BF-45b1a0186/",
  },
  {
    name: "Shahina Parven Alo",
    role: "Expert - Gender & Inclusion",
    photo: "/images/team/shahina-parven-alo.jpg",
    linkedin: "https://www.linkedin.com/in/shahina-parven-alo-8ba36970/",
  },
  {
    name: "Nishat Anzum",
    role: "ESG Specialist & GRI Trainer",
    photo: "/images/team/nishat-anzum.jpg",
    linkedin: "https://www.linkedin.com/in/nishat-anzum-shova-b07147174/",
    badges: ["GRI Certified Sustainability Professional"],
  },
  {
    name: "Nahiyan Al Farook",
    role: "Structural Engineer",
    photo: "/images/team/nahiyan-al-farook.jpg",
    linkedin: "https://www.linkedin.com/in/nahiyan04/",
  },
  {
    name: "Adv. Tawfiq Imtiaz",
    role: "Specialist - Human Rights",
    photo: "/images/team/tawfiq-imtiaz.jpg",
    linkedin: "https://www.linkedin.com/in/tawfiq-imtiaz-b72067175/",
  },
];

const engineers: TeamMember[] = [
  {
    name: "S M Nasimul Haque",
    role: "Lead Sustainability Engineer",
    photo: "/images/team/nasimul-haque.jpg",
    linkedin: "https://www.linkedin.com/in/nasshahin/",
  },
  {
    name: "Kazi Nabila Hossain",
    role: "Sr. Sustainability Developer",
    photo: "/images/team/nabila-hossain.jpg",
    linkedin: "https://www.linkedin.com/in/nabila-hossain-067063266/",
  },
  {
    name: "Riajul Islam",
    role: "Sr. Sustainability Engineer",
    photo: "/images/team/riajul-islam.jpg",
    linkedin: "https://www.linkedin.com/in/riajuull/",
  },
  {
    name: "Mohoshina Shorna",
    role: "Sr. Sustainability Engineer",
    photo: "/images/team/mohoshina-shorna.jpg",
    linkedin: "https://www.linkedin.com/in/mohshina-shorna-3017091a3/",
  },
  {
    name: "Partha Saha",
    role: "Sr. Sustainability Engineer",
    photo: "/images/team/partha-saha.jpg",
    linkedin: "https://www.linkedin.com/in/partha-5346572a6/",
  },
  {
    name: "Fazleh Fahad",
    role: "Sr. Sustainability Engineer",
    photo: "/images/team/fazleh-fahad.jpg",
    linkedin: "https://www.linkedin.com/in/fahad-waheed8/",
  },
  {
    name: "Zubaida Akhter",
    role: "Sustainability Engineer",
    photo: "/images/team/zubaida-akhter.jpg",
    linkedin: "https://www.linkedin.com/in/zubaida-akhter/",
  },
  {
    name: "Adety Sarkar",
    role: "Sustainability Engineer",
    photo: "/images/team/adety-sarkar.jpg",
    linkedin: "https://www.linkedin.com/in/adety-sarkar-708b93240/",
  },
  {
    name: "Ryna Tasnim Retu",
    role: "Sustainability Developer",
    photo: "/images/team/ryna-tasnim-retu.jpg",
    linkedin: "https://www.linkedin.com/in/ryna-tasnim-retu-b0b4b2300/",
  },
  {
    name: "Ilma Afrin Koatha",
    role: "Sustainability Developer",
    photo: "/images/team/ilma-afrin-koatha.jpg",
    linkedin: "https://www.linkedin.com/in/ilma-koatha/",
  },
  {
    name: "Penaki Talukdar Turna",
    role: "Sustainability Engineer",
    photo: "/images/team/penaki-turna.jpg",
    linkedin: "https://www.linkedin.com/in/penaki-talukdar-turna-35a492193/",
  },
  {
    name: "Jerin Tasnim",
    role: "Sustainability Developer",
    photo: "/images/team/jerin-tasnim.jpg",
    linkedin: "https://www.linkedin.com/in/jerin-tasnim-79bab82a4/",
  },
  {
    name: "Mejar Liman",
    role: "Sustainability Engineer",
    photo: "/images/team/mejar-liman.jpg",
    linkedin: "https://www.linkedin.com/in/md-mejar-alam-liman-8b4b60169/",
  },
  {
    name: "Nafis Wadud",
    role: "Sustainability Developer",
    photo: "/images/team/nafis-wadud.jpg",
    linkedin: "https://www.linkedin.com/in/nafiswadud/",
  },
  {
    name: "Zahra Alam Liya",
    role: "Sustainability Developer",
    photo: "/images/team/zahra-alam-liya.jpg",
    linkedin: "https://www.linkedin.com/in/zahraalamliya/",
  },
  {
    name: "Zohaer Al Mahtab",
    role: "Creative Designer",
    photo: "/images/team/zohaer-al-mahtab.jpg",
    linkedin: "https://www.linkedin.com/in/zohaer-al-mahatab-8b6a06200/",
  },
  {
    name: "Hafizur Alve",
    role: "Sustainability Engineer",
    photo: "/images/team/hafizur-alve.jpg",
    linkedin: "https://www.linkedin.com/in/hafizur-rahman-alve-9587641a4/",
  },
];

const mentors: TeamMember[] = [
  {
    name: "Engr. Lutful Kabir",
    role: "Advisor",
    photo: "/images/team/lutful-kabir-v2.jpg",
  },
  {
    name: "Saizur Rahman",
    role: "Director & Canada Representative",
    photo: "/images/team/saizur-rahman.jpg",
    linkedin: "https://www.linkedin.com/in/md-saizur-rahman-109623245/",
  },
  {
    name: "Engr. Jobaer Hossain",
    role: "Expert - Quality Assurance",
    photo: "/images/team/jobaer-hossain.jpg",
  },
  {
    name: "Engr. Shafiqul Islam",
    role: "Expert - Leather Technology",
    photo: "/images/team/shafiqul-islam-v2.jpg",
  },
];

export default function TeamPage() {
  return (
    <main>
      <PageHeader
        title="Our Team"
        description="Sustainability professionals with deep experience across ESG, energy, environment, and social programs."
      />

      <section className="relative bg-bg-primary px-6 py-16 lg:py-24">
        <TeamBackground />
        <div className="relative mx-auto max-w-7xl text-center">
          <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
            Leadership &amp; Directors
          </h2>
          <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-text-secondary">
            Our leadership team brings decades of combined experience across ESG
            reporting, energy management, environmental science, structural
            engineering, and social sustainability.
          </p>
        </div>

        <div className="relative mx-auto mt-12 flex max-w-5xl flex-wrap justify-center gap-4">
          {leadership.map((member, i) => (
            <div key={member.name} className="w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] md:w-[calc(25%-12px)]">
              <MemberCard member={member} index={i} />
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-bg-secondary px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
            Engineering &amp; Sustainability Team
          </h2>
          <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-text-secondary">
            Our team of engineers, analysts, and developers work on the ground to
            deliver measurable sustainability outcomes for our clients.
          </p>
        </div>

        <div className="mx-auto mt-12 flex max-w-7xl flex-wrap justify-center gap-4">
          {engineers.map((member, i) => (
            <div key={member.name} className="w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] md:w-[calc(25%-12px)] lg:w-[calc(20%-13px)]">
              <MemberCard member={member} index={i} />
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-bg-primary px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
            Our Mentors
          </h2>
          <p className="mx-auto mt-4 leading-relaxed text-text-secondary">
            Seasoned professionals who guide our strategic direction and quality
            standards.
          </p>
        </div>

        <div className="mx-auto mt-8 flex max-w-7xl flex-wrap justify-center gap-4">
          {mentors.map((mentor, i) => (
            <div key={mentor.name} className="w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] md:w-[calc(25%-12px)]">
              <MemberCard member={mentor} index={i} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
