const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=[API_KEY]&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = 'https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=[API_KEY]&query=';

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

returnMovies(APILINK);
function returnMovies(url) {
    fetch(url).then(res => res.json())
    .then(function(data) {
        console.log(data.results);
        data.results.forEach(element => {
            const div_card = document.createElement('card');
            div_card.classList.add("card");
            const div_row = document.createElement('row');
            div_row.classList.add("row");
            
            const div_column = document.createElement('column');
            div_column.classList.add("column");
            
            const image = document.createElement('img');
            image.classList.add("thumbnail");
            
            const title = document.createElement('h3');
            const center = document.createElement('center');
            
            title.innerHTML = `${element.title}`;
            image.src = IMG_PATH + element.poster_path;
            
            center.appendChild(image);
            div_card.appendChild(center);
            div_card.appendChild(title);

            div_column.appendChild(div_card);
            div_row.appendChild(div_column);

            main.appendChild(div_row);
        });
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    main.innerHTML = '';

    const searchItem = search.value;
    console.log(searchItem);
    if (searchItem) {
        returnMovies(SEARCHAPI + searchItem);
        search.value = '';
    }
});