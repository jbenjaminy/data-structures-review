'use strict'
/* Write an algorithm which searches through a 2D array, and whenever it finds a zero should set the entire row and column to zero. */
let twoD = [[1, 0, 1, 1, 0],[0, 1, 1, 1, 0],[1, 1, 1, 1, 1],[1, 0, 1, 1, 1],[1, 1, 1, 1, 1]]
    /* Expected output: [[0, 0, 0, 0, 0],[0, 0, 0, 0, 0,],[0, 0, 1, 1, 0],[0, 0, 0, 0, 0,],[0, 0, 1, 1, 0]] */

let setZero = (arr) => {
    for (let i=0; i<arr.length; i++) {
        for (let j=0; j<arr[i].length; j++) {
            if (arr[i][j] === 0) {
                for (let k=0; k<arr[i].length; k++) {
                    if (arr[i][k] !== 0) {
                        arr[i][k] = 'x'
                    }
                }
                for (let l=0; l<arr.length; l++) {
                    if (arr[l][j] !== 0) {
                        arr[l][j] = 'x'
                    }
                }
            }   
        }
    }
    for (let i=0; i<arr.length; i++) {
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

/* Write an algorithm which will find all pairs of number in an array which sum to a certain value. */

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

