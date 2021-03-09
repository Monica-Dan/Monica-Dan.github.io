/*// Slider
let larrow = document.getElementById("left-arrow"),
    rarrow = document.getElementById("right-arrow"),
    sliderImg = document.querySelectorAll(".slide"),
    current=0,
    time=5000;

function reset(){
    for(let i=0; i<sliderImg.length; i++){
        sliderImg[i].style.display='none';
    }
}

function startSlide(){
    reset();
    sliderImg[0].style.display='block';
}

function leftSlide(){
    reset();
    sliderImg[current-1].style.display='block';
    current--;
}

function rightSlide(){
    reset();
    sliderImg[current+1].style.display='block';
    current++;
}

larrow.addEventListener('click', function(){
    if(current===0){
        current=sliderImg.length;
    }
    leftSlide();
});

rarrow.addEventListener('click',rightCheck );

function rightCheck(){
    if(current===sliderImg.length-1){
        current=-1;
    }
    rightSlide();
}

startSlide();
setInterval(rightCheck,time);

*/

// Form
document.getElementById('btn-form').addEventListener('click',formReset);

function formReset(e){
    e.preventDefault();
    document.getElementById('inputName1').value='';
    document.getElementById('inputName2').value='';
    document.getElementById('inputEmail').value='';
    document.getElementById('inputContact').value='';
    document.getElementById('inlineRadio1').checked=false;
    document.getElementById('inlineRadio2').checked=false;
}


// BMI
document.getElementById('output').style.visibility='hidden';
document.getElementById('bmi-btn').addEventListener('click',bmiCalc);
document.getElementById('bmi-resetbtn').addEventListener('click',bmiReset);

function bmiCalc(e){  
    e.preventDefault();
    let height=document.getElementById('height').value/100;
    let weight=document.getElementById('weight').value;
    document.getElementById('output').style.visibility='visible';
    document.getElementById('bmiOutput').innerHTML= weight/(height*height);

}

function bmiReset(e){
    e.preventDefault();
    document.getElementById('output').style.visibility='hidden';
    document.getElementById('height').value='';
    document.getElementById('weight').value='';

}
$('.carousel').carousel({interval: 3500, pause: "false"});

