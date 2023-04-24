const wordSearch = (letters, word) => { 
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = [];
  for (let i = 0; i < letters[0].length; i++) {
    let column = "";
    for (let j = 0; j < letters.length; j++) {
      column += letters[j][i];
    }
    verticalJoin.push(column);
  }
  const allWords = horizontalJoin.concat(verticalJoin);
  for (const words of allWords) {
    if (words.includes(word)) {
      return true;
    }
  }
  return false;
};

module.exports = wordSearch;