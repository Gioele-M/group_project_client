///////////////////////////////////////////////////////////////
// INDEX
///////////////////////////////////////////////////////////////
//-counting letters
//-popup setup
//-read comments and display comment section
//-emojibar (commentedout?)
//-popup punchline
//-popup gif
//-search gif
//-api gif
///////////////////////////////////////////////////////////////
// END INDEX
///////////////////////////////////////////////////////////////





///////////////////////////////////////////////////////////////
// COUNTING LETTERS 
///////////////////////////////////////////////////////////////
const maxNumChara = 100; //will update the index.html chara limit & used in counter display
document.getElementById("userComment").setAttribute("maxlength", maxNumChara); //update html chara limit
document.getElementById("userCommentPunchlines").setAttribute("maxlength", maxNumChara);//update html chara limit

function updateCounter(e) {
    // console.log ("issues here: a")
    const postBox = document.getElementById ("userComment");
    let numCharacters = postBox.value.length
    const characterCounter = document.getElementById('charcounter');
    characterCounter.textContent=`Characters remaining: ${maxNumChara- numCharacters}`
}

function updateCounterPunchline(e) {
     // console.log ("issues here: b")
    const postBox = document.getElementById ("userCommentPunchlines");
    let numCharacters = postBox.value.length
    const characterCounter = document.getElementById('charcounterPunchLine');
    characterCounter.textContent=`Characters remaining: ${maxNumChara- numCharacters}`
}
///////////////////////////////////////////////////////////////
// END  COUNTING LETTERS
///////////////////////////////////////////////////////////////





///////////////////////////////////////////////////////////////
//POPUP SETUP (Main comment)  
///////////////////////////////////////////////////////////////
let setupBTN = document.getElementById("setupBtn")
let modalBg = document.querySelector(".popup-setup-bg")
let modalClose = document.querySelector(".modal-close")

setupBTN.addEventListener('click',function(){
    console.log('setup btn clicked') 
    modalBg.classList.add('bg-active');
    document.addEventListener('keydown', updateCounter)
});

modalClose.addEventListener('click',function(){
    console.log('close setup been clicked') 
    modalBg.classList.remove('bg-active');
});
///////////////////////////////////////////////////////////////
//END POPUP SETUP (Main comment)  
///////////////////////////////////////////////////////////////





///////////////////////////////////////////////////////////////
//READ COMMENTS AND DISPLAY COMMENT SECTION(THIS HAS TO BE FIXED)
///////////////////////////////////////////////////////////////
const openComments = document.getElementById('commentLink')
let punchlinesOpen = false 

