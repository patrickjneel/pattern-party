const changeClass = (event) => {
  $('.tabs').removeClass('selected')
  $(event.target).addClass('selected')
  $('.card').addClass('not-shown')
  $(`.card-${$(event.target).attr('id')}`).removeClass('not-shown')
  $('.minus-button').text('+');
  $(`.tabs-${$(event.target).attr('id')}`).find('.minus-button').text('-');
}


$('.tabs').on('click', changeClass)
