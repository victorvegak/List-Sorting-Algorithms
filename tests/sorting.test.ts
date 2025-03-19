import { quickSort } from "../sorting-algorithms/quicksort";
import { bubbleSort } from "../sorting-algorithms/bubblesort";

describe("Sorting Algorithms", () => {
    const unsortedList = [5, 3, 8, 4, 2, 1, 9, 7, 6]
    const sortedList = [1, 2, 3, 4, 5, 6, 7, 8, 9]      

    test("Bubble sort should sort the list", () => {
        expect(bubbleSort(unsortedList)).toEqual(sortedList)
    })  

    test("Quick sort should sort the list", () => {
        expect(quickSort(unsortedList)).toEqual(sortedList)
    })  

    test("Bubble sort should not change the original list", () => {
        const copy = [...unsortedList]
        bubbleSort(copy)
        expect(unsortedList).toEqual([5, 3, 8, 4, 2, 1, 9, 7, 6]) // Original list should not change
    })

    test("Quick sort should not change the original list", () => {
        const copy = [...unsortedList]
        quickSort(copy)
        expect(copy).toEqual(unsortedList)
    })  

    test("Sorting an already sorted list should return the same list", () => {
        expect(bubbleSort(sortedList)).toEqual(sortedList)
        expect(quickSort(sortedList)).toEqual(sortedList)
    })

    test("Sorting an empty list should return an empty list", () => {
        expect(bubbleSort([])).toEqual([])
        expect(quickSort([])).toEqual([])
    })

    test("Sorting a list with one element should return the same list", () => {
        expect(bubbleSort([28])).toEqual([28])
        expect(quickSort([28])).toEqual([28])
    })
})

