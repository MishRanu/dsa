/*
  100 200 300 .... 2000

  start skip end
*/

// const generateNumberArray = (start, end, skip = 100) => {

//   const arr = Array.from({length: Math.round(end - start)/skip}, (value, index) => {
//     return start + index*skip;
//   });

//   return arr;

// }

// console.log(generateNumberArray(100, 2000, 100));

/*
  [6:30 PM] Tushar Raj
    let s1 = ">1500"
​[6:30 PM] Tushar Raj
    let s2 = "<400"
​[6:30 PM] Tushar Raj
    let s3 = "=500"
*/
/*
  amu
  
  debounce(500)
  
  streams
  
  
  combineLatest
  mergeAll
  forkJoin
  
  operators
  
  concatMap
  switchMap
  exhaustMap
  
  tushar.raj@monsterindia.com
  
  s4=">=-0.25"
  USECASE -> 
  
 
*/

const generateNumberArray = (start, end, skip = 100) => {
  const arr = Array.from(
    { length: Math.round(end - start) / skip },
    (value, index) => {
      return start + index * skip;
    }
  );

  return arr;
};

const filterArray = (arr, cond) => {
  const getTargetAndOperator = (cond) => {
    const numRegex = /[-+]?[0-9]*\.?[0-9]+/;
    const target = Number(cond.match(numRegex)[0]);
    const op = cond.slice(0, cond.indexOf(target)).trim();

    return {
      target: target,
      op: op,
    };
  };

  const checkCondition = (elem1, elem2, op) => {
    const operators = ["=", ">", "<", ">=", "<=", "==", "!=", "<>"];
    switch (op) {
      case "=":
      case "==":
      case "===":
        return elem1 === elem2;
      case ">":
        return elem1 > elem2;
      case "<":
        return elem1 < elem2;
      case ">=":
        return elem1 >= elem2;
      case "<=":
        return elem1 <= elem2;
      case "!=":
      case "<>":
        return elem1 != elem2;
      default:
        break;
    }
  };

  const { target, op } = getTargetAndOperator(cond);

  return arr.filter((elem) => checkCondition(elem, target, op));
};

const arr = generateNumberArray(100, 2000, 100);

console.log(filterArray(arr, ">1500"));
