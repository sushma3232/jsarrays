var name=["m","a","l","a","y","a","l","a","m"]
var list=[]
for (i=0;i<=name.length;i++){
    var x=name.length-i
    list.push(name[x])
}
list.shift()
for (i=0;i<list.length;i++){
    if (list[i]===name[i]){
        console.log("polindrom")
        break
    }else{
        console.log("polindrom")
        break
    }
}