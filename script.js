a$("table").hide();
$(".additional-buttons").hide();
$(".additional-info").hide();
$(".additional-info h4").hide();

$('.btn.order').click(function() {
var sizeOfPizza = $(".size option:selected").val();
var toppingsOfPizza = $(".toppings option:selected").val();
var crustOfPizza = $(".crust option:selected").val();
var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
var order = 1;
var grandTotal = 0;

$("table").show();
$(".additional-buttons").show();
$(".btn.order").hide();

$("#size").html($(".size option:selected").text() + " - " + sizeOfPizza);
$("#toppings").html($(".toppings option:selected").text() + " - " + toppingsOfPizza);
$("#crust").html($(".crust option:selected").text() + " - " + crustOfPizza);
$("#total").html(total);
