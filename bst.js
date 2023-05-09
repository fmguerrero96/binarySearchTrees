import { mergeSort } from "./mergeSort/mergeSort.js"

function Node(data, left = null, right = null) {
    return {
        data, 
        left,
        right,
    }
}

const Tree = (array) => {
    let root = null
   
    function getTreeRoot() {
        return root;
    }

    const buildTree = (array) => {
        return buildTreeRec(sortArrayRemoveDuplicates(array))
    }

    const buildTreeRec = (arr) => {
        //base case
        if (arr.length === 0) {return null}

        let mid = Math.floor((arr.length) / 2)  //find midPoint, which will then become the 'Root Node'
        let rootNode = Node(arr[mid])
        rootNode.left = buildTreeRec(arr.slice(0,mid))  //set the left child recursively
        rootNode.right = buildTreeRec(arr.slice(mid+1, arr.length))  //set the right child recursively
        return rootNode
    }

    const sortArrayRemoveDuplicates = (arr) => {
        const sortedArray = mergeSort(arr) //sorts the given array recursively using mergeSort algorithm
        const sortedAndReady = []
        for (let i = 0; i < sortedArray.length; i++){
            if (sortedArray[i] !== sortedArray[i+1]){
                sortedAndReady.push(sortedArray[i])
            }   
        }
        return sortedAndReady
    }

    const prettyPrint = (node, prefix = '', isLeft = true) => {
        if (node === null) {
           return;
        }
        if (node.right !== null) {
          prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
        if (node.left !== null) {
          prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
        }
      }

    const find = (value) => {
        let currentNode = root  //start at root node

        while(currentNode != null){
            if (currentNode.data === value){
                return currentNode
            } else if(value < currentNode.data){       //if value is less than rootNode,
                currentNode = currentNode.left         //then check left subtree.
            } else {currentNode = currentNode.right}   //Otherwise check right subtree
        }
        return currentNode
    }

    const insert = (value) => {
        let currentNode = root   //start at root node 

        while(currentNode.left !== null || currentNode.right !== null){  //while left and right are occupied 
            if (value > currentNode.data){                               
                currentNode = currentNode.right                          //check right subtree
            } else if (value < currentNode.data){
                currentNode = currentNode.left                           //check left subtree
            } else {return null}                                         //return null if it's a duplicate
        }
        if (value > currentNode.data){
            currentNode.right = Node(value)                              //set value as right child
        } else {currentNode.left = Node(value)}                          //set value as left child
        return currentNode
    }

    const findParent = (value) => {
        let parent = root

        while(parent !== null){
            if (parent.left.data === value || parent.right.data === value){
                return parent
            } else if (value < parent.data){
                parent = parent.left
            } else {parent = parent.right}
        }
        return null
    }

    root = buildTree(array);

    return {
        getTreeRoot,
        prettyPrint,
        find,
        insert,
        findParent
    }

}



let a = [9,8,7,6,5,4,3,2,1]
let myTree = Tree(a)

myTree.prettyPrint(myTree.getTreeRoot())
console.log(myTree.findParent(1))
