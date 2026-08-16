import { PolicyPage, policyMeta } from "@/components/editorial/policy-page";

export const metadata = policyMeta(
  "Privacy",
  "How Kalpa handles the little personal data a gemstone house actually needs.",
);

export default function PrivacyPage() {
  return (
    <PolicyPage title="Privacy">
      <p>
        We collect what a reservation requires: name, contact, delivery address, and the content of messages you send. Payment data, when Razorpay is connected, is handled by Razorpay — not stored as card numbers in our files.
      </p>
      <p>
        We do not sell lists. The newsletter is optional. You may write to atelier@kalpa.house to see or erase what we hold, within the law that applies.
      </p>
    </PolicyPage>
  );
}
