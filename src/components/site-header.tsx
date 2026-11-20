
import Link from "next/link";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Academic Schools", href: "/academic-schools" },
  { label: "Admissions", href: "/admissions" },
  { label: "Reach Us", href: "/contact" },
];

type SiteHeaderProps = {
  transparent?: boolean;
};

export default function SiteHeader({
  transparent = false,
}: SiteHeaderProps) {
  return (
    <header
      className={`z-50 w-full text-white ${
        transparent
          ? "absolute inset-x-0 top-0 border-b border-white/15 bg-transparent"
          : "relative border-b border-white/10 bg-[#14233b]"
      }`}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-5 md:flex-row md:px-10">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center border border-[#b99b64] font-serif text-lg text-[#d6bd8b]">
            IG
          </span>

          <span className="leading-tight">
            <span className="block text-lg font-semibold tracking-[0.12em]">
              INTRAGLOBAL
            </span>
            <span className="block text-[10px] tracking-[0.25em] text-[#d6bd8b]">
              TRAINING INSTITUTE
            </span>
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors duration-200 hover:text-[#d6bd8b]"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/admissions"
            className="border border-[#b99b64] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#e5d2ad] transition-colors hover:bg-[#b99b64] hover:text-[#14233b]"
          >
            Apply / Enquire
          </Link>
        </nav>
      </div>
    </header>
  );
}
