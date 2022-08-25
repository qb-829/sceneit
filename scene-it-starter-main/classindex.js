const container = document.getElementsByClassName("results");
const containerWithId = document.getElementById('results');

function renderMovies(){
    console.log("does this button work")
    console.log(movieData);
    console.log(container)
    console.log(containerWithId)
    
    movieData.map(
        (item) => {
            console.log(item)

            containerWithId.innerHTML += `
            <div>
                <img src = ${item.Poster} />
                <h2>${item.Title}</h2>
                <h2>${item.Year}</h2>
            </div>`
           
    
        }
    )
}

