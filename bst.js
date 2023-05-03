class Node {
    constructor(data){
        this.data = data
        this.right = null
        this.left = null
    }
}

const Tree = (array) => {
    root = null

    const buildTreeRec = (arr) => {
        //base case
        if (start > end) {return null}

        let mid = Math.floor((arr.length) / 2)  //find midPoint, which will then become the 'Root Node'
        let rootNode = Node(arr[mid])
        newNode.left = buildTreeRec(arr.slice(0,mid))  //set the left child recursively
        newNode.right = buildTreeRec(arr.slice(mid+1, arr.length))  //set the right child recursively
        root = rootNode
        return root
    }
}