


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
        button .git-btn #gifBtn >>> text 'add gif' +++++ eventListener



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

    //Make 2 br
    const br1 = document.createElement('br')
    const br2 = document.createElement('br')

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
    
    












}










function makeCommentSection(lineText, nLol, nMeh, nTom)



