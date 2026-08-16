import { PolicyPage, policyMeta } from "@/components/editorial/policy-page";

export const metadata = policyMeta(
  "Shipping",
  "How Kalpa dispatches specimens — tracked, insured where appropriate.",
);

export default function ShippingPage() {
  return (
    <PolicyPage title="Shipping" dek="Tracked. Packed as an object, not as a parcel filler.">
      <p>
        Dispatch is arranged after reservation is confirmed. Within India we use tracked courier. International shipping, duties and insurance are quoted before you pay — we will not surprise a customs form.
      </p>
      <p>
        Lead times depend on the stone and on any documentation requested. We do not print a fake 24-hour clock.
      </p>
    </PolicyPage>
  );
}
