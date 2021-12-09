

const open = () => {
	document.querySelector(".modal").classList.remove("hidden");
}

const close = () => {
	document.querySelector(".modal").classList.add("hidden");
	initialize_additem_modal();
}

const add_collection_item = () => {
		var data = new FormData($("#additem_modal_frm")[0]);
	
		$.ajax({
			url  	: '/manager/add_new_collection_item',
			enctype: 'multipart/form-data',
			type 	:	'POST',
			async: false,
			processData: false,
			contentType: false,
			cache: false,
			data	:	data,
			success	:	function(response){
				if(response != 'REG_DONE'){
					alert(response);
				}
				else{
					alert('포트 폴리오 등록이 완료 되었습니다.');
					location.reload(true);
				}
			}
		 	
		});
}

$(function() {

	$.ajax({
		url: '/manager/get_collection_items',
		type: 'GET',
		success: function(data) {
			console.log('data ->>>>>> ');
			console.log(data);
		},
		error: function(e) {
			alert('컬렉션 포트폴리오 정보를 불러오는데 실패했습니다.');
		}
	})



	/* input[type=file] 변경시 업로드 이미지 미리보기 */
	$('#chg_thumbnail').on('change', function() {
		// 해당 요소와 부모요소를 인자로 readURL 함수 호출 이미지를 선택하여 input 태그에 할당하고
		// 해당 이미지를 미리 볼 수 있도록 설정 
		readURL(this, $(this).parents('#modify_collection_frm'));
		$('#collection_image_modifyChker').val(1);
	});

	document.querySelector(".closeBtn").addEventListener("click", close);
	document.querySelector(".btn_close_modal").addEventListener("click", close);
	document.querySelector(".bg").addEventListener("click", close);
	
	
	document.querySelector(".btn_add_item").addEventListener("click", add_collection_item);

	/* 드래그 처리될 항목 */
	$("#items_ul").sortable({
		placeholder: "sort_box_highlight",

		start: function(event, ui) {
			ui.item.data('start_pos', ui.item.index());
		},
		stop: function(event, ui) {
			var spos = ui.item.data('start_pos');
			var epos = ui.item.index();
			reorder_items();
		}

	});
	$("#items_ul").disableSelection();
	reorder_items();

	$('.open_modal_inner_file_input').on('click',function(){
		$('#modal_input_file').click();
	})
	
	$('#modal_input_file').on('change',function(){
		readURL_modal(this, $(this).parents('.modal_sect_img'));
		$('#modifyChker').val('1');
	});

});





/* 드래그 된 요소 재정렬 -> 정렬된 상태에서 인덱싱 값 처리 */
function reorder_items() {
	$(".sort_box").each(function(i, box) {
		//$(box).find("span").html('0' + Number(i + 1) + '.');
		$(box).find('.item_order').val(Number(i + 1));
		$(box).find('.item_index').text(Number(i + 1));
	});
	var data = new FormData($("#item_reorder_frm")[0]);
	console.log($("#item_reorder_frm"));
	console.log($("#item_reorder_frm")[0]);
	$.ajax({
		url		:		'/manager/reorder_collection_items',
		type	:		'POST',
		async	:		false,
		processData: false,
		contentType: false,
		cache: false,
		data	:		data,
		success	:	function(response){
			console.log('reorder_done')
		},
		error	:	function(e){
			alert('포트폴리오 재정렬 중 오류가 발생 했습니다.');
			console.log('ERROR ->> ',e);
		}
	});
}




/*업로드 하려는 이미지 미리보기 */
function readURL(input, parent) {
	if (input.files && input.files[0]) {

		var reader = new FileReader();

		reader.onload = function(e) {
			$('.thumbnail').children('.img-show').attr('src', e.target.result);

		};

		reader.readAsDataURL(input.files[0]);

	}
}

/*업로드 하려는 이미지 미리보기 _ 모달 팝업 */
function readURL_modal(input, parent) {
	if (input.files && input.files[0]) {

		var reader = new FileReader();
		console.log(parent);
		reader.onload = function(e) {
			parent.find('.modal_img_review').attr('src', e.target.result);

		};

		reader.readAsDataURL(input.files[0]);

	}
}

/* 모달창 입력내용 초기화 */
function initialize_additem_modal(){
	var init_target = $('#additem_modal');
		
	init_target.find('.btn_add_item').show();
    init_target.find('.btn_mod_item').hide();
	init_target.find('.modal_info_item_title').val('');
	init_target.find('#item_desc').val('');
	init_target.find('.modal_item_seq').val('');
	init_target.find('.modifyChker').val('0');
	init_target.find('.video_link').val('');
	init_target.find('.modal_sect_img input[type="file"]').val('');
	init_target.find('input[type="radio"]').prop('checked',false);
	init_target.find('.as_img').prop('checked',true);
	init_target.find('.modal_sect_img .modal_img_review').attr('src', '/resources/images/no-image.png');
	
}



