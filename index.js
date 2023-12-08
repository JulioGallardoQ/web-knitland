
//using the classes welcome-animation and slider text 
//to make the eventListener with them
const welcomeAnimation = document.querySelector('.welcome-animation');
const sliderText = document.querySelector('.slider-text');

//event listener that will help us to show the second animation affter the first animation on
//the home page is finished to no overlap the animations 
welcomeAnimation.addEventListener('animationend', () => {
  sliderText.classList.add('visible');
});