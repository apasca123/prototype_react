import $ from "jquery"

$("#middle").click(function() {
    $('html,body').animate({
        scrollTop: $("#section2").offset().top},'slow');
});
$(function() {
    $(window).scroll(function () {
        var scrollact = $(window).scrollTop();
        $("#fade").css({
            opacity: function() {
                var elementHeight = $(this).height(),
                    opacity = 1 - ((elementHeight - scrollact) / elementHeight);
                return opacity;
            }
        });
        if($(this).height() >=400){
            $("#nav1").css({"transition": "0.5s"});
            $("#nav1").css({"opacity": "0"});
            $(".menu-it").css({"margin-top": "0px"});
            $(".logo img").css({"transform": "translateY(-130px)"});
            $(".logo img").css({"transition": "1s"});
        }
        else if(scroll <=35){
            $("#nav1").css({"transition": "0.5s"});
            $("#nav1").css({"opacity": "1"});
            $(".menu-it").css({"margin-top": "40px"});
            $(".logo img").css({"transform": "translateY(+130px)"});
            $(".logo img").css({"transition": "1s"});
        }
    })
})