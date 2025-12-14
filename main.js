const contact = document.querySelector('.contact-container')
const contactButtonOpen = document.querySelector('header div')


contactButtonOpen.addEventListener('click', () => {
  contact.style.display = 'flex'
  document.body.style.overflow = 'hidden'
})

contact.addEventListener('click', () => {
  if (event.target === contact) {
    contact.style.display = 'none'
    document.body.style.overflow = 'auto'
  }
})