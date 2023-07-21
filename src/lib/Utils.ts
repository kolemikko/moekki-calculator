import currency from 'currency.js';

export const EURO = (value: number) =>
	currency(value, { symbol: '€', decimal: ',', separator: '.', pattern: '#!' });
