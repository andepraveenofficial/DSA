// Find Square using binary Search

let square_root = 26;

// Optimized Method

let left = 0;
let right = square_root;
let mid = (left + right) / 2;
console.log(mid);

while (true) {
  if (mid * mid === square_root) {
    console.log(mid);
    break;
  } else {
    console.log(mid * mid);
    if (mid * mid < square_root) {
      left = mid;
    } else {
      right = mid;
    }
    mid = (left + right) / 2;
  }
}

/*
// General Method

for (let i=0; i<square_root; i++){
    const value = i*i;
    if (value == square_root){
        console.log(i);
        break
    }
}

*/
