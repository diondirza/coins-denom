export default function validate(value) {
  return /^£?\d{0,}\.?\d+p?$/g.test(value);
}
