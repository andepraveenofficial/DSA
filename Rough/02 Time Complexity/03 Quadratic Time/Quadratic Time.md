# Quadratic Time (O(n^2))
Quadratic time complexity signifies that the execution time of an algorithm increases proportionally to the square of the input size (n). In simpler terms, as the number of elements in the input data grows, the time it takes for the algorithm to run increases much faster compared to linear time.

## Common Operations: 
While not ideal for large datasets, some algorithms exhibit quadratic time complexity. Here are a few examples:

* Bubble Sort: This sorting algorithm repeatedly compares adjacent elements and swaps them if they're in the wrong order. In the worst case (unsorted array), each element might need to be compared with all other elements, leading to O(n^2) time complexity.

* Selection Sort: Similar to bubble sort, selection sort finds the minimum element and swaps it with the first element, then repeats for the remaining elements. This also results in O(n^2) time complexity in the worst case.

* Nested Loops: Whenever you have nested loops iterating through the entire data set, the overall time complexity becomes O(n * n) which simplifies to O(n^2).