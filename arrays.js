const new_list = [1, 2, 3];

let result = new_list[0];

if (1 in new_list) {
  console.log(true);
}

for (n in new_list) {
  if (n === 1) {
    console.log(true);
  }
  break;
}

let numbers = [];
console.log(numbers.append(1));
