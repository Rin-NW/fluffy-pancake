'use strict';

var rand = require('../module/rand');
var randFace = require('../module/randface')
var arr = ['Crown', 'Anchor', 'Heart', 'Spade', 'Club', 'Diamond'];

for (let funds = 50, round = 0; funds > 1 && funds < 100; round++){
	console.log(`Round: ${round}`);
	console.log(`\tStarting funds: ${funds}`);
	const bets = { Crown: 0, Anchor: 0, Heart: 0, Spade: 0, Club: 0, Diamond: 0 };
	let totalBet = rand(1, funds);
	if (totalBet === 7) {
		totalBet = funds;
		bets.Heart = totalBet;
		console.log('Oh ~ I got 7 pence. All in Heart!');
	} else {
		let remaining = totalBet;
		do {
			let bet = rand(1, remaining);
			let face = randFace(arr);
			bets[face] = bets[face] + bet;
			console.log ('I would bet on : ' + face + ' with ' + bets[face] + 'p');
			remaining = remaining - bet;
		}	while (remaining > 0 );
	}
	funds = funds - totalBet;

	console.log('\tBets result:' + Object.keys(bets).map( face => `${face}: ${bets[face]} pence`) + `(totalBet: ${totalBet})pence.`);

	const hand = [];

	for (let roll = 0; roll < 3; roll++) {
		hand.push(randFace(arr));
	}

	console.log(`\thand: ${hand.join(',')}`);

	let winnings = 0;
	for (let score = 0; score < hand.length; score++){
		let face = hand[score];
		if (bets[face] > 0) {
			winnings = winnings + bets[face];
		}
	}

	funds = funds + winnings;
	console.log(`\tWinning: ${winnings}`);
	console.log(`\tending funds: ${funds}`);

}
