export function insertionSort(array) {
    const moves = [];

    for(let i = 1; i < array.length; i++) {
        let j = i;
        while(j > 0 && array[j - 1] > array[j]) {
            moves.push({indices: [j - 1, j], type: "swap"});
            [array[j - 1], array[j]] = [array[j], array[j - 1]];
            j--;
        }
    }

    return moves;
}
