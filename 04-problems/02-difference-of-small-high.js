//  Difference of Small to Hight

const arr = [68, 72, 36, 40, 83, 7];

let output = [];
for (let i = 0; i < arr.length; i++) {
  let isMax = false;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] < arr[j]) {
      isMax = true;
      output.push(j - i);
      break;
    }
  }
  if (!isMax) {
    output.push(0);
  }
}

console.log(output); // Output: [1, 0, 1, 1, 0, 0]
