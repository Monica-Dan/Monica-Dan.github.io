

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

