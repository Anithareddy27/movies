async function getMovie() {
    const name = document.getElementById("movieName").value.trim();

    if (!name) {
        alert("Please enter a movie name!");
        return;
    }
    document.getElementById("moviedetails").innerHTML = '<div class="loader"></div>';
    setTimeout(async () => {
        const response = await fetch(`https://www.omdbapi.com/?apikey=61e576a4&t=${name}`);
        const movie = await response.json();

        if (movie.Response === "False") {
            document.getElementById("moviedetails").innerHTML = "<h2>Movie not found</h2>";
            return;
        }

        document.getElementById("moviedetails").innerHTML = `
            <div class="movie-card">
              <div class="movie-inner">
              <div class="movie-front">
                        <img src="${movie.Poster}" alt="Movie Poster">
                    </div>
             <div class="movie-back">
                <h2 style="color:red;">${movie.Title} (${movie.Year})</h2>
                <p><strong style="color:red;">Genre:</strong> ${movie.Genre}</p>
                <p><strong style="color:red;">Released:</strong> ${movie.Released}</p>
                <p><strong style="color:red;">Director:</strong> ${movie.Director}</p>
                <p><strong style="color:red;">Actors:</strong> ${movie.Actors}</p>
            </div>
            </div>
            </div>
        `;
    }, 2000);
}
