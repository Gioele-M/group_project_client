function scripts (){
    console.log("I am JS")
}

// const addNewComment = document.getElementsByClassName('btn')
const addNewComment = document.querySelector('form')

addNewComment.addEventListener('click',function(e){ 
    e.preventDefault()
    console.log('btn clicked')
    document.createElement('ul')
});

//CLICK README
const openComments = document.getElementById('commentLink')
const commentSection = document.getElementById('CommentSection')

openComments.addEventListener('click',function(e){ 
    e.preventDefault()
    console.log('readme clicked')
    
    commentSection.classList.add("DisplayOn")
});



///////////////Nasims start
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
///////////////Nasims end


module.exports= scripts