import sum from './sum';

test('sum works correctly', () => {
	const result = sum(1, 3);
	expect(result).toBe(4);
	// Test the opposite of a matcher
	expect(result).not.toBe(3);
	expect(result).toBeGreaterThan(3);
	expect(result).toBeGreaterThanOrEqual(4);

	const result2 = sum(1, -1);
	expect(result2).toBe(0);
	expect(result2).toBeLessThan(1);
	expect(result2).toBeLessThanOrEqual(0);

	const result3 = 0.1 + 0.2;
	// expect(result3).toBe(0.3);  // Rounding Error
	expect(result3).toBeCloseTo(0.3);
});
