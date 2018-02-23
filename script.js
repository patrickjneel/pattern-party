const changeClass = (event) => {
  $('.tabs').removeClass('selected')
  $(event.target).addClass('selected')
  $('.card').addClass('not-shown')
  $(`.card-${$(event.target).attr('id')}`).removeClass('not-shown')
  $(`.tabs-${$(event.target).attr('id')}`).find('.minus-button').text('+');
  $('.minus-button').text('-');

}

const showNav = () => {
  console.log('click')
  $('.mobile-nav').toggleClass('mobile-nav-show')
}


$('.tabs').on('click', changeClass)
$('.menu').on('click', showNav)
