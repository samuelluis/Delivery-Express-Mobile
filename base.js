var ch = null;
$(function(){
	$("input").keyup(function(){
		$(this).removeClass("invalid");
	});

	ch = new CustomHammer([$("#page11 canvas")[0],$("#page23 canvas")[0],$("#page24 canvas")[0]]);

	$("#planning_list").sortable();
	$("#planning_list").disableSelection();

	adjustSign();
	$(window).resize(function() {
		adjustSign();
	});
});

function adjustSign(){
	w = $(window).width();
	h = $(window).height();
	$("canvas").attr("width",(w-30)+"").attr("height", (h-140)+"");
	$("canvas").css("width",(w-30)+"px").css("height", (h-140)+"px");
}

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

function clearCanvas(index){
	ch.clear(index);
}

function openModal(message){
	$("#modal").popup({ overlayTheme: "a" });

	$("#modal-screen").click(function(e){stopCalls(e);});
	$( "#modal" ).popup( "open" );
	$.mobile.loading( 'show', {
		text: message,
		textVisible: true,
		theme: 'a',
		html: ""
	});
	setTimeout("closeLoader()", 3500);
}

function closeLoader(){
	$.mobile.loading( 'hide' );
	$( "#modal" ).popup( "close" );
	$("#home_continue").removeClass("ui-disabled");
}