$(document).ready(function () {
  $(".catalog-card-open").slice(3).show();
  $("#loadMore").on("click",function (e) {
    e.preventDefault();
    $(".catalog-card-open:hidden").slice(0,3).slideDown();
    if ($(".catalog-card-open:hidden").length == 0) {
      $("#loadMore").text("Больше нет").addClass("Все показано");
    }
  });

})