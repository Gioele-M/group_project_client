


/*
Main card sample

section .main-section #mainSection {
    br
    div .card #cardSection{

        div .card-body #cardBodySection{       !!!>>>>>>>Append comments to this


            p .card-text #cardText  >>>>Main joke text 

            section .emoji-bar{
                a .card-link #emojiBarLolMain >>> 🤣 +++++ eventListener{
                    span .emoji-counter-main #emojiLolMain >>> n of clicks
                }
                a .card-link #emojiBerMehMain >>> 😐 +++++ eventListener{
                    span .emoji-counter-main #emojiMehMain >>> n of clicks
                }
                a .card-link #emojiBarTomMain >>> 🍅 +++++ eventListener{
                    span .emoji-counter-main #emojiTomMain >>> n of clicks
                }
            }
            div{
                a .card-link #commentLink >>> text Read all ${} comments +++++ eventListener
            }





            ####### Comments are appended here
        }


        button .punchline-btn #punchlineBtn >>> text 'add punch line' +++++ eventListener
        button .gif-btn #gifBtn >>> text 'add gif' +++++ eventListener



    }

    br
}


Comment structure sample

div .punchline-section #punchlineSection{
    h6 >>>> text 'User comment:'
    div .userCommentContainer{
        p .userComment #userCommentText >>>>> punchline text
        section .emoji-bar{
            a .card-link #emojiBarLolComment >>> 🤣{
                span .emoji-counter #emojiLolComment >>> n of click +++++ eventListener
            }
            a .card-link #emojiBarMehComment >>> 😐{
                span .emoji-counter #emojiMehComment >>> n of click +++++ eventListener
            }
            a .card-link #emojiBarTomComment >>> 🍅{
                span .emoji-counter #emojiTomComment >>> n of click +++++ eventListener
            }

        }

    }
}



ALSO NEED TO LINK THE OTHER BUTTONS IN THE PAGE (add setup, gifs into clickable elements to choose which one to publish)





*/


//These require eventlisteners!!!


function makeMainSection(jokeHead, nLol, nMeh, nTom, nComments){
    //Make main section
    const mainSec = document.createElement('section')
    mainSec.className = 'main-section'
    mainSec.id = 'mainSection'

    //{

    //Make card div
    const divCard = document.createElement('div')
    divCard.className = 'card'
    divCard.id = 'cardSection'

    //{

    //Make card body div ------ Append comments to this!!!! Maybe return reference!!!
    const divCardBody = document.createElement('div')
    divCardBody.className = 'card-body'
    divCardBody.id = 'cardBodySection'

    //{
    
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

    const mainEmojiTomSpan = document.createElement('span')
    mainEmojiTomSpan.className = 'emoji-counter-main' 
    mainEmojiTomSpan.id = 'emojiTomMain'

    /////////////////////////
    mainEmojiTomSpan.textContent = nTom
    ////////////////////////


    ///// Div for reading all comments +++++ event listener + inject text

    const openCommentsLinkDiv = document.createElement('div')

    const openCommentsLinkA = document.createElement('a') // +++ event listener + inject text
    openCommentsLinkA.className = 'card-link'
    openCommentsLinkA.id = 'commentLink'

    /////////////////////////////////Event listener
    //////////////////////
    openCommentsLinkA.textContent = `Read all ${nComments} comments`
    ///////////////////////


    //Make buttons for punchline and giphys

    let punchlineBtn = document.createElement('button') /// -> event listener
    punchlineBtn.className = 'punchline-btn'
    punchlineBtn.id = 'punchlineBtn'
    punchlineBtn.textContent = 'add punch line'

    ////////////////////////////////////// Event listener

    let giphyBtn = document.createElement('button') // -> event listener
    giphyBtn.className = 'gif-btn'
    giphyBtn.id = 'gifBtn'
    giphyBtn.textContent = 'add giphy'

    ////////////////////event listener





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


    // Append p - emojibar and comment link to cardbodysection
    divCardBody.appendChild(mainParagraph)
    divCardBody.appendChild(emojiBarSection)
    divCardBody.appendChild(openCommentsLinkDiv)


    // Append cardbody to cardsectiton
    divCard.appendChild(divCardBody)

    //append cardsection to main section
    mainSec.appendChild(divCard)


    return [mainSec, divCardBody]

}










function makeCommentSection(lineText, nLol, nMeh, nTom){
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
    divCommentContainer.appendChild(mainParagraph)
    divCommentContainer.appendChild(emojiBarSectionComment)

    //Append h6 and div to main section div
    sectionDiv.appendChild(h6)
    sectionDiv.appendChild(divCommentContainer)

    return sectionDiv
}



