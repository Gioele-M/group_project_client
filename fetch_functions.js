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

getAllJokes()



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


module.exports = {getAllJokes, getJokesById, getJokeComments, postJoke, postComment,deleteJoke, deleteComment,updateJokeTextAndGiphy, updateJokeReactions, updateCommentText, updateCommentReaction}

