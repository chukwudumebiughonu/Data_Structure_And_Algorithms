// Insertion sort is fast and efficient, it
// is used when the list is almost sorted 
//  The time complexity is O(n)  
// It has a space complexity  of O(1)

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];



// function Insertion(array){
//     const length = array.length;
//     for(let a = 0; a < length; a++){
//         if(array[a] < array[0]){
//             array.unshift(array.splice(a,1)[0]);
//         }else {
//             for(let b = 0; b < length; b++){
//                 if(array[a] > array[b - 1] && array[a] < array[b]){
//                     array.splice(b, 0, array.splice(a,1)[0])
//                 }
//             }
//         }
//     }
// }
// Insertion(numbers);
// console.log(numbers);

// function InsertSort(array){
//     const length = array.length;
//     for(let a = 0; a < length; a++){
//         if(array[a] < array[0]){
//             array.unshift(array.splice(a, 1)[0])
//         }else {
//             for(let b = 0; b < a; b++){
//                 if(array[a] > array[b -1] && array[a] < array[b]){
//                     array.splice(b, 0, array.splice(a, 1)[0])
//                 }
//             }
//         }
//     }
// }
// InsertSort(numbers);
// console.log(numbers)

// function Insertion(array){
//     const length = array.length;
//     for(let a = 0; a < length; a++){
//         if(array[a] < array[0]){
//             array.unshift(array.splice(a, 1)[0]);
//         }else{
//             for(let b = 0; b < length; b++){
//                 if(array[a] >= array[b- 1] && array[a] < array [b]){
//                     array.splice(b, 0, array.splice(a,1)[0])
//                 }
//             }
//         }
//     }
// }

// Insertion(numbers);
// console.log(numbers);

// function Insertion(array){
//     const length = array.length;
//     for(let a = 0; a < length; a++){
//         if(array[a] < array[0]){
//             array.unshift(array.splice(a, 1)[0])
//         }else {
//             for(let b = 0; b < a; b++){
//                 if(array[a] >= array[b-1] && array[a] < array[b]){
//                     array.splice(b,0,array.splice(a,1)[0])
//                 }
//             }
//         }
//     }
// }
// Insertion(numbers);
// console.log(numbers)

// function Insertion(array){
//     const length = array.length;
//     for(let a =  0; a < length; a++){
//         if(array[a] < array[0]){
//             array.unshift(array.splice(a,1)[0])
//         }else {
//             for(let b = 0; b < length; b++){
//                 if(array[a] > array[b -1] && array[a] < array[b]){
//                     array.splice(b,0,array.splice(a,1)[0])
//                 }
//             }
//         }
//     }
// }
// Insertion(numbers);
// console.log(numbers);

// function Insertion(array){
//     const length = array.length;
//     for(let a = 0; a < length; a++){
//         if(array[a] < array[0]){
//             array.unshift(array.splice(a,1)[0])
//         }else{
//             for(let b = 0; b < a; b++){
//                 if(array[a] > array[b -1] && array[a] < array[b]){
//                     array.splice(b,0,array.splice(a,1)[0])
//                 }
//             }
//         }
//     }
// }
// Insertion(numbers);
// console.log(numbers);

// creating Insertion sorts/
// Pay  close attention to the

// b < length; 
// array[a] >= array[b -1] pair


// b < length; 
// array[a] > array[b -1] pair


// b < a; 
// array[a] >= array[b -1] pair


// b < a; 
// array[a] > array[b -1] pair