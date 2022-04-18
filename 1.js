let n = 5; // you can take input from prompt or change the value
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  // printing characters
  for (let j = 0; j < i; j++) {
    string += String.fromCharCode(j + 65);
  }
  string += "\n";
}
console.log(string);


var str=" ";
var i=0;
while (i<=5){
  var j=0
  while (j< i){
    str=str+String.fromCharCode(j+ 65)
    j=j+1
  }
  str=str+"\n"
  i=i+1
}
console.log(str)







