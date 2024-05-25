function fibonacci(n) {
  if (n <= 1) {
    return n; // Base case
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2); // Recursive calls
  }
}

// Example usage (can be very slow for larger n)
const result = fibonacci(40); // This can take a very long time to execute
console.log(result);