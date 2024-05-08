package algos

// Standard Quicksort based off Kernighan and Ritchie's implementation
func Quicksort(arr []int) []int {
    if len(arr) <= 1 {
        return arr
    }

    left, right, pivot := 0, len(arr) - 1, arr[len(arr)/2]

    arr[pivot], arr[right] = arr[right], arr[pivot]

    for i := range arr {
        if arr[i] < arr[right] {
            arr[i], arr[left] = arr[left], arr[i]
            left++
        }
    }

    arr[left], arr[right] = arr[right], arr[left]

    Quicksort(arr[:left])
    Quicksort(arr[left+1:])

    return arr
}
