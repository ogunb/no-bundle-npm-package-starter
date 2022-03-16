/**
 * Returns formatted price in double.
 * It'll use Intl.NumberFormat function when available with `'tr-TR', { minimumFractionDigits: 2 }` params.
 * Or else it will return .toFixed(2) of the given number.
 * @param {number} price - It can be float or int.
 */
export function formatPrice (price) {
  if (Intl && Intl.NumberFormat) {
    return new Intl.NumberFormat('tr-TR', { minimumFractionDigits: 2 }).format(
      price,
    );
  }

  if (price <= 0) {
    return '0.00';
  }

  return price.toFixed(2);
}
