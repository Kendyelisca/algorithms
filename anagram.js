function anagram(a, b) {
  let y = a.split("").sort();
  let z = b.split("").sort();

  for (let i = 0; i < y.length; i++) {
    if (y.length === z.length && y[i] === z[i]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

const result = anagram("yowi", "woyi");
console.log(result);
