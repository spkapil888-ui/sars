"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "What We Do", href: "/services/" },
  { label: "About Us", href: "/about/" },
  { label: "Work", href: "/work/" },
  { label: "Hire Talent", href: "/hire-talent/" },
  { label: "BPO Services", href: "/bpo-services/" },
  { label: "Insights", href: "/insights/" },
  { label: "Contact", href: "/contact/" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSolid, setIsSolid] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isLight, setIsLight] = useState(true);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("menu-open");
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      setIsSolid(y > 18);
      setIsHidden(y > lastY && y > 220 && !menuOpen);
      lastY = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-nav-theme]"));
    if (!sections.length || !("IntersectionObserver" in window)) {
      setIsLight(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const active = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (active) setIsLight(active.target.getAttribute("data-nav-theme") === "light");
      },
      { rootMargin: "-10% 0px -78% 0px", threshold: [0, 0.2, 0.6, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  const navClassName = [
    "sars-nav",
    isSolid ? "is-solid" : "",
    isHidden ? "is-hidden" : "",
    isLight ? "is-light" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <header className={navClassName} data-nav>
        <div className="sars-nav__inner">
          <Link className="sars-brand" href="/" aria-label="SARS Global home">
            <Image
              src="/assets/img/sars-new-logo.png"
              alt="SARS Global logo"
              width={68}
              height={68}
              priority
            />
          </Link>

          <nav className="sars-nav__links" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(pathname, item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link className="sars-button sars-nav__cta" href="/contact/" data-magnetic>
            Start a Project
          </Link>

          <button
            className="sars-menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="sars-menu"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        className={`sars-menu${menuOpen ? " is-open" : ""}`}
        id="sars-menu"
        aria-hidden={!menuOpen}
        onClick={(event) => {
          if ((event.target as Element).closest("a")) setMenuOpen(false);
        }}
      >
        <div className="sars-menu__inner">
          <nav className="sars-menu__links" aria-label="Full screen navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(pathname, item.href) ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <aside className="sars-menu__aside">
            <p>
              <strong>Work with us</strong>
              <a href="mailto:business@sarsglobal.io">business@sarsglobal.io</a>
            </p>
            <p>
              <strong>Capabilities</strong>
              Marketing, film production, product design, software, AI automation,
              BPO services and consulting.
            </p>
          </aside>
        </div>
      </div>
    </>
  );
}
