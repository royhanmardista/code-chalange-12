function ubahHuruf(kata) {
  // you can only write your code here!
  var huruf = 'abcdefghijklmnopqrstuvwxyz'
  kata = kata.split("");
  for (let i = 0; i < kata.length; i++) {
      if (kata[i] == "z") {
          kata[i] = 'a';
      } else {
          kata[i] = huruf[huruf.indexOf(kata[i])+1];
      }
  }
  return kata.join("");
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu