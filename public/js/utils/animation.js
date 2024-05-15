import { shuffle } from './shuffle.js';

export function run(sortingAlgo) {
    const n = 150; // Number of bars
    let barArray = []
    let audioCtx = null

    init();

    function init() {
        barArray = [];
        for (let i = 0; i < n; i++) barArray.push(i + 1); 
        shuffle(barArray);
        displayBars()
    }

    function lastPass(swaps) {
        for(let i = 1; i < barArray.length; i++) {
            swaps?.push({indices: [i - 1, i], type: "comp"});
        }
    }

    function play() {
        const copy = [...barArray];
        const unsortCopy = [...barArray];
        const swaps = sortingAlgo(copy);
        lastPass(swaps);
        animate(swaps, unsortCopy);
    }

    function animate(swaps, copy) {
        if(!swaps?.length){
            displayBars()
            return;
        }

        const move = swaps.shift();
        const [i, j] = move.indices;
        let displayOpts = "";

        if(move.type == "swap") {
            [barArray[i], barArray[j]] = [barArray[j], barArray[i]];
        }
    
        if(move.type == "insert") {
            barArray[i] = j;
        }

        switch(move.sort) {
            case "bubble":
                displayOpts = [j];
                break;
            case "selection":
                displayOpts = [i, j];
                break;
            case "insertion":
                displayOpts = [i];
                break;
            case "merge":
                displayOpts = [i];
                break;
            default:
                displayOpts = [i, j];
        }

        const sound = 200 + (barArray[j] * 3);
        playSound(sound);
        displayBars(displayOpts)
        setTimeout(() => animate(swaps, copy), 10);
    }

    function displayBars(indices) {
        bars.innerHTML = "";
        for(let i = 0; i < barArray.length; i++) {
            const bar = document.createElement('div');
            bar.style.height = barArray[i] * 0.65 + "%";
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
        if (isFinite(freq)) {
            oscillator.frequency.value = freq;
            const node = audioCtx.createGain();
            node.gain.value = 0.1;
            node.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.1)
            oscillator.connect(node);
            node.connect(audioCtx.destination);
            oscillator.start(audioCtx.currentTime);
            oscillator.stop(audioCtx.currentTime + 0.1);
        }
    }

    document.getElementById('generateBars').addEventListener('click', () => {
        init();
    })

    document.getElementById('sort').addEventListener('click', () => {
        play();
    })
}

