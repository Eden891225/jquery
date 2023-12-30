var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    autoplay:{
        delay: 5000,
    }
  })
  $(document).ready(function() {
    //選單
    $(".item1").click(function(){
      $(".subitem1").toggle();
    })
    $(".item2").click(function(){
      $(".subitem2").toggle();
    })
    $(".item3").click(function(){
      $(".subitem3").toggle();
    })
    //滾動效果
    $(".top").click(function(){
      $("html, body").animate({scrollTop: 0}, "slow");
    })
    // lightbox 效果
    lightbox.option({
          'resizeDuration': 2000,
          'wrapAround': true
        });
    $(window).load(function() {
        $('#slider').nivoSlider(); 
    });
  });