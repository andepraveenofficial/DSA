# n log n (Sorting)

Sorting algorithms with a time complexity of O(n log n) are significantly faster than linear time (O(n)) sorting algorithms like bubble sort or selection sort, especially for large datasets. These algorithms achieve this efficiency by using a divide-and-conquer approach or clever data structure manipulation.

Common Examples: Here are some popular sorting algorithms with O(n log n) time complexity:

Merge Sort: This divide-and-conquer algorithm recursively divides the unsorted list into sublists containing a single element each. Then, it repeatedly merges the sublists in a sorted manner until the entire list is sorted.
Quick Sort: This algorithm also uses a divide-and-conquer strategy. It selects a pivot element from the list and partitions the remaining elements into two sublists: elements less than the pivot and elements greater than the pivot. These sublists are then sorted recursively, and finally, the pivot element is placed in its correct position, resulting in a sorted list.
Heap Sort: This algorithm utilizes a heap data structure to efficiently sort elements. It builds a max-heap from the input data, where the largest element is at the root. The largest element is then extracted and placed at the end of the sorted list. The heap is then rebuilt (excluding the extracted element), and the process repeats until all elements are extracted and sorted.