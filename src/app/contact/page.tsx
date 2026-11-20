
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export const metadata = {
  title: "Contact Us | Intraglobal Training Institute",
  description:
    "Contact Intraglobal Training Institute in Nairobi for admissions and programme enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader transparent />

      <main className="bg-[#F4F1EB] text-[#292821]">

        {/* CONTACT HERO */}
        <section className="relative isolate min-h-[500px] overflow-hidden bg-[#403B32] text-white md:min-h-[570px]">

          <div
            className="absolute inset-0 -z-20 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/contact-background.png')",
            }}
          />

          {/* Image overlay */}
          <div className="absolute inset-0 -z-10 bg-black/40" />

          <div className="relative mx-auto flex min-h-[500px] max-w-7xl flex-col justify-center px-6 py-24 md:min-h-[570px] md:px-10">

            <p className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#E0C69E]">
              <span className="h-px w-10 bg-[#E0C69E]" />
              Get in touch
            </p>

            <h1 className="mt-8 max-w-4xl font-serif text-5xl font-normal leading-[1.12] tracking-tight text-white md:text-7xl">
              Every great journey starts with a question.
            </h1>

            <p className="mt-8 max-w-2xl text-sm leading-8 text-white/90 md:text-base">
              Whether you are exploring a programme, seeking admission
              information or making an institutional enquiry, we welcome
              you to contact us.
            </p>

          </div>

          {/* Fade into ivory */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
            style={{
              background:
                "linear-gradient(to bottom, transparent, #F4F1EB)",
            }}
          />
        </section>

        {/* CONTACT INFORMATION */}
        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:gap-20 md:px-10 md:py-24">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.23em] text-[#A58B68]">
              Contact information
            </p>

            <h2 className="mt-5 font-serif text-4xl font-normal leading-tight text-[#292821] md:text-5xl">
              Speak with our team.
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-8 text-[#706B62]">
              Contact the institute directly for the latest information
              on programmes, entry requirements, fees and admissions.
              Our team will be glad to direct your enquiry.
            </p>

            <div className="mt-10 space-y-7">

              {/* TELEPHONE */}
              <div className="border-t border-[#DCD5C9] pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A58B68]">
                  Telephone
                </p>

                <a
                  href="tel:+254722416338"
                  className="mt-3 block font-serif text-2xl text-[#292821] transition-colors hover:text-[#8B7455]"
                >
                  +254 722 416 338
                </a>
              </div>

              {/* EMAIL */}
              <div className="border-t border-[#DCD5C9] pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A58B68]">
                  Email
                </p>

                <a
                  href="mailto:info@intraglobaltraininginstitute.org"
                  className="mt-3 block break-words text-base text-[#292821] transition-colors hover:text-[#8B7455]"
                >
                  info@intraglobaltraininginstitute.org
                </a>
              </div>

              {/* LOCATION */}
              <div className="border-t border-[#DCD5C9] pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A58B68]">
                  Location
                </p>

                <p className="mt-3 font-serif text-2xl text-[#292821]">
                  Nairobi, Kenya
                </p>

                <p className="mt-2 max-w-md text-sm leading-7 text-[#706B62]">
                  Nature House, 2nd Floor, Along Tom Mboya Street,
                  Opposite Agro House.
                </p>
              </div>

            </div>
          </div>

          {/* ENQUIRY PANEL */}
          <div className="self-start border border-[#E5DED2] bg-[#FBFAF7] p-7 md:p-11">

            <p className="text-xs font-semibold uppercase tracking-[0.23em] text-[#A58B68]">
              How can we help?
            </p>

            <h2 className="mt-5 font-serif text-3xl font-normal leading-snug text-[#292821] md:text-4xl">
              Tell us what you would like to know.
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#706B62]">
              For programme and admissions enquiries, contact the office
              directly by telephone or email. Include the programme you
              are interested in so the team can direct your enquiry
              appropriately.
            </p>

            <a
              href="mailto:info@intraglobaltraininginstitute.org?subject=Programme%20and%20Admissions%20Enquiry"
              className="mt-9 inline-flex min-h-[54px] w-full items-center justify-center bg-[#292821] px-6 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:bg-[#514B3F]"
            >
              Send an email enquiry
              <span className="ml-4" aria-hidden="true">↗</span>
            </a>

            <a
              href="tel:+254722416338"
              className="mt-3 inline-flex min-h-[54px] w-full items-center justify-center border border-[#CFC5B6] px-6 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#292821] transition-colors duration-300 hover:border-[#292821] hover:bg-[#F0ECE4]"
            >
              Call the institute
            </a>

            <p className="mt-6 text-center text-xs leading-6 text-[#898276]">
              We look forward to hearing from you.
            </p>
          </div>
        </section>

        {/* ACADEMIC SCHOOLS CTA */}
        <section className="border-t border-[#E2DCD1] bg-[#EAE5DC]">
          <div className="mx-auto flex max-w-7xl flex-col gap-7 px-6 py-14 md:flex-row md:items-center md:justify-between md:px-10">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A58B68]">
                Explore before you enquire
              </p>

              <h2 className="mt-4 font-serif text-3xl font-normal text-[#292821] md:text-4xl">
                Find your area of interest.
              </h2>
            </div>

            <Link
              href="/academic-schools"
              className="inline-flex min-h-[52px] w-fit items-center border border-[#82745F] px-7 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#292821] transition-colors duration-300 hover:bg-[#292821] hover:text-white"
            >
              View academic schools
              <span className="ml-4" aria-hidden="true">↗</span>
            </Link>

          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  );
}
