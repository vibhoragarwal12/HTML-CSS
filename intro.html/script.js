document.addEventListener("DOMContentLoaded", function() {
  const ball1 = document.getElementById("ball1");
  const ball2 = document.getElementById("ball2");

  function checkCollision() {
    const rect1 = ball1.getBoundingClientRect();
    const rect2 = ball2.getBoundingClientRect();

    if (!(rect1.right < rect2.left ||
          rect1.left > rect2.right ||
          rect1.bottom < rect2.top ||
          rect1.top > rect2.bottom)) {
      // Collision detected
      ball1.style.animationPlayState = 'paused';
      ball2.style.animationPlayState = 'paused';
    }
  }

  setInterval(checkCollision, 100);
});
