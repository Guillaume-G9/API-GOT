const characters = document.querySelector('#people')
const searchBar = document.querySelector('#searchBar')
let charArray = [];


async function gotCharacters(){
    let rep = await fetch('https://anapioficeandfire.com/api/characters/');
    let response = await rep.json();
    charArray = response
    display(charArray)

}

gotCharacters();

function display(array) {
    characters.innerHTML =""
    array.map(names => {
        characters.innerHTML += `
        <li>${names.aliases}</li>`
    }) 
}

searchBar.addEventListener('keyup', (event) => {
    let input = event.target.value.toLowerCase();
    const filter = charArray.filter(noms => {
        return noms.aliases.toLowerCase().includes(input)
    })
    display(filter)
})

function playSound() {
    document.querySelector("audio").loop = true;
    document.querySelector("audio").play()
}
function stop() {


    document.querySelector("audio").pause()
}
