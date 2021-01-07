const button = document.querySelector('.menu-toggler')
const menu = document.querySelector('.menu')

button.addEventListener('click', function(){
  menu.classList.toggle('is-open')
})
