function cariMedian(arr) {
  // you can only write your code here!
  var panjang = arr.length;
  if (panjang % 2 === 0) {
      return (arr[panjang/2]+arr[panjang/2-1]) / 2;
  } else {
      return arr[Math.floor(panjang/2)];
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5