"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type ComponentType } from "react";
import type { IndustryData } from "@/content/industriesData";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StructuredData } from "@/components/ui/StructuredData";
import {
  ArrowRight,
  Bot,
  Briefcase,
  Building2,
  Car,
  Check,
  Cloud,
  Code2,
  GraduationCap,
  Headphones,
  HeartPulse,
  Megaphone,
  Minus,
  Plus,
  Sprout,
  Target,
} from "lucide-react";

interface IndustryPageTemplateProps {
  data: IndustryData;
}

type IconType = ComponentType<{ className?: string }>;

const INDUSTRY_ICON_MAP: Record<string, IconType> = {
  "Automotive & Commercial Vehicles": Car,
  "Healthcare & Wellness": HeartPulse,
  "Real Estate & Construction": Building2,
  "B2B SaaS & Cloud Platforms": Cloud,
  "B2B Lead Generation & Pipeline": Target,
  "Education & EdTech": GraduationCap,
  "Agritech & Warehousing": Sprout,
};

const INDUSTRY_ROUTE_MAP: Record<string, string> = {
  "Automotive & Commercial Vehicles": "/industries/automotive",
  "Healthcare & Wellness": "/industries/healthcare",
  "Real Estate & Construction": "/industries/real-estate",
  "B2B SaaS & Cloud Platforms": "/industries/b2b-saas",
  "B2B Lead Generation & Pipeline": "/industries/b2b-lead-generation",
  "Education & EdTech": "/industries/education",
  "Agritech & Warehousing": "/industries/agritech",
};

const SERVICE_PRACTICE_ICONS: Record<string, IconType> = {
  "Digital Marketing": Megaphone,
  "AI & Automation": Bot,
  "Software Development": Code2,
  "BPO Services": Headphones,
};

const CASE_STUDY_VISUALS: Record<string, string> = {
  Cavalo: "/wp-content/uploads/2026/08/8.png",
  "Cloudnine KnowMoms": "/wp-content/uploads/2026/08/cloudnine.png",
  Cloudnine: "/wp-content/uploads/2026/08/cloudnine.png",
  BenchKart: "/wp-content/uploads/2026/08/benchkart.png",
  StarAgri: "/wp-content/uploads/2026/08/Staragri.png",
  "Sri Khelari Builders": "/wp-content/uploads/2026/08/KBC.png",
  "Light Financial Education": "/wp-content/uploads/2026/08/LFE.png",
  Swaraj: "/wp-content/uploads/2026/06/18.png",
  "Euler Motors": "/wp-content/uploads/2026/06/Euler-Motors-1.png",
};

const SOLUTION_IMAGE_MAP: Record<string, string> = {
  // Hub solutions
  "Commercial Automotive & Mobility": "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80",
  "Healthcare & Patient Wellness": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
  "Real Estate & Construction": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  "B2B SaaS & Tech Marketplaces": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  "Education & EdTech": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
  "Agritech & Warehousing Supply Chain": "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=80",
  // Automotive specific solutions
  "Fleet Buyer Acquisition & Search Intent": "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80",
  "Interactive Web Showcases & Spec Portals": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
  "Automated Dealer Lead Routing & Speed-to-Lead": "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
  "Dedicated Automotive Inbound BPO": "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80",
};

const FALLBACK_SOLUTION_IMAGES: string[] = [
  "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=80",
];

const SOLUTION_ICON_MAP: IconType[] = [
  Car,
  HeartPulse,
  Building2,
  Cloud,
  GraduationCap,
  Sprout,
];

const ALL_INDUSTRIES_CARDS = [
  { name: "Automotive & Commercial Vehicles", route: "/industries/automotive", icon: Car },
  { name: "Healthcare & Wellness", route: "/industries/healthcare", icon: HeartPulse },
  { name: "Real Estate & Construction", route: "/industries/real-estate", icon: Building2 },
  { name: "B2B SaaS & Cloud Platforms", route: "/industries/b2b-saas", icon: Cloud },
  { name: "B2B Lead Generation & Pipeline", route: "/industries/b2b-lead-generation", icon: Target },
  { name: "Education & EdTech", route: "/industries/education", icon: GraduationCap },
  { name: "Agritech & Warehousing", route: "/industries/agritech", icon: Sprout },
];

