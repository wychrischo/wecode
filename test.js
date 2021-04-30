function randomNumber(range) {
  let container = [];
  let evenNumber = Math.round((Math.random() * range) / 2) * 2;
  let arryNumber = container.push(evenNumber);
  return arryNumber;
}

randomNumber(50);
