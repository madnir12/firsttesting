$(document).ready(function () {
    // navbar toggle effect on mobile  
    $("#menu-toggle").click(function () {
      $("#nright").slideToggle(500)
  
    });
     // navbar effect on scrolling
  $(window).scroll(()=>{
    $("#navbar").toggleClass('nav-back', $(this).scrollTop() > 50)
  });

});    