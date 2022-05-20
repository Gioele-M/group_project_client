const {makeMainSection, makeCommentSection} = require('./completeIndex')
const fetchFunctions = require('./fetch_functions')







const appendToSection = document.querySelector('#mainSection')

let setupBTN = document.getElementById("setupBtn")
let modalBg = document.querySelector(".popup-setup-bg")
let modalClose = document.querySelector(".modal-close")

let modalBgPunchline = document.querySelector('.popup-punchline-bg')

//Used in popup gif 
let modalBgGif = document.querySelector(".popup-gif-bg")
let modalCloseGif = document.querySelector(".modalCloseGif")

const postPunchlineBtn = document.querySelector('#postPunchlineBtn')

let maxNumChara = 150





//Punch line text declaration
const punchLineText = document.getElementById ("userCommentPunchlines")


///////////////////////////////////////////////////////////////
//POPUP SETUP (Main comment)  
///////////////////////////////////////////////////////////////

function updateCounter(e) {
    // console.log ("issues here: a")
    let numCharacters = setUpText.value.length
    const characterCounter = document.getElementById('charcounter');
    characterCounter.textContent=`Characters remaining: ${maxNumChara- numCharacters}`
}





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
    modalBgPunchline.classList.remove('bg-active');
    
});



//Outside main
function updateCounterPunchline(e) {
    // console.log ("issues here: b")
   let numCharacters = punchLineText.value.length
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

//Load page and create elements
fetchFunctions.getAllJokes().then(data=>{
    console.log('this is the data from arrow ' + data[0].jokeText)
    for (const element of data) {
        const {id, jokeText, jokeEmoji, comments, jokeReactions} = element
        console.log(id, jokeText, jokeEmoji, comments, jokeReactions)



        // Create main element and get all references
        const [divCard, commentsDiv, jokeId] = makeMainSection(id, jokeText, jokeReactions.emoji1, jokeReactions.emoji2, jokeReactions.emoji3, comments.length)

        //Append divCard to main container
        appendToSection.appendChild(divCard)

        
        for(const comment of comments){

            const [jokeIdforComment, sectionDiv] = makeCommentSection(jokeId, comment.commentText, comment.commentReactions.emoji1, comment.commentReactions.emoji2, comment.commentReactions.emoji3, comment.commentID)

            commentsDiv.appendChild(sectionDiv)

        }

        //[jokeId, sectionDiv]

        // Create comments 
    }
})







// Post joke Send info 


//Used to publish setup
const postSetUpBtn = document.querySelector('#postSetUpBtn')
const setUpText = document.getElementById ("userComment")

//Event listener for publishing setup
postSetUpBtn.addEventListener('click', ()=>{
    let samplePostJoke = {
        "jokeText": setUpText.value,
        "jokeEmoji": "#",
        "jokeReactions": {
            "emoji1": 0,
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
    }
    
    //Get data from setup text and send to server
    let response = fetchFunctions.postJoke(samplePostJoke)

    response.then(e=>{
        console.log(e)
    })

})



setupBTN.addEventListener('click',function(){
    console.log('setup btn clicked') 
    modalBg.classList.add('bg-active');
    document.addEventListener('keydown', updateCounter)
});

postPunchlineBtn.addEventListener('click', (e)=>{
    console.log('punchline was posted')
    // Get data from punchLineText and send to server
    // punchLineText
    const samplePostComment= {
        "commentID": 3,
        "commentText": punchLineText.value,
        "commentReactions": {
          "emoji1": 0,
          "emoji2": 0,
          "emoji3": 0
        }

    }
    let requestJokeId = localStorage.getItem('jokeId')
    
    fetchFunctions.postComment(samplePostComment, requestJokeId)
    
    console.log('Requested joke id: ' +requestJokeId)

})


//Need to work around this

// Eventlistener local storage(?)

//Try reloading the css



