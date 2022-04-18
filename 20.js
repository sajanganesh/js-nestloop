// 5 5 5 5 5
// 4 4 4 4
// 3 3 3
// 2 2
// 1

var i=5;
var str=""
while (i>0){
  var j=0;
  while (j<i){
    str=str+i
    j=j+1
  }
  str+="\n"
  i-=1
}
console.log(str)

