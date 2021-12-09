$(function() {
	
	/* some tag intilize */
	$('.hover_btn').hide();

	/* 드래그 처리될 항목 */
	$("#sortable").sortable({
		placeholder: "sort_box_highlight",

		start: function(event, ui) {
			ui.item.data('start_pos', ui.item.index());
		},
		stop: function(event, ui) {
			//console.log('end point : ' + ui.item.val());
			var spos = ui.item.data('start_pos');
			var epos = ui.item.index();
			reorder();
		}

	});
	$("#sortable").disableSelection();


	/* :: 컬렉션 모달 :: */
	/* POPUP MODAL OPEN */
	$('.addcol_modal_open').on('click', function(e) {
		$('.addcol_modal').fadeIn(200);
		e.preventDefault();
	});
	/* POPUP MODAL CLOSE */
	$('.addcol_modal_close, .cancel_regist').on('click', function(e) {
		
		close_regist_modal();
		$('.addcol_modal').fadeOut(150);
		e.preventDefault();
	});
	
	/* :: 아이템 모달 :: */
	/* POPUP MODAL OPEN */
	$('.edit_modal_open').on('click', function(e) {
		$('.additem_modal').fadeIn(200);
		e.preventDefault();
	});

	/* POPUP MODAL CLOSE */
	$('.additem_modal_close, .cancel_regist').on('click', function(e) {
		
		close_regist_modal();
		$('.additem_modal').fadeOut(150);
		e.preventDefault();
	});
	

	/* input[type=file] 변경시 업로드 이미지 미리보기 */
	$('#collection_thumb').on('change', function() {
		// 해당 요소와 부모요소를 인자로 readURL 함수 호출 이미지를 선택하여 input 태그에 할당하고
		// 해당 이미지를 미리 볼 수 있도록 설정 
		alert('!!!')
		readURL(this, $(this).parents('#frm_new_collection'));
	});


	/* 컬렉션 섬네일 hover 이벤트 */
	$(".collection_slot").mouseover(function(){
		$(this).find('img').css("opacity",'0.3');
		$(this).find('.collection_info').show();
		$(this).css("background-color",'rgba(0,0,0, 0.9)');
		$(this).find('.hover_btn').show();
		$(this).find('.hover_btn').css("opacity",'1');
    }).mouseout(function(){
	$(this).find('.collection_info').hide();
		$(this).find('img').css("opacity",'1');
		$(this).find('.hover_btn').hide();
		$(this).find('.hover_btn').css("opacity",'0');
    });

});

/* 드래그 된 요소 재정렬 -> 정렬된 상태에서 인덱싱 값 처리 */
function reorder() {
	$(".sort_box").each(function(i, box) {
		$(box).find("span").html('0' + Number(i + 1) + '.');
		$(box).find('.mb_order').val(Number(i + 1));
	});
}


/* 포트폴리오 등록 모달창 닫힘 */
function close_regist_modal(){
	var thumbArea = $('.modal_area_left .collcetion_thumb_area');
	var textArea = $('.modal_area_right .area_input');
	/* input[type=file] 값 초기화 */
		$('.modal_area_left input[type=file]').val("");
		thumbArea.empty();
		thumbArea.addClass('no-img');
		thumbArea.html(
			'<span class="add_marker">+</span>'
		);
		
	textArea.find('input, textarea').val('');
}


/*업로드 하려는 이미지 미리보기 */
function readURL(input, parent) {
	if (input.files && input.files[0]) {

		var reader = new FileReader();
		var thumbBox = parent.find('.thumbnail');
		var fWidth = thumbBox.width();
		var fHeight = thumbBox.height();

		// 업로드를 시도하면 해당 값 안에서 초기화
		thumbBox.empty();
		thumbBox.html(
			'<img class="img-show" style="width:' + Number(fWidth) + 'px;' +
			'height:' + Number(fHeight) + 'px;">');

		reader.onload = function(e) {
			thumbBox.removeClass('no-img');
			thumbBox.children('.img-show').attr('src', e.target.result);

		};

		reader.readAsDataURL(input.files[0]);

	} else {
		removeUpload();
	}
}

