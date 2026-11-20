
import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About the Institute", href: "/about" },
  { label: "Academic Schools", href: "/academic-schools" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-[#292821] text-[#F4F1EB]">
      <div className="mx-auto grid max-w-7xl gap-7 px-6 py-7 sm:grid-cols-2 lg:grid-cols-4 md:px-10">

        {/* INSTITUTE */}
        <div>
          <Link
            href="/"
            className="text-lg font-semibold tracking-[0.12em] transition-colors hover:text-[#C8AD85]"
          >
            INTRAGLOBAL
          </Link>

          <p className="mt-1 text-[10px] tracking-[0.2em] text-[#B49A74]">
            TRAINING INSTITUTE
          </p>

          <p className="mt-3 max-w-sm text-sm leading-6 text-[#C8C3B9]">
            Empowering professionals through practical skills, professional
            knowledge and education.
          </p>
        </div>

        {/* EXPLORE */}
        <div>
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.17em] text-[#B49A74]">
            Explore
          </h2>

          <ul className="space-y-2 text-sm text-[#C8C3B9]">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.17em] text-[#B49A74]">
            Contact
          </h2>

          <div className="space-y-2 text-sm leading-6 text-[#C8C3B9]">
            <p>Nairobi, Kenya</p>

            <a href="tel:+254722416338" className="block hover:text-white">
              +254 722 416 338
            </a>

            <a
              href="mailto:info@intraglobaltraininginstitute.org"
              className="block break-words hover:text-white"
            >
              info@intraglobaltraininginstitute.org
            </a>
          </div>
        </div>

        {/* OPERATIONAL HOURS */}
        <div>
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.17em] text-[#B49A74]">
            Operational Hours
          </h2>

          <div className="space-y-2 text-sm leading-6 text-[#C8C3B9]">
            <p>Monday – Saturday</p>
            <p className="text-[#F4F1EB]">
              7:00 AM – 8:00 PM
            </p>
            <p className="text-xs text-[#A9A398]">
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-3 md:px-10">
          <p className="text-xs text-[#A9A398]">
            © 2026 Intraglobal Training Institute. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
