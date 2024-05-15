export function mergeSortWrapper(array) {
    const l = 0;
    const r = array.length - 1;
    mergeSort(array, l, r);
}

export function mergeSort(array, l, r) {
    if(l>=r || array.length <= 1){
        return;
    }
    let m = l + parseInt((r-l)/2);
    mergeSort(array,l,m);
    mergeSort(array,m+1,r);
    merge(array,l,m,r);
}

function merge(array, l, m, r) {
    let n1 = m - l + 1;
    let n2 = r - m;

    // Create temp arrays
    let L = new Array(n1); 
    let R = new Array(n2);

    // Copy data to temp arrays L[] and R[]
    for (let i = 0; i < n1; i++)
    L[i] = array[l + i];
    for (let j = 0; j < n2; j++)
    R[j] = array[m + 1 + j];

    // Merge the temp arrays back into arr[l..r]

    // Initial index of first subarray
    let i = 0;

    // Initial index of second subarray
    let j = 0;

    // Initial index of merged subarray
    let k = l;

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

// const array1 = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]
// merge(array1, 0, 4, 9)
// console.log(array1)

const array = [65, 53, 78, 21, 33, 67, 34, 12, 89, 43, 55, 22, 11, 90, 32, 76, 45, 88, 23, 56];
console.log(mergeSortWrapper(array));
