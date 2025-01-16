const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



function page4Animation() {
    let elem = document.querySelector("#elem-container")
let img = document.querySelector("#fixed-img")
elem.addEventListener("mouseenter", function() {
    img.style.display = "block"
})

elem.addEventListener("mouseleave", function() {
    img.style.display = "none"
})

const elems = document.querySelectorAll(".elem")
elems.forEach(function(i){
    i.addEventListener("mouseenter", function(){
        const image = i.getAttribute("data-image")
        img.style.backgroundImage = `url(${image})`
    })
})
}


function swiperAnimation (){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
      });
}

swiperAnimation()
page4Animation()