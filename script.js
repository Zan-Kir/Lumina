{
  let carouselBlog = document.querySelector(".carouselBlog");
  let proximoBlog = document.querySelector(".proximoBlog");
  let anteriorBlog = document.querySelector(".anteriorBlog");
  let tamanhoCarousel = carouselBlog.scrollWidth;
  let tamanhoCard = document.querySelector(".itemBlog").offsetWidth;
  let posicao = 0;
  
  proximoBlog.addEventListener("click", function () {
    if (posicao < (tamanhoCarousel - tamanhoCard * 4)) {
      posicao += tamanhoCard;
      carouselBlog.scrollTo({
        left: posicao,
        behavior: "smooth"
      });
    }
  });
  
  anteriorBlog.addEventListener("click", function () {
    if (posicao > 0) {
      posicao -= tamanhoCard;
      carouselBlog.scrollTo({
        left: posicao,
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
