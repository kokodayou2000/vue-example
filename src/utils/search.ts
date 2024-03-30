const arr = [3, 6, 11, 21, 22, 50, 99];

// 查找排序后的下标
function binarySearch(list: number[], target: number): number {
  let left = 0;
  let right = list.length - 1;
  while (left <= right) {
    const mid = Math.floor((right + left) / 2);
    if (list[mid] === target) {
      return mid;
    } else if (target > list[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch(arr, 3));
console.log(binarySearch(arr, 6));
console.log(binarySearch(arr, 11));
console.log(binarySearch(arr, 21));
console.log(binarySearch(arr, 22));
console.log(binarySearch(arr, 50));
console.log(binarySearch(arr, 99));
