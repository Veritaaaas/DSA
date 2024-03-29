const loadFactor = 0.75;

class hashMap {
    #size = 16;
    #capacity = 0;

    constructor() {
        this.map = {};
    }

    set(key, value) {

        let code = hash(key);

        if(!this.map[code])
        {
            this.map[code] = [[key, value]];
        }

        else
        {
            let inserted = false;
            for (let i = 0; i < this.map[code].length; i++)
            {
                if (this.map[code][i][0] == key)
                {
                    this.map[code][i][1] = value;
                    inserted = true;
                }
            }

            if(!inserted)
            {
                this.map[code].push([key, value]);
            }
        }
    }

    get(key) {
        let code = hash(key);

        if (!this.map[code])
        {
            return null;
        }

        for (let i = 0; i < this.map[code].length; i++)
        {
            if (this.map[code][i][0] == key)
            {
                return this.map[code][i][1];
            }
        }

        return null;
    }

    has(key)
    {
        let code = hash(key);

        if (!this.map[code])
        {
            return false;
        }

        for (let i = 0; i < this.map[code].length; i++)
        {
            if (this.map[code][i][0] == key)
            {
                return true;
            }
        }

        return false;
    }

    remove(key)
    {
        let code = hash(key);

        if (!this.map[code])
        {
            return false;
        }

        for (let i = 0; i < this.map[code].length; i++)
        {
            if (this.map[code][i][0] == key)
            {
                this.map[code][i].splice(i, 1);
                return true;
            }
        }

        return false;
    }

    length()
    {
        let size = 0;
        for (let code in this.map) {
            if (this.map.hasOwnProperty(code)) {
                for (let i = 0; i < this.map[code].length; i++) {
                    size++;
                }
            }
        }

        return size;
    }

    clear()
    {
        for (let code in this.map) {
            if (this.map.hasOwnProperty(code)) {
                this.map[code] = [];
            }
        }
    }

    keys()
    {
        let keys = []
        for (let code in this.map) {
            if (this.map.hasOwnProperty(code)) {
                for (let i = 0; i < this.map[code].length; i++) {
                    keys.push(this.map[code][i][0]);
                }
            }
        }

        return keys;
    }

    values()
    {
        let values = []
        for (let code in this.map) {
            if (this.map.hasOwnProperty(code)) {
                for (let i = 0; i < this.map[code].length; i++) {
                    values.push(this.map[code][i][1]);
                }
            }
        }

        return values;
    }

    entries()
    {
        let entries = []
        for (let code in this.map) {
            if (this.map.hasOwnProperty(code)) {
                for (let i = 0; i < this.map[code].length; i++) {
                    entries.push([this.map[code][i][0], this.map[code][i][1]])
                }
            }
        }

        return entries;
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


