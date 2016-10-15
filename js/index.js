
var s=window.setInterval(function () {
  var d=new Date();
  var y=d.getFullYear();
  var m=(d.getMonth()+1);
  var date=d.getDate();
  var h=d.getHours();
  var min=d.getMinutes();
  var s=d.getSeconds();

  $('.day').html(y+'-'+addZero(m)+'-'+addZero(date));
  $('.time').html(addZero(h)+':'+addZero(min)+':'+addZero(s));
},1000);


function addZero(num) {
  if(num<10){
    num='0'+num;
  }
  return num;

}
$('.show-btn').on('click',function () {
  if($(this).hasClass('show')){
    $('#content').animate({'margin-left':'0'},1000);
    $('#left_nav').animate({left:'-165px'},1000);
    $(this).find('.show-span').html('>');
  }else{
    $('#content').animate({'margin-left':'165px'},1000);
    $('#left_nav').animate({left:'0'},1000);
    $(this).find('.show-span').html('<');
  }
  $(this).toggleClass('show')
});

$(".xiaoqu-btn").on('click',function () {
  $(this).siblings().removeClass('active');
  $(this).addClass('active');
});

var $changeHtmlBtn=$('#left_nav .list');
$changeHtmlBtn.on('click',function () {
  $(this).siblings().removeClass('active');
  $(this).addClass('active');

  changeHtml();

});


$(function () {
  changeHtml();
});

function changeHtml() {
  $('.container').load($changeHtmlBtn.filter('.active').children('a').data('target')+'.html');
}
