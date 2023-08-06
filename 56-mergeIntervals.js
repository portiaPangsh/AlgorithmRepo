/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var mergeIntervals = function(intervals){
  let newIntervals = [];
  let temp = intervals[0];
  // key here is:
  // if the second start value is even smaller the first ending value, it must be an overlapping,
  // if not, the overlapping not happening in this time and we just need to push this new element
  // but remember we need to keep track this new element for next compare.
  for(let idx = 0; idx < intervals.length; idx++){
    if(temp[1] >= intervals[idx][0]){
      temp[1] = Math.max(intervals[idx][1], temp[1])
    } else {
      newIntervals.push(temp); // temp = intervals[idx - 1]
      temp = intervals[idx]
    }
  }
  // also we need to grab the last element into our merged list since we only push it when its smaller than length
  newIntervals.push(temp)
  return newIntervals
}

var merge = function(intervals) {
  let newIntervals = intervals.sort((a,b) => a[0] - b[0])
  return mergeIntervals(newIntervals)
};

let intervals = [[1,4], [0,4]]
// intervals = [[1,3],[2,6],[8,10],[15,18]]
let res = merge(intervals);
console.log('pp check res', res)

