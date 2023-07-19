function f(array) {
  let sum = 0;
  try {
    if (Array.isArray(array)) {
      for (let i = 0; i < array.length; i++) {
        if (typeof array[i] == "number") {
          sum += array[i];
        } else if (Array.isArray(array[i])) {
          sum += f(array[i]);
        } else {
          throw new Error("Error: Found not a number or not a array.")
        }
      }
      return sum;
    } else {
      throw new Error("Error: Parameter is required and has to be only array.")
    }
  } catch (error) {
    console.log(error.message);
  }
}

const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
console.log(f(arr)); // Output: 12

const arr2 = [[[[[1, 2]]]]];
console.log(f(arr2)); // Output: 3

const arr3 = [[[[[1, 2]]], 2], 1];
console.log(f(arr3)); // Output: 6

const arr4 = [[[[[]]]]];
console.log(f(arr4)); // Output: 0

const arr5 = [[[[[], 3]]]];
console.log(f(arr5)); // Output: 3

const arr6 = [[[[[], "s"]]]];
console.log(f(arr6)); // Error: Found a value that is not a number or array.

const arr7 = "g";
console.log(f(arr7)); // Error: Parameter is required and has to be an array.
