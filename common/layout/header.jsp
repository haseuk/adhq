<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set var="root" value="${pageContext.request.contextPath }/"/>
<header>
	<div style="cursor: pointer;">
		<img class="logo_adhq"  src="/resources/images/ico/logo-header.svg" alt="" onclick="location.href='/manager/collections'">
	</div>
	<div>
		<span>관리자님, 환영합니다!</span>
		<button type="button" onclick="location.href='/account/logout'">로그아웃</button>
		<img src="/resources/images/ico/icon-profile.svg" alt="">
	</div>
</header>
