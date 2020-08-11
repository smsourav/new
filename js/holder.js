
window.onload = function() { eng() };

const lang = document.getElementById("lang");
const langBar = document.getElementById("langBar");
const langLetter = document.getElementById("langLetter");
const th1 = document.getElementById("th1");
const tp1 = document.getElementById("tp1");
const th2 = document.getElementById("th2");
const tp2 = document.getElementById("tp2");


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
    th1.innerHTML = 'আপনি কী জানেন যে প্রোগ্রামিং কী?';
    tp1.innerHTML = 'যদি আপনি কম্পিউটার বিজ্ঞান ও প্রকৌশল অথবা সফটওয়্যার প্রকৌশল এর শিক্ষার্থী হয়ে থাকেন অথবা উচ্চ মাধ্যমিকের তবে অবশ্যই আপনার জন্য দরকার আছে।<br>কিন্তু আমি তো তো এই তিনটার কোনোটার কাতারেই পড়ি না, তবে আমার কিসের প্রয়োজন?';
    th2.innerHTML = 'আমার কী প্রোগ্রামিং এর কোনো দরকার আছে?';
    tp2.innerHTML = 'যদি আপনি কম্পিউটার বিজ্ঞান ও প্রকৌশল অথবা সফটওয়্যার প্রকৌশল এর শিক্ষার্থী হয়ে থাকেন অথবা উচ্চ মাধ্যমিকের তবে অবশ্যই আপনার জন্য দরকার আছে।<br>কিন্তু আমি তো তো এই তিনটার কোনোটার কাতারেই পড়ি না, তবে আমার কিসের প্রয়োজন?';


}
function eng(){
    lang.innerHTML = 'English';
    langBar.style.backgroundColor = 'rgb(133, 38, 241)';
    langLetter.innerHTML = 'E';
    langLetter.style.transform = 'translateX(0px)';
    th1.innerHTML = 'Do you know that what is programming?';
    tp1.innerHTML = 'Lorem ipsum dolor sit amet in the door. Lorem ipsum dolor sit amet in the door. Lorem ipsum dolor sit amet in the door. Lorem ipsum dolor sit amet in the door. Lorem ipsum dolor sit amet in the door. Lorem ipsum dolor sit amet in the door. Lorem ipsum dolor sit amet in the door.';
    th2.innerHTML = 'Do I need programming?';
    tp2.innerHTML = 'Lorem ipsum dolor sit amet in the door. Lorem ipsum dolor sit amet in the door. Lorem ipsum dolor sit amet in the door. Lorem ipsum dolor sit amet in the door. Lorem ipsum dolor sit amet in the door. Lorem ipsum dolor sit amet in the door. Lorem ipsum dolor sit amet in the door.';


}