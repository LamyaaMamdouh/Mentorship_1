

const btn = document.querySelector(".navbar-toggler");
const collapse = document.querySelector(".collapse");
let nav=document.querySelector("nav");

// استخدم حدث Bootstrap الرسمي بدلاً من click المباشر
btn.addEventListener('click', function() {
    collapse.classList.add("color");
});

collapse.addEventListener('hidden.bs.collapse', function() {
    this.classList.remove("color");
});



 async function getItems(){
    let response= await fetch( "https://api.escuelajs.co/api/v1/products");
  if(response.ok){
    let data= await response.json();
    display(data);
  }
}
getItems();
let content="";
let portfolioImage=document.querySelector(".portfolio-img");
function display(data){
    for(let item=0;item<=11;item++){
   content+=`
    <img class="img" src="${data[item].images?.[0]}" alt="image">
   `
    }
portfolioImage.innerHTML=content;
}

     
var swiper1 = new Swiper(".mySwiper1", {
   
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
      
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",

    },
    breakpoints:{
        0:{
            slidesPerView:1
        },
        768:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        }
    }
  
  });
  

onscroll=function(){
  if(this.scrollY>500){
    nav.style.backgroundColor="#222";
  }
  else{
   nav.style.backgroundColor="transparent";
  }
}