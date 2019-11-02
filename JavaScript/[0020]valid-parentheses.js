/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (!s) return false;
  var stack = [];
  var MAP = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  var startList = ['(', '{', '['];

  for (var i = 0; i < s.length; i++) {
    if (startList.indexOf(s[i]) !== -1) {
      stack.push(s[i]);
    } else if (MAP[stack[stack.length - 1]] === s[i]) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
};
