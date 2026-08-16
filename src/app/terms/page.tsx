import { PolicyPage, policyMeta } from "@/components/editorial/policy-page";

export const metadata = policyMeta(
  "Terms",
  "Terms of use for the Kalpa house website and reservations.",
);

export default function TermsPage() {
  return (
    <PolicyPage title="Terms">
      <p>
        The site is an invitation to reserve specimens, not an auction and not medical advice. Descriptions are given in good faith. Colour on a screen is not colour in a room.
      </p>
      <p>
        Title passes when payment is confirmed and the stone is dispatched. Until then, a reservation may fail if a stone is already placed — we will not take money for a ghost.
      </p>
      <p>
        Astrology and traditional meaning are cultural content. They are not guarantees.
      </p>
    </PolicyPage>
  );
}
