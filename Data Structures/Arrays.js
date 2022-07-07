// Array as a Data structure
// Arrays organizes element sequencially
// Items are store in sequencial order
// it is the simplest and most wildly used data structure
// it has the list amount of rule
// common example of action include
// lookup O(1)
// push O(1)
// insert O(n)
// delete O(n): 
// pop O(1): Used for removing an item at the end ofan array

// creating an array
// const strings = ['a', 'b', 'c', 'd'];
//  this uses 16 bytes of storage

// push method all us to add something at the end of array

// strings.push('e');

// // console.log(strings)
// console.log (strings[2], strings[4])
// strings.pop();
// console.log(strings)
// Some useful information on ram and memory
// A group of latches operating is called a register, 
// which holds a single number, and the number of bit in a 
// register is called it width.

// A collection of 8 bit is called a byte 
// A collection of 4 bytes or 32 bits is called a word

// unshift for adding items to the beging of the array
// strings.unshift('x') // O(n)
// console.log(strings)
// strings.splice(2, 0, 'professor');
// console.log(strings)

// Advance object concepts This include

// Reference type
// context 
// Instatiation

// Reference type

// var object1 = {value:10};
// var object2 = object1
// var object3 = {value: 10};
// console.log(object1);
// console.log(object2);
// console.log(object3);
// console.log(object1 === object2);
// console.log(object1 === object3);
// object1.value = 23;
// console.log(object1.value);
// console.log(object2.value)
// object3.value = 16;
// console.log(object3.value)


// ======================================
// context tells where  you are within the object
// console.log(this);
// this.alert('hello');
// console.log(this === Window)

// const object4 = {
//     a: function(){
//         console.log(this);
//     }
// }

// Instatiation 
// This is where you make a copy of code and you use it
// Example

// class Player {
//     constructor(name, type){
//         console.log(this)
//         this.name = name;
//         this.type = type;
//     }
//     introduce(){ //note the introduce is a meth
//         console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
//     }
// }

// class Wizard extends Player {
//     constructor(name, type){
//         super(name, type)
//     }
//     play(){
//         console.log(`Wiiiiiiii I'm a ${this.type}`)
//     }
// }

// const wizard1 = new Wizard('shelly', 'healer');
// const wizard2 = new Wizard('Shawn', 'Dark magic');
// class Mywife {
//     constructor(name1, name, shes){
//         this.name = name;
//         this.shes = shes;
//         this.name1 = name1;
//     }
//     introduction(){
//         console.log(`Hi I'm am prof ${this.name1}, and here is
//         my wife ${this.name}, she is a ${this.shes}`);
//     }
// }

// class Mann extends Mywife{
//     constructor(name1, name, shes){
//         super(name1, name, shes);
//     }
//     couple(){
//         console.log(`here is my wife ${this.name}, 
//         and she is a beautiful and intelligent ${this.shes}`);
//     }
// }

// const mann = new Mann('Chukwudumebi', 'Andrea', 'blonde');

// -------------------------------
// Implementing arrays

// How to build an array
// class MyArray{
//     constructor(){
//         this.length = 0;
//         this.data = {};
//     }

//     get(index){
//         return this.data[index]
//     }

//     push(item){
//         this.data[this.length] = item;
//         this.length++;
//         return this.length;
//     }
//     pop(){
//         const lastItem = this.data[this.length-1];
//         delete this.data[this.length-1];
//         this.length--;
//         return lastItem;
//     }
//     delete(index){
//          const item = this.data[index];
//          this.shiftItems(index);

//     }

//     shiftItems(index){
//         for (let i = index; i < this.length - 1; i++)
//         {
//             this.data[i] = this.data[i+1];
//         }
//         delete this.data[this.length-1];
//         this.length--;
//     }
  
// }

// // A method simply means when a function is within a class

// const newArray = new MyArray();  
// newArray.push('hi');
// newArray.push('you');
// newArray.push('!');
// // newArray.pop();
// // newArray.pop();

// newArray.delete(0);
// newArray.push('are');
// newArray.push('nice')
// newArray.delete(1);

// console.log(newArray);

 
// Strings and Array
// string are simple an array of  characters


// Exercise Reverse a string
// Create a fucntion that reverses a string:
// 'Hi My name is Andrei' should be:
// 'ierdnA si eman yM iH'

// function reverse (str){
//     // check input
//     if(!str || str.length < 2 || typeof str !==
//         'string'){
//             return 'Hmm that is not good'
//         }
    
//     const backwards = [];
//     const totalItems = str.length - 1;
//     for (let i = totalItems; i >= 0; i--){
//         backwards.push(str[i]);
//     }
//     console.log(backwards);

//     return backwards.join('');
// }
// ----------------------
// Another way of creating reverse function
// function reverse2 (str){
//     return str.split('').reverse().join('');
// }
// reverse2('Hi My name is Andrei');

// ---------------------------------
//  This is the ecmascript 6 way of creating a reverse string;
// Yet another way of creating the reverse function
// const reverse3 = str => str.split('').reverse().join('');
// reverse3('Hi My name is Andrei');

// ------------------------------------------
// Yet another way of creating the reverse string

// const reverse4 = str => [...str].reverse().join('');
// reverse4('Hi My name is Chukwudumebi')

// ---------------------------------
// Merging Sorted Array
// Given two array that are sorted, can you merge the 
// array into On big array that is still sorted

// Example
// mergeSortedArrays([0, 3, 4, 31], [4, 6,30]);
// should give [0, 3, 4, 4, 6, 30, 31]; 


// function mergeSortedArrays (array1, array2){
//     const mergedArrays = [];
//     let array1Item = array1[0];
//     let array2Item = array2[0];
//     let i = 1; 
//     let j = 1; 

//     // Check input
//     if (array1Item.length === 0){
//         return array2;
//     }
    
//     if (array2Item.length === 0){
//         return array1;
//     }
    
//     while (array1Item || array2Item){
//         console.log(array1Item, array2Item);
//         if(!array2Item || array1Item < array2Item){
//             array1Item = array1[1];
//             mergedArrays.push(array1Item)
//             array1Item = array1[i]
//             i++;
//         } else{
//             mergedArrays.push(array2Item)
//             array2Item = array2[j];
//             j++;
//         }
//     }
//     return mergedArrays;
// }
// mergeSortedArrays([0, 3, 4], [4, 6, 31]);
// Arrays are used for  the following
// Fast lookups
// fast push/pop()
// Ordered

// It use slow inserts and slow deletes
// It is fixed sizes*

