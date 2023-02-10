var list1 = [1,2,3,4,5,6]

var list2 = [2,3,1,0,6,7]
var res=[]


for (var i of list1){
   
    if (!list2.includes(i))
    res.push(i)
}
console.log(res)