function getCount(str) {
  //   var vowCount = 0;
  //   const vowels = ["a", "e", "i", "o", "u"];
  //   str = str.toLowerCase();
  //   for (let char of str) {
  //     if (vowels.includes(char)) {
  //       vowCount++;
  //     }
  //   }
  //   return vowCount;
  var c = str.match(/[aeiou]/gi);
  return c === null ? 0 : c.length;
}

var result = getCount(" I Am the best in this motherfucking game");
console.log(result);
