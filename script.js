const changeClass = (event) => {
  $('.tabs').removeClass('selected')
  $(event.target).addClass('selected')
}


$('.tabs').on('click', changeClass)
