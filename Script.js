const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slides[index].classList.add("active");
  currentSlide = index;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// auto slide
setInterval(nextSlide, 3000);
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
