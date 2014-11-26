$(document).ready(function(){

	$(".menuContain").click(function(){
		$(".nav-main").slideToggle();
	});

	//$(".panel-title").click(function(){});
	$('.panel-content').hide();

	$(".panels").accordion(); //{collapsible: true}
	

	$(window).resize(function() {
        if( $(window).width() > 480 ) {  
        $('.nav-main').show();
        }
    });

});