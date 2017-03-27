export default function parse(value) {
  let realAmount = 0;
  const onlyAmount = value.replace(/(£|p)/g, '');

  if (value.indexOf('£') > -1 || value.indexOf('.') > -1) {
    const tempAmount = parseFloat(onlyAmount).toFixed(2);
    realAmount = parseInt(tempAmount.replace('.', ''), 10);
  } else {
    realAmount = parseInt(onlyAmount, 10);
  }

  return realAmount;
}
