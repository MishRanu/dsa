/* NOTE


Arrays are best if you need an order, fast access, insertion, removal

  Access O(1)
  Insertion 
    push End O(1)
    shift Start O(N) (you have to shift all elements)

  Removal 
    pop End O(1)
    unshit Start O(N) (you have to shift all elements)

  Searching
    Unsorted O(N)
    Sorted O(log N)

  concat 
    O(N) // returns a new array
  
  slice
    O(N) // returns a new array
  
  splice 
    O(N) // returns a new array
  
  sort 
    O(N log N)
  
  forEach/map/filter/reduce 
    O(N)

*/
