// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

var i=0;
var str=""
while (i<5){
  var j=0;
  while (j<i){
    str=str+i
    j=j+1
  }
  str+="\n"
  i+=1
}
console.log(str)


