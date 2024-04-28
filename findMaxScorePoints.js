const players = [
  {
    id: 1,
    name: "Ivan",
    scorePoints: 4500,
  },
  {
    id: 2,
    name: "Petr",
    scorePoints: 3600,
  },
  {
    id: 3,
    name: "Vadim",
    scorePoints: 3433,
  },
  {
    id: 4,
    name: "Olga",
    scorePoints: 2356,
  },
];

let points = [];

for (playerKey in players) {
  points.push(players[playerKey].scorePoints);
}

let maxScorePoints = Math.max(...points);

let bestPlayer = players.find(
  (player) => player.scorePoints === maxScorePoints
);
console.log(
  `${bestPlayer.name} has max score points = ${bestPlayer.scorePoints}. Congrats!`
);
