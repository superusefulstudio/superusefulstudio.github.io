
$('.showcase .container .showpiece').waypoint(function(direction) {    
    if(direction === 'down')
    {
        $(this.element).animate( {opacity: 1} );
    }
  }, {
    offset: '65%'
  })



  $(document).ready(function() {
    $('#myvideo').play()
});


var username = "petermarkellis";
var hostname = "gmail.com";
var linktext = username + "@" + hostname ;
$(".mailto").html("<a href='" + "mail" + "to:" + username + "@" + hostname + "?subject=Super useful studio'>say hi</a>");