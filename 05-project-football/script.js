const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const goalNumber = [...game.scored];
let goal = 0;

goalNumber.forEach(player => {
  goal++;
  console.log(`Goal ${goal}: ${player}`);
});

const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) {
  average += odd;
  console.log(odd);
}
average /= odds.length;

const team = [];
console.log(game.odds.team1, game.team1);

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'drawn' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fielplayers] = players1;
console.log(gk);
console.log(fielplayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const playerFinal = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

const {
  odds: { team1, x: draw, team2 }, //Desectruturación del objeto game y reasignación de odd
} = game;

console.log(team1, draw, team2);

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const gameEventsSet = [...new Set(gameEvents.values())];
console.log(gameEventsSet);

const removeYellowCard = gameEvents.delete(64);

console.log(gameEvents);

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

for (const [key, value] of gameEvents) {
  let halftime = '';
  if (key < 45) {
    halftime = 'FIRST HALF';
  } else {
    halftime = 'SECOND HALF';
  }
  console.log(`[${halftime}] ${key}: ${value}`);
}
