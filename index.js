// const { string } = require("yargs");

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
const openComments = document.getElementById('comment-link')
const commentSection = document.getElementById('CommentSection')

openComments.addEventListener('click',function(e){ 
    e.preventDefault()
    console.log('readme clicked')
    
    commentSection.classList.add("DisplayOn")

        
    //////
    // emoji counter example when readcomments is clicked

    const lolCounter = document.getElementById("emoji-bar-lol");
    const lolTally = 3 ///will be from the api
    lolCounter.textContent = `🤣${lolTally}`

    const mehCounter = document.getElementById("emoji-bar-meh");
    const mehTally = 3 ///will be from the api
    mehCounter.textContent = `😐${mehTally}`

    let tomCounter = document.getElementById("emoji-bar-tom");
    let tomTally = "3333333333333" ///will be from the api
    tomCounter.textContent = `🍅${tomTally}`
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