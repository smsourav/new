
window.onload = function() { eng() };

const lang = document.getElementById("lang");
const langBar = document.getElementById("langBar");
const langLetter = document.getElementById("langLetter");
const th1 = document.getElementById("th1");
const tp1 = document.getElementById("tp1");
const th2 = document.getElementById("th2");
const tp2 = document.getElementById("tp2");
const th3 = document.getElementById("th3");
const tp3 = document.getElementById("tp3");
const th4 = document.getElementById("th4");
const tp4 = document.getElementById("tp4");


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
    th1.innerHTML = ' আপনি কী জানেন যে, প্রোগ্রামিং কী?';
    tp1.innerHTML = 'কম্পিউটার প্রোগ্রামিং হল একটি নির্দিষ্ট কম্পিউটিং ফলাফল সম্পাদন করতে বা একটি নির্দিষ্ট কার্য সম্পাদন করার জন্য এক্সিকিউটেবল কম্পিউটার প্রোগ্রামের নকশা এবং তা তৈরী করার প্রক্রিয়া।';
    th2.innerHTML = 'আমার কী প্রোগ্রামিং এর কোনো দরকার আছে?';
    tp2.innerHTML = 'যদি আপনি কম্পিউটার বিজ্ঞান ও প্রকৌশল অথবা সফটওয়্যার প্রকৌশল এর শিক্ষার্থী হয়ে থাকেন অথবা উচ্চ মাধ্যমিকের তবে অবশ্যই আপনার জন্য দরকার আছে।<br>কিন্তু আমি তো তো এই তিনটার কোনোটার কাতারেই পড়ি না, তবে আমার কিসের প্রয়োজন?';
    th3.innerHTML = 'দাড়ান আপনি প্রোগ্রামিং ভাষার কথা চিন্তা করছেন না তো?';
    tp3.innerHTML = 'আমি কী আপনাকে বলেছি যে এই পেজ হতে আপনাকে প্রোগ্রামিং ভাষা শিখবেন? উত্তর টা হ্যা আবার না। কারণ প্রোগ্রামিং ভাষা উপরের তিন গ্রুপের জন্য দরকার আছে। আর প্রোগ্রামিং টা আপনার।';
    th4.innerHTML = 'কেন আপনার প্রোগ্রামিং শেখা প্রয়োজন?';
    tp4.innerHTML = 'আপনার প্রোগ্রামিং শেখা প্রয়োজন কারণ। আপনার প্রোগ্রামিং শেখা প্রয়োজন কারণ। আপনার প্রোগ্রামিং শেখা প্রয়োজন কারণ। আপনার প্রোগ্রামিং শেখা প্রয়োজন কারণ। আপনার প্রোগ্রামিং শেখা প্রয়োজন কারণ। আপনার প্রোগ্রামিং শেখা প্রয়োজন কারণ। আপনার প্রোগ্রামিং শেখা প্রয়োজন কারণ। আপনার প্রোগ্রামিং শেখা প্রয়োজন কারণ।<br> আপনার প্রোগ্রামিং শেখা প্রয়োজন কারণ। আপনার প্রোগ্রামিং শেখা প্রয়োজন কারণ। আপনার প্রোগ্রামিং শেখা প্রয়োজন কারণ। আপনার প্রোগ্রামিং শেখা প্রয়োজন কারণ। আপনার প্রোগ্রামিং শেখা প্রয়োজন কারণ।';


}
function eng(){
    lang.innerHTML = 'English';
    langBar.style.backgroundColor = 'rgb(133, 38, 241)';
    langLetter.innerHTML = 'E';
    langLetter.style.transform = 'translateX(0px)';
    th1.innerHTML = 'Do you know that what is programming?';
    tp1.innerHTML = 'Computer programming is the process of designing and building an executable computer program to accomplish a specific computing result or to perform a specific task.';
    th2.innerHTML = 'Do I need programming?';
    tp2.innerHTML = 'If you are a student of Computer Science and Engineering or Software Engineering or a Higher Secondary you must need programming.<br>But I\'m not one of these three, then why do I need it?';
    th3.innerHTML = 'Wait!! Aren\'t you thinking about programming language?';
    tp3.innerHTML = 'Did I tell you that, this page will teach you programming language? No but yes, cause programming language is for the three. Programming is for you.';
    th4.innerHTML = 'Why should you learn programming?';
    tp4.innerHTML = 'You should learn programming language because. You should learn programming language because. You should learn programming language because. You should learn programming language because. You should learn programming language because.<br>You should learn programming language because. You should learn programming language because. You should learn programming language because.';

    


}