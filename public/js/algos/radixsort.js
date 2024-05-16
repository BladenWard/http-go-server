function countSort(arr, exp, swaps) {
    const length = arr.length;
    let output = Array(length); // output array
    let count = Array(10).fill(0, 0);

    // Store count of digits in count[]
    for (let i = 0; i < length; i++) {
        const digit = Math.floor(arr[i] / exp) % 10;
        count[digit]++;
    }

    // Change count[i] so that digits are in correct position
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    for (let i = length - 1; i >= 0; i--) {
        const digit = Math.floor(arr[i] / exp) % 10;

        swaps.push({sort: "radix", indices: [i, count[digit] - 1], type: "insert"});
        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }

    return output;
}

export function radixSort(array) {
    const swaps = [];
    const maxNumber = getMax(array, swaps);
    let copy = [...array];
    let exp; // exp is 10^i where i is current digit number

    // NOTE: instead of passing digit number, exp is passed.
    //       exp is 10^i where i is current digit number
    //       This uses integer division to get the digit
    for (exp = 1; Math.floor(maxNumber / exp) > 0; exp *= 10) {
        const sortedIteration = countSort(copy, exp, swaps);
        copy = sortedIteration;
    }

    const sortedIteration = countSort(copy, exp * 10, swaps);
    copy = sortedIteration;

    for(let i = 0; i < array.length; i++) {
        array[i] = copy[i];
    }

    return swaps;
}

function getMax(array, swaps) {
    let max = array[0];

    swaps.push({sort: "radix", indices: [0, max], type: "comp"});
    for (let i = 1; i < array.length; i++)
        if (array[i] > max) max = array[i];

    return max;
}
