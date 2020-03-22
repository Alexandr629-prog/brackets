module.exports = function check(newstring, bracketsConfig) {
  for (var i = 0; i <= bracketsConfig.length - 1;) {
  var a = bracketsConfig[i].join('');
  if (newstring.includes(a)) {
  newstring = newstring.replace(a, '');
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
  