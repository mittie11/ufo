import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Canada Insider is Canada's dedicated source for UFO sightings, government disclosure, alien theories, and paranormal news — written for curious Canadians.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">About Canada Insider</h1>
      <div className="w-12 h-1 bg-red-600 rounded-full mb-8" />

      <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700">
        <p>
          Welcome to <strong>Canada Insider</strong> — Canada's dedicated source for UFO sightings,
          government disclosure, alien theories, ancient mysteries, and paranormal news. We cover
          the stories that mainstream media either ignores or buries on page 12.
        </p>

        <p>
          From declassified Pentagon documents to Canadian military encounters and whistleblower
          testimony, we bring you the evidence, the analysis, and the questions that demand answers.
          Whether you're a lifelong researcher or someone who just saw something strange over the
          highway last Tuesday, you're in the right place.
        </p>

        <h2>What We Cover</h2>

        <p>
          Canada Insider publishes original editorial content across seven categories:{" "}
          <strong>UFO Sightings</strong>, <strong>Government Secrets</strong>,{" "}
          <strong>Alien Theories</strong>, <strong>Ancient Mysteries</strong>,{" "}
          <strong>Space &amp; NASA</strong>, <strong>Canadian Encounters</strong>, and{" "}
          <strong>Sci-Fi &amp; Science</strong>. We pay special attention to Canadian sightings and
          incidents — because this country has one of the most documented UFO histories in the world,
          and most Canadians have never heard about it.
        </p>

        <h2>Our Editorial Standards</h2>

        <p>
          <strong>Source-based reporting:</strong> Every claim in our articles is drawn from
          credible sources — government documents, peer-reviewed research, verified witness
          testimony, or official statements. We cite our sources and distinguish between confirmed
          facts and reported allegations.
        </p>

        <p>
          <strong>Honest hedging:</strong> We use words like "reportedly," "allegedly," and
          "according to witnesses" because intellectual honesty matters. We do not present
          unverified claims as established fact, and we do not sensationalise beyond what the
          evidence supports.
        </p>

        <p>
          <strong>Entertainment disclosure:</strong> Some of our content — particularly articles
          covering conspiracy theories, unverified sightings, and speculative science — is intended
          for entertainment and discussion purposes. We label these articles accordingly.
        </p>

        <h2>Advertising Disclosure</h2>

        <p>
          Canada Insider is ad-supported. We display advertisements via Google AdSense and
          potentially other ad networks. Advertising revenue supports the operation of this site.
          Advertisers have zero editorial influence over our content — we write what the evidence
          supports, not what sponsors prefer.
        </p>

        <h2>Contact Us</h2>

        <p>
          Have a tip, a sighting to report, a correction, or feedback? We read every message.
          Canada Insider is operated by a small, independent team with a genuine passion for this
          field. We are not affiliated with any government agency, intelligence organisation, or
          major media conglomerate.
        </p>

        <p>Thank you for reading. Keep looking up.</p>
      </div>
    </div>
  );
}
