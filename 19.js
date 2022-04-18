var i=0;
var str=""
while (i<5){
  var j=5;
  while (j>i){
    str=str+j
    j=j-1
  }
  str+="\n"
  i+=1
}
console.log(str)
