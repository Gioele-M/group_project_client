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



//Post a comment






//Delete functions


//Delete a joke


//Delete a comment









//Patch functions

//Update joke text 

//Add emoji 1-2-3 to joke



//Update comment text
//Add emoji 1-2-3 to comment



