import { mergeSort } from "./mergeSort/mergeSort"

function Node(data, left = null, right = null) {
    return {
        data, 
        left,
        right,
    }
}

const Tree = (array) => {
    root = null

    const buildTreeRec = (arr) => {
        //base case
        if (arr.length === 0) {return null}

        let mid = Math.floor((arr.length) / 2)  //find midPoint, which will then become the 'Root Node'
        let rootNode = Node(arr[mid])
        newNode.left = buildTreeRec(arr.slice(0,mid))  //set the left child recursively
        newNode.right = buildTreeRec(arr.slice(mid+1, arr.length))  //set the right child recursively
        root = rootNode
        return root
    }

    const sortArrayRemoveDuplicates = (arr) => {
        const sortedArray = mergeSort(arr) //sorts the given array recursively using mergeSort algorithm
        const noDuplicates = []
        for (let i = 0; i < sortedArray.length; i++){
            if (sortedArray[i] !== sortedArray[i+1]){
                noDuplicates.push(sortedArray[i])
            }
        return noDuplicates
        }
    }

}