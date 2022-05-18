let modalBtn = document.querySelector(".modal-button")
let modalBg = document.querySelector(".modal-bg")
let modalClose = document.querySelector(".modal-close")

modalBtn.addEventListener('click',function(){
    console.log('has been clicked') 
    modalBg.classList.add('bg-active');
});

modalClose.addEventListener('click',function(){
    console.log('has been clicked') 
    modalBg.classList.remove('bg-active');
});
