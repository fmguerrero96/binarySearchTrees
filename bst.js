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

        while(currentNode.left !== null || currentNode.right !== null){   
            if (value > currentNode.data){                               
                currentNode = currentNode.right                          
            } else if (value < currentNode.data){
                currentNode = currentNode.left                           
            } else {return null}                                        
        }
        if (value > currentNode.data){
            currentNode.right = Node(value)                              
        } else {currentNode.left = Node(value)}                         
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


    const nextSmallest = (node) => {
        let min = node;
            while (min.left != null)
            {
                min = min.left;
            }
            return min;
    }

    const remove = (value) => {
        let nodeToRemove = find(value)
        let parent
        //check if node has no children
        if (nodeToRemove.right === null && nodeToRemove.left === null){
            parent = findParent(value)
            if(parent.left.data === value){
                parent.left = null
            }else if (parent.right.data === value){
                parent.right = null
            }
        }

        //check if node has two children
        if (nodeToRemove.left !== null && nodeToRemove.right !== null) {
            let rightChild = nodeToRemove.right
            let smallestInSubtree = nextSmallest(rightChild)
            let parentofSmallest = findParent(smallestInSubtree.data)
            nodeToRemove.data = smallestInSubtree.data
            parentofSmallest.left = null

            //check if node has only one child
                }else if (nodeToRemove.right != null){
                    nodeToRemove.data = nodeToRemove.right.data
                    nodeToRemove.right = null
                } else if (nodeToRemove.left != null){
                    nodeToRemove.data = nodeToRemove.left.data
                    nodeToRemove.left = null
                }
    }

    
    root = buildTree(array);

    return {
        getTreeRoot,
        prettyPrint,
        find,
        insert,
        remove,
        levelOrder
    }

}



let a = [12,4,77,8,26,18,2,98,76,45,33,123,35,66,76,124,321,326,339,150,]
let myTree = Tree(a)

myTree.prettyPrint(myTree.getTreeRoot())
myTree.levelOrder(myTree.getTreeRoot())

//https://www.theodinproject.com/lessons/javascript-binary-search-trees
//step 6 - levelOrder