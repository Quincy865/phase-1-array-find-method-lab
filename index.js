function superbowlWin(records) {
    const win = records.find(record => record.result === "W");
    return win ? win.year : undefined;
}

const gameRecords = [
    { year: "2015", result: "W" },
    { year: "2016", result: "W" },
    { year: "2017", result: "undefined"}
];

console.log(superbowlWin(gameWins));
