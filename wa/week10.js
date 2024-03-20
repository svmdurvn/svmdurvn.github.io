const button = document.querySelector("button");
button.addEventListener('click', changeText);

const heading = document.querySelector("h1");

function changeText() {
    // alert('test successful!');
    const head = prompt("tell me a secret");
    heading.textContent = 'hi';

}


// const x = 'hello!';
// console.log(x);

const button = document.querySelector("button");
button.addEventListener('click', runFunction);

function runFunction() {
    console.log("test");
    const name = prompt("Please enter a name");
    button.textContent = 'Player 1: ${name}';
}