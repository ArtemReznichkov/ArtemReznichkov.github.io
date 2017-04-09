$(document).ready(function() {
  var filterLink = $('.portfolio-filter a');
  var items = $('.portfolio-item');
  function filterElements(attr) {
    if (!attr) {
      items.show('slow');
      return;
    }
    items.filter("[data-attr*='" + attr + "']").show('slow');
    items.not("[data-attr*='" + attr + "']").hide('slow');
  }
  
  filterLink.click(function(e){
    e.preventDefault();
    filterLink.removeClass('active');
    $(this).addClass('active');
    var filterAttr = $(this).attr('data-filter');
    filterElements(filterAttr);
  })
})