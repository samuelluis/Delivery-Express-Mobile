$(function(){
	$("input").keyup(function(){
		$(this).removeClass("invalid");
	});

	new CustomHammer([$("#page11 canvas")[0],$("#page23 canvas")[0],$("#page24 canvas")[0]]);
});

function validate(form_id, e){
	var valid = true;
	$(form_id+" input").each(function(){
		if($(this).val()=="" || !$(this)[0].checkValidity()){
			valid = false;
			$(this).addClass("invalid");
		}
	});
	if(!valid) stopCalls(e);

	return valid;
}

function validateCheck(form_id, e){
	var valid = false;
	$(form_id+" input").each(function(){
		if($(this).attr("checked")=="checked") valid = true;
	});
	if(!valid) stopCalls(e);

	return valid;
}

function stopCalls(e){
	var event = e || window.event;
	if (event.stopPropagation) {
		event.stopPropagation();
	} else {
		event.cancelBubble = true;
	}
}

function clearCanvas(page_id){
	canvas = $(page_id+" canvas")[0];
	ctx = canvas.getContext("2d");
	ctx.clearRect (0, 0, 290, 400);
}