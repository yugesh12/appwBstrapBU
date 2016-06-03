// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require social-share-button
//= require_tree .


$(document).ready(function () {

    var menu = $('.navbar');
    var origOffsetY = menu.offset().top;

    jQuery(".navbar").wrapInner('<div class="nav-inner"</div>')

    function scroll() {
        if ($(window).scrollTop() > origOffsetY) {
            $('.navbar').addClass('sticky');
        } 
        
        else if($(window).scrollTop() == origOffsetY) {
         $('.navbar').removeClass('sticky');
        $('nav a').css("color", "black");
    
        }

        else {
            $('.navbar').removeClass('sticky');
        }

    }

    document.onscroll = scroll;
    
    

    $(".black_box").hover(function(){
        $(".link_black").css("color", "white");
    }, function(){
        $(".link_black").css("color", "black");
    });

    $(".white_box").hover(function(){
        $(".pijl").css("color", "white");
    }, function(){
        $(".pijl").css("color", "red");
    });

    
    
});





