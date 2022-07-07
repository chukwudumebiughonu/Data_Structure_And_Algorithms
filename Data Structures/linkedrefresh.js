// class Node1{
//     constructor(value){
//         this.value = value,
//         this.next = null
//     }
// }

// class LinkedList{
//     constructor(value){
//         this.head = {
//             value: value,
//             next: null
//         }
//         this.tail = this.head;
//         this.length = 1;
//     }

//     append(value){
//         const Node2 = new Node1(value);
//         this.tail.next = Node2;
//         this.tail = Node2;
//         this.length++;
//         return this;
//     }

//     prepend(value){
//         const Node3 = new Node1(value);
//         Node3.next = this.head;
//         this.head = Node3;
//         this.length++;
//         return this;
//     }

//     printLinks(){
//         const array = [];
//         let currentNode = this.head;
//         while(currentNode !== null){
//             array.push(currentNode.value);
//             currentNode = currentNode.next;
//         }
//         return array;
//     }

//     insert1(index, value){
//         if(index >= this.length){
//             return this.append(value);
//         }

//         const Node4 = new Node1(value);
//         const leadNode = this.passby(index-1);
//         const NodeHold = leadNode.next;
//         leadNode.next = Node4;
//         Node4.next = NodeHold;
//         this.length++;
//         return this.printLinks();
//     }

//     passby(index){
//         let counter = 0;
//         let currentNode = this.head;
//         if(counter !== index){
//             currentNode = currentNode.next;
//             counter++;
//         }
//         return currentNode;
//     }

//     insert2(index, value){
//         if(index >= this.lenght){
//             return this.prepend(value)
//         }

//         const Node5 = new Node1(value);
//         const LeadNode2 = this.passby1(index -1);
//         const Nodehold1 = LeadNode2.next;
//         LeadNode2.next = Node5;
//         Node5.next = Nodehold1;
//         this.length++;
//         return this.printLinks();
//     }
//     passby1(index){
//         let counter2 = 0;
//         let currentNode2 = this.head;
//         if(counter2 !== index){
//             currentNode2 = currentNode2.next;
//             counter2++;
//         }
//         return currentNode2
//     }

//     Remove(index){
//         const NoNode = this.passby(index-1);
//         const Nohold = NoNode.next;
//         NoNode.next = Nohold.next;
//         this.length--;
//         return this.printLinks();
//     }
// }


// const NewLink = new LinkedList(12);
// NewLink.append(13);
// NewLink.append(23);
// NewLink.append(34);
// NewLink.prepend(28);
// NewLink.insert1(2,33);
// NewLink.prepend(29);
// NewLink.insert2(3,44);
// NewLink.Remove(4);
// NewLink.printLinks();



// ----------------Double linked list----------------

// Reverse LinkedList

class Node1{
    constructor(value){
        this.value = value,
        this.next = null,
        this.prev = null
    }
}

class DoubleLink{
    constructor(value){
        this.head = {
            value: value,
            next: null,
            prev: null
        }

        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const Node2 = new Node1(value);
        Node2.prev = this.tail;
        this.tail.next = Node2;
        this.tail = Node2;
        this.length++;
        return this;
    }

    prepend(value){
        const Node3 = new Node1(value);
        Node3.next = this.head;
        this.head.prev = Node3;
        this.head = Node3;
        this.length++;
        return this;
    }

    printLinks(){
        const array = [];
        let currentNode1 = this.head;
        while(currentNode1 !== null){
            array.push(currentNode1.value);
            currentNode1 = currentNode1.next;
        }
        return array;
    }

    insert(index, value){
        if(index >= this.length){
            return this.append(value);
        }

        const Node4 = new Node1(value);
        const maiN = this.travell(index-1);
        const Last = maiN.next;
        maiN.next = Node4;
        Node4.prev = maiN;
        Node4.next = Last;
        Last.prev = Node4;
        this.length++;
        return this.printLinks();
    }

    travell(index){
        let counter1 = 0;
        let currentNode2 = this.head;
        while(counter1 !== index){
            currentNode2 = currentNode2.next;
            counter1++;
        }
        return currentNode2;
    }

    insert2(index, value){
        if(index >= this.length){
            return this.prepend(value);
        }

        const Node6 = new Node1(value);
        const Mainly = this.travell2(index -1);
        const Lastly = Mainly.next;
        Mainly.next = Node6;
        Node6.prev = Mainly;
        Node6.next = Lastly;
        Lastly.prev = Node6;
        this.length++;
        return this.printLinks();
    }
    
    travell2(index){
        let counter2 = 0;
        let currentNode4 = this.head;
        while(counter2 !== index){
            currentNode4 = currentNode4.next;
            counter2++;
        }
        return currentNode4;
    }

    Remove(index){
        const NoNode = this.travell(index-1);
        const Nohood = NoNode.next;
        NoNode.next  = Nohood.next;
        this.length--;
        return this.printLinks();
    }

 Reverse(){
     if(!this.head.next){
         return this.head;
     }

     let first = this.head;
     this.tail = this.head;
     let second = first.next;
     while(second){
         const temp = second.next;
         second.next = first;
         first = second;
         second = temp;
     }
     this.head.next = null;
     this.head = first;
     return this.printLinks();
 }
}

const DeNewLink = new DoubleLink(14);
DeNewLink.append(23);
DeNewLink.append(45);
DeNewLink.append(12);
DeNewLink.insert(3,56);
DeNewLink.insert2(4,100)
DeNewLink.prepend(11);
DeNewLink.prepend(87);
DeNewLink.Remove(3);
DeNewLink.Reverse();
DeNewLink.printLinks();


// -----------------------------------------------------
// Summary of Linked list
// Fast Insertion
// Fast Deletion
// Ordered
// Flexible Size
// Slow lookup
// Needs more memory