var topMenuItems = document.querySelectorAll('.js-active');

topMenuItem[2] =  topMenuItem.classList.toggle('active');

topMenuItems.forEach(topMenuItem => {
  topMenuItem.addEventListener("click", () => {

    topMenuItem.classList.toggle('active');
  })
});
