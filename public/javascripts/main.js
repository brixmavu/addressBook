var $table = $('#table').bootstrapTable()

$(document).ready(function(){
  //showing data to modal for edit record
  $('#table').on('click','.edit',function(){
    var contact_id = $(this).data('id');
    var name = $(this).data('name');
    var surname = $(this).data('surname');
    var telephone = $(this).data('telephone');
    var email = $(this).data('email');
    $('#EditModal').modal('show');
    $('.name').val(name);
    $('.surname').val(surname);
    $('.telephone').val(telephone);
    $('.email').val(email);
    $('.contact_id').val(contact_id);
  });
  //showing modal for delete record
  $('#table').on('click','.delete',function(){
    var contact_id = $(this).data('id');
    $('#DeleteModal').modal('show');
    $('.contact_id2').val(contact_id);
  });
});
