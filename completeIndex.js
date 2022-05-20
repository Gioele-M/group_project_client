// let setupBTN = document.getElementById("setupBtn")
// let modalBg = document.querySelector(".popup-setup-bg")
// let modalClose = document.querySelector(".modal-close")

// let postSetUpBtn = document.querySelector('postSetUpBtn')

// //Used in popup gif 
// let modalBgGif = document.querySelector(".popup-gif-bg")
// let modalCloseGif = document.querySelector(".modalCloseGif")

// let maxNumChara = 100


// ///////////////////////////////////////////////////////////////
// //POPUP SETUP (Main comment)  
// ///////////////////////////////////////////////////////////////

// function updateCounter(e) {
//     // console.log ("issues here: a")
//     const postBox = document.getElementById ("userComment");
//     let numCharacters = postBox.value.length
//     const characterCounter = document.getElementById('charcounter');
//     characterCounter.textContent=`Characters remaining: ${maxNumChara- numCharacters}`
// }


// setupBTN.addEventListener('click',function(){
//     console.log('setup btn clicked') 
//     modalBg.classList.add('bg-active');
//     document.addEventListener('keydown', updateCounter)
// });


// modalClose.addEventListener('click',function(){
//     console.log('close setup been clicked') 
//     modalBg.classList.remove('bg-active');
// });
// ///////////////////////////////////////////////////////////////
// //END POPUP SETUP (Main comment)  
// ///////////////////////////////////////////////////////////////


// ///////////////////////////////////////////////////////////////
// //POPUP PUNCHLINE
// ///////////////////////////////////////////////////////////////   
// let modalCloseX = document.querySelector(".modal-close-punchline")


// //Outside main
// modalCloseX.addEventListener('click',function(){
//     console.log('close punchline been clicked') 
//     modalBg.classList.remove('bg-active');
// });



// //Outside main
// function updateCounterPunchline(e) {
//     // console.log ("issues here: b")
//    const postBox = document.getElementById ("userCommentPunchlines");
//    let numCharacters = postBox.value.length
//    const characterCounter = document.getElementById('charcounterPunchLine');
//    characterCounter.textContent=`Characters remaining: ${maxNumChara- numCharacters}`
// }

// document.addEventListener('keydown', updateCounterPunchline) //starts the character counter func

// ///////////////////////////////////////////////////////////////
// //END POPUP PUNCHLINE
// ///////////////////////////////////////////////////////////////  


// ///////////////////////////////////////////////////////////////
// //POPUP GIF
// ///////////////////////////////////////////////////////////////

// modalCloseGif.addEventListener('click',function(){
//     console.log('close gif popup been clicked') 
//     modalBgGif.classList.remove('bg-active');
// });





// ///////////////////////////////////////////////////////////////
// //API GIF
// ///////////////////////////////////////////////////////////////
// const apikey = "2EIRww430F9ESfgx9QMKbvuEG2QxXsle"

// let searchBtn = document.getElementById('btn-search')

// //document.addEventListener("content", init);
  
// searchBtn.addEventListener("click", e => {
//     e.preventDefault();
//     let path = `http://api.giphy.com/v1/gifs/search?api_key=${apikey}&limit=5&q=`;
//     let str = document.getElementById("search").value.trim();
//     path += str;
//     console.log("path", path)


//     fetch(path)
//         .then(response => response.json())
//         .then(content =>{
//             console.log(content)
    
//    let resultsHtml = ''
    
//     content.data.forEach(function (obj){
//     let url = obj.images.fixed_width.url
//     const width = obj.images.fixed_width.width
//     const height = obj.images.fixed_height.height
//     resultsHtml += `<img src="${url}" 
//                      width="${width}" 
//                     height="${height}"/>`
    
//      document.getElementById("img-output").innerHTML = resultsHtml;
//     })
//     })
//         .catch(error => {
//         console.log("error")})
//     })
// ///////////////////////////////////////////////////////////////
// //END API GIF
// ///////////////////////////////////////////////////////////////
















