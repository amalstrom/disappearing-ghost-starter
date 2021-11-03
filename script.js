$(".hide-button").click(function() {
  $(".ghost-image").hide()
});

$(".show-button").click(function() {
  $(".ghost-image").show()
});

$(".update-img-button").click(function() {
  $(".ghost-image").attr("src", "https://www.ama.org/wp-content/uploads/2019/01/ghost-ads-image.jpg")
});

$(".message-button").click(function() {
  let userInput = $(".input").val();
  $(".message").append(userInput)
});

$(".name-button").click(function() {
  let userInput = $(".input").val();
  $("h1").text("Hey fam, my name is " + userInput + "!")
});