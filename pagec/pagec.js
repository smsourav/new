
window.onload = addEventListener("load", ()=> {
    var pre = document.querySelector("div.preloader");
    pre.classList += " preadd";
});


const cl11 = document.getElementById('cl11');
const cl12 = document.getElementById('cl12');
const cl13 = document.getElementById('cl13');
const cp11 = document.getElementById('cp11');

cl11.addEventListener('click', ()=> {
    cl11.classList.add('active');
    cl12.classList.remove('active');
    cl13.classList.remove('active');
    cp11.style.transform = 'translateX(0%)';

})
cl12.addEventListener('click', ()=> {
    cl12.classList.add('active');
    cl11.classList.remove('active');
    cl13.classList.remove('active');
    cp11.style.transform = 'translateX(-33.33%)';

    
})
cl13.addEventListener('click', ()=> {
    cl13.classList.add('active');
    cl11.classList.remove('active');
    cl12.classList.remove('active');
    cp11.style.transform = 'translateX(-66.66%)';

    
})