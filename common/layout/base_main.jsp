<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html lang="ko">
<head>

<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="robots" content="all" />
<meta name="format-detection" content="telephone=no">
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"/>

<!-- page favicon set -->
<link rel="shortcut icon" href="/resources/images/favicon/favicon.ico">

<!-- common , style css load -->
<link rel="stylesheet" type="text/css" href="/resources/css/common/style.css"/>

<!-- etc css load -->
<link href='//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css' rel='stylesheet' type='text/css'>
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

<!-- jQuery , Ui load -->
<link rel="stylesheet" type="text/css" href="/resources/jquery-ui/common.css">
<script src="/resources/js/jQuery/jquery-3.6.0.min.js"></script>
<script src="/resources/jQuery-ui/common.js"></script>

<!-- etc script load -->
<script src="/resources/js/slick.min.js"></script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>


<!-- indv page title :: el -->
<title>${page_title}</title>

</head>

<!-- contents board -->
<body>

	<!-- header :: common header -->
	<tiles:insertAttribute name="header"/>
		
	<!-- body :: contents field-->
	<tiles:insertAttribute name="body"/>
	
	<!-- footer	::	common footer -->
	<tiles:insertAttribute name="footer"/>
	
</body>
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/css/swiper.min.css">
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/js/swiper.min.js"></script>
</html>