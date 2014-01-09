/*global jQuery, impress */

(function($){
    'use strict';

    impress().init();

    function fireIntro(){
        var $intro = $("#intro");

        $('#intro').find('.red-ball').css({
            width: 166,
            height: 173
        });

        setTimeout(function(){
            $intro.find('.bottom-text').fadeIn(1000, function(){
                $intro.find(".bottom-text .horizontal-stripe").width(185);
                setTimeout(function(){
                    $intro.find(".bottom-text .red-arrow-right").width(20);
                    setTimeout(function(){
                        $intro.find(".bottom-text .red-arrow-right").css('-webkit-animation-name', 'elastic');
                    }, 200);
                }, 900);
            });
        }, 1000);
    }

    $(document).ready(function(){
        fireIntro();
    });
}(jQuery));
