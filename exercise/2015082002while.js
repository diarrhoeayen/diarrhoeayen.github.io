var total=0;
var num=1;
var count=0;

while(total<1000){
  total=total+num;
  num+=2;
  count+=1;

  document.write("第"+count+"次"+"<br>")
  document.write("total="+total+"<br>"+"<br>")
  
}