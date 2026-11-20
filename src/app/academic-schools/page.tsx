
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const schools = [
  {
    number: "01",
    name: "Business & Management",
    description:
      "Explore business principles, management practice, administration and the skills required in organisational environments.",
  },
  {
    number: "02",
    name: "ICT & Computer Studies",
    description:
      "Develop digital and computing knowledge for a world increasingly shaped by technology and information systems.",
  },
  {
    number: "03",
    name: "Engineering & Technical Studies",
    description:
      "Build technical understanding and practical capabilities across engineering and related technical disciplines.",
  },
  {
    number: "04",
    name: "Tourism & Tour Guiding",
    description:
      "Explore tourism, visitor experiences, destination knowledge and professional guiding.",
  },
  {
    number: "05",
    name: "Journalism & Mass Communication",
    description:
      "Study communication, media practice, journalism and the ways information reaches the public.",
  },
  {
    number: "06",
    name: "Languages & Communication",
    description:
      "Strengthen language, expression and communication skills for academic and professional settings.",
  },
  {
    number: "07",
    name: "Professional & Vocational Studies",
    description:
      "Explore career-oriented learning and vocational development across professional fields.",
  },
  {
    number: "08",
    name: "Cisco Networking & IT Certifications",
    description:
      "Discover networking and information technology learning pathways, including Cisco-related training.",
  },
  {
    number: "09",
    name: "Wildlife, Conservation & KPSGA Training",
    description:
      "Explore wildlife, conservation and related professional training areas.",
  },
];

export const metadata = {
  title: "Academic Schools | Intraglobal Training Institute",
  description:
    "Explore the academic schools and areas of study presented by Intraglobal Training Institute.",
};

export default function AcademicSchoolsPage() {
  return (
    <>
      <SiteHeader />

      <main className="bg-[#F7F6F2] text-[#29272D]">

        {/* HERO WITH YOUR SUPPLIED BACKGROUND */}
        <section className="relative isolate min-h-[520px] overflow-hidden bg-[#541078] text-white md:min-h-[600px]">

          <div
            className="absolute inset-0 -z-20 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/images/academic-background.jpg')",
            }}
          />

          {/* Subtle overlay for text readability */}
          <div className="absolute inset-0 -z-10 bg-[#24102F]/35" />

          <div className="relative mx-auto flex min-h-[520px] max-w-7xl flex-col justify-center px-6 py-28 md:min-h-[600px] md:px-10">

            <p className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.28em] text-white">
              <span className="h-px w-10 bg-[#F1D9A9]" />
              Areas of study
            </p>

            <h1
              style={{ color: "#FFFFFF" }}
              className="mt-8 max-w-4xl font-serif text-5xl font-normal leading-[1.12] tracking-tight md:text-7xl"
            >
              Find the field that moves you forward.
            </h1>

            <p className="mt-8 max-w-2xl text-sm leading-8 text-white/90 md:text-base">
              Explore the institute's academic schools and discover the
              disciplines represented across its training portfolio.
            </p>

            <div className="mt-10">
              <Link
                href="#academic-departments"
                className="inline-flex min-h-[52px] items-center bg-white px-7 text-xs font-semibold uppercase tracking-[0.15em] text-[#39253F] transition-colors duration-300 hover:bg-[#F1D9A9]"
              >
                Explore our schools
                <span className="ml-5 text-base" aria-hidden="true">
                  ↓
                </span>
              </Link>
            </div>
          </div>

          {/* Fade into the page background */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-28"
            style={{
              background:
                "linear-gradient(to bottom, transparent, #F7F6F2)",
            }}
          />
        </section>

        {/* ACADEMIC DEPARTMENTS */}
        <section
          id="academic-departments"
          className="mx-auto max-w-7xl scroll-mt-10 px-6 py-20 md:px-10 md:py-28"
        >
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.23em] text-[#987750]">
                Academic departments
              </p>

              <h2 className="mt-5 max-w-xl font-serif text-4xl font-normal leading-tight tracking-tight text-[#29272D] md:text-5xl">
                Nine areas. Many possibilities.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#74716F]">
              Programme availability, entry requirements, examining bodies
              and certification details should be confirmed with the
              admissions office.
            </p>
          </div>

          <div className="grid gap-0 border-l border-t border-[#DED9D0] sm:grid-cols-2 lg:grid-cols-3">
            {schools.map((school) => (
              <article
                key={school.number}
                className="group min-h-[275px] border-b border-r border-[#DED9D0] bg-transparent p-8 transition-colors duration-300 hover:bg-white md:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-2xl text-[#B28B63]">
                    {school.number}
                  </span>

                  <span className="text-lg text-[#A9A39A] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#A46B91]">
                    ↗
                  </span>
                </div>

                <h3 className="mt-9 font-serif text-2xl font-normal leading-snug text-[#302B32] transition-colors duration-300 group-hover:text-[#8D397D]">
                  {school.name}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#77736F]">
                  {school.description}
                </p>

                <div className="mt-7 h-px w-10 bg-[#C5A77C] transition-all duration-300 group-hover:w-16" />
              </article>
            ))}
          </div>
        </section>

        {/* ADMISSIONS CALL TO ACTION */}
        <section className="bg-[#EAE6DF]">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-20 md:flex-row md:items-center md:justify-between md:px-10">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#987750]">
                Need guidance?
              </p>

              <h2 className="mt-4 max-w-2xl font-serif text-3xl font-normal leading-tight text-[#302B32] md:text-4xl">
                Let's help you identify your next step.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#77736F]">
                Speak with the admissions team to learn more about available
                programmes and the next steps.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex min-h-[54px] w-fit shrink-0 items-center bg-[#713C61] px-8 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:bg-[#542A49]"
            >
              Speak to admissions
              <span className="ml-5 text-base" aria-hidden="true">
                ↗
              </span>
            </Link>
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  );
}
