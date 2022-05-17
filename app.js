let modalBtn = document.querySelector(".modal-button")
let modalBg = document.querySelector(".modal-bg")

modalBtn.addEventListener('click',function(){
    console.log('has been clicked') 
    modalBg.classList.add('bg-active');
});