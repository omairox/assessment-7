//---------------------PROBLEM 1-------------------//

function addToZero(num){
    for (let i=0; i<num.length; i++){
        for(let j = i + 1; j < num.length; j++) {
            if (num[i] + num[j] === 0) {
                return true;
            }
        }
        }
        return false;

    }

    console.log(addToZero([1, 4, 4, -4]));
    console.log(addToZero([1, 4, 4, 4]));


//The outer for loop runs n times as it iterates through each item in the array. The inner loop also runs n times, so the runtime is O(n^2).

//-------------------PROBLEM 2-------------------------//

function hasUniqueChars(str){
    for (let i=0; i < str.length; i++){
        for (let j = i + 1; j < str.length; j++) {
            
            if (str[i] === str[j]){
                return false;
            }
        }
    }
    return true;
}

console.log(hasUniqueChars("Monday"))
console.log(hasUniqueChars("Moonday"))


// Same runtime as previous porblem. The outer for loop runs n times as it iterates through each item in the array. The inner loop also runs n times, so the runtime is O(n^2).

//-----------------PROBLEM 3--------------------------//

function isPangram(sentence) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const lowercaseSentence = sentence.toLowerCase();
  
    for (let i = 0; i < alphabet.length; i++) {
      const letter = alphabet[i];
  
      if (!lowercaseSentence.includes(letter)) {
        return false;
      }
    }

    return true;
  }


console.log(isPangram("The quick brown fox jumps over the lazy dog"))

console.log(isPangram("Tom Brady is the goat."))

//This function uses a single for loop and the includes() method which both have a runtime of O(n).

//-----------------PROBLEM 4---------------------------//

function find_longest_word(words) {
    let longestWord = '';
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
  
    return longestWord;
  }

const words = [ 'cat', 'sjdkhsdsdsad', 'donkey'];
const longestWord = find_longest_word(words);
console.log(longestWord)

// The runtime of this function is O(n) because it contains a single for loop.

//---------------------------------------------------------//