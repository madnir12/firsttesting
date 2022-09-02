
      var swiper = new Swiper(".mySwiper", { 
        slidesPerView: "auto", // numbers of slides will changed here
        spaceBetween: 30,
        mousewheel: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        keyboard: {
          enabled: true,
        },
      });
   