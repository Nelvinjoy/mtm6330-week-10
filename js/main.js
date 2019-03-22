console.log("i am in");
$(document).ready(function($) {
$('p').css('border-bottom', '1px solid black')
$('.first').css('border-color', 'red')
$('#special').css('background-color', '#ffcc00')
$('p.first small').css('background-color','lightgrey')

$('.first').html('Lets learn <em>jquery</em>')
$('.first').prepend('<h2>Welcome</h2>')
$('.first').after('<small>Make Web Pages Interactive</small>')
$('#yourName').val('Bob Builder')
/* attribute selector */
$('a[href="#"]').css('background-color','tomato')
$('a[href^="#"]').css('color','grey')//$ end with number sign
$('a[href*="google"]').css('font-weight', 'bold')

/* animation function*/
//$('.card:first').delay(1000).hide(400).show(800, function(){
  //alert('were back')
//})
/* animate actual animation*/
$('.card').animate({borderRadius: '20px'}, 1000)
} );

/*attribute method*/
$('img:first').attr('src','./img/image-5.jpg')
/* class method*/
$('img:last').hasClass('special')
//$('img').addClass('special')
$('img').toggleClass('special')

/*events*/
$('img').click(function(){
  console.log($(this).attr('src'))
  $('img').toggleClass('special')
})
