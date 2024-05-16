export function heapSort(array) {
    let swaps = [];
    let len = array.length;

    // Build heap (rearrange array)
    for (let i = Math.floor(len / 2) - 1; i >= 0; i--)
        heapify(array, len, i, swaps);

    // One by one extract an element from heap
    for (let end = len - 1; end > 0; end--) {
        // Move current root to end
        swaps.push({sort: "heap", indices: [0, end], type: "swap"});
        [array[0], array[end]] = [array[end], array[0]]

        // call max heapify on the reduced heap
        heapify(array, end, 0, swaps);
    }

    return swaps;
}

// To heapify a subtree rooted with node i which is
// an index in arr[]. n is size of heap
function heapify(array, len, i, swaps) {
    let largest = i; // Initialize largest as root
    let l = 2 * i + 1; // left = 2*i + 1
    let r = 2 * i + 2; // right = 2*i + 2

    // If left child is larger than root
    if (l < len && array[l] > array[largest])
        largest = l;

    // If right child is larger than largest so far
    if (r < len && array[r] > array[largest])
        largest = r;

    // If largest is not root
    if (largest != i) {
        swaps.push({sort: "heap", indices: [i, largest], type: "swap"});
        [array[i], array[largest]] = [array[largest], array[i]]

        // Recursively heapify the affected sub-tree
        heapify(array, len, largest, swaps);
    }
}

let arr = [12, 11, 13, 5, 6, 7];

heapSort(arr);

console.log("Sorted array is: ");
console.log(arr);
