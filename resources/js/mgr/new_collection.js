$(function() {
	/* input[type=file] 변경시 업로드 이미지 미리보기 */
	$('#collection_thumb').on('change', function() {
		// 해당 요소와 부모요소를 인자로 readURL 함수 호출 이미지를 선택하여 input 태그에 할당하고
		// 해당 이미지를 미리 볼 수 있도록 설정 
		readURL(this, $(this).parents('#frm_collection'));
	});
	
		$('.not_oper').on('click',function(){
		not_oper_serv();
	});
	
	
});
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
	var formdata = new FormData($("#frm_collection")[0]);

	/* 기타 유효성 검사 후 */
	if(chk_require_input_collection()){

		$.ajax({
		url			: "/manager/upload_collection",
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
			if (response != 'REG_SUCCESS') {
				alert(response);
			}
			else {
				alert('포트폴리오 등록이 완료되었습니다.');
				location.href="/manager/collections";
			}
		}
		});
	}
}


function chk_require_input_collection(){
	var input_lst = $('.required-input');
	
	for(i=0; i<input_lst.length; i++){
		var input_value = $(input_lst[i]).val();
		if(!input_value || input_value ==null){
			alert(' 입력 값을 확인해 주십시오. ');
			return false;
		}
	}
	return true;	
}


function not_oper_serv(){
	alert('컬렉션을 먼저 등록해주세요!');
}
