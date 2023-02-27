"use strict"


let tableBody = document.querySelector("tbody");  //table bodysini goturmek uchun

let products = JSON.parse(localStorage.getItem("basket"));  // localda olan productlari goturmek uchun


getBasketDatas();

function getBasketDatas() {


    if (products != null) {

        for (const product of products) {
            tableBody.innerHTML += `<tr data-id="${product.id}" >
        <td>
        <img src="${product.img}" alt="">
        </td>
        <td>${product.name}</td>
        <td>${product.description}</td>
        <td>${product.price} AZN</td>
        <td>
        <span class="minus">- </span>
        <span>${product.count}</span>
        <span class="plus"> +</span>
        </td>
        <td><i class="fa-solid fa-trash-can delete"></i></td>
        </tr>`
        }

        getBasketCount(products); 
       
    } else {
        showAlert();
    }
}

function showAlert(){
    document.querySelector("table").classList.add("d-none");
    document.querySelector(".alert-danger").classList.remove("d-none");
    document.querySelector(".total-tittle").classList.add("d-none")
    document.querySelector(".total-tittle").nextElementSibling.classList.add("d-none");

}


function getBasketCount(arr) {
    let sum = 0;
    for (const item of arr) {
        sum += item.count
    }
    document.querySelector("sup").innerText = sum;
}




//DELETE DATA FROM BASKET

function deleteProduct(id) {
    products = products.filter(m => m.id != id);
    localStorage.setItem("basket", JSON.stringify(products));
}


let deleteIcons = document.querySelectorAll(".delete");

deleteIcons.forEach(icon => {
    icon.addEventListener("click", function () {
        let id = parseInt(this.parentNode.parentNode.getAttribute("data-id"));
        deleteProduct(id);   //localdan silir
        this.parentNode.parentNode.remove();   //UI-dan silir
        if(products.length == 0){
            localStorage.removeItem("basket");   //basketi tamam silir
            showAlert();
        }

        showTotalPrice();
        getBasketCount(products);

        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            showConfirmButton: false,
            timer: 1000
          })

    })
});



//total price
function showTotalPrice(){
    if(products != null){
        let tittle = document.querySelector(".total-tittle");
        tittle.classList.remove("d-none");
        tittle.nextElementSibling.classList.remove("d-none");

        let sum = 0;
        for (const product of products) {
            sum += parseInt(product.price);
        }
        tittle.nextElementSibling.innerHTML = sum + " AZN";
    }
}
showTotalPrice();



let plusIcons = document.querySelectorAll("tbody tr td .plus")

for (const plusIcon of plusIcons) {
    
    plusIcon.addEventListener("click", function () {
        
        let res = 0;
        for (const product of products) {
            if (product.id == plusIcon.parentNode.parentNode.getAttribute("data-id")) {            
                plusIcon.previousElementSibling.innerText++; 
                let nativePrice = product.price/product.count;        //mehsulun oz qiymetini almaq uchun esas sehifene add olunannan sonra hemin meblegi mehsulun sayina boluruk ki, oz qiymetini bu sehifede tapa bilek.                        
                product.count++;                                      //mehsulun sayini artirdiqca...
                product.price = nativePrice*product.count;             //mehsulun qiymetini tapmaq uchun, tapdigimiz oz qoymetini sayina vururuq.(meselen 3 dene varsa oz qiymeti 3e vurub yazdiririq)
                // res = nativePrice * product.count;                     //neticeni yazdirmq uchun oz qiymetini sayina vururuq.
                plusIcon.parentNode.previousElementSibling.innerText = product.price;
            }
        }
        
        localStorage.setItem("basket", JSON.stringify(products));  //en sonda yene locala yazdiririq neticeni
     
        showTotalPrice()     //totalda gosteririk                                                          
    })
}





let minusIcons = document.querySelectorAll("tbody tr td .minus")

for (const minusIcon of minusIcons) {
    minusIcon.addEventListener("click", function () {
        for (const product of products) {
            if (product.id == minusIcon.parentNode.parentNode.getAttribute("data-id")) {
                if (minusIcon.nextElementSibling.innerText == 1) {
                    return;
                }
                minusIcon.nextElementSibling.innerText--;
                let nativePrice = product.price/product.count; 
                product.count--;
                product.price = nativePrice*product.count;
                // res = nativePrice * product.count;
                minusIcon.parentNode.previousElementSibling.innerText = product.price;
            }
        }
        localStorage.setItem("basket", JSON.stringify(products))

        showTotalPrice() 
    })
}




