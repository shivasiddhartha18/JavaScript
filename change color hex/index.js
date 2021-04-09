const body = document.querySelector('body');
const button = document.querySelector('button')
const div = document.querySelector('div')


button.addEventListener('click', changeBackground)

function changeBackground(){
   
    const color = `#` + Math.floor(Math.random()* 1000000);
    body.style.backgroundColor = color;
    div.textContent = `Hex Number: ${color}`;
}
