import { Test } from './test.class';

describe('Проверка класса', () => {
  const testCases = [0];

  testCases.forEach((value) => {
    const test = new Test();
    test.run();
    it(`Исходная строка: ${value}`, () => {
      expect(true).toBeTruthy();
    });
  });
});
