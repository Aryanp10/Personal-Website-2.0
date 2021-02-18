window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementsByClassName("nav_menu");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// PROJECTS LARGE BOX

function showBookingDB() {
  div = document.getElementById('Booking');
  if(div.style.display == "block"){
div.style.display = "none"
      document.getElementById('Default').style.display = "block"

  }
  else{
      document.getElementById('Default').style.display = "none"
      document.getElementById('College').style.display = "none"
      document.getElementById('Personal').style.display = "none"
      document.getElementById('WebS').style.display = "none"
    div.style.display="block"
  }
}

function showCollegeBuddy() {
  div = document.getElementById('College');
  if(div.style.display == "block"){
div.style.display = "none"
      document.getElementById('Default').style.display = "block"

  }
  else{
      document.getElementById('Default').style.display = "none"
      document.getElementById('Booking').style.display = "none"
      document.getElementById('Personal').style.display = "none"
      document.getElementById('WebS').style.display = "none"
    div.style.display="block"
  }
}

function showPersonalWeb() {
  div = document.getElementById('Personal');
  if(div.style.display == "block"){
div.style.display = "none"
      document.getElementById('Default').style.display = "block"

  }
  else{
      document.getElementById('Default').style.display = "none"
      document.getElementById('College').style.display = "none"
      document.getElementById('Booking').style.display = "none"
      document.getElementById('WebS').style.display = "none"
    div.style.display="block"
  }
}

function showWebScraper() {
  div = document.getElementById('WebS');
  if(div.style.display == "block"){
div.style.display = "none"
      document.getElementById('Default').style.display = "block"
  }
  else{
      document.getElementById('Default').style.display = "none"
      document.getElementById('College').style.display = "none"
      document.getElementById('Personal').style.display = "none"
      document.getElementById('Booking').style.display = "none"
    div.style.display="block"
  }
}

// MODAL

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}