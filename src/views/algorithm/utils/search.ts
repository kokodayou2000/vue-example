// 查找排序后的下标
export function binarySearch(list: number[], target: number): number {
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

export function binarySearchVisible(
  list: number[],
  left: number,
  right: number,
  target: number
) {
  const mid = Math.floor((right + left) / 2);
  if (target > list[mid]) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
  return {
    list,
    mid,
    left,
    right
  };
}
