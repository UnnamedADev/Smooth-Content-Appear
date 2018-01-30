"use strict";

//const
    const duration = 300;
    const widthDelay = 0;
    const timeDelay = 200;

$(document).ready(function(){

    //code
    var elmnts = $(document).find("p, h3, h4, h5, h6");
    
    for(var k=0;k<elmnts.length;k++){
       elmnts[k].style.opacity = 0.0;
    }
    
    check(elmnts);
    
    $(window).scroll(function(){
        check(elmnts);
    });
    
});

//functions

function check(elmnts){

    var usrStrt = $(window).scrollTop();
    var usrEnd = usrStrt + $(window).height();
    
    for(var i=0;i<elmnts.length;i++){
        
        var elmntStart = $(elmnts[i]).position().top;
        var elmntEnd = elmntStart + $(elmnts[i]).height();
        
       if(elmntEnd < usrEnd - widthDelay){
            
            if(elmnts[i].style.opacity == 0){
                
                    $(elmnts[i]).delay(timeDelay).animate({
                            opacity: 1
                        },duration);
                    
            } 
       }
        
    }

}

