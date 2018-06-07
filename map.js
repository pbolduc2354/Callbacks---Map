var words = ["ground", "control", "to", "major", "tom"];

function map(arr, fct) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(fct(arr[i]))
  }
  console.log(newArr)
  return newArr
}


map(words, function(word) {
  return word.length;
})
map(words, function(word) {
  return word.toUpperCase();
})
map(words, function(word) {
  return word.split('').reverse().join('');
})



// console.log(words[1].length);
// console.log(words[1].toUpperCase());
// console.log(words[1].split('').reverse().join(''));
