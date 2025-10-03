// if (index < 0 || index >= buckets.length) {
//   throw new Error("Trying to access index out of bounds");
// }

function HashMap() {
    const loadFactor = 0.75;
    let capacity = 16;

    const buckets = [];
    buckets.length = capacity
    
    const getBuckets = () => buckets;

    const hash = (key) => {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode = hashCode % capacity;
        }
        return hashCode;
    };

    const set = (key, value) => {
        let index = hash(key);
        // grow bucket if load factor reached
        if (keys.length === capacity) {
            capacity *= 2;
            return
        }

        if (index < 0 || index >= buckets.length) {
            throw new Error("Trying to access index out of bounds");
        };


        // if key already exists, update value of key. Doesnt account for collisions 
        if(buckets[index] === undefined) {
            buckets[index] = {key: key, value: value}
        }else {
            buckets[index].value = value;
            return
        } 
    };

    // get key
    const get = (key) => {
        // iterate over buckets 
        for (const bucket of buckets) {
            if (bucket === undefined) {
                continue
            }
            if (bucket.key === key) {
                return bucket.value;
            }
        };
        // if key not found return null
        return null
    };

    const has = (key) => {
        // iterate over buckets 
        for (const bucket of buckets) {
            if (bucket === undefined) {
                continue
            }
            if (bucket.key === key) {
                return true
            }
        };
        // if key not found return false
        return false
    };

    const remove = (key) => {
        let index = 0;
        for (const bucket of buckets) {
            if (bucket === undefined) {
                continue
            }
            if (bucket.key === key) {
                buckets.splice(index, 1)
                return true
            }
            index++;
        };
        // if key not found return false
        return false
    };

    const length = () => {
        return keys.length;
    };

    const clear = () => {
        buckets.splice(0);
    };

    const keys = () => {
        const keysArray = [];
        for (const bucket of buckets) {
            if (bucket === undefined) {
                continue
            }
            keysArray.push(bucket.key);
        }
        return keysArray;
    };
    
    const values = () => {
        const valuesArray = [];
        for (const bucket of buckets){
            if (bucket === undefined) {
                continue
            }
            valuesArray.push(bucket.value);
        };
        return valuesArray;
    };

    const entries = () => {
        const entriesArray = [];
        for (const bucket of buckets) {
            if (bucket === undefined) {
                continue
            }
            entriesArray.push([bucket.key, bucket.value])
        };
        return entriesArray;
    }

    return {
        hash,
        set,
        get,
        has,
        remove,
        length,
        clear,
        keys,
        values,
        entries,
        getBuckets
    }
}


const test = HashMap();

 test.set('apple', 'red')
 test.set('banana', 'yellow')
 test.set('carrot', 'orange')
 test.set('dog', 'brown')
 test.set('elephant', 'gray')
 test.set('frog', 'green')
 test.set('grape', 'purple')
 test.set('hat', 'black')
 test.set('ice cream', 'white')
 test.set('jacket', 'blue')
 test.set('kite', 'pink')
 test.set('lion', 'golden')
 test.set('apple', 'yellow')
test.set('moon', 'silver')
console.log(test.getBuckets())
 console.log(test.entries())
 console.log(test.keys())