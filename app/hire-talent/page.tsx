import { BodyClass } from "@/components/layout/BodyClass";
import { HireRolesTabs } from "@/components/hire/HireRolesTabs";
import { StructuredData } from "@/components/ui/StructuredData";
import { makePageMetadata } from "@/content/metadata";
import { getPageByRoute } from "@/content/pages";

export const metadata = makePageMetadata("/hire-talent");

const rolesSectionStart = '<section class="sars-hire-page__section sars-hire-page__roles-section"';
const impactSectionStart =
  '<section class="sars-hire-page__section sars-hire-page__section--orange" data-nav-theme="light" aria-labelledby="hire-impact-title">';

function getHireTalentHtmlParts() {
  const page = getPageByRoute("/hire-talent");
  const pageInnerHtml = page.mainHtml
    .replace(/^<div class="sars-hire-page">\n?/, "")
    .replace(/\n?\s*<\/div>$/, "");
  const rolesStartIndex = pageInnerHtml.indexOf(rolesSectionStart);
  const impactStartIndex = pageInnerHtml.indexOf(impactSectionStart);

  if (rolesStartIndex < 0 || impactStartIndex < 0 || impactStartIndex <= rolesStartIndex) {
    throw new Error("Unable to split Hire Talent role tabs section.");
  }

  return {
    page,
    beforeRoles: pageInnerHtml.slice(0, rolesStartIndex),
    afterRoles: pageInnerHtml.slice(impactStartIndex),
  };
}

function TalentReportSignup() {
  return (
    <section className="sars-footer__newsletter" aria-labelledby="talent-report-title">
      <div>
        <h3 id="talent-report-title">Get the Talent Report</h3>
        <p>Weekly insights on tech hiring trends, salary benchmarks, and in-demand roles.</p>
      </div>
      <form className="sars-footer-newsletter" action="/contact/" method="post" data-talent-report-form noValidate>
        <input type="hidden" name="form_source" value="talent_report" />
        <label htmlFor="hire-talent-report-email">Work email</label>
        <div className="sars-footer-newsletter__control">
          <input
            id="hire-talent-report-email"
            name="email"
            type="email"
            placeholder="Enter your work email"
            autoComplete="email"
            required
          />
          <button type="submit">Subscribe &rarr;</button>
        </div>
        <p className="sars-footer-newsletter__status" data-talent-report-status aria-live="polite" />
      </form>
    </section>
  );
}

export default function Page() {
  const { page, beforeRoles, afterRoles } = getHireTalentHtmlParts();

  return (
    <>
      <BodyClass className={page.bodyClass} />
      <StructuredData items={page.structuredData} />
      <main id="main" className="sars-page-main">
        <div className="sars-hire-page">
          <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: beforeRoles }} />
          <HireRolesTabs />
          <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: afterRoles }} />
        </div>
      </main>
      <TalentReportSignup />
    </>
  );
}
