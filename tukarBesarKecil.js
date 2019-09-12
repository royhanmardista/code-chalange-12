function tukarBesarKecil(kalimat) {
  // you can only write your code here!
  var kecil = "abcdefghijklmnopqrstuvwxyz"
  var besar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var array = kalimat.split("")
  for (let i=0; i < array.length; i++) {
      var idxKecil = kecil.indexOf(array[i]);
      var idxBesar = besar.indexOf(array[i]);
      if (idxKecil != -1) {
          array[i] = besar[idxKecil];
      } else if (idxBesar != -1){          
          array[i] = kecil[idxBesar];
      } else {
          continue;
      }
  }
  return array.join("");
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"