$(document).ready(function () {


    let headers = $(".item");
    let contents = $(".items");

    headers.click(function (e) {

        // e.preventDefault();
        $(".active").removeClass("active");
        $(this).addClass("active");

        let index = $(this).index();
        contents.hide();
        contents.eq(index).show();




    })








})



































$(".active").removeClass(".active");
$(this).addClass("active");
var index = $(this).index();
contents.hide();
contents.eq(index).show();