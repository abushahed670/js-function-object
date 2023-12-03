// amr moto kore korselam

function getAverage(assignment1, assignment2, assignment3){
    
    var total = assignment1 + assignment2 + assignment3;
    var average = total / 3;
    // console.log(total);
    return average;
}
var averageMarkes = getAverage(54, 27, 46);
console.log('Average Marks:', averageMarkes);

// can do using const... junker rules

function getAverage(assignment1, assignment2, assignment3){
    
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}
const assignment1Marks = 60;
const assignment2Marks = 45;
const assignment3Marks = 54;
const myAverage = getAverage(assignment1Marks, assignment2Marks, assignment3Marks);
console.log('Average Marks:', myAverage);