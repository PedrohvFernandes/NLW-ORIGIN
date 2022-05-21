// Adicionando um evento direto na nossa janela inteira, para que eu possa controlar/gerenciar todo elemento que precisa do scroll e para não dar erro no carregamento da página. Porque ao carregar a pagina, carrega primeiro o HTML e depois os scripts, e o scroll não está funcionando por enquanto, porque não terminou de carregar todo o script. Fazendo dessa forma aqui, ele so vai realmente ativer o scroll quando ele a funçao escutar um evento(EventListener(ouvinte)) no caso o  scroll.
window.addEventListener('scroll', onScroll)

// Executando o onScroll uma unica vez apos carregar todo o script, para adicionar as classes apos carregar a pagina toda
onScroll()
function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();

  activateMenuAtCurrentSection(home);
  // activateMenuAtCurrentSection(services);
  // activateMenuAtCurrentSection(about);
  // activateMenuAtCurrentSection(contact);
}

// Ativar o menu na seção do momento
function activateMenuAtCurrentSection(section) {
  // // Visão da view port
  // console.log(innerHeight);
  // // Calculo pra eu ter a visao da onde é que eu estou na minha linha imaginaria da viewport do documento
  // console.log(scrollY + innerHeight / 2);

  // Linha alvo, nunca vai mudar o valor, sempre vai ter esse valor, mas essa função é executado a todo momento que eu faço scroll no onScroll. Ou seja toda vez que eu fizer scroll esse metodo é executado e estou recriando essa targetLine, porque ela não pode ser reatribuida por ser uma const, nunca mais muda seu valor. Estados diferentes, porque ela não pode ser reatribuida. Estado da minha aplicação, momento especifico que alguma coisa esta acontecendo minhas variaveis tudo da minha aplicação tem um determinado valor, mas momento depois sao valores diferentes a onde que eu so mudo o estado desse bloco de codigo, mas a const continua a mesma coisa, porque ela Ñ foi reatribuida 
  const targetLine = scrollY + innerHeight / 2;
  console.log('Linha alvo: ', targetLine);
  // verificar se o topo da seção passou da linha, ou seja tem que estar acima da linha imaginaria e se a parte de baixo da section tem que estar abaixo(final dele) da linha
  // Quais dados vou precisar ? topo da seçao de cada seçao , linha imaginaria da seçao(targetLine), altura de cada seçao

  // Pegando o topo da seção
  const sectionTop = section.offsetTop
  console.log('Topo da seção: ', sectionTop)

  // Pegando a altura da section para pegar o final da section, que é o topo + o height da seção
  const sectionHeight = section.offsetHeight
  console.log('Altura da seção: ', sectionHeight)

  // seção do topo chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
  // Info dos dados
  console.log('O topo da seção chegou ou passou da linha ? ', sectionTopReachOrPassedTargetLine)

  // Verificar se a base está abaixo da linha alvo
  // Quais dados vou precisar ?

  // A seção termina onde? por exemplo no home: sectionTop = 0 + sectionHeight = 834 = 834. E a onde ela termina é o topo da outra seçao, ou seja o service o  sectionTop é 834 + sectionHeight = 1023 = 1857 ...
  const sectionEndsAt = sectionTop + sectionHeight
  console.log('final da seçao que é o topo + altura da seçao: ', sectionEndsAt)
  
  // O final da seção ultrapassou a linha alvo
  const sectionEndPassedTargetLine =  sectionEndsAt <= targetLine
  // Info dos dados
  console.log('O fundo da seção passou da linha ? ', sectionEndPassedTargetLine)


  // limites da seçao
  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine
  // Info dos dados
  console.log('Limite da seção ? ', sectionBoundaries)

  // Ele olha se dentro do elemento .menu a eu tenho um href e se dentro do href tem o nome do id da seçao, por exemplo #home, #about que eu estou passando com o getAttribute(id) que pega o atributo id da seçao que estou passando pra essa função, ou seja em vez de pegar o home inteiro que é um objeto, eu so pego o id da seçao que estou passando pra ca.
  const sectionId = section.getAttribute('id')
  const menuElement = document
  .querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  // Se ele achar, ele adiciona a classe active na tag a
  if(sectionBoundaries){
    menuElement.classList.add('active')	
  }
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