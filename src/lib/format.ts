const inr = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export function formatPrice(amountInr: number): string {
  return inr.format(amountInr);
}

export function formatCarat(carat: number): string {
  return `${carat.toFixed(carat % 1 === 0 ? 0 : 2)} ct`;
}

export function formatDimensions(mm: {
  l: number;
  w: number;
  d: number;
}): string {
  return `${mm.l} × ${mm.w} × ${mm.d} mm`;
}
