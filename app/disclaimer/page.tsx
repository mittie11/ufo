import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Canada Insider Disclaimer — important information about the nature of our content.",
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Disclaimer</h1>
      <div className="w-12 h-1 bg-red-600 rounded-full mb-4" />
      <p className="text-sm text-gray-500 mb-8">Last updated: May 2026</p>

      <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700">
        <p>
          The information published on Canada Insider is provided for general informational and
          educational purposes only. By using this website, you acknowledge and agree to the
          following terms.
        </p>

        <h2>Not Professional Advice</h2>
        <p>
          The content on this website does not constitute, and should not be relied upon as,
          professional advice of any kind, including but not limited to:
        </p>
        <ul>
          <li>
            <strong>Medical or health advice:</strong> Articles covering health, wellness, symptoms,
            nutrition, fitness, and related topics are for informational purposes only. They are not
            a substitute for professional medical advice, diagnosis, or treatment. Always seek the
            advice of a qualified healthcare provider with any questions you may have regarding a
            medical condition.
          </li>
          <li>
            <strong>Financial advice:</strong> Articles covering personal finance, investing,
            saving, debt, government benefits, and related topics are for informational purposes
            only. They do not constitute financial, investment, tax, or legal advice. Always consult
            a qualified financial adviser, accountant, or legal professional before making financial
            decisions.
          </li>
          <li>
            <strong>Legal advice:</strong> Nothing on this site should be construed as legal advice.
            Consult a licensed lawyer for advice specific to your circumstances.
          </li>
          <li>
            <strong>Veterinary advice:</strong> Articles covering pet health are for informational
            purposes only. Always consult a licensed veterinarian for the health and care of your
            animals.
          </li>
        </ul>

        <h2>Accuracy of Information</h2>
        <p>
          While we make every effort to ensure the accuracy and currency of the information
          published on Canada Insider, we make no warranties or representations of any kind,
          express or implied, about the completeness, accuracy, reliability, suitability, or
          availability of the information. Any reliance you place on such information is strictly
          at your own risk.
        </p>
        <p>
          Information published on this site may become outdated. We encourage readers to verify
          important information independently, particularly with respect to government programs,
          medical guidelines, and financial regulations, which change frequently.
        </p>

        <h2>Affiliate and Advertising Disclosure</h2>
        <p>
          Canada Insider is supported by advertising revenue, primarily through Google AdSense.
          Advertisements displayed on this site are served by Google and are subject to Google&apos;s
          advertising policies. The presence of an advertisement does not constitute an endorsement
          of the advertised product or service by Canada Insider.
        </p>
        <p>
          We may, from time to time, include links to third-party products or services. These are
          not affiliate links unless explicitly disclosed. We do not accept payment to feature or
          recommend specific products or services in our editorial content without disclosure.
        </p>

        <h2>External Links</h2>
        <p>
          Our website may contain links to external websites. These links are provided for
          convenience and informational purposes only. We have no control over the content of those
          sites and accept no responsibility for them or for any loss or damage that may arise from
          your use of them.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by applicable law, Canada Insider, its operators, editors,
          and contributors shall not be liable for any direct, indirect, incidental, consequential,
          or punitive damages arising from your use of, or inability to use, this website or its
          content.
        </p>

        <h2>Changes to This Disclaimer</h2>
        <p>
          We reserve the right to modify this disclaimer at any time. Changes will be effective
          immediately upon posting to the website.
        </p>
      </div>
    </div>
  );
}
