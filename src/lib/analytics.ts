export type AnalyticsEvent =
  | "product_viewed"
  | "search"
  | "filter"
  | "quiz_started"
  | "quiz_completed"
  | "recommendation_clicked"
  | "wishlist_added"
  | "add_to_cart"
  | "checkout_started"
  | "purchase"
  | "consultation_requested"
  | "certificate_viewed";

export function track(
  event: AnalyticsEvent,
  payload?: Record<string, string | number | boolean | undefined>,
) {
  if (process.env.NODE_ENV !== "production") {
    console.info("[kalpa]", event, payload ?? {});
  }
  if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_GA_ID) {
    const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
    gtag?.("event", event, payload);
  }
}
