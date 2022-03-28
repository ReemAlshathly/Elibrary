const cartshow=document.querySelector('.bask .span');
              const addcart=document.querySelectorAll('.add-cart');
              for(var i=0;i<addcart.length;i++){
                addcart[i].addEventListener('click',()=>{

                  cartcount();
                })
              }
              function cartcount(){
                let prdcount=localStorage.getItem('cartscount');
                prdcount=parseInt(prdcount);
                if(prdcount){
                  localStorage.setItem('cartscount',prdcount+1);
                  cartshow.textContent=prdcount+1;
                }
                else{
                  localStorage.setItem('cartscount',1);
                  cartshow.textContent=prdcount-1;
                }
              }
              function displaycart(){
                let prdcount=localStorage.getItem('cartscount');
                if(prdcount){
                  cartshow.textContent=prdcount;
                }
              }
              displaycart();