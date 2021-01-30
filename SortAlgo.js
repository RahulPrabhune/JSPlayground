//ANCHOR Quick sort
function quickSort(array){
    if(array.length <= 1){
        return array;
    }
    randomIndex = Math.floor(Math.random() * (array.length));
    let pivot = array[randomIndex];
    let leftArr = [];
    let rightArr = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] < pivot){
            leftArr.push(array[i]);
        }
        else if(array[i] > pivot){
            rightArr.push(array[i])
        }
    }
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}
console.log(quickSort(['Rahul','Shalaka', 'Apple', 'Vihaan', 'Banana']));

//ANCHOR Merge sort
const mergeArr = (leftArr, rightArr) => {
    let outputArr = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while(leftIndex < leftArr.length && rightIndex < rightArr.length){
        let leftEl = leftArr[leftIndex];
        let rightEl = rightArr[rightIndex];
        if(leftEl > rightEl){
            outputArr.push(rightEl);
            rightIndex++;
        } else {
            outputArr.push(leftEl);
            leftIndex++;
        }
    }
    return [...outputArr, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]
}
const mergeSort = array => {
    if(array.length <= 1){
        return array;
    }
    let middleIndex = Math.floor(array.length/2)
    console.log(middleIndex);
    let leftArr = array.slice(0,middleIndex);
    let rightArr = array.slice(middleIndex, array.length);
    console.log(`${leftArr}  ${rightArr}`)
    return mergeArr(mergeSort(leftArr), mergeSort(rightArr));
}

console.log(mergeSort([2,33,4,55,6,77]));


//ANCHOR Insertion Sort
const insertionSort = (array) => {
    for(let i = 1; i < array.length - 1; i++){
        for(let j = i; j > 0; j--){
            if(array[j] < array[j-1]){
                [array[j],array[j-1]] = [array[j-1], array[j]];
            } else{
                break
            }
        }
    }
    return array;
}
console.log(insertionSort([2,33,4,55,6,77]));

//ANCHOR Binary Insertion Sort

const binaryInsertionSort = array => {
    return array;
} 
console.log(binaryInsertionSort([2,33,4,55,6,77]));
