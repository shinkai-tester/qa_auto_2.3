let studentScores = [
  { name: "Alice", score: 84 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 92 },
  { name: "David", score: 51 },
  { name: "Ella", score: 52 },
  { name: "Fiona", score: 53 },
  { name: "George", score: 10 },
  { name: "Hannah", score: 20 },
  { name: "Ian", score: 30 },
  { name: "Julia", score: 0 },
  { name: "Kevin", score: 1 },
  { name: "Liam", score: 100 },
  { name: "Mia", score: 15 },
  { name: "Noah", score: 18 },
  { name: "Olivia", score: 18 },
  { name: "Peyton", score: 65 },
  { name: "Quinn", score: 66 },
  { name: "Rachel", score: 67 },
  { name: "Sophia", score: 94 },
  { name: "Tyler", score: 95 },
  { name: "Uma", score: 96 },
  { name: "Violet", score: 43 },
  { name: "William", score: 43 },
  { name: "Xavier", score: 45 },
];

function formatArray(array) {
  return array.map((student) => `${student.name}: ${student.score}`).join(", ");
}

let isSwapped;
for (let i = 0; i < studentScores.length; i++) {
  isSwapped = false;
  console.log(`\u{1F51B} New pass through the array: ${i}`);
  for (let j = 0; j < studentScores.length - i - 1; j++) {
    console.log(
      `\u{1F50D} Comparing: ${studentScores[j].name} (${studentScores[j].score}) <-> ${
        studentScores[j + 1].name
      } (${studentScores[j + 1].score})`
    );
    console.log(`📋 Array state:`);
    console.table(studentScores);
    if (studentScores[j].score < studentScores[j + 1].score) {
      let temp = studentScores[j];
      studentScores[j] = studentScores[j + 1];
      studentScores[j + 1] = temp;
      isSwapped = true;
    }
    console.log(`\u{1F4A1} After iteration ${j}:`);
    console.table(studentScores);
  }
  if (!isSwapped) {
    console.log(`\u{1F389} Array is sorted, no swaps are needed!`);
    break;
  }
}
