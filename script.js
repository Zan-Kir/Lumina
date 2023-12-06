{
  let carouselInner = document.querySelector(".carouselBlog");
  let carouselControlNext = document.querySelector(".proximoBlog");
  let carouselControlPrev = document.querySelector(".anteriorBlog");
  let carouselWidth = carouselInner.scrollWidth;
  let cardWidth = document.querySelector(".itemBlog").offsetWidth;
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

function troca(botao) {
    // Remove a classe 'ativo' de todos os botões
    var botoes = document.querySelectorAll('.botoesPrincipais button');
    botoes.forEach(function (btn) {
      btn.classList.remove('ativo');
    });

    // Adiciona a classe 'ativo' apenas ao botão clicado
    botao.classList.add('ativo');
}
