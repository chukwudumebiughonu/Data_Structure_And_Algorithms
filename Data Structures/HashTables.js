// Array and Hash Table are the most common data structure in  interviews
// The difference between Arrays and Hash Table
// Array has index and value
// Hash Table has keys and values
// The keys are the index for the hash tables

// Hash functions: 
// It takes an input to generate a random number.
// When given the same input, it always returns the out
// Common methods used in hash table includes
// lookups
// insert
// search 
// // delete and the all have the big o of O(1)
// The hash table is pretty fast but has the problem of 
// collision in which to element  or object  can be assign
//  to the same space in memory and this can slow down
// the ability to access in formation
// Hash tables slow down reading and writing in memory 
// it can occure in any hash table implementation

// let viewer = {
//     age: 65,
//     name: 'Kylie',
//     magic: true,
//     scream: function(){
//         console.log('ahhhh!');
//     }
// }

// viewer.age // O(1);
// viewer.spell = 'abra kadabra'; //O(1)
// viewer.scream();

// Methods of resolving hash table includes
// seperate 
// Exercise implementing hash table
// class HashTable {
//     constructor(size){
//         this.data = new Array(size);
//     }
    
//     _hash(key){
//         let hash = 0;
//         for (let i = 0; i < key.length; i++){
//             hash = (hash + key.charCodeAt(i) * i )%
//             this.data.length;
//         }
//         return hash;
//     }

    
//     set(key, value){
//         let address = this._hash(key);
//         if(!this.data[address]){
//            this.data[address] = [];
//         //    this.data[address].push([key, value]);
//         //    console.log(this.data)
//         }
//         this.data[address].push([key, value])
//         return this.data
//     }

//     get(key){
//         let address = this._hash(key);
//         const currentBucket = this.data[address];
//         console.log(currentBucket)
//         if(currentBucket){
//             for(let i = 0; i < currentBucket.lenght; i++)
//             {
//               if(currentBucket[i][0] === key){
//                   return currentBucket[i][1]
//               }
//             }
//             return undefined
//                 }
//     }

//   }
    
    
// const myHashTable = new HashTable(5);
// // myHashTable._hash('grapes'); 
// myHashTable.set('grapesss', 10000);
// myHashTable.set('apples', 19);
// myHashTable.get('grapesss')
// // myHashTable.get('grapes')

// Creating a key This allows us to iterate or loop through
// the keys of a hash table

//    keys(){
//        const keysArray = [];
//        for (let i = 0; i < this.data.length; i++){
//            if(this.data[i]){
//                keysArray.push(this.data[i][0 ])
//            }
//        }
//        return keysArray
//    }

// Exercises

// Google question
// Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4]:
// It should return 

// Given an array = [2, 1, 1, 2, 3, 5, 1, 2, 4]:
// It should return 1

// Given an array = [2, 3, 4, 5]:
// It should return undefined

// Solution

// function firstRecurringCharacter(input) {
//     for (let a = 0; a < input.length; a++){
//         for (let b = a + 1; b < input.length; b++){
//             if(input[a] === input[b]){
//                 return input[a];
//             }
//         }
//     }
//     return undefined
// }
// firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4])

// function firstRecurringCharacter(input) {
//     for (let c = 0; c < input.length; c++)
//     {
//         for (let d = c+ 1; d < input.length; d++){
//             if(input[c] === input[d]){
//                 return input[c];
//             }
//         }
//     }
//     return undefined;
// } // O(n^2 ) is nseen in loops
// function firstRecurringCharacter2(input) {
//      let map =  {};
//      for (let i = 0; i < input.length; i++){
//          if(map[input[i]] //!== undefined){
//              return input[i]
//          }else{
//              map[input[i]] = i;
//          }
//         //  console.log(map);
//      }
//      console.log(map);
//      return undefined
// }
// firstRecurringCharacter2([2, 5, 5, 2, 3, 5, 1, 2, 4]);

// Hash Table has the following upsides
// Fast lookups
// Fast inserts
// Flexible keys

// the downside is that 
// It is unordered
// It is slow key iteration

// It improves time complexity
// But it increases space complexity
// It is one of the most commonly data structure in an 
// interview