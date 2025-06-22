function pow(x, y) {
  let result = x;
  for (let i = 0; i < y - 1; i++) {
    result *= x;
  }
  return result;
}

console.log(pow(2, 4));
console.log(pow(3, 5));
console.log(pow(4, 6));