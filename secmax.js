numbers=[50, 40, 23, 70, 12, 5, 10, 7];
max=numbers[0]
secmax=numbers[0]
for (i=0;i<numbers.length;i++){
    if (numbers[i]<max){
        max=numbers[i]
    
    }
    else if (numbers[i]<max & max>secmax){
        secmax=numbers[i]
    }
}
console.log(secmax)