document.addEventListener('DOMContentLoaded', () => {
  mouseMoveEyes()
  mouseMoveStatus()
  showRandomWord()
})

function showRandomWord() {
  let text = document.querySelector('.random p')
  let button = document.querySelector('.random div')

  let words = [
    'пикми гёрл',
    'пикми бой',
    'котик Плюшка',
    'собачка Плюшка',
    'мышка Плюшка',
    'добрый',
    'сок Добрый',
    'злой',
    'просто молодец',
    'готов к сессии',
    'не готов к сессии',
    'готов к ЦГ на 100%',
    'готов к ЦГ на 0%'
  ]

  button.addEventListener('click', () => {
    let index = Math.floor(Math.random() * words.length)

    text.innerHTML = `Сегодня ты ${words[index]})))`
  })
}

function mouseMoveStatus() {
  let coords = document.querySelector('.coords')
  let status = document.querySelector('.status')
  let container = document.querySelector('.container')

  document.addEventListener('mousemove', () => {
    coords.innerHTML = `X: ${event.pageX}; Y: ${event.pageY}`

    let x = container.offsetWidth / 2 + container.offsetLeft

    if (x < event.pageX) {
      status.classList.add('status-anim-right')
      status.classList.remove('status-anim-left')
    } else {
      status.classList.remove('status-anim-right')
      status.classList.add('status-anim-left')
    }
    // if (x < event.pageX) {
    //   status.innerHTML = 'право'
    // } else {
    //   status.innerHTML = 'лево'
    // }
  })
}

function mouseMoveEyes() {
  let moveArea = document.querySelector('.moveArea')

  moveArea.addEventListener('mousemove', () => {
    let eyes = document.querySelectorAll('.eye')

    eyes.forEach((eye) => {
      let x = eye.offsetWidth / 2 + eye.offsetLeft
      let y = eye.offsetHeight / 2 + eye.offsetTop
      let rad = Math.atan2(event.pageX - x, event.pageY - y)
      let rot = (180 / Math.PI) * rad * -1

      eye.style = `transform: rotate(${rot}deg)`
    })
  })
}
