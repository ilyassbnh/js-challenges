//----------------safeLast challenge---------------
// let arr = ["kjv","lbu","ljb"]
// function safeLast(arr) {
//    if(arr[arr.length-1] == null){
//     return(null);   
//    }else{
//     return (arr[arr.length-1]);
//    }
// }
// console.log(safeLast(arr));
//--------------countOccurrences-----------------

// let arr=["53","34","34"]
// let valeur = "34"
// let count = 0
// function countOccurrences(arr,valeur) {
//     for(let i = 0;i<arr.length;i++){
//         if(arr[i] === valeur){
//             count ++
//         }
//     }
//     return count
// }
// console.log(countOccurrences(arr,valeur));
//--------------unique Array-----------------
// let arr = [0,3,5,1,2,34,1,23,4,32,1,0]
// let arrNew = []

// function uniqueArray(arr) {
//     for (let i = 0 ; i<arr.length; i++) {
//         if(arrNew.indexOf(arr[i]) === -1){
//             arrNew.push(arr[i])
//         }
//     }
//     return arrNew
// }

// console.log(uniqueArray(arr));
//--------------reverse Array without reverse()-----------------

// let arr = [3,5,9,6,5,2,3,5,2]
// let arrNew = []
// function reversedArray(arr) {
//     for(let i=arr.length-1 ; i>=0;i--){
//         arrNew += arr[i]
//     }
//     return arrNew.split('')
// }
// console.log(reversedArray(arr));

//--------------addIfNotExist-----------------
// let arr = [9, 5, 8, 3, 1, 5]
// let value = 5

// function addIfNotExist(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr.indexOf(arr[i])===value) {
//             arr.push(value)
//         }
//     }return arr
// }

// console.log(addIfNotExist(arr));

//--------------logestword-----------------
// let words =["wlbua","ubaln","lbaya","laublkuahksjjdfl as;dfknasl"]
// let newWord=words[0].length
// function longestword(words) {
//     for (let i = 0; i < words.length; i++) {
//         if (newWord<words[i].length) {
//             newWord=words[i]
//         }        
//     }return newWord
// }

// console.log(longestword(words));
//--------------mergeThree-----------------

// function mergeThree(a,b,c) {
//     let d = a.concat(b,c)
//     return d.sort((a,b)=>a-b)
// }console.log(mergeThree([23,1,314,23,51,3],[1,3,6,4,2,],[435,232,31]));

//--------------OnlyEven-----------------
// let arr= [23,52,4625,7,53684,93]

// function onlyEven(arr) {
//   return arr.filter(num => num % 2 === 0);
// }

// console.log(onlyEven(arr));
//---------insertAt-------------------
// function insertAt(arr,value,index) {
//   arr.splice(index,0,value);
//   return arr;
// }
// console.log(insertAt([52,5,1,3,2],0,1));
