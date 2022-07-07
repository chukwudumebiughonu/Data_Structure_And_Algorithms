// Big O asymptotic 
// Big O tells us how well a problem is solved
// What is a good code
// It is a code that is readable
// It is scalable
// const nemo = ['nemo'];
// const everyone = ['dory', 'bruce', 'martin',
// 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla','hank'];

// function findNemo(array) {
//     let t0  = performance.now();
//     for (let i = 0; i < array.length; i++){

//     if (array[i] === 'nemo'){
//         console.log('found Nemo!'); 
//     }
// }
// let t1 = performance.now();
// console.log('Call to find Nemo took ' + (t1 - t0) + ' milliseconds');
// }

// findNemo(everyone);

// const large = new Array(100000).fill('nemo');
// function findNemo(array){
//     let t0 = performance.now()
//     for (let e = 0; e < array.length; e++){
//         if (array[e] === 'nemo'){
//             console.log('nemo is every where');

//         }
//     }
//     let t1 = performance.now()
//     console.log('Call to finde Nemo took ' + (t1 - t0) + ' milliseconds')
// }

// findNemo(large);

// The first Big O notation 
// O(n) --> linear Time; this is the most common notation
// In O(n) that is linear time the number of operation is proportional
// with the number of elements


// In constant time O(1) the number of operation  remains
// the same despite the number of elements
// const bluebur = [11,23, 3, 4, 5, 6, 7]

// function BlueBox(boxes){
//     console.log(bluebur[0]);
//     console.log(bluebur[1]);
// }
// BlueBox(bluebur) // Constant time O(1 )

// exmaple of constant time notation
// const webmite = ['web', 'net', 'spin', 'string', 'catch', 'link'];
// function Websect(derweb){
//     console.log(derweb[3]);
//     console.log(derweb[4]);
// }
// Websect(webmite) //constant time 0(2)
// predictability when it comes to computing is very nice

// Simple challenge, what is the big O in the following code;

// function funNy(input){
//     let a  = 10; // 0(1)

//     a = 50 + 3; // 0(1)
//     for  (let i = 0; i < input.length; i++){ //0(n)
//         anotherFun(); //0(n)
//         let strange = true; //0(n)
//         a++; //0(n)
//     }
//     return a; //0(1)
// }
// funNy(a)
// The big O for this is O(3 + 4n)

// Rules for Big O's

// Rule 1: Worst Case
// Rule 2: Remove Constants
// Rule 3: Different terms for inputs
// Rule 4: Drop Non dominants

// Worst case 
// When calculating  Big O always thing about the worst cas/e

// const everyone = ['dory', 'bruce', 'martin', 'nemo',
// 'gill', 'bloat', 'ngel', 'squirt', 'darla', 'hank'];

// function FindNemo(array){
//     for(let a  = 0; a < array.length; a++){
//         console.log('loading');{
//             if(array[a] === 'martin'){
//                 console.log('Martin is here')
//                 break;

//             }
//         }
//     }
// }
// FindNemo(everyone)

// Remove constant
// In big O notation when the inputs are getting large,
// the constant such as (O(2n)) may not be significant and
// so may be droped in calculations

// function AppliCation(items){
//     console.log(items[0]);

//     var midItem = Math.floor(items.length/2)
//     var index = 0;

//     while(index < midItem){
//         console.log(items[index]);
//         index++;
//     }

//     for (var e = 0; e < 100; e++){
//         console.log('greetings')
//     }
// }

// AppliCation()

// Rule 3 Different Terms for input
 
// function DifferentTerms(term1, term2){
//     term1.forEach(function(term1)
//     {console.log(term1);
//     })

//     term2.forEach(function(term2)
//     {console.log(term2);})
// }
// The big O is different for this because the terms are different
// for example the term in this is O(a + b) and not
// 2n as usual
// The big O for items in the same indentation is added
// While the items that are nested are multiplied  


// Big O(n^2) This is equally known as quadratic time
// Log all pairs of array1
// const boxes = ['g', 'b', 'q', 4, 5];

// function logAllPairsOfArray(array ){
//     for(let i = 0; i < array.length; i++){
//         for(let j = 0; j < array.length; j++){
//             for(let k = 0; k < array.length; k++){
//                 console.log(array[i], array[j], array[k])
//             }
            
//         }

//     }

// }
// logAllPairsOfArray(boxes) This is quadratic time


// Rule 4 Drop non dominant forms

// function NumAndSum(numbers){
//     console.log('These are the numbers')
//     numbers.forEach(function(numbers){
//         console.log(numbers)
//     ;});
//     console.log('these are their sum')
//     numbers.forEach(function(firstNumber){
//         numbers.forEach(function(secondNumber){
//             numbers.forEach(function(thirdNumber){
//                 console.log(firstNumber + secondNumber + thirdNumber)
//             ;})
            
//         ;})
//     ;});
// }

// NumAndSum([1, 2, 3, 4, 5, 6])

// The big O for this is O(n + n^2) but n^2 is the dorminant 
// function so we drop the non dominant function which is 'n'
// In big O the dominant term is the on that has the most potential to scale
// the for if we have something like O(x^2 + 3x + 100 + x/2) the dorminant
// term here would be O(x^2)

// In big O notation; two seperate inputs (collection) should have 
// two seperate variable

// O(n!) and example
// void nFacRuntimeFunc(int n) {
//     for(int i=0; i<n; i++) {
//       nFacRuntimeFunc(n-1);
//     }
//   }

// What is a good code 
// A good code is one that is 
// (1) Readable
// (2) Scalable - This entails spead and memory

// Three Pillars of a good code

// Readable, 
// Speed (Time comeplexity), 
// Memory comeplexity 

// function baaaaa(n){
//     for (let a = 0; a < n.length; a++){
//         console.log('booooo');
//     }
// }
// baaaaa([1, 2, 3, 4, 5]) // The space complexity is O(1)

// function arrayOfHiNTimes(n) {
//     let hiArray = [];
//     for (let i = 0; i < n; i++){
//         hiArray[i] = 'hi';
//     }
//     return hiArray;

// }
// arrayOfHiNTimes(7)

// Finding the 1st and the Nth...
// const array = ['hi', 'my', 'teddy'];
// array[0]; //0(n)
// array[array.length-1];//0(1)

// const array = [{
//     tweet: 'hi',
//     date: 2012},
// {
//     tweet: 'my',
//     date: 2014
// }
// {
//     tweet: 'teddy',
//     date: 2018
// }]

// 'helwoshejhekhiuhudsh'.length //0(1)

// Loops in javascript
const everyone = ['dory', 'bruce', 'martin',
'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla','hank'];

// looping experiment

// first method 

const FindNemo = array => {
    array.forEach(fish => {
        if(fish === 'nemo'){
            console.log('We have found nemo')
        }
    })
}
FindNemo(everyone)

const FindNemo1 = array => {
    for (let fish of array){
        if(fish === 'nemo' ){
            console.log('We netted nemo')

        }
    }
}
FindNemo1(everyone)

function Findnemo3(array){
    for( let fish = 0; fish < array.length; fish++){
        if(array[fish] === 'nemo'){
            console.log('We got nemo')
        }
        
    }
}
Findnemo3(everyone)