export function selectionSort(array) {
    const moves = [];

    for(let i = 0; i < array.length; i++) {
        let min = i;
        for(let j = i + 1; j < array.length; j++) {
            moves.push({indices: [j, min], type: "cmp"});
            if(array[j] < array[min]) {
                min = j;
            }
        }

        if(min != i) {
            moves.push({indices: [i, min], type: "swap"});
            [array[i], array[min]] = [array[min], array[i]];
        }
    }

    return moves;
}
