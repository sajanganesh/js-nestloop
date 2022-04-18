let n = 5;
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  // printing characters
  for (let j = 0; j < i; j++) {
    string += String.fromCharCode((i - 1) + 65);
  }
  string += "\n";
}
console.log(string);


var str=" "
var i=0
while (i<=5){
  var j=0
  while (j<i){
    str+=String.fromCharCode((i-1)+65)
    j=j+1
  }
  str+="\n"
  i=i+1
}
console.log(str)