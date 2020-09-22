const slides=document.querySelectorAll('.slide');
const carousel=document.getElementById('carousel');
const left=document.getElementById('left');
const right=document.getElementById('right');
const SLIDES_COUNT=slides.length;

let currSlide=0;

left.addEventListener('click',()=>{
currSlide--;
if(currSlide < 0){
	currSlide=SLIDES_COUNT-1;
}
updateCarousel();
});
right.addEventListener('click',()=>{
currSlide++;
if(currSlide > SLIDES_COUNT -1){
	currSlide=0;
}
updateCarousel();
});

function updateCarousel(){
	carousel.style.transform=`translateX(${-currSlide * slides[0].offsetWidth}px)`;
	document.body.style.background=`${slides[currSlide].getAttribute("data-bg")}`;
}