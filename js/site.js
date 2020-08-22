$(function () {
  $('.fa-share-square-o').click(function () {
    $('#sharer').slideToggle('slow');
  });
  $('#SharerClose').click(function () {
    $('#sharer').hide('slow');
  });
  const mainContainerWidth = parseInt($('.main-container').css('width'),10);
  const mainContainerMarginLeft = parseInt($('.main-container').css('margin-left'),10);
  $('.right-side-bar').css(
    'left',
    mainContainerWidth + mainContainerMarginLeft+'px'
  );
});
$(function () {
  $('#SearBtn').hover(
    function () {
      $('#SearBtn').css('color', 'whitesmoke');
      $('#SearBtn').css('transform', 'scale(1.1)');
      $('#SearBtn').css('transition', 'linear .3s');
    },
    function () {
      $('#SearBtn').css('color', '');
      $('#SearBtn').css('transform', 'scale(1.0)');
      $('#SearBtn').css('transition', 'linear .5s');
    }
  );

  $('#MsBtn').hover(
    function () {
      $('#MsBtn').css('color', 'whitesmoke');
      $('#MsBtn').css('transform', 'scale(2)');
      $('#MsBtn').css('transition', 'linear .3s');
    },
    function () {
      $('#MsBtn').css('color', '');
      $('#MsBtn').css('transform', 'scale(1.0)');
      $('#MsBtn').css('transition', 'linear .5s');
    }
  );
});

function updateSearchText(textValue){
  if (textValue.length > 11) return;
  if (textValue.length > 10){
    textValue = textValue.substring(0, 9) + '...';
  }  
  $('#Typewriter').text(textValue);
}