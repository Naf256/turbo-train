export default function bs_list(haystack: number[], needle: number): boolean {

	let mid = Math.floor(haystack.length / 2);
	let hi = haystack.length;
	let lo = 0;

	while (lo < hi) {
		if (haystack[mid] === needle) {
			return true;
		}

		if (haystack[mid] > needle) {
			hi = mid - 1;
			mid = Math.floor((lo + hi) / 2);
		}

		if (haystack[mid] < needle) {
			lo = mid + 1;
			mid = Math.floor((lo + hi) / 2);
		}
	}

	return false;
}
