const changeClass = (event) => {
  $('.tabs').removeClass('selected')
  $(event.target).addClass('selected')
  $('.card').addClass('not-shown')
  $(`.card-${$(event.target).attr('id')}`).removeClass('not-shown')
  $('.minus-button').text('+');
  $(`.tabs-${$(event.target).attr('id')}`).find('.minus-button').text('-');
}

const showNav = () => {
  console.log('click')
  $('.mobile-nav').hasClass(':hidden')
  $('.mobile-nav').addClass('mobile-nav-show')
  $('.mobile-nav').removeClass('mobile-nav-show'); 
}


$('.tabs').on('click', changeClass)
$('.menu').on('click', showNav)
