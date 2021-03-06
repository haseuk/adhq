<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<link rel="stylesheet" href="/resources/css/indv/main_qua_detail.css">
<link rel="stylesheet" href="/resources/css/edi-style.css">
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

<div class="quality_container">
	<header>
		<a href="/"><img src="/resources/images/ico/logo-adhqtx-sm.svg" alt=""></a>
	</header>
	<div class="quality_zone">
		<div class="qua_top">
			<img src="/resources/images/pic/txt-img-quality.svg" alt=""> <span>“Creative
				Essence” 경험과 노하우로 클라이언트를<br class="mo"> 찾아갑니다.</span>
		</div>
		<div class="qua_bottom">
			<ul>
			<c:forEach var="col" items="${contents}" varStatus="status">
				<div class="con_wrap">
					<button class="openBtn open_item_lst">
						<li><img class="collection_thumb" src="http://adhq.co.kr/uploadfiles/${col.col_imgname}"></li>
					</button>
					<div class="modal hidden">
						<div class="bg"></div>
						<div class="modalBox">
							<div>
								<div class="swiper-container">
									<div class="swiper-wrapper">
										<c:forEach var="item" items="${col.collection_lst}" varStatus="status2">
										<div class="swiper-slide">
											<p>
												<b class="swiper_top">${item.item_title}</b>
												<c:choose>
												<c:when test="${item.media_type eq  '1'}">
													<div class="zz" >
														<img class="item_thumb" src="http://adhq.co.kr/uploadfiles/${item.item_imgname}">
																
													</div>
												</c:when>
												
												
												<c:when test="${item.media_type eq  '2'}">
													<div class="zz" style="z-index: 999; position: relative;">
														<iframe width="100%" src="${item.video_link}" title="YouTube video player"
															frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
															allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
													</div>
												</c:when>
											</c:choose>
												
											
											<span class="swiper_bottom">${item.item_contents}</span>
											</p>
										</div>
										</c:forEach>
										
									</div>
									<div class="swiper-button-prev"></div>
									<div class="swiper-button-next"></div>
									<div class="swiper-pagination"></div>
								</div>
							</div>
							<button class="closeBtn detail-close"><img src="/resources/images/pic/x.png" alt="" class="x"></button>
						</div>
					</div>
				</div>
				</c:forEach>
			</ul>
		</div>
	</div>
</div>
<footer>
	<span>Copyright(C)2013 <b>ADHQ</b> Corporation.<br class="mo"> ALL RIGHT
		RESERVED.
	</span>
</footer>

<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/css/swiper.min.css">
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/js/swiper.min.js"></script>
<script src="/resources/js/client/client_view_detail.js"></script>