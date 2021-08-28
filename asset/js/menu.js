//menu
$(function() {
  
    /* LOCAL STORAGE START */
    // To reset your local storage
    localStorage.removeItem('learnMenu');
    
    //check if menu-pulses are required
    function checkMenuPulseState() {
      if(localStorage.getItem('learnMenu') == 'learned') {
        var $menuPulse = $('.menu-pulse');
        $menuPulse.addClass('is-learned');
      }
    }
    checkMenuPulseState();
    /* LOCAL STORAGE END */
    
    
    $(".menu-link").click(function(e) {
      e.preventDefault();
      
      /* LOCAL STORAGE START */
      localStorage.setItem('learnMenu', 'learned');
      checkMenuPulseState();
      /* LOCAL STORAGE END */
      
      $(".menu-overlay").toggleClass("menu-open");
      $(".menu-toggle").toggleClass("menu-open");
    });
    $(".overlay-content .menu-page .menu-box .menu .maint").click(function (e) {
      $(".menu-overlay").toggleClass("menu-open");
      $(".menu-toggle").toggleClass("menu-open");
  });
  });