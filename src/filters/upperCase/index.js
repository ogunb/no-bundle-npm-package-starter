/**
 * Returns uppercased string.
 * It'll use String.prototype.toLocaleUpperCase to regard Turkish letters when available.
 * Or else it will just return with String.prototype.toUpperCase
 * @param {string} string - Any string
 */
export function upperCase (string) {
  if (String.prototype.toLocaleUpperCase) {
    return string.toLocaleUpperCase('tr-TR');
  }

  return string.toUpperCase();
}
