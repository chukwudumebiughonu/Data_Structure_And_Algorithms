// class Noder{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class Queue{
//     constructor(){
//         this.first = null;
//         this.last = null;
//         this.length = 0;
//     }

    // peek(){
    //     return this.first;
//     }

//     enqueue(value){
//         const nodel = new Noder(value);
//         if(this.length === 0){
//             this.first = nodel;
//             this.last = nodel;
//         } else {
//             this.last.next = nodel;
//             this.last = nodel;
//         }
//         this.length++;
//         return this;
//     }

//    dequeue(){
//        if(!this.first){
//            return null;
//        }

//        if(this.first === this.last){
//            this.last = null;
//        }
//        this.first = this.first.next;
//        this.length--;
//        return this;
//    }
// }

// const MyQueue = new Queue();
// MyQueue.enqueue('Google');
// MyQueue.enqueue('Synlitica');
// MyQueue.enqueue('Genechrome');
// MyQueue.enqueue('Chromo I');
// MyQueue.dequeue();
// MyQueue.peek();


class Nodo{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    construtor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    pex(){
        return this.first;
    }

    enqueue(value){
        const nool = new Nodo(value);
        if(this.length === 0){
            this.first = nool; 
            this.last = nool;
        }else {
            this.last.next = nool;
            this.last = nool;
        }
        this.length++;
        return this;
    }
}

const MyQueue = new Queue();
MyQueue.enqueue('google')
MyQueue.enqueue('domination')
MyQueue.enqueue('Valuable')
// MyQueue.dequeue()
MyQueue.pex()