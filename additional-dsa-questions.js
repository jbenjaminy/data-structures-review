'use strict'
/* Write an algorithm which searches through a 2D array, and whenever it finds a zero should set the entire row and column to zero. */
let twoD = [
    [1, 0, 1, 1, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1]
  ]
  /* Expected output: [[0, 0, 0, 0, 0],[0, 0, 0, 0, 0,],[0, 0, 1, 1, 0],[0, 0, 0, 0, 0,],[0, 0, 1, 1, 0]] */

let setZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 0) {
        for (let k = 0; k < arr[i].length; k++) {
          if (arr[i][k] !== 0) {
            arr[i][k] = 'x'
          }
        }
        for (let l = 0; l < arr.length; l++) {
          if (arr[l][j] !== 0) {
            arr[l][j] = 'x'
          }
        }
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].join().split('x').join(0).split(',')
  }
  return arr
}
  // console.log(setZero(twoD))

/* You are given an array containing positive and negative integers. Write an algorithm which will find the largest sum in a continuous sequence. */
// [4, -12, 8, 2, 14, -1, 12]
// 1. Have a variable store the current largest sum
// 2. Loop through the array, compare the value of the current largest sum to the current sum of indexes

const findHighest = (array) => {
  let currentHigh = 0

  for (let i = 0; i < array.length; i++) {
    let currentTotal = array[i]

    if (currentTotal > currentHigh) {
      currentHigh = currentTotal
    }
    for (let j = i + 1; j < array.length; j++) {
      currentTotal = currentTotal + array[j]
      if (currentTotal > currentHigh) {
        currentHigh = currentTotal
      }
    }
  }
  return currentHigh
}

// console.log(findHighest([4, -12, 8, 2, 14, -1, 12]));

/* Write an algorithm which will sum two numbers stored in linked lists, where each node contains a single digit of the number. */

/*
input: 2 linked lists
output: 1 linked list
node = {digit: 1, next: null}

node1 = {digit: 3, next: node2}
node2 = {digit: 7, next: null}

node3 = {digit: 5, next: node4}
node4 = {digit: 5, next: null}

result = add_numbers(node1, node3)

result = {digit: 9, next: node8}
node8 = {digit: 2, next: null}

node2.digit + node4.digit

function sumOfLinkedList(linkedList1, linkedList2) {
  for node in linkedList1 {
    list1.push(node.digit)
  }
  for node in linkedList2 {
    list2.push(node.digit)
  }

  carryOver = false
  for (i = list1.length; i=0; i--) {
    for (j = list2.length; j=0; j--) {
      if (carryOver) {
        num = list1[i] + list2[j] + 1
      } else {
        num = list1[i] + list2[j]
      }

      if (num > 10) {
        num - 10
        carryOver = true
      }

      make new node at front with num as digit
    }
  }
}
 */

let node6 = {
  digit: 8,
  next: null
}

let node5 = {
  digit: 2,
  next: node6
}

let node4 = {
  digit: 6,
  next: node5
}

let node3 = {
  digit: 5,
  next: null
}

let node2 = {
  digit: 4,
  next: node3
}

let node1 = {
  digit: 3,
  next: node2
}

// FIXME: carryover on last digit
//
let getLinked = (node, numArr) => {
  numArr.push(node.digit);
  if (!node.next) {
    return numArr;
  }

  return getLinked(node.next, numArr);
}

let makeLinked = (num, linkedResult) => {
  if (!linkedResult) {
    linkedResult = {
      digit: num,
      next: null
    }
  } else {
    linkedResult = {
      digit: num,
      next: linkedResult
    }
  }
  return linkedResult
}

function stringify(num) {
	var ret = "";
	while (num) {
		ret = ret + num.digit;
		num = num.next;
	}
	return ret;
}

function sumOfLinkedList(node1, node2) {
  let num1 = [];
  let num2 = [];

  let first = getLinked(node1, num1);
  let second = getLinked(node2, num2);
  let carryOver = false;
  let linkedResult;
  let maxDigit;
  if (first.length > second.length) {
    maxDigit = first.length;
  } else {
    maxDigit = second.length;
  }
  for (let i = maxDigit - 1; i >= 0; i--) {
    let num;

    if (carryOver) {
      num = first[i] + second[i] + 1;
      carryOver = false;
    } else {
      num = first[i] + second[i];
    }

    if (num > 10) {
      num -= 10;
      carryOver = true;
    }

    linkedResult = makeLinked(num, linkedResult);
  }

  return linkedResult;
}

// console.log(stringify(sumOfLinkedList(node1, node4)));

/* Write an algorithm which will find all pairs of number in an array which sum to a certain value. */
let testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

let findPairs = (arr, val) => {
    let output = []
    for (let i=0; i < arr.length; i++) {
        let num1 = arr[i]
        let diff = val - num1
        for (let j=i + 1; j < arr.length; j++) {
            let num2 = arr[j]
            if (num2 === diff) {
                let pair = []
                pair.push(num1, num2)
                output.push(pair)
            }
        }

    }
    return output
}

console.log(findPairs(testArr, 17))

/* Implement a function to check if a tree is balanced (i.e. a tree where no two leaves differ in distance from the root by more than one). */

/* Given two rectangles in the following format, write a function which finds the rectangular intersection of the two:
{
    // Coordinates of bottom-left corner
    left: 1,
    bottom: 5,
    // Size
    width: 10,
    height: 4
} */

/* Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 by calling String.indexOf only once. */
