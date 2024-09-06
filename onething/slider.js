var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    autoplay:true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
  });

  

  function imageslid(){
    var slides = document.getElementById('imageslide');
  
    for(i=1; i<=10;i++){
      slides.innerHTML += `
        <div class="swiper-slide">
          <a href="https://swiperjs.com/demos/images/nature-${i}.jpg">
            <img src="https://swiperjs.com/demos/images/nature-${i}.jpg" />
          </a>
        </div>
      `;
    };
  }
  
  imageslid();