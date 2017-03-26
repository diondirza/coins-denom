const denoms = [
  { value: 200, pretty: '£2'},
  { value: 100, pretty: '£1'},
  { value: 50, pretty: '50p'},
  { value: 20, pretty: '20p'},
  { value: 10, pretty: '10p'},
  { value: 5, pretty: '5p'},
  { value: 2, pretty: '2p'},
  { value: 1, pretty: '1p'}
];

const compact = (solution) => {
  let result = [];

  solution.forEach(({value, pretty}) => {
    let exist = result.find(o => o.value === value);
    if (!exist) result.push({ value, pretty, qty: 1 });
    else exist.qty++;
  });

  return result;
}

export default function getDenom(amount) {
  const solution = [];
  let currentAmount = 0;
  let indexItem = 0;

  while(currentAmount < amount) {
    const denom = denoms[indexItem];
    const tempAmount = currentAmount + denom.value;

    if (tempAmount <= amount) {
      solution.push(denom);
      currentAmount += denom.value;
    } else {
      indexItem++;
    }
  }

  return compact(solution);
}

