document.addEventListener('DOMContentLoaded', () => {
  animatePopup()
  makeBeautyBox()
  animateCursor()
})

function animateCursor() {
  let cursor = document.querySelector('#cursor')

  document.addEventListener('mousemove', () => {
    let x = event.pageX
    let y = event.pageY

    cursor.style.cssText = `top: ${y}px; left: ${x}px;`
  })

  document.addEventListener('click', () => {
    cursor.classList.add('active')

    setTimeout(() => {
      cursor.classList.remove('active')
    }, 400)
  })
}

function makeBeautyBox() {
  let left = document.querySelector('#left')
  let top = document.querySelector('#top')
  let body = document.querySelector('#body')
  let box = document.querySelector('#box')

  document.addEventListener('mousemove', (event) => {
    let cursorX = event.pageX
    let cursorY = event.pageY

    left.innerHTML = `курсор X: ${cursorX}`
    top.innerHTML = `курсор Y: ${cursorY}`

    let bodySizeX = document.documentElement.clientWidth
    let bodySizeY = document.documentElement.clientHeight
    let halfBodySizeX = bodySizeX / 2
    let halfBodySizeY = bodySizeY / 2

    body.innerHTML = `центр экрана по X: ${halfBodySizeX}px, по Y: ${halfBodySizeY}px`

    let eq1 = cursorX < halfBodySizeX
    let eq2 = cursorX > halfBodySizeX
    let eq3 = cursorY < halfBodySizeY
    let eq4 = cursorY > halfBodySizeY

    let img0 = box.querySelector('#img0')
    let img1 = box.querySelector('#img1')
    let img2 = box.querySelector('#img2')
    let img3 = box.querySelector('#img3')

    if (eq1 && eq3) {
      img0.style.cssText = 'opacity: 1;'
    } else {
      img0.style.cssText = 'opacity: 0;'
    }
    if (eq2 && eq3) {
      img1.style.cssText = 'opacity: 1;'
    } else {
      img1.style.cssText = 'opacity: 0;'
    }

    if (eq2 && eq4) {
      img2.style.cssText = 'opacity: 1;'
    } else {
      img2.style.cssText = 'opacity: 0;'
    }

    if (eq1 && eq4) {
      img3.style.cssText = 'opacity: 1;'
    } else {
      img3.style.cssText = 'opacity: 0;'
    }
  })
}

function animatePopup() {
  let button = document.querySelector('.popupButton')
  let popup = document.querySelector('.popup')

  button.addEventListener('click', () => {
    let like = document.createElement('div')
    like.innerHTML = '♥'
    like.classList.add('popupEl')

    popup.appendChild(like)
  })
}
