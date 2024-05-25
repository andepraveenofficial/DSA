# Binary Search
The time complexity of binary search is O(log n), where n is the number of elements in the sorted array. This means that the execution time of binary search grows logarithmically with the size of the input data.

Here's a breakdown of why binary search is efficient:

Divide and Conquer: Binary search works by repeatedly dividing the search space in half. It starts by comparing the target element with the middle element of the array.
Elimination: If the target element is less than the middle element, the search continues in the left half of the array. Conversely, if the target element is greater, the search continues in the right half.
Reduced Search Space: With each iteration, the search space is effectively reduced by half. This significantly decreases the number of comparisons needed to find the target element compared to a linear search that checks every element.