function mergeSort(array) {
    console.log("Start")
    if (array.length <= 1) {
        console.log("finished with", array)
        return array
    };
  
    const halfway = Math.floor(array.length / 2);
    let firstHalf = array.slice(0, halfway);
    let secondHalf = array.slice(halfway);

    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
};


function merge(arr1, arr2) {
    let sorted = [];
    // pointers for both arrays
    let i = 0;
    let j = 0;

    // initial round of comparing, push smaller value into sorted array
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            sorted.push(arr1[i]);
            i++;
        } else if (arr1[i] > arr2[j]) {
            sorted.push(arr2[j]);
            j++;
        } else {
            sorted.push(arr1[i], arr2[j]);
            i++;
            j++;
        }
    };

    // handle remaining elements in arr1

    while (i < arr1.length) {
        sorted.push(arr1[i]);
        i++;
    }

    // handle remaining elements in arr2

    while (j < arr2.length) {
        sorted.push(arr2[j]);
        j++;
    }

    return sorted;
}

console.log(mergeSort([4,3,5,8,9,10]))