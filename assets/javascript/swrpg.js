var charChosen = false;
var isDefend = false;
var yourChar = "";
var jarjar = {
	hp : 100,
	atk : 10,
	cntr : 18
};
var wicket = {
	hp : 80,
	atk : 8,
	cntr : 24
};
var c3po = {
	hp : 120,
	atk : 5,
	cntr : 12
};
var ackbar = {
	hp : 130,
	atk : 15,
	cntr : 16
};

$(".charBox").on("click", function(){
	if (charChosen === false) {
		charChosen = true;
		yourChar = this;
		console.log(yourChar);
		$(this).contents().appendTo('.yours');
		$('.chars').contents().appendTo('.enemies')
	}
	else if (charChosen === true && isDefend === false) {
		$(this).contents().appendTo('.defend');
		isDefend = true;
	}
});
$('.fightButton').on("click", function(){
	if (charChosen === true && isDefend === true) {

	} 
})