$(document).ready(function() {
  var menu_offset = $('.nav').offset();

  $(window).scroll(function() {
      if($(document).scrollTop() > menu_offset.top) {
          $('.nav').addClass('nav-fixed')
      }else {
          $('.nav').removeClass('nav-fixed')
      }
  })
})