import type { Metadata } from "next";
import { ClientScripts } from "@/components/layout/ClientScripts";
import { Preloader } from "@/components/layout/Preloader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SocialRail } from "@/components/layout/SocialRail";
import { dmSans, raleway } from "./fonts";
import "./styles/site.css";
import "./styles/hire-talent.css";
import "./styles/bpo-services.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sarsglobal.io"),
  title: {
    default: "SARS Global | Digital Marketing, Technology and AI Agency",
    template: "%s | SARS Global",
  },
  description:
    "SARS Global combines creative marketing, high-performance technology and intelligent automation to help ambitious brands scale globally.",
  icons: {
    icon: "/assets/img/sars-new-logo.png",
    shortcut: "/assets/img/sars-new-logo.png",
    apple: "/assets/img/sars-new-logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${raleway.variable}`}>
      <body className="sars-page">
        <a className="sars-skip" href="#main">
          Skip to content
        </a>
        <Preloader />
        <SiteHeader />
        <div className="sars-transition" aria-hidden="true" />
        <SocialRail />
        <button className="sars-back-top" type="button" data-back-top aria-label="Back to top">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M12 19V5m-6 6 6-6 6 6"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>
        <div className="sars-cursor" data-cursor aria-hidden="true">
          View Project
        </div>
        {children}
        <SiteFooter />
        <div
          className="sars-project-popup"
          data-project-popup
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-popup-title"
          hidden
        >
          <div className="sars-project-popup__transition" aria-hidden="true" />
          <div className="sars-project-popup__shell" role="document">
            <header className="sars-project-popup__bar">
              <button className="sars-project-popup__back" type="button" data-project-close>
                Back to Work
              </button>
              <button
                className="sars-project-popup__close"
                type="button"
                data-project-close
                aria-label="Close project details"
              >
                <span />
                <span />
              </button>
            </header>
            <div
              className="sars-project-popup__content"
              data-project-popup-content
              tabIndex={-1}
              aria-live="polite"
            />
          </div>
        </div>
        <ClientScripts />
      </body>
    </html>
  );
}
