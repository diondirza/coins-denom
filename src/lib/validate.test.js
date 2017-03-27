import validate from './validate';

describe('validate function', () => {
  test('"432" should be valid', () => {
    expect(validate('432')).toBeTruthy();
  });

  test('"213p" should be valid', () => {
    expect(validate('213p')).toBeTruthy();
  });

  test('"£16.23p" should be valid', () => {
    expect(validate('£16.23p')).toBeTruthy();
  });

  test('"£14" should be valid', () => {
    expect(validate('£14')).toBeTruthy();
  });

  test('"£54.04" should be valid', () => {
    expect(validate('£54.04')).toBeTruthy();
  });

  test('"£23.33333" should be valid', () => {
    expect(validate('£23.33333')).toBeTruthy();
  });

  test('"001.41p" should be valid', () => {
    expect(validate('001.41p')).toBeTruthy();
  });

  test('"13x" should be invalid', () => {
    expect(validate('13x')).toBeFalsy();
  });

  test('"13p.02" should be invalid', () => {
    expect(validate('13p.02')).toBeFalsy();
  });

  test('"£p" should be invalid', () => {
    expect(validate('£p')).toBeFalsy();
  });
});
