//////////////////////////////////
//add dark mode
/////////////////////////////////
const darkbtn = document.getElementById("darkmodebtn")
let darkOnChecker = false

darkbtn.addEventListener('click',function(){
    if (darkOnChecker === false){
    console.log('dark mode  clicked') 
    document.body.style.backgroundColor="black"
    document.body.style.color="white"
    darkOnChecker = true
}
else {
    console.log('dark mode  clicked') 
    document.body.style.backgroundColor="white"
    document.body.style.color="black"
    darkOnChecker = false
}
   

})

const aboutbtn = document.getElementById("aboutbtn")

aboutbtn.addEventListener('click',function(){
    
    console.log('about clicked') 
    alert("THIS IS MADE BY NASIM, TOM, REBECCA, GIO");
})
