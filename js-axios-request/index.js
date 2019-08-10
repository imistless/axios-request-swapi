function searchCharacter() {
    let characterId = document.getElementById('character-id').value;

    axios.all([
            axios.get(`https://swapi.co/api/people/${characterId}`),
            axios.get(`https://swapi.co/api/films/${characterId}`),
            axios.get(`https://swapi.co/api/planets/${characterId}`)
        ])
        .then(axios.spread((peopleRes, filmsRes, homeworldRes) => {
            charactersInfo(peopleRes.data)
            showFilms(filmsRes.data)
            showHomeworld(homeworldRes.data)
        }));

    event.preventDefault()
}

function charactersInfo(data) {
    document.getElementById('character-name').innerHTML =
        `<p> Name: ${data.name} </p>`
    document.getElementById('character-birth-year').innerHTML =
        `<p> Birth Year: ${data.birth_year} </p>`
    document.getElementById('character-info').removeAttribute('hidden');
}

function showFilms(data) {
    document.getElementById('character-film').innerHTML =
        `<p> Film(s): ${data.title} </p>`
}

function showHomeworld(data) {
    document.getElementById('character-homeworld').innerHTML =
        `<p> Homeworld: ${data.name}`
}