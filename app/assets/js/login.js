
/*const showBtn=document.getElementsByClassName("show-btn");
const modelcontiner2=document.getElementById("model-continer2");
const modelcontiner=document.getElementById("model-continer");
const model_img=document.getElementById('model-img');

for (let i=0 ; i< showBtn.length ; i++){
showBtn[i].addEventListener('click', function(){
var img = showBtn[i].getAttribute('src');
model_img.setAttribute('src',img);


})
}*/

const modelcontiner=document.getElementById("model-continer");
const showBtnn=document.getElementById("show-btnn");
showBtnn.addEventListener("click",()=>{
    modelcontiner.style.visibility='visible';
});
const modelcontiner2=document.getElementById("model-continer2");
const signup=document.getElementById("signup");
signup.addEventListener("click",()=>{
    modelcontiner2.style.visibility='visible';
});
//const modelcontiner=document.getElementById("model-continer");
/*const img=document.getElementById("model-img");
showBtn.addEventListener("click",()=>{
    img.setAttribute('src','./2.PNG');
});
*/
const countdown=()=>{
    const upperDate=new Date('Jan 20, 2022 00:00:00').getTime();
    const currentDate=new Date().getTime();
    const diffDate=upperDate-currentDate;
    
    const second=1000;
    const minutes=second* 60 ;
    const houres =minutes *60;
    const days = houres*24;
     
    const remain_days=Math.floor(diffDate/days);
    const remain_houres=Math.floor((diffDate%days)/houres);
    const remain_minutes=Math.floor((diffDate%houres)/minutes);
    const remain_second=Math.floor((diffDate%minutes)/second);
    var d=document.getElementById('days');
    var h=document.getElementById('hours');
    var m=document.getElementById('minutes');
    var s=document.getElementById('seconds');
    d.innerHTML=remain_days+"d";
    h.innerHTML=remain_houres+ "h";
    m.innerHTML=remain_minutes + "m";
    s.innerHTML=remain_second+ "s";

}
setInterval(countdown,1000);

//////////////////////////timer1
const countdown1=()=>{
    const upperDate1=new Date('Jan 28, 2022 00:00:00').getTime();
    const currentDate1=new Date().getTime();
    const diffDate1=upperDate1-currentDate1;
    
    const second=1000;
    const minutes=second* 60 ;
    const houres =minutes *60;
    const days = houres*24;
     
    const remain_days=Math.floor(diffDate1/days);
    const remain_houres=Math.floor((diffDate1%days)/houres);
    const remain_minutes=Math.floor((diffDate1%houres)/minutes);
    const remain_second=Math.floor((diffDate1%minutes)/second);
    var d1=document.getElementById('days1');
    var h1=document.getElementById('hours1');
    var m1=document.getElementById('minutes1');
    var s1=document.getElementById('seconds1');
    d1.innerHTML=remain_days+"d";
    h1.innerHTML=remain_houres+ "h";
    m1.innerHTML=remain_minutes + "m";
    s1.innerHTML=remain_second+ "s";

}
setInterval(countdown1,1000);

//////////////////////////timer2
const countdown2=()=>{
    const upperDate2=new Date('Jan 28, 2022 00:00:00').getTime();
    const currentDate2=new Date().getTime();
    const diffDate2=upperDate2-currentDate2;
    
    const second=1000;
    const minutes=second* 60 ;
    const houres =minutes *60;
    const days = houres*24;
     
    const remain_days=Math.floor(diffDate2/days);
    const remain_houres=Math.floor((diffDate2%days)/houres);
    const remain_minutes=Math.floor((diffDate2%houres)/minutes);
    const remain_second=Math.floor((diffDate2%minutes)/second);
    var d2=document.getElementById('days2');
    var h2=document.getElementById('hours2');
    var m2=document.getElementById('minutes2');
    var s2=document.getElementById('seconds2');
    d2.innerHTML=remain_days+"d";
    h2.innerHTML=remain_houres+ "h";
    m2.innerHTML=remain_minutes + "m";
    s2.innerHTML=remain_second+ "s";

}
setInterval(countdown2,1000);
/////////////////////////////////timer3

const countdown3=()=>{
    const upperDate3=new Date('Jan 28, 2022 00:00:00').getTime();
    const currentDate3=new Date().getTime();
    const diffDate3=upperDate3-currentDate3;
    
    const second=1000;
    const minutes=second* 60 ;
    const houres =minutes *60;
    const days = houres*24;
     
    const remain_days=Math.floor(diffDate3/days);
    const remain_houres=Math.floor((diffDate3%days)/houres);
    const remain_minutes=Math.floor((diffDate3%houres)/minutes);
    const remain_second=Math.floor((diffDate3%minutes)/second);
    var d3=document.getElementById('days3');
    var h3=document.getElementById('hours3');
    var m3=document.getElementById('minutes3');
    var s3=document.getElementById('seconds3');
    d3.innerHTML=remain_days+"d";
    h3.innerHTML=remain_houres+ "h";
    m3.innerHTML=remain_minutes + "m";
    s3.innerHTML=remain_second+ "s";

}
setInterval(countdown3,1000);


/////////////////////////////////timer4

const countdown4=()=>{
    const upperDate4=new Date('Jan 28, 2022 00:00:00').getTime();
    const currentDate4=new Date().getTime();
    const diffDate4=upperDate4-currentDate4;
    
    const second=1000;
    const minutes=second* 60 ;
    const houres =minutes *60;
    const days = houres*24;
     
    const remain_days=Math.floor(diffDate4/days);
    const remain_houres=Math.floor((diffDate4%days)/houres);
    const remain_minutes=Math.floor((diffDate4%houres)/minutes);
    const remain_second=Math.floor((diffDate4%minutes)/second);
    var d4=document.getElementById('days4');
    var h4=document.getElementById('hours4');
    var m4=document.getElementById('minutes4');
    var s4=document.getElementById('seconds4');
    d4.innerHTML=remain_days+"d";
    h4.innerHTML=remain_houres+ "h";
    m4.innerHTML=remain_minutes + "m";
    s4.innerHTML=remain_second+ "s";

}
setInterval(countdown4,1000);
