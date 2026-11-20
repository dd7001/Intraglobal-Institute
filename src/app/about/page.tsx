import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export const metadata = {
  title: "About Us | Intraglobal Training Institute",
  description:
    "Discover Intraglobal Training Institute, its educational purpose and its history dating back to 1990.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />

      <main className="bg-[#f7f6f2] text-[#18263a]">
        <section className="relative overflow-hidden bg-[#14233b] text-white">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full border border-[#b99b64]" />
            <div className="absolute -right-5 -top-16 h-64 w-64 rounded-full border border-[#b99b64]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c9ad79]">
              The Institute
            </p>
            <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.12] md:text-7xl">
              An institution shaped by the value of education.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
              A commitment to practical learning, professional development
              and the opportunities that knowledge can create.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#dedbd2]">
              <Image
                src="/images/campus.jpg"
                alt="Campus environment at Intraglobal Training Institute"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-7 right-0 bg-[#762d3b] px-8 py-7 text-white shadow-xl md:-right-7">
              <p className="font-serif text-5xl">1990</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-white/75">
                Year established
              </p>
            </div>

            <div className="absolute -left-3 top-8 h-28 w-1 bg-[#b99b64]" />
          </div>

          <div className="pt-8 lg:pt-0">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#967b4d]">
              Our story
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
              Rooted in experience. Focused on what comes next.
            </h2>

            <div className="mt-8 space-y-5 text-[15px] leading-8 text-[#5c6570]">
              <p>
                Intraglobal Training Institute traces its establishment to
                1990. Since its founding, the institute has presented itself
                as a centre for practical, career-focused and professional
                training.
              </p>
              <p>
                Its educational offering brings together different areas of
                study, including business, information technology, technical
                studies, communication, tourism and vocational training.
              </p>
              <p>
                The institute's stated purpose is to equip learners with
                practical skills, professional knowledge and qualifications
                that can support their ambitions in the world of work.
              </p>
            </div>

            <div className="mt-9 border-l-2 border-[#b99b64] pl-5">
              <p className="font-serif text-xl italic text-[#762d3b]">
                “Empowering Professionals Since 1990.”
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.13em] text-[#7a8188]">
                The institute's published founding statement
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-[#e5e1d8] bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#967b4d]">
                  Our educational approach
                </p>
                <h2 className="mt-5 font-serif text-4xl leading-tight">
                  Learning should lead somewhere.
                </h2>
              </div>

              <div className="grid gap-9 sm:grid-cols-2">
                <div>
                  <span className="text-sm text-[#a68a58]">01</span>
                  <h3 className="mt-3 font-serif text-2xl">Practical learning</h3>
                  <p className="mt-3 text-sm leading-7 text-[#69717b]">
                    Education that connects academic understanding with
                    practical knowledge and the demands of professional life.
                  </p>
                </div>

                <div>
                  <span className="text-sm text-[#a68a58]">02</span>
                  <h3 className="mt-3 font-serif text-2xl">Professional growth</h3>
                  <p className="mt-3 text-sm leading-7 text-[#69717b]">
                    Opportunities for learners to develop their abilities,
                    strengthen their knowledge and pursue career goals.
                  </p>
                </div>

                <div>
                  <span className="text-sm text-[#a68a58]">03</span>
                  <h3 className="mt-3 font-serif text-2xl">Diverse disciplines</h3>
                  <p className="mt-3 text-sm leading-7 text-[#69717b]">
                    A range of academic and vocational fields brought together
                    within one learning institution.
                  </p>
                </div>

                <div>
                  <span className="text-sm text-[#a68a58]">04</span>
                  <h3 className="mt-3 font-serif text-2xl">Future direction</h3>
                  <p className="mt-3 text-sm leading-7 text-[#69717b]">
                    Supporting learners as they prepare for changing
                    workplaces and new professional opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#967b4d]">
                Institutional registration
              </p>
              <h2 className="mt-5 font-serif text-4xl">
                A recognised TVET institution.
              </h2>
              <p className="mt-5 text-sm leading-8 text-[#69717b]">
                The Technical and Vocational Education and Training Authority
                (TVETA) lists Intraglobal Training Institute as a private
                Technical and Vocational College in Nairobi.
              </p>
            </div>

            <div className="border border-[#e1ddd4] bg-white p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.2em] text-[#967b4d]">
                TVETA registration number
              </p>
              <p className="mt-4 break-words font-serif text-2xl text-[#14233b] md:text-3xl">
                TVETA/PRIVATE/TVC/0033/2022
              </p>
              <div className="mt-7 border-t border-[#e8e4dc] pt-5">
                <p className="text-sm text-[#69717b]">
                  Listed status: <strong className="text-[#253b34]">Registered and Licensed</strong>
                </p>
                <a
                  href="https://www.tveta.go.ke/course/?course_id=KNC233"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-[#762d3b] underline underline-offset-4"
                >
                  View TVETA listing
                </a>
              </div>
            </div>
          </div>
          <p className="mt-8 max-w-3xl text-xs leading-6 text-[#8a9096]">
            Institutional registration is not a substitute for checking the
            approval and examining body of an individual course. Prospective
            students should confirm programme-specific details with the
            institute before enrolling.
          </p>
        </section>

        <section className="bg-[#762d3b] text-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-white/65">
                Take the next step
              </p>
              <h2 className="mt-4 max-w-2xl font-serif text-3xl md:text-4xl">
                Discover where learning at Intraglobal could take you.
              </h2>
            </div>
            <Link
              href="/academic-schools"
              className="inline-flex w-fit border border-white/60 px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] transition-colors hover:bg-white hover:text-[#762d3b]"
            >
              Explore academic schools
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}