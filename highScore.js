function highestScore (students) {
  // Code disini
  var kelas = [];
  for (let i=0; i<students.length; i++) {
      if (kelas.indexOf(students[i].class) == -1) {
          kelas.push(students[i].class);
      }
  }
  var output = {};    
  for (let j=0; j<kelas.length; j++){      
      var nilai = 0;
      for (let k=0; k<students.length; k++) {
          var obj = students[k];
          if (obj.class == kelas[j]) {
            if (obj.score > nilai) {
                nilai = obj.score;
                output[kelas[j]] = {name : obj.name, score : obj.score}
            } 
          } 
      }
  }
  return output;
}
// TEST CASE
console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}