/* 컬렉션 등록 :: $ > ajax  */
function regist_collection() {
	/* 입력 , 전송 form data setting :: 타겟 설정 필수 */
	var formdata = new FormData($("#regist_collection_frm")[0]);

	/* 기타 유효성 검사 후 */
	if(regist_frm_chker($("#regist_collection_frm"))){

		$.ajax({
		url			: "/regist/upload_collection",
		enctype		: 'multipart/form-data',
		processData	: false,
		contentType	: false,
		data		: formdata,
		type		: "POST",
		/*
		beforeSend	: function(xhr) {
			xhr.setRequestHeader(header, token);
		},
		*/
		success     : function(response) {
			if (response == 'collection_regist_success') {
				alert('포트폴리오 등록이 완료되었습니다.');
				location.reload(true);
			}
			else {
				alert(response);
			}
		}
		});
	}


}

/* 컬렉션 아이템 등록 :: $ > ajax  */
function regist_collection_item() {
	/* 입력 , 전송 form data setting :: 타겟 설정 필수 */
	var formdata = new FormData($("#regist_item_frm")[0]);
	
	if(regist_frm_chker($("#regist_item_frm"))){
		/* 기타 유효성 검사 후 */
		$.ajax({
			url			: "/regist/upload_collection_item",
			enctype		: 'multipart/form-data',
			processData	: false,
			contentType	: false,
			data		: formdata,
			type		: "POST",
			/*
			beforeSend	: function(xhr) {
				xhr.setRequestHeader(header, token);
			},
			*/
			success     : function(response) {
				if (response == 'item_regist_success') {
					alert('포트폴리오 등록이 완료되었습니다.');
					location.reload(true);
				}
				else {
					alert(response);
				}
			}
		});
	}
}

/* 컬렉션 , 아이템 등록 form 체커 */
// 내부 inner space의 입력 폼이 같이 떄문에 공동으로 호출하며
//구분된 form 태그의 ID로 각 필드 체크 
function regist_frm_chker(target_form){
	var inputs  = target_form.find('.area_input input');
	
	for(i=0;i<inputs.length; i++){
		var value = $(inputs[i]).val();
		
		if( value == null || value == '' )	{
			alert("입력사항을 확인 해 주십시오.");
			return false;
		}
	}
	
	return true;
}



function get_collection_detail(col_id){
	
	$.ajax({
		url			: "/mgr/get_collection_detail",
		data		: {
			"col_id"	:	col_id
		},
		type		: "POST",
		success 	:	function(response){
			
			$('#regist_collection_frm').find('.col_id').val(response["col_id"]);
			$('#regist_collection_frm').find('.input_colname').val(response["col_name"]);
			$('#regist_collection_frm').find('.input_title').val(response["col_title"]);
			$('#regist_collection_frm').find('.input_contents').val(response["col_contents"]);
			$('#regist_collection_frm').find('.collcetion_thumb_area').html(
								'<img class="img-show" style="width:333.02px;' +
								'height:300px;">');
			$('#regist_collection_frm').find('.img-show').attr('src','http://adhq.co.kr/uploadfiles/'+response["col_imgname"]);
			
			$('.addcol_modal').fadeIn(200);
			
		}
	});
}


function get_collection_items(col_id){
	
		$.ajax({
		url			: "/mgr/get_collection_items",
		data		: {
			"col_id"	:	col_id
		},
		type		: "POST",
		success 	:	function(response){
			var roop = response.length;
			//const map = new Map(JSON.parse(response));
			
			//console.log(map.size);
			console.log(response.length);
			console.log(typeof(response));
			console.log(response);
			console.log(response[0]["item_seq"]);
			
			/* 불러온 리스트 가 배치될 root tag 초기화 */
			$('.area_items_lst').empty();

			/* 서버로 부터 전달받은 컬렉션 아이템 리스트 배치 */
			for(i=0; i<roop; i++){
				$('.lst_contents_area').append(
					'<div class="item_slot">'+
					'<img alt="" src="http://adhq.co.kr/uploadfiles/' + response[i]['item_imgname'] +'">'+
					'<p class="item_info">'+
					'<span>제목 :' + response[i]['item_title'] +' </span>'+
					'<br><br><br>'+
					'<span>' +  response[i]['item_contents'] + '</span>'+
					'</p>'+
					'<button class="hover_btn" type="button" onclick="">컬렉션수정</button>'+
					'<button class="hover_btn" type="button" onclick="">아이템 불러오기</button>'+
					'</div>'
				);
			}		
			$('.area_items_lst').show();	
		}
	});
}

