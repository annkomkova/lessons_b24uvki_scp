document.addEventListener('DOMContentLoaded', () => {
  const back = document.querySelector('.back')

  back.addEventListener('click', () => {
    window.history.back()
  })

  const section = document.querySelector('.objects')

  const elements = [
    {
      source: 'images/avto_fonar.jpeg',
      text: 'Автомобильный фонарь'
    },
    {
      source: 'images/careta_fonar.jpg',
      text: 'Каретный фонарь конца XIX века'
    },
    {
      source: 'images/fonarshik.jpg',
      text: 'Английский фонарщик'
    },
    {
      source: 'images/kerosin_lampy.jpg',
      text: 'Керосиновые лампы конца XIX - начала ХХ века'
    },
    {
      source: 'images/mysh_fonar.jpg',
      text: 'Фонарь «Летучая мышь»'
    },
    {
      source: 'images/swecha_fonar.jpg',
      text: 'Свечной фонарь XIX века'
    },
    {
      source: 'images/velosiped_fonar.jpeg',
      text: 'Велосипедный фонарь'
    }
  ]

  const i = Math.floor(elements.length * Math.random())

  const img = document.createElement('img')
  img.src = elements[i].source
  section.appendChild(img)

  const txt = document.createElement('p')
  txt.innerText = elements[i].text
  section.appendChild(txt)
})
