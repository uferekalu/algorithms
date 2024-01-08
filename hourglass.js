function hourglassSum(arr) {
    // Assuming arr is a 2D array
  
    // Initialize with a value smaller than any possible hourglass sum
    let maxSum = -Infinity;
  
    // Iterate through the array excluding edges
    for (let i = 0; i < arr.length - 2; i++) {
      for (let j = 0; j < arr[i].length - 2; j++) {
        // Calculate the sum of the current hourglass
        const sum =
          arr[i][j] +
          arr[i][j + 1] +
          arr[i][j + 2] +
          arr[i + 1][j + 1] +
          arr[i + 2][j] +
          arr[i + 2][j + 1] +
          arr[i + 2][j + 2];
  
        // Update maxSum if the current sum is greater
        maxSum = Math.max(maxSum, sum);
      }
    }
  
    return maxSum;
  }
  
  // Example usage:
  const array2D = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0],
  ];
  
  const result = hourglassSum(array2D);
  console.log(result); // Output the maximum hourglass sum
  