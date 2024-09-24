// ----------------------- hero section --------------------------- //

let title = document.querySelector('.hero h5');
let title_our_category = document.querySelector('.our_categories');

let first_title = "ozes phone store";
let seconde_title = "ur categories";

let i = 0;

let ft = setInterval(() => {
    title.innerHTML += first_title[i];
    i++;

    if(i > first_title.length-1){
        clearInterval(ft);
    }
}, 100);

let j = 0;

let st = setInterval(() => {
    title_our_category.innerHTML += seconde_title[j];
    j++;

    if(j > seconde_title.length-1){
        clearInterval(st);
    }
}, 100);

// ----------------- services section -----------------------//

let services_image = document.querySelector(".services_image img");
let back = document.querySelector(".back");
let next = document.querySelector('.next');

let images_slide = ['./assets/Images/sliiii-removebg-preview.png', './assets/Images/sliid2.png'];

let n = 0;

let slider = setInterval(() => {
    
    n++;

    if(n == images_slide.length){
        n = 0;
    }
    services_image.src = images_slide[n];

}, 5000);

let up = document.querySelector('.up');

window.onscroll = function(){
    if(window.scrollY < 400){
        up.style.display = 'none'; 
    }else{
        up.style.display = 'block';
    }
}

up.onclick = function(){
    scroll({
        top: 0,
        left: 0,
    })
}


/* -------------------- category section -------------------------- */

let samsung_category_image = document.querySelector('.samsung_category_image');
let iphone_category_image = document.querySelector('.iphone_category_image');

let iphone_category = document.querySelectorAll('.iphone');
let samsung_category = document.querySelectorAll('.samsung');
var filter_category = document.querySelector('#category');

function samsung(){
        filter_category.value = 'Samsung';
        samsung_category.forEach((e) =>{
            e.classList.remove('hide');
            iphone_category.forEach((e) =>{
                e.classList.add('hide');    
            });
        });   
}



function iphone(){
    filter_category.value = 'iPhone';
    samsung_category.forEach((e) =>{
        e.classList.add('hide');
        iphone_category.forEach((e) =>{
            e.classList.remove('hide');    
        });
    });
}

samsung_category_image.addEventListener('click', samsung);
iphone_category_image.addEventListener('click', iphone);

let footer_samsung = document.querySelector('.footer_samsung');
let footer_iphone = document.querySelector('.footer_iphone');

footer_samsung.addEventListener('click', samsung);
footer_iphone.addEventListener('click', iphone);

filter_category.addEventListener('change', function(){
    if(filter_category.value == 'iPhone'){
        samsung_category.forEach((e) =>{
            e.classList.add('hide');
            iphone_category.forEach((e) =>{
                e.classList.remove('hide');    
            });
        });
        
        
    }else if(filter_category.value == 'Samsung'){
        samsung_category.forEach((e) =>{
            e.classList.remove('hide');
            iphone_category.forEach((e) =>{
                e.classList.add('hide');    
            });
        });
    }else{
        samsung_category.forEach((e) =>{
            e.classList.remove('hide');
            iphone_category.forEach((e) =>{
                e.classList.remove('hide');    
            });
        });
    }
})

/*----------------- responsive ----------------------*/

let menu = document.querySelector('.menu');
let items = document.querySelector('.items');

menu.addEventListener('click', function(){
    items.classList.toggle('show');
});

/*----------------- dark and light mode -------------------*/

let dark = document.querySelector('.bxs-moon');
let body = document.querySelector('body');
let light = document.querySelector('.bxs-sun');

dark.addEventListener('click', function(){
    body.classList.add('dark_mode');
    dark.style.display = 'none';
    light.style.display = 'block';
});

light.addEventListener('click', function(){
    body.classList.remove('dark_mode');
    dark.style.display = 'block';
    light.style.display = 'none';
})
