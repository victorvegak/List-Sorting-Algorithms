export function bubbleSort(arr: number[]): number[] {
    const sortedArr = [...arr] // Creating a copy of the array
    const n = sortedArr.length

    for (let  i = 0; i< n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (sortedArr[j] > sortedArr[j + 1]) {
                [sortedArr[j], sortedArr[j + 1]] = [sortedArr[j + 1], sortedArr[j]]
            }
        }
    }
    return sortedArr
}