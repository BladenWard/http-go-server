import { shuffle } from './utils/shuffle.js';

const n = 100;
const array = []

for (let i = 0; i < n; i++) {
    array.push(i + 1);
}
shuffle(array);

for(let i = 0; i < array.length; i++) {
    const bar = document.createElement('div');
    bar.style.height = array[i] + "%";
    bar.style.width = "10px";
    bar.style.backgroundColor = "black";
    bars.appendChild(bar);
}
