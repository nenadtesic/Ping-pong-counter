const firstNum = document.querySelector('#firstNum');
const secondNum = document.querySelector('#secondNum');
const btn1 = document.querySelector("#firstPlayer");
const btn2 = document.querySelector("#secondPlayer");
const btnReset = document.querySelector("#reset");
const select = document.querySelector('select')

let count1 = 0;
let count2 = 0;
let playTo = 5;
let isGameOver = false;

btn1.addEventListener('click', () => {
    if (!isGameOver) {
        count1 += 1;
        if (count1 === playTo) {
            isGameOver = true;
            firstNum.classList.add('greenColor');
            secondNum.classList.add('redColor')
        }
        firstNum.textContent = count1;
    }
})

btn2.addEventListener('click', () => {
    if(!isGameOver) {
        count2 += 1;
        if (count2 === playTo) {
            isGameOver = true;
            firstNum.classList.add('redColor');
            secondNum.classList.add('greenColor')
        }
        secondNum.textContent = count2;
    }
})

btnReset.addEventListener('click', reset)

select.addEventListener('change', ()=>{
    playTo = parseInt(select.value);
    reset()
})

function reset() {
    count1 = 0;
    count2 = 0;
    firstNum.textContent = 0;
    secondNum.textContent = 0;
    isGameOver = false;
    firstNum.classList.remove('redColor', 'greenColor');
    secondNum.classList.remove('redColor', 'greenColor')
}

const delayedColodChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            btnReset.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

delayedColodChange("red", 1000)
    .then(()=>delayedColodChange('orange', 1000))
    .then(()=>delayedColodChange('yellow', 1000))
    .then(()=>delayedColodChange('green', 1000))
    .then(()=>delayedColodChange('blue', 1000))
    .then(()=>delayedColodChange('violet', 1000))