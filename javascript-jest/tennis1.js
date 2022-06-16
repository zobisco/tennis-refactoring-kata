// https://github.com/infinityworks/101-Sessions/tree/crafting-code/sessions/Crafting-Code-100/103

"use strict";

function getScore(player1Score, player2Score) {
	if (equalScores(player1Score, player2Score)) {
		return getEqualScores(player1Score);
	} else if (winningScore(player1Score, player2Score)) {
		return getWinningScore(player1Score, player2Score);
	} else {
		return getCurrentScores(player1Score, player2Score);
	}
}

function getCurrentScores(player1Score, player2Score) {
	return `${getRallyScore(player1Score)}-${getRallyScore(player2Score)}`;
}

function getRallyScore(tempScore) {
	let score = "";
	switch (tempScore) {
		case 0:
			score += "Love";
			break;
		case 1:
			score += "Fifteen";
			break;
		case 2:
			score += "Thirty";
			break;
		case 3:
			score += "Forty";
			break;
	}
	return score;
}

function getWinningScore(player1Score, player2Score) {
	let score = "";
	let pointsDifference = player1Score - player2Score;
	if (pointsDifference === 1) {
		score = "Advantage player1";
	} else if (pointsDifference === -1) {
		score = "Advantage player2";
	} else if (pointsDifference >= 2) {
		score = "Win for player1";
	} else {
		score = "Win for player2";
	}
	return score;
}

function getEqualScores(playerScores) {
	let score = "";
	switch (playerScores) {
		case 0:
			score = "Love-All";
			break;
		case 1:
			score = "Fifteen-All";
			break;
		case 2:
			score = "Thirty-All";
			break;
		default:
			score = "Deuce";
			break;
	}
	return score;
}

function equalScores(player1Score, player2Score) {
	return player1Score === player2Score;
}

function winningScore(player1Score, player2Score) {
	return player1Score >= 4 || player2Score >= 4;
}

module.exports = getScore;
