// https://www.codegrepper.com/code-examples/javascript/frameworks/-examples/sum+of+all+positive+numbers+in+an+array+javascript

// https://www.w3schools.com/jsref/jsref_reduce.asp#:~:text=The%20reduce()%20method%20executes,not%20change%20the%20original%20array.


const arr = [11, -2, 34, 45, 19, 6];

const getMaxSubSum = (arr = []) => {

    const isPositive = num => typeof num === 'number' && num > 0;

    const result = arr.reduce((acc, val) => {

       if(isPositive(val)){
          acc += val;
       };

       return acc;

    }, 0);

    return result;
 };

 console.log(getMaxSubSum(arr));
 
 console.assert(getMaxSubSum(arr) == 115);