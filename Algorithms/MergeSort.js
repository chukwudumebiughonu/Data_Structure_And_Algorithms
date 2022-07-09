// // Merge sort is one of the most efficient ways
// // of sorting list and trees
// // It has a time complexity of O(n log (n))
// // It has a space comoplexity of O(n)

// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

// // function MergeSort(array){
// //     if(array === 1){
// //         return
// //     }

// //     return merge(
// //         MergeSort(left),
// //         MergeSort(right)
// //     )
// // }

// // function merge(left, right){

// // }

// // const answer = MergeSort(numbers);
// // console.log(answer);

// function mergeSort(array){
//     if(array.length === 1){
//         return array;
//     }

//     // Spliting the Array into left and right;
//     const length = array.length;
//     const middle = Math.floor(length / 2);
//     const left = array.slice(0, middle);
//     const right = array.slice(middle);
//     // console.log('left:', left);
//     // console.log('right:', right)

//     return merge(
//         mergeSort(left),
//         mergeSort(right)
//     )
// }

// function merge(left, right){
//     const result = [];
//     let leftIndex = 0;
//     let rightIndex = 0;
//     while(leftIndex < left.length && rightIndex < right.length){
//         if(left[leftIndex] < right[rightIndex]){
//             result.push(left[leftIndex]);
//             leftIndex++;
//         }else{
//             result.push(right[rightIndex]);
//             rightIndex++;
//         }
//     }
//     console.log(left, right);
//     return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
// }
// const answer = mergeSort(numbers);
// console.log(answer);