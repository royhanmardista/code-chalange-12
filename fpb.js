function fpb(angka1, angka2) {
  // you can only write your code here!
  var faktor = []  
  if (angka1 < angka2) {
    var temp = angka1;
    angka1 = angka2;
    angka2 = temp; 
  } 
    for (let i = 1; i <= angka2; i++) {
        if (angka2 % i == 0) {
            faktor.push(i);
            }
        }
    for (let i = faktor.length - 1; i >= 0; i--) {
        if (angka1 % faktor[i] == 0) {
            return faktor[i]
        }
    }
     
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1