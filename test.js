'use strict';

function rand(min, max) {
	return min + Math.floor((max - min + 1) * Math.random());
}

function randFace() {
	return ['Crown', 'Anchor', 'Heart', 'Spade', 'Club', 'Diamond'][rand(0,5)];
}

let funds = 50;
let round = 0;

while(funds > 1 && funds < 100) {
	round++;
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
			let face = randFace();
			bets[face] = bets[face] + bet;
			console.log ('I would bet on : ' + face + ' with ' + bets[face] + 'p');
			remaining = remaining - bet;
		}	while (remaining > 0 );
	}
	funds = funds - totalBet;

	console.log('\tBets result:' + Object.keys(bets).map( face => `${face}: ${bets[face]} pence`) + `(totalBet: ${totalBet})pence.`);

	const hand = [];

	for (let roll = 0; roll < 3; roll++) {
		hand.push(randFace());
	}

	console.log(`\thand: ${hand.join(',')}`);

	let winnings = 0;
	for (let die = 0; die < hand.length; die++){
		let face = hand[die];
		if (bets[face] > 0) {
			winnings = winnings + bets[face];
		}
	}

	funds = funds + winnings;
	console.log(`\tWinning: ${winnings}`);
	console.log(`\tending funds: ${funds}`);
}
