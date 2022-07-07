// A linked list
// A linked list has the head node the tail node and it 
// is null terminated

// A linked list is an element that links to another 
// element untill it points to null

// A linked list can be sorted unsorted or contain any sort
// of data type
// A sample of what a linked list looks like 
// const basket = ['apples', 'grapes', 'pears'];
// below is the linked list
// linked list: apples --> grapes --> pears

// apples
// 8947 -->grapes
//         8742 --> pears
//                    372 --> null

// Javascript does not common with linked list 

// Why is linked list used 
// It has a loose structure that allows you to 
// Insert item in the list

// The main difference between an array and a linked list
// is that in an array elements are indexed

// Array items are located next to each other in memory
// while linked list node are scatter in memory
// traversal is performed in linked list so iterating
// through a linked list is slightly slower than that of 
// and array, however linked list gives us more
// flexiblity of inserting element in the middle of the list

// linked list has a big O(n)
// Link list has more order than a hash table

// Methods in the linked list 
// prepend has a big O notation O(1)
// append has a big O notation O(1)
// lookup has a big O notation O(n)
// insert has a big O notation O(n)
// delete has a big O notation O(n)

// POINTERS
// It is a reference to another place in memory
// Example of creating a pointer
// const obj1 = {a: true};
// const obj2 = obj1;
// obj1.a = 'booya';

// console.log('1', obj1);
// console.log('2', obj2);
// let obj3  = {c: true};
// let obj4  = obj3;
// obj3.c = 'blonde wife';
// delete obj3
// console.log('3', obj3)
// console.log('4', obj4)

// Creating a linked list data structure

// 10 --> 5 --> 16
// let myLinkedList = {
//     head:{
//         value: 10,
//         next:{
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

// The parts of a linked list includeds
// The head;
// the node; it is a bucket for data and can contain
// any item
// the tail; and the null

// class LinkedList {
//     constructor(value){
//         this.head = {
//             value: value,
//             next:  null,
//         }
//         this.tail = this.head;
//         this.length = 1;
//     }
// }

// const myLinkedList = new LinkedList(10)
// console.log(myLinkedList)

// Creatin my linked list
// class LinkedList {
//     constructor(value){
//         this.head = {
//             value: value,
//             next: null
//         };
//         this.tail = this.head;
//         this.length = 1;
//         // this.length++;
//         // return this;
//     }
//     // Creating a method to add an item at the beginning
//     // of the list

//     append(value){
//         const newNode = {
//             value: value,
//             next: null
//         };
//         this.tail.next = newNode;
//         this.tail = newNode;
//         this.length++;
//         return this;
//     }

//     prepend(value){
//         const newNode = {
//             value: value,
//             next: null
//         }
//         newNode.next = this.head;
//         this.head = newNode;
//         this.length++;
//         return this; 
//     }
// }

// const myLinkedList = new LinkedList(10);
// myLinkedList.append(12);
// myLinkedList.append(15);
// myLinkedList.prepend(17);
// myLinkedList.prepend(9);
// console.log(myLinkedList);

// class LinkedList {
//     constructor(value) {
//       this.head = {
//         value: value,
//         next: null
//       };
//       this.tail = this.head;
//       this.length = 1;
//     }
//     append(value) {
//       const newNode = {
//         value: value,
//         next: null
//       }
//     //   console.log(newNode)
//       this.tail.next = newNode;
//       this.tail = newNode;
//       this.length++;
//       return this;
//     }
//     prepend(value) {
//       const newNode = {
//         value: value,
//         next: null
//       }
//       newNode.next = this.head;
//       this.head = newNode;
//       this.length++;
//       return this;
//     }
//   }
  
//   let myLinkedList = new LinkedList(10);
//   myLinkedList.prepend(5);
//   myLinkedList.append(16);myLinkedList.prepend(1)
//   console.log(myLinkedList)


// Creating a newNode class that would interact with other
// class

// class Node {
//     constructor(value){
//         this.value = value,
//         this.next = null
//     };
// }

// class LinkedList {
//     constructor(value){
//         this.head = {
//             value: value,
//             next: null
//         };
//         this.tail = this.head;
//         this.length = 1;
//     }

//     append(value){
//         const newNode = new Node(value);

//         this.tail.next = newNode
//         this.tail = newNode
//         this.length++;
//         return this;
//     };

//     prepend(value){
//         const newNode = new Node(value);

//         newNode.next = this.head;
//         this.head = newNode;
//         this.length++;
//         return this;
//     };
// }

