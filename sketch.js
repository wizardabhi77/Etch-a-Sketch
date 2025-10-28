const container = document.querySelector('.container');
const button = document.querySelector('.btn');

button.addEventListener('click', handleClick);


function createSketchPad (width,height) {
    while(container.firstElementChild) {
        container.removeChild(container.lastElementChild)
    }
    for (i=0; i < width*height; i++) {
        let card = document.createElement('div');
        card.setAttribute('class','cards');
        card.setAttribute('style','opacity: 0.1;')
        card.textContent = i+1;
        card.addEventListener('mouseover', handleHover);
        container.appendChild(card);
        
    }
}

function setRandomColor () {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
}

function handleHover (e) {
    e.target.style.backgroundColor = setRandomColor();
    let opacity = Number(e.target.style.opacity) + 0.1;
    e.target.style.opacity = opacity;
    console.log(e.target.style.opacity);
}

function handleClick(e) {
    let width = Number(prompt('Enter a valid width for grid:','1-100'));
    if(width <= 0 || width > 100){
        alert('Invalid width');
        return null;
    }
    let height =  Number(prompt('Enter a valid height for grid:','1-100'));
    if(height <= 0 || height > 100){
        alert('Invalid height');
        return null;
    }

    createSketchPad(width,height);

}

