function findLongestWord(sentence) {
    const words = sentence.split(' ');
  
    let longestWord = '';
    let longestLength = 0;
    let maxVowelCount = 0;
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i].replace(/[^a-zA-Z]/g, '');
      const length = word.length;
      const vowelCount = (word.match(/[aeiou]/gi) || []).length;
  
      if (length > longestLength || (length === longestLength && vowelCount > maxVowelCount)) {
        longestWord = word;
        longestLength = length;
        maxVowelCount = vowelCount;
      }
    }
  
    return longestWord;
  }
  
  console.log(findLongestWord("Smart people learn from everything and everyone, average people from their experkencp, stupid people already, have all the answers"))