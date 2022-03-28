const nextBTN = document.getElementById('next-btn');
const prevBTN = document.getElementById('prev-btn');
const progress = document.getElementById('progress');
const steps=document.querySelectorAll(".circle");
var btn = document.getElementById("next-btn");
var modal = document.getElementById("myModal");
let index=0;

nextBTN.addEventListener("click", function(){
    index++;
    if(index >= steps.length){
        index = steps.length;
    }
    nextBTN.style.display="none"
   prevBTN.style.display="none"
    modal.style.display = "block";
    modal5.style.display="none";

    changeStatus();
});

prevBTN.addEventListener("click", function(){
    index--;
    if (index <= 0){
        index = 0;
    }
    
    modal.style.display = "none";
    changeStatus();
});

function changeStatus(){
    steps.forEach((item, i)=>{
        if(i < index){
            item.classList.add('active');
           
        } else{
            item.classList.remove('active');
           
        }
    });
}

/////////////////////////////////////model2

const nextBTN2 = document.getElementById('next-btn2');
const prevBTN2 = document.getElementById('prev-btn2');

var btn2 = document.getElementById("next-btn2");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");


nextBTN2.addEventListener("click", function(){
    index++;
    if(index >= steps.length){
        index = steps.length;
    }
    modal2.style.display="block"
    modal.style.display = "none";
    prevBTN.style.display="none"
    nextBTN.style.display="none";
    modal5.style.display="none";
    changeStatus2();
});

prevBTN2.addEventListener("click", function(){
    index--;
    if (index <= 0){
        index = 0;
    }
    nextBTN.style.display="block"
    prevBTN.style.display="block"
    modal2.style.display = "none";
    modal.style.display = "none";
    modal5.style.display="none";
    changeStatus();
});

function changeStatus2(){
    steps.forEach((item, i)=>{
        if(i < index){
            item.classList.add('active');
           
        } else{
            item.classList.remove('active');
           
        }
    });
}
//////////////////////////////////////////model3

const nextBTN3 = document.getElementById('next-btn3');
const prevBTN3 = document.getElementById('prev-btn3');

var btn3 = document.getElementById("next-btn3");
var modal3 = document.getElementById("myModal3");



nextBTN3.addEventListener("click", function(){
    index++;
    if(index >= steps.length){
        index = steps.length;
    }
    modal3.style.display="block"
    modal2.style.display = "none";
    modal.style.display = "none";
    modal5.style.display="none";
    changeStatus3();
});

prevBTN3.addEventListener("click", function(){
    index--;
    if (index <= 0){
        index = 0;
    }
   
    nextBTN.style.display="none"
    prevBTN.style.display="none"
    modal2.style.display = "none";
    modal.style.display = "block";
    modal5.style.display="none";
    changeStatus3();
});

function changeStatus3(){
    steps.forEach((item, i)=>{
        if(i < index){
            item.classList.add('active');
           
        } else{
            item.classList.remove('active');
           
        }
    });
}


///////////////////////////model4

const nextBTN4 = document.getElementById('next-btn4');
const prevBTN4 = document.getElementById('prev-btn4');

var btn4 = document.getElementById("next-btn4");
var modal4 = document.getElementById("myModal4");


nextBTN4.addEventListener("click", function(){
    index++;
    if(index >= steps.length){
        index = steps.length;
    }
    modal4.style.display="block"
    modal2.style.display = "none";
    modal.style.display = "none";
    modal3.style.display = "none";
    modal5.style.display="none";
    changeStatus3();
});

prevBTN4.addEventListener("click", function(){
    index--;
    if (index <= 0){
        index = 0;
    }
    modal4.style.display = "none";
    modal2.style.display = "block";
    modal3.style.display = "none";
    modal.style.display = "none";
    modal5.style.display="none";
    changeStatus3();
});

function changeStatus3(){
    steps.forEach((item, i)=>{
        if(i < index){
            item.classList.add('active');
           
        } else{
            item.classList.remove('active');
           
        }
    });
}


///////////////////////////model5

const nextBTN5 = document.getElementById('next-btn5');
const prevBTN5 = document.getElementById('prev-btn5');

var btn5 = document.getElementById("next-btn4");
var modal5 = document.getElementById("myModal5");


nextBTN5.addEventListener("click", function(){
    index++;
    if(index >= steps.length){
        index = steps.length;
    }
    modal4.style.display="none"
    modal2.style.display = "none";
    modal.style.display = "none";
    modal3.style.display = "none";
    modal5.style.display="block";
    changeStatus3();
});

prevBTN5.addEventListener("click", function(){
    index--;
    if (index <= 0){
        index = 0;
    }
    modal3.style.display = "block";
    modal2.style.display = "none";
    modal.style.display = "none";
    modal4.style.display="none";
    changeStatus3();
});


