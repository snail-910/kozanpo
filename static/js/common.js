

$(function(){
	$('#js-hamburger').on('click', function(){
	  $('#js-hamburger').toggleClass('active');
	  $('#js-nav').fadeToggle('active');
	  $('#js-nav').toggleClass('active');
	});
  }());

  $(function(){
	$('.nav-items__item').on('click', function(){
	  $('#js-hamburger').toggleClass('active');
	  $('#js-nav').fadeToggle('active');
	  $('#js-nav').toggleClass('active');
	});
  }());


function twitText() {
	var s, url;
	s = "＃コザんぽ でコザをおさんぽしよう！まずはコザに来てきて！";
	url = document.location.href;
	
	if (s != "") {
		if (s.length > 140) {
			alert("テキストが140字を超えています");
		} else {
			url = "http://twitter.com/share?url=" + escape(url) + "&text=" + s;
			window.open(url,"_blank","width=600,height=300");
		}
	}
}


$(function(){

	$("#btn1").on("click", function() {
		$("#pp1")
		  .addClass("show")
		  .fadeIn();
	  });
	  
	  $(".close").on("click", function() {
		$(".popup").fadeOut();
	  });

	  $("#btn2").on("click", function() {
		$("#pp2")
		  .addClass("show")
		  .fadeIn();
	  });
	  
	  $(".close").on("click", function() {
		$(".popup").fadeOut();
	  });
	

	  $("#btn3").on("click", function() {
		$("#pp3")
		  .addClass("show")
		  .fadeIn();
	  });
	  
	  $(".close").on("click", function() {
		$(".popup").fadeOut();
	  });
	
	
	
	$("#submit").on("click", function() {
		$("#pp_find")
		  .addClass("show")
		  .fadeIn();
	  });
	  $("#close_find").on("click", function() {
		$("#pp_find").fadeOut();
	  });
	
	
	});

	
	function change() {
	  if  ((document.getElementById("1").checked)
		&& (document.getElementById("2").checked)
		&& (document.getElementById("3").checked))
	  {
		document.getElementById("submit").disabled = false;
	  } else {
		document.getElementById("submit").disabled = true;
	  }
	}
	
	
	
	
	function twitTextModal() {
		var s, url;
		s = "＃コザんぽミッション 達成したよ！";
		url = document.location.href;
		
		if (s != "") {
			if (s.length > 140) {
				alert("テキストが140字を超えています");
			} else {
				url = "http://twitter.com/share?url=" + escape(url) + "&text=" + s;
				window.open(url,"_blank","width=600,height=300");
			}
		}
	}
	

	
	
	$(function () {
		$('.js-open').click(function () {
		  $('#overlay, .modal-window').fadeIn();
		});
		$('.js-close').click(function () {
		  $('#overlay, .modal-window').fadeOut();
		});
	  });
	
	
	
	
	
	$('#text_1,#text_2,#text_3').on('click', function () {
	  if ($(this).text() === '見つけた！') {
		$(this).text('見つけた！を取り消す');
	  } else {
		$(this).text('見つけた！');
	  }
	});

	$('.btn_found').on('click', function () {
		if ($(this).text() === '見つけた！') {
		  $(this).text('見つけた！を取り消す');
		} else {
		  $(this).text('見つけた！');
		}
	  });

	  