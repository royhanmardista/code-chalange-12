function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];
  // you can only write your code here!
  if (shoppers.length == 0) {
    return []
  }                 
  var output = [];
  var pembeliStacattu = [];
  var untungStacattu = 0;
  var pembeliZoro = [];
  var untungZoro = 0
  var pembeliUni = [];
  var untungUni = 0;
  for (let i=0; i<shoppers.length; i++) {
      var obj = shoppers[i];
      if (obj['product'] == 'Sepatu Stacattu') {          
          if (listBarang[0][2] >= obj['amount']) {
            listBarang[0][2] -= obj['amount'];
            untungStacattu += 1500000*obj['amount'];
            pembeliStacattu.push(obj.name)
          }
      } else if (obj['product'] == 'Baju Zoro') {
          if (listBarang[1][2] >= obj['amount']) {
            listBarang[1][2] -= obj['amount'];
            untungZoro += 500000*obj['amount'];
            pembeliZoro.push(obj.name)
          }
      } else {
        if (listBarang[2][2] >= obj['amount']) {
            listBarang[2][2] -= obj['amount'];
            untungUni += 175000*obj['amount'];
            pembeliUni.push(obj.name)
          }
      }    
  }
return [ { product: 'Sepatu Stacattu',
shoppers: pembeliStacattu,
leftOver: listBarang[0][2],
totalProfit: untungStacattu },
{ product: 'Baju Zoro',
shoppers: pembeliZoro,
leftOver: listBarang[1][2],
totalProfit: untungZoro },
{ product: 'Sweater Uniklooh',
shoppers: pembeliUni,
leftOver: listBarang[2][2],
totalProfit: untungUni } ];
}
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
console.log(countProfit([])); //[]