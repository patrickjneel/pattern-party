const changeClass = (event) => {
  $('.tabs').removeClass('selected')
  $(event.target).addClass('selected')
  $('.card').addClass('not-shown')
  $(`.card-${$(event.target).attr('id')}`).removeClass('not-shown')
}


$('.tabs').on('click', changeClass)
