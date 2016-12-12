/**
 * The constructor for a pizza slice.
 *
 * @returns {Object} The pizza slice.
 */
function Pizza() {
  this.x = -100;
  this.y = 0;
  this.node = (function() {
    var img = document.createElement("img");
    img.src = "img/pizza.png";
    return img;
  }());
}

/**
 * Update the position of the pizza slice on the screen.
 *
 * @returns {undefined}
 */
Pizza.prototype.updatePosition = function() {
  this.node.style.left = this.x + "px";
  this.node.style.top = this.y + "px";
}
