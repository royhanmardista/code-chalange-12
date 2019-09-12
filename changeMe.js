function changeMe(arr) {
    if (arr.length == 0 ) {
        console.log('""');
    }
    for (let i=0; i<arr.length; i++) {     
        var objectNew = {};
        objectNew.firstName = arr[i][0];
        objectNew.lastName = arr[i][1];
        objectNew.gender = arr[i][2];
        if (arr[i][3] === undefined || arr[i][3] > 2019) {
            objectNew.age = 'Invalid Birth Year';
        } else {
            objectNew.age = 2019-arr[i][3];
        }           
    console.log(i+1 +". " +  arr[i][0] + " "+ arr[i][1] + " : ", objectNew);    
    }
}

changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""

