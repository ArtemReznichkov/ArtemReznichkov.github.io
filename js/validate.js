$(document).ready(function() {
    
  $('#name').keyup(function() {
    if (!/^[A-Za-z]*$/g.test($(this).val())) {
      $(this).parent().children('.text-danger').fadeIn();
    } else {
      $(this).parent().children('.text-danger').fadeOut();
    }
  })
  
  $('#email').keyup(function() {
    if (!/^[A-Za-z1-9@._]*$/g.test($(this).val())) {
      $(this).parent().children('.text-danger').fadeIn();
    } else {
      $(this).parent().children('.text-danger').fadeOut();
    }
  })
  
  $('#phone').keyup(function() {
    if (!/^[A-Za-z1-9]*$/g.test($(this).val())) {
      $(this).parent().children('.text-danger').fadeIn();
    } else {
      $(this).parent().children('.text-danger').fadeOut();
    }
  })
})