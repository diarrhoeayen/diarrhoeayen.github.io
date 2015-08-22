var answer="1234";
var guessNum;

while(answer!==guessNum){
	var guessNum=prompt("input four different numbers");
	var countA=0;
	var countB=0;
	for(var i=0;i<answer.length;i+=1){
		for(var j=0;j<guessNum.length;j+=1){
			if(answer[i]===guessNum[j]){
				if(i===j){
					countA+=1;
				}
				else{
					countB+=1;
				}
			}
		}
	}
	document.write("your guess: "+guessNum+"<br>"+"result: "+countA+"A"+countB+"B"+"<br>"+"<br>");
}



if(answer==guessNum){
	document.write("success!");
}