///////////////////////////////////////////////////////////////
//MAKE MAIN SECTION 
///////////////////////////////////////////////////////////////
const fetchFunctions = require('./fetch_functions')






let modalBg = document.querySelector(".popup-setup-bg")


let modalBgPunchline = document.querySelector('.popup-punchline-bg')

// let postSetUpBtn = document.querySelector('postSetUpBtn')

//Used in popup gif 
let modalBgGif = document.querySelector(".popup-gif-bg")




function makeMainSection(jokeId, jokeHead, nLol, nMeh, nTom, nComments){

    //Make card div
    const divCard = document.createElement('div')
    divCard.className = 'card'
    divCard.id = 'cardSection'


    //Make card body div ------ Append comments to this!!!! Maybe return reference!!!
    const divCardBody = document.createElement('div')
    divCardBody.className = 'card-body'
    divCardBody.id = 'cardBodySection'

    
    //Make main joke paragraph
    const mainParagraph = document.createElement('p') ////++++++ Main joke text injected here
    mainParagraph.className = 'card-text'
    mainParagraph.id = 'cardText'
    
    /////////////////
    mainParagraph.textContent = jokeHead
    /////////////////
    
    //make emojibar section
    const emojiBarSection = document.createElement('section')
    emojiBarSection.classList.add(['emoji-bar','btnColor'])


    //Make A link and spans for each emoji

    //LOL
    const mainEmojiLolA = document.createElement('a') //++++ event Listener!!
    mainEmojiLolA.className = 'card-link'
    mainEmojiLolA.id = 'emojiBarLolMain'
    mainEmojiLolA.textContent = '🤣'

    /////////////////////////////////////////////////// Event listener
    mainEmojiLolA.addEventListener('click', function(){
        console.log('Lol emoji clicked') 
        fetchFunctions.updateJokeReactions(1,jokeId)
        /////////////////////////////////////////////// Send patch to backend
    })



    const mainEmojiLolSpan = document.createElement('span') // +++++ Inject number of clicks
    mainEmojiLolSpan.className = 'emoji-counter-main'
    mainEmojiLolSpan.id = 'emojiLolMain'

    /////////////////
    mainEmojiLolSpan.textContent = nLol
    /////////////////


    //MEH
    const mainEmojiMehA = document.createElement('a') // ++++ eventListener
    mainEmojiMehA.className = 'card-link'
    mainEmojiMehA.id = 'emojiBarMehMain'
    mainEmojiMehA.textContent = '😐'

    ///////////////////////////// Event listener
    mainEmojiMehA.addEventListener('click', function(){
        console.log('Meh emoji clicked') 
        fetchFunctions.updateJokeReactions(2, jokeId)
        /////////////////////////////////////////////// Send patch to backend
    })

    const mainEmojiMehSpan = document.createElement('span') //++++ inject number of clicks
    mainEmojiMehSpan.className = 'emoji-counter-main'
    mainEmojiMehSpan.id = 'emojiMehMain'

    ///////////////////////
    mainEmojiMehSpan.textContent = nMeh
    ///////////////////////


    //TOM
    const mainEmojiTomA = document.createElement('a') //+++++ eventlistener
    mainEmojiTomA.className = 'card-link'
    mainEmojiTomA.id = 'emojiBarTomMain'
    mainEmojiTomA.textContent = '🍅'

    ////////////////////////////// Event listener
    mainEmojiTomA.addEventListener('click', function(){
        console.log('Tom emoji clicked') 
        fetchFunctions.updateJokeReactions(3, jokeId)
        /////////////////////////////////////////////// Send patch to backend
    })
    

    const mainEmojiTomSpan = document.createElement('span')
    mainEmojiTomSpan.className = 'emoji-counter-main' 
    mainEmojiTomSpan.id = 'emojiTomMain'

    /////////////////////////
    mainEmojiTomSpan.textContent = nTom
    ////////////////////////




    //Make div for comments
    let commentsDiv = document.createElement('div') //!!!>>>>>>>Append comments 
    commentsDiv.classList.add('punchline-section')
    ///////////////////////////////////Return object




    ///// Div for reading all comments +++++ event listener + inject text
    const openCommentsLinkDiv = document.createElement('div')

    const openCommentsLinkA = document.createElement('a') // +++ event listener + inject text
    openCommentsLinkA.className = 'card-link'
    openCommentsLinkA.id = 'commentLink'

    /////////////////////////////////Event listener
    let punchlinesOpen = false 
    openCommentsLinkA.addEventListener('click',function(e){ 
        e.preventDefault()
        console.log('read comments clicked')
        
        if (punchlinesOpen ===false) {
            punchlinesOpen=true    
            commentsDiv.classList.add("DisplayOn")
            
        }
        else {
            punchlinesOpen=false
            commentsDiv.classList.remove("DisplayOn")

        }
        }
    )

    //////////////////////
    openCommentsLinkA.textContent = `Read all ${nComments} comments`
    ///////////////////////


    //Make div for buttons
    let buttonsDiv = document.createElement('div')
    buttonsDiv.className = 'buttonContainer'


    //Make buttons for punchline and giphys

    let punchlineBtn = document.createElement('button') /// -> event listener

    punchlineBtn.classList.add(['punchline-btn', 'btnColor'])
    punchlineBtn.id = 'punchlineBtn'
    punchlineBtn.textContent = 'add punch line'

    ////////////////////////////////////// Event listener
    punchlineBtn.addEventListener('click',function(){
        console.log('add punchline clicked') 
        modalBgPunchline.classList.add('bg-active');
        if(localStorage.getItem('jokeId')){
            localStorage.clear()
        }
        localStorage.setItem('jokeId', jokeId)
    });

    let giphyBtn = document.createElement('button') // -> event listener
    giphyBtn.classList.add(['gif-btn', 'btnColor'])
    giphyBtn.id = 'gifBtn'
    giphyBtn.textContent = 'add giphy'

    ////////////////////event listener
    giphyBtn.addEventListener('click',function(){
        console.log('add gif clicked') 
    
        modalBgGif.classList.add('bg-active');
    
        

    })
    



    



    // Wrap elements!

    //Wrap spans into a 

    mainEmojiLolA.appendChild(mainEmojiLolSpan)

    mainEmojiMehA.appendChild(mainEmojiMehSpan)

    mainEmojiTomA.appendChild(mainEmojiTomSpan)


    //Append As into emojibar section
    emojiBarSection.appendChild(mainEmojiLolA)
    emojiBarSection.appendChild(mainEmojiMehA)
    emojiBarSection.appendChild(mainEmojiTomA)


    //Append comment section a into div
    openCommentsLinkDiv.appendChild(openCommentsLinkA)


    //Put buttons inside buttonsdiv

    buttonsDiv.appendChild(punchlineBtn)
    buttonsDiv.appendChild(giphyBtn)


    // Append p - emojibar and comment link to cardbodysection
    divCardBody.appendChild(mainParagraph)    
    divCardBody.appendChild(emojiBarSection)
    divCardBody.appendChild(openCommentsLinkDiv)

    // Append cardbody and buttons div and start comments cardsectiton 
    divCard.appendChild(divCardBody)
    divCard.appendChild(buttonsDiv)
    divCard.appendChild(commentsDiv)




    return [divCard, commentsDiv, jokeId]

}

