
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


