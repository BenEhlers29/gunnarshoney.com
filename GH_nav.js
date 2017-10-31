// JavaScript Document

//OPEN & CLOSE MENU
$('button#MENU').click(function()
{
	'use strict';
	$('header nav').toggleClass('open','').find('a').attr('tabindex',0);
	$(this).toggleClass('open','');
});


//ADD ATTRIBUTES TO SLIDESHOW
$('#SLIDESHOW').ready(function() 
{
	'use strict';
	var imgNum = -1;
	$('#SLIDESHOW>img:first').addClass('hidden');
	$('#SLIDESHOW>img').each(function()
	{
		imgNum++;
		$(this).attr('data-number', imgNum).css('z-index','-'+imgNum+'');
	});
});


//BEGIN SLIDESHOW
$(document).ready(function()
{
	'use strict';
	slideIt();
});

function slideIt()
{
	'use strict';
	setTimeout(function() 
	{
	var hidden = $('#SLIDESHOW>img.hidden');
	var last = $('#SLIDESHOW>img:last');
	
	if (last.prev().is('.hidden'))
	{
		$('#SLIDESHOW>img').not(':first').removeClass('hidden');
	}
	
	else if ($('#SLIDESHOW>img').not(':first') !== hidden)
	{
		$('#SLIDESHOW>img.hidden').next().addClass('hidden');
	}
	
	else
	{
		$('#SLIDESHOW>img.hidden').next().addClass('hidden', function()
		{
			$(this).prev().removeClass('hidden');
		});
	}
	
	slideIt();
  }, 10000);
}


//HEADING SCROLL HANDLER
$(window).scroll(function()
{
	"use strict";
	//var h1Top = $('h1').offset().top;
	//var slide = $('#SLIDESHOW').offset().bottom;
	var top = $(window).scrollTop();
	var headerH = $('header').outerHeight();

	if (top >= headerH-80) 
	{
		//alert('top');
		$('#T_HEADER').addClass('fixed');
	} 
	else
	{
		$('#T_HEADER').removeClass('fixed');
	}
});


/*$('.roller').mouseenter(function()
{
	"use strict";
	if ($(this).is('.yellow'))
	{
		$(this).animate({backgroundColor:'rgba(229,200,0,0.5)'}, 300);
	}
});*/	


// CHANGE HEADER COLOR
$(function() 
{
	"use strict";
	$(window).scroll(function() 
	{
		var currentScrollTop = $(window).scrollTop();
		$('#YELLOWER').css('opacity',currentScrollTop/$('#YELLOWER').height() + 0.3);
	});
});

//DRAG SLIDESHOW
$(function()
{
	"use strict";
  $(window).scroll(function() 
	{    
   	var $myDiv = $('#SLIDESHOW');
    var st = $(this).scrollTop();
    $myDiv.css('position','fixed').css('top',0 - st/4).height( 400-st/1.32); 
  }).scroll();
});