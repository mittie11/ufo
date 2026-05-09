import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Canada Insider is a Canadian-focused editorial site covering health, finance, lifestyle, travel, and more — written for real Canadians by people who care about this country.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">About Canada Insider</h1>
      <div className="w-12 h-1 bg-red-600 rounded-full mb-8" />

      <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700">
        <p>
          Welcome to <strong>Canada Insider</strong> — a digital magazine built for Canadians who
          want straightforward, trustworthy information about the things that actually matter in
          their everyday lives.
        </p>

        <p>
          We cover health and wellness, personal finance, home and living, pet care, lifestyle,
          travel across Canada, and food — all through a distinctly Canadian lens. Whether
          you're in Toronto, Vancouver, Calgary, Halifax, or anywhere in between, our goal is to
          give you information that's relevant, actionable, and written for the Canadian context.
        </p>

        <h2>What We Stand For</h2>

        <p>
          <strong>Accuracy:</strong> Every article is research-based. We cite credible sources,
          reference Canadian health guidelines and government programs, and make a genuine effort
          to verify the information we publish.
        </p>

        <p>
          <strong>Transparency:</strong> Canada Insider is ad-supported. We use Google AdSense to
          display advertisements across the site. Advertising revenue helps us maintain the site
          and continue publishing. Advertisers have no editorial influence over our content.
        </p>

        <p>
          <strong>Relevance:</strong> We write specifically for Canadians. All monetary amounts
          are in Canadian dollars. Health information references Canadian guidelines. Finance
          articles focus on Canadian programs, tax rules, and institutions. Travel articles
          showcase the incredible diversity of this country.
        </p>

        <h2>Our Content</h2>

        <p>
          Canada Insider publishes original editorial content across seven categories: Health
          &amp; Wellness, Finance &amp; Money, Home &amp; Living, Pets, Lifestyle, Travel Canada,
          and Food &amp; Recipes.
        </p>

        <p>
          All health-related articles include a disclaimer that content is for informational
          purposes only and does not constitute medical advice. Finance articles note that they do
          not constitute financial advice. We encourage all readers to consult appropriate
          professionals for personal guidance.
        </p>

        <h2>Contact Us</h2>

        <p>
          Have a question, correction, or feedback? We value hearing from our readers. You can
          reach us by email. We read every message, though response times may vary.
        </p>

        <p>
          Canada Insider is operated by a small, independent team passionate about Canadian life.
          We are not affiliated with any government agency, political party, or large media
          conglomerate.
        </p>

        <p>Thank you for reading. We're genuinely glad you're here.</p>
      </div>
    </div>
  );
}
