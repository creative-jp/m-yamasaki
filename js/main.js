$(document).ready(function() {
  
// Make the whole list item a link in the nav

	$("nav li").click(function(){
		window.location=$(this).find('a').attr('href'); 
		return false;
	});
	
// Main slideshow
	
	$(".homepage-hero").cycle({ 
	    fx:     'fade', 
	    speed:   500,
	    timeout:   3000, 
	});

// Mobile menu

		$.easing.easeOutCubic = function (x, t, b, c, d) {
        	return (t==d) ? b+c : c * (-Math.pow(2, -12 * t/d) + 1) + b;
        }
        
        $(".menu-btn").click(function() {  
	    if($("nav ul").hasClass("menu-active")) {  
			$("nav ul").animate({ top: '-340px' }, 500, 'easeOutCubic', function() {
				$("nav ul").removeClass("menu-active");
			});
		} else {  
	    	$("nav ul").animate({ top: '50' }, 1000, 'easeOutCubic', function() {
		    	$("nav ul").addClass("menu-active");
		    });
	    $("nav ul").toggleClass("menu-active");  
	    }  
	    return false;  
	}); 
	
	
	

		
});
