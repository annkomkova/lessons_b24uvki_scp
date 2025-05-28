document.addEventListener('DOMContentLoaded', () => {
  showBurgerMenu()
})

function showBurgerMenu() {
  document.querySelector('#burger').addEventListener('click', () => {
    document.querySelector('#burger').classList.toggle('active')
  })
}
