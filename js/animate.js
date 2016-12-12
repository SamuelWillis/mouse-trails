(function() {
  /**
   * @var {array} arr - The array of nodes that will trail the mouse.
   */
  var arr = [];

  /**
   * @var {number} x - The x position of the mouse
   */
  var x = 0;

  /**
   * @var {number} y - The y position of the mouse
   */
  var y = -100;

  /**
   * @listens document:mousemove
   * @param {object} e - The mouse move event.
   */
  addEventListener("mousemove", function(e) {
    x = e.pageX;
    y = e.pageY;
  });

  /**
   * Initialize the Pizzas
   *
   * @returns {undefined}
   */
  function initObjects() {
    for (var i = 0; i < 10; i++) {
      var pizza = new Pizza()
      document.body.appendChild(pizza.node);
      arr.push(pizza);
    }
  }

  /**
   * Move the Pizzas.
   * The next slice's position is found by adding the difference between the next slice and the
   * current slice's position multiplied by a coef to the current slice's position.
   *
   * This is a sinusoidal easing function with the following parameters:
   *
   * Beginning Position = currentSlice.x
   * Change = nextSlice.x - currentSlice.x
   * Time / Duration = 0.5
   *
   * TODO: Absract the easing and allow you to pick the easing function?
   *
   * @returns {undefined}
   */
  function movePizzas() {
    var newX = x;
    var newY = y;
    arr.forEach(function (slice, index, arr) {
      // Get the next slice of pizza in the array.
      // If you're at the last slice take the first slice.
      var nextSlice = (arr[index + 1]) ? arr[index + 1] : arr[0];
      // Update the slice's x and y.
      slice.x = newX;
      slice.y = newY;
      // Update the slice's position on the screen.
      slice.updatePosition();
      // Compute the nextSlice's x and y.
      newX += (nextSlice.x - slice.x) * Math.sin(.5 * (Math.PI / 2));
      newY += (nextSlice.y - slice.y) * Math.sin(.5 * (Math.PI / 2));
    });
  }
  function animate() {
    movePizzas();
    requestAnimationFrame(animate);
  }

  initObjects();
  animate();
})();
