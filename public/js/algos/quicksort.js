// This is the ll implementation of quicksort
export function quickSort(array) {
    const swaps = [];
    const low = 0;
    const high = array.length - 1;
    quickSortWrapper(array, low, high, swaps);
    return swaps;
}

function partition(arr, low, high, swaps) {
    let pivot = arr[high];

    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
        if (arr[j] <= pivot) {
            i++;
            swaps.push({sort: "quick", indices: [i, j], type: "swap"});
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    swaps.push({sort: "quick", indices: [i + 1, high], type: "swap"});
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1; // Return the partition index
}

function quickSortWrapper(arr, low, high, swaps) {
    if (low < high) {
        let pi = partition(arr, low, high, swaps);

        quickSortWrapper(arr, low, pi - 1, swaps);
        quickSortWrapper(arr, pi + 1, high, swaps);
    }
}
