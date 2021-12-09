
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
	console.log("gi")
	$.ajax({
		url: '/client/get_collections',
		type: 'GET',
		success: function(data) {
			console.log(data);

		}
	});

	document.querySelector(".openBtn").addEventListener("click", open);
	document.querySelector(".bg").addEventListener("click", close);
	document.querySelector(".closeBtn").addEventListener("click", close);

});



$('.qua_bottom li a').on('click', function(e) {
	e.preventDefault();
})
