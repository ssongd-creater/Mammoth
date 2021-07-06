// $(document).ready(function () { }); jquery 실행 시 불러오는 언어 중 하나
$(function () {
  // Mega Box Menu Show When Hover Navigation
  $(".topnav, .hidden_sub").on("mouseenter", function () {
    $(".hidden_sub").css({ display: "block" });
    $(".topnav li a").css({ color: "#000" });
    $(".hidden_sub").stop().animate({ height: "485px" }, 300);
  });

  $(".topnav, .hidden_sub").on("mouseleave", function () {
    $(".hidden_sub").stop().animate({ height: "0" }, 300, function () {
      //callback함수을 이용해서 animate함수를 실행한 이후에 css가 실행됨(순차적으로)
      $(".topnav li a").css({ color: "#fff" });
      $(".hidden_sub").css({ display: "none" });
    });
  });

  // Sub Mega Box Menu Hide and Show
  $(".topnav li").on("mouseenter", function () {
    const i = $(this).index();
    $(".subnav_box").hide();
    $(".subnav_box").eq(i).show();
  });

  // Mobile Menu Animation Effect
  $(".menu_ico").hover(function () {
    $(this).toggleClass('active');
  });

  //Mobile Menu Click Effect
  $(".menu_ico").click(function () {
    $(".mobile_nav").animate({ left: 0 }, 300);
    $("section").animate({ left: '60%' }, 300);
    $(".overlay").animate({
      "opacity": 0.7,
      "left": "60%",
      "width":"100%"
    },300);
  });

  $(".close_btn, .overlay").click(function () {
    $(".mobile_nav").animate({ left: '-60%' }, 300);
    $("section").animate({ left: 0 }, 300);
    $(".overlay").animate({
      "opacity": 0,
      "left": 0,
      "width":0
    },300);
  });

  // Mobile Menu Accordion Effect
  $(".mobile_tit").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).siblings(".mobile_sub_nav").slideUp(200);
      $(this).removeClass("rotate");
      $(".mobile_tit").removeClass("rotate");

    } else {
      $(".mobile_tit").removeClass("active");
      //mobile_tit의 active를 모두 지운후
      $(".motile_tit").removeClass("rotate");
      $(this).addClass("active");
      //내가 선택한 this의 active를 주는것
      $(".mobile_sub_nav").slideUp(200);
      $(this).siblings(".mobile_sub_nav").slideDown(200);
      $(this).addClass("rotate");
      
    }
  });
});

