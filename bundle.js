(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
    emojiBarSection.className = 'emoji-bar'

    //Make A link and spans for each emoji

    //LOL
    const mainEmojiLolA = document.createElement('a') //++++ event Listener!!
    mainEmojiLolA.className = 'card-link'
    mainEmojiLolA.id = 'emojiBarLolMain'
    mainEmojiLolA.textContent = '🤣'

    /////////////////////////////////////////////////// Event listener
    mainEmojiLolA.addEventListener('click', function(){
        console.log('Lol emoji clicked') 
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
    commentsDiv.className = 'punchline-section'
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
        }else {
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
    punchlineBtn.className = 'punchline-btn'
    punchlineBtn.id = 'punchlineBtn'
    punchlineBtn.textContent = 'add punch line'

    ////////////////////////////////////// Event listener
    punchlineBtn.addEventListener('click',function(){
        console.log('add punchline clicked') 
        modalBg.classList.add('bg-active');
    });

    let giphyBtn = document.createElement('button') // -> event listener
    giphyBtn.className = 'gif-btn'
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


function makeCommentSection(jokeId, lineText, nLol, nMeh, nTom){
    //Make div for punchline section
    const sectionDiv = document.createElement('div')
    sectionDiv.className = 'punchline-section'
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
    emojiBarSectionComment.className = 'emoji-bar'


    //All emojis A and spans
    //Lol
    const emojiLolCommentA = document.createElement('a')
    emojiLolCommentA.className = 'card-link'
    emojiLolCommentA.id = 'emojiBarLolComment'
    emojiLolCommentA.textContent = '🤣'

    //////////////////////Event listener
    emojiLolCommentA.addEventListener('click',function(){
        console.log('lol emoji clicked')
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






















// const trybtn = document.querySelector('#setupBtn')
// const appendToSection = document.querySelector('#mainSection')



// const sampleText = 'why did the chicken cross the road'


// //Add comment to existing bit 
// const addCommentBtn = document.querySelector('#punchlineBtn')
// const appendCommentsHere = document.querySelector('#cardBodySection')

// addCommentBtn.addEventListener('click', (e)=>{
//     appendCommentsHere.appendChild(makeCommentSection(sampleText, 1, 1,1))

// })






// trybtn.addEventListener('click', (e)=>{

//     let [mainJoke, commentSection] = makeMainSection(sampleText, 1, 1, 1, 1)

//     appendToSection.appendChild(mainJoke)

//     //per comment in comments

//     commentSection.appendChild(makeCommentSection(sampleText, 1, 1, 1))

// })




















////////////////////////////////
// const api_url ='https://dream-team-server.herokuapp.com/'

// import fetch from 'node-fetch'


// //They all return promises though


// //Get functions

// //Get all jokes
// async function getAllJokes(){
//     try{
//         let url=`${api_url}jokes/`
//         const response = await fetch(url)
//         const data = await response.json()
//         console.log(data)
//         for (const comment of data) {
//             appendToSection.append(makeMainSection(sampleText, 1, 1, 1, 1))
            
//         }
//         return data
//     }catch(err){
//         console.log({message: err.message})
//     }
// }

// getAllJokes()

},{}],2:[function(require,module,exports){
const api_url ='https://dream-team-server.herokuapp.com/'

// import fetch from 'node-fetch'



//They all return promises though


//Get functions

//Get all jokes
async function getAllJokes(){
    try{
        let url=`${api_url}jokes/`
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        return data
    }catch(err){
        console.log({message: err.message})
    }
}

// getAllJokes()



//Get jokes by ID
async function getJokesById(id){
    try{
        let url=`${api_url}jokes/${id}`
        const response = await fetch(url)
        const data = await response.json()
        // console.log(data)
        return data
    }catch(err){
        console.log({message: err.message})
    }
}



//Get joke's comments

async function getJokeComments(id){
    try{
        let url=`${api_url}jokes/${id}/comments`
        const response = await fetch(url)
        const data = await response.json()
        // console.log(data)
        return data
    }catch(err){
        console.log({message: err.message})
    }
}







//Post functions

//Post a joke

async function postJoke(request){
    try{
        let url=`${api_url}jokes/new`

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        })
        const data = await response.text()
        console.log(data)
        return data
    }catch(err){
        console.log({message: err.message})
    }
}

let samplePostJoke = [{
    "jokeText": "This is a sample text for posting a joke",
    "jokeEmoji": "#",
    "jokeReactions": {
        "emoji1": 2,
        "emoji2": 0,
        "emoji3": 0 
    },
    "comments": [
        {
            "commentID": 1, 
            "commentText": "This is a sample comment too!",
            "commentReactions":{
                "emoji1": 0, 
                "emoji2": 0,
                "emoji3": 0 
            }
        }
    ]
}]


// postJoke(samplePostJoke)



//Post a comment
async function postComment(request, jokeId){
    try{
        let url=`${api_url}jokes/${jokeId}/comments/new`

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        })
        const data = await response.text()
        console.log(data)
        return data
    }catch(err){
        console.log({message: err.message})
    }
}

const samplePostComment= {
    "commentID": 3,
    "commentText": "Test comment",
    "commentReactions": {
      "emoji1": 0,
      "emoji2": 0,
      "emoji3": 0
    }
}

// postComment(samplePostComment, 1)





//Delete functions

//Delete a joke
async function deleteJoke(jokeId){
    try{
        let url=`${api_url}jokes/${jokeId}`

        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'none'
            }
        })
        const data = await response.text()
        console.log(data)
    }catch(err){
        console.log({message: err.message})
    }
}

