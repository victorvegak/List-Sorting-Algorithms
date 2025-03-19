export function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr
    }

    const pivot = arr[arr.length - 1]
    const left = arr.filter((el) => el < pivot)
    const right = arr.filter((el) => el > pivot)
    const middle = arr.filter((el) => el === pivot)

    return [...quickSort(left), ...middle, ...quickSort(right)]
}