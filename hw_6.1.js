function checkProbabilityTheory(count) {
  const numbers = [];
  let evenCount = 0;
  let oddCount = 0;

  for (let i = 0; i < count; i++) {
    const randomNum = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
    numbers.push(randomNum);

    if (randomNum % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  const evenPercent = (evenCount / count) * 100;
  const oddPercent = (oddCount / count) * 100;

  console.log("Згенеровані числа: " + numbers);
  console.log("Парні: " + evenCount + " (" + evenPercent.toFixed(0) + "%)");
  console.log("Непарні: " + oddCount + " (" + oddPercent.toFixed(0) + "%)");
}

checkProbabilityTheory(10);