// deleteJoke(2)


//Delete a comment

async function deleteComment(request, jokeId){
    try{
        let url=`${api_url}jokes/${jokeId}/comments/`

        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        })
        const data = await response.text()
        console.log(data)
    }catch(err){
        console.log({message: err.message})
    }
}

// deleteComment(samplePostComment, 1)





//Patch functions!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//Update joke text 

async function updateJokeTextAndGiphy(request, jokeId){
    try{
        let url=`${api_url}jokes/${jokeId}`

        const response = await fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        })
        const data = await response.text()
        console.log(data)
    }catch(err){
        console.log({message: err.message})
    }
}

let samplePatchJokeText ={
    "jokeText": "This it!"
}
let samplePatchJokeEmoji ={
    "jokeEmoji": "This is the text that goes instead of link "
}

// updateJokeTextAndGiphy(samplePatchJokeText, 1)
// updateJokeTextAndGiphy(samplePatchJokeEmoji, 1)



//Add emoji 1-2-3 to joke



async function updateJokeReactions(emojiN, jokeId){
    try{

        //Determine which emoji reaction will be added to post, then send request
        const patchReaction1 = {
            "jokeReactions": {
            "emoji1": 1
            }
        }
        const patchReaction2 = {
            "jokeReactions": {
            "emoji2": 1
            }
        }
        const patchReaction3 = {
            "jokeReactions": {
            "emoji3": 1
            }
        }

        let request

        //Do switch statement instead
        if(emojiN == 1){
            request = patchReaction1
        }
        else if(emojiN == 2){
            request = patchReaction2
        }
        else if(emojiN == 3){
            request = patchReaction3
        }else{
            throw new Error('This emoji does not exist')
        }

        let url=`${api_url}jokes/${jokeId}`

        const response = await fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        })
        const data = await response.text()
        console.log(data)

    }catch(err){
        console.log({message: err.message})
    }
}

// updateJokeReactions(3, 1)








//Update comment text
//Where do I insert comment id?
async function updateCommentText(request, jokeId){
    try{
        let url=`${api_url}jokes/${jokeId}/comments`

        const response = await fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        })
        const data = await response.text()
        console.log(data)

    }catch(err){
        console.log({message: err.message})
    }
}

let samplePatchCommentText = {
    "commentID": 1,
    "commentText": "Test comment 2"
}

// updateCommentText(samplePatchCommentText, 1)


