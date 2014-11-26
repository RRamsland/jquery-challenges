$(document).ready(function(){

	$(".menuContain").click(function(){
		$(".nav-main").slideToggle();
	});

	
	$('.panel-content').hide();
	$(".panel-title").click(function(){

		$('.panel-content').slideUp();
		if ($(this).next().css('display')!='none'){
			//alert('Yarp');
			$(this).next().slideUp();
		}
		else{
			//alert('Narp');
			$(this).next().slideDown();
		}
		

		//$(this).next().slideToggle();
	});

	//$(".accordion").accordion();
	$(".nav-internal").sticky({topSpacing:'285px',className:'stuck'});

	$(window).resize(function() {
        if( $(window).width() > 480 ) {  
        $('.nav-main').show();
        }

        if( $(window).width() < 480 ) {  
        $('.nav-main').hide();
        }
    });

});