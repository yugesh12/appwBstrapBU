$(document).ready(function(){
$("#wrapper_business_trans").hover(function(){
        $('.dienst_dienst1').addClass('redu');
    }, function(){
        $('.dienst_dienst1').removeClass('redu');
    });

    $("#wrapper_customer_exp").hover(function(){
        $('.dienst_dienst2').addClass('redu');
    }, function(){
        $('.dienst_dienst2').removeClass('redu');
    });

    $("#wrapper_gevonden_worden").hover(function(){
        $('.dienst_dienst3').addClass('redu');
    }, function(){
        $('.dienst_dienst3').removeClass('redu');
    });
});