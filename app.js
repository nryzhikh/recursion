const print = (list) => {
    if (Object.values.list(list) === null) return {
        console.log(Object.values(list))
} else {
for (let obj of Object.values(list)) {
    console.log(print(list))
}
}
}

const sumRange = (3) => {
    if (n === 1) return n
    else return n + sumRange(n-1)
}

sumRange(6)

const power = (base, exponent) => {
    if (exponent === 0) return 1
    else return base * power(base, exponent-1)
}

console.log(power(2, 4)); // 16
console.log(power(2, 3)); // 8
console.log(power(2, 2)); // 4 
console.log(power(2, 1)); // 2
console.log(power(2, 0)); // 1

const factorial = (n) => {
    return n === 1 ? n : n * factorial(n-1)
}

factorial(5)

const all = (arr, func) => {
   if (arr.length === 0) return true
   else return func(arr[0]) ? all(arr.shift(), func) : false

}

const productOfArray = (arr) => {
    if (arr.length === 0) return 1
    else return arr[0] * productOfArray(arr.slice(1))
}

var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false


const contains = (obj, val) => {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            return contains(obj[key], val)
        } else if (obj[key] === val) {
            return true
        }
    }
    return false


}

var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7


const totalIntegers = (a) => {
    if(a.length === 0) return 0
    else if (typeof a[0] === 'number') return 1 + totalIntegers(a.slice(1))
    else return totalIntegers(a.slice(1))
}

const sumSquares = (arr) => {
    if (arr.length === 0) return 0
    let total = 0

    for (let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            total += sumSquares(arr[i])
        } else {
            total += arr[i] * arr[i]
        }
    }
    return total
}

const replicate = (times, number) => {
    if(times <= 0) return [];
    return [number].concat(replicate(times - 1, number))
}


const fibsRecArray = (n) => {
    if (n === 1) return [0, 1]
    else {
        let s = fibsRecArray(n-1)
        s.push(s[s.length - 1] + s[s.length - 2])
        return s
    }
}