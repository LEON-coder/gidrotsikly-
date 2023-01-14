$(document).ready(function(){
    $(".catalog-content").slice(1, 4).show();
    $("#loadMore").on("click", function(e){
      e.preventDefault();
      $(".catalog-content:hidden").slice(0, 3).slideDown();
      if($(".catalog-content:hidden").length == 0) {
        $("#loadMore").text("Больше нет").addClass("Все показано");
      }
    });
    
  })