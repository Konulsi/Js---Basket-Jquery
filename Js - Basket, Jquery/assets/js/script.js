$(document).ready(function(){

    //ancaq native java scriptde istifade olunur. jquery. Angural, react, viujs vs deist olunmur.

// let elem = document.querySelector("h1")          // bu native jsde goturmek uchundur

let elem = $("h1");
// console.log(elem.text("sagol"));                  //h1 in innertext ini deyiwmek uchundur

// console.log(elem.html("<span>salam</span>"));     //h1 e innerhtml elave etmek


// $(".check").click(function(){
//     $(this).css("background-color","red");
// })


// $(".add").click(function(){
//     $(this).css("background-color","magenta");
//     $(this).next().css("background-color","magenta");
// })


$(".hide").click(function(){
    $(".content").slideUp(500);
  
})


// $(".show").click(function(){
//     $(".content").show(1000, function(){
//         $(this).css("background-color","blue")
//     });
  
// })


// $(".toggle").click(function(){
//     $(".content").toggle(1000);
  
// })




// $(".show").click(function(){
//     $(".content").slideDown(500);
  
// })



// $(".toggle").click(function(){
//     $(".content").slideToggle(500);
  
// })














})
