//  Binary tree
// A binary tree  can either have one or zero.
// Also each node in a binary tree  can only have two children

// function BinaryTreeNode(value){
//     this.value = value;
//     this.left = null;
//     this.right = null; 
// } 

// Types of binary trees
// Perfect Binary tree
// Full Binary Tree 

// Properties of a perfect binary tree
// The sum of the last base node is equal to the sum
// of all nodes above it. 
// As one goes down the binary tree the number of nodes 
// doubles
// The sum of node at the bottom of the binary tree is 
// equall to half of the whole nodes in the binary tree

// The big O notation and methods for the binary tree 

// lookup O(log N)
// insert O(log N)
// delete O(log N)

// Level 0: 2^0 = 1;
// Level 1: 2^1 = 2;
// Level 2: 2^2 = 4;
// Level 3: 2^3 = 8;

// how to find the number of nodes in a binary tree

// Number of nodes = 2^(height of node) - 1;
// this means that the; log nodes = height

// The binary search tree is the most common binary tree 
// The Binary Search Tree  BST 
// They are good at searching 
// They preserve rations 
// The value of the node to the right increases as the
// number of nodes increases
// While the value of the node to the left decreases as
// the number of nodes increases
// In a binary search tree a node can only have two children
// It is efficient for searching 
// ✍✘
// A Binary Search Tree (BST) is a binary tree in which 
// each vertex has only up to 2 children that satisfies
//  BST property: All vertices in the left subtree of a
//   vertex must hold a value smaller than its own and 
//   all vertices in the right subtree of a vertex must
//    hold a value larger than its own (we have assumption
//      that all values are distinct integers in this
//       visualization and small tweak is needed to cater 
//       for duplicates/non integer)

// Balanced vs Unbalanced binary search tree  

// What is the difference between a balanced 
// and an unbalanced binary search tree

// Pros and cons of a binary search tree 
// Pros
// It has very good performance across  board
// Better than O(n)
// It is ordered 
// It has flexible size because the node can be placed
// any where in memory 

// Cons 
// No O(1) operations
// They are not the fastest for any thing

// ----------------------------------------------------
// Creating the insert method of a binary search tree
// ----------------------------------------------------

// class Node{
//     constructor(value){
//         this.left = null;
//         this.right = null;
//         this.value = value;
//     }
// }

// class BinarySearchTree{
//       constructor(value)
//         {
//           this.root = null;
//         }
        
    

//     insert(value){
//         const newNode = new Node(value);
//         if(this.root === null){
//             this.root = newNode;
//         }else{
//             let currentNode = this.root;
//             while(true){
//                 if(value < currentNode.value){
//                     if(!currentNode.left){
//                         currentNode.left = newNode;
//                         return this;
//                     }
//                     currentNode = currentNode.left;
//                 }else{
//                     if(!currentNode.right){
//                         currentNode.right = newNode;
//                         return this;
//                     }
//                     currentNode = currentNode.right;
//                 }
//             }
//         }
//     }
// }

// const tree = new BinarySearchTree(value);
// tree.insert(13);
// tree.insert(17);
// tree.insert(29);
// tree.insert(18);
// tree.insert(78);

// JSON.stringify(traverse(tree.root))

// function traverse(node){
//     const tree = {value: node.value};
//     tree.left = node.left === null ? null:
//     traverse(node.left);
//     tree.right = node.right === null ? null:
//     traverse(node.right);
//     return tree;
// }


// ----------------------------------------------------------------------------
// Implementing the lookup function
// ------------------------------------------------------

// class Node{
//     constructor(value){
//         this.left = null;
//         this.right = null;
//         this.value = value;
//     }
// }

// class BinarySearchTree{
//     constructor(){
//         this.root = null;
//     }

//     insert(value){
//         const newNode = new Node(value);
//         if(this.root === null){
//             this.root = newNode;
//         }else{
//             let currentNode = this.root;
//             while(true){
//                 if(value < currentNode.value){
//                     if(!currentNode.left){
//                         currentNode.left = newNode;
//                         return this;
//                     }
//                     currentNode = currentNode.left
//                 }else{
//                     if(!currentNode.right){
//                        currentNode.right = newNode;
//                        return this; 
//                     }currentNode = currentNode.right;
//                 }
//             }
//         }
//     }
//     lookup(value){
//         if(!this.root){
//             return false;
//         }else{
//             let currentNode = this.root;
//             while(currentNode){
//                 if(value < currentNode.value){
//                     currentNode = currentNode.left;
//                 }else {
//                     if(value > currentNode.value){
//                         currentNode = currentNode.right;
//                     }else {
//                         if(currentNode.value === value){
//                             return currentNode;
//                         }
//                     }
//                 }
//             }
//         }
//         return false;
//     }

