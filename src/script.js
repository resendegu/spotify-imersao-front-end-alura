const searchInput = document.getElementById('searchInput')
const resultsArtists = document.getElementById('result-artists')
const resultsPlaylists = document.getElementById('result-playlists')

const requestApi = (searchTerm) => {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

const displayResults = (result) => {
    resultsPlaylists.classList.add('hidden')
    const artistName = document.getElementById('artist-name')
    const artistImage = document.getElementById('artist-img')

    result.forEach(element => {
        artistName.innerText = element.name
        artistImage.src = element.urlImg
    });

    resultsArtists.classList.remove('hidden')
}

document.addEventListener('keyup', (event) => {
  const searchTerm = event.target.value.toLowerCase();
  if (searchTerm === '') {
    resultsPlaylists.classList.remove('hidden')
    resultsArtists.classList.add('hidden')
    return
  }

  requestApi(searchTerm)
})