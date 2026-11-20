
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const steps = [
  {
    number: "01",
    title: "Explore your options",
    text: "Review the academic schools and identify the programme that best matches your interests and goals.",
  },
  {
    number: "02",
    title: "Confirm the requirements",
    text: "Contact the admissions office to confirm current entry requirements, fees, course duration and intake dates.",
  },
  {
    number: "03",
    title: "Prepare your documents",
    text: "Ask the admissions team which academic documents, identification and supporting materials are required.",
  },
  {
    number: "04",
    title: "Submit your enquiry",
    text: "Send your details to the institute and request guidance on the next steps for enrolment.",
  },
];

export const metadata = {
  title: "Admissions | Intraglobal Training Institute",
  description:
    "Find out how to enquire about programmes and admissions at Intraglobal Training Institute.",
};

export default function AdmissionsPage() {
  return (
    <>
      <SiteHeader transparent />

      <main className="bg-[#F4F1EB] text-[#292821]">

        {/* ADMISSIONS HERO */}
        <section className="relative isolate min-h-[540px] overflow-hidden bg-[#39362F] text-white md:min-h-[620px]">

          {/* Background photograph */}
          <div
            className="absolute inset-0 -z-20 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/images/admissions-background.jpg')",
            }}
          />

          {/* Left fade */}
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "linear-gradient(to right, rgba(28,26,22,0.82) 0%, rgba(28,26,22,0.62) 32%, rgba(28,26,22,0.20) 68%, rgba(28,26,22,0.05) 100%)",
            }}
          />

          {/* Bottom fade */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(244,241,235,0.55) 55%, #F4F1EB 100%)",
            }}
          />

          <div className="relative mx-auto flex min-h-[540px] max-w-7xl flex-col justify-center px-6 pb-36 pt-40 md:min-h-[620px] md:px-10">

            <p className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#E0C69E]">
              <span className="h-px w-10 bg-[#E0C69E]" />
              Admissions
            </p>

            <h1 className="mt-8 max-w-4xl font-serif text-5xl font-normal leading-[1.12] tracking-tight text-white md:text-7xl">
              Your next chapter begins with a conversation.
            </h1>

            <p className="mt-8 max-w-2xl text-sm leading-8 text-white/90 md:text-base">
              Take the first step towards your education and professional
              goals. Our admissions team can help you understand the
              available study options and the enrolment process.
            </p>

            <Link
              href="/contact"
              className="mt-9 inline-flex min-h-[54px] w-fit items-center border border-[#D4B98D] px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-[#D4B98D] hover:text-[#292821]"
            >
              Enquire about admission
              <span className="ml-5" aria-hidden="true">↗</span>
            </Link>

          </div>
        </section>

        {/* ADMISSIONS PROCESS */}
        <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">

          <p className="text-xs font-semibold uppercase tracking-[0.23em] text-[#A58B68]">
            The process
          </p>

          <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="max-w-2xl font-serif text-4xl font-normal leading-tight text-[#292821] md:text-5xl">
              Four steps towards getting started.
            </h2>

            <p className="max-w-sm text-sm leading-7 text-[#706B62]">
              A straightforward starting point for understanding your
              options and preparing for enrolment.
            </p>
          </div>

          <div className="mt-14 grid gap-x-12 gap-y-12 md:grid-cols-2">

            {steps.map((step) => (
              <article
                key={step.number}
                className="grid grid-cols-[58px_1fr] gap-5 border-t border-[#DCD5C9] pt-7"
              >
                <span className="font-serif text-3xl text-[#A58B68]">
                  {step.number}
                </span>

                <div>
                  <h3 className="font-serif text-2xl font-normal text-[#292821]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#706B62]">
                    {step.text}
                  </p>
                </div>
              </article>
            ))}

          </div>
        </section>

        {/* INFORMATION BEFORE APPLYING */}
        <section className="border-y border-[#E2DCD1] bg-[#EAE5DC]">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:gap-20 md:px-10 md:py-20">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.23em] text-[#A58B68]">
                Before you apply
              </p>

              <h2 className="mt-5 max-w-lg font-serif text-4xl font-normal leading-tight text-[#292821] md:text-5xl">
                Get the details that matter.
              </h2>
            </div>

            <div className="space-y-5 text-sm leading-8 text-[#706B62]">
              <p>
                Entry qualifications and other admission requirements may
                differ between programmes. Confirm the requirements for
                your chosen course before making an application.
              </p>

              <p>
                Ask the admissions office about current fees, payment
                arrangements, programme duration, intake dates,
                examination arrangements and any practical training
                requirements.
              </p>

              <p>
                You should also confirm the relevant examining body and
                programme approval details for the specific course you
                intend to study.
              </p>
            </div>

          </div>
        </section>

        {/* ADMISSIONS CALL TO ACTION */}
        <section className="bg-[#292821] text-[#F4F1EB]">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-14 md:flex-row md:items-center md:justify-between md:px-10 md:py-16">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B49A74]">
                Admissions office
              </p>

              <h2 className="mt-4 font-serif text-3xl font-normal leading-tight md:text-4xl">
                Have a question about joining us?
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#C8C3B9]">
                Call +254 722 416 338 or send an enquiry online.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex min-h-[52px] w-fit shrink-0 items-center border border-[#B49A74] px-7 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#F4F1EB] transition-colors duration-300 hover:bg-[#B49A74] hover:text-[#292821]"
            >
              Contact admissions
              <span className="ml-5" aria-hidden="true">↗</span>
            </Link>

          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  );
}
