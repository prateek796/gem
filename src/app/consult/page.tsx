"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Field, Input, Select, Textarea } from "@/components/ui/field";
import { PageFrame } from "@/components/ui/page-frame";
import { getAllSpecies } from "@/lib/catalog";
import { useState } from "react";

export default function ConsultPage() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  async function onSubmit(formData: FormData) {
    setError(null);
    const payload = Object.fromEntries(formData.entries());
    const res = await fetch("/api/consult", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      setError("Something did not send. Write to us directly, or try again.");
      return;
    }
    setSent(true);
  }

  return (
    <PageFrame>
      <div className="bg-ink py-20 text-ivory lg:py-28">
        <Container>
          <p className="caption text-ivory/50">Private client</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-light sm:text-6xl">
            Speak with a gemstone expert.
          </h1>
          <p className="mt-6 max-w-lg text-ivory/65">
            Not a contact form in costume. Tell us what you are trying to recognise. We will answer as a house.
          </p>
        </Container>
      </div>
      <Container className="grid gap-16 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-5">
          <p className="font-display text-2xl">We can help with</p>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-stone-dark">
            <li>Choosing between two stones</li>
            <li>Reading a laboratory report</li>
            <li>Birthstone or navaratna questions, as tradition</li>
            <li>A budget, stated plainly</li>
          </ul>
          {whatsapp ? (
            <a
              href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`}
              className="caption mt-10 inline-block"
            >
              WhatsApp the atelier →
            </a>
          ) : (
            <p className="mt-10 text-sm text-stone-dark">atelier@kalpa.house</p>
          )}
        </div>
        <div className="lg:col-span-7">
          {sent ? (
            <div className="border border-ink/10 p-10">
              <p className="caption">Received</p>
              <h2 className="mt-3 font-display text-3xl">We have your note.</h2>
              <p className="mt-4 text-stone-dark">
                A person will reply. If the matter is a particular specimen, name it — we keep no fake waiting list.
              </p>
            </div>
          ) : (
            <form action={onSubmit} className="space-y-6">
              <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
              <Field label="Name">
                <Input name="name" required />
              </Field>
              <Field label="Email">
                <Input name="email" type="email" required />
              </Field>
              <Field label="What are you looking for?">
                <Select name="intent" defaultValue="choose">
                  <option value="choose">Help choosing a gemstone</option>
                  <option value="certificate">A certification question</option>
                  <option value="meaning">Meaning / astrology as tradition</option>
                  <option value="other">Something else</option>
                </Select>
              </Field>
              <Field label="Species of interest">
                <Select name="gemstone" defaultValue="">
                  <option value="">Any</option>
                  {getAllSpecies().map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
                </Select>
              </Field>
              <Field label="Budget band">
                <Select name="budget" defaultValue="open">
                  <option value="20">Under ₹20,000</option>
                  <option value="80">₹20,000 – 80,000</option>
                  <option value="250">₹80,000 – 2,50,000</option>
                  <option value="250plus">Above ₹2,50,000</option>
                  <option value="open">Prefer to discuss</option>
                </Select>
              </Field>
              <Field label="A few sentences">
                <Textarea name="message" required placeholder="Colour, occasion, a stone you almost bought…" />
              </Field>
              {error ? <p className="text-sm text-red-800">{error}</p> : null}
              <Button type="submit">Send to the house</Button>
            </form>
          )}
        </div>
      </Container>
    </PageFrame>
  );
}
