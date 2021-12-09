<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<!-- indv css set -->
<link rel="stylesheet" href="/resources/css/mgr/mgr_collections.css">
<script src="/resources/js/mgr/manager.js"></script>
</head>

<body>
	<div class="ad_con">
		<section>
			<h2>포트폴리오 관리</h2>
			
		</section>
		<section>
			<form id="collection_order_frm">
				<h2>Quality 포트폴리오</h2>
				<div class="portfolio_lst">
				
					
						<c:choose>
						<c:when test="${empty collst}">
							<div style=" height: 500px; width: 100%; text-align: center; position:relative; vertical-align: middle; top: 250px;">
								<h3>등록된 컬렉션이 없습니다.</h3>						
							</div>
						</c:when>
						<c:when test="${not empty collst}">
						<ul id="sortable_ul">
							<c:forEach items="${collst}" var="col" varStatus="status">
								<li class="li_collection_slot sort_box"><b class="collection_index">${col.col_order}</b>
								<input class="collection_order" type="hidden" name="collst[${status.index}].col_order" value="${col.col_order}">
								<input class="collection_id" type="hidden" name="collst[${status.index}].col_id" value="${col.col_id}"> 
								<img class="tq" src="http://adhq.co.kr/uploadfiles/${col.col_imgname}" alt=""> <span>${col.col_title}</span>
									<p>
										<a href="javascript:;" onclick="go_colletion_detail(${col.col_id})">수정하기</a> 
										<a href="javascript:;" onclick="delete_collection(${col.col_id},'${col.col_title}','${col.col_imgname}')">삭제</a>
									</p> 
									<img class="qt" src="/resources/images/ico/icon-order.svg" alt=""></li>
							</c:forEach>
							</ul>
						</c:when>
						</c:choose>
					
				</div>
			</form>
		</section>

	</div>
	<a href="/manager/new_collection" class="addnew"><img src="/resources/images/ico/icon-addnew.svg" alt=""></a>
</body>

</html>