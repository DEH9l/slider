const sliderItems = [...document.querySelectorAll('.hover-slider__item')];
const navItems = [...document.querySelectorAll('.hover-slider__nav__item')];

sliderItems.forEach((item, index) =>{
        item.dataset.index = index;
        if (index === 0){
            item.classList.add('hover-slider__item--active');
        }

});
navItems.forEach((item, index) =>{
item.dataset.index = index;
if (index === 0){
    item.classList.add('hover-slider__nav__item--active');
}

});
const toggleActivity = (index) => {
    console.log('index');
    for (let i = 0; i < sliderItems.length; i++) {
        if (i === Number(index)){
            sliderItems[i].classList.add('hover-slider__item--active');
            navItems[i].classList.add('hover-slider__nav__item--active');
        }
        else{
            sliderItems[i].classList.remove('hover-slider__item--active');
            navItems[i].classList.remove('hover-slider__nav__item--active');
        }
    }
}
document.querySelector('.hover-slider__nav').addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('hover-slider__nav__item')) {
        console.log('wlwk');
        toggleActivity(event.target.dataset.index);
    }
});