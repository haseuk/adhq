<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/resources/css/mgr/mgr_new_collection.css">
<script src="/resources/js/mgr/new_collection.js"></script>
</head>
<div class="ad_con">
		<section>
			<h2>포트폴리오 관리</h2>
		</section>
		<section>
			<h2>Quality 포트폴리오</h2>
			<div class="portfolio_lst">
				<form id="frm_collection">
					<!-- 
					<div>
						<h3>글순서 <em>8번</em></h3>
					</div>
					 -->
					<div>
						<h3>제목</h3>
						<input type="text" name="col_title" class="noinputborder required-input" placeholder="제목을 입력하세요.">
						<span class="noinput">제목은 필수 입력값입니다.</span>
					</div>
					<div>
						<p>
							<h3>썸네일 이미지</h3>
							<div class="thumbnail noinputborder img-slot">
								<img src="/resources/images/ico/icon-noimg.svg" alt="">
							</div>
						</p>
						<p>
							<!-- <button type="button">이미지 수정</button> -->
							<label class="label_for_file" for="collection_thumb">이미지 수정</label>
							<input id="collection_thumb" name="collection_thumb_file" type="file">
							<span>1000*600px 해상도의 이미지로 업로드해주세요.</span>
						</p>
						<span class="noinput">썸네일 이미지는 필수 입력값입니다.</span>
					</div>
					<div class="portfolio_detail">
						<div>
							<h3>포트폴리오 상세<a href="javascript:;" class="not_oper"><img src="/resources/images/ico/icon-plus.svg" alt="">새 포트폴리오 추가</a></h3>
						</div>
						<div>
							<button class="not_oper" type="button">
								<img src="/resources/images/ico/icon-addpf.svg" alt="">
								<span>새로운 포트폴리오를 추가해보세요!</span>
							</button>
						</div>
					</div>
					
					<div class="modify_btn">
						<a href="/manager/collections">편집취소</a>
						<a href="javascript:;" onclick="regist_collection()">완료</a>
					</div>
				</form>
			</div>
		</section>
	</div>
</html>