function checkAB(num) {
  // you can only write your code here!
  var idxA = [];
  var idxB = [];  
  for (let i=0; i<num.length; i++) {
      if (num[i] === "a") {
          idxA.push(i);
      } else if (num[i] === "b"){
          idxB.push(i);
      }
  }  
  var output = []
  for (let j=0; j<idxA.length; j++) {
      for (let k=0; k<idxB.length; k++) {
        output.push(Math.abs(idxA[j]-idxB[k]));
      }
  }  
  return output.indexOf(4) != -1;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false