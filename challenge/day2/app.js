var fs = require('fs');
const colors = require('colors');

var ids = fs.readFileSync('input.txt', 'utf8').split('\n');

const partA = () => {
  let twoTimes = 0,
      threeTimes = 0,
      map = {};

    for ( let i = 0; i < ids.length; i++) {
       
        map = {};
        twos = 0;
        threes = 0;
      
    for (let j = 0; j < ids[i].length; j++) {
    
        map[ids[i][j]] ? ++map[ids[i][j]] : (map[ids[i][j]] = 1);
        
        if      (map[ids[i][j]] == 2)  ++twos
        else if (map[ids[i][j]] == 3) {--twos; ++threes}
    }
    // console.log(map);
   
    if (twos) ++twoTimes;
    if (threes) ++threeTimes;
  }

  console.log("partA: ".blue + (threeTimes * twoTimes))
}

partA();

const partB = () => {

	for(var i = 0; i < ids.length; i++) {
		inner: for(var j = i+1; j < ids.length; j++) {
        
            var diff = 0;
            var out = [];
            
			for (var k = 0; k < ids[0].length; k++) {
				if (ids[i][k] != ids[j][k]) {
					diff++
				} else {
                out.push(ids[j][k]);
				}
				if (diff > 1) continue inner;
			}
			console.log ("PartB: ".blue + out.join(''));
		}
    }
}  
partB();    