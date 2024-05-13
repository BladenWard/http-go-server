import { shuffle } from './shuffle.js';

export function run(sortingAlgo) {
    const n = 50; // Number of bars
    let barArray = []
    let audioCtx = null

    init();

    // BUG: my work ethic lol
    // TODO: work on this
    function init() {
        barArray = [];
        for (let i = 0; i < n; i++) barArray.push(i + 1); 
        shuffle(barArray);
        displayBars()
    }

    function lastPass(swaps) {
        for(let i = 1; i < barArray.length; i++) {
            swaps.push({indices: [i - 1, i], type: "comp"});
        }
    }

    function play() {
        const copy = [...barArray];
        const swaps = sortingAlgo(copy);
        lastPass(swaps);
        animate(swaps);
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
        displayBars([i, j])
        setTimeout(() => animate(swaps), 50);
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

    document.getElementById('generateBars').addEventListener('click', () => {
        init();
    })

    document.getElementById('sort').addEventListener('click', () => {
        play();
    })
}

