function randomNumber(range) {
  let container = [];
  let evenNumber = Math.round((Math.random() * range) / 2) * 2;
  container.push(evenNumber);
  return container;
}

randomNumber(50);
