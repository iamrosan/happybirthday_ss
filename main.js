let mgcone = document.getElementById('magicone');
let divbox = document.getElementById('disBox');
let imgBox = document.querySelector('.img-container');
let hfrtag = document.getElementsByTagName('h2');
let sc = setTimeout(displayBox,3000);


function displayBox(){
    imgBox.style.display='none';
    divbox.style.display='flex';
}


function display(){
    divbox.style.display='none';
    mgcone.style.display='flex';
    setTimeout(function(){
        hfrtag[0].style.display='inline';
    },2000);
}