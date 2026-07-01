function findMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max
}
let arr = [10, 20, 30, 40, 50,80,673,32,382];

console.log(findMax(arr));
