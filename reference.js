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
