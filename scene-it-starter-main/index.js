// document.addEventListener('DOMContentLoaded', function() {
//     // code here will execute after the document is loaded
//     // document.getElementById('containerforMovie').innerHTML = renderMovies()
// });

// const movieArray =[movieData];
// movieData.forEach((movie) => {
//     console.log(movie.Title)
// });
// const movieHtmlArray = movieArray.map((currentMovie) => currentMovie.)  
// ({

// })
// function renderMovies(movieArray){

//     console.log(movieArray);

//     const movieElement = document.getElementByID('movie') 

//     movieArray.map((currentMovie, index){
    
//         console.log(currentMovie.Title);
//         movieElement.InnerHTML += `${movie.Title}` 
//     });

// }
//arrowfunction
// movieArray.map((currentMovie)=>{
    
// })
function renderMovies(movieArray){
    console.log(movieArray);
    let movieHtmlArray;
    movieArray.map(function(currentMovie){
        console.log(currentMovie.Title);
    const movieHtmlArray =  document.getElementById("containerForMovie")      
    movieHtmlArray.innerHTML += `
        <div class="movie card">
            <div class="card-body">
            <img src="${currentMovie.Poster}" class="card-img-top" alt="movie poster">
            <h5 class="card-title">${currentMovie.Title}</h5>
            <p class="card-text">${currentMovie.Year}</p>
            <a href="${currentMovie.imdbID}" class="btn btn-primary add-button" >Add</a>
            </div>
        </div>`
    })
    return movieHtmlArray
    
}

const myForm = document.getElementById('myForm');
myForm.addEventListener('submit',function(e){
    
    document.getElementById('containerforMovie').innerHTML = renderMovies(movieData)
    e.preventDefault()
})

let addButton = document.querySelector(".add-button")
let imdbID = currentMovie.imdbID

document.addEventListener('click', function(event) {
    event.target.classList(".add-button")
    let searchText = e.target.value
    if(movieHtmlArray.includes(searchText)) {
        // do something to innerHTML
    }
    else {
        // do something else to innerHTML
    }
    })
    
    //return a value based on thes above function