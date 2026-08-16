import { PolicyPage, policyMeta } from "@/components/editorial/policy-page";

export const metadata = policyMeta(
  "Care",
  "How to live with a gemstone without theatre or neglect.",
);

export default function CarePage() {
  return (
    <PolicyPage title="Care" dek="Hardness is not immortality.">
      <p>
        Corundum (ruby, sapphire) and diamond tolerate daily wear. Emerald, opal, pearl and tanzanite do not enjoy ultrasonic baths, sudden heat, or household chemicals.
      </p>
      <p>
        Wipe with a slightly damp, unperfumed cloth. Store separately — diamond will scratch almost everything else. Opal and pearl prefer not to dry out in a safe for years without air.
      </p>
      <p>
        If a stone is set later, tell the setter the species. Heat and pressure that suit a sapphire can undo an emerald.
      </p>
    </PolicyPage>
  );
}
