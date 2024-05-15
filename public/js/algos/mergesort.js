export function mergeSort(array) {
    const swaps = [];
    const l = 0;
    const r = array.length - 1;
    mergeSortWrapper(array, l, r, swaps);
    return swaps;
}

export function mergeSortWrapper(array, l, r, swaps) {
    if(l >= r || array.length <= 1){
        return;
    }
    let m = l + parseInt((r - l) / 2);
    mergeSortWrapper(array, l, m, swaps);
    mergeSortWrapper(array, m + 1, r, swaps);
    merge(array, l, m, r, swaps);
}

function merge(array, l, m, r, swaps) {
    let lLen = m - l + 1;
    let rLen = r - m;

    let L = new Array(lLen); 
    let R = new Array(rLen);

    for (let i = 0; i < lLen; i++) L[i] = array[l + i];
    for (let j = 0; j < rLen; j++) R[j] = array[m + 1 + j];

    let i = 0;
    let j = 0;
    let k = l;

    while (i < lLen && j < rLen) {
        if (L[i] <= R[j]) {
            swaps.push({sort: "merge", indices: [k, L[i]], type: "insert"});
            array[k++] = L[i++];
        }
        else {
            swaps.push({sort: "merge", indices: [k, R[j]], type: "insert"});
            array[k++] = R[j++];
        }
    }

    while (i < lLen) {
        swaps.push({sort: "merge", indices: [k, L[i]], type: "insert"});
        array[k++] = L[i++];
    }
    while (j < rLen) {
        swaps.push({sort: "merge", indices: [k, R[j]], type: "insert"});
        array[k++] = R[j++];
    }
}
