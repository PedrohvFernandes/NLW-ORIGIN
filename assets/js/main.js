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

function openMenu (){
  document.body.classList.add('menu-expanded')
}

function closeMenu(){
  document.body.classList.remove('menu-expanded')
}