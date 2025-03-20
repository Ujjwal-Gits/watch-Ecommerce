// tHIS Functin isto display the added to cart message
document.addEventListener("DOMContentLoaded", function () {
  var addToCartImages = document.querySelectorAll(
    ".add-to-cart-img, .cart-img"
  );
  for (let img of addToCartImages) {
    img.onclick = function () {
      alert("Your product has been added to the cart!");
    };
  }
});

// This Function Runs After Filling the NewsLetter Form
document
  .querySelector(".newsletter form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    alert("Now, you will receive an email when new products arrive!");
  });

// Thiss Function is for the Slider
const s = document.querySelector(".row-1"),
  p = document.querySelectorAll(".watch-box"),
  l = document.getElementById("left"),
  r = document.getElementById("right");

let i = 0,
  w = p[0].offsetWidth + 10;

const u = () => {
  s.style.transition = "transform 0.5s ease-in-out";
  s.style.transform = `translateX(-${i * w}px)`;
};

[l, r].forEach(
  (btn, j) =>
    (btn.onclick = () => ((i += j ? i < p.length - 4 : i > 0 ? -1 : 0), u()))
);
window.onresize = u;
