// var list = ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"]
// let unique=[]
// for (var i of list){
//     if (!unique.includes(i)){
//         unique.push(i)
//     }
// }
// console.log(unique)




n = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
let unique=[]
for (var i of n){
    if (!unique.includes(i)){
        unique.push(i)
    }
}
console.log(unique)