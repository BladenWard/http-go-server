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
     var n1 = m - l + 1;
        var n2 = r - m;

        // Create temp arrays
    var L = new Array(n1); 
    var R = new Array(n2);

    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++)
    L[i] = array[l + i];
    for (var j = 0; j < n2; j++)
    R[j] = array[m + 1 + j];

    // Merge the temp arrays back into arr[l..r]

    // Initial index of first subarray
    var i = 0;

    // Initial index of second subarray
    var j = 0;

    // Initial index of merged subarray
    var k = l;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            array[k] = L[i];
            i++;
        }
        else {
            array[k] = R[j];
            j++;
        }
        k++;
    }

    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        array[k] = L[i];
        i++;
        k++;
    }

    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        array[k] = R[j];
        j++;
        k++;
    }
}

const array = [21, 53, 65, 78, 33, 34, 67, 12, 89, 43, 55, 22, 11, 90, 32, 76, 45, 88, 23, 56];
console.log(merge(array, 0, 3, 6, []))
console.log(array)

// mergeSort(array)
// console.log(array)
