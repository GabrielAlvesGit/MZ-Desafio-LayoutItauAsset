var topMenuItems = document.querySelectorAll('.js-active');
topMenuItems[0].classList.add("active");

topMenuItems.forEach(topMenuItem => {
  topMenuItem.addEventListener("click", (e) => {
    topMenuItems.forEach (topMenuItem => topMenuItem.classList.remove('active'));
    topMenuItem.classList.toggle('active');
    e.preventDefault();
  })
});

// Função de Languages
function toggleLanguages () {
  const languagesPT = document.querySelector('.js-active-pt'); 
  const languagesEN = document.querySelector('.js-active-en'); 
  languagesEN.classList.add('active');

  languagesEN.addEventListener('click', () => {
    languagesPT.classList.add('active');
    languagesEN.classList.remove('active');
  });

  languagesPT.addEventListener('click', () => {
    languagesPT.classList.remove('active');
    languagesEN.classList.add('active');
  });
  
}
toggleLanguages();