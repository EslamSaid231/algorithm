var sentence = "Read this awesome sentence.";
var words = sentence.split(" ");
var vowels = ["a", "e", "i", "o", "u"];
var countvow = 0;
var sum = words.length;

for (var char of sentence) {
  if (vowels.includes(char)) {
    countvow++;
  }
}

console.log("the number of vowels in sentence is: " + countvow);

var arr1 = [3, 1, 7, 9];
var arr2 = [2, 4, 1, 9, 3];
var arr = arr1.concat(arr2);
var totArr1 = 0;
var totArr2 = 0;

for (i = 0; i < arr1.length; i++) {
  for (j = 0; j < arr2.length; j++) {
    if (arr1[i] == arr2[j]) {
      totArr1 += arr1[i] + arr2[j];
    }
  }
}
for (var i = 0; i < arr.length; i++) {
  totArr2 = totArr2 + arr[i];
}
const totArr = totArr2 - totArr1;
console.log(totArr);
