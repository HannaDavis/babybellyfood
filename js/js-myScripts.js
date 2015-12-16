$(function(){ 

    //show more infrormation in small information boxes (suppliers, ingredients and menu)
    var actEl = $('.info-text');
    $(actEl).on('click', function(){
        var thisEl = $(this).find('.hidInfo');//looks for information inside of "hidInfo" class of the clicked container
        $(thisEl).slideToggle(800); //show or hide information        
    });
  

    //smooth scrolling * Code is based on tutorial from CSS-Tricks https://css-tricks.com/snippets/jquery/smooth-scrolling/
    $(function() {
    $('a[href*=#]').click(function() {
    if (location.hostname == this.hostname) { //check if the current URL is equal to the URL of the clicked address
      var destination = $(this.hash);//returns the anchor part of address
      if (destination.length) {//if length is more than 0, returns true and executes scrolling
        $('html,body').animate({
          scrollTop: destination.offset().top// animate scrolling from current position to the destination coordinates
        }, 1000);//within 1 second
      }
    }
  });
});
     
    
    });//end of self-involking function