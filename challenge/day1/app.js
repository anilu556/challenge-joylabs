const fs = require('fs');
const colors = require('colors');

var numbers = fs.readFileSync('./input.txt', 'utf8');

const partA = () => {
  let res = numbers.split('\n').map(i => parseInt(i))
    .reduce(
      (a = 0, b) => a + b
    );

  console.log("PartA: ".blue + res)
}

partA();

const partB = () => {
    let record = {};
    let repeating; 
    
    let parsed = numbers.split('\n').map(i => parseInt(i));
    // console.log(parsed)
    let res = 0;
    
    while(repeating == null) {
      res = parsed.reduce((a, b) => {
        let sum = a + b;
        // console.log(sum)
        
        if (repeating == null && record[sum]) repeating = sum;
        record[sum] = record[sum] ? ++record[sum] : 1;
        return sum;
        }, res);
    }
  
    console.log("Part2: ".blue + repeating)
  }

  partB();
