function knapSack(maxWeight, weights, values, n) {
	let DP = [];
	for(let i = 0; i <= n; i++) {
		DP.push([]);
	}
	for(let i = 0; i <= n; i++) {
		for(let w = 0; w <= maxWeight; w++) {
			if(i === 0 || w === 0) {
				DP[i][w] = 0;
			} else if(weights[i - 1] <= w) {
				DP[i][w] = Math.max(values[i - 1] + DP[i - 1][w - weights[i - 1]], DP[i - 1][w]);
			} else {
				DP[i][w] = DP[i - 1][w];
			}
		}
	}
	return DP[n][maxWeight];
}

let values = [10, 20, 30, 40, 50];
let weights = [1, 2, 3, 4, 5];
let maxWeight = 10;
let n = values.length;
console.log(knapSack(maxWeight, weights, values, n));