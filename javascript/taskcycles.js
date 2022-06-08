function getLaughwhile(number) {
    
    let message ="";
    let i = 0;
    
    while (i < number) {
        message +="ha";
        i++;
    }
    
    return message += "!";
}
function getLaughdowhile(number) {
    
    let message ="";
    let i = 0;
    
    do {
        message +="ha";
        i++;
    } while (i < number);
    
    return message += "!";
}
function getLaughfor(number) {
    
    let message ="";
    
    for (let i = 0; i < number; i++) {
        message +="ha";
    }
    
    return message += "!";
}
console.log("while:", getLaughwhile(4));

console.log("do-while:", getLaughdowhile(4));

console.log("for:",getLaughfor(4));