//Add emoji 1-2-3 to comment
async function updateCommentReaction(emojiN, jokeId, commentID){

    //Determine request to send
    let request
    //Do switch statement instead
    if(emojiN == 1){
        request = {
            "commentID": commentID,
            "commentReactions": {
              "emoji1": 1
            }
        }
    }
    else if(emojiN == 2){
        request = request = {
            "commentID": commentID,
            "commentReactions": {
              "emoji2": 1
            }
        }
    }
    else if(emojiN == 3){
        request = request = {
            "commentID": commentID,
            "commentReactions": {
              "emoji3": 1
            }
        }
    }else{
        throw new Error('This emoji does not exist')
    }

    let url=`${api_url}jokes/${jokeId}/comments`

    const response = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
    })
    const data = await response.text()
    console.log(data)

}


// updateCommentReaction(1,1,1)




module.exports = {getAllJokes, getJokesById, getJokeComments, postJoke, postComment, deleteJoke, deleteComment, updateJokeTextAndGiphy, updateJokeReactions, updateCommentText, updateCommentReaction}

},{}],3:[function(require,module,exports){
const {makeMainSection, makeCommentSection} = require('./completeIndex')
const fetchFunctions = require('./fetch_functions')







const appendToSection = document.querySelector('#mainSection')

let setupBTN = document.getElementById("setupBtn")
let modalBg = document.querySelector(".popup-setup-bg")
let modalClose = document.querySelector(".modal-close")

// let postSetUpBtn = document.querySelector('postSetUpBtn')

//Used in popup gif 
let modalBgGif = document.querySelector(".popup-gif-bg")
let modalCloseGif = document.querySelector(".modalCloseGif")

let maxNumChara = 100


///////////////////////////////////////////////////////////////
//POPUP SETUP (Main comment)  
///////////////////////////////////////////////////////////////

function updateCounter(e) {
    // console.log ("issues here: a")
    const postBox = document.getElementById ("userComment");
    let numCharacters = postBox.value.length
    const characterCounter = document.getElementById('charcounter');
    characterCounter.textContent=`Characters remaining: ${maxNumChara- numCharacters}`
}


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
//POPUP PUNCHLINE
///////////////////////////////////////////////////////////////   
let modalCloseX = document.querySelector(".modal-close-punchline")


//Outside main
modalCloseX.addEventListener('click',function(){
    console.log('close punchline been clicked') 
    modalBg.classList.remove('bg-active');
});



//Outside main
function updateCounterPunchline(e) {
    // console.log ("issues here: b")
   const postBox = document.getElementById ("userCommentPunchlines");
   let numCharacters = postBox.value.length
   const characterCounter = document.getElementById('charcounterPunchLine');
   characterCounter.textContent=`Characters remaining: ${maxNumChara- numCharacters}`
}

document.addEventListener('keydown', updateCounterPunchline) //starts the character counter func

///////////////////////////////////////////////////////////////
//END POPUP PUNCHLINE
///////////////////////////////////////////////////////////////  


///////////////////////////////////////////////////////////////
//POPUP GIF
///////////////////////////////////////////////////////////////

modalCloseGif.addEventListener('click',function(){
    console.log('close gif popup been clicked') 
    modalBgGif.classList.remove('bg-active');
});





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














/////////////////////////////////////////////////////////
////////    INTERACTIVE PART 
//////////////////////////////////////////////////////////



fetchFunctions.getAllJokes().then(data=>{
    console.log('this is the data from arrow ' + data[0].jokeText)
    for (const element of data) {
        const {id, jokeText, jokeEmoji, comments, jokeReactions} = element
        console.log(id, jokeText, jokeEmoji, comments, jokeReactions)



        // Create main element and get all references
        [divCard, commentsDiv, jokeId] = makeMainSection(id, jokeText, jokeEmoji.emoji1, jokeEmoji.emoji2, jokeEmoji.emoji3, comments.length)

        //Append divCard to main container
        appendToSection.appendChild(divCard)





        // Create comments 
    }
})



// [data.id, data.jokeText, data.jokeEmoji, data.comments.length, data.jokeReactions]

},{"./completeIndex":1,"./fetch_functions":2}]},{},[3]);
