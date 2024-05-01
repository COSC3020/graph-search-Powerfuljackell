const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

//looked at Assel Aljazwe's test code, however, I wanted to continue to use js verify, but was unable to get it to work

const testset = [
    { graph: [[1, 5], [0, 2, 4], [1], [4, 6], [1, 3], [0], [3]], start: 1, end: 5, expected: [ 1, 0, 4 ] },
    { graph: [[1, 5], [0, 2, 4], [1], [4, 6], [1, 3], [0], [3]], start: 2, end: 6, expected: [ 2, 1, 4, 3, 6 ] },
    { graph: [[1, 5], [0, 2, 3, 4], [1], [1, 4, 6], [1, 3], [0], [3]], start: 1, end: 6, expected: [ 1, 3, 6 ] },
    { graph: [[1, 5], [0, 2, 3, 4], [1], [1, 4, 6], [1, 3], [0], [3]], start: 3, end: 2, expected: [ 3, 1, 2 ] },
];

testset.forEach(({ graph, start, end, expected }, index) => {
    console.log("\ntest:",index++, (JSON.stringify(depthFirstSearch(graph, start, end)) === JSON.stringify(expected)) ? "Success" : "Failed");
    console.assert(JSON.stringify(depthFirstSearch(graph, start, end)) === JSON.stringify(expected));
    (JSON.stringify(depthFirstSearch(graph, start, end)) === JSON.stringify(expected)) ? null : console.log("Failed with values:", graph,"\nStart:", start,"\nEnd:", end, "\nExpected Result:",expected);
});

//console.log(test);