
$(document).ready(function(){
  
  /* 헤더-PC- */

  $(".header-gnb .main").hover(function(){
    $(this).find(".sub").stop().slideDown();
  }, function(){
    $(this).find(".sub").stop().slideUp();
  });

  const BODY = $("body");
  const mobBtn = $(".mob_btn");
  const scrollTopBtn = $('.scrollTop_btn');

  $(window).on("scroll", function(){
    let scroll = $(this).scrollTop();
    
    if(scroll > 60){
      BODY.addClass("scrolling");
      scrollTopBtn.addClass('On');
    }else{
      BODY.removeClass("scrolling");
      scrollTopBtn.removeClass('On')
    };
  });

  /* 헤더 -mobile- */
  mobBtn.on("click", function (e) {
    e.preventDefault();  
    BODY.addClass("mOpen");
    $(".back").stop(true,true).fadeIn();
  });

  $(".mo-header-gnb .main > a").on("click", function(e){
    e.preventDefault();
    let $sub = $(this).siblings(".sub");
    if($sub.is(":visible")) {
      $sub.slideUp();
    } else { $(".mo-header-gnb .sub").slideUp();
      $sub.slideDown();
    }
  });

  $(".fa-xmark").click(function(){  
    BODY.removeClass("mOpen")
    $(".back").stop(true,true).fadeOut();
  });

  
/* section1 */
  $(".tab li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");

    let result = $(this).attr("data-alt");
    $(".tab-contents > div").removeClass("active");
    $("#"+result).addClass("active").hide().fadeIn();
  });

});