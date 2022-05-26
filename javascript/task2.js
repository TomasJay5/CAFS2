let arr = [];
while(arr.length < 5){
    let r = (Math.random() * 10 + 1).toFixed(2);
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);
console.log(Math.max(...arr));
console.log(Math.min(...arr));