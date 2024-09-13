$('.slider01').slick({
  infinite: true, //スライドのループを有効
  arrows: false, //前へ、次への矢印ボタンの有無
  fade: true, //スライドの切り替えをフェードに
  speed: 2000, //アニメーションの切り替えスピード
  autoplaySpeed: 3000, //自動再生時のスライドの静止時間
  autoplay: true, //スライダーの自動再生
  pauseOnFocus: false, //フォーカスで一時停止を無効
  pauseOnHover: false, //マウスホバーで一時停止を無効
  pauseOnDotsHover: false, //ドットナビゲーションをマウスホバーで一時停止を無効
  dots: true,
  dotsClass: "slide-dots01",
    responsive: [{
        breakpoint: 767,
        settings: {
        dots: false,
        }
    }]
});

$('.slider02').slick({
  infinite: true, //スライドのループを有効
  arrows: false, //前へ、次への矢印ボタンの有無
  fade: true, //スライドの切り替えをフェードに
  speed: 2000, //アニメーションの切り替えスピード
  autoplaySpeed: 3000, //自動再生時のスライドの静止時間
  autoplay: true, //スライダーの自動再生
  pauseOnFocus: false, //フォーカスで一時停止を無効
  pauseOnHover: false, //マウスホバーで一時停止を無効
  pauseOnDotsHover: false, //ドットナビゲーションをマウスホバーで一時停止を無効
  dots: true,
  dotsClass: "slide-dots02"
});

$('#page-link a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
	var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
	var pos = $(elmHash).offset().top;	//idの上部の距離を取得
	$('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
	return false;
});

$(window).on('load',function(){
$("#splash-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述

//=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
$("#splash").delay(1500).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述

$('body').addClass('appear');//フェードアウト後bodyにappearクラス付与

});
//=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる

$('.splashbg1').on('animationend', function() { 
$(function () {
  $(".slider")
    // 最初のスライドに"add-animation"のclassを付ける(data-slick-index="0"が最初のスライドを指す)
    .on("init", function () {
      $('.slick-slide[data-slick-index="0"]').addClass("add-animation");
    })
    // 通常のオプション
    .slick({
      autoplay: true, // 自動再生ON
      fade: true, // フェードON
      arrows: false, // 矢印OFF
      speed: 2000, // スライド、フェードアニメーションの速度2000ミリ秒
      autoplaySpeed: 4000, // 自動再生速度4000ミリ秒
      pauseOnFocus: false, // フォーカスで一時停止OFF
      pauseOnHover: false, // マウスホバーで一時停止OFF
    })
    .on({
      // スライドが移動する前に発生するイベント
      beforeChange: function (event, slick, currentSlide, nextSlide) {
        // 表示されているスライドに"add-animation"のclassをつける
        $(".slick-slide", this).eq(nextSlide).addClass("add-animation");
        // あとで"add-animation"のclassを消すための"remove-animation"classを付ける
        $(".slick-slide", this).eq(currentSlide).addClass("remove-animation");
      },
      // スライドが移動した後に発生するイベント
      afterChange: function () {
        // 表示していないスライドはアニメーションのclassを外す
        $(".remove-animation", this).removeClass(
          "remove-animation add-animation"
        );
      },
    });
});
});

});

$(function() {
  // スクロールイベント
  $(window).scroll(function() {
    // ふわっとスライドを呼び出す
    fadeInRightAnime();
    fadeInLeftAnime();
  });

  // 右からふわっとスライドの処理
  function fadeInRightAnime() {
    $('.fadeInRightTrigger').each(function() {
      // 発火する位置の座標から-50pxし、変数targetに代入する
      let target = $(this).offset().top -= 50;
      // スクロール量を取得し、変数scrollに代入する
      let scroll = $(window).scrollTop();
      // 表示画面の高さを取得し、変数windowHeightに代入する
      let windowHeight = $(window).height();
      // もし、発火する位置から表示画面の高さ+100pxを引いた数値よりscrollの高さが大きかったら
      if(scroll > target - windowHeight + 100) {
        // .fadeInRightを追加する
        $(this).addClass('fadeInRight');
      } else {
        // .fadeInRightを削除する
        $(this).removeClass('fadeInRight');
      }
    });
  };

  // 左からふわっとスライドの処理
  function fadeInLeftAnime() {
    $('.fadeInLeftTrigger').each(function() {
      let target = $(this).offset().top -= 50;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if(scroll > target - windowHeight + 100) {
        $(this).addClass('fadeInLeft');
      } else {
        $(this).removeClass('fadeInLeft');
      }
    });
  }; 

});

$(function() {
// スクロールイベント
  $(window).scroll(function() {
    // フェードアニメーションを呼び出す
    fadeAnime();
  });
  
  // フェードアニメーションの設定
  function fadeAnime() {
    // .fadeUpTriggerが付いた要素に対して
    $('.fadeUpTrigger').each(function() {
      // 縦位置を取得し-50pxして、変数targetに代入する
      let target = $(this).offset().top -= 50;
      // スクロール量を取得し、変数scrollに代入する
      let scroll = $(window).scrollTop();
      // 表示画面の高さを取得し、変数windowHeightに代入する
      let windowHeight = $(window).height();

      // 要素の縦位置から表示画面の高さ+200pxを引いた数字よりscrollのほうが大きい場合
      if(scroll > target - windowHeight + 200) {
        // .fadeUpを追加する
        $(this).addClass('fadeUp');
      } else {
        // そうでない場合は.fadeUpを削除する
        $(this).removeClass('fadeUp');
      }
    });
  };    
});

$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});

$(function(){
  var imgHeight = $('.js-mainVisual').outerHeight(); 
  var header = $('.js-header'); 

  $(window).on('load scroll', function(){
     if ($(window).scrollTop() < imgHeight) {
       header.removeClass('header-default');
     }else {
       header.addClass('header-default');
     }
  });
});

// TextRandomAnimeにappearRandomtextというクラス名を付ける定義
function TextRandomAnimeControl() {
	$('.TextRandomAnime').each(function () {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass("appearRandomtext");

		} else {
			$(this).removeClass("appearRandomtext");
		}
	});
}

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	//spanタグを追加する
	var element = $(".TextRandomAnime");
	element.each(function () {
		var text = $(this).text();
		var textbox = '';
		text.split('').forEach(function (t) {
			textbox += '<span>' + t + '</span>';
		});
		$(this).html(textbox);
	});

	TextRandomAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述