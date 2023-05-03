const merge = (leftArray, rightArray) => {
    let result = []
    let leftPoint = 0
    let rightPoint = 0
    
    while (leftPoint < leftArray.length && rightPoint < rightArray.length) {
      if (leftArray[leftPoint] < rightArray[rightPoint]){
        result.push(leftArray[leftPoint])
        leftPoint++
      } else {
        result.push(rightArray[rightPoint])
        rightPoint++
      }
    }
    
    while (leftPoint < leftArray.length) {
      result.push(leftArray[leftPoint]);
      leftPoint++;
    }
  
    while (rightPoint < rightArray.length) {
      result.push(rightArray[rightPoint]);
      rightPoint++;
    }
    
    return result
  }

function mergeSort(arr){
    if(arr.length <= 1){
      return arr
    }
    
    let midPoint = Math.floor(arr.length/2)
    let leftHalf = arr.slice(0, midPoint)
    let rightHalf = arr.slice(midPoint)
    
    let leftSorted = mergeSort(leftHalf)
    let rightSorted = mergeSort(rightHalf)
    
    return merge(leftSorted, rightSorted)
  }

export {mergeSort}

/*
console.log(mergeSort([3,1,2])) -> [1, 2, 3]
console.log(mergeSort([4,5,1,3,2])) -> [1, 2, 3, 4, 5]
console.log(mergeSort([4,7,9,3,2,8,1,5,6])) -> [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(mergeSort([200,34,98,521,123,67,908,420,12,3256,0])) -> [ 0,  12,   34,  67,
                                                                     98, 123,  200, 420,
                                                                    521, 908, 3256 ]
*/