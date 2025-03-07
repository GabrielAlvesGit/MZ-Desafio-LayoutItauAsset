document.addEventListener('DOMContentLoaded', () => {
  var dots = document.querySelectorAll('.js-dot');
  var slicks = document.querySelectorAll('.js-active-slick');
  dots[0].classList.add('active');
  slicks[0].classList.add('active');

  dots.forEach((dot, slicks) => {
    dot.addEventListener('click', (content) => {
      dots.forEach(dot => dot.classList.remove('active'));
      dot.classList.add('active');     
      content.classList.add('active');     
      slicks.classList.add('active');     
    }); 
  })  
});