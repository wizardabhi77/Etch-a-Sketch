const container = document.querySelector('.container');


let gridSize = 16;

function createSketchPad (size) {
    for (i=0; i < size**2; i++) {
        let card = document.createElement('div');
        card.setAttribute('class','cards');
        card.textContent = 'I AM CARD' + i;
        container.appendChild(card);
        
    }
}

createSketchPad(gridSize);