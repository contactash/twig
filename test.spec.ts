import { groupArrayElements } from './test';

describe('groupArrayElements', () => {
  it('should take an array and a number n and return the contents of the divided into n equal sized arrays ',  () => {
    const actual = groupArrayElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
    const expected = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]];
    expect(actual).toEqual(expected);
  });

  it('should return correct groups of 3', () => {
    const actual = groupArrayElements([1, 2, 3, 4, 5], 3);
    const expected = [[1, 2], [3, 4], [5]];
    expect(actual).toEqual(expected);
  });

  it('should return correct groups of 3', () => {
    const actual = groupArrayElements([1, 2, 3, 4, 5, 6], 3);
    const expected = [[1, 2], [3, 4], [5, 6]];
    expect(actual).toEqual(expected);
  });
  it('should return undefined where division is not possible', () => {
    const actual = groupArrayElements([1, 2, 3, 4], 3);
    expect(actual).toBeUndefined();
  });


  it('should return correct groups of 1', () => {
    const actual = groupArrayElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1);
    const expected = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]];
    expect(actual).toEqual(expected);
  });


  it('should return undefined where division is not possibler', () => {
    const actual = groupArrayElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6);
    expect(actual).toBeUndefined();
  });

  it('should return undefined if the divider is zero', () => {
    const actual = groupArrayElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0);
    expect(actual).toBeUndefined();
  });

  it('should return undefined for negative divider', () => {
    const actual = groupArrayElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], -1);
    expect(actual).toBeUndefined();
  });

  it('should return undefined if the array has no elements', () => {
    const actual = groupArrayElements([], 2);
    expect(actual).toBeUndefined();
  });

  it('should return undefined if the divider is greater than the array length', () => {
    const actual = groupArrayElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11);
    expect(actual).toBeUndefined();
  });

});

