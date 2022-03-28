const showBtn=document.getElementsByClassName("show-btn-im");
const model_img=document.getElementById('model-img');

for (let i=0 ; i< showBtn.length ; i++){
showBtn[i].addEventListener('click', function(){
var img = showBtn[i].getAttribute('src');
model_img.setAttribute('src',img);


})
}