 $(function(){
    $(".mobile").click(function(){
        $("#nav").addClass("on");
    });

    $("#nav .navWrap .close").click(function(){
		$("#nav").removeClass('on');
	});
 });
