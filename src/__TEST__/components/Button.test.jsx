import { describe, test, expect } from 'vitest';

import { render } from '@testing-library/react';

import Button from '../../components/Button';

describe('Button.jsx', () => {
	test('Component is rendered', () => {
		const response = render(<Button />);

		expect(response.container).toBeDefined();
	});

	test('Renderiza el texto', () => {
		const text = 'Aceptar';

		const { getByText } = render(<Button text={text} />);

		const value = getByText('Aceptar');

		expect(value).toBeDefined();
	});
});
