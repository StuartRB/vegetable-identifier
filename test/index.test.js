
describe('is a vegetable', () => {

	const vegetables = ["turnip", "Radish", "Cabbage", "kale"];
	const isVegetable = require('vegetable-identifier');

	vegetables.forEach(item => {
		test(item + ' is a vegetable', () => {
			  expect(isVegetable(item)).toBe(true);
		});
	})
});

describe('is not a vegetable', () => {
	const isVegetable = require('vegetable-identifier');

	test('a banana is not a vegetable', () => {
	  	expect(isVegetable(null)).toBe(false);
	});
	test('null is not a vegetable', () => {
	  	expect(isVegetable(null)).toBe(false);
	});
	test('undefined is not a vegetable', () => {
	  	expect(isVegetable(undefined)).toBe(false);
	});
	test('an empty string is not a vegetable', () => {
	  	expect(isVegetable("")).toBe(false);
	});
	test('1 is not a vegetable', () => {
	  	expect(isVegetable(-1)).toBe(false);
	});
});
