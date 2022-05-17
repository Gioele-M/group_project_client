let modalBtn = document.querySelector(".modal-button")
let modalBg = document.querySelector(".modal-bg")

modalBtn.addEventListener('click',function(){ 
    console.log('btn clicked')
    modalBg.classList.add('.bg-visible');
});