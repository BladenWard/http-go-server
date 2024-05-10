import { shuffle } from './utils/shuffle.js';

const n = 50; // Number of bars
let barArray = []

init();

function init() {
    barArray = [];
    for (let i = 0; i < n; i++) barArray.push(i + 1); 
    shuffle(barArray);
    displayBars(barArray)
}

function play() {
    bubbleSort(barArray);
    displayBars(barArray);
}

function bubbleSort(array) {
    do {
        var swapped = false;
        for(let i = 1; i < array.length; i++) {
            if(array[i] < array[i - 1]) {
                swapped = true;
                [array[i - 1], array[i]] = [array[i], array[i - 1]];
            }
        }
    } while (swapped)
}

function displayBars(array) {
    bars.innerHTML = "";
    for(let i = 0; i < array.length; i++) {
        const bar = document.createElement('div');
        bar.style.height = array[i] * 2 + "%";
        bar.classList.add('bar');
        bars.appendChild(bar);
    }
}

document.getElementById('generateBars').addEventListener('click', () => {
    init();
})

document.getElementById('sort').addEventListener('click', () => {
    play();
})
