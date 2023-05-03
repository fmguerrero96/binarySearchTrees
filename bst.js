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

    const buildTreeRec = (arr) => {
        //base case
        if (arr.length === 0) {return null}

        let mid = Math.floor((arr.length) / 2)  //find midPoint, which will then become the 'Root Node'
        let rootNode = Node(arr[mid])
        rootNode.left = buildTreeRec(arr.slice(0,mid))  //set the left child recursively
        rootNode.right = buildTreeRec(arr.slice(mid+1, arr.length))  //set the right child recursively
        //root = rootNode
        return rootNode
    }

    const sortArrayRemoveDuplicates = (arr) => {
        const sortedArray = mergeSort(arr) //sorts the given array recursively using mergeSort algorithm
        const sortedAndReady = []
        for (let i = 0; i < sortedArray.length; i++){
            if (sortedArray[i] !== sortedArray[i+1]){
                sortedAndReady.push(sortedArray[i])
            }
        return sortedAndReady
        }
    }

    if(array) {root = buildTreeRec(sortArrayRemoveDuplicates(array))};

    return {
        root,
        getTreeRoot
    }

}


let a = [9,8,7,6,5,4,3,2,1]
let myTree = Tree(a)

console.log(myTree.getTreeRoot())