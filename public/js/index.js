import { shuffle } from './utils/shuffle.js';

const n = 50; // Number of bars
let barArray = []

init();

let audioCtx = null


function init() {
    barArray = [];
    for (let i = 0; i < n; i++) barArray.push(i + 1); 
    shuffle(barArray);
    displayBars()
}

function play() {
    const copy = [...barArray];
    const swaps = bubbleSort(copy);
    for(let i = 1; i < barArray.length; i++) {
        swaps.push({indices: [i - 1, i], type: "comp"});
    }
    animate(swaps);
}

function playSound(freq) {
    if (!audioCtx) {
        audioCtx = new (AudioContext || webkitAudioContext || window.webkitAudioContext)();
    }

    const oscillator = audioCtx.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.value = freq;
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.1);
    const node = audioCtx.createGain();
    node.gain.value = 0.1;
    node.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.1)
    oscillator.connect(node);
    node.connect(audioCtx.destination);
}

function animate(swaps) {
    if(!swaps.length){
        displayBars()
        return;
    }

    const move = swaps.shift();
    const [i, j] = move.indices;

    if(move.type == "swap") {
        [barArray[i], barArray[j]] = [barArray[j], barArray[i]];
    }

    playSound(300 + (barArray[j] * 13));
    displayBars([j])
    setTimeout(() => animate(swaps), 30);
}

function bubbleSort(array) {
    const moves = [];
    // let last = array.length - 1;

    do {
        var swapped = false;
        for(let i = 1; i < array.length; i++) {
            // moves.push({indices: [i - 1, i], type: "comp"});
            if(array[i - 1] > array[i]) {
                swapped = true;
                moves.push({indices: [i - 1, i], type: "swap"});
                [array[i - 1], array[i]] = [array[i], array[i - 1]];
            }
        }
    } while (swapped)

    return moves;
}

function displayBars(indices) {
    bars.innerHTML = "";
    for(let i = 0; i < barArray.length; i++) {
        const bar = document.createElement('div');
        bar.style.height = barArray[i] * 2 + "%";
        bar.classList.add('bar');

        if (indices && indices.includes(i)) {
            bar.style.backgroundColor = 'red';
        }

        bars.appendChild(bar);
    }
}

document.getElementById('generateBars').addEventListener('click', () => {
    // playSound(840);
    init();
})

document.getElementById('sort').addEventListener('click', () => {
    play();
})
