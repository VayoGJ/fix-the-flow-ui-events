let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

let color = document.querySelector(`a:nth-of-type(1)`)

color.addEventListener(`click`, colorchange)
color.addEventListener(`animationend`, colorchange)

function colorchange(){
  color.classList.toggle(`colorchange`)
}
