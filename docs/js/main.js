$(document).ready(function() {

	/* Call plugins hrere ...*/

	var pull = $("#pull");
    var nav = $("#mobile-nav");
    
    $(pull).on("click", function(e){
        e.preventDefault();
        $(nav).slideToggle();
    });
    
    $(window).resize(function(){
        var w = $(window).width();
        if(w > 767 && nav.is(':hidden')) {
        nav.removeAttr('style');
        } 
    });
	
});