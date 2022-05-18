const api_url ='https://dream-team-server.herokuapp.com/'

import fetch from 'node-fetch'


//They all return promises though


//Get functions

//Get all jokes
async function getAllJokes(){
    try{
        let url=`${api_url}jokes/`
        const response = await fetch(url)
        const data = await response.json()
        return data
    }catch(err){
        console.log({message: err.message})
    }
}




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



// function getJokesByIdFetch(id){
//     let url=`${api_url}jokes/${id}`
//     fetch(url)
//         .then(response => response.json())
//         .then(data =>{
//             console.log(data)
//             return data
//         })
// }





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

//Add emoji 1-2-3 to joke



//Update comment text
//Add emoji 1-2-3 to comment



