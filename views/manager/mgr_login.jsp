<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>

<!-- indv css set -->
<link rel="stylesheet" type="text/css" href="/resources/css/mgr/mgr_login.css"/>
</head>
 
<form action="/account/loginproc" method="post">
<div id="container">
    <section class="login_zone">
      <div class="login_area clear">
        <div class="login_lt">
          <p>
            <img class="adhq_logo_pic" src="/resources/images/pic/logo-adhq.svg" alt="">
          </p>
        </div>
        <div class="login_rt">
          <div class="log_rt_wrap">  
            <div class="log_rt_top">
              <h2><img src="/resources/images/pic/logo-adhq.svg" alt=""></h2>
              <span>ADMIN LOGIN</span>
            </div>
            <div class="log_rt_form">
              <form action="">
                <fieldset>
                  <div class="email_form">
                    <img src="/resources/images/ico/icon-id.svg" alt="">
                    <input type="text" name="mgr_id" placeholder="아이디를 입력해주세요.">
                  </div>
                  <div class="pw_form">
                    <img src="/resources/images/ico/icon-pw.svg" alt="">
                    <input type="password" name="passwd" placeholder="비밀번호를 입력해주세요.">
                  </div>
                  <c:if test="${not empty loginErrmsg}">
                  <c:set var="errMsg" value="${loginErrmsg}"></c:set>
                  <script type="text/javascript">
                  var errmsg = "${errMsg}"
                  
                  alert(errmsg);
                  </script>
                  
                  </c:if>
                  <div class="log_btn">
                    <a href="javascript:;"><button type="submit">로그인</button></a>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</form>  
</html>