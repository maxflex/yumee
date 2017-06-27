$(document).ready(function() {
  $(".logo").addClass("animated fadeInUp visible");
  setTimeout(function(){
      $("h2").addClass("animated fadeInUp visible");
  }, 1000);
  setTimeout(function(){
      $(".scroll-down").addClass("animated fadeInUp visible");
  }, 1600);
  $('#fullpage').fullpage({
      navigation: true,
      navigationPosition: 'right',
      responsive: 900,
      keyboardScrolling: true,
      // afterRender: function() {
      //
      //     //playing the video
      //     $('video').trigger('play');
      // }
  });
})
