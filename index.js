let container = document.querySelector('.container')
let jokeDiv = document.querySelector('.joke')
let button = document.getElementById('button')

let url = 'https://icanhazdadjoke.com/ '


console.log('asojiha')
generateJokes()

async function generateJokes() {
    const jokeRes = await fetch(url, {
        headers: {
            'Accept': 'application/json'
        }
    })

    const jokeObject = await jokeRes.json()
    jokeDiv.innerHTML = jokeObject.joke
    console.log(jokeObject.joke)
}
button.addEventListener('click', () => {
    generateJokes()
})