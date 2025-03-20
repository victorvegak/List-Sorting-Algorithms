import { quickSort} from './quicksort';
import {bubbleSort} from './bubblesort';

class Sorting {
    list: number[]

    constructor(list: number[]) {
        this.list = list
    }

    // Import Bubble Sort Function
    sortUsingBubbleSort(): number[] {
        return bubbleSort(this.list)
    }

    // Import Quick Sort Function
    sortUsingQuickSort(): number[] {
        return quickSort(this.list)
    }

    // Async sorting function simulates a delay of 1 second
    async asyncSort(useQuickSort: boolean = false): Promise<number[]> {
        return new Promise((resolve) => {
            setTimeout(() => {
                try {
                    resolve(useQuickSort? this.sortUsingQuickSort() : this.sortUsingBubbleSort())
                } catch (error) {
                     console.error("Sorting Failed", error)
                }
            }, 1000)
        })
    }   
}

// Function to display sorting results

async function runSorting() {
    const list = [5, 3, 8, 4, 2, 1, 9, 7, 6]
    console.log("Original List: ", list)

    const sorter = new Sorting(list)

    console.log("Bubble Sort: ", sorter.sortUsingBubbleSort())
    console.log("Quick Sort: ", sorter.sortUsingQuickSort())    

    // Run async sorting
    try {
        const sortedAsync = await sorter.asyncSort()
        console.log("Async Sort List: ", sortedAsync)
    } catch (error) {
        console.error("Error in Async sorting", error)
    }
}

// Execute  sorting 
runSorting()    
