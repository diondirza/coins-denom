import parse from './parse';

describe('Parse function', () => {
  test('"432" should be 432', () => {
    expect(parse('432')).toBe(432);
  });

  test('"213p" should be 213', () => {
    expect(parse('213p')).toBe(213);
  });

  test('"£16.23p" should be 1623', () => {
    expect(parse('£16.23p')).toBe(1623);
  });

  test('"£14" should be 1400', () => {
    expect(parse('£14')).toBe(1400);
  });

  test('"£54.04" should be 5404', () => {
    expect(parse('£54.04')).toBe(5404);
  });

  test('"£23.33333" should be 2333', () => {
    expect(parse('£23.33333')).toBe(2333);
  });

  test('"001.41p" should be 141', () => {
    expect(parse('001.41p')).toBe(141);
  });
});
