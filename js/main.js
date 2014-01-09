/*global jQuery, impress */

(function($){
    $(document).ready(function(){
        impress().init();

        $("#intro .bottom-text .horizontal-stripe").width(300);
        $("#intro .bottom-text .red-arrow-right").css('left', 295);
        setTimeout(function(){
            $("#intro .bottom-text .red-arrow-right").width(20);
            setTimeout(function(){
                $("#intro .bottom-text .red-arrow-right").css('-webkit-animation-name', 'elastic');
            }, 200);
        }, 1000);
    });
}(jQuery))
