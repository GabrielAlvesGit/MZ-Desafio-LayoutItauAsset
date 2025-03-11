document.addEventListener('DOMContentLoaded', () => {
  function slick() {
    var dots = document.querySelectorAll('.js-dot');
    var slicks = document.querySelectorAll('.js-active-slick');
    var slicksTitles = document.querySelectorAll('.js-active-title');
    var slicksLinks = document.querySelectorAll('.js-active-link');
    var ClassActive = 'active';

    // active
    dots[0].classList.add(ClassActive);
    slicks[0].classList.add(ClassActive);
    slicksTitles[0].classList.add(ClassActive);
    slicksLinks[0].classList.add(ClassActive);

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        // Dots Slick
        dots.forEach(dot => dot.classList.remove(ClassActive));
        dot.classList.add(ClassActive);      
        
        // IMG Slick
        slicks.forEach(slick => slick.classList.remove(ClassActive));
        slicks[index].classList.add(ClassActive);

        // Title Slick
        slicksTitles.forEach(slickTitle => slickTitle.classList.remove(ClassActive));
        slicksTitles[index].classList.add(ClassActive);

        // Link Slick
        slicksLinks.forEach(slickLink => slickLink.classList.remove(ClassActive));
        slicksLinks[index].classList.add(ClassActive);
      }); 
    })  
  } 

  slick();
});