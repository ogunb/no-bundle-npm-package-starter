/* eslint-disable prefer-const */

/**
 * Update document title with given argument.
 * @param {string} title - New document title
 */
export function setDocumentTitle (title) {
  document.title = title;
}

let clearTitleAnimation = () => {};
/**
 * Animates document title with current and given title with given interval.
 * @param {Object} options
 * @param {string} options.newTitle - Second title to display intervals.
 * @param {number} options.intervalTimer=2000 - Interval in milliseconds.
 * @param {number} options.duration - How long should animation take place.
 */
export function animateTitle ({ newTitle, intervalTimer = 2000, duration }) {
  clearTitleAnimation();

  let interval;
  let timeout;

  const oldTitle = document.title;
  clearTitleAnimation = () => {
    clearTimeout(timeout);
    clearInterval(interval);
    setDocumentTitle(oldTitle);
  };

  setDocumentTitle(newTitle);
  interval = setInterval(() => {
    setDocumentTitle(oldTitle);

    timeout = setTimeout(() => {
      setDocumentTitle(newTitle);
    }, intervalTimer / 2);
  }, intervalTimer);

  if (duration) {
    setTimeout(clearTitleAnimation, duration);
  }

  return clearTitleAnimation;
}

/**
 * Update document body overflow-y with given argument.
 * @param {string} overflow='' - New overflow
 */
export function setBodyOverflow (overflow = '') {
  document.body.style.overflowY = overflow;
}

/**
 * Check whether the user is actively viewing the page or it's in the background.
 * @param {Function} callback - Called when the document was in the background and returns to foreground.
 */
export function isDocumentInForeground (callback) {
  if (document.hidden && callback) {
    let interval;
    interval = setInterval(() => {
      if (!document.hidden) {
        clearInterval(interval);
        callback();
      }
    }, 1000);
  }

  return !document.hidden;
}
