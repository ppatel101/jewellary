export function formatPrice(price: number): string {
  return `₹${price.toLocaleString('en-IN')}`;
}

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}