// }
// const tree = new BinarySearchTree();
// tree.insert(24);
// tree.insert(26);
// tree.insert(25)
// // JSON.stringify(traverse(tree.root))

// function traverse(node){
//     const tree = {value: node.value};
//     tree.left = node.left === null ? null:
//     traverse(node.left);
//     tree.right = node.right === null ? null:
//     traverse(node.right);
//     return tree;
// }


// ----------------------------------------------------------------------------
// Implementing the remove
// ----------------------------------------------------------------------------

class Node{
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
        }else {
            let currentNode = this.root;
            while(true){
                if(value < currentNode.value){
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                }else {
                    if(!currentNode.right){
                       currentNode.right = newNode;
                       return  this; 
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    lookup(value){
        if(!this.root){
            return false;
        }else {
            let currentNode = this.root;
            while(currentNode){
                if(value < currentNode.value){
                    currentNode = currentNode.left
                }else {
                    if(value > currentNode.value){
                        currentNode = currentNode.right;
                    }else{
                        if(currentNode.value === value){
                            return currentNode;
                        }
                    }
                }
            }
        }
        return false;
    }

    remove(value) {
        if (!this.root) {
          return false;
        }
        let currentNode = this.root;
        let parentNode = null;
        while(currentNode){
          if(value < currentNode.value){
            parentNode = currentNode;
            currentNode = currentNode.left;
          } else if(value > currentNode.value){
            parentNode = currentNode;
            currentNode = currentNode.right;
          } else if (currentNode.value === value) {
            //We have a match, get to work!
            
            //Option 1: No right child: 
            if (currentNode.right === null) {
              if (parentNode === null) {
                this.root = currentNode.left;
              } else {
                
                //if parent > current value, make current left child a child of parent
                if(currentNode.value < parentNode.value) {
                  parentNode.left = currentNode.left;
                
                //if parent < current value, make left child a right child of parent
                } else if(currentNode.value > parentNode.value) {
                  parentNode.right = currentNode.left;
                }
              }
            
            //Option 2: Right child which doesnt have a left child
            } else if (currentNode.right.left === null) {
              currentNode.right.left = currentNode.left;
              if(parentNode === null) {
                this.root = currentNode.right;
              } else {
                
                //if parent > current, make right child of the left the parent
                if(currentNode.value < parentNode.value) {
                  parentNode.left = currentNode.right;
                
                //if parent < current, make right child a right child of the parent
                } else if (currentNode.value > parentNode.value) {
                  parentNode.right = currentNode.right;
                }
              }
            
            //Option 3: Right child that has a left child
            } else {
    
              //find the Right child's left most child
              let leftmost = currentNode.right.left;
              let leftmostParent = currentNode.right;
              while(leftmost.left !== null) {
                leftmostParent = leftmost;
                leftmost = leftmost.left;
              }
              
              //Parent's left subtree is now leftmost's right subtree
              leftmostParent.left = leftmost.right;
              leftmost.left = currentNode.left;
              leftmost.right = currentNode.right;
    
              if(parentNode === null) {
                this.root = leftmost;
              } else {
                if(currentNode.value < parentNode.value) {
                  parentNode.left = leftmost;
                } else if(currentNode.value > parentNode.value) {
                  parentNode.right = leftmost;
                }
              }
            }
          return true;
          }
        }
      }
    
}

const tree = new BinarySearchTree();
tree.insert(11);
tree.insert(13);
tree.insert(45);
tree.insert(23);
tree.lookup(24);
tree.lookup(65);
tree.lookup(72);

JSON.stringify(traverse(tree.root))

function traverse(node){
    const tree = {value: node.value};
    tree.left = node.left === null ? null:
    traverse(node.left);
    tree.right = node.right === null ? null:
    traverse(node.right);
    return tree;
}