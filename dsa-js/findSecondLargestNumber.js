

function findSecondLargestNumber(arr) {
  if (!Array.isArray(arr) || arr.length < 2) {
    throw new Error("Input must be an array with at least two elements");
  }
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num < largest) {
      secondLargest = num;
    }
  }
  if (secondLargest === -Infinity) {
    throw new Error("No second largest element found");
  }
  return secondLargest;
}

// Example usage:
// console.log(findSecondLargestNumber([3, 7, 2, 9, 5])); // Output: 7