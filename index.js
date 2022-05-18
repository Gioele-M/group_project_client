/////////i delete require yargs, it was breaking the code


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




////////////////////////////////////////////////////
//CLICK READ comments and display comment section
const openComments = document.getElementById('comment-link')
let punchlinesOpen = false 

openComments.addEventListener('click',function(e){ 
    e.preventDefault()
    console.log('read comments clicked')
    const commentSection = document.getElementById('punchline-section')

    if (punchlinesOpen ===false) {
    punchlinesOpen=true    
    commentSection.classList.add("DisplayOn")
    loadEmmojiBar()
   
    //////
    // emoji counter example when read comments is clicked
    function loadEmmojiBar () {

    const lolCounter = document.getElementById("emoji-bar-lol");
    const lolTally = 3 ///will be from the api
    lolCounter.textContent = `🤣${lolTally}`

    const mehCounter = document.getElementById("emoji-bar-meh");
    const mehTally = 3 ///will be from the api
    mehCounter.textContent = `😐${mehTally}`

    let tomCounter = document.getElementById("emoji-bar-tom");
    let tomTally = "3333333333333" ///will be from the api
    tomCounter.textContent = `🍅${tomTally}`

}
    ///////////////Nasims start
    let punchlineBTN = document.getElementById("punchline-btn")
    let modalBg = document.querySelector(".modal-bg")
    let modalClose = document.querySelector(".modal-close")

    punchlineBTN.addEventListener('click',function(){
        console.log('has been clicked') 
        modalBg.classList.add('bg-active');
    });

    modalClose.addEventListener('click',function(){
        console.log('has been clicked') 
        modalBg.classList.remove('bg-active');
    });
    ///////////////Nasims end
}
else {
    punchlinesOpen=false
    commentSection.classList.remove("DisplayOn")
}

});













module.exports= scripts