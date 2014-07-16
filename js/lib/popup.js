
$(document).ready(function(){
	$("#open").click(function(){
	$("#bb").slideToggle("normal"); return false;
	});
});
$(function() {
 var div = $("#bb").on("bb", function(e) {
  div.slideDown() ;
  e.stopPropagation() ;
 }) ;
 $(document).on("click", ".content, .footer", function() {
  div.slideUp() ;
 }) ;
}) ;