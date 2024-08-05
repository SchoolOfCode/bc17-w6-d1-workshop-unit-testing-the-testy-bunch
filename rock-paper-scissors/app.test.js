import { calculateRoundResult, calculateNewScores } from "./app.js";
import { expect, test } from "vitest";

let currentScore = { playerScoreCounter: 0, computerScoreCounter: 0, drawCounter: 0 };

test("this should be a win", () => {
	let outcome = calculateRoundResult("rock", "scissors");
	let newScore = calculateNewScores({ name: "faisal"}, outcome);
	console.log(newScore)
	expect(newScore.playerScoreCounter).toEqual(1);
});

test("this should be a loss", () => {
	let outcome = calculateRoundResult("scissors", "rock");
	let newScore = calculateNewScores(currentScore, outcome);

	expect(newScore.computerScoreCounter).toEqual(1);
});

test("this should be a draw", () => {
	let outcome = calculateRoundResult("rock", "rock");
	let newScore = calculateNewScores(currentScore, outcome);

	expect(newScore.drawCounter).toEqual(1);
});

test("this should be an error", () => {
	expect(function () {
		let outcome = calculateRoundResult("lizard", "scissors");
		let newScore = calculateNewScores(currentScore, outcome);
	}).toThrow("Invalid player move (lizard) or computer move scissors");
});
