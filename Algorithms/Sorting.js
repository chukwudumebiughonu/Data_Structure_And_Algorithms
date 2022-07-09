// const letters  = ['a', 'c', 'e', 'f', 'd', 'h','i']
// letters.sort()

// It is uded to sort large data set
// Commonly used in Google, apple, amazon, microsoft and netflix

// Example of sorting algorithms 
// Bubble sort
// Insertion  sort 
// Selection sort
// Merge sort 
// Quick sort

const letters  = ['a', 'c', 'e', 'f', 'd', 'h','i']
const basket = [2, 65, 34, 2, 1, 7, 8]
// letters.sort()
// basket.sort()

// console.log('2'.charCodeAt(0))
// console.log('65'.charCodeAt(0))
// console.log('34'.charCodeAt(0))
// console.log('7'.charCodeAt(0))

// const spanish = ['unico', 'arbol', 'cosas', 'futbol']

// // spanish.sort();
// const spanish = ['unico', 'arbol', 'cosas', 'futbol']

// spanish.sort(function (a, b){
//     return a.localeCompare(b);
// });

// const letters  = ['a', 'c', 'e', 'f', 'd', 'h','i']
// const basket = [2, 65, 34, 2, 1, 7, 8]
// letters.sort()
// basket.sort(function(a, b){
//     return a -b
// })

// *******************************************************
// Bubble sort
// It is one of the simplest sorting algorithm 
// It is one of the least efficient sorting algorithm
// Creating a bubbleSort algorithm  

// const numerals = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

// function BubbleSort(numerals){
//     const long = numerals.length;
//     for(let p = 0; p < long; p++){
//         for(let s = 0; s < long; s++){
//             if(numerals[s] > numerals[s + 1]){
//                 let temp = numerals[s];
//                 numerals[s] = numerals[s + 1];
//                 numerals[s + 1] = temp;
//             }
//         }
//     }
// }
// BubbleSort(numerals)
// console.log(numerals)
// This algorithm has the space complexity O of one 
// Although it is not the best algorithm 
// It has a time complexity of O(n )

// ****************************************************
// The selection sort 
// This is one of the simplest possible way to sort a list 
// It scan the list for the smallest element and then swap the
// first element on the list with the smallest element 
// The selection complexity has Time complexity of O(n^2)
// It has a space complexity of O(n^2)

const numerals = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

// ReverseSort
// function Selsort(array){
//     const long = array.length;
//     for(let i = 0; i < long; i++){
//         let min = i;
//         let temp = array[i];
//         for(let j = i + 1; j < long; j++){
//             if(array[j] > array[min]){
//                 min = j
//             }
//         }
//         array[i] = array[min];
//         array[min] = temp
//     }
//     return array;
// }
// Selsort(numerals)
// console.log(numerals)

// function SeleSort(arr){
//     const long = arr.length;
//     for(let a = 0; a < long; a++){
//         let min = a;
//         let temp = arr[a];
//         for(let b = a + 1; b < long; b++){
//             if(arr[b] < arr[min]){
//                 min = b;
//             }
//         }
//         arr[a] = arr[min];
//         arr[min] = temp;
//     }
//     return arr;
// }
// SeleSort(numerals)
// console.log(numerals)


// Creating Bubble Sort
// // Reverse buble sort
// function Bubbler(numerals){
//     const long = numerals.length;
//     for(let a = 0; a < long; a++){
//         for(let b = 0; b < long; b++){
//             if( numerals[b] < numerals[b + 1]){
//                 temp = numerals[b];
//                 numerals[b] = numerals[b +1];
//                 numerals[b + 1] = temp;
//             }
//         }
//     }

// }
// Bubbler(numerals);
// console.log(numerals)

// Bubble sort  

// function Bubblet(numerals){
//     const long = numerals.length;
//     for(let c = 0; c < long; c++){
//         for(let d = 0; d < long; d++){
//             if(numerals[d] > numerals[d + 1]){
//                 temp = numerals[d];
//                 numerals[d] = numerals[d +1];
//                 numerals[d + 1] = temp;
//             }
//         }
//     }
// }
// Bubblet(numerals);
// console.log(numerals);

// final bubble 
// function Bubbletin(numerals){
//     const long = numerals.length;
//     for(let a = 0; a < long; a++){
//         for(let b = 0; b < long; b++){
//             if(numerals[b] > numerals[b + 1]){
//                 temp = numerals[b];
//                 numerals[b] = numerals[b +1];
//                 numerals[b + 1] = temp;
//             }
//         }
//     }
// }
// Bubbletin(numerals);
// console.log(numerals);


