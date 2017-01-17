$(window).on("scroll", function() {

    console.log('going 2');

    if($(window).scrollTop() > $('#art-0').position().top + 350 ){
        $(".background").addClass("chapter0");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".background").removeClass("chapter0");
    }

    if($(window).scrollTop() > $('#art-1').position().top -275 ){
        $(".background").addClass("chapter1");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".background").removeClass("chapter1");
    } 

    if($(window).scrollTop() > $('#art-2').position().top -275 ){
        $(".background").addClass("chapter2");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".background").removeClass("chapter2");
    }    

    if($(window).scrollTop() > $('#art-3').position().top -275 ){
        $(".background").addClass("chapter3");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".background").removeClass("chapter3");
    }

    if($(window).scrollTop() > $('#art-4').position().top -275 ){
        $(".background").addClass("chapter4");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".background").removeClass("chapter4");
    } 

    if($(window).scrollTop() > $('#art-5').position().top -275 ){
        $(".background").addClass("chapter5");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".background").removeClass("chapter5");
    }      
    


});