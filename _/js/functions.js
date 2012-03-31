// remap jQuery to $
(function($){})(window.jQuery);


/* trigger when page is ready */
$(document).ready(function (){
  
  var hashVal = window.location.hash.split("#")[1];
  
  if (hashVal){
    $('#section_' + hashVal).show();
    $('.' + hashVal).addClass('current');
  } else {
    $('#section_callout').show();
  }

  $('#sidebar ul li a').click(function(){
    var section = $(this).attr('class');
    $('#sidebar ul li a').removeClass('current');
    $(this).addClass('current');
    
    $('.section').fadeOut(300);
    $('#section_'+section).delay(400).fadeIn(300);
  });
  
});