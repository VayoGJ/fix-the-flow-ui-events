let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

let color = document.querySelector(`a:nth-of-type(1)`)

console.log(color);

color.addEventListener(`click`, change)
color.addEventListener(`animationend`, change)

function change(){
  color.classList.toggle(`change`)
}
