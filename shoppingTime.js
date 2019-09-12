function shoppingTime(memberId, money) {
  // you can only write your code here!
  if (memberId == "" || memberId == undefined) {
    return "Mohon maaf, toko X hanya berlaku untuk member saja";
  } else if (money < 50000) {
      return "Mohon maaf, uang tidak cukup"
  } else {
      var newObj = {};
      newObj.memberId = memberId;
      newObj.money = money;
      var listItem = []      
      while (money >= 50000) {
          if (money >= 1500000 && listItem.indexOf("Sepatu Stacattu") == -1){
              money -= 1500000;
              listItem.push("Sepatu Stacattu");
          } else if (money < 1500000 && money >= 500000 && listItem.indexOf("Baju Zoro") == -1) {
              money -= 500000;
              listItem.push("Baju Zoro");
          } else if (money < 500000 && money >= 250000 && listItem.indexOf("Baju H&N") == -1) {
              money -= 250000;
              listItem.push("Baju H&N")
          } else if (money < 250000 && money >= 175000 && listItem.indexOf("Sweater Uniklooh") == -1) {
              money -= 175000;
              listItem.push("Sweater Uniklooh")
          } else if (money < 175000 && listItem.indexOf("Casing Handphone") == -1){
              money -= 50000;
              listItem.push("Casing Handphone")
          } else {
            break;
          }       
      }
      newObj.listPurchased = listItem; 
      newObj.changeMoney = money;    
  }
  return newObj;
}
console.log(shoppingTime('1820RzKrnWn08', 2475000));
console.log(shoppingTime('82Ku8Ma742', 170000));
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja