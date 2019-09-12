function changeMe(arr) {
    for (let i=0; i<arr.length; i++) {     
        var objectNew = {};
        objectNew.firstName = arr[i][0];
        objectNew.lastName = arr[i][1];
        objectNew.gender = arr[i][2];
        if (arr[i][3] === undefined || arr[i][3] > 2019) {
            objectNew.age = 'Invalid Birth Year';
        } else {
            objectNew.age = 2018-arr[i][3];
        }           
    console.log(i+1 +". " +  arr[i][0] + " "+ arr[i][1] + " : ", objectNew);    
    }
}

var input =  [['Platinum', 'Fox', 'female', 1995], ['John', 'Doe', 'male', 2000]] ;
changeMe(input);
//Platinum Fox: { firstName: 'Platinum', lastName: 'Fox', gender: 'female', age: 23 }
//John Doe: { firstName: 'John', lastName: 'Doe', gender: 'male', age: 18 }

