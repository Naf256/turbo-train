export default function two_crystal_balls(breaks: boolean[]): number {
	 
	let n = Math.round(Math.sqrt(breaks.length));

	let i = 0;

	while (i < breaks.length) {
		if (breaks[i]) {
			break
		}
		i += n;
	}

	let ini = i - n;

	for (let j = 0; j < n; j++) {
		if (breaks[ini]) {
			return ini;
		}

		ini++;
	}

	return -1;
}
