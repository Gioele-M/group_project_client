#index js

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

#html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"> -->
    <link rel="stylesheet" href="index.css">
    <script defer src="index.js"></script>
    <title>Cars</title>
</head>
<body>

<!-- BTN setup POPUP -->
<button class="setup-btn" id="setup-btn">add set up</button>

<!-- MAIN CARD -->
    <section class = "main-section" id = "main-section" >
        <br>
        <div class="card" id="mainComment" >
            <div class="card-body" >
            <p class="card-text" id="card-text">Chips, crisps, bangers 'n' mash, boil 'em mash 'em, stick'em in a stew.</p>
            <h6 class="card-subtitle mb-2 text-muted" id="mainCommentUserName">by Tom</h6>
            <!-- <a href="#" class="card-link" id="emojiBar">🤣😐🍅</a> -->

                <div >
                    <a href="#" class="card-link" id="comment-link">Read all 12 comments</a>    
                </div>
            </div>
<!-- ............................... -->
<!-- read comment section -->
        <div class="punchline-section" id="punchline-section">
            <h6>Users comments:</h6>

            <div class="userCommentContainer">
                <p class="userComment">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto quos eaque nesciunt possimus deleniti, et voluptate facere voluptates placeat exce</p>
                <section class="emoji-bar" >   
                    <a href="#" class="card-link" id="emoji-bar-lol">🤣5  </a>
                    <a href="#" class="card-link" id="emoji-bar-meh">😐16  </a>
                    <a href="#" class="card-link" id="emoji-bar-tom">🍅48  </a>
                </section>
            </div>


            <!-- BTN MODAL POPUP -->
            <button class="punchline-btn" id="punchline-btn">add punch line</button>


        </div>
        
    </div>
        <br>
    </section>


<!-- //////////////////////Popups//////////////////////// -->
<!-- popup- setup -->
    <div class="popup-setup-bg">
        <div class="setup-modal modal"> 
            <h2> Enter a Setup below</h2>
             <form>
                 <label for="user-name">Name:</label>
                 <input id="user-name" type="text" />
                 <label for="user-comment">Setup</label>
                 <textarea id="userComment" maxlength="100" placeholder="Start typing"></textarea>
                 <button class="post">Post</button>
                 <span class="modal-close">X</span>
                 <p  id="charcounter"></p>
             </form>
            </div>
      </div>  

<!-- popup- punchline -->
<div class="popup-punchline-bg">
    <div class="modal"> 
        <h2> Enter a Punchline below</h2>
         <form>
             <label for="user-name">Name:</label>
             <input id="user-name" type="text" />
             <label for="user-comment">Punchline</label>
             <textarea id="userCommentPunchlines" maxlength="100" placeholder="Start typing"></textarea>
             <button class="post">Post</button>
             <span class="modal-close-punchline">X</span>
             <p  id="charcounterPunchLine"></p>
         </form>
        </div>
  </div>  



</body>
</html>

#css
.main-section{
    margin: 5%;
    background-color: rgb(70, 63, 63);
    border-radius: 5px 5px;
    

}

.card {

    background-color: rgb(168, 202, 231);
    margin: 5%;
    border-radius: 2px 5px;

}

.emoji-bar {
    margin: 3%;
    max-width: fit-content;
    background-color: rgb(245, 242, 242);
    /* margin: auto; */
}

.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* grid-gap: 20px; */
    align-items: center;
    width: fit-content;
}

.punchline-btn{
position: sticky;

}



.punchline-section{
    margin: 2%;
    display: none;
    background-color: rgba(255, 255, 255, 0.5);
}


.DisplayOn{
    display: block;
}


/* /////////////////////////////////nasims */

.popup-setup-bg{
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s;
}

.popup-punchline-bg{
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s;
}

.bg-active{
    visibility: visible;
    opacity: 1;
}

.modal {
     position:relative ;
     background-color: white;
     width:30%;
     height: 30%;
   
}
form{
     display: flex;
     justify-content: space-around;
     align-items: center;
     flex-direction: column;
}

h2{
    text-align: center;
}

.post{
     padding: 10px 20px;
     background-color: rgb(66, 138, 180);
     color: white;
     font-weight: 500;
     margin-top: 10px;
}



.modal-close{
    position: absolute;
    top:0;
    right:0;
    font-weight: bold;
    cursor: pointer;
    padding: 10px;
}

.modal-close-punchline{
    position: absolute;
    top:0;
    right:0;
    font-weight: bold;
    cursor: pointer;
    padding: 10px;
}