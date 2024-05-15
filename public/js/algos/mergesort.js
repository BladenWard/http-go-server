export function mergeSort(array) {
    const swaps = [];
    const l = 0;
    const r = array.length - 1;
    mergeSortWrapper(array, l, r, swaps);
    return swaps;
}

export function mergeSortWrapper(array, l, r, swaps) {
    if(l>=r || array.length <= 1){
        return;
    }
    let m = l + parseInt((r-l)/2);
    mergeSortWrapper(array,l,m, swaps);
    mergeSortWrapper(array,m+1,r, swaps);
    merge(array,l,m,r, swaps);
}

function merge(array, l, m, r, swaps) {
    let n1 = m - l + 1;
    let n2 = r - m;

        // Create temp arrays
    let L = new Array(n1); 
    let R = new Array(n2);

    // Copy data to temp arrays L[] and R[]
    for (let i = 0; i < n1; i++) {
        L[i] = array[l + i];
    }
    for (let j = 0; j < n2; j++) {
        R[j] = array[m + 1 + j];
    }

    // Merge the temp arrays back into arr[l..r]

    // Initial index of first subarray
    let i = 0;

    // Initial index of second subarray
    let j = 0;

    // Initial index of merged subarray
    let k = l;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            swaps.push({sort: "merge", indices: [k, L[i]], type: "insert"});
            array[k] = L[i];
            i++;
        }
        else {
            swaps.push({sort: "merge", indices: [k, R[j]], type: "insert"});
            array[k] = R[j];
            j++;
        }
        k++;
    }

    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        swaps.push({sort: "merge", indices: [k, L[i]], type: "insert"});
        array[k] = L[i];
        i++;
        k++;
    }

    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        swaps.push({sort: "merge", indices: [k, R[j]], type: "insert"});
        array[k] = R[j];
        j++;
        k++;
    }
}

const array = [21, 53, 65, 78, 33, 34, 67, 12, 89, 43, 55, 22, 11, 90, 32, 76, 45, 88, 23, 56];
// console.log(merge(array, 0, 3, 6, []))
// console.log(array)

mergeSort(array)
console.log(array)
