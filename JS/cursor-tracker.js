var balls = document.getElementsByClassName("ball");
document.onmousemove = function () {
  var x = (event.clientX * 100) / window.innerWidth + "%";
  var y = (event.clientY * 100) / window.innerHeight + "%";
  // Event.ClientX = get the horizontal coordinates of the mouse on mousemove
  // Event.ClientY = get the vertical coordinates of the mouse on mousemove
  // window.innerWidth => get the browser width
  // window.innerHeight => get the browser height

  for (var i = 0; i < 2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].style.transform = "translate(-" + x + ", -" + y + ")";
  }
};
