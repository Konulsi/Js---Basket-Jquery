$(document).ready(function(){


    let navbar = $(".navbar");
    let closeIcon = $(".navbar .closeIcon");
    let openIcon = $(".navbar .openIcon");

    $(".openIcon").click(function(){
        navbar.removeClass("hide-navbar");
        closeIcon.removeClass("d-none");
        $(this).addClass("d-none");
    })

     $(".closeIcon").click(function(){
        navbar.addClass("hide-navbar");
        openIcon.removeClass("d-none");
        $(this).addClass("d-none");
    })




    
    














    
})