import {getRandomInt} from './random.js'


const createCardNode = ()=>{
    const imagen = document.createElement("img")
    // debugger
    imagen.src=`https://source.unsplash.com/random/${getRandomInt()}` 
    const titulo = document.createElement("h2")
    const buttonA=document.createElement("button")
    buttonA.className="button-add"
    buttonA.textContent='button-add-Nro '+getRandomInt();

    const buttonB=document.createElement("button")
    buttonB.className="button-add"
    buttonB.textContent='button-add-Nro '+getRandomInt();

    const buttonContainer = document.createElement("div")
    buttonContainer.className = "button-container"

    

    titulo.className="titulos"
    titulo.innerText="Added Title"
    const imageContainer = document.createElement("div")
    imageContainer.className = "image-container"
    const parrafo = document.createElement("p")
    parrafo.className = "description"
    const text = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias perferendis ex, repudiandae dolorum illo illum itaque autem eveniet corporis et obcaecati est provident assumenda fuga aut debitis ab vel voluptas.')
    
    parrafo.appendChild(text)
    
    const card = document.createElement("div")
    card.className="card"

    imageContainer.appendChild(imagen)
    buttonContainer.appendChild(buttonA)
    buttonContainer.appendChild(buttonB)
    card.appendChild(titulo)
    card.appendChild(imageContainer)
    card.appendChild(parrafo)
    card.appendChild(buttonContainer)

    return card
}


const mountNode = document.querySelector("#app")
const addCardButton = document.querySelector('button') 

const addCard=()=>{
    mountNode.appendChild(createCardNode())
}

addCardButton.addEventListener('click', addCard)


