import { NextRequest, NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";
import { getProductById } from "@/lib/catalog";

export async function POST(request: NextRequest) {
  const limited = rateLimit(request, "checkout", 8);
  if (!limited.ok) {
    return NextResponse.json({ error: "Please wait a moment." }, { status: 429 });
  }

  const body = (await request.json()) as {
    name?: string;
    email?: string;
    productIds?: string[];
  };

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const productIds = Array.isArray(body.productIds) ? body.productIds : [];

  if (name.length < 2 || !email.includes("@") || productIds.length === 0) {
    return NextResponse.json({ error: "Incomplete reservation." }, { status: 400 });
  }

  const missing = productIds.filter((id) => !getProductById(id));
  if (missing.length) {
    return NextResponse.json({ error: "A specimen is no longer listed." }, { status: 409 });
  }

  const paymentsReady = Boolean(
    process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET,
  );

  return NextResponse.json({
    ok: true,
    mode: paymentsReady ? "razorpay" : "reserve",
    orderId: `ord-${Date.now()}`,
  });
}
