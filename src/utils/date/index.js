import dayjs from 'dayjs';

/**
 * @param {string | number | Date} date - Date to be formatted.
 * @param {Object} options
 * @param {string} options.format='DD MMMM YYYY HH:mm' - Format.
 * @returns {string} Formatted date as string.
 */
export function formatDate (date, { format = 'DD MMMM YYYY HH:mm' } = {}) {
  return dayjs(date).format(format);
}
