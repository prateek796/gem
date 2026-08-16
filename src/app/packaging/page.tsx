import { PolicyPage, policyMeta } from "@/components/editorial/policy-page";

export const metadata = policyMeta(
  "Packaging",
  "How a Kalpa specimen is presented when it leaves the house.",
);

export default function PackagingPage() {
  return (
    <PolicyPage title="From our hands to yours" dek="The box is not a billboard. It is a pause.">
      <p>
        Each stone leaves in a rigid box, wrapped in acid-free tissue, with a card stating species, weight, origin as known, treatment as known, and traditional associations — framed as tradition.
      </p>
      <p>
        No plastic grass, no false wax, no certificate we did not issue. If a laboratory report exists, it travels with the stone.
      </p>
    </PolicyPage>
  );
}
