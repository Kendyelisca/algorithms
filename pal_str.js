function palindrome(str) {
  // let str = str.toLowerCase().replace(/[\W_]/g, "");
  // let comp = str.split("").reverse().join("");
  // // if (comp === str) {
  // //   return true;
  // // }
  // // return false;
  // return str === comp;
  // let comp = [...str].reverse().join("");
  // return str === comp;
  // let l = str.length;
  // for (let i = 0; i < l / 2; i++) {
  //   if (str[i] !== str[l - 1 - i]) {
  //     return false;
  //   }
  // }
  // return true;
  let le = str.length;
  if (le === 0 || le === 1) {
    return true;
  }
  if (str[0] === str[le - 1]) {
    return palindrome(str.slice(1, le - 1));
  }
  return false;
}

const result = palindrome("1001");
console.log(result);
