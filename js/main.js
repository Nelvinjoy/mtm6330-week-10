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
;

/*attribute method*/
$('img:first').attr('src','./img/image-5.jpg')
/* class method*/
$('img:last').hasClass('special')
//$('img').addClass('special')
$('img').toggleClass('special')

/*events*/
$('img').click(function(){
  console.log($(this).attr('src'))
  $(this).toggleClass('special')
})
/* Ajax */
//$('#content').load('./about.html')
$('#contentNav .nav-link').click(function(e){
e.preventDefault()
  console.log(e)
  console.log($(this).attr('href'))
var page=$(this).attr('href')
$('#contentNav .active').removeClass('active')
$(this).addClass('active')
$('#content').fadeOut(500, function(){
  $(this).load(page)
}).fadeIn(500)


})//closing click event on the content nav bar
// $.ajax({
//   url: './data/posts.json',
//   type: 'GET',
//   dataType:'json'
// }).done(function(data){
// var numPosts = data.posts.length
//   for (var i = 0 ;  i <= numPosts ;  i++){
//   var post = '<div class="col-sm-6 p-5"><h3>'
// post+= (i+1)+'.'+data.posts[i].title
//   post +='</h3><p>'
//   post+= data.posts[i].body
//     post +='</p></div>'
//     console.log(posts)
//     $('#posts').append(post)
// }
//
// })
$.ajax({
  url: 'http://jsonplaceholder.typicode.com/posts',
  type: 'GET',
  dataType:'json'
}).done(function(data){
var numPosts = data.length
  for (var i = 0 ;  i < numPosts ;  i++){
  var post = '<div class="col-sm-6 p-5"><h3>'

post+= data[i].id
  post +='</h3><h2><p>'
  post+= data[i].title
  post+= '</h2></p><p>'
  post+=data[i].body
    post +='</p></div>'
    console.log(posts)
    $('#posts').append(post)
}

})//closing the ajax done
AOS.init();

} )//closing the document.ready method
