import getDenom from './getDenom';

describe('getDenom function', () => {
  it('should get denomination from "432"', () => {
    const expected = [
      { value: 200, pretty: '£2', qty: 2 },
      { value: 20, pretty: '20p', qty: 1 },
      { value: 10, pretty: '10p', qty: 1 },
      { value: 2, pretty: '2p', qty: 1 },
    ];

    expect(getDenom('432')).toBeDefined();
    expect(getDenom('432')).toHaveLength(expected.length);
    expect(getDenom('432')).toEqual(expect.arrayContaining(expected));
  });
});
