$(function() {
	/* 드래그 처리될 항목 */
	$("#sortable_ul").sortable({
		placeholder: "sort_box_highlight",

		start: function(event, ui) {
			ui.item.data('start_pos', ui.item.index());
		},
		stop: function(event, ui) {
			var spos = ui.item.data('start_pos');
			var epos = ui.item.index();
			reorder_collections();
		}

	});
	$("#sortable_ul").disableSelection();
	
	reorder_collections();
	
	
});

/* 드래그 된 요소 재정렬 -> 정렬된 상태에서 인덱싱 값 처리 */
function reorder_collections() {
	$(".sort_box").each(function(i, box) {
		$(box).find('.collection_order').val(Number(i + 1));
		console.log("num -> " + Number(i + 1))
		$(box).find('.collection_index').text(Number(i + 1));
	});
	
	
	var data = new FormData($("#collection_order_frm")[0]);
	
	$.ajax({
			url  	: '/manager/reorder_collections',
			type 	:	'POST',
			async: false,
			processData: false,
			contentType: false,
			cache: false,
			data	:	data,
			success	:	function(response){
				console.log('collection reorder Success');
				//location.reload(true);
			},
			error 	:	function(e){
				console.log('error ->>' ,e);
				alert('컬렉션 순서 재정렬 오류가 발생했습니다.')
			}
		 	
		});
	
}


function go_colletion_detail(col_id){
	location.href = "/manager/colletion_detail?col_id=" + col_id;	
}



function delete_collection(col_id, title, imgname){
	var chk_del  = confirm(
		'* 컬렉션 명 : ' + title +
		'\n해당 컬렉션을 삭제 하시겠습니까 ?'
	);
	
	if(chk_del){
		console.log(col_id);
		console.log(title);
		console.log(imgname);
		
		
		$.ajax({
			url		:		'/manager/delete_collection',
			data	:	{
				"col_id"	:	col_id,
				"col_imgname"	:	imgname
			},
			type	:	"POST",
			success	:	function(response){
				if(response == 'COL_DEL_DONE')
					alert('컬렉션 삭제가 완료되었습니다.')
					location.reload(true);
			},
			error	:	function(e){
				alert('컬렉션 삭제 중 오류가 발생하였습니다.\n다시 확인 바랍니다.');
			}
		});
	}
	
	
}