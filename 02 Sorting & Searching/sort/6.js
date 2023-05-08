
/* 
    For calculating the number of times the bucketing process has to be done
 */
    function maxDigitsInArray(arr) {
      const max = Math.max(...arr);
      return max.toString().length;
  }
  
  /* 
      For calculating the digit at pow10 of i in num
   */
  function getDigitByPosition(num, i) {
      const digit = Math.floor(num / Math.pow(10, i - 1)) % 10;
      return digit;
  }
  
  
  /* 
      Function for sorting the array
   */
  function radixSort(arr) {
  
      /* 
          Create n buckets
              For each bucket, iterate through the array put the element in bucket queue
              dequeue the elements from the bucket and create a new array
      */
  
      const numBuckets = maxDigitsInArray(arr);
      for (let i = 0; i < numBuckets; i++) {
          const buckets = Array.from(Array(10), () => []);
          for (const num of arr) {
              const digit = getDigitByPosition(num, i + 1);
              buckets[digit].push(num);
          }
          arr = [].concat(...buckets);
      }
      return arr;
  }
  // Do not edit the line below.
  exports.radixSort = radixSort;
  