class MaxHeap extends Array {
  constructor() {
    super();
  }

  insert(value) {
    this.push(value);
    let index = this.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);
    let foundInHeap = false;
    while (!foundInHeap && parentIndex >= 0) {
      if (this[index] > this[parentIndex]) {
        this.swap(parentIndex, index);
        index = parentIndex;
        parentIndex = Math.floor((parentIndex - 1) / 2);
      } else {
        foundInHeap = true;
      }
    }

    return this;
  }

  extractMax() {
    if (!this.length) {
      return;
    }

    let index = 0;
    const root = this[index];

    this[index] = this.pop();

    while (index < this.length) {
      const left = 2 * index + 1;
      const right = 2 * index + 2;

      if (right > this.length - 1) {
        return;
      }
      if (this[left] > this[index] && this[right] < this[index]) {
        this.swap(index, left);
        index = left;
      } else if (this[right] > this[index] && this[left] < this[index]) {
        this.swap(index, right);
        index = right;
      } else if (this[left] > this[index] && this[right] > this[index]) {
        if (this[left] > this[right]) {
          this.swap(index, left);
          index = left;
        } else {
          this.swap(index, right);
          index = right;
        }
      } else {
        return root;
      }
    }
    return root;
  }
}

Array.prototype.swap = function (i, j) {
  const temp = this[i];
  this[i] = this[j];
  this[j] = temp;
};

const heap = new MaxHeap();

heap.insert(10);
heap.insert(1);
heap.insert(2);
heap.insert(20);
heap.insert(50);
console.log(heap);

heap.extractMax();

console.log(heap);
heap.extractMax();

console.log(heap);
