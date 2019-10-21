const middle = function(arr) {
  let result = [];
  let midIndex = Math.floor(arr.length/2);

  if (arr.length === 0 || arr.length === 1) {
    return result;
  } else if (arr.length % 2 == 1) {
    result.push(arr[midIndex]);
  } else {
    result.push(arr[midIndex - 1], arr[midIndex]);
  }
  
  return result;
};

module.exports = middle;