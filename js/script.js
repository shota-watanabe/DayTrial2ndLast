// $(function() { //wordpressでエラーになる
jQuery(function($) {
  var scrollPosition; // topからのスクロール

  /**
   * naviハンバーガメニューの実装
   */
  $('.navbar-toggle').on('click', function() {
    if($(this).hasClass('open')) {
      // トグルを閉じる
      $('.navbar-toggle').removeClass('open');
      $('.menu').removeClass('open');
      $('.overlay').removeClass('open');
      // 背景の固定解除
      $('body').removeClass('fixed').css({'top': 0});
      window.scrollTo(0, scrollPosition);
      return false;
    } else {
      // トグルを開く
      $('.navbar-toggle').addClass('open');
      $('.menu').addClass('open');
      $('.overlay').addClass('open');
      // 背景の固定
      scrollPosition = $(window).scrollTop();
      $('body').addClass('fixed').css({'top': -scrollPosition});
      return false;
    } 
    
    // $(this).toggleClass('open');
    // $('.menu').toggleClass('open');
    // $('.overlay').toggleClass('open');
    // $('body').toggleClass('fixed');
  });
  $('.overlay').on('click', function() {
    if($(this).hasClass('open')) {
      // トグルを閉じる
      $('.navbar-toggle').removeClass('open');
      $('.menu').removeClass('open');
      $('.overlay').removeClass('open');
      // 背景の固定解除
      $('body').removeClass('fixed').css({'top': 0});
      window.scrollTo(0, scrollPosition);
      return false;
    } else {
      // トグルを開く
      $('.navbar-toggle').addClass('open');
      $('.menu').addClass('open');
      $('.overlay').addClass('open');
      // 背景の固定
      scrollPosition = $(window).scrollTop();
      $('body').addClass('fixed').css({'top': -scrollPosition});
      return false;
    } 
  });
  $('.menu a[href]').on('click', function(event) {
    $('.navbar-toggle').trigger('click');
  });

  /**
   * naviメニューの装飾
   */
  $('.menu-list-item').click(function() {
    $('.menu-list-item').children('a').removeClass('active');
    $(this).children('a').addClass('active');
  });

  /**
   * 「TOPへ戻る」ボタンの実装
   */
  $(window).on("scroll", function() {
    if($(this).scrollTop() > 100) {
      $('.floating').show();
    } else {
      $('.floating').hide();
    }
  });
  // : smooth-scrollで実装
  // $('.floating').click(function() {
  //   $('body,html').animate({
  //     scrollTop: 0
  //   }, 500);
  //   return false;
  // });

  /**
   * Q&Aのアコーディオン実装
   */
  $('.js-accordion').click(function() {
    $(this).next().slideToggle(200);
    $(this).toggleClass('open');
  });
  // $('.faq-list-item').click(function() {
  //   var $answer = $(this).find('.answer');

  //   if($answer.hasClass('open')) {
  //     $answer.removeClass('open');
  //     $answer.slideUp();
  //   } else {
  //     $answer.addClass('open');
  //     $answer.slideDown();
  //   }
  // });

  /**
   * modalの開閉
   */
  // var scrollPosition;
  // モーダルオープン
  $('.js-modal-open').click(function() {
    $('.js-modal').fadeIn();
    // 背景の固定
    scrollPosition = $(window).scrollTop();
    $('body').addClass('fixed').css({'top': -scrollPosition});
    return false;
  });
  // モーダルクローズ
  $('.js-modal-close').click(function() {
    $('.js-modal').fadeOut();
    // 背景の固定解除
    $('body').removeClass('fixed').css({'top': 0});
    window.scrollTo(0, scrollPosition);
    return false;
  });

  /**
   * 子要素がposition: absolute の場合に親要素の高さを設定する
   */
  var biggestHeight = 0;
  $('.js-parent *').each(function() {
    if( $(this).height() > biggestHeight ) {
      biggestHeight = $(this).height();
    }
  });
  $('.js-parent').height(biggestHeight);
  // alert(biggestHeight);
});