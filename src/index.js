module.exports = function check(str, bracketsConfig) {
for (let i = 0; i <= bracketsConfig.length - 1;) {
  let pattern = bracketsConfig[i].join('');
  if (newstrng.includes(pattern)) {
  newstring = newstring.replace(pattern, '');
  i = 0;
  } else {
  i = i + 1;
  }
  }
  if (newstring.length == 0) {
  return true;
  } else {
  return false;
  }
}