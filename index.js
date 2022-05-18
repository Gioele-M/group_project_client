/////////i delete require yargs, it was breaking the code
// const { string } = require("yargs");

///this func is for testing with jest
// function scripts (){
//     console.log("I am JS")
// }



//////////////////////////// COUNTING LETTERS // only working for add setp
const maxNumChara = 10;
document.getElementById("userComment").setAttribute("maxlength", maxNumChara);
document.getElementById("userCommentPunchlines").setAttribute("maxlength", maxNumChara);


document.addEventListener('keydown', updateCounter)
//add an if to check if the popbox is on?



function updateCounter(e) {
    const postBox = document.getElementById ("userComment");
    console.log('key has been pressed in form box')
    let numCharacters = postBox.value.length
    console.log("num of characters:",numCharacters)

    // update text counter
    const characterCounter = document.getElementById('charcounter');
    characterCounter.textContent=`Characters remaining: ${maxNumChara- numCharacters}`
}



function updateCounterPunchline(e) {
    const postBox = document.getElementById ("userCommentPunchlines");
    console.log('key has been pressed in form box')
    let numCharacters = postBox.value.length
    console.log("num of characters:",numCharacters)

    // update text counter
    const characterCounter = document.getElementById('charcounterPunchLine');
    characterCounter.textContent=`Characters remaining: ${maxNumChara- numCharacters}`
}
////////////////////////////END  COUNTING LETTERS








    

//CLICK READ comments and display comment section
////////////////////////////////////////////////////
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
    //turns on the punchline modal 
    let punchlineBTN = document.getElementById("punchline-btn")
    let modalBg = document.querySelector(".popup-punchline-bg")
    let modalCloseX = document.querySelector(".modal-close-punchline")


    punchlineBTN.addEventListener('click',function(){
        console.log('add punchline clicked') 
        modalBg.classList.add('bg-active');
    });
    
        document.addEventListener('keydown', updateCounterPunchline)

        modalCloseX.addEventListener('click',function(){
        console.log('close punchline been clicked') 
        modalBg.classList.remove('bg-active');
    });

    ///////////////
}
else {
    punchlinesOpen=false
    commentSection.classList.remove("DisplayOn")
}
});

//turns on the SETUP modal 
let setupBTN = document.getElementById("setup-btn")
let modalBg = document.querySelector(".popup-setup-bg")
let modalClose = document.querySelector(".modal-close")

setupBTN.addEventListener('click',function(){
    console.log('setup btn clicked') 
    modalBg.classList.add('bg-active');
  
});

modalClose.addEventListener('click',function(){
    console.log('close setup been clicked') 
    modalBg.classList.remove('bg-active');
});








// module.exports= scripts