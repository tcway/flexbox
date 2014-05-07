$(document).ready(function() {
				$("#fd").change(fdchange);
				$("#ai").change(aichange);
				$("#fw").change(fwchange);
				$("#jc").change(jcchange);
				$("#ac").change(acchange);
				$("#as1").change(as1change);
				$("#fg1").keyup(fg1change);
				$("#fs1").keyup(fs1change);
				$("#fb1").keyup(fb1change);
				$("#as2").change(as2change);
				$("#fg2").keyup(fg2change);
				$("#fs2").keyup(fs2change);
				$("#fb2").keyup(fb2change);
				$("#as3").change(as3change);
				$("#fg3").keyup(fg3change);
				$("#fs3").keyup(fs3change);
				$("#fb3").keyup(fb3change);
				$("#o1").keyup(o1change);
				$("#o2").keyup(o2change);
				$("#o3").keyup(o3change);
			});
			
			function fdchange() {
				var chgval = $("#fd option:selected").val();
				$("#container").css("-webkit-flex-direction", chgval);
				
			};
			function aichange() {
				var chgval = $("#ai option:selected").val();
				$("#container").css("-webkit-align-items", chgval);
				
			};
			function fwchange() {
				var chgval = $("#fw option:selected").val();
				$("#container").css("-webkit-flex-wrap", chgval);
				
			};
			function jcchange() {
				var chgval = $("#jc option:selected").val();
				$("#container").css("-webkit-justify-content", chgval);
				
			};
			function acchange() {
				var chgval = $("#ac option:selected").val();
				$("#container").css("-webkit-align-content", chgval);
				
			};
			function as1change() {
				var chgval = $("#as1 option:selected").val();
				$("#flexbox1").css("-webkit-align-self", chgval);
				
			};
			function fg1change() {
				var chgval = $("#fg1").val();
				$("#flexbox1").css("-webkit-flex-grow", chgval);
				
			};
			function fs1change() {
				var chgval = $("#fs1").val();
				$("#flexbox1").css("-webkit-align-shrink", chgval);
				
			};
			function fb1change() {
				var chgval = $("#fb1").val();
				$("#flexbox1").css("-webkit-align-basis", chgval);
				
			};
			function as2change() {
				var chgval = $("#as2 option:selected").val();
				$("#flexbox2").css("-webkit-align-self", chgval);
				
			};
			function fg2change() {
				var chgval = $("#fg2").val();
				$("#flexbox2").css("-webkit-flex-grow", chgval);
				
			};
			function fs2change() {
				var chgval = $("#fs2").val();
				$("#flexbox2").css("-webkit-align-shrink", chgval);
				
			};
			function fb2change() {
				var chgval = $("#fb2").val();
				$("#flexbox2").css("-webkit-align-basis", chgval);
				
			};
			function as3change() {
				var chgval = $("#as3 option:selected").val();
				$("#flexbox3").css("-webkit-align-self", chgval);
				
			};
			function fg3change() {
				var chgval = $("#fg3").val();
				$("#flexbox3").css("-webkit-flex-grow", chgval);
				
			};
			function fs3change() {
				var chgval = $("#fs3").val();
				$("#flexbox3").css("-webkit-align-shrink", chgval);
				
			};
			function fb3change() {
				var chgval = $("#fb3").val();
				$("#flexbox3").css("-webkit-align-basis", chgval);
				
			};
			function o1change() {
				var chgval = $("#o1").val();
				$("#flexbox1").css("-webkit-order", chgval);
				
			};
			function o2change() {
				var chgval = $("#o2").val();
				$("#flexbox2").css("-webkit-order", chgval);
				
			};
			function o3change() {
				var chgval = $("#o3").val();
				$("#flexbox3").css("-webkit-order", chgval);
				
			};