function cariModus(arr) {
  // you can only write your code here!    
  var newArr = [];  
  for (let i = 0; i < arr.length; i++) {
    newArr.push([arr[i]])
    var count = 1;
    for (let j = i+1; j < arr.length; j++) {
        if (arr[j] == newArr[i][0]) {            
            count += 1;            
        }
    }
    newArr[i].push(count)    
  } 
  var max = 0;
  for (let i = 1; i < newArr.length; i++) {
      if (newArr[i][1] > newArr[max][1]) {
          max = i;
      }
  }
  if (newArr[max][1] == newArr.length) {    
    return -1;
  } else if (newArr[max][1] != 1){
      return newArr[max][0];
  } else {
      return -1;
  }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1