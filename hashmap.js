const loadFactor = 0.75;

class hashMap {
    #size;
    #capacity;

    constructor() {
        this.map = {};
    }

    set(key, value) {

        if (key in this.map)
        {
            this.map[key] = value;
        }
    }
}

function hash(key) {
    let hashCode = 0;
    
       
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
 
    return hashCode;
  } 