const numberLabel = (index: number) => String(index + 1).padStart(2, "0");

export function IndustryPageTemplate({ data }: IndustryPageTemplateProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [openDeliverables, setOpenDeliverables] = useState<number | null>(null);

  const isHub = data.slug === "industries";

  const breadcrumbs = isHub
    ? [{ label: "Industries" }]
    : [
        { label: "Industries", href: "/industries" },
        { label: data.name },
      ];

  const industrySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: data.title,
    description: data.metaDescription,
    publisher: {
      "@type": "Organization",
      name: "SARS Global",
      url: "https://sarsglobal.io",
      logo: "https://sarsglobal.io/assets/img/sars-new-logo.png",
    },
  };

  const faqSchema = data.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: data.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  // Split or style the hero headline to highlight the key industry punchline in orange
  const renderHeroHeadline = (headline: string) => {
    if (headline.includes("Industry Dynamics")) {
      const parts = headline.split("Industry Dynamics");
      return (
        <>
          {parts[0]}
          <span className="text-[#f57e20]">Industry Dynamics</span>
          {parts[1] || ""}
        </>
      );
    }
    const words = headline.split(" ");
    if (words.length > 3) {
      const main = words.slice(0, -2).join(" ");
      const highlight = words.slice(-2).join(" ");
      return (
        <>
          {main} <span className="text-[#f57e20]">{highlight}</span>
        </>
      );
    }
    return headline;
  };

  return (
    <>
      <StructuredData items={[industrySchema, ...(faqSchema ? [faqSchema] : [])]} />

      <main
        id="main"
        className="sars-page-main min-h-screen overflow-hidden bg-[#fffdfa] text-[#141414]"
      >
        {/* ============================================================
            01 — HERO / INDUSTRIES OVERVIEW
        ============================================================ */}
        <section
          id="hero-overview"
          data-nav-theme="light"
          className="relative border-b border-black/10 bg-[#fffdfa] pt-28 pb-16 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24"
        >
          <div
            aria-hidden="true"
            className="sars-grid-bg--light pointer-events-none absolute inset-0 opacity-[0.24]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 top-10 h-[380px] w-[380px] rounded-full bg-[#f57e20]/10 blur-3xl"
          />

          <div className="sars-container relative z-10 px-5 sm:px-8 lg:px-12">
            <Breadcrumbs items={breadcrumbs} className="mb-8 md:mb-10" />

            <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Left Column */}
              <div className="lg:col-span-7 xl:col-span-7">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-0.5 w-7 bg-[#f57e20]" />
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#ea650d]">
                    {isHub ? "INDUSTRIES WE SERVE" : data.eyebrow}
                  </span>
                </div>

                <h1 className="max-w-[780px] font-['Raleway',sans-serif] text-[clamp(2.3rem,4.8vw,4.5rem)] font-extrabold leading-[1.03] tracking-[-0.035em] text-[#111111]">
                  {renderHeroHeadline(data.heroHeadline)}
                </h1>

                <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[#554f47]">
                  {data.heroSubheadline}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    id="hero-cta-discuss"
                    href="/contact/"
                    className="group inline-flex min-h-[50px] items-center justify-center gap-3 rounded-full bg-[#181818] px-7 py-3.5 text-sm font-extrabold text-white transition-all duration-300 hover:bg-[#f57e20] hover:text-black shadow-sm"
                  >
                    <span>Discuss Vertical Strategy</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  {!isHub && (
                    <Link
                      id="hero-cta-all-industries"
                      href="/industries"
                      className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-black/15 bg-white px-6 py-3.5 text-sm font-extrabold text-[#111111] transition hover:border-[#111111]"
                    >
                      All Industries
                    </Link>
                  )}
                </div>

                {/* Stats Row with Cursive Accent & Arrow */}
                <div className="mt-10 sm:mt-12 pt-7 border-t border-black/10 flex flex-wrap items-center justify-between gap-6">
                  <div className="flex items-center gap-6 sm:gap-9">
                    <div>
                      <div className="font-['Raleway',sans-serif] text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
                        80+
                      </div>
                      <div className="text-[11px] font-semibold text-[#787168] mt-0.5">
                        Clients Served
                      </div>
                    </div>

                    <div className="h-8 w-px bg-black/10" />

                    <div>
                      <div className="font-['Raleway',sans-serif] text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
                        35+
                      </div>
                      <div className="text-[11px] font-semibold text-[#787168] mt-0.5">
                        Google Review Signals
                      </div>
                    </div>

                    <div className="h-8 w-px bg-black/10 hidden sm:block" />

                    <div className="hidden sm:block">
                      <div className="font-['Raleway',sans-serif] text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
                        15+
                      </div>
                      <div className="text-[11px] font-semibold text-[#787168] mt-0.5">
                        Team Members
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:flex items-center gap-2">
                    <div className="font-serif italic text-sm text-[#f57e20] font-semibold leading-tight text-right">
                      Different Industries,<br />Same Growth Partner.
                    </div>
                    <svg
                      className="w-8 h-7 text-[#f57e20] shrink-0 transform -rotate-12"
                      viewBox="0 0 40 30"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 24 C14 24, 26 20, 34 8" />
                      <path d="M26 6 L35 7 L32 16" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Right Column: 2-Column Grid of 7 Cards */}
              <aside className="lg:col-span-5 xl:col-span-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                  {(isHub
                    ? ALL_INDUSTRIES_CARDS
                    : data.badges?.map((badge, idx) => ({
                        name: badge,
                        route: INDUSTRY_ROUTE_MAP[badge] || `/industries/${data.slug}`,
                        icon: INDUSTRY_ICON_MAP[badge] || Briefcase,
                      })) || ALL_INDUSTRIES_CARDS
                  ).map((item, idx, arr) => {
                    const isLastOdd = idx === arr.length - 1 && arr.length % 2 === 1;
                    const Icon = item.icon;
                    const isCurrent = !isHub && (data.name.includes(item.name) || item.name.includes(data.name));

                    return (
                      <Link
                        key={`${item.name}-${idx}`}
                        href={item.route}
                        className={`group bg-white border rounded-2xl p-4 sm:p-4.5 flex items-center justify-between shadow-sm hover:shadow-md transition-all duration-200 ${
                          isLastOdd ? "sm:col-span-2" : ""
                        } ${
                          isCurrent
                            ? "border-[#f57e20] ring-2 ring-[#f57e20]/20 bg-[#fffbf7]"
                            : "border-[#eae5dd] hover:border-[#f57e20]"
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0 pr-2">
                          <div className="w-10 h-10 rounded-xl bg-[#fff7f0] text-[#ea650d] flex items-center justify-center shrink-0 group-hover:bg-[#f57e20] group-hover:text-black transition-colors duration-200">
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="text-xs sm:text-[13px] font-bold text-[#1a1714] group-hover:text-[#ea650d] transition-colors leading-snug line-clamp-2">
                            {item.name}
                          </span>
                        </div>

                        <div className="w-7 h-7 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:border-[#f57e20] group-hover:bg-[#f57e20] group-hover:text-black shrink-0 transition-all duration-200">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ============================================================
            02 — SECTOR FRICTION POINTS
        ============================================================ */}
        {data.challenges && (
          <section
            id="sector-friction-points"
            data-nav-theme="light"
            className="relative border-b border-black/10 bg-[#faf8f5] py-16 sm:py-24 lg:py-28"
          >
            <div className="sars-container px-5 sm:px-8 lg:px-12">
              <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
                {/* Left Column */}
                <div className="lg:col-span-5 lg:sticky lg:top-28">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-0.5 w-7 bg-[#f57e20]" />
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#ea650d]">
                      SECTOR FRICTION POINTS
                    </span>
                  </div>

                  <h2 className="font-['Raleway',sans-serif] text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.08] tracking-[-0.035em] text-[#111111]">
                    {data.challenges.title}
                  </h2>

                  <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#625c55]">
                    {data.challenges.description}
                  </p>
                </div>

                {/* Right Column: 2x2 Rounded Cards */}
                <div className="lg:col-span-7">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {data.challenges.points.map((point, idx) => (
                      <article
                        key={`${point}-${idx}`}
                        className="group bg-white rounded-2xl p-6 sm:p-7 border border-[#ede7df] shadow-sm hover:shadow-md hover:border-[#f57e20] transition-all duration-200 flex flex-col justify-start"
                      >
                        <div className="font-['Raleway',sans-serif] text-3xl sm:text-4xl font-extrabold text-[#f57e20] mb-3.5 tracking-tight">
                          {numberLabel(idx)}
                        </div>

                        <p className="text-[#1c1917] font-semibold text-sm sm:text-base leading-relaxed">
                          {point}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ============================================================
            03 — TAILORED VERTICAL SOLUTIONS
        ============================================================ */}
        {data.solutions && data.solutions.length > 0 && (
          <section
            id="tailored-vertical-solutions"
            data-nav-theme="light"
            className="border-b border-black/10 bg-white py-16 sm:py-24 lg:py-28"
          >
            <div className="sars-container px-5 sm:px-8 lg:px-12">
              <div className="mb-12 md:mb-14">
                <div className="mb-3 flex items-center gap-3">
                  <span className="h-0.5 w-7 bg-[#f57e20]" />
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#ea650d]">
                    CUSTOM ENGINEERING &amp; GROWTH
                  </span>
                </div>
                <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                  <h2 className="font-['Raleway',sans-serif] text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-[-0.035em] text-[#111111]">
                    Tailored Vertical Solutions
                  </h2>
                  <p className="max-w-xl text-base sm:text-lg text-[#655e56]">
                    Purpose-built architectures and specialized growth playbooks designed for this sector.
                  </p>
                </div>
              </div>

              {/* 3 Columns Grid of 6 Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
                {data.solutions.map((solution, idx) => {
                  const Icon = SOLUTION_ICON_MAP[idx % SOLUTION_ICON_MAP.length] || Briefcase;
                  const solutionImg =
                    SOLUTION_IMAGE_MAP[solution.title] ||
                    FALLBACK_SOLUTION_IMAGES[idx % FALLBACK_SOLUTION_IMAGES.length];
                  const isDeliverablesOpen = openDeliverables === idx;

                  return (
                    <article
                      key={`${solution.title}-${idx}`}
                      className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
                    >
                      {/* Top Photo with Overlapping Icon Badge */}
                      <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-neutral-100 rounded-t-2xl">
                        <Image
                          src={solutionImg}
                          alt={solution.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                        
                        {/* Circular Orange Icon Badge */}
                        <div className="absolute -bottom-5 left-6 z-10 w-11 h-11 rounded-full bg-[#f57e20] text-white flex items-center justify-center shadow-md ring-4 ring-white">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-6 pt-8 bg-white rounded-b-2xl border-x border-b border-[#eae5dd] shadow-sm flex flex-col justify-between flex-1">
                        <div>
                          <div className="text-[10px] font-extrabold tracking-wider uppercase text-[#8a8073] mb-1.5">
                            SOLUTION {numberLabel(idx)}
                          </div>
                          <h3 className="text-lg sm:text-xl font-extrabold text-[#141414] leading-tight mb-2.5">
                            {solution.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#5d564e] leading-relaxed mb-3">
                            {solution.desc}
                          </p>

                          {/* Expandable Deliverables */}
                          {isDeliverablesOpen && (
                            <div className="mt-4 pt-4 border-t border-neutral-100 animate-in fade-in duration-200">
                              <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#ea650d] mb-2.5 flex items-center gap-1.5">
                                <Check className="h-3.5 w-3.5" />
                                <span>Key Deliverables</span>
                              </div>
                              <ul className="space-y-2">
                                {solution.deliverables.map((item, dIdx) => (
                                  <li
                                    key={`${item}-${dIdx}`}
                                    className="text-xs text-[#292622] font-medium flex items-start gap-2"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#f57e20] shrink-0 mt-1.5" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>

                        {/* Interactive Deliverables Toggle */}
                        <button
                          type="button"
                          onClick={() =>
                            setOpenDeliverables(isDeliverablesOpen ? null : idx)
                          }
                          className="text-xs sm:text-sm font-bold text-[#ea650d] flex items-center gap-1.5 hover:gap-2 transition-all mt-4 pt-2 cursor-pointer w-fit"
                          aria-expanded={isDeliverablesOpen}
                        >
                          <span>{isDeliverablesOpen ? "Hide Deliverables" : "Key Deliverables"}</span>
                          <ArrowRight
                            className={`h-3.5 w-3.5 transition-transform duration-200 ${
                              isDeliverablesOpen ? "rotate-90" : ""
                            }`}
                          />
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ============================================================
            04 — RELEVANT SERVICE PRACTICES
        ============================================================ */}
        {data.servicesProvided && data.servicesProvided.length > 0 && (
          <section
            id="relevant-service-practices"
            data-nav-theme="dark"
            className="relative overflow-hidden bg-[#111111] py-16 sm:py-24 lg:py-28 text-white"
          >
            <div
              aria-hidden="true"
              className="sars-grid-bg pointer-events-none absolute inset-0 opacity-[0.12]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-40 top-0 h-[440px] w-[440px] rounded-full bg-[#f57e20]/10 blur-3xl"
            />

            <div className="sars-container relative z-10 px-5 sm:px-8 lg:px-12">
              <div className="mb-12 md:mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <span className="h-0.5 w-7 bg-[#f57e20]" />
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#f57e20]">
                      INTEGRATED CAPABILITIES
                    </span>
                  </div>
                  <h2 className="font-['Raleway',sans-serif] text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-[-0.035em] text-white">
                    Relevant Service Practices
                  </h2>
                  <p className="mt-3 max-w-2xl text-base sm:text-lg text-neutral-400">
                    We deploy specialized cross-disciplinary teams across these core SARS Global practices.
                  </p>
                </div>

                {/* Handwritten Cursive Script Accent */}
                <div className="hidden lg:flex flex-col items-end text-right">
                  <div className="font-serif italic text-[#f57e20] text-base leading-snug space-y-0.5">
                    <div>Strategy</div>
                    <div>Technology</div>
                    <div>People</div>
                    <div>Growth</div>
                  </div>
                  <svg
                    className="w-6 h-6 text-[#f57e20] mt-1 mr-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 4v14" />
                    <path d="m6 13 6 6 6-6" />
                  </svg>
                </div>
              </div>

              {/* 4 Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {data.servicesProvided.map((service, idx) => {
                  const Icon = SERVICE_PRACTICE_ICONS[service.title] || Briefcase;

                  return (
                    <Link
                      key={`${service.title}-${idx}`}
                      href={service.route}
                      className="group relative flex flex-col justify-between bg-[#181818] border border-white/10 rounded-2xl p-6 sm:p-7 hover:border-[#f57e20] transition-all duration-300"
                    >
                      <div>
                        {/* Icon */}
                        <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 text-[#f57e20] flex items-center justify-center mb-5 group-hover:bg-[#f57e20] group-hover:text-black group-hover:border-[#f57e20] transition-all duration-200">
                          <Icon className="w-5 h-5" />
                        </div>

                        <h3 className="font-['Raleway',sans-serif] text-xl font-bold text-white mb-2.5 group-hover:text-[#f57e20] transition-colors">
                          {service.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                          {service.desc}
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#f57e20] group-hover:gap-2.5 transition-all mt-auto">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ============================================================
            05 — RELATED ENGAGEMENTS / CASE STUDIES
        ============================================================ */}
        {data.caseStudies && data.caseStudies.length > 0 && (
          <section
            id="related-engagements"
            data-nav-theme="light"
            className="border-b border-black/10 bg-[#faf8f5] py-16 sm:py-24 lg:py-28"
          >
            <div className="sars-container px-5 sm:px-8 lg:px-12">
              <div className="mb-10 md:mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <span className="h-0.5 w-7 bg-[#f57e20]" />
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#ea650d]">
                      VERIFIED OUTCOMES
                    </span>
                  </div>
                  <h2 className="font-['Raleway',sans-serif] text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-[-0.035em] text-[#111111]">
                    Related Engagements
                  </h2>
                </div>

                <Link
                  id="case-studies-view-all"
                  href="/work/"
                  className="group inline-flex items-center gap-1.5 text-sm font-extrabold text-[#ea650d] hover:gap-2.5 transition-all w-fit"
                >
                  <span>View All Projects</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Responsive 6-Card Grid */}
              <div
                className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${
                  data.caseStudies.length >= 6
                    ? "xl:grid-cols-6"
                    : data.caseStudies.length === 4
                    ? "xl:grid-cols-4"
                    : "xl:grid-cols-3"
                } gap-4 sm:gap-4.5`}
              >
                {data.caseStudies.map((caseStudy, idx) => {
                  const imageSrc =
                    CASE_STUDY_VISUALS[caseStudy.name] ||
                    FALLBACK_SOLUTION_IMAGES[idx % FALLBACK_SOLUTION_IMAGES.length];

                  return (
                    <Link
                      key={`${caseStudy.name}-${idx}`}
                      href={caseStudy.route}
                      className="group bg-white rounded-2xl p-3.5 sm:p-4 border border-[#ede7df] shadow-sm hover:shadow-md hover:border-[#f57e20] transition-all duration-300 flex flex-col justify-between"
                    >
                      {/* Thumbnail */}
                      <div className="relative h-28 sm:h-32 w-full rounded-xl overflow-hidden mb-3 bg-neutral-100 shrink-0">
                        {imageSrc ? (
                          <Image
                            src={imageSrc}
                            alt={`${caseStudy.name} showcase`}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 16vw"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-neutral-100">
                            <Briefcase className="w-8 h-8 text-neutral-400" />
                          </div>
                        )}
                      </div>

                      {/* Card Content */}
                      <div className="flex flex-col flex-1">
                        <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-1 line-clamp-1">
                          {caseStudy.category}
                        </span>

                        <h3 className="font-['Raleway',sans-serif] text-sm sm:text-base font-extrabold text-[#141414] leading-snug mb-1.5 group-hover:text-[#ea650d] transition-colors line-clamp-1">
                          {caseStudy.name}
                        </h3>

                        <p className="text-xs text-neutral-600 leading-relaxed line-clamp-3 mb-3.5 flex-1">
                          {caseStudy.summary}
                        </p>

                        <span className="text-[11px] font-bold text-[#ea650d] inline-flex items-center gap-1 group-hover:gap-1.5 transition-all mt-auto pt-2 border-t border-neutral-100">
                          <span>Explore Case Study</span>
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ============================================================
            06 — FREQUENTLY ASKED QUESTIONS
        ============================================================ */}
        {data.faqs && data.faqs.length > 0 && (
          <section
            id="frequently-asked-questions"
            data-nav-theme="light"
            className="border-b border-black/10 bg-white py-16 sm:py-24 lg:py-28"
          >
            <div className="sars-container px-5 sm:px-8 lg:px-12">
              <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
                {/* Left Column */}
                <div className="lg:col-span-5 lg:sticky lg:top-28">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-0.5 w-7 bg-[#f57e20]" />
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#ea650d]">
                      FREQUENTLY ASKED QUESTIONS
                    </span>
                  </div>

                  <h2 className="font-['Raleway',sans-serif] text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.08] tracking-[-0.035em] text-[#111111]">
                    Questions About Our {data.name} Practice
                  </h2>
                </div>

                {/* Right Column: Rounded Accordion Pills */}
                <div className="lg:col-span-7">
                  <div className="space-y-3">
                    {data.faqs.map((faq, idx) => {
                      const isOpen = openFaq === idx;

                      return (
                        <article
                          key={`${faq.question}-${idx}`}
                          className="bg-[#f7f5f1] rounded-2xl p-5 sm:p-6 border border-[#ebe5dc] transition-all hover:border-[#d9d2c6]"
                        >
                          <button
                            type="button"
                            onClick={() =>
                              setOpenFaq((current) => (current === idx ? null : idx))
                            }
                            className="group flex w-full items-center justify-between gap-4 text-left cursor-pointer"
                            aria-expanded={isOpen}
                            aria-controls={`faq-answer-${idx}`}
                          >
                            <span className="font-['Raleway',sans-serif] text-base sm:text-lg font-bold leading-snug text-[#171513] group-hover:text-[#ea650d] transition-colors">
                              {faq.question}
                            </span>

                            <span className="w-8 h-8 rounded-full border border-neutral-300 bg-white flex items-center justify-center text-neutral-700 group-hover:border-[#f57e20] group-hover:bg-[#f57e20] group-hover:text-black shrink-0 transition-all ml-3">
                              {isOpen ? (
                                <Minus className="h-4 w-4" />
                              ) : (
                                <Plus className="h-4 w-4" />
                              )}
                            </span>
                          </button>

                          <div
                            id={`faq-answer-${idx}`}
                            className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                              isOpen
                                ? "grid-rows-[1fr] opacity-100"
                                : "grid-rows-[0fr] opacity-0"
                            }`}
                          >
                            <div className="overflow-hidden">
                              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mt-3.5 pt-3.5 border-t border-neutral-200/60">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ============================================================
            07 — FINAL CTA
        ============================================================ */}
        <section
          id="final-cta"
          data-nav-theme="dark"
          className="relative overflow-hidden bg-gradient-to-r from-[#111111] via-[#1a1410] to-[#8a3304] py-16 sm:py-24 text-white"
        >
          <div
            aria-hidden="true"
            className="sars-grid-bg pointer-events-none absolute inset-0 opacity-[0.12]"
          />

          <div className="sars-container relative z-10 px-5 sm:px-8 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              {/* Left text */}
              <div className="lg:col-span-8">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-0.5 w-7 bg-[#f57e20]" />
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#f57e20]">
                    PARTNER WITH SARS GLOBAL
                  </span>
                </div>

                <h2 className="max-w-3xl font-['Raleway',sans-serif] text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-[-0.03em] text-white">
                  Ready to Accelerate Growth in Your Sector?
                </h2>

                <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-white/70">
                  Connect with our industry practice leaders to discuss custom software, BPO team allocation, or tailored organic search strategy.
                </p>

                <div className="mt-8">
                  <Link
                    id="final-cta-button"
                    href="/contact/"
                    className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-[#f57e20] px-8 py-4 text-sm font-extrabold text-[#111111] transition-all duration-300 hover:bg-white shadow-lg"
                  >
                    <span>Schedule Industry Consultation</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Right visual card with banner and orange script */}
              <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
                <div className="relative w-full max-w-[320px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/40">
                  <Image
                    src="/assets/img/banner.png"
                    alt="Reaching the summit"
                    fill
                    sizes="(max-width: 1024px) 320px, 400px"
                    className="object-cover object-right opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-right">
                    <div className="font-serif italic text-base sm:text-lg text-[#f57e20] font-semibold leading-tight drop-shadow-md">
                      Your Industry.<br />Our Expertise.<br />Real Results. ⤹
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
