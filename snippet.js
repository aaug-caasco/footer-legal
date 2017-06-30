$(".legal-link a").click(function(e) {
  e.preventDefault();
  if ($('.legal-content').is(':visible')) {
    $(".legal-link span").text(" [ + ]");
    $(".legal-content").slideUp(500);
  } else {
    $(".legal-link span").text(" [ - ]");
    $(".legal-content").slideDown(500);
  }
});