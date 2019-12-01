/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  if (!people || people.length < 2) return people;

  // 排序算法要区分第一位是否相等
  const sortPeople = people.sort(function (a, b) {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return b[0] - a[0];
    }
  });

  // console.log('sortPeople:', sortPeople)
  const res = [];
  res.push(sortPeople[0]);

  for (let i = 1; i < sortPeople.length; i++) {
    const curr = sortPeople[i];
    // console.log('curr:', curr);
    const index = curr[1];
    // console.log('res.length:', res.length);
    for (let k = res.length; k > index; k--) {
      res[k] = res[k - 1];
    }
    res[index] = curr;
    // console.log('res:', res)
  }
  return res;
};


// console.log(reconstructQueue([[9,0],[7,0],[1,9],[3,0],[2,7],[5,3],[6,0],[3,4],[6,2],[5,2]]));
