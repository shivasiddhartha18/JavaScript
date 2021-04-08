const button =  document.querySelector('button');
const body = document.querySelector('body');
const color = ['red', 'green', 'orange'];

 body.style.backgroundColor = 'black';
button.addEventListener('click', changeBackground)

function changeBackground(){
    const currentColor = parseInt(Math.random()* color.length)
    body.style.backgroundColor = color[currentColor];
    console.log('clicked')
}