
// A $( document ).ready() block.
$( document ).ready(function() {

$('.showcase').css('opacity', 0) // immediately hide element

  $('.showcase').waypoint
    (function(direction) {  
        
      if(direction === 'down')
      { 
          console.log('scrolling down');
          $(this.element).animate( { opacity: 1} );
          //$(this.element).animate({ opacity: 1 })
          //$(this.element).addClass('animated fadeInUp');
      }
      else {
          console.log('scrolling up');
          //$(this.element).animate({ opacity: 0 })
          //$(this.element).removeClass('fadeInUp');
      }
    }, {
      offset: '45%'
    });

});


var username = "petermarkellis";
var hostname = "gmail.com";
var linktext = username + "@" + hostname ;
$(".mailto").html("<a href='" + "mail" + "to:" + username + "@" + hostname + "?subject=Super useful studio'>say hi</a>");