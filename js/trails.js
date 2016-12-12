/*
 * @var {array} arr - The array of nodes that will trail the mouse.
 */
var arr = [];

function Pizza() {
  this.x = -100;
  this.y = 0;
  this.node = (function() {
    var img = document.createElement("img");
    img.src = "img/pizza.png";
    return img;
  }());
}

Pizza.prototype.updatePosition = function() {
  this.node.style.left = this.x + "px";
  this.node.style.top = this.y + "px";
}


var x = 0;
var y = 0;
/**
 * @listens document:mousemove
 * @param {object} e - The mouse move event.
 */
addEventListener("mousemove", function(e) {
  x = e.pageX;
  y = e.pageY;
});

function initObjects() {
  for (var i = 0; i < 10; i++) {
    var pizza = new Pizza()
    document.body.appendChild(pizza.node);
    arr.push(pizza);
  }
}

function movePizzas() {
  var newX = x;
  var newY = y;
  arr.forEach(function (slice, index, arr) {
    var nextSlice = arr[index + 1] || arr[0];
    slice.x = newX;
    slice.y = newY;
    slice.updatePosition();
    newX += (nextSlice.x - slice.x) * .5;
    newY += (nextSlice.y - slice.y) * .5;
  });
}

function animate() {
  movePizzas();
  requestAnimationFrame(animate);
}
initObjects();
animate();
