function swap(arr: number[], idx1: number, idx2: number) {
	let tmp = arr[idx1]
	arr[idx1] = arr[idx2]
	arr[idx2] = tmp
}

export default function bubble_sort(arr: number[]): void {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i; j++) {
			if (arr[j] > arr[j+1]) {
				swap(arr, j, j+1)
			}
		}
	}
}
