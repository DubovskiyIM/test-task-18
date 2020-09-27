const { get } = require('axios');
const should = require('chai').should();

const headers = { 'Content-Type': 'application/json' };

const cases = [
	{a: 3, xv: 3},
	{a: 666, xv: 666},
	{a: 404, xv: 404},
	{a: 9, xv: 9},
	{a: 0, xv: 0}
];

cases.forEach(({ a, xv }) => {
	describe('asyncMicro', () => {
		it(xv + ' should respond with initial value ' + a, async  () => {
			const res = await get(`https://kodaktor.ru/api2/there/${a}`, { headers });
			const { data } = await get(`https://kodaktor.ru/api2/andba/${res.data}`, { headers });
			data.should.equal(xv);
		});
	});
});
