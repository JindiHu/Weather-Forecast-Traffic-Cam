import { getDistance } from './utils';

test('calculate the distance from P1(1, 1) P2(4, 5)', () => {
	const p1 = { latitude: 1, longitude: 1 };
	const p2 = { latitude: 4, longitude: 5 };
	expect(getDistance(p1, p2)).toBe(5);
});
