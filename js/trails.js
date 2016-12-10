/**
 * @var {number} counter - The index of the pizza to move
 */
var counter = 0;

/**
 * @listens document:mousemove
 * @param {object} e - The mouse move event.
 */
addEventListener("mousemove", function(e) {
  arr[counter].style.left = (e.pageX) + "px";
  arr[counter].style.top = (e.pageY) + "px";
  counter = (counter + 1) % arr.length;
});

/*
 * @var {array} arr - The array of nodes that will trail the mouse.
 */
var arr = [];

(function initObjects() {
  for (var i = 0; i < 10; i++) {
    var img = document.createElement("img");
    img.style.left = -100 + "px";
    img.src = "img/pizza.png";
    document.body.appendChild(img);
    arr.push(img);
  }
})();
