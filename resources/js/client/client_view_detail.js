
const open = () => {
	document.querySelector(".modal").classList.remove("hidden");
	$("body").css({ 'overflow-y': 'hidden' });
}

const close = () => {
	document.querySelector(".modal").classList.add("hidden");
	$("body").css({ 'overflow-y': 'visible' });
	// alert('click');
}




$(function() {
	$('.open_item_lst').on('click',function(){
		$(this).parent().find('.modal').removeClass("hidden");
		$("body").css({ 'overflow-y': 'hidden' });
	});
	
	$('.bg , .closeBtn').on('click',function(){
		$(this).parents('.modal').addClass("hidden");
		$("body").css({ 'overflow-y': 'visible' });
	});
});


function open_item_lst_modal(tag){
	
}

$('.qua_bottom li a').on('click', function(e) {
	e.preventDefault();
})