openComments.addEventListener('click',function(e){ 
    e.preventDefault()
    console.log('read comments clicked')
    const commentSection = document.getElementById('punchlineSection')

    if (punchlinesOpen ===false) {
    punchlinesOpen=true    
    commentSection.classList.add("DisplayOn")
    loadEmmojiBar()

  //ASK GIO ABOUT THE FOLLOWING 
//   make an event listener for each of those that targets
//  the id emojiBarLolMain and injects text in the id emojiLolMain
    //////
    // emoji counter example when read comments is clicked
    function loadEmmojiBar () {

    const lolCounter = document.getElementById("emojiBarLolComment");    // TWO ID EQUAL FOR THESE IN HTML -------- NEEDS CHANGE
    let emojiLolMain = document.getElementById("emojiLolMain");
    const lolTally = 3 ///will be from the api
    lolCounter.textContent = `🤣${lolTally}`;
    lolnum=0
    lolCounter.addEventListener('click',function(){
        console.log('lol emoji clicked') 
        lolnum +++ 1
        emojiLolMain.textContent=  `${lolnum}` 
    });

    const mehCounter = document.getElementById("emojiBarMehComment");
    const mehTally = 3 ///will be from the api
    mehCounter.textContent = `😐${mehTally}`
    mehnum=0
    mehCounter.addEventListener('click',function(){
        console.log('meh emoji clicked') 
        mehnum +++ 1
        emojiMehMain.textContent=  `${mehnum}` 
    });

    let tomCounter = document.getElementById("emojiBarTomComment");
    
    let tomTally = "3333333333333" ///will be from the api
    tomCounter.textContent = `🍅${tomTally}`
    tomnum=0
    tomCounter.addEventListener('click',function(){
        console.log('tomato emoji clicked') 
        tomnum +++ 1
        emojiTomMain.textContent=  `${tomnum}`
    });
}
///////////////////////////////////////////////////////////////
//POPUP PUNCHLINE
///////////////////////////////////////////////////////////////   
    let punchlineBTN = document.getElementById("punchlineBtn")
    let modalBg = document.querySelector(".popup-punchline-bg")
    let modalCloseX = document.querySelector(".modal-close-punchline")

    punchlineBTN.addEventListener('click',function(){
        console.log('add punchline clicked') 
        modalBg.classList.add('bg-active');
    });
        document.addEventListener('keydown', updateCounterPunchline) //starts the character counter func
        modalCloseX.addEventListener('click',function(){
        console.log('close punchline been clicked') 
        modalBg.classList.remove('bg-active');
    });
}
else {
    punchlinesOpen=false
    commentSection.classList.remove("DisplayOn")
}
///////////////////////////////////////////////////////////////
//END POPUP PUNCHLINE
///////////////////////////////////////////////////////////////  




///////////////////////////////////////////////////////////////
//POPUP GIF
///////////////////////////////////////////////////////////////
    let gifBTN = document.getElementById("gifBtn")
    let modalBgGif = document.querySelector(".popup-gif-bg")
    let modalCloseGif = document.querySelector(".modalCloseGif")

    gifBTN.addEventListener('click',function(){
        console.log('add gif clicked') 
    
        modalBgGif.classList.add('bg-active');

        modalCloseGif.addEventListener('click',function(){
        console.log('close gif popup been clicked') 
        modalBgGif.classList.remove('bg-active');
    });




///////////////////////////////////////////////////////////////
//SEARCH GIF
///////////////////////////////////////////////////////////////
    const gifSearchBTN = document.getElementById("gifSearchBTN")
    const gifImageBox = document.getElementById("gifContainer")

    gifSearchBTN.addEventListener('click',function(){
        console.log('search gif clicked') 
        gifImageBox.classList.add('bg-active');
        gifImageBox.style.visibility=false
 })
///////////////////////////////////////////////////////////////
//END SEARCH GIF
///////////////////////////////////////////////////////////////
})
///////////////////////////////////////////////////////////////
//END POPUP GIF
///////////////////////////////////////////////////////////////
})
///////////////////////////////////////////////////////////////
//END READ COMMENTS AND DISPLAY COMMENT SECTION(THIS HAS TO BE FIXED)
///////////////////////////////////////////////////////////////






///////////////////////////////////////////////////////////////
//API GIF
///////////////////////////////////////////////////////////////
const apikey = "2EIRww430F9ESfgx9QMKbvuEG2QxXsle"

let searchBtn = document.getElementById('btn-search')

//document.addEventListener("content", init);
  
searchBtn.addEventListener("click", e => {
    e.preventDefault();
    let path = `http://api.giphy.com/v1/gifs/search?api_key=${apikey}&limit=5&q=`;
    let str = document.getElementById("search").value.trim();
    path += str;
    console.log("path", path)


    fetch(path)
        .then(response => response.json())
        .then(content =>{
            console.log(content)
    
   let resultsHtml = ''
    
    content.data.forEach(function (obj){
    let url = obj.images.fixed_width.url
    const width = obj.images.fixed_width.width
    const height = obj.images.fixed_height.height
    resultsHtml += `<img src="${url}" 
                     width="${width}" 
                    height="${height}"/>`
    
     document.getElementById("img-output").innerHTML = resultsHtml;
    })
    })
        .catch(error => {
        console.log("error")})
    })
///////////////////////////////////////////////////////////////
//END API GIF
///////////////////////////////////////////////////////////////