$(function() {
    $( ".sortable" ).sortable({
      connectWith: ".connectedSortable",
      receive: function( event, ui ) {
        $(this).css({"background-color":""});
      }
    });$().disableSelection();


    $('.add-button').click(function() {
        var txtNewItem = $('#new_text').val();
        $(this).closest('div.list').find('ul').append('<li class="list-item">'+txtNewItem+'</div>');
    });    
  });