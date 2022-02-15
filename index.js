let characters = document.querySelector("#people")


async function gotCharacters(){
    let rep = await fetch('https://anapioficeandfire.com/api/characters/');
    let response = await rep.json();

    response.map(names => {
        characters.innerHTML += `
        <li>${names.aliases}</li>`
    })
    // function displayCharacter(){
    //     characters.textContent += ` <li>${response.aliases}</li>`;
    // }
    
}


gotCharacters()