export function heapSort(array) {
    let swaps = [];
    let len = array.length;

    // Build max-heap
    for (let i = Math.floor(len / 2) - 1; i >= 0; i--)
        heapify(array, len, i, swaps);

    // Heapify reduced heap
    for (let end = len - 1; end > 0; end--) {
        swaps.push({sort: "heap", indices: [0, end], type: "swap"});
        [array[0], array[end]] = [array[end], array[0]]

        heapify(array, end, 0, swaps);
    }

    return swaps;
}

function heapify(array, len, i, swaps) {
    let largest = i; // Initialize largest as root
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    // Assign largest to left or right child
    if (l < len && array[l] > array[largest])
        largest = l;
    if (r < len && array[r] > array[largest])
        largest = r;

    // If largest is not root
    if (largest != i) {
        swaps.push({sort: "heap", indices: [i, largest], type: "swap"});
        [array[i], array[largest]] = [array[largest], array[i]]

        heapify(array, len, largest, swaps);
    }
}
