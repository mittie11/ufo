import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "America Insider Disclaimer — important information about the nature of our content.",
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Disclaimer</h1>
      <div className="w-12 h-1 bg-red-600 rounded-full mb-4" />
      <p className="text-sm text-gray-500 mb-8">Last updated: May 2026</p>

      <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700">
        <p>
          The information published on America Insider is provided for general informational and
          entertainment purposes only. By using this website, you acknowledge and agree to the
          following terms.
        </p>

        <h2>Entertainment and Informational Purposes</h2>
        <p>
          America Insider covers topics including UFO sightings, government disclosure, paranormal
          phenomena, alien theories, ancient mysteries, and related subjects. Much of this content
          is speculative, unverified, or based on reported witness accounts and unofficial claims.
          Articles are presented for entertainment and discussion, not as established scientific
          or historical fact.
        </p>

        <h2>Reported Claims — Not Verified Fact</h2>
        <p>
          Articles on this site frequently present claims made by witnesses, researchers,
          whistleblowers, and unofficial sources. The use of language such as "reportedly,"
          "allegedly," "according to witnesses," and "claims suggest" indicates that a statement
          has not been independently verified by America Insider. Readers should exercise their own
          judgement when evaluating such claims.
        </p>
        <p>
          America Insider does not assert that extraterrestrial life exists, that UFOs are
          spacecraft of non-human origin, or that any conspiracy theory presented on this site is
          true. We report on these topics because they are subjects of genuine public interest,
          ongoing scientific inquiry, and official government investigation.
        </p>

        <h2>Accuracy of Information</h2>
        <p>
          While we make every effort to accurately represent the sources we cite, we make no
          warranties or representations of any kind about the completeness, accuracy, or
          reliability of the information published. Any reliance you place on such information is
          strictly at your own risk. We encourage readers to verify information independently,
          particularly with respect to government statements, scientific findings, and historical
          claims.
        </p>

        <h2>Advertising Disclosure</h2>
        <p>
          America Insider is supported by advertising revenue, primarily through Google AdSense.
          Advertisements displayed on this site are served by third-party ad networks and are
          subject to their respective advertising policies. The presence of an advertisement does
          not constitute an endorsement of the advertised product or service by America Insider.
          Advertisers have no influence over our editorial content.
        </p>

        <h2>External Links</h2>
        <p>
          Our website may contain links to external websites. These links are provided for
          convenience and informational purposes only. We have no control over the content of
          those sites and accept no responsibility for them or for any loss or damage that may
          arise from your use of them.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by applicable law, America Insider, its operators,
          editors, and contributors shall not be liable for any direct, indirect, incidental,
          consequential, or punitive damages arising from your use of, or inability to use, this
          website or its content.
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
