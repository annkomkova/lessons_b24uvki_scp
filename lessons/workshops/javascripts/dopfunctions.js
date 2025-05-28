document.addEventListener('DOMContentLoaded', () => {
  flipCard()
  shakeImg()
  moveKittyOnSwitch()
  progressBar()
  drawSVG()
})

function flipCard() {
  let card = document.querySelector('.flip-card-inner')

  card.addEventListener('click', () => {
    card.classList.toggle('flip-card-animation')
  })
}

function shakeImg() {
  let img = document.querySelector('.shake-img')
  let text = document.querySelector('.shake-text')
  let counter = 0

  img.addEventListener('click', () => {
    counter++
    text.innerHTML = `Кликни ещё ${10 - counter} раз!`

    if (counter == 10) {
      img.classList.add('shake-img-animation')
      text.remove()
    }
  })
}

function moveKittyOnSwitch() {
  let checkbox = document.querySelector('input[type=checkbox]')

  checkbox.addEventListener('change', function () {
    let img = document.querySelector('.toggle-switch-animation')

    if (checkbox.checked) {
      img.classList.add('img-toggle-switch')
    } else {
      img.classList.remove('img-toggle-switch')
    }
  })
}

function progressBar() {
  let i = 0
  let button = document.querySelector('.progressButton')
  let smile = document.querySelector('.smile')
  let progressBar = document.querySelector('#myProgress')

  button.addEventListener('click', () => {
    if (i == 0) {
      i = 1
      let elem = document.getElementById('myBar')
      let width = 1
      let id = setInterval(frame, 30)

      function frame() {
        if (width >= 100) {
          clearInterval(id)
          i = 0
        } else {
          width++
          elem.style.width = width + '%'
        }
      }

      setTimeout(function () {
        if ((width = 100)) {
          button.remove()
          progressBar.remove()
          smile.style = 'display: block;'
        }
      }, 5000)
    }
  })
}

function drawSVG() {
  let star = document.querySelector('#star')
  let length = star.getTotalLength()

  star.style.strokeDasharray = length
  star.style.strokeDashoffset = length
  window.addEventListener('scroll', myFunction)

  function myFunction() {
    let scrollpercent =
      (document.body.scrollTop + document.documentElement.scrollTop) /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight)

    let draw = length * scrollpercent

    star.style.strokeDashoffset = length - draw
  }
}
