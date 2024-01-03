const reverseString = (str) => {
  //   let splitStr = str.split("");
  //   console.log(splitStr);
  //   let reverseArr = splitStr.reverse();
  //   let joinArr = reverseArr.join("");
  //   console.log(joinArr);
  //   return joinArr;
  //   return str.split("").reverse().join("");
  //   let reverStr = "";
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     reverStr += str[i];
  //   }
  //   return reverStr;
  return str === "" ? "" : reverseString(str.substr(1)) + str.charAt(0);
};

const result = reverseString("mamimi");
console.log(result);
