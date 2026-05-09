import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Canada Insider Privacy Policy — how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Privacy Policy</h1>
      <div className="w-12 h-1 bg-red-600 rounded-full mb-4" />
      <p className="text-sm text-gray-500 mb-8">Last updated: May 2026</p>

      <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700">
        <p>
          Canada Insider (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed
          to protecting your privacy. This Privacy Policy explains how we collect, use, disclose,
          and safeguard your information when you visit our website.
        </p>

        <h2>Information We Collect</h2>

        <h3>Information Collected Automatically</h3>
        <p>
          When you visit Canada Insider, certain information is automatically collected by our
          analytics and advertising partners, including:
        </p>
        <ul>
          <li>IP address (anonymised where required by law)</li>
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>Pages visited and time spent on each page</li>
          <li>Referring website</li>
          <li>Date and time of visit</li>
        </ul>

        <h3>Cookies and Tracking Technologies</h3>
        <p>
          We use cookies and similar tracking technologies to enhance your experience on our site.
          These include:
        </p>
        <ul>
          <li>
            <strong>Google Analytics 4:</strong> We use Google Analytics to understand how visitors
            interact with our site. Google Analytics uses cookies to collect anonymised data about
            user behaviour. You can opt out of Google Analytics tracking by installing the{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Analytics opt-out browser add-on
            </a>
            .
          </li>
          <li>
            <strong>Google AdSense:</strong> We display advertisements provided by Google AdSense.
            Google uses cookies to serve ads based on a user&apos;s prior visits to our website and
            other sites. You can opt out of personalised advertising by visiting{" "}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google&apos;s Ads Settings
            </a>
            .
          </li>
          <li>
            <strong>Facebook Pixel:</strong> We may use the Facebook Pixel to measure the
            effectiveness of our advertising and to provide more relevant ads to users. You can
            control this through your Facebook ad settings.
          </li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the information collected to:</p>
        <ul>
          <li>Understand how visitors use our site and improve our content</li>
          <li>Display relevant advertisements through Google AdSense</li>
          <li>Measure the effectiveness of our marketing</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>Sharing of Information</h2>
        <p>
          We do not sell, trade, or rent your personal information to third parties. We may share
          anonymised, aggregated data with advertising partners (such as Google) as described in
          their respective privacy policies.
        </p>

        <h2>Third-Party Links</h2>
        <p>
          Our site may contain links to third-party websites. We are not responsible for the
          privacy practices or content of those websites. We encourage you to review the privacy
          policies of any third-party sites you visit.
        </p>

        <h2>Children&apos;s Privacy</h2>
        <p>
          Canada Insider is not directed at children under 13 years of age. We do not knowingly
          collect personal information from children.
        </p>

        <h2>Your Rights (Canadian Residents)</h2>
        <p>
          Under Canada&apos;s Personal Information Protection and Electronic Documents Act (PIPEDA)
          and applicable provincial privacy laws, you have the right to:
        </p>
        <ul>
          <li>Request access to the personal information we hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Withdraw consent to our use of your personal information (where applicable)</li>
        </ul>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this
          page with an updated revision date. We encourage you to review this policy periodically.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy, please contact us via
          the contact information provided on our About page.
        </p>
      </div>
    </div>
  );
}
