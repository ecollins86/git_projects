// quotes json file is from https://github.com/AtaGowani

import quotes from "./assets/quotes.json" with { type: "json" };

const quote = 'quote';
const opNum1 = Math.floor(Math.random()*(quotes.length - 1));
const opNum2 = Math.floor(Math.random()*(quotes.length - 1));
const opNum3 = Math.floor(Math.random()*(quotes.length - 1));
const op1Arr = quotes[opNum1][quote].split(' ');
const op2Arr = quotes[opNum2][quote].split(' ');
const op3Arr = quotes[opNum3][quote].split(' ');
const start = [];
const middle = [];
const end = [];
const fullMsg = [];



const messageMaker = (part1, part2, part3) =>{
    const startLength = Math.floor(part1.length/3);
    const middleLength = Math.floor(part2.length/3);
    const endLength = Math.floor(part3.length/3);
    let middleNum = middleLength;
    let endNum = (endLength + endLength);

    for(let i = 0; i < startLength; i++){
        start.push(part1[i]);
    }
    for(let i = 0; i < middleLength; i++){
        middle.push(part2[middleNum]);
        middleNum++;
    }
    for(let i = endNum; i < part3.length; i++){
        end.push(part3[endNum]);
        endNum++;
    }
    fullMsg.push(start.join(' '));
    fullMsg.push(middle.join(' '));
    fullMsg.push(end.join(' '));
    const finalizedMsg = fullMsg.join(' ');
    console.log(finalizedMsg);
    
}

messageMaker(op1Arr,op2Arr,op3Arr);

