$(function(){

// タスク１
$("#btn1").on("click", function() {
    $("#pp1")
      .addClass("show")
      .fadeIn();
    // return false;
  });
  
  $(".close").on("click", function() {
    $(".popup").fadeOut();
    // return false;
  });

// タスク２
  $("#btn2").on("click", function() {
    $("#pp2")
      .addClass("show")
      .fadeIn();
    // return false;
  });
  
  $(".close").on("click", function() {
    $(".popup").fadeOut();
    // return false;
  });

// タスク３
  $("#btn3").on("click", function() {
    $("#pp3")
      .addClass("show")
      .fadeIn();
    // return false;
  });
  
  $(".close").on("click", function() {
    $(".popup").fadeOut();
    // return false;
  });


//   見つけたボタン

$("#submit").on("click", function() {
    $("#pp_find")
      .addClass("show")
      .fadeIn();
    // return false;
  });
  $("#close_find").on("click", function() {
    $("#pp_find").fadeOut();
    // return false;
  });


});

// $(function() {
//   $(function() {
//       $('#submit').attr('disabled', 'disabled'); //①
//           $('#1,#2,#3').click(function() { //②
//           if ( $(this).prop('checked') == false ) {　//③
//               $('#submit').attr('disabled', 'disabled');　//④
//           } else {
//               $('#submit').removeAttr('disabled');　//⑤
//           }
//       });
//   });
// });


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



// ミッションクリアツイート

function twitTextModal() {
	var s, url;
	s = "＃コザんぽミッション 達成したよ！";
	url = document.location.href;
	
	if (s != "") {
		if (s.length > 140) {
			//文字数制限
			alert("テキストが140字を超えています");
		} else {
			//投稿画面を開く
			url = "http://twitter.com/share?url=" + escape(url) + "&text=" + s;
			window.open(url,"_blank","width=600,height=300");
		}
	}
}

// ミッションクリアモーダル

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