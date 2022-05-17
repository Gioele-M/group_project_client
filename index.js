function scripts (){
    console.log("I am JS")
}

// const addNewComment = document.getElementsByClassName('btn')
const addNewComment = document.querySelector('form')

addNewComment.addEventListener('click',function(e){ 
    e.preventDefault()
    console.log('btn clicked')
    document.createElement('ul')
});



module.exports= scripts