function open_add_item_modal(){
	document.querySelector(".modal").classList.remove("hidden");
}

function load_item_info(item_seq){
	document.querySelector(".modal").classList.remove("hidden");
	
	
	
	$.ajax({
		url		:	'/manager/get_item_info',
		data	:	{
			'item_seq'	:	item_seq
		},
		type	:	'GET',
		success	: function(data){
			
			var init_target = $('#additem_modal');
			
			init_target.find('.btn_add_item').hide();
			init_target.find('.btn_mod_item').show();
			init_target.find('.modal_item_seq').val(data.item_seq);
			init_target.find('.modal_info_item_title').val(data.item_title);
			init_target.find('#item_desc').val(data.item_contents);
			
			var media_type = data.media_type;
			init_target.find('.imageAndVideo .modal_sect_img').append(
					'<input type="hidden" name="prev_img_name" value="' + data.item_imgname +'">'
					
					);
			if(media_type == 1) {
				init_target.find('input[type="radio"]').prop('checked',false);
				init_target.find('#media_type_img').prop('checked',true);
				init_target.find('.modifyChker').val(0);
				
				init_target.find('.modal_img_review').attr('src','http://adhq.co.kr/uploadfiles/'+data.item_imgname);
			}
			
			
			
			else if(media_type == 2) {
				init_target.find('input[type="radio"]').prop('checked',false);
				init_target.find('#media_type_link').prop('checked',true);
				init_target.find('.video_link').val(data.video_link);
			}
				
				
			
		}
	});
	
}

function modify_collecton_info(){
	var data = new FormData($("#modify_collection_frm")[0]);
	
		$.ajax({
			url  	: '/manager/modify_collection_info',
			enctype: 'multipart/form-data',
			type 	:	'POST',
			async: false,
			processData: false,
			contentType: false,
			cache: false,
			data	:	data,
			success	:	function(response){
				if(response != 'COL_MOD_DONE'){
					alert(response);
				}
				else{
					alert('컬렉션 정보 수정이 완료 되었습니다.');
					location.reload(true);
				}
			},
			error 	:	function(e){
				alert('컬렉션 정보 변경 중 에러가 발생하였습니다.\n컬렉션 정보를 변경 할 수 없습니다.');
				console.log('ERROR ->>' , e); 
			}
		 	
		});
	
}

function modify_item(){
	var data = new FormData($("#additem_modal_frm")[0]);
	if(chk_modify_item_value()){
		$.ajax({
			url  	: '/manager/modify_collection_item',
			enctype: 'multipart/form-data',
			type 	:	'POST',
			async: false,
			processData: false,
			contentType: false,
			cache: false,
			data	:	data,
			success	:	function(response){
				if(response != 'MOD_DONE'){
					alert(response);
				}
				else{
					alert('포트폴리오 수정이 완료 되었습니다.');
					location.reload(true);
				}
			},
			error	:	function(e){
				alert('포트폴리오 정보 변경 중 에러가 발생하였습니다.\n포트폴리오 정보를 변경 할 수 없습니다.');
			}
		 	
		});
	}
}

function chk_modify_item_value(){
	
	var item_title = $('#mod_item_title').val();
	var media_type = $('.media_type_chker:checked').val();
	var upload_img = $('#modal_input_file').val();
	var videolink = $('#video_link').val();
	
	if(item_title ==  null || !item_title || item_title == ''){
		alert('포트폴리오 제목을 확인 해 주세요.');
		return false;
	}
	if(media_type == 1 ){
		if(upload_img == '' || upload_img == null || !upload_img){
			alert("업로드 할 이미지를 확인 해 주세요.");
			return false;
			}
	}else if(media_type == 2){
		if(videolink == '' || videolink == null || !videolink){
			alert("등록하실 영상 링크를 확인 해 주십시오.");
			return false;
		}
			
	}
	
	return true;
}

function delete_item(item_seq, title, imgname){
	var chk_del  = confirm(
		'* 포트폴리오 명 : ' + title +
		'\n해당 컬렉션을 삭제 하시겠습니까 ?'
	);
	
	if(chk_del){
		
		
		$.ajax({
			url		:		'/manager/delete_collection_item',
			data	:	{
				"item_seq"	:	item_seq,
				"item_imgname"	:	imgname
			},
			type	:	"POST",
			success	:	function(response){
				if(response == 'ITEM_DEL_DONE')
					alert('포트폴리오 삭제가 완료되었습니다.');
					location.reload(true);
			},
			error	:	function(e){
				alert('포트폴리오 삭제 중 오류가 발생하였습니다.\n다시 확인 바랍니다.');
			}
		});
	}
	
	
}