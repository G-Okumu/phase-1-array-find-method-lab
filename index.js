// code your solution here
// function superbowlWin(results) {
//     let result = results.find(results.result === "W");
//     if (result == true) {
//         return year;
//     } else {
//         return undefined;
//     }
// }
superbowlWin = (record) => {
    const result = record.find(record => record.result === "W");
    return !!result ? result.year : undefined;
}