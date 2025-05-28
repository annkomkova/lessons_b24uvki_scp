//проверяем загрузку страницы, чтобы код работал
document.addEventListener('DOMContentLoaded', () => {
  //______поиск элемента
  // let headerTag = document.querySelector('h1')
  // let headerClass = document.querySelector('.header')
  // let headerID = document.querySelector('#header')
  // let firstLink = document.querySelector('nav a')
  // let allLinks = document.querySelectorAll('nav a')
  // console.log(headerTag)
  // console.log(headerClass)
  // console.log(headerID)
  // console.log(firstLink)
  // console.log(allLinks)
  //_____взаимодействие с HTML
  // let demo = document.querySelector('#demo')
  // let buttonDemo = document.querySelector('.buttonDemo')
  // buttonDemo.addEventListener('click', () => {
  //   if (demo.innerHTML == 'Доброе утро!') {
  //     demo.innerHTML = 'Добрый день!'
  //   } else if (demo.innerHTML == 'Добрый день!') {
  //     demo.innerHTML = 'Добрый вечер!'
  //   } else {
  //     demo.innerHTML = 'Доброе утро!'
  //   }
  // })
  // let textByUser = prompt('Как тебя зовут?')
  // let userName = document.querySelector('.userName')
  // console.log(textByUser)
  // if (textByUser == null) {
  //   userName.innerHTML = 'Привет, незнакомец!'
  // } else if (textByUser == '') {
  //   userName.innerHTML = 'Привет, человек без имени!'
  // } else {
  //   userName.innerHTML = `Привет, ${textByUser}!`
  // }
  //_____взаимодействие с СSS
  let redBigCircle = document.querySelector('.circle')

  redBigCircle.addEventListener('click', () => {
    redBigCircle.classList.toggle('big')
    redBigCircle.classList.toggle('small')
  })

  let circles = document.querySelectorAll('.circle')
  circles.forEach((circle) => {
    circle.addEventListener('click', () => {
      circle.classList.toggle('red')
    })
  })
})
