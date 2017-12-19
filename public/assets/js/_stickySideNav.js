$(function() {
  if ($('.float-table').length) { // make sure "#sticky" element exists
    var el1 = $('.float-table');
    var el1_stickyTop = el1.offset().top;
    var el1_stickyHeight = el1.height();

    var el2 = $('.collapsed-table');
    var el2_stickyTop = el2.offset().top;
    var el2_stickyHeight = el2.height();

    $(window).scroll(function() { // On scroll event
      var el1_lowerLimit = $('div.container#lowerLimit').offset().top - el1_stickyHeight - 50;
      var el2_lowerLimit = $('div.container#lowerLimit').offset().top - el2_stickyHeight - 50;
      var upperLimit = $('.blocks-container').offset().top;
      var windowTop = $(window).scrollTop() + 50;

      // Stop div.float-table from going off screen
      if (el1_stickyTop < (windowTop + 50) && !(upperLimit > windowTop)) {
        el1.css({
          position: 'fixed',
          top: 50
        });
      } else {
        el1.css({
          position: 'static',
        });
      }
      if (el2_stickyTop < (windowTop + 50) && !(upperLimit > windowTop)) {
        el2.css({
          position: 'fixed',
          top: 50
        });
      } else {
        el2.css({
          position: 'static',
        });
      }

      // Stop div.float-table from scrolling of the bottom content (ex. footer)
      if (el1_lowerLimit < windowTop) {
        var diff = el1_lowerLimit - windowTop;
        el1.css({
          top: diff + 50
        });
      }
      if (el2_lowerLimit < windowTop) {
        var diff = el2_lowerLimit - windowTop;
        el2.css({
          top: diff + 50
        });
      }

    });
  }

});

// Scroll to instructionBlock marker and change to active
$(document).ready(function () {
    $(document).on("scroll", onScroll);

    // Smooth scroll to instructionBlock marker
    $('.nav-scroll-to').on('click', scrollToBlock);
    $('.collapsed-table a').on('click', scrollToBlock);

});

// Smooth scroll to instructionBlock marker
function scrollToBlock(e) {
  e.preventDefault();
  $(document).off("scroll");

  $('a').each(function () {
      $(this).removeClass('active');
  })
  $(this).addClass('active');

  var target = this.hash,
      menu = target;
  $target = $(target);
  $('html, body').stop().animate({
      'scrollTop': $target.offset().top - (document.documentElement.clientHeight * 0.2)
  }, 500, 'swing', function () {
      // window.location.hash = target;
      // $(document).on("scroll", onScroll);
  });
}

// Change active instructionBlock marker
function onScroll(event){
    var scrollPos = $(document).scrollTop() + (document.documentElement.clientHeight * 0.35);
    // console.log($('#menu-center a.nav-scroll-to'));
    $('#menu-center a.nav-scroll-to').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.length) {
          if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
              $('.markers__label a').removeClass("active");
              currLink.addClass("active");
          }
          else{
              currLink.removeClass("active");
          }
        }
    });

    // console.log($('#menu-center a.nav-scroll-to'));
    $('.collapsed-table a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.length) {
          if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
              $('.sub-marker a').removeClass("active");
              currLink.addClass("active");
          }
          else{
              currLink.removeClass("active");
          }
        }
    });
}
