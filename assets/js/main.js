(function ($) {
	"use strict";

    jQuery(document).ready(function($){

     $(".homepage-slide").owlCarousel({
           loop:true,
           items:2,
           nav:true,
           navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
           dots:false,
           autoplay:false,
     });
        $(".logo-carojel").owlCarousel({
           loop:true,
           items:5,
           nav:false,
           navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
           dots:false,
           autoplay:false,
     });
        
   $(".video-play-button").magnificPopup({
       type: 'video',
   });
        


    });


    jQuery(window).load(function(){

        jQuery(".project-list").isotope()
    });


}(jQuery));	