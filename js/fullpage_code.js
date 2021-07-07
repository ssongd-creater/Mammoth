$(function () {
  $('#fullpage').fullpage({
    navigation:true,
    fixedElements: '#header',
    verticalCentered:false,
    responsiveWidth:700,
    anchors: ['1st', '2nd', '3rd'],
    afterLoad: function (anchorLink, index) {
      if (anchorLink == '2nd') {
        $(".page_txt_box .main_txt").addClass('txt');
        $(".page_txt_box .page_logo").addClass('txt_up');
      }
    }
  });

});