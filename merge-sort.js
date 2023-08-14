const randomarray = [1,6,7,3,9,5,89,4,8,3,6,0,34,78,43,34,6,34,34234,233,52,312,2]

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;

    const splitIndex = Math.floor(arr.length / 2);
    const left = arr.slice(0, splitIndex);
    const right = arr.slice(splitIndex);

    return merge(mergeSort(left), mergeSort(right))
    
}

function merge(left, right) {
    let sorted = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            sorted.push(left[leftIndex]);
            leftIndex++;
        } else {
            sorted.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return sorted
}

mergeSort(randomarray)