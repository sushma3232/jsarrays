var number = 30
var n = [10, 11, 12, 13, 14, 17, 18, 19]
let output=[]
for(var i of n){
    for(var j of n){
      
        
        if (i+j === number){
            output.push([i,j])
        }
   }
 }
console.log(output);