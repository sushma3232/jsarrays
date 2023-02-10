var m = [3000, 600000, 324990909, 90990900, 30000, 5600000, 690909090, 31010101, 532010, 510, 4100]
var crore=0
var lakh=0
var dilwale=0
for (i=0;i<m.length;i++){
    if (m[i]>10000000){
        crore=crore+1
        
    }else if (m[i]>100000){
        lakh=lakh+1
    }else{
        dilwale=dilwale+1
    }
}
console.log(crore)
console.log(lakh)
console.log(dilwale)