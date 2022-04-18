// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1


var i=1;
var str=""
while (i<6){
  var j=1;
  while (j<6-i){
    str=str+j
    j=j+1
  }
  str+="\n"
  i+=1
}
console.log(str)

