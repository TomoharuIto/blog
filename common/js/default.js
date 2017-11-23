// ======================================================
// Blog page JS
// ======================================================

// ========================================
// Adjust boxes to same height
// ========================================

$(function(){

  var $Boxes = $('.Entry');
  var Basis_h = 0;

  $(window).on('load resize', function(){
    $Boxes.each(function(){
      var $this = $(this);
      var Self_h = $this.outerHeight();

      if(Self_h > Basis_h){
        Basis_h = Self_h;
      }
      $Boxes.css({'height':(Basis_h)});
    });
  });

});
// ========================================
// Boxes Jumps out when the mouse over
// ========================================

$(function(){

  var $Boxes = $('.Entry');

  $Boxes.on('mouseenter', function(){
    $(this).addClass('Jumps_out');
  })
  .on('mouseleave', function(){
    $(this).removeClass('Jumps_out');
  })
  .each(function(){
    try{
      e = document.createEvent('TouchEvent');
      $(this)
      .off('mouseenter')
      .off('mouseleave');
    } catch(err) {
    }
  });

});

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

// ©2017 Tomoharu Ito FYI: https://github.com/TomoharuIto/tomoharuito.github.io
