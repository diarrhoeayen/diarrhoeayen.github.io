var currentScene=0;

var changeScene = function(decision){

	switch(decision){
		case 1:
			currentScene=1;
		case 2:
			currentScene=1;
	}

	document.getElementById("sceneimg").src="scene"+currentScene+".png";

}