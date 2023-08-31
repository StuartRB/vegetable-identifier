
describe('is a vegetable', () => {
	test('turnip is a vegetable', () => {
		const isVegetable = require('vegetable-identifier');
	  	expect(isVegetable("turnip")).toBe(true);
	});
	test('radish is a vegetable', () => {
		const isVegetable = require('vegetable-identifier');
	  	expect(isVegetable("Radish")).toBe(true);
	});
	test('cabbage is a vegetable', () => {
    		const isVegetable = require('vegetable-identifier');
    	  	expect(isVegetable("Cabbage")).toBe(true);
    });
    test('cucumber is a vegetable', () => {
            const isVegetable = require('vegetable-identifier');
            expect(isVegetable("Cucumber")).toBe(true);
    });
});

describe('is not a vegetable', () => {
	test('a banana is not a vegetable', () => {
		const isVegetable = require('vegetable-identifier');
	  	expect(isVegetable(null)).toBe(false);
	});
	test('null is not a vegetable', () => {
		const isVegetable = require('vegetable-identifier');
	  	expect(isVegetable(null)).toBe(false);
	});
	test('undefined is not a vegetable', () => {
		const isVegetable = require('vegetable-identifier');
	  	expect(isVegetable(undefined)).toBe(false);
	});
	test('an empty string is not a vegetable', () => {
		const isVegetable = require('vegetable-identifier');
	  	expect(isVegetable("")).toBe(false);
	});
	test('1 is not a vegetable', () => {
		const isVegetable = require('vegetable-identifier');
	  	expect(isVegetable(-1)).toBe(false);
	});
});