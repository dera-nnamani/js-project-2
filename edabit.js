// function addUp(num) {
//   let sum = 0;
//   for (i = 0; i <= num; i++) {
//     console.log(i);
//     sum = sum + i;
//   }
//   console.log(sum);
//   return sum;
// }

// addUp(5);

function generation(num, gender) {
  let numValue = "";
  if (num === -3) {
    numValue = `great grand${gender == "f" ? "mother" : "father"}`;
  }
  if (num === -2) {
    numValue = `grand${gender == "f" ? "mother" : "father"}`;
  }

  if (num === -1) {
    numValue = `${gender == "f" ? "mother" : "father"}`;
  }
  if (num === 0) {
    numValue = `me!`;
  }
  if (num === 1) {
    numValue = `${gender == "f" ? "daughter" : "son"}`;
  }
  if (num === 2) {
    numValue = `${gender == "f" ? "granddaughter" : "grandson"}`;
  }
  if (num === 2) {
    numValue = `great ${gender == "f" ? "granddaughter" : "grandson"}`;
  }
  return numValue;
}
console.log(num_of_digits([2, 55, 60, 97, 86]));
