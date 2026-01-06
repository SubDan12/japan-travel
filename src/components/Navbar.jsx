import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const links = [
    { label: "About", href: "#about" },
    { label: "Included", href: "#included" },
    { label: "Contacts", href: "#contacts" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="mx-auto max-w-300 px-4 pt-4 sm:px-6 sm:pt-6">
        <div className="flex items-center justify-between rounded-full border border-white/15 bg-white/10 px-4 py-3 sm:px-6 backdrop-blur-md">
          {/* Left */}
          <div className="flex items-center gap-2 text-[11px] tracking-[0.22em] text-white/85">
            <span className="grid h-7 w-7 place-items-center rounded-full border border-white/20 bg-white/5">
              🌐
            </span>
            <span className="uppercase">Japan Tours</span>
          </div>

          {/* Center (desktop only) */}
          <nav className="hidden items-center gap-8 text-[12px] text-white/70 md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white/90">
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-2">
            {/* Book (desktop) */}
            <a
              href="#contacts"
              className="hidden rounded-full border border-white/20 bg-white/10 px-5 py-2 text-[12px] text-white/85 hover:bg-white/15 md:inline-flex"
            >
              Book
            </a>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[12px] text-white/85 hover:bg-white/15 md:hidden"
              aria-label="Open menu"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 bg-black/55 transition-opacity duration-200 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`fixed right-0 top-0 z-50 h-dvh w-[86%] max-w-sm border-l border-white/10 bg-black/90 backdrop-blur-xl transition-transform duration-200 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between px-5 py-5">
          <div className="text-[11px] tracking-[0.22em] text-white/80 uppercase">
            Menu
          </div>
          <button
            onClick={() => setOpen(false)}
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[12px] text-white/85 hover:bg-white/10"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="px-5 pt-2">
          <ul className="space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/85 hover:bg-white/10"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contacts"
            onClick={() => setOpen(false)}
            className="mt-5 block rounded-2xl bg-white px-4 py-3 text-center text-sm font-semibold text-black"
          >
            Book a Tour
          </a>
        </nav>
      </aside>
    </header>
  );
}
