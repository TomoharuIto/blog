// ======================================================
// JS for the Article page
// ======================================================

// ========================================
// Back to top of page
// ========================================

$(function(){

  $('.scrollLink').on('click', function(event){
    event.preventDefault();
    var $this = $(this);
    var linkTo = $this.attr('href');
    var $target;
    var pos = 0;
    if(linkTo !== '#top'){
      $target = $(linkTo);
      pos = $target.offset().top;
    }
    $('html, body').animate({scrollTop: pos}, 400, 'swing');
  });

  var paper = Raphael('Arrow', '100%', '100%');
  paper.setViewBox(0, 0, 50, 50, true);
  var $Arrow = $('#Arrow');
  var $circle = paper.circle(25, 25, 0).attr({'fill':'rgba(201, 201, 201, 0.50)', 'stroke':'none'});
  var $path1 = 'M25,25 L25,25 L25,25';
  var $path2 = 'M12,31 L25,15 L38,31';
  var $path = paper.path($path1).attr({
                                  'fill':'none',
                                  'stroke':'rgba(255, 255, 255, 0.50)',
                                  'stroke-width':'4px',
                                  'stroke-linecap':'round',
                                  'stroke-linejoin':'round'
                                });
  var $visible = Raphael.animation({cx:25, cy:25, r:20}, 1000, 'bounce');
  var $visible1 = Raphael.animation({path:$path2}, 1000, 'bounce');
  var $Invisible = Raphael.animation({cx:25, cy:25, r:0}, 1000, 'backIn', function(){$Arrow.fadeOut();});
  var $Invisible1 = Raphael.animation({path:$path1}, 1000, 'backIn');

  $(window).scroll(function(){
    var $this = $(this);

    if($this.scrollTop() > 300){
      $Arrow
      .fadeIn('fast', function(){
        $circle.stop(false).animate($visible);
        $path.stop(false).animate($visible1);
      });
    } else {
      $circle.stop(false).animate($Invisible);
      $path.stop(false).animate($Invisible1);
    }
  });

});

// ========================================
// Prohibited to copy
// ========================================

$(function(){

  var $body = $('body');
  var $target = $body.find('img').not('.InModal'); // <= .InModal が付いていない<img>要素を取得
/*
  var $wrapper = $('<div></div>');
  $wrapper.addClass('WrapperImg');
  $target.wrap($wrapper); // <= まず全ての<img>要素を<div>で囲む
  var $BlueWall = $('<div></div>');
  $BlueWall.addClass('BlueWall');
  $('.WrapperImg').prepend($BlueWall); // <= ＄BlueWallを<img>要素を囲んだ親<div>要素の先頭に挿入
*/
  $target
/*
  .each(function(){
    var $Previous = $(this).prev('.BlueWall'); // <= ＄Previous は各々の<img>要素の前の<div>要素です
    $Previous
    .css({
      height:'size_h',
      width:'size_w'
    });
  })

  .on('contextmenu', function(){ // <= <img>要素上のみ右クリックメニューが出ない
    return false;
  });
*/
  $body
  .keydown(function(event){ // <= ctrl + C || ctrl + A key を無効化
    if((event.ctrlKey === true && event.which === 67) ||
      (event.ctrlKey === true && event.which === 65)){
      return false;
    }
  })
  .bind('copy', function(){ // <= コピーを無効化
    return false;
  });

});

// ==================================
// Copyright year update automatically
// ==================================

window.onload = function(){

  var now = new Date();
  var year = now.getFullYear();
  console.log(year);
  document.getElementById('year').textContent = year;

};

// ©2017 Tomoharu Ito FYI: https://github.com/TomoharuIto/tomoharuito.github.io
