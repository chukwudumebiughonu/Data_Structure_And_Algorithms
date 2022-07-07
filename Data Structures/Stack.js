// lookup O(n)
// pop O(1)
// push O(1)
// peek  O(1)
// LIFO last in first out

//  Stack is a data structure in which the 
//  last item entered is the first item to
//  be removed from the data stack
// stacks has the following methods
// lookup with O(n)
// pop with O(1) this takes the first item
// push with O(1)
// peek with O(1) takes a look at the last item
// Stack is good language specific engine in which the
// last item seen is important
// Functions follow the model of last in first out
// It is used in browser history
// stack can be created with arrays and linked list
// cache locality allows array to be techniqually faster


 
// Queues is a data structure in which
// the first item entered is the first
// item removed
// Queues has the following methods
// lookup O(n)
// enqueue O(1)
// dequeue O(1) this removes the first item
// peek O(1) takes a look a the first item
// Why would you not want to build
// A queue with an array?
// The reason is that an array is very 


// efficient. 


// How javascripts works
// the following store variable in memory
// const a = 1;
// const b = 10;
// const c = 100;

// // call stack 
// console.log('1');
// console.log('2');
// console.log('3');

// const one = () => {
//     const two = () => {
//         console.log('4')
//     }


//     two();
// }

// Javascript is a single threaded language that can be
// non--blocking. By single threaded it means that 
// javascript can perform one call at a time.This make 
// javascript easy to write as there are no complexity
//
//  to worry about

// Synchronous programming means that line one gets 
// executed then line two, the line 

// Asynchronous programming means that 

// function foo() {
//     foo()
// }
// foo()

// Asynchronous programming
// console.log('1');
// setTimeout(() => {
    // console.log('2'); 
// }, 2000)
// console.log('3');
// Javascript Run-Time Environment
// memory heap and call stack --> web APIs --> 
// callback Queue (onClick, onLoad, OnDone) --> Event loop


//  class Node {
//      constructor(value){
//          this.value = value,
//          this.next = null;
//      }
//  }
 
//  class Stack {
//      constructor(){
//          this.top = null;
//          this.bottom = null;
//          this.length = 0;
//      }
//      peek(){
//          return this.top;
//      }
//      push(value){
//          const newNode = new Node(value);
//          if (this.length === 0){
//              this.top = newNode;
//              this.bottom = newNode;
//          }else {
//              const holdingPointer = this.top;
//              this.top  = newNode;
//              this.top.next = holdingPointer;
//          }
//          this.length++;
//          return this;
//      }
//      pop(){
//          if (!this.top){
//              return null;
//          }
//          if (this.top === this.bottom){
//              this.bottom = null;
//          }
//         //  const holdingPointer = this.top;
//          this.top = this.top.next;
//          this.length--;
//         //  return holdingPointer;
//         return this;
//      }
//  }  

// const mystack = new Stack(); 
// mystack.push('google');
// mystack.push('udemy');
// mystack.push('discord');
// mystack.peek();
// mystack.pop();



// class Noder{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class StackX{
//     constructor(){
//         this.top = null;
//         this.bottom = null;
//         this.length = 0;
//     }

//     peek(){
//         return this.top;
//     }

//     push(value){
//         const newWode = new Noder(value);
//         if(this.length === 0){
//             this.top = newWode;
//             this.bottom = newWode;
//         }else {
//             const holdingpointer = this.top;
//             this.top = newWode;
//             this.top.next = holdingpointer;
//         }
//         this.length++;
//         return this;
//     }

//     pop(){
//         if(!this.top){
//             return null;
//         }

//         if(this.top === this.bottom){
//             this.bottom = null;
//         }

//         this.top = this.top.next;
//         this.length--;
//         return this;
//     }
// }

// const MyStack = new StackX();
// MyStack.push('google');
// MyStack.push('OnprecisionMedicine');

// creating Stack data structure with arrays

// class Stack{
//     constructor(){
//         this.array  = [];
//     }
//     peek(){
//         this.array[this.array.length-1];
//         return this;
//     }
//     push(value){
//         this.array.push(value);
//         return this;
//     }

//     pop(){
//         this.array.pop();
//         return this;
//     }
// }
//  const MyStack = new Stack();
//  MyStack.push('google');
//  MyStack.push('StermLine');
//  MyStack.push('Oncology');
//  MyStack.pop();
//  MyStack.peek();

// Creating A Stack with linkedlist
// class Noder{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }
// class Stack{
//     constructor(){
//         this.top = null;
//         this.bottom = null;
//         this.length = 0;
//     }

//     peek(){
//         return this.top;
//     }

//     push(value){
//         const nodeNew = new Noder(value);
//         if(this.length === 0){
//             this.top = nodeNew;
//             this.bottom = nodeNew;
//         }else {
//             const holdingpointer = this.top;
//             this.top = nodeNew;
//             this.top.next = holdingpointer;
//         }
//         this.length++;
//         return this;
//     }


// }

//     pop(){
//         if(!this.top){
//             return null;
//         }

//         if(this.top === this.bottom){
//             this.bottom = null;
//         }

//         this.top = this.top.next;
//         this.length--;
//         return this;
//     }
// 

// const MyStack = new Stack();
// MyStack.peek();
// MyStack.push('Synalitica');
// MyStack.push('On precision medicine');
// MyStack.push('New precision medicine');
// MyStack.pop();

// Creating Stack with arrays

// class Stack{
//     constructor(){
//         this.array = [];
//     }
    
//     peek(){
//         this.array[this.array.length-1];
//         return this;
//     }

//     push(value){
//         this.array.push(value);
//         return this;
//     }

//     pop(){
//         this.array.pop();
//         return this;
//     }
// }

// const MyStack = new Stack();
// MyStack.push('google');
// MyStack.push('game');
// MyStack.push('Grain');
// MyStack.peek();

class StackX{
    constructor(){
        this.array = [];
    }

    peek(){
        return this.array[this.array.length-1];
    }

    push(value){
        this.array.push(value);
        return this;
    }

    pop(){
        this.array.pop();
        return this;
    }
}

const MyStack = new StackX();
MyStack.push('New metal');
MyStack.push('Orange grey');
MyStack.push('Precision medicine');
MyStack.push('Start up company');
MyStack.peek();