// const myLinkedList = new LinkedList(10);
// myLinkedList.append(17);
// myLinkedList.append(21);
// myLinkedList.prepend(21);
// myLinkedList.prepend(13);
// console.log(myLinkedList);

// When there is no looping in a data structure it likely
// has and O(1)
// While most looped concept in data structure has 
// a big O notation O(n) and above
 
// Creating an Insert method

// using the printlist to check the list of items we appended
// prepended and inserted

// creating the node class

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor(value){
//         this.head = {
//             value: value,
//             next: null
//         }

//         this.tail = this.head;
//         this.length = 1;
//     }

//     // creating the append method
//     append(value){
//         const newNode = new Node(value);
        
//         this.tail.next = newNode;
//         this.tail = newNode;
//         this.length++;
//         return this;
//     }

//     prepend(value){
//         const newNode = new Node(value);

//         newNode.next = this.head;
//         this.head = newNode;
//         this.length++;
//         return this;
//     }

//    printList(value){
//        const array = [];
//        let currentNode = this.head;
//        while(currentNode !== null){
//            array.push(currentNode.value);
//            currentNode = currentNode.next;
//        }
//      return array;
//    }
// }

// const myLinkedList = new LinkedList(10)
// myLinkedList.prepend(28);
// myLinkedList.prepend(17);
// myLinkedList.append(21);
// myLinkedList.append(17);
// myLinkedList.prepend(29);
// console.log(myLinkedList);
// myLinkedList.printList();

// creating the insert

// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor(value){
//         this.head = {
//             value: value,
//             next: null 
//         };
//         this.tail = this.head;
//         this.length = 1;
//         // return this;
//     }

//     append(value){
//         const newNode = new Node(value);

//         this.tail.next = newNode;
//         this.tail = newNode;
//         this.length++;
//         return this;
//     }

//     prepend(value){
//         const newNode = new Node(value);
        
//         newNode.next = this.head;
//         this.head = newNode;
//         this.length++;
//         return this;
//     }

//     printList(){
//         const array =  [];
//         let currentNode = this.head;
//         while(currentNode !== null ){
//             array.push(currentNode.value);
//             currentNode = currentNode.next;
//         }
//         return array ;
//     }

//     // Creating the insert
//    inserto(index, value){
//        if(index >= this.length){
//            return this.prepend(value)
//        }
//    }
// }

// const myLinkedList = new LinkedList(10);
// myLinkedList.prepend(14);
// myLinkedList.prepend(56);
// myLinkedList.append(30);
// myLinkedList.append(23);
// myLinkedList.inserto(200, 43);
// myLinkedList.inserto(1, 114);
// myLinkedList.printList();
// // console.log(myLinkedList);



// class Code{
//     constructor(value){
//         this.value = value,
//         this.next = null
//     }
// }

// class Linked1{
//     constructor(value){
//         this.head = {
//             value: value,
//             next: null
//         };
//         this.tail = this.head;
//         this.length = 1;
//     }
        
//     backpack(value){
//         const newCode = new Code(value);

//         this.tail.next = newCode;
//         this.tail = newCode;
//         this.length++;
//         return this;
//     }
    
//     forwardpack(value){
//         const newCode = new Code(value);
        
//         newCode.next = this.head;
//         this.head = newCode;
//         this.length++;
//         return this;
//     }
 
//     printList(){
//         const array = [];
//         let currentNode = this.head;
//         while(currentNode !== null){
//              array.push(currentNode.value);
//             currentNode = currentNode.next;
//         }
//         return array;
//     }
  
//     // Creating the insert method
//     apply(index, value){
//         if(index >= this.length){
//             return this.backpack(value);
//         }
//     }
// }

// const myapplication = new Linked1(1123);
// myapplication.backpack(27)
// myapplication.forwardpack(100)
// myapplication.apply(3, 333);
// myapplication.printList();
// console.log(myapplication);


// class Cold {
//     constructor(value){
//         this.value = value,
//         this.next = null
//     }
// }

// class Line1{
//     constructor(value){
//         this.head = {
//             value: value,
//             next: null
//         }
//         this.tail = this.head;
//         this.length = 1;
//     }

//     behind(value){
//         const nodeNew = new Cold(value);
//         this.tail.next = nodeNew;
//         this.tail = nodeNew;
//         this.length++;
//         return this;
//     }

//     infront(value){
//         const nodeNew = new Cold(value);
//         nodeNew.next = this.head;
//         this.head = nodeNew;
//         this.length++;
//         return this;
//     }

//     linty(){
//         const array = [];
//         let nodenine = this.head;
//         while(nodenine !== null){
//             array.push(nodenine.value);
//             nodenine = nodenine.next;
//         }
//         return array;
//     }

//     // creating the insert
//     putty(index, value){
//         if(index >= this.length){
//             return this.infront(value);
//         }
        
//         const nodenine = {
//             value: value,
//             next: null
//         }

//         const lead = this.traverseToIndex(index-1);
//         const holdings = lead.next;
//         lead.next = nodenine;
//         nodenine.next = holdings;
//         this.length++;
//         return this.linty();
//     }

//     traverseToIndex(index){
//         let counter = 0;
//         let nodeone = this.head;
//         while(counter !== null){
//             nodeone = nodeone.next;
//             counter++;
//         }
//         return nodeone;
//     }

// }

// const newlength = new Line1(24);
// newlength.behind('two');
// newlength.behind('four');
// newlength.infront(37);
// newlength.infront(19);
// newlength.infront('three');
// newlength.putty(2, 'seven');
// newlength.linty();



// class Cold {
//     constructor(value){
//         this.value = value,
//         this.next = null
//     }
// }

// class Line1{
//     constructor(value){
//         this.head = {
//             value: value,
//             next: null
//         }
//         this.tail = this.head;
//         this.length = 1;
//     }

//     behind(value){
//         const nodeNew = new Cold(value);
//         this.tail.next = nodeNew;
//         this.tail = nodeNew;
//         this.length++;
//         return this;
//     }

//     infront(value){
//         const nodeNew = new Cold(value);
//         nodeNew.next = this.head;
//         this.head = nodeNew;
//         this.length++;
//         return this;
//     }

//     linty(){
//         const array = [];
//         let nodenine = this.head;
//         while(nodenine !== null){
//             array.push(nodenine.value);
//             nodenine = nodenine.next;
//         }
//         return array;
//     }

//     // creating the insert
//     putty(index, value){
//         if(index >= this.length){
//             return this.infront(value);
//         }
        
//         const nodenine = {
//             value: value,
//             next: null
//         }

//         const lead = this.traverseToIndex(index-1);
//         const holdings = lead.next;
//         lead.next = nodenine;
//         nodenine.next = holdings;
//         this.length++;
//         return this.linty();
//     }

//     traverseToIndex(index){
//         let counter = 0;
//         let nodeone = this.head;
//         while(counter !== index){
//            nodeone = nodeone.next;
//            counter++;
//         }
//         return nodeone;
//     }

// }

// const newlength = new Line1(24);
// newlength.behind('two');
// newlength.behind('four');
// newlength.infront(37);
// newlength.infront(19);
// newlength.infront('three');
// newlength.putty(2, 4);


// class Desk {
//     constructor(value){
//         this.value = value,
//         this.next = null
//     }
// }

// class DeskLink {
//     constructor(value){
//         this.head = {
//             value: value,
//             next: null
//         }
//         this.tail = this.head;
//         this.length = 1;
//     }

//     behind(value){
//         const deskNode = new Desk(value);

//         this.tail.next = deskNode;
//         this.tail = deskNode;
//         this.length++;
//         return this;
//     }

//     infront(value){
//         const deskNode = new Desk(value);

//         deskNode.next = this.head;
//         this.head = deskNode;
//         this.length++;
//         return this;
//     }

//     linty(){
//         const array = [];
//         let currentDesk = this.head;
//         while(currentDesk !== null){
//             array.push(currentDesk.value);
//             currentDesk = currentDesk.next;
//         }
//         return array;
//     }

//     putty(index, value){
//         if(index >= this.length){
//             return this.behind(value);
//         }

//         const nodeDesk = {
//             value: value,
//             next: null
//         }

//         const lead = this.traverseToIndex(index-1);
//         const holdings = lead.next;
//         lead.next = nodeDesk;
//         nodeDesk.next = holdings;
//         this.length++;
//         return this.putty;
//     }

//     traverseToIndex(index){
//         let counter = 0;
//         let deskDeno = this.head;
//         while(counter !== index){
//             deskDeno = deskDeno.next;
//             counter++;
//         }

//         return deskDeno;
//     }


//     delete(index, value){
//         if(index >= this.length){
//             return this.behind(value);
//         }

//         consdelNode {
//             value: value,
//             next: null
//         }
//     }
// }

// const myDeskLink = new DeskLink(15);
// myDeskLink.infront(91);
// myDeskLink.behind(87);
// myDeskLink.infront(14);
// myDeskLink.behind(65);
// myDeskLink.putty(2, 'index');
// myDeskLink.linty();


// Creating a linkedlist and using the insert method;

// class deskTop {
//     constructor(value){
//         this.value = value,
//         this.next = null
        
//     }
// }

// class TopDesk{
//     constructor(value){
//         this.head = {
//             value: value,
//             next: null
//         }
//         this.tail = this.head;
//         this.length = 1;
//     }

//     append(value){
//         const desk = new deskTop(value);

//         this.tail.next = desk;
//         this.tail = desk;
//         this.lenght++;
//         return this;
//     }

//     prepend(value){
//         const desk = new deskTop(value);

//         desk.next = this.head;
//         this.head = desk;
//         this.length++;
//         return this;
//     }

//     linty(){
//         const array = [];
//         let currentDesk = this.head;
//         while(currentDesk !== null){
//             array.push(currentDesk.value);
//             currentDesk = currentDesk.next;
//         }
//         return array;
//     }

//     putt(index, value){
//         if (index >= this.length){
//             return this.prepend(value);
//         }

//         const desk1 = {
//             value: value,
//             next: null
//         }

//         const lead = this.traverseToIndex(index-1);
//         const holding = lead.next;
//         lead.next = desk1;
//         desk1.next = holding;
//         this.length++;
//         return this;
//     }

//     traverseToIndex(index){
//         let counter = 0;
//         let desk2 = this.head;
//         while(counter !== index){
//             desk2 = desk2.next;
//             counter++;
//         }
//         return desk2;
//     }
  
//     // delete(index){
//     //     const lead = this.traverseToIndex(index-1);
//     //     const unwantedNode = lead.next;
//     //     lead.next = unwantedNode.next;
//     //     this.length--;
//     //     return this.linty();
//     // }
//     delete(index){
//         if(index === 0){
//             this.head = this.head.next;
//             this.length--;
//             return this;
//         }
//     }
// }

// const newD2 = new TopDesk(19);
// newD2.prepend(24);
// newD2.append(17);
// newD2.putt(1, 23);
// newD2.putt(3, 81);
// newD2.putt(4, 67);
// newD2.delete();
// newD2.linty();
// newD2.putt


// -------------------------------------------------------
// Singly linked list
// class Comput {
//     constructor(value){
//         this.value = value,
//         this.next = null
//     }
// }

// class Computer{
//     constructor(value){
//         this.head = {
//             value: value,
//             next: null
//         }

//         this.tail = this.head;
//         this.length = 1;
//     }

//     append(value){
//         const newCom = new Comput(value);
//         this.tail.next = newCom;
//         this.tail = newCom;
//         this.length++;
//         return this;
//     }

//     prepend(value){
//         const newCom = new Comput(value);
//         newCom.next = this.head;
//         this.head = newCom;
//         this.length++;
//         return this;
//     }

//     printList(){
//         const array = [];
//         let newMan = this.head;
//         while(newMan !== null){
//             array.push(newMan.value);
//             newMan = newMan.next;
//         }
//         return array;
//     }

//     insert(index, value){
//         if(index >= this.length){
//             return this.prepend(value);
//         }

//         const nnew = new Comput(value);
//         const headman = this.walkthrough(index-1);
//         const holdman = headman.next;
//         headman.next = nnew;
//         nnew.next = holdman;
//         this.length++;
//         return this.printList();
//     }

//     walkthrough(index){
//         let Number = 0;
//         let breather = this.head;
//         while(Number !== index){
//             breather = breather.next;
//             Number++;
//         }
//         return breather;
//     }

//     delete(index){
//         const removeman = this.walkthrough(index-1);
//         const removehold = removeman.next;
//         removeman.next = removehold.next;
//         this.length--;
//         return this.printList();
//     }
// }

// const Stone = new Computer(10);
// Stone.append(12);
// Stone.append(14);
// Stone.insert(1, 'the greatest');
// Stone.delete(2);
// Stone.printList();

// class Now {
//     constructor(value){
//         this.value = value,
//         this.next = null
//     }
// }

// class Future{
//     constructor(value){
//         this.head = {
//             value: value,
//             next: null
//         }
//         this.tail = this.head;
//         this.length = 1;
//     }

//     append(value){
//         const newCode = new Now(value);
//         this.tail.next = newCode;
//         this.tail = newCode;
//         this.length++;
//         return this;
//     }

//     prepend(value){
//         const newCode = new Now(value);
//         newCode.next = this.head;
//         this.head = newCode;
//         this.length++;
//         return this;
//     }

//     printList(){
//         const act = [];
//         let actnow = this.head;
//         while(actnow !== null){
//             act.push(actnow.value);
//             actnow = actnow.next;
//         }
//         return act;

//     }

//     insert(index, value){
//         if(index >= this.length){
//             return this.append(value)
//         }

//         const newload = new Now(value);
//         const ace = this.passby(index-1);
//         const acehold = ace.next;
//         ace.next = newload;
//         newload.next = acehold;
//         this.length++;
//         return this.printList();
//     }

//     passby(index){
//         let pass  = 0;
//         let now1 = this.head;
//         while(pass !== index){
//             now1 = now1.next;
//             pass++;

//         }
//         return now1;
//     }

//    demove(index){
//        const lellow = this.passby(index-1);
//        const onco = lellow.next;
//        lellow.next = onco.next;
//        this.lenght--;
//        return this.printList();
//    }
// }

// const futurenow = new Future(11);
// futurenow.append(28);
// futurenow.append(21);
// futurenow.prepend(2);
// futurenow.prepend(5);
// // futurenow.insert(2, 33);
// // futurenow.insert(4,'seven');
// // futurenow.demove(3);
// futurenow.printList();

// // ---------------------------------------------------


// // Double linked list
// class Node1{
//     constructor(value){
//         this.value = value,
//         this.next = null,
//         this.prev = null 
//     }
// }  

// class DLinkedList{
//     constructor(value){
//         this.head = {
//             value: value,
//             next: null,
//             prev: null
//         }
//         this.tail = this.head;
//         this.length = 1;
//     }

//     append(value){
//         const Node2 = new Node1(value);
//         Node2.prev = this.tail;
//         this.tail.next = Node2;
//         this.tail = Node2;
//         this.length++;
//         return this;
//     }

//     prepend(value){
//         const Node3 = new Node1(value);
//         Node3.next = this.head;
//         this.head.prev = Node3;
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
//         Node4.prev = leadNode;
//         Node4.next = NodeHold;
//         NodeHolde.prev = Node4
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
//         console.log(this)
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

//    Remove(index){
//        const NoNode = this.passby(index-1);
//        const Nohold = NoNode.next;
//        NoNode.next = Nohold.next;
//        this.length--;
//        return this.printLinks();
//    }
   
// }


// const NewLink = new DLinkedList(12);
// NewLink.append(13);
// NewLink.append(23);
// NewLink.append(34);
// NewLink.prepend(28);
// // NewLink.insert1(2,33);
// // NewLink.prepend(29);
// // NewLink.insert2(3,44);
// // NewLink.Remove(4);
// NewLink.printLinks();
// // -------------------------------------------------
// // Reversing a linked list
// class Node1{
//     constructor(value){
//         this.value = value,
//         this.next = null,
//         this.prev = null 
//     }
// }  

// class DLinkedList{
//     constructor(value){
//         this.head = {
//             value: value,
//             next: null,
//             prev: null
//         }
//         this.tail = this.head;
//         this.length = 1;
//     }

//     append(value){
//         const Node2 = new Node1(value);
//         Node2.prev = this.tail;
//         this.tail.next = Node2;
//         this.tail = Node2;
//         this.length++;
//         return this;
//     }

//     prepend(value){
//         const Node3 = new Node1(value);
//         Node3.next = this.head;
//         this.head.prev = Node3;
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
//         Node4.prev = leadNode;
//         Node4.next = NodeHold;
//         NodeHolde.prev = Node4
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

    // insert2(index, value){
    //     if(index >= this.lenght){
    //         return this.prepend(value)
    //     }

    //     const Node5 = new Node1(value);
    //     const LeadNode2 = this.passby1(index -1);
    //     const Nodehold1 = LeadNode2.next;
    //     LeadNode2.next = Node5;
    //     Node5.next = Nodehold1;
    //     this.length++;
    //     console.log(this)
    //     return this.printLinks();
    // }
    // passby1(index){
    //     let counter2 = 0;
    //     let currentNode2 = this.head;
    //     if(counter2 !== index){
    //         currentNode2 = currentNode2.next;
    //         counter2++;
    //     }
    //     return currentNode2
    // }

   Remove(index){
       const NoNode = this.passby(index-1);
       const Nohold = NoNode.next;
       NoNode.next = Nohold.next;
       this.length--;
       return this.printLinks();
   }

   reverse(){
    //     Code here
       if(!this.head.next){
           return this.head;
       }

       let first = this.head;
       this.taill = this.head;
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


const NewLink = new DLinkedList(12);
NewLink.append(13);
NewLink.append(23);
NewLink.append(34);
NewLink.prepend(28);
// NewLink.insert1(2,33);
// NewLink.prepend(29);
// NewLink.insert2(3,44);
// NewLink.Remove(4);
NewLink.printLinks();
