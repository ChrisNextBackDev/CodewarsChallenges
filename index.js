// function createPhoneNumber(numbers){
//     //console.log(numbers.length);

//     //let num = numbers.toString().split('');
//     //console.log(num[3]);
  
//     // if (numbers.length !==10){
//     //   return ("Enter Correct number");
//     // }
    
//     //let phoneString = numbers.join(''); // creating a string of numbers using .join array method
//     num = numbers.join('');

//     let formattedNumber = `(${num.slice(0,3)}) ${num.slice(3,6)}-${num.slice(6)}`;
    
//     return formattedNumber;
    
//   }
  
//  console.log(createPhoneNumber([1234567890]))


// function formatPhoneNumber(numbers) {
//     if (numbers.length !== 10) {
//       return "Invalid input: Array must contain 10 integers.";
//     }
  
//     for (let num of numbers) {
//       if (num < 0 || num > 9 || !Number.isInteger(num)) {
//         return "Invalid input: Array elements must be integers between 0 and 9.";
//       }
//     }
  
//     const areaCode = numbers.slice(0, 3).join("");
//     const firstThree = numbers.slice(3, 6).join("");
//     const lastFour = numbers.slice(6).join("");
  
//     return `(${areaCode}) ${firstThree}-${lastFour}`;   
  
//   }
  
//   // Example usage:
//   const phoneNumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 99, 0];
//   const formattedPhoneNumber = formatPhoneNumber(phoneNumberArray);
//   console.log(formattedPhoneNumber)


// function sentenceToArray(sentence){
//     const words =sentence.split(' ');
//     console.log(Array.isArray(words));
//     console.log(words !== null && words !== undefined);

//    words.forEach(function(element, index){
//        words[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
//        completeSentence = words.join(' ');
//   });

//   return completeSentence;
    
// //     return words;
// // const upperWords = [];
// // words.forEach(element => {
// //     upperWords.push(element.toUpperCase());
    
// // });
// // const upperWords = [];
// // words.forEach(function(element, index){
// //     upperWords[index] = element.charAt(0).toUpperCase() + element.slice(1);
// //     // upperWords.push();
// //     sentence = upperWords.join(' ');
// // });
// // return sentence;
// // // console.log(upperWords);

// }

// console.log(sentenceToArray('EMEKA IS A FINE BOY'));



// const isSquare = function(n){
//     if(n<0) return false;
//     const sqrt = Math.sqrt(n);
//     let compare = sqrt % 1 === 0;

//     return compare;
//     // console.log(4.5%1);
//     // console.log(sqrt);
//     // let test = (sqrt**2)/sqrt;
//     // console.log(test);
//     // let compare = sqrt === (sqrt**2)/sqrt;
//     // console.log(compare);
// }

// console.log(isSquare(25));



// function order(words){
//     if(words === " ") return " ";

//     let splitted = words.split(" ");

//     splitted.sort(function(firstWord, secondWord){

//         let findNumber1 = 0;
//         let findNumber2 = 0;

//         for(let i = 0; i < firstWord.length; i++){
//             if(!isNaN(firstWord[i])){
//                 findNumber1 = parseInt(firstWord[i]);
//             }
//         }

//         for(let i = 0; i < secondWord.length; i++){
//             if(!isNaN(secondWord[i])){
//                 findNumber2 = parseInt(secondWord[i]);
//             }
//         }

//         return findNumber1 - findNumber2;
//     });

//     return splitted.join(' ');
// }
// console.log(order("Tr2ue i1s Bitt3er"));


// function spinWords(string){
//     let words = string.split('');
//     for(let i =0; i<words.length; i++){
//         if(words[i].length >=5){
//             words[i] = words[i].split('').reverse().join('');
            
//         }
//     }
//       return words.join('');
//   }
//    console.log(spinWords('Hey fellow warriors'));


//    function spinWords(str){
//     let words = str.split('');
//     words.forEach((word,index) =>{
//         if (word.length >= 5){
//             words[index] = word.split('').reverse().join('');
//         }
//     });
//     return words.join('');
//    }

//    console.log(spinWords('Hey fellow warriors'));

// function spinWords(string){
//     let words = string.split(' ');

//     for (i = 0; i < words.length; i++){
//         if (words[i].length >= 5){
//             // console.log(words[i]);
//             words[i] = words[i].split('').reverse().join('');
//         }
//     }
//     return words.join(' ');
// }

// console.log(spinWords('Hey fellow warriors'));



//A function that adds the multiples of three and five for any given number

