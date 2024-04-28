// Test Data Set 1: Standard Case
const players1 = [
  { id: 1, name: "Alice", scorePoints: 120 },
  { id: 2, name: "Bob", scorePoints: 300 },
  { id: 3, name: "Charlie", scorePoints: 250 },
];

// Test Data Set 2: Multiple Maximums
const players2 = [
  { id: 1, name: "Alice", scorePoints: 500 },
  { id: 2, name: "Bob", scorePoints: 500 },
  { id: 3, name: "Charlie", scorePoints: 450 },
];

// Test Data Set 3: Empty Array
const players3 = [];

// Test Data Set 4: Negative Points
const players4 = [
  { id: 1, name: "Alice", scorePoints: -50 },
  { id: 2, name: "Bob", scorePoints: -20 },
  { id: 3, name: "Charlie", scorePoints: -10 },
];

// Test Data Set 5: Positive and Negative Points
const players5 = [
  { id: 1, name: "Diana", scorePoints: -200 },
  { id: 2, name: "Ethan", scorePoints: 100 },
  { id: 3, name: "Fiona", scorePoints: 0 },
  { id: 4, name: "George", scorePoints: 300 },
  { id: 5, name: "Hannah", scorePoints: -50 },
];

function findBestPlayer(players) {
  if (players.length === 0) {
    console.log("Players are not found! Nobody came \u{1F614} \n");
    return;
  }

  let bestPlayers = [];
  let maxScorePoints = players[0].scorePoints;

  for (let player of players) {
    if (player.scorePoints > maxScorePoints) {
      maxScorePoints = player.scorePoints;
      bestPlayers = [player];
    } else if (
      player.scorePoints === maxScorePoints &&
      !bestPlayers.includes(player)
    ) {
      bestPlayers.push(player);
    }
  }

  if (bestPlayers.length > 1) {
    console.log("Wow! There are several winners: ");
    bestPlayers.forEach((player) => {
      console.log(`${player.name} with score points = ${player.scorePoints}.`);
    });
  } else {
    console.log(
      `${bestPlayers[0].name} has max score points = ${bestPlayers[0].scorePoints}.`
    );
  }

  console.log("Congrats! \u{1F973} \u{1F973} \u{1F973} \n");
}

findBestPlayer(players1);
findBestPlayer(players2);
findBestPlayer(players3);
findBestPlayer(players4);
findBestPlayer(players5);
