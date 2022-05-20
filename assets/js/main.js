// Adicionando um evento direto na nossa janela inteira, para que eu possa controlar/gerenciar todo elemento que precisa do scroll e para não dar erro no carregamento da página. Porque ao carregar a pagina, carrega primeiro o HTML e depois os scripts, e o scroll não está funcionando por enquanto, porque não terminou de carregar todo o script. Fazendo dessa forma aqui, ele so vai realmente ativer o scroll quando ele a funçao escutar um evento(EventListener(ouvinte)) no caso o  scroll.
window.addEventListener('scroll', onScroll)

// Executando o onScroll uma unica vez apos carregar todo o script, para adicionar as classes apos carregar a pagina toda
onScroll()
function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();
}

function showNavOnScroll(){
  // O navigation agora é um objeto, a onde ele possui propriedades e métodos.
  // let navigation = document.getElementById('navigation')
  //  console.log(navigation);

  //ScrollY me mostra o posicionamento do meu scroll da vertical
  //  console.log(scrollY)
  if (scrollY >= 64) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  // console.log(scrollY)
  if (scrollY >= 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

// Por baixo dos panos do scrollReveal, o scroll ele é uma funçao que retorna um objeto, que tem chaves e dados ou seja propriedades, e metodos como o reveal, que é anonima
// function ScrollReveal() {
//   // return {
//   //   reveal: function (selector, delay, duration, distance, easing) {}
//   // }

//   let options = {
//     reveal: function (selector, delay, duration, distance, easing) {}
//   }

//   // Retornando o objeto de opçoes, a onde eu posso chamar as propriedades e metodos
//   return options
// }

// let options = ScrollReveal().reveal('.js-reveal', 0, 1000, '50px', 'ease-in-out');

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
}).reveal(`
  #home,
  #home header,
  #home .content,
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content,
  #contact,
  #contact header,
  #contact .content,
  #contact img,
  #footer,
  #footer a,
  #footer p,
  #footer .social-links`)
