// class Node{
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
//     peek(){
//         return this.first; 
//     }
//     enqueue(value){
//         const newNode = new Node(value);
//         if(this.length === 0){
//             this.first = newNode;
//             this.last = newNode;
//         }else{
//             this.last.next = newNode;
//             this.last = newNode;
//         }
//         this.length++;
//         return this;
//     }

//     dequeue(){
//         if(!this.first){
//             return null;
//         }

//         if(this.first === this.last){
//             this.last = null;
//         }
//         this.first = this.first.next
//         this.length--;
//         return this;
//     }
// }

// const MyQueue = new Queue();
// MyQueue.peek(); 
// MyQueue.enqueue('doodle');
// MyQueue.enqueue('google')
// MyQueue.enqueue('On precision medicine')
// MyQueue.dequeue()

// class Noram{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class Queeu{
//     constructor(){
//         this.first = null;
//         this.last = null;
//         this.length = 0;
//     }

//     pex(){
//         return this.last;
//     }

//     enqueue(value){
//         const nobo = new Noram(value);
//         if(this.length === 0){
//             this.first = nobo;
//             this.last = nobo;
//         }else{
//             this.last.next = nobo;
//             this.last = nobo;    
//         }
//         this.length++;
//         return this;
//     }

//     dequeue(){
//         if(!this.first){
//             return null;
//         }

//         if(this.first === this.last){
//             this.last = null;
//         }

//         this.first = this.first.next;
//         this.length--;
//         return this;
//     }
    
// }

// const MyQeery = new Queeu();
// MyQeery.enqueue('Precision medicine');
// MyQeery.enqueue('Andrea');
// MyQeery.enqueue('Startup');
// MyQeery.enqueue('Google');
// MyQeery.dequeue();
// MyQeery.pex();

// implementing queues using stacks


class Quee{
    constructor(){
        this.first = [];
        this.last = [];
    }

    enqueue(value){
        const length = this.first.length;
        for(let i = 0; i < length; i++){
            this.last.push(this.first.pop());
        }
        this.last.push(value);
        return this;
    }

    dequeue(){
        const length = this.last.length;
        for(let i = 0; i < length; i++){
            this.first.push(this.last.pop());
        }
        this.first.pop();
        return this;
    }

    peek(){
        if(this.last.length > 0){
            return this.length[0];
        }
        return this.first[this.first.length -1]
    }
}

const MyQueue = new Quee();
MyQueue.enqueue('Oncotronics');
MyQueue.enqueue('Precision medicine');
MyQueue.enqueue('Startup company');
MyQueue.enqueue('AI in cancer medicine');
MyQueue.dequeue();
MyQueue.peek();