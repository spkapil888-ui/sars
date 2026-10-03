"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { IndustryData } from "@/content/industriesData";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StructuredData } from "@/components/ui/StructuredData";
import {
  ArrowRight,
  Bot,
  CalendarClock,
  CheckCircle2,
  ChevronRight,
  Clock,
  FileCheck,
  FileText,
  Headphones,
  HeartHandshake,
  HeartPulse,
  Lock,
  Megaphone,
  Minus,
  Plus,
  Search,
  Shield,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

interface HealthcarePageTemplateProps {
  data: IndustryData;
}

export function HealthcarePageTemplate({ data }: HealthcarePageTemplateProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activePracticeTab, setActivePracticeTab] = useState<string>("All");

  const siteUrl = "https://sarsglobal.io";

  // Structured Data (FAQPage + Service)
  const faqSchema = {
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
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Healthcare Digital Solutions & Patient Support",
    serviceType: "Healthcare Digital Marketing, Technology & BPO Services",
    provider: {
      "@type": "Organization",
      name: "SARS Global",
      url: siteUrl,
      logo: `${siteUrl}/assets/img/sars-new-logo.png`,
    },
    areaServed: "Worldwide",
    description: data.metaDescription,
    url: `${siteUrl}${data.route}/`,
  };

  // 4 Tailored Vertical Solutions with exact images and order
  const solutions = [
    {
      num: "01",
      title: "Authoritative Medical Content Marketing",
      desc: "Medically reviewed patient education, healthcare articles and wellness content designed around trust, clarity and search authority.",
      deliverables: [
        "Patient Education Content",
        "Medical Editorial",
        "Content Strategy",
        "EEAT-focused Content",
        "Wellness Content",
      ],
      image: "/assets/img/healthcare/medical-content.jpg",
      imageAlt: "Authoritative medical content marketing, patient education guides, and clinical editorial strategy",
      route: "/digital-marketing/content-marketing/",
      ctaText: "Explore Content Marketing",
    },
    {
      num: "02",
      title: "Automated Appointment Scheduling & Reminders",
      desc: "Web and WhatsApp-based booking workflows designed to reduce scheduling friction and improve appointment management.",
      deliverables: [
        "Online Booking",
        "WhatsApp Integration",
        "Appointment Reminders",
        "API Integration",
        "Scheduling Workflows",
      ],
      image: "/assets/img/healthcare/appointment-scheduling.jpg",
      imageAlt: "Automated healthcare appointment scheduling, WhatsApp confirmations, and calendar management",
      route: "/ai-automation/workflow-automation/",
      ctaText: "Explore Workflow Automation",
    },
    {
      num: "03",
      title: "Healthcare Local SEO & Reputation Management",
      desc: "Improve visibility for healthcare providers across Google Search, local listings and relevant healthcare discovery platforms.",
      deliverables: [
        "Local SEO",
        "Google Business Profile",
        "Map Pack Optimization",
        "Reputation Monitoring",
        "Healthcare SEO",
      ],
      image: "/assets/img/healthcare/healthcare-seo.jpg",
      imageAlt: "Healthcare local SEO, Google Business Profile map pack optimization, and provider reputation management",
      route: "/digital-marketing/seo-services/",
      ctaText: "Explore SEO Services",
    },
    {
      num: "04",
      title: "Compassionate Patient Support BPO",
      desc: "Patient-support teams for enquiries, scheduling, rescheduling and other defined support workflows.",
      deliverables: [
        "Inbound Support",
        "Appointment Support",
        "Patient Enquiries",
        "Escalation Workflows",
        "Extended Support Coverage",
      ],
      image: "/assets/img/healthcare/patient-support.jpg",
      imageAlt: "Empathetic patient support team coordinating healthcare enquiries, appointments, and care logistics",
      route: "/bpo-services/customer-support-outsourcing/",
      ctaText: "Explore Patient Support BPO",
    },
  ];

  // Sector Friction Points
  const challenges = [
    {
      num: "01",
      title: "Google YMYL & Medical Authority",
      desc: "Healthcare search visibility requires trustworthy, evidence-led and authoritative content.",
      icon: ShieldCheck,
    },
    {
      num: "02",
      title: "Complex Patient Communication",
      desc: "Patients need simple, empathetic guidance instead of difficult clinical language.",
      icon: HeartHandshake,
    },
    {
      num: "03",
      title: "Appointment Friction",
      desc: "Missed calls, phone tag and scheduling delays directly affect patient experience.",
      icon: CalendarClock,
    },
    {
      num: "04",
      title: "Privacy & Confidentiality",
      desc: "Patient enquiries require careful data handling and secure communication workflows.",
      icon: Lock,
    },
  ];

  // Integrated Capabilities
  const servicePractices = [
    {
      category: "Strategy",
      title: "Content Marketing",
      desc: "Healthcare articles, patient education and editorial resources.",
      route: "/digital-marketing/content-marketing/",
      icon: FileText,
    },
    {
      category: "Growth",
      title: "SEO Services",
      desc: "Healthcare authority building and local search optimization.",
      route: "/digital-marketing/seo-services/",
      icon: Megaphone,
    },
    {
      category: "Technology",
      title: "AI Chatbots",
      desc: "Digital assistants for approved patient enquiries and appointment workflows.",
      route: "/ai-automation/ai-chatbot-development/",
      icon: Bot,
    },
    {
      category: "People",
      title: "Customer Support Outsourcing",
      desc: "Trained support teams for patient communication and appointment assistance.",
      route: "/bpo-services/customer-support-outsourcing/",
      icon: Headphones,
    },
  ];

  const filteredPractices =
    activePracticeTab === "All"
      ? servicePractices
      : servicePractices.filter((p) => p.category === activePracticeTab);

  // Healthcare Trust / Operating Principles
  const trustPrinciples = [
    {
      title: "Clear Patient Communication",
      desc: "Empathetic, approachable language that demystifies clinical terminology and helps patients make informed decisions.",
      icon: HeartPulse,
    },
    {
      title: "Privacy-Conscious Workflows",
      desc: "Digital touchpoints and inquiry forms engineered with modern SSL encryption and strict data minimization practices.",
      icon: Shield,
    },
    {
      title: "Human Escalation Protocols",
      desc: "Clear escalation boundaries ensuring complex or urgent medical queries are immediately transferred to authorized clinic staff.",
      icon: Users,
    },
    {
      title: "Evidence-Led Content",
      desc: "Structured editorial and source-validation workflows citing verified research and adhering strictly to Google EEAT standards.",
      icon: FileCheck,
    },
  ];

  return (
    <>
      <StructuredData items={[faqSchema, serviceSchema]} />

      <main className="min-h-screen bg-white text-neutral-900 antialiased selection:bg-orange-500 selection:text-white">
        {/* ============================================================
            01 — BREADCRUMBS
        ============================================================ */}
        <div className="bg-[#fbfaf8] border-b border-neutral-200/70 py-3.5">
          <div className="sars-container px-5 sm:px-8 lg:px-12">
            <Breadcrumbs
              items={[
                { label: "Industries", href: "/industries" },
                { label: "Healthcare & Patient Wellness" },
              ]}
            />
          </div>
        </div>

        {/* ============================================================
            02 — HERO SECTION
        ============================================================ */}
        <section
          id="healthcare-hero"
          data-nav-theme="light"
          className="relative overflow-hidden bg-[#fbfaf8] border-b border-neutral-200/70 py-16 sm:py-20 lg:py-24"
        >
          <div
            aria-hidden="true"
            className="sars-grid-bg pointer-events-none absolute inset-0 opacity-[0.25]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl"
          />

          <div className="sars-container relative z-10 px-5 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              {/* Left Column: Heading & Content */}
              <div className="lg:col-span-7">
                {/* Small Label */}
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-0.5 w-7 bg-orange-500" />
                  <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-orange-600">
                    INDUSTRIES / HEALTHCARE
                  </span>
                </div>

                {/* Main Heading H1 (54-64px desktop, font-weight: 600) */}
                <h1 className="font-['Raleway',sans-serif] text-4xl sm:text-5xl lg:text-[60px] font-semibold leading-[1.08] tracking-[-0.035em] text-neutral-900">
                  Healthcare &amp; Patient Wellness
                </h1>

                {/* Supporting Copy (18px-20px) */}
                <p className="mt-5 max-w-2xl text-lg sm:text-[19px] leading-relaxed text-neutral-600">
                  Build patient trust, educate communities with evidence-led content, streamline digital scheduling, and deliver compassionate, privacy-conscious patient support operations.
                </p>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact/"
                    className="group inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-full bg-[#111111] px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-orange-500 shadow-md hover:shadow-orange-500/20"
                  >
                    <span>Schedule Industry Consultation</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  <a
                    href="#healthcare-case-study"
                    className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3.5 text-sm font-semibold text-neutral-800 transition-colors duration-200 hover:border-neutral-900 hover:bg-neutral-50"
                  >
                    <span>Explore Case Study</span>
                    <span aria-hidden="true">↓</span>
                  </a>
                </div>

                {/* Verified Indicators Row */}
                <div className="mt-10 pt-8 border-t border-neutral-200/80 grid grid-cols-3 gap-4 max-w-lg">
                  <div>
                    <strong className="block text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
                      80<span className="text-orange-500">+</span>
                    </strong>
                    <span className="text-xs sm:text-sm text-neutral-600">Clients Served</span>
                  </div>
                  <div>
                    <strong className="block text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
                      35<span className="text-orange-500">+</span>
                    </strong>
                    <span className="text-xs sm:text-sm text-neutral-600">Google Review Signals</span>
                  </div>
                  <div>
                    <strong className="block text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
                      15<span className="text-orange-500">+</span>
                    </strong>
                    <span className="text-xs sm:text-sm text-neutral-600">Team Members</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Visual */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-lg lg:max-w-none">
                  {/* Outer subtle glow */}
                  <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-orange-500/30 to-neutral-200 opacity-60 blur-lg" />
                  
                  {/* Card Container */}
                  <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-2.5 shadow-xl">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-neutral-100">
                      <Image
                        src="/assets/img/healthcare/healthcare-hero.jpg"
                        alt="Modern healthcare professional in a clean clinical environment"
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Floating Trust Indicator on Visual */}
                      <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-black/60 backdrop-blur-md p-3 text-white border border-white/10">
                        <div className="flex items-center gap-2 text-xs font-semibold text-orange-400 uppercase tracking-wider">
                          <ShieldCheck className="h-3.5 w-3.5" />
                          <span>Healthcare Operating Practice</span>
                        </div>
                        <p className="text-xs text-neutral-200 mt-0.5">
                          Empathetic Patient Care · Verified Evidence · Privacy First
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ============================================================
                CAPABILITY TAGS (Horizontal Wrap Layout)
            ============================================================ */}
            <div className="mt-14 pt-8 border-t border-neutral-200/80">
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3.5">
                Core Healthcare Practice Capabilities
              </p>
              <div className="flex flex-wrap items-center gap-2.5" aria-label="Healthcare capabilities">
                {data.badges.map((badge, idx) => (
                  <div
                    key={`${badge}-${idx}`}
                    className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3.5 py-2 text-xs sm:text-[13px] font-medium text-neutral-800 shadow-xs hover:border-orange-500/50 hover:bg-orange-50/30 transition-colors"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            03 — SECTOR FRICTION POINTS
        ============================================================ */}
        <section
          id="sector-friction-points"
          data-nav-theme="light"
          className="border-b border-neutral-200/70 bg-white py-16 sm:py-24"
        >
          <div className="sars-container px-5 sm:px-8 lg:px-12">
            <div className="mb-12 max-w-2xl">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-0.5 w-7 bg-orange-500" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
                  SECTOR FRICTION POINTS
                </span>
              </div>
              <h2 className="font-['Raleway',sans-serif] text-3xl sm:text-4xl lg:text-4xl font-semibold tracking-[-0.03em] text-neutral-900">
                The Sensitivity of Healthcare Digital Engagement
              </h2>
              <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
                Healthcare depends on trust, medical authority and responsible patient communication. Inaccurate information, aggressive tactics, or careless data handling undermine provider reputation.
              </p>
            </div>

            {/* 2x2 Grid (Desktop) / 1 Column (Mobile) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {challenges.map((card) => {
                const Icon = card.icon;
                return (
                  <article
                    key={card.num}
                    className="group relative flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-7 sm:p-8 transition-all duration-300 hover:border-orange-500/50 hover:shadow-lg"
                  >
                    <div>
                      {/* Top Bar with Number and Minimal Line Icon */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-xs font-extrabold uppercase tracking-widest text-orange-600">
                          CARD {card.num}
                        </span>
                        <div className="h-10 w-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors duration-200">
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>

                      <h3 className="font-['Raleway',sans-serif] text-xl sm:text-2xl font-semibold text-neutral-900 mb-3 group-hover:text-orange-600 transition-colors">
                        {card.title}
                      </h3>

                      <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs font-medium text-neutral-500">
                      <span className="h-1 w-1 rounded-full bg-orange-500" />
                      <span>Critical Healthcare Operational Barrier</span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================
            04 — TAILORED VERTICAL SOLUTIONS
        ============================================================ */}
        <section
          id="tailored-vertical-solutions"
          data-nav-theme="light"
          className="border-b border-neutral-200/70 bg-[#faf9f6] py-16 sm:py-24"
        >
          <div className="sars-container px-5 sm:px-8 lg:px-12">
            <div className="mb-14 max-w-3xl">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-0.5 w-7 bg-orange-500" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
                  CUSTOM ENGINEERING &amp; GROWTH
                </span>
              </div>
              <h2 className="font-['Raleway',sans-serif] text-3xl sm:text-4xl lg:text-4xl font-semibold tracking-[-0.03em] text-neutral-900">
                Tailored Vertical Solutions
              </h2>
              <p className="mt-3 text-base sm:text-lg text-neutral-600 leading-relaxed">
                Purpose-built technology, growth and operational solutions for healthcare organizations.
              </p>
            </div>

            {/* Alternating Premium Layout */}
            <div className="space-y-12 sm:space-y-16">
              {solutions.map((sol, index) => {
                const isEven = index % 2 === 1; // Solution 02 & 04: Content Left, Image Right

                return (
                  <article
                    key={sol.num}
                    className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:border-neutral-300"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                      {/* Image Module */}
                      <div
                        className={`relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-full lg:col-span-6 bg-neutral-100 overflow-hidden ${
                          isEven ? "lg:order-2" : "lg:order-1"
                        }`}
                      >
                        <Image
                          src={sol.image}
                          alt={sol.imageAlt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:hidden" />
                      </div>

                      {/* Content Module: strictly following: Image -> Solution Number -> Title -> Short Description -> Key Deliverables -> CTA / Learn More */}
                      <div
                        className={`p-7 sm:p-10 lg:p-12 lg:col-span-6 flex flex-col justify-center ${
                          isEven ? "lg:order-1" : "lg:order-2"
                        }`}
                      >
                        {/* Solution Number */}
                        <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-orange-600 mb-2">
                          <span>SOLUTION {sol.num}</span>
                        </div>

                        {/* Title (24-32px) */}
                        <h3 className="font-['Raleway',sans-serif] text-2xl sm:text-[28px] font-semibold text-neutral-900 leading-snug tracking-tight mb-4">
                          {sol.title}
                        </h3>

                        {/* Short Description */}
                        <p className="text-base text-neutral-600 leading-relaxed mb-6">
                          {sol.desc}
                        </p>

                        {/* Key Deliverables */}
                        <div className="mb-8">
                          <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
                            Key Deliverables:
                          </p>
                          <ul className="space-y-2.5">
                            {sol.deliverables.map((deliv, dIdx) => (
                              <li
                                key={`${sol.num}-deliv-${dIdx}`}
                                className="flex items-start gap-2.5 text-sm sm:text-base text-neutral-700"
                              >
                                <CheckCircle2 className="h-4 w-4 text-orange-500 shrink-0 mt-0.5" />
                                <span>{deliv}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* CTA / Learn More */}
                        <div>
                          <Link
                            href={sol.route}
                            className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-700 group transition-colors"
                          >
                            <span>{sol.ctaText}</span>
                            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================
            05 — INTEGRATED CAPABILITIES (Relevant Service Practices)
        ============================================================ */}
        <section
          id="integrated-capabilities"
          data-nav-theme="dark"
          className="relative overflow-hidden bg-[#111111] py-16 sm:py-24 text-white"
        >
          <div
            aria-hidden="true"
            className="sars-grid-bg pointer-events-none absolute inset-0 opacity-[0.1]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl"
          />

          <div className="sars-container relative z-10 px-5 sm:px-8 lg:px-12">
            <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <span className="h-0.5 w-7 bg-orange-500" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
                    INTEGRATED CAPABILITIES
                  </span>
                </div>
                <h2 className="font-['Raleway',sans-serif] text-3xl sm:text-4xl lg:text-4xl font-semibold tracking-[-0.03em] text-white">
                  Relevant Service Practices
                </h2>
                <p className="mt-3 max-w-2xl text-base sm:text-lg text-neutral-400 leading-relaxed">
                  Cross-disciplinary SARS Global teams bring together strategy, technology, people and growth.
                </p>
              </div>

              {/* Four Category Tabs / Labels */}
              <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-white/5 border border-white/10">
                {["All", "Strategy", "Technology", "People", "Growth"].map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActivePracticeTab(tab)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                      activePracticeTab === tab
                        ? "bg-orange-500 text-black shadow-xs"
                        : "text-neutral-300 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* 4 Compact Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredPractices.map((practice, pIdx) => {
                const Icon = practice.icon;

                return (
                  <div
                    key={`${practice.title}-${pIdx}`}
                    className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#171717] p-6 sm:p-7 transition-all duration-300 hover:border-orange-500 hover:bg-[#1c1c1c]"
                  >
                    <div>
                      {/* Top Pill / Label */}
                      <div className="flex items-center justify-between mb-5">
                        <span className="text-[11px] font-bold uppercase tracking-widest text-orange-400">
                          {practice.category}
                        </span>
                        <div className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-black transition-colors duration-200">
                          <Icon className="h-4 w-4" />
                        </div>
                      </div>

                      <h3 className="font-['Raleway',sans-serif] text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                        {practice.title}
                      </h3>

                      <p className="text-sm text-neutral-400 leading-relaxed">
                        {practice.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/5">
                      <Link
                        href={practice.route}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-400 group-hover:text-white transition-colors"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================
            06 — RELATED ENGAGEMENT (Healthcare Work)
        ============================================================ */}
        <section
          id="healthcare-case-study"
          data-nav-theme="light"
          className="border-b border-neutral-200/70 bg-white py-16 sm:py-24"
        >
          <div className="sars-container px-5 sm:px-8 lg:px-12">
            <div className="mb-10 max-w-2xl">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-0.5 w-7 bg-orange-500" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
                  RELATED ENGAGEMENT
                </span>
              </div>
              <h2 className="font-['Raleway',sans-serif] text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-neutral-900">
                Healthcare Work
              </h2>
            </div>

            {/* ONE Premium Featured Case Study Card: Details Left, Large Visual Right */}
            <article className="overflow-hidden rounded-3xl border border-neutral-200 bg-[#fbfaf8] shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                {/* Left: Project Details */}
                <div className="p-8 sm:p-10 lg:p-12 lg:col-span-6 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-orange-600 mb-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    <span>Healthcare &amp; Maternity Case Study</span>
                  </div>

                  <h3 className="font-['Raleway',sans-serif] text-2xl sm:text-3xl lg:text-4xl font-semibold text-neutral-900 mb-4">
                    Cloudnine KnowMoms
                  </h3>

                  <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-6">
                    Built an empathetic maternal wellness content platform and supported community engagement with structured editorial workflows.
                  </p>

                  <div className="space-y-2 mb-8 border-y border-neutral-200/80 py-4">
                    <div className="flex items-center gap-2 text-sm text-neutral-700">
                      <CheckCircle2 className="h-4 w-4 text-orange-500 shrink-0" />
                      <span>Empathetic, medically sound maternal content guides</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-neutral-700">
                      <CheckCircle2 className="h-4 w-4 text-orange-500 shrink-0" />
                      <span>Sensitive patient communication &amp; brand consistency</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-neutral-700">
                      <CheckCircle2 className="h-4 w-4 text-orange-500 shrink-0" />
                      <span>Moderated patient community discussions</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      href="/work/#cloudnine"
                      className="group inline-flex items-center gap-2 rounded-full bg-[#111111] px-6 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-orange-500"
                    >
                      <span>Explore Case Study</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>

                    <Link
                      href="/work/"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-700 hover:text-neutral-900 transition-colors"
                    >
                      <span>View All Projects</span>
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>

                {/* Right: Large Project Image */}
                <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full lg:col-span-6 bg-neutral-200 overflow-hidden min-h-[320px] lg:min-h-[440px]">
                  <Image
                    src="/wp-content/uploads/2026/08/cloudnine.png"
                    alt="Cloudnine KnowMoms healthcare case study visual"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:hidden" />
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* ============================================================
            07 — HEALTHCARE TRUST & OPERATING PRINCIPLES
        ============================================================ */}
        <section
          id="healthcare-trust-principles"
          data-nav-theme="light"
          className="border-b border-neutral-200/70 bg-[#faf9f6] py-16 sm:py-24"
        >
          <div className="sars-container px-5 sm:px-8 lg:px-12">
            <div className="mb-12 max-w-2xl">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-0.5 w-7 bg-orange-500" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
                  GOVERNANCE &amp; ETHICS
                </span>
              </div>
              <h2 className="font-['Raleway',sans-serif] text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-neutral-900">
                Built Around Trust, Privacy and Clear Communication
              </h2>
              <p className="mt-3 text-base text-neutral-600 leading-relaxed">
                Healthcare requires rigorous standards. We align our workflows with strict data privacy principles and responsible clinical communication standards.
              </p>
            </div>

            {/* 4 Principles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trustPrinciples.map((principle, idx) => {
                const Icon = principle.icon;

                return (
                  <div
                    key={`${principle.title}-${idx}`}
                    className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-7 shadow-xs hover:border-orange-500/50 hover:shadow-md transition-all duration-300"
                  >
                    <div className="h-10 w-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-5">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-['Raleway',sans-serif] text-lg font-bold text-neutral-900 mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {principle.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================
            08 — FREQUENTLY ASKED QUESTIONS
        ============================================================ */}
        <section
          id="frequently-asked-questions"
          data-nav-theme="light"
          className="border-b border-neutral-200/70 bg-white py-16 sm:py-24"
        >
          <div className="sars-container px-5 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
              {/* Left Column */}
              <div className="lg:col-span-5 lg:sticky lg:top-28">
                <div className="mb-3 flex items-center gap-3">
                  <span className="h-0.5 w-7 bg-orange-500" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
                    FREQUENTLY ASKED QUESTIONS
                  </span>
                </div>

                <h2 className="font-['Raleway',sans-serif] text-3xl sm:text-4xl font-semibold leading-[1.12] tracking-[-0.03em] text-neutral-900">
                  Questions About Our Healthcare &amp; Patient Wellness Practice
                </h2>

                <p className="mt-4 text-base text-neutral-600 leading-relaxed">
                  Clear answers regarding our editorial review processes, data privacy safeguards, and clinic platform integrations.
                </p>
              </div>

              {/* Right Column: Accordion */}
              <div className="lg:col-span-7">
                <div className="space-y-3">
                  {data.faqs.map((faq, idx) => {
                    const isOpen = openFaq === idx;

                    return (
                      <article
                        key={`${faq.question}-${idx}`}
                        className="rounded-2xl border border-neutral-200/90 bg-[#fbfaf8] p-5 sm:p-6 transition-all hover:border-neutral-300"
                      >
                        <button
                          type="button"
                          onClick={() => setOpenFaq(isOpen ? null : idx)}
                          className="group flex w-full items-center justify-between gap-4 text-left cursor-pointer"
                          aria-expanded={isOpen}
                          aria-controls={`healthcare-faq-answer-${idx}`}
                        >
                          <span className="font-['Raleway',sans-serif] text-base sm:text-lg font-bold leading-snug text-neutral-900 group-hover:text-orange-600 transition-colors">
                            {faq.question}
                          </span>

                          <span className="h-8 w-8 rounded-full border border-neutral-300 bg-white flex items-center justify-center text-neutral-700 group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-black shrink-0 transition-all ml-2">
                            {isOpen ? (
                              <Minus className="h-4 w-4" />
                            ) : (
                              <Plus className="h-4 w-4" />
                            )}
                          </span>
                        </button>

                        <div
                          id={`healthcare-faq-answer-${idx}`}
                          className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                            isOpen
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mt-3.5 pt-3.5 border-t border-neutral-200/70">
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

        {/* ============================================================
            09 — FINAL CONSULTATION CTA & END STATEMENT
        ============================================================ */}
        <section
          id="healthcare-final-cta"
          data-nav-theme="dark"
          className="relative overflow-hidden bg-gradient-to-r from-[#111111] via-[#1a1410] to-[#8a3304] py-16 sm:py-24 text-white"
        >
          <div
            aria-hidden="true"
            className="sars-grid-bg pointer-events-none absolute inset-0 opacity-[0.12]"
          />

          <div className="sars-container relative z-10 px-5 sm:px-8 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              {/* Left Text */}
              <div className="lg:col-span-8">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-0.5 w-7 bg-orange-500" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
                    PARTNER WITH SARS GLOBAL
                  </span>
                </div>

                <h2 className="max-w-3xl font-['Raleway',sans-serif] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-[-0.03em] text-white">
                  Ready to Accelerate Growth in Your Sector?
                </h2>

                <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-white/80">
                  Connect with our team to discuss healthcare technology, digital growth, patient-support operations or custom workflow requirements.
                </p>

                <div className="mt-8">
                  <Link
                    href="/contact/"
                    className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-orange-500 px-8 py-4 text-sm font-extrabold text-[#111111] transition-all duration-300 hover:bg-white shadow-lg"
                  >
                    <span>Schedule Industry Consultation</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Right Visual Card with Summit Visual & End Statement */}
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
                    <div className="font-serif italic text-base sm:text-lg text-orange-400 font-semibold leading-tight drop-shadow-md">
                      Your Industry.<br />Our Expertise.<br />Real Results.
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
