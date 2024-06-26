// eslint-disable-next-line @typescript-eslint/no-unused-vars
function simple_throttle(callback, limit) {
  let waiting = false; // Initially, we're not waiting
  return function () {
    // We return a throttled function
    if (!waiting) {
      // If we're not waiting
      // eslint-disable-next-line prefer-rest-params
      callback.apply(this, arguments); // Execute users function
      waiting = true; // Prevent future invocations
      setTimeout(function () {
        // After a period of time
        waiting = false; // And allow future invocations
      }, limit);
    }
  };
}
simple_throttle('', '');