///////////////////////////////////////////////////////////////
// MAKE MAIN SECTION
///////////////////////////////////////////////////////////////










///////////////////////////////////////////////////////////////
// MAKE COMMENT SECTION
///////////////////////////////////////////////////////////////


function makeCommentSection(jokeId, lineText, nLol, nMeh, nTom, commentId){
    //Make div for punchline section
    const sectionDiv = document.createElement('div')
    // sectionDiv.className = 'punchline-section'
    sectionDiv.id = 'punchlineSection'

    //Make h6
    const h6 = document.createElement('h6')
    h6.textContent = 'User comment:'

    //User comment container
    const divCommentContainer = document.createElement('div')
    divCommentContainer.className = 'userCommentContainer'

    //User comment paragraph
    const userCommentParagraph = document.createElement('p')
    userCommentParagraph.className = 'userComment'
    userCommentParagraph.id = 'userCommentText'

    //////////////
    userCommentParagraph.textContent = lineText
    ///////////////

    //Emoji bar section
    const emojiBarSectionComment = document.createElement('section')
    emojiBarSectionComment.classList.add(['emoji-bar','btnColor'])


    //All emojis A and spans
    //Lol
    const emojiLolCommentA = document.createElement('a')
    emojiLolCommentA.className = 'card-link'
    emojiLolCommentA.id = 'emojiBarLolComment'
    emojiLolCommentA.textContent = '🤣'

    //////////////////////Event listener
    emojiLolCommentA.addEventListener('click',function(){
        console.log('lol emoji clicked')
        fetchFunctions.updateCommentReaction(1, jokeId, commentId)
        //////////////////////////////////////////// Send patch to backend 
    })


    const emojiLolCommentSpan = document.createElement('span')
    emojiLolCommentSpan.className = 'emoji-counter'
    emojiLolCommentSpan.id = 'emojiLolComment'
    ////////
    emojiLolCommentSpan.textContent = nLol
    ////////


    //Meh 
    const emojiMehCommentA = document.createElement('a')
    emojiMehCommentA.className = 'card-link'
    emojiMehCommentA.id = 'emojiBarMehComment'
    emojiMehCommentA.textContent = '😐'

    //////////////////////Event listener
    emojiMehCommentA.addEventListener('click', function(){
        console.log('meh emoji clicked')
        fetchFunctions.updateCommentReaction(2, jokeId, commentId)

        ////////////////////////////////////////// Send patch to backend
    })
    


    const emojiMehCommentSpan = document.createElement('span')
    emojiMehCommentSpan.className = 'emoji-counter'
    emojiMehCommentSpan.id = 'emojiMehComment'
    ////////
    emojiMehCommentSpan.textContent = nMeh
    ////////



    //Tom
    const emojiTomCommentA = document.createElement('a')
    emojiTomCommentA.className = 'card-link'
    emojiTomCommentA.id = 'emojiBarTomComment'
    emojiTomCommentA.textContent = '🍅'

    //////////////////////Event listener
    emojiTomCommentA.addEventListener('click', function(){
        console.log('meh emoji clicked')
        fetchFunctions.updateCommentReaction(3, jokeId, commentId)

    ////////////////////////////////////////// Send patch to backend
    })




    const emojiTomCommentSpan = document.createElement('span')
    emojiTomCommentSpan.className = 'emoji-counter'
    emojiTomCommentSpan.id = 'emojiTomComment'
    ////////
    emojiTomCommentSpan.textContent = nTom
    ////////


    //Nest elements
    //Nest all spans into as
    emojiLolCommentA.appendChild(emojiLolCommentSpan)
    emojiMehCommentA.appendChild(emojiMehCommentSpan)
    emojiTomCommentA.appendChild(emojiTomCommentSpan)

    //Append As into emojibar section
    emojiBarSectionComment.appendChild(emojiLolCommentA)
    emojiBarSectionComment.appendChild(emojiMehCommentA)
    emojiBarSectionComment.appendChild(emojiTomCommentA)
    

    //Append p and emojibar section into div container
    divCommentContainer.appendChild(userCommentParagraph)
    divCommentContainer.appendChild(emojiBarSectionComment)

    //Append h6 and div to main section div
    sectionDiv.appendChild(h6)
    sectionDiv.appendChild(divCommentContainer)






    return [jokeId, sectionDiv]
}

///////////////////////////////////////////////////////////////
// MAKE COMMENT SECTION
///////////////////////////////////////////////////////////////





module.exports = {makeMainSection, makeCommentSection}
























