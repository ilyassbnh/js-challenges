//-----------challenge 1 --------------
// let i = 1;
// while (i <= 10){
//     console.log(i)
//     i++;
// }
//-----------challenge 2 --------------
// for ( let i=1; i<=20;i++){
//     if(i%2 === 0){
//         console.log(i)
//     }
// }
//-----------challenge 3 --------------
// let i=0;
// let sum=0;
// while(i < 10){
//     i++;
//     sum += i;
// }console.log(sum)
//-----------challenge 4 --------------
// let fruits = ["pomme","banane","orange","fraise"]
// for(let i = 0 ; i < fruits.length; i++){
//     console.log(fruits[i])
//  }
//-----------challenge 5 --------------
// let mot = "frontend"
// console.log(mot.length)
//-----------challenge 6 --------------
// let table =["1","2","3","4","5"]
// let sum = ""
// for (let i =0;i<table.length;i++ ){
//     console.log("le nombre "+table[i]+ " multiplie par 2 est: "+ table[i]*2)
// }
// -----------challenge 7 --------------
// let dev =["js","react","html","css"]
// for(let i = 0 ; i < dev.length; i++){
// console.log(dev[i].toUpperCase())
// }
// -----------challenge 8 --------------
// for ( let i=1; i<=15;i++){
//     if(i%2 === 1){
//         console.log(i)
//     }
// }
// -----------challenge 9 --------------
// let arr = ["chat","chien","rat","poisson","lion"]
// let count = 0
// for(let i = 0 ; i<arr.length;i++){
//     count ++
// }console.log(count);
// -----------challenge 10 --------------
// let mot = "Hello"
// let times = 5
// for (let i=0 ; i<times ; i++){
//     console.log(mot);
// }
// -----------challenge 11 --------------

// function positiveSum(arr) {
//   let sum = 0
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       sum += arr[i]
//     }
//   }
//   return sum
// 

// ----------- minimum challenge  --------------
// 
// let arr = [83, 0, -12, 95]
// let min = arr[0]
// for (let i = 0; i < arr.length; i++) {

//     if (min > arr[i]) {
//         min = arr[i]
//     }
// } console.log(min);
// ----------- boolean count challenge  --------------
// let sheep =[true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]


//     let num = 0
//     for (let i = 0 ; i < sheep.length ; i++){
//     if(sheep[i] == true){
//         num ++
//     }
//   }console.log(num);

// ----------- number to array challenge  --------------

// let n = 937
// function digit(n) {
//     let a = ""
//     a = Array.from(String(n),Number).reverse()

//     return a
// }

// console.log(digit(n));


// ----------- number to boolean result challenge  --------------
//  let flr1 = 394
//  let flr2 = 52
//  let result1 = 0
//  let checking = (flr1 + flr2)%2
//  if (result1 != 0){
//     checking = true
//  }else{
//     checking = false
//  }

//  console.log(checking);

// ----------- map challenge  --------------
// let x = [3, 5, 2, 6]
// function maps(x) {
//     let y= x.map ((x)=>x*2)
//     return y
// }
// console.log(maps(x))

// ----------- map challenge  --------------
let g = "lahb lasdu"
for(let i = 0 ; i < g.length ; i++){
    if(g[i]==" "){
        return 
    }
}

