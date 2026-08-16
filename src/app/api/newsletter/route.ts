import { NextRequest, NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  const limited = rateLimit(request, "newsletter", 10);
  if (!limited.ok) {
    return NextResponse.json({ error: "Please wait." }, { status: 429 });
  }

  const contentType = request.headers.get("content-type") ?? "";
  let email = "";
  if (contentType.includes("application/json")) {
    const body = (await request.json()) as { email?: string };
    email = String(body.email ?? "");
  } else {
    const form = await request.formData();
    email = String(form.get("email") ?? "");
  }

  if (!email.includes("@")) {
    return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
  }

  return NextResponse.redirect(new URL("/?letter=1", request.url), 303);
}
