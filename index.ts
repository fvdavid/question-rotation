type Region = "SG" | "US";

interface QuestionSet {
  region: Region;
  questions: number[];
}

const questionSets: QuestionSet[] = [
  { region: "SG", questions: [1, 2, 3, 4, 5] },
  { region: "US", questions: [6, 7, 8, 9, 10] },
];

const cycleDurationInDays = 7;
const cycleStartTime = new Date("2023-01-02T19:00:00+08:00"); // Example start time (Monday 7 PM SGT)

// Function to calculate the current cycle
function getCurrentCycle(startTime: Date, durationInDays: number): number {
  const now = new Date();
  const elapsedTime = now.getTime() - startTime.getTime();
  return Math.floor(elapsedTime / (durationInDays * 24 * 60 * 60 * 1000)) + 1;
}

// Function to get the question for a specific region and cycle
function getQuestionForRegion(region: Region, cycle: number): number | null {
  const questionSet = questionSets.find((qs) => qs.region === region);
  if (!questionSet || questionSet.questions.length === 0) return null;
  return questionSet.questions[(cycle - 1) % questionSet.questions.length];
}

function main() {
  const currentCycle = getCurrentCycle(cycleStartTime, cycleDurationInDays);
  console.log(`Current Cycle: ${currentCycle}`);

  for (const qs of questionSets) {
    const currentQuestion = getQuestionForRegion(qs.region, currentCycle);
    console.log(
      `Region: ${qs.region}, Question for Cycle ${currentCycle}: ${currentQuestion}`
    );
  }
}

main();
