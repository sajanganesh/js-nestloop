let n = 5;
let string = "";
let count = 0;
// External loop
for (let i = 1; i <= n; i++) {
  // creating spaces
  for (let j = 0; j < n - i; j++) {
    string += " ";
  }
  // creating alphabets
  for (let k = 0; k < 2 * i - 1; k++) {
    string += String.fromCharCode(count + 65);
    count++;
  }
  string += "\n";
}
console.log(string);