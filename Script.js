const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;
let autoSlide;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
  });

  slides[index].classList.add("active");
  dots[index].classList.add("active");
  currentSlide = index;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function startAutoSlide() {
  autoSlide = setInterval(nextSlide, 3500);
}

function stopAutoSlide() {
  clearInterval(autoSlide);
}

showSlide(currentSlide);
startAutoSlide();

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
    stopAutoSlide();
    startAutoSlide();
  });
});
