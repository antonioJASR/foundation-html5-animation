/**
 * Identify the where the cursor pointer is inside
 * the HTML element
 * @param {HTMLElement} element
 * @returns Object mouse
 */
export function captureMouse(element) {
  const mouse = { x: 0, y: 0 };

  element.addEventListener('mousemove', function (event) {
    mouse.x = event.pageX - element.offsetLeft;
    mouse.y = event.pageY - element.offsetTop;
  });

  return mouse;
}

/**
 * @param {HTMLElement} element
 * @param {Object} touch
 */
export function captureTouch(element) {
  const touch = {
    x: undefined,
    y: undefined,
    isPressed: false,
  };

  element.addEventListener('touchstart', function (_event) {
    touch.isPressed = true;
  });

  element.addEventListener('touchend', function (_event) {
    touch.isPressed = false;
    touch.x = undefined;
    touch.y = undefined;
  });

  element.addEventListener('touchmove', function (event) {
    const touchEvent = event.touches[0];

    touch.x = touchEvent.pageX - element.offsetLeft;
    touch.y = touchEvent.pageY - element.offsetTop;
  });

  return touch;
}
