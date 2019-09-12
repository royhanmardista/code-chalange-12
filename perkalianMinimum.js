function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var array = [];
  var i = 1;
  while (i <= angka) {
      if (angka % i === 0) {
          var faktor = String(angka/i) + i;
          array.push(faktor)
      }
      i++
  }
  var digit = []
  for (let j = 0; j < array.length; j++) {
      digit.push(array[j].length);
  }
  return digit.sort()[0];
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2