import { Accordion } from "@/components/ui/accordion";
import { PolicyPage, policyMeta } from "@/components/editorial/policy-page";

export const metadata = policyMeta(
  "FAQ",
  "Practical questions about Kalpa specimens, certificates and meaning.",
);

const faqs = [
  {
    q: "Are the stones photographed?",
    a: "The plates you see now are museum studies — placeholders for photography we will not fake. When a specimen is photographed, the image replaces the study.",
  },
  {
    q: "Do you fabricate certificates?",
    a: "No. A report appears only if a file exists. Otherwise we offer documentation on request.",
  },
  {
    q: "Is astrology scientific here?",
    a: "No. We present traditional and cultural associations. We do not claim medical, financial or supernatural results.",
  },
  {
    q: "Can I return a unique specimen?",
    a: "See Returns. Unique stones are not fashion e-commerce. The policy is conservative and written to be kept.",
  },
  {
    q: "Natural or laboratory-grown?",
    a: "Always labelled. Laboratory material is not a counterfeit when disclosed; it is a different chapter, priced as such.",
  },
];

export default function FaqPage() {
  return (
    <PolicyPage title="Questions" dek="Short answers. Longer ones live in the journal.">
      <Accordion
        items={faqs.map((item) => ({
          title: item.q,
          body: item.a,
        }))}
      />
    </PolicyPage>
  );
}
