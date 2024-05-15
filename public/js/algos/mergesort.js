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
    const copy = [...array]

    // Merge the temp arrays back into arr[l..r]

    // Initial index of first subarray
    let i = l;

    // Initial index of second subarray
    let j = m + 1;

    // Initial index of merged subarray
    let k = l;

    while (i <= m && j <= r) {
        swaps.push({indices: [i, j], type: "comp"});
        if (copy[i] < copy[j]) {
            swaps.push({indices: [k, copy[i]], type: "insert"});
            array[k] = copy[i];
            k++;
            i++;
        }
        else {
            swaps.push({indices: [k, copy[j]], type: "insert"});
            array[k] = copy[j];
            k++;
            j++;
        }
    }

    // Copy the remaining elements of
    // L[], if there are any
    while (i < m) {
        swaps.push({indices: [i, i], type: "comp"});
        swaps.push({indices: [k, copy[i]], type: "insert"});
        array[k] = copy[i];
        k++;
        i++;
    }

    // Copy the remaining elements of
    // R[], if there are any
    while (j < r) {
        swaps.push({indices: [j, j], type: "comp"});
        swaps.push({indices: [k, copy[j]], type: "insert"});
        array[k] = copy[j];
        k++;
        j++;
    }
}

const array1 = [2, 1]
console.log(merge(array1, 0 ,0,  1, []))
console.log(array1)

// const array = [65, 53, 78, 21, 33, 67, 34, 12, 89, 43, 55, 22, 11, 90, 32, 76, 45, 88, 23, 56];
// mergeSort(array)
// console.log(array)
