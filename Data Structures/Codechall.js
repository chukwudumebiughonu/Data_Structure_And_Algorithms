// // How to solve coding problems
// // const array1 = ['a','b', 'c', 'x'];
// // const array2 = ['z', 'y', 'a'];

// // function containsCommonItem2(arr1, arr2) {
// //   // loop through first array and create object where
// //   // properties  === items in the array
// //   let map = {};
// //   for (let i=0; i< arr1.length; i++) {
// //     if(!map[i]) {
// //         const item = array1[i];
// //         map[item] = true;
// //     }
// //   }
// //   console.log(map)
// // }


// // containsCommonItem2(array1, array2)



// // const array3 = ['c', 'd', 'e', 'k']
// // const array4 = ['t', 'q', 'w', 'g']


// // function newMap(ar1, ar2) {
// //     let map = {};
// //     for(let i = 0; i < ar1.length; i++) {
// //     if(!map[array3[i]]){
// //         const itemy = array3[i];
// //         map[itemy] = true;
// //     }
// //     }
// //     // console.log(map)

// //     for(let j = 0; j < ar2.length; j++) {
// //         if(map[array4[j]]) {
// //             // const itemy1 = array4[j];
// //             // map[itemy1] = true;
// //             return true;
// //         }
// //     }
// //     return false 

// //     // console.log(map)
// // }

// // newMap(array3, array4)  

// // const array1 = ['a','b', 'c', 'x'];
// // const array2 = ['z', 'y', 'r'];

// // function newCount(arr1, arr2) {
// //     let map = {};
// //     for (let i = 0;  i < arr1.length; i++) {
// //         if(!map[array1[i]]) {
// //             const item = array1[i];
// //             map[item] = true;
// //         }
// //     }
// //     for (let j = 0; j < arr2.length; j++) {
// //         if (map[array2[j]]) {
// //             return true;
// //         }
// //     }
// //     return false
// // }

// // newCount(array1, array2)

// function hasPairWithSum2(arr, sum) {
//     const mySet = new Set();
//     const len = arr.length;
//     for (let i = 0; i < len; i++) {
//       if (mySet.has(arr[i])) {
//         return true;
//       }
//       mySet.add(sum - arr[i]);
//     }
//     return false;
//   }
  
//   hasPairWithSum2([6,4,3,2,1,7], 9)

// Data Structures introduction
// A data structure is a collection of values
// Algorithms are steps or processes we put
// in place to manipulate this collection
// of values. Great programs are written with data structures
// and algorithm


 // Given 2 arrays, create a function that let's a user
//  know (true/false) whether these two arrays contain any
//  common items 
// For Example:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// should return false.
// ------------------------
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];

// 2 parameters - arrays - no size limits
// return true or false 

// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'a'];

// function containsCommonItem(arr1, arr2)
// {
//     for(let i = 0; i < arr1.length; i++){
//         for (let j = 0; j < arr2.length; j++)
//         {
//             if(arr1[i] === arr2[j]) {
//                 return true;
//             }
//         }
//     }
//     return false
// }

// containsCommonItem(array1, array2); the big O of 
// this is O(a*b)

// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'a'];

// function containsCommonItem2(arr1, arr2){
//     // loop through first array and create object 
//     // where properties  === items in the array
//    let map = {};
//    for (let a = 0; a < arr1.length; a++){
//        if(!map[array1[array1]]){
//            const item = array1[a];
//            map[item] = true;
//        }
//    }
   

// //    for (let b = 0; b < arr2.length; b++){
// //        if(!map[array2[b]]){
// //     //        const item2 = array2[b];
// //     //        map[item2] = true;
// //               return true;
// //        }
// //    }
// //    return false;
// //    console.log(map);

//    for (let b = 0; b < arr1.length; b++){
//        if(map[array2[b]]){
//            return true;
//        }
//    }

//    return false;
//     // loop through second array and check if item in 
//     // second array exist on created object.


// }
// // the big O of this is going to be O(a + b)

// containsCommonItem2(array1, array2);

// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'a'];

// function containsCommonItem(arr1, arr2){
//     let map = {};
//     for(let a = 0; a < arr1.length; a++){
//         if(!map[array1[a]]){
//             const item = array1[a];
//             map[item] = true;
//         }
//     }

//     for(let b = 0; b < arr2.length; b++){
//         if(map[array2[b]]){
//             return true;
//         }
//     }
//     return false;
// }

// containsCommonItem(array1, array2);


function hasPairWithSum(arr, sum){
    var len = arr.length;
    for(var i = 0; i<len-1; i++){
        for(var j = i+1; j<len; j++){
            if (arr[i] + arr[j] === sum)
            {
                console.log( arr[i] + arr[j])
            }
                
        }
    }

    return false;
}

hasPairWithSum([6,2],9)

// function hasPairWithSum2(arr, sum){
//     const mySet = new Set();
//     const len = arr.length;
//     for (let i = 0; i < len; i++){
//         if(mySet.has(arr[i])){
//             return true;
//         }
//         mySet.add(sum - arr[i]);
//     }
//     return false;
// }

// hasPairWithSum2([6,4,3,2,1,7], 9)


// DATA STRUCTURE INTRODUCTION
// A data structure is a collection of values, while 
// algorithms are steps we put in place to manipulate these
// collection of values values
// Data structure is a way for programmers to organize
// data so it can be easily retrieved when needed

//