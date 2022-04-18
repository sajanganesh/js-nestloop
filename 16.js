var i=0;
var str=""
while (i<5){
  var j=0;
  while (j<5-i){
    str=str+i
    j=j+1
  }
  str+="\n"
  i+=1
}
console.log(str)

