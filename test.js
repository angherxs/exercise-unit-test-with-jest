const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

// Declaramos una función con el nombre exacto "formEuroToDollar"

test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBeCloseTo(expected);
});

test("One dollar should be converted to yen correctly", function() {
    const yen = fromDollarToYen(1);
    const expected = (1 / 1.07) * 156.5;
    expect(yen).toBeCloseTo(expected);
});

test("One yen should be converted to pounds correctly", function() {
    const pounds = fromYenToPound(1);
    const expected = (1 / 156.5) * 0.87;
    expect(pounds).toBeCloseTo(expected);
});