<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<!-- indv css set -->
<link rel="stylesheet" href="/resources/css/mgr/mgr_collection_detail.css">
</head>
<c:set var="collection_id" value="${col_id}"></c:set>
<script>
	var collection_id = "${collection_id}";
</script>
	<div class="ad_con">
		<section>
			<h2>포트폴리오 관리</h2>
			
		</section>
		<section>
			<h2>Quality 포트폴리오</h2>
			<div class="portfolio_lst">
			<form id="modify_collection_frm">
				<div>
					<h3>글순서 <em>${collection.col_order}번</em></h3>
				</div>
				<div>
					<h3>제목</h3>
					<input type="text" name="col_title" value="${collection.col_title}">
				</div>
				<div>
					<p>
						<h3>썸네일 이미지</h3>
						<div class="thumbnail">
							<img class="img-show" src="http://adhq.co.kr/uploadfiles/${collection.col_imgname}" alt="">
							<input type="hidden" name="col_prev_imgname" value="${collection.col_imgname}">
						</div>
					</p> 
					<p>	
						<label class="label_for_file" for="chg_thumbnail">이미지 수정</label>
						<span>1000*600px 해상도의 이미지로 업로드해주세요.</span>
						<input id="chg_thumbnail" type="file" name="collection_thumb_file" class="img_upload" style="display: none;"> 
						<input id="collection_image_modifyChker" name ="collection_image_modifyChker" class="collection_image_modifyChker" value="0" type="hidden" >
					</p>
				</div>
			</form>
					<form id="item_reorder_frm">
					<div class="ul_wrapper" >
						<h3>포트폴리오 상세 <button type="button" class="openBtn" onclick="open_add_item_modal()"><img src="/resources/images/ico/icon-plus.svg" alt="">새 포트폴리오 추가</button></h3>
						<c:choose>
						<c:when test="${empty collection_items }">
						<div class="add_box_wrapper">
							<button type="button" class="open_add_item_modal" onclick="open_add_item_modal()">
								<img src="/resources/images/ico/icon-addpf.svg" alt="">
								<span>새로운 포트폴리오를 추가해보세요!</span>
							</button>
						</div>
						
						</c:when>
						
						<c:when test="${not empty collection_items }">
						
							<ul id="items_ul" >
								<c:forEach var="item" items="${collection_items}" varStatus="status">
								<li class="item_slot sort_box" title="드래그하여 포트폴리오 순서를 변경합니다.">
									<b class="item_index">
										${item.item_order}
									</b>
									<input class="item_order" type="hidden" value="${item.item_order}" name="col_lst[${status.index}].item_order">
									<input type="hidden" value="${item.item_seq}" name="col_lst[${status.index}].item_seq">
									<c:choose>
										<c:when test="${item.media_type eq  '1'}">
											<img class="tq collection_thumbnail" src="http://adhq.co.kr/uploadfiles/${item.item_imgname}" alt="아이템 썸네일">	
										</c:when>
										<c:when test="${item.media_type eq  '2'}">
											<img class="tq collection_thumbnail" src="/resources/images/img-videothumb.jpg" alt="아이템 썸네일">									
										</c:when>
									</c:choose>
									
									<span>${item.item_title}</span>
									<p>
										<a class="modify_collection_item" href="javascript:;" onclick="load_item_info(${item.item_seq})">수정하기</a>
										<a  href="javascript:;" onclick="delete_item('${item.item_seq}','${item.item_title}','${item.item_imgname}')">삭제</a>
									</p>
									<img class="qt" src="/resources/images/ico/icon-order.svg" alt="">
								</li>
								</c:forEach>
							</ul>
						</c:when>
						</c:choose>
					</div>
					</form>
				<div class="modify_btn">
					<a href="/manager/collections">편집취소</a>
					<a href="javascript:;" onclick="modify_collecton_info()">완료</a>
				</div>
				
			</div>
		</section>
	</div>
<form id="additem_modal_frm">
	<div id="additem_modal" class="modal hidden">
		<div class="bg"></div>
		<div class="modalBox">
			<p>
			<div>
				<input type="hidden" name="col_id" value=""> 
				<label for="">컬렉션 제목</label><span class="modal_info_collection_title">${collection.col_title}</span>
			</div>
			<div>
				<label for="">포트폴리오 순서</label><b>${collection.col_order}번</b>
			</div>
			<div>
				<input type="hidden" name="item_seq" class="modal_item_seq">
				<label class="label_for_title" for="">포트폴리오 제목</label> 
				<input class="modal_info_item_title" type="text" name="item_title" id="mod_item_title" placeholder="포트폴리오 제목을 입력해 주세요.">
			</div>
			<div>
				<label class="label_for_item_desc" for="item_desc">포트폴리오 내용</label>
				<textarea name="item_contents" id="item_desc" placeholder="내용을 입력해주세요."></textarea>
			</div>
			<div>
				<label for="" class="sec_label">포트폴리오 이미지 / 동영상 등록</label>
				<div class="imageAndVideo">
					<section class="modal_sect_img">
						<label for="media_type_img">
					
						<input type="radio" id="media_type_img" name="media_type" class="media_type_chker as_img" checked="checked" value="1">이미지로 등록
							<div class="area_modal_img_review">
							<img src="/resources/images/no-image.png" class="modal_img_review">
							</div>
							<p>
								<button type="button" class="image_modify open_modal_inner_file_input">수정하기</button>
								<input type="hidden" id="modifyChker" name="modifyChker" class="modifyChker"  value="0"> 
								<input type="file" id="modal_input_file" name="item_thumbnail">
								<span>가로 1500px 해상도의 이미지로 업로드해주세요.</span>
							</p></label>
							
					</section>
					<section class="modal_sect_video">
						<label for="media_type_link">
						<input type="radio" id="media_type_link" name="media_type" class="media_type_chker as_link" value="2">동영상 링크등록
						<input id="video_link" class="video_link" name="video_link" type="text" placeholder="Youtube 임베디드 링크를 삽입해주세요.">
						<button type="button" class="video_link">링크등록</button></label>
						<span class="example_text">ex)&nbsp;&nbsp;https://www.youtube.com/embed/<b>GgyZ5i5HzCU</b>&nbsp;&nbsp;&nbsp;</span>
					</section>
				</div>
			</div>
			<div class="modal_btn">
				<button class="btn_close_modal" type="button">취소</button>
				<button class="btn_add_item" type="button">저장</button>
				<button class="btn_mod_item" type="button" onclick="modify_item();" style="display: none;">수정</button>
			</div>
			</p>
			<button type="button" class="closeBtn">X Close</button>
		</div>
	</div>
</form>
<script src="/resources/js/mgr/collection_detail.js"></script>
</html>

