// Check off specific todos by clicking
$("li").click(function(){
	// if li is gray 
	if ($(this).css("color") === "gray"){
		console.log("It is currently gray");
		// turn it black
	}
	// else
		// turn gray
	$(this).css({
		color: "gray",
		textDecoration: "line-through"
	});
});