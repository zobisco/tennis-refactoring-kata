"use strict";

const scores = ["Love", "Fifteen", "Thirty", "Forty"];
function getScore(P1point, P2point) {
	let score = "";
	const isScoreEven = P1point == P2point;
	if (isScoreEven) {
		score = calculateEvenScore(P1point, score);
	}

	let P1res;
	let P2res;
	if ((P1point === 0 || P2point === 0) && P1point + P2point > 0) {
		P1res = scores[P1point];
		P2res = scores[P2point];
		score = P1res + "-" + P2res;
	}

	if (P1point > P2point && P1point < 4) {
		if (P1point === 2) {
			P1res = scores[2];
		}
		if (P1point === 3) {
			P1res = scores[3];
		}
		if (P2point === 1) {
			P2res = scores[1];
		}
		if (P2point === 2) {
			P2res = scores[2];
		}
		score = P1res + "-" + P2res;
	}
	if (P2point > P1point && P2point < 4) {
		if (P2point === 2) {
			P2res = scores[2];
		}
		if (P2point === 3) {
			P2res = scores[3];
		}
		if (P1point === 1) {
			P1res = scores[1];
		}
		if (P1point === 2) {
			P1res = scores[2];
		}
		score = P1res + "-" + P2res;
	}

	if (P1point > P2point && P2point >= 3) {
		score = "Advantage player1";
	}

	if (P2point > P1point && P1point >= 3) {
		score = "Advantage player2";
	}

	if (P1point >= 4 && P2point >= 0 && P1point - P2point >= 2) {
		score = "Win for player1";
	}
	if (P2point >= 4 && P1point >= 0 && P2point - P1point >= 2) {
		score = "Win for player2";
	}
	return score;
}

function calculateEvenScore(P1point, score) {
	if (P1point > 2) {
		return "Deuce";
	}
	if (P1point === 0) {
		score = scores[0];
	}
	if (P1point === 1) {
		score = scores[1];
	}
	if (P1point === 2) {
		score = scores[2];
	}
	score += "-All";
	return score;
}

module.exports = getScore;
