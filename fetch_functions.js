const api_url ='https://dream-team-server.herokuapp.com/'

import fetch from 'node-fetch'

// const fetch = require('node-fetch')


//Get functions

//Get all jokes
async function getAllJokes(url=`${api_url}jokes/`){
    try{
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    }catch(err){
        console.log(err)//{message: err.message}
    }
}




getAllJokes()


//Get jokes by ID


//Get joke's comments








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



