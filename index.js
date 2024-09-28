function createPhoneNumber(numbers){
    //console.log(numbers.length);

    //let num = numbers.toString().split('');
    //console.log(num[3]);
  
    // if (numbers.length !==10){
    //   return ("Enter Correct number");
    // }
    
    //let phoneString = numbers.join(''); // creating a string of numbers using .join array method
    num = numbers.join('');

    let formattedNumber = `(${num.slice(0,3)}) ${num.slice(3,6)}-${num.slice(6)}`;
    
    return formattedNumber;
    
  }
  
 console.log(createPhoneNumber([1234567890]))


function formatPhoneNumber(numbers) {
    if (numbers.length !== 10) {
      return "Invalid input: Array must contain 10 integers.";
    }
  
    for (let num of numbers) {
      if (num < 0 || num > 9 || !Number.isInteger(num)) {
        return "Invalid input: Array elements must be integers between 0 and 9.";
      }
    }
  
    const areaCode = numbers.slice(0, 3).join("");
    const firstThree = numbers.slice(3, 6).join("");
    const lastFour = numbers.slice(6).join("");
  
    return `(${areaCode}) ${firstThree}-${lastFour}`;   
  
  }
  
  // Example usage:
  const phoneNumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 99, 0];
  const formattedPhoneNumber = formatPhoneNumber(phoneNumberArray);
  console.log(formattedPhoneNumber)


function sentenceToArray(sentence){
    const words =sentence.split(' ');
    console.log(Array.isArray(words));
    console.log(words !== null && words !== undefined);

   words.forEach(function(element, index){
       words[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
       completeSentence = words.join(' ');
  });

  return completeSentence;
    
//     return words;
// const upperWords = [];
// words.forEach(element => {
//     upperWords.push(element.toUpperCase());
    
// });
// const upperWords = [];
// words.forEach(function(element, index){
//     upperWords[index] = element.charAt(0).toUpperCase() + element.slice(1);
//     // upperWords.push();
//     sentence = upperWords.join(' ');
// });
// return sentence;
// // console.log(upperWords);

}

console.log(sentenceToArray('EMEKA IS A FINE BOY'));



const isSquare = function(n){
    if(n<0) return false;
    const sqrt = Math.sqrt(n);
    let compare = sqrt % 1 === 0;

    return compare;
    // console.log(4.5%1);
    // console.log(sqrt);
    // let test = (sqrt**2)/sqrt;
    // console.log(test);
    // let compare = sqrt === (sqrt**2)/sqrt;
    // console.log(compare);
}

console.log(isSquare(25));



function order(words){
    if(words === " ") return " ";

    let splitted = words.split(" ");

    splitted.sort(function(firstWord, secondWord){

        let findNumber1 = 0;
        let findNumber2 = 0;

        for(let i = 0; i < firstWord.length; i++){
            if(!isNaN(firstWord[i])){
                findNumber1 = parseInt(firstWord[i]);
            }
        }

        for(let i = 0; i < secondWord.length; i++){
            if(!isNaN(secondWord[i])){
                findNumber2 = parseInt(secondWord[i]);
            }
        }

        return findNumber1 - findNumber2;
    });

    return splitted.join(' ');
}
console.log(order("Tr2ue i1s Bitt3er"));