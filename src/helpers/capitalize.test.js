import { test, expect, describe, it } from 'vitest';

import { capitalize } from './capitalize';

describe('capitalize (one word)', () => {
	it('toma una palabra y la devuelva con la primera letra en mayúscula', () => {
		const str = 'hello';
		const result = capitalize(str);

		expect(result).toBe('Hello');
	});

	test('que tome una oración  y solo la primera letra esté en mayúscula', () => {
		const str = 'hello world';
		const result = capitalize(str);

		expect(result).toBe('Hello world');
	});

	test('La primera letra en mayúscula y el resto de la oración en minúscula', () => {
		const str = 'hello WORLD';
		const result = capitalize(str);

		expect(result).toBe('Hello world');
	});
});

describe('capitalize (all phrase)', () => {
	test('Una palabra la devuelve con la primera en mayúscula', () => {
		const str = 'hello';
		const result = capitalize(str, true);

		expect(result).toBe('Hello');
	});

	test('Una oración todas los comienzos de palabras están en mayúsculas', () => {
		const str = 'hello world';
		const result = capitalize(str, true);

		expect(result).toBe('Hello World');
	});

	test('La primera letra de cada palabra en mayúscula y el resto de cada palabra en minúscula', () => {
		const str = 'hello WORLD';
		const result = capitalize(str, true);

		expect(result).toBe('Hello World');
	});
});
