$(document).ready(function () {
    $(window).on('scroll',function(){
    
        if ($(window).scrollTop() >= 500) {
            console.log("hello")
            $('.resume-container #header').css({
                'background-color:' : '#EAE5E5',
                // 'display': 'initial'
                'transform':'translateY(0%)'
            });
        } else {
            $('.resume-container #header').css({
                'transform':'translateY(-100%)'
            });
        }
    });
});