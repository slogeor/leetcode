/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  var temp = '';
  var wordBreakSub = function (s, wordDict) {
    if (wordDict.length === 0) {
      return false;
    }
    if (!s) {
      return true;
    }
    var i = 0;
    while (wordDict.length > i) {
      var head = wordDict[i];
      if (!temp) {
        temp = s;
      }
      i++
      if (s.indexOf(head) !== -1) {
        console.log('head', head)
        console.log('s.split(head):', s.split(head))
        var arr = s.split(head).filter(item => item);
        console.log('arr:', arr)
        if (arr.length > 0) {
          var flag = true;
          for (var k = 0; k < arr.length; k++) {
            console.log('arr[k]:', arr[k])
            return flag && wordBreakSub(arr[k], wordDict)
          }
        } else {
          return true;
        }
      }
    }
    wordDict.shift();
    console.log('-------')
    console.log('temp:', temp)
    console.log('wordDict:', wordDict)
    return wordBreakSub(temp, wordDict);
  };
 return wordBreakSub(s, wordDict);
};
