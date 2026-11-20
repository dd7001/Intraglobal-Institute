
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const highlights = [
  {
    number: "01",
    title: "Practical education",
    text: "Learning shaped around applicable knowledge, practical skills and professional development.",
  },
  {
    number: "02",
    title: "Diverse disciplines",
    text: "Explore academic and vocational fields spanning business, technology, communication and more.",
  },
  {
    number: "03",
    title: "Established heritage",
    text: "An institutional history dating back to 1990, with a commitment to education and opportunity.",
  },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader transparent />

      <main className="overflow-hidden bg-[#F7F6F2] text-[#262724]">

        {/* HERO */}
        <section className="relative isolate flex min-h-[680px] items-center overflow-hidden bg-[#252724] md:min-h-[760px]">

          <Image
            src="/images/intraglobal-building.jpg"
            alt="Intraglobal Training Institute building"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Cinematic image treatment */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#191B19]/95 via-[#191B19]/70 to-[#191B19]/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#191B19]/45 via-transparent to-[#191B19]/15" />

          {/* Hero content */}
          <div className="relative z-20 mx-auto w-full max-w-[1440px] px-6 pb-20 pt-48 text-white md:px-12 lg:px-20">

            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#C4A779]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D9C29C] md:text-xs">
                Education · Professionalism · Opportunity
              </p>
            </div>

            <h1 className="mt-9 max-w-[850px] font-serif text-[48px] font-normal leading-[1.08] tracking-[-0.035em] sm:text-6xl md:text-7xl lg:text-[82px]">
              Building knowledge.
              <br />
              <span className="text-[#D7BE96]">
                Shaping futures.
              </span>
            </h1>

            <p className="mt-8 max-w-[540px] text-[15px] leading-[1.9] text-white/85 md:text-base">
              Discover professional and technical education at Intraglobal
              Training Institute. Explore our academic schools and take the
              next step in your educational journey.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/academic-schools"
                className="inline-flex min-h-[54px] items-center justify-center bg-[#B28C60] px-8 text-[10px] font-semibold uppercase tracking-[0.17em] text-white transition-colors duration-300 hover:bg-[#96734D]"
              >
                Explore our schools
                <span className="ml-5 text-base" aria-hidden="true">↗</span>
              </Link>

              <Link
                href="/about"
                className="inline-flex min-h-[54px] items-center justify-center border border-white/55 px-8 text-[10px] font-semibold uppercase tracking-[0.17em] text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-[#262724]"
              >
                Discover Intraglobal
              </Link>
            </div>
          </div>

          {/* Bottom editorial detail */}
          <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/20">
            <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-12 lg:px-20">
              <p className="text-[9px] uppercase tracking-[0.24em] text-white/65">
                Intraglobal Training Institute
              </p>
              <p className="text-[9px] uppercase tracking-[0.24em] text-white/65">
                Nairobi · Kenya
              </p>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="bg-[#F7F6F2] px-6 py-24 md:px-12 md:py-32 lg:px-20">
          <div className="mx-auto grid max-w-[1280px] gap-16 md:grid-cols-[1fr_1.05fr] md:items-center lg:gap-24">

            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#A9855C]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#987750]">
                  Welcome to Intraglobal
                </p>
              </div>

              <h2 className="mt-8 max-w-[560px] font-serif text-[39px] leading-[1.17] tracking-[-0.035em] text-[#292A26] md:text-[51px]">
                Education with purpose.
                <br />
                <span className="text-[#8C806F]">
                  Learning with direction.
                </span>
              </h2>

              <div className="mt-8 max-w-[510px] space-y-5 text-[14px] leading-[2] text-[#686963]">
                <p>
                  Discover professional and technical education at Intraglobal
                  Training Institute. Explore our academic schools and take
                  the next step in your educational journey.
                </p>

                <p>
                  The institute brings together academic and vocational study
                  areas designed to develop practical skills, professional
                  knowledge and opportunities for career growth.
                </p>
              </div>

              <Link
                href="/about"
                className="mt-9 inline-flex items-center gap-5 border-b border-[#A9855C] pb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6E543B] transition-colors hover:text-[#A9855C]"
              >
                Discover our institute
                <span className="text-base" aria-hidden="true">↗</span>
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -right-4 -top-4 h-full w-full border border-[#C9B99F] md:-right-6 md:-top-6" />

              <div className="relative aspect-[1.22/1] overflow-hidden bg-[#E6E2DA]">
                <Image
                  src="/images/washU.jpg"
                  alt="Campus environment"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.025]"
                />
              </div>

              <div className="absolute -bottom-7 left-0 bg-[#EAE5DB] px-7 py-5 md:-left-7 md:px-9">
                <p className="font-serif text-3xl text-[#34352F]">1990</p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#777064]">
                  Established heritage
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="bg-[#EDEBE5] px-6 py-24 md:px-12 md:py-28 lg:px-20">
          <div className="mx-auto max-w-[1280px]">

            <div className="max-w-[650px]">
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#A9855C]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#987750]">
                  The Intraglobal experience
                </p>
              </div>

              <h2 className="mt-7 font-serif text-[38px] leading-[1.2] tracking-[-0.03em] text-[#292A26] md:text-[49px]">
                Learning built around possibility.
              </h2>
            </div>

            <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
              {highlights.map((item) => (
                <article
                  key={item.number}
                  className="border-t border-[#C9C2B6] pt-7"
                >
                  <p className="font-serif text-[30px] text-[#A9855C]">
                    {item.number}
                  </p>

                  <h3 className="mt-7 font-serif text-[25px] text-[#30312D]">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-[330px] text-[13px] leading-[1.9] text-[#70716B]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ACADEMIC SCHOOLS */}
        <section className="bg-[#F7F6F2] px-6 py-24 md:px-12 md:py-32 lg:px-20">
          <div className="mx-auto grid max-w-[1280px] gap-16 md:grid-cols-2 md:items-center lg:gap-24">

            <div className="relative order-2 aspect-[1.15/1] overflow-hidden bg-[#E6E2DA] md:order-1">
              <Image
                src="/images/campus.jpg"
                alt="Intraglobal campus environment"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="order-1 md:order-2">
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#A9855C]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#987750]">
                  Explore your future
                </p>
              </div>

              <h2 className="mt-7 font-serif text-[39px] leading-[1.17] tracking-[-0.03em] text-[#292A26] md:text-[49px]">
                A range of disciplines.
                <br />
                A place to begin.
              </h2>

              <p className="mt-7 max-w-[480px] text-[14px] leading-[2] text-[#6D6E68]">
                From business and information technology to engineering,
                communication, tourism and vocational studies, explore the
                academic schools represented at Intraglobal.
              </p>

              <Link
                href="/academic-schools"
                className="mt-9 inline-flex min-h-[54px] items-center bg-[#343630] px-8 text-[10px] font-semibold uppercase tracking-[0.17em] text-white transition-colors duration-300 hover:bg-[#987750]"
              >
                View academic schools
                <span className="ml-5 text-base" aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ADMISSIONS */}
        <section className="relative overflow-hidden bg-[#292B27] px-6 py-24 text-white md:px-12 md:py-28 lg:px-20">
          <div className="pointer-events-none absolute -right-24 -top-40 h-[420px] w-[420px] rounded-full border border-white/[0.07]" />
          <div className="pointer-events-none absolute -right-12 -top-28 h-[320px] w-[320px] rounded-full border border-white/[0.07]" />

          <div className="relative mx-auto flex max-w-[1280px] flex-col gap-10 md:flex-row md:items-center md:justify-between">
            <div className="max-w-[690px]">
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#C4A779]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D1B78D]">
                  Begin your journey
                </p>
              </div>

              <h2 className="mt-7 font-serif text-[38px] leading-[1.2] tracking-[-0.03em] md:text-[50px]">
                Your future deserves a strong beginning.
              </h2>

              <p className="mt-6 max-w-[520px] text-[14px] leading-[1.9] text-white/65">
                Contact the institute to discuss programmes and admissions.
                Take the first step towards your educational goals.
              </p>
            </div>

            <Link
              href="/admissions"
              className="inline-flex min-h-[56px] w-fit shrink-0 items-center border border-[#C4A779] px-8 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#E0C9A5] transition-colors duration-300 hover:bg-[#C4A779] hover:text-[#292B27]"
            >
              Admissions information
              <span className="ml-5 text-base" aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
