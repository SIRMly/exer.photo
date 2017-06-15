/**
 * Created by SIRMluy on 2017/6/15.
 * “∆∂Ø∂Àœ‡≤·
 */
;(function ($){
    var click = "ontouchstart" in document ? "touchstart" : "click";
    document.addEventListener("ontouchmove", function (e){
        e.preventDefault();
    });
    var winW = $(window).width();
    var winH = $(window).height();
    photoAlumb();
    function photoAlumb (){
        var photoWrapper = $("#pics");
        var lis = photoWrapper.find("li");
        var imgs = photoWrapper.find("img");
        photoWrapper.width(winW*lis.length);
        lis.width(winW);
        console.log(imgs.length);
        //for(var i=0; i<imgs.length; i++){
        //    var imgPaddimg = Math.floor((winH - imgs.eq(i).height())/2);
        //    console.log(imgPaddimg);
        //    if(imgPaddimg > 0){
        //        imgs.eq(i).css({
        //            "margin-top": imgPaddimg
        //        });
        //    }
        //}
        /*==ª¨∂Ø==*/
        var presentImg = 1;
        var translateX = 0;
        touch.on('#pics', 'swipeleft', function(){
            if(presentImg < imgs.length){
                presentImg++;
                console.log(presentImg +"//" +imgs.length);
                translateX-=winW;
                photoWrapper.css({
                    "transform" : "translateX("+ translateX +"px)"
                })
            }
        });
        touch.on('#pics', 'swiperight', function(ev){
            if(presentImg > 1){
                presentImg--;
                console.log(presentImg +"//" +imgs.length);
                translateX+=winW;
                photoWrapper.css({
                    "transform" : "translateX("+ translateX +"px)"
                })
            }
        });

    }
})(jQuery);