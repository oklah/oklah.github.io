$(document).ready(function() {
  
    /* Sticky navigation */
    $('.js--section-gallery').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        }
        else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset:  '350px;'
    });
    
    
    /* Scroll to Join */
    $('.js--scroll-to-join').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-join').offset().top},1000);
    });
    
    /* Scroll to About */
    $('.js--scroll-to-about').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-about').offset().top},1000);
    });
    
    /* Navigation Scroll */
    $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
    
    
    /* Mobile Nav */
    $('.nav-menu').click(function() {
        var nav = $('.main-menu');
        var icon = $('.nav-menu');
        
        nav.slideToggle(500);
        
        if (icon.hasClass('fa-times')) {
            icon.addClass('fa-bars');
            icon.removeClass('fa-times');
        }
        else {
            icon.addClass('fa-times');
            icon.removeClass('fa-bars');
        }

    });

    
});