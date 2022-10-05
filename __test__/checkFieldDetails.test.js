//Jest.js used for testing
const checkFieldDetails = require('./checkFieldDetails');

test('return message states when id, size, and soil_type have sufficient values', () => {
    expect(checkFieldDetails('2', '12000', 'Chalky')).toBe('Field details successfully submitted');
});

test('return message states when id has an insufficient value', () => {
    expect(checkFieldDetails('hrpe', '15010', 'Loamy')).toBe('Field ID should be a number with 1-255 characters');
});

test('return message states when size has an insufficient value', () => {
    expect(checkFieldDetails('3', 'bbbbbb', 'Clay')).toBe('Size should be a number with 1-255 characters');
});

test('return message states when soil_type has an insufficient value', () => {
    expect(checkFieldDetails('45', '5000', "")).toBe('No Soil type selected');
});