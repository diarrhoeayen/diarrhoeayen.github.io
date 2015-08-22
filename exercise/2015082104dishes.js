$("#vegOn").click(function(){
	$("li.fish").parent().parent().detach();
	$(".bread").replaceWith('<li class="prtobello">龍葵菇</li>');
	$(".meat").replaceWith('<li class="prtobello">豆腐</li>');
	$(".prtobello").parent().parent().addClass("veg_leaf");
});
