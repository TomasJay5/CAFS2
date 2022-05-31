const sumOfDigits = (num) => {
    
    if(num == 0){
        
        return 0;
    }
    
    const lastDigit = num % 10;
    
    const remainingNum = Math.floor(num / 10);
    
    return lastDigit + sumOfDigits(remainingNum);
 }
 console.log(sumOfDigits(4321));

    const sumOfDigitsArrow = num =>

    num ?

   (num % 10) + sumOfDigitsArrow(Math.floor(num / 10)) : 0;

console.log(sumOfDigitsArrow(4321));