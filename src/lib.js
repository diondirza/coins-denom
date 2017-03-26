const compact = (solution) => {
  let result = [];

  solution.forEach(({value, pretty}) => {
    let exist = result.find(o => o.value === value);
    if (!exist) result.push({ value, pretty, qty: 1 });
    else exist.qty++;
  });

  return result;
}

const getDenom = (amount) => {
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

const validate = (value) => {
  return /^£?\d{0,}\.?\d+p?$/g.test(value);
}

const parse = (value) => {
  let realAmount = 0;
  const onlyAmount = value.replace(/(£|p)/g, '');

  if (value.indexOf('£') > -1) {
    const tempAmount = parseFloat(onlyAmount).toFixed(2);
    realAmount = parseInt(tempAmount.replace('.', ''), 10);
  } else {
    realAmount = parseInt(onlyAmount, 10);
  }

  return realAmount;
}


export {
  getDenom,
  validate,
  parse,
};
