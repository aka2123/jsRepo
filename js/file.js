const btn1 = document.querySelector('button')
const img = document.querySelector('img')
const URL = 'https://dog.ceo/api/breeds/image/random'

const showDogImage = () => {
    fetch(URL)
    .then(res => res.json())
    .then(data => img.setAttribute('src', data.message))
    .catch(err => console.error(err))
}


btn1.addEventListener('click', showDogImage)

