// Open Menu
$(document).ready(function(e) {
  $('.btn-mobile-menu').click(function() {
    $('body').addClass('nav-mobile-open');
    $('.nav-observatorio-mobile').addClass('open');
    e.preventDefault();
  });
  // Close Menu
  $(document).click(function(e) {
    let nav = $('.nav-observatorio-mobile');
    let btn = $('.btn-mobile-menu');
    if (!nav.is(e.target) 
      && nav.hasClass('open') 
      && nav.has(e.target).length === 0
      && !btn.is(e.target)
      && btn.has(e.target).length === 0){
      $('body').removeClass('nav-mobile-open');
      $('.nav-observatorio-mobile').removeClass('open');
    e.preventDefault();
    }
  });
  // Abre Link
  $('.nav-observatorio-mobile ul > li a[href^="#"]').click(function(e) {
    console.log(e.target);
    
    $('.nav-observatorio-mobile li').not($(this).parent()).removeClass('open');
    console.log($(this).parent())
    if ($(this).parent().hasClass('open')) {
      $(this).parent().removeClass('open');
    } else {
      $(this).parent().addClass('open');
    }
    
    e.preventDefault();
  })
})