

// A $( document ).ready() block.
$( document ).ready(function() {

  $('.showpiece img, .mobileitem').waypoint
    (function(direction) {    
      if(direction === 'down')
      {
          $(this.element).animate( { opacity: 1} );
      }
      else {
        //$(this.element).animate({ opacity: 0 })
      }
    }, {
      offset: '65%'
    });

});


var username = "petermarkellis";
var hostname = "gmail.com";
var linktext = username + "@" + hostname ;
$(".mailto").html("<a href='" + "mail" + "to:" + username + "@" + hostname + "?subject=Super useful studio'>say hi</a>");