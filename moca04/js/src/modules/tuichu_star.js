document.querySelector(".houtui_btn").onclick=function(){
	$(".guanbi").show();
}
$(".center").on("click",".jixu",function(){
	$(".guanbi").hide();
});
$(".center").on("click",".giveup",function(){
	location.href="#/star"
})
