function onScroll() {
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
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content`)