// function sumofMultiplesOfThreeAndFive(number){
//     if (number < 0) {
//         return 'Number is negative';
//     }

//     let sum = 0;

//     for (let i = 1; i <= number; i++) {
//         if (i % 3 === 0 || i % 5 === 0){
//             sum += i;
//         }
//     }

//     return sum;
// }

// console.log(sumofMultiplesOfThreeAndFive(10));




//You are given an array (which will have a length of at least 3, but could be very large) 
//containing integers. The array is either entirely comprised of odd integers or entirely 
//comprised of even integers except for a single integer N. Write a method that t
//akes the array as an argument and returns this "outlier" N.

//Examples
//[2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

//[160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

// a function that return an outlier from a vast array of numbers

// function findOutliers(integers){
//     let evenNumberCount = 0;
//     let oddNumberCount = 0;
//     let evenOutlier;
//     let oddOutlier;

//     // if (integers.length < 3){
//     //     return 'put in more numbers'
//     // }

//     for (let i = 0; i < integers.length; i++){
//         if (integers[i] % 2 ===0){
//             evenNumberCount++;
//             evenOutlier = integers[i];
//         }
//         else{
//             oddNumberCount++;
//             oddOutlier = integers[i];
//         }
//         // if (evenNumberCount === 1 && oddNumberCount > 1 || oddNumberCount === 1 && evenNumberCount > 1){
//         //     break;
//         //}
//     }

//     return evenNumberCount === 1 ? `${evenOutlier}` : `${oddOutlier}`;
// }

// console.log(findOutliers([1]));


// function findOutlier(integers){
//     let evens = integers.filter(num => num % 2 === 0);
//     let odds = integers.filter(num => num % 2 !== 0);


//     return evens.length === 1 ? `${evens[0]}` : `${odds[0]}`;
// }

// console.log(findOutlier([-137300589,-166006301,143474147,-82137177,-60208855,-80169469,89904438,-33534257,-198947105,198322373,-82732691,-71390251,-22036409,87760241,16219773,15825831,32079391,115249007,147974995,-36466049,-68396287,-154170745,84028341]));



//Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, 
//and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, 
//since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
//He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, 
//Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their 
//list contains each number only up to N times, without changing the order?

//Task
//Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
//For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], 
//drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, 
//which leads to [1,2,3,1,2,3].
//With list [20,37,20,21] and number 1, the result would be [20,37,21].


// function deleteNth(arr, N) {
//     const newList = []; 
//     const count = {};    

//     for (let i = 0; i < arr.length; i++) {
        
//         if (count[arr[i]] == undefined){
//             newList.push(arr[i])
//             count[arr[i]] = 1
//         }
//         else{
//             if (count[arr[i]] < N) {
//                 newList.push(arr[i])
//                 count[arr[i]] += 1;
//             }
//         }
//     }

//     return newList;  
// }

// console.log(deleteNth([1, 2, 3, 1, 2, 1, 2, 3], 3));
 


//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be 
//case insensitive. The string can contain any char.

//Examples input/output:

//XO("ooxx") => true
//XO("xooxx") => false
//XO("ooxXm") => true
//XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
//XO("zzoo") => false

// function XO(str){
//     str = str.toLowerCase();
//     let countO = 0;
//     let countX = 0;

//     for (let i = 0; i < str.length; i++){
//         if (str[i].includes('o')){
//             countO++;
//         }
//         else if (str[i].includes('x')){
//             countX++;
//         }
//         else if (!str[i].includes('o') && !str[i].includes('x')) {
//             return true;
//         }
//     }
//     if(countO == countX){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(XO('aaaaakllpkd'));


//Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


// function findShort(s){
//     s = s.toLowerCase().split(' ');
//     let shortestWord = s[0].length; // this is a reference comparison

//     if (s == ''){
//         return 'put in something';
//     }

//     for (let i = 0; i < s.length; i++){
        
//         if (s[i].length < shortestWord){
//             shortestWord = s[i].length;
//         }
//     }
//     return shortestWord;
// }

// console.log(findShort('Emeka guru boy deaf latifat'));




//Complete the solution so that it returns true if the first argument(string) passed in ends 
//with the 2nd argument (also a string).

//Examples:

//solution('abc', 'bc') // returns true
//solution('abc', 'd') // returns false

function solution(str, ending) {
    const strLength = str.length;
    const endingLength = ending.length;


    if(endingLength > strLength) {
        return false;
    }

    for (let i = 0; i < endingLength; i++){
        if (str[strLength - endingLength + i] !== ending[i]){
            return false;
        }
    }
    return true;
}


console.log(solution("abcde", "e"));

