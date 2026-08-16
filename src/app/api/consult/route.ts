import { NextRequest, NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  const limited = rateLimit(request, "consult", 8);
  if (!limited.ok) {
    return NextResponse.json({ error: "Please wait a moment." }, { status: 429 });
  }

  const body = (await request.json()) as Record<string, unknown>;
  if (typeof body.company === "string" && body.company.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();
  if (name.length < 2 || !email.includes("@") || message.length < 8) {
    return NextResponse.json({ error: "Please complete the note." }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
