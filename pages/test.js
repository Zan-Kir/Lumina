let carouselInner = document.querySelector(".carousel-inner");
let carouselControlNext = document.querySelector(".carousel-control-next");
let carouselControlPrev = document.querySelector(".carousel-control-prev");
let carouselWidth = carouselInner.scrollWidth;
let cardWidth = document.querySelector(".carousel-item").offsetWidth;
let scrollPosition = 0;

carouselControlNext.addEventListener("click", function () {
  if (scrollPosition < (carouselWidth - cardWidth * 4)) {
    scrollPosition += cardWidth;
    carouselInner.scrollTo({
      left: scrollPosition,
      behavior: "smooth"
    });
  }
});

carouselControlPrev.addEventListener("click", function () {
  if (scrollPosition > 0) {
    scrollPosition -= cardWidth;
    carouselInner.scrollTo({
      left: scrollPosition,
      behavior: "smooth"
    });
  }
});

{
    let carouselInner = document.querySelector(".bordas2");
    let carouselControlNext = document.querySelector(".proximoBlog2");
    let carouselControlPrev = document.querySelector(".anteriorBlog2");
    let carouselWidth = carouselInner.scrollWidth;
    let cardWidth = document.querySelector(".itemBlog2").offsetWidth;
    let scrollPosition = 0;
    
    carouselControlNext.addEventListener("click", function () {
      if (scrollPosition < (carouselWidth - cardWidth * 4)) {
        scrollPosition += cardWidth;
        carouselInner.scrollTo({
          left: scrollPosition,
          behavior: "smooth"
        });
      }
    });
    
    carouselControlPrev.addEventListener("click", function () {
      if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        carouselInner.scrollTo({
          left: scrollPosition,
          behavior: "smooth"
        });
      }
    });
  }