class HashTable extends Array {
  constructor(size){
    super(size);
  }

  _hash(string){
    const HASH = 31;
    let sum = 0;
    for (let i = 0; i < Math.min(string.length, 100); i++) {
      const num = string.charCodeAt(i);
      sum = (sum + num + HASH) % this.length;
    }
    return sum;
  }


  get(key) {
    const hash = this._hash(key);
    if(!this[hash]) {
      return;
    }

    for (const elem of this[hash]) {
      if(elem[0] === key) {
        return elem[1];
      }
    }
  }

  set(key, value) {
    const hash = this._hash(key);
    if(!this[hash]) {
      this[hash] = [];
    }

    this[hash].push([key, value]);
  }


  keys() {
    const keys = [];
    for (const elem of this) {
      if(elem) {
        keys.push(...elem.map(e => e[0]));
      }
    }
    return keys;
  }

  values() {
    const keys = [];
    for (const elem of this) {
      if(elem) {
        keys.push(...elem.map(e => e[1]));
      }
    }
    return keys;
  }

}

const hash = new HashTable(13);

hash.set("cyan", "#asdfasf");
hash.set("cyan2", "#fefefe");
hash.set("cyan3", "#fefefe");
hash.set("cyan4", "#fefefe");

console.log(hash.get("cyan4"));
console.log(hash.keys());
