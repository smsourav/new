
window.onload = addEventListener("load", ()=> {
    var pre = document.querySelector("div.preloader");
    pre.classList += " preadd";
});


const cl11 = document.getElementById('cl11');
const cl12 = document.getElementById('cl12');
const cl13 = document.getElementById('cl13');
const cp11 = document.getElementById('cp11');

const cl21 = document.getElementById('cl21');
const cl22 = document.getElementById('cl22');
const cl23 = document.getElementById('cl23');
const cp21 = document.getElementById('cp21');

const cl31 = document.getElementById('cl31');
const cl32 = document.getElementById('cl32');
const cl33 = document.getElementById('cl33');
const cl34 = document.getElementById('cl34');
const cl35 = document.getElementById('cl35');
const cp31 = document.getElementById('cp31');

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
cl21.addEventListener('click', ()=> {
    cl21.classList.add('active');
    cl22.classList.remove('active');
    cl23.classList.remove('active');
    cp21.style.transform = 'translateX(0%)';

})
cl22.addEventListener('click', ()=> {
    cl22.classList.add('active');
    cl21.classList.remove('active');
    cl23.classList.remove('active');
    cp21.style.transform = 'translateX(-33.33%)';

    
})
cl23.addEventListener('click', ()=> {
    cl23.classList.add('active');
    cl21.classList.remove('active');
    cl22.classList.remove('active');
    cp21.style.transform = 'translateX(-66.66%)';

    
})

cl31.addEventListener('click', ()=> {
    cl31.classList.add('active');
    cl32.classList.remove('active');
    cl33.classList.remove('active');
    cl34.classList.remove('active');
    cl35.classList.remove('active');
    cp31.style.transform = 'translateX(0%)';

})
cl32.addEventListener('click', ()=> {
    cl32.classList.add('active');
    cl31.classList.remove('active');
    cl33.classList.remove('active');
    cl34.classList.remove('active');
    cl35.classList.remove('active');
    cp31.style.transform = 'translateX(-20%)';

})

cl33.addEventListener('click', ()=> {
    cl33.classList.add('active');
    cl32.classList.remove('active');
    cl31.classList.remove('active');
    cl34.classList.remove('active');
    cl35.classList.remove('active');
    cp31.style.transform = 'translateX(-40%)';

})
cl34.addEventListener('click', ()=> {
    cl34.classList.add('active');
    cl32.classList.remove('active');
    cl33.classList.remove('active');
    cl31.classList.remove('active');
    cl35.classList.remove('active');
    cp31.style.transform = 'translateX(-60%)';

})
cl35.addEventListener('click', ()=> {
    cl35.classList.add('active');
    cl32.classList.remove('active');
    cl33.classList.remove('active');
    cl34.classList.remove('active');
    cl31.classList.remove('active');
    cp31.style.transform = 'translateX(-80%)';

})









window.onload = function() { eng() };

const lang = document.getElementById("lang");
const langBar = document.getElementById("langBar");
const langLetter = document.getElementById("langLetter");


var count = 1;
langBar.onclick = function languag(){
    if(count == 1){ bang(); count++; }
    else if(count == 2){ eng(); count--;}
}
function bang(){
    lang.innerHTML = 'বাংলা';
    langBar.style.backgroundColor = 'rgb(241, 221, 38)';
    langLetter.innerHTML = 'B';
    langLetter.style.transform = 'translateX(50px)';
    


}
function eng(){
    lang.innerHTML = 'English';
    langBar.style.backgroundColor = 'rgb(133, 38, 241)';
    langLetter.innerHTML = 'E';
    langLetter.style.transform = 'translateX(0px)';
    

    


}