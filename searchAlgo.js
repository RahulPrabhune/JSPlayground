const binarySearch = (array, val) => {
    let start = 0;
    let end = array.length - 1;
    let mid = 0;
    while (start <= end) {
        
        mid = Math.floor((end + start)/2);
        console.log(array[mid])
        console.log(array[mid])

        if(array[mid] == val) {
            console.log(array[mid])
           return mid;
        }
        else if(val > array[mid]){
            console.log(array[mid])
            console.log(array[mid])
            start = mid + 1;
        }
        else {
            console.log(array[mid]);
            end = mid - 1;
        }
    }
    return -1
}

console.log(binarySearch([22,33,44,55,66,77], 77))


