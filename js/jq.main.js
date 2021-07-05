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
});

