import { PolicyPage, policyMeta } from "@/components/editorial/policy-page";

export const metadata = policyMeta(
  "Returns",
  "Kalpa’s return policy for unique gemstone specimens.",
);

export default function ReturnsPage() {
  return (
    <PolicyPage title="Returns" dek="A specimen is not a sweater.">
      <p>
        Unique stones cannot be restocked as a size run. If a stone arrives materially different from its description — species, treatment, or a damage in transit — contact the house within seven days of delivery. We will make it right.
      </p>
      <p>
        Change of mind is considered case by case, and only if the stone is unset, unaltered, and returned in its presentation. Custom work and stones reserved through private consultation may be non-returnable; we will say so before you pay.
      </p>
    </PolicyPage>
  );
}
