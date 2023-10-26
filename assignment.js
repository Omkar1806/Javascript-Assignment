//Reverse word problem
function reverseWordsInSentence(sentence) {
    const words = sentence.split(' ');
  
    const reversedWords = words.map(word => {
      return word.split('').reverse().join('');
    });
  
    const reversedSentence = reversedWords.join(' ');
  
    return reversedSentence;
  }
  
  const inputSentence = "This is a sunny day"; // Replace with your input sentence
  const reversedSentence = reverseWordsInSentence(inputSentence);
  console.log("Reversed sentence:", reversedSentence);

  console.log("----------------------------");

//Desecnding order sorting problem
const numbers = [5, 2, 9, 1, 5, 6];

numbers.sort(function(a, b) {
    return b - a;
});

console.log(numbers);


  