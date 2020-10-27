<html>
<head>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

<title>회원가입</title>

<!-- Bootstrap core CSS -->
<link rel="canonical" href="https://getbootstrap.com/docs/4.5/examples/sign-in/">
<link href="/resources/assets/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="/resources/css/signin.css" rel="stylesheet">
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</head>
<style>
.bd-placeholder-img {
	font-size: 1.125rem;
	text-anchor: middle;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}
@media ( min-width : 768px) {
.bd-placeholder-img-lg {
	font-size: 3.5rem;
}
}
</style>
	<script type="text/javascript">
		$(document).ready(function(){
			// 취소
			$(".cencle").on("click", function(){
				
				location.href = "/login";
						    
			})
		
			$("#submit").on("click", function(){
				if($("#user_id").val()==""){
					alert("아이디를 입력해주세요.");
					$("#user_id").focus();
					return false;
				}
				if($("#pw").val()==""){
					alert("비밀번호를 입력해주세요.");
					$("#pw").focus();
					return false;
				}
				if($("#name").val()==""){
					alert("성명을 입력해주세요.");
					$("#name").focus();
					return false;
				}
			});
		});
	    $('.form-control').focusout(function () {
	        var pwd1 = $("#pw").val();
	        var pwd2 = $("#inputPassword").val();
	 
	        if ( pwd1 != '' && pwd2 == '' ) {
	            null;
	        } else if (pwd1 != "" || pwd2 != "") {
	            if (pwd1 == pwd2) {
	                $("#alert-success").css('display', 'inline-block');
	                $("#alert-danger").css('display', 'none');
	            } else {
	                alert("비밀번호가 일치하지 않습니다. 비밀번호를 재확인해주세요.");
	                $("#alert-success").css('display', 'none');
	                $("#alert-danger").css('display', 'inline-block');
	            }
	        }
	    });
</script>
<body class="text-center" style="background:white">
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
	<form action="/member/register" method="post" class="form-signin">
		<img class="mb-4" src="/resources/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
		<h1 class="h3 mb-3 font-weight-normal">Please sign up</h1>
		
				<div class="form-group has-feedback">
<!-- 					<label class="control-label" for="user_id">아이디</label>
 -->					<input type="text" id="user_id" class="form-control" name="user_id" placeholder="ID" required autofocus> 
					<p>ex) hgu21700470</p>
				</div>
				<div class="form-group has-feedback">
<!-- 					<label class="control-label" for="name">성명</label>
 -->					<input type="text" id="name" class="form-control" name="name" placeholder="Name" required autofocus> 
				</div>
				<div class="form-group has-feedback">
<!-- 					<label class="control-label" for="pw">Password</label>
 -->					<input class="form-control" type="password" id="pw" name="pw"placeholder="Password" required>
				</div>
				<label for="inputPassword" class="sr-only">Confirm_Password</label> 
				<input type="password" id="inputPassword" class="form-control" placeholder="Confirm_Password" required><br>
				
				<div class="form-group has-feedback">
					<button class="btn btn-lg btn-primary btn-block" type="submit" id="submit">회원가입</button>
					<button class="btn btn-lg btn-primary btn-block" type="button" onclick="location.href='./login'">취소</button>
				</div>
			</form>
	</body>
</html>