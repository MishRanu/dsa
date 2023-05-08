function mergeOverlappingIntervals(array) {
  // Write your code here.
  let max = -Infinity;
  
  for (let elem of array) {
    const [a0, a1] = elem;
    if(a1 > max) {
      max = a1;
    }
  }

  array = array.sort((a, b) => {return a[0] -b[0]});
  const intervals = Array.from(Array(max + 1));
  const intervalOverlap = [];
  let unique = 1;
  for (let interval of array) {
    const [a0, a1] = interval;
    let foundoverlap = false;
    let found;
    for (let i = a0; i<= a1; i++) {
      if(intervals[i]) {
        foundoverlap = true;
        if(!found) {
          found = intervals[i];
        } else {
          if(found > intervals[i]) {
            found = intervals[i];
          }
        }
      }
    }

    if(foundoverlap) {
      
      for (let i = a0; i<= a1; i++) {
          intervals[i] = found;
      }
      const [s0, s1] = intervalOverlap[found];
      intervalOverlap[found] = [s0 < a0? s0: a0, s1>a1 ? s1: a1];
    } else {
      console.log(a0, a1);
      intervalOverlap[unique] = [a0, a1];
      for (let i = a0; i<= a1; i++) {
          intervals[i] = unique;
      } 
      unique++;
    }

  }



  console.log(intervals);
  
  return intervalOverlap.slice(1);
}

// Do not edit the line below.
exports.mergeOverlappingIntervals = mergeOverlappingIntervals;
