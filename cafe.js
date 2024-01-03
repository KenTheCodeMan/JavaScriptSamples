

$(document).ready ( ()=>
{	//hard coded preloaded images NOT IDEAL, WORK ON LOOP AND ARRAY FOR THIS LATER
	const espressoPreloadInfo = new Image();
	espressoPreloadInfo.src = "./images/espresso_info.jpg";

	const espressoOriginal = new Image();
	espressoOriginal.src = "./images/espresso.jpg";

	const biscottiPreloadInfo = new Image();
	biscottiPreloadInfo.src = "./images/biscotti_info.jpg";

	const biscottiOriginal = new Image();
	biscottiOriginal.src = "./images/biscotti.jpg";

	const cappuccinoPreloadInfo = new Image();
	cappuccinoPreloadInfo.src = "./images/cappuccino_info.jpg";

	const cappuccinoOriginal = new Image();
	cappuccinoOriginal.src = "./images/cappuccino.jpg";

	const coffeePreloadInfo = new Image();
	coffeePreloadInfo.src = "./images/coffee_info.jpg";

	const coffeeOriginal = new Image();
	coffeeOriginal.src = "./images/coffee.jpg";

	const lattePreloadInfo = new Image();
	lattePreloadInfo.src = "./images/latte_info.jpg";

	const latteOriginal = new Image();
	latteOriginal.src = "./images/latte.jpg";

	const sconePreloadInfo = new Image();
	sconePreloadInfo.src = "./images/scone_info.jpg";

	const sconeOriginal = new Image();
	sconeOriginal.src = "./images/scone.jpg";

	let runningTotal = 0; //running total for calculations

	const productArray = {	espresso: 	{cost:1.95, originalImg: espressoOriginal.src, 	 preloadImg: espressoPreloadInfo.src }, //nested array, uses id tags to find images and cost of each product. 
							latte: 		{cost:2.95, originalImg: latteOriginal.src, 	 preloadImg: lattePreloadInfo.src},
							cappuccino: {cost:3.45, originalImg: cappuccinoOriginal.src, preloadImg: cappuccinoPreloadInfo.src},
							coffee: 	{cost:1.75, originalImg: coffeeOriginal.src, 	 preloadImg: coffeePreloadInfo.src},
							biscotti: 	{cost:1.95, originalImg: biscottiOriginal.src, 	 preloadImg: biscottiPreloadInfo.src},
							scone: 		{cost:2.95, originalImg: sconeOriginal.src, 	 preloadImg: sconePreloadInfo.src},
						}; 

	$(".products").mouseenter( (product) => //passes in element so that the ID assigned to it can be aquired to identify it
	{
		let idName = product.target.id; //gets assigned ID from element with mouse over it
		$("#"+idName).attr("src",productArray[idName].preloadImg); //selects ID based on input from .target.id, changes attribute src to the stored imag in the product array.
	});


	//works as the same as above, just on mouse leave and different img
	$(".products").mouseleave( (product) =>
	{	
		let idName = product.target.id;
		$("#"+idName).attr("src",productArray[idName].originalImg);
	});	

	$(".products").click( (product) => //function that does most of the "work", uses ID to access price in array, adds price to running total, adds item to list of goods being purchased, displays in nearest whole cent.
	{
		let idName = product.target.id; //creates variable to capture the id of the clicked product
		$('#order').append(`<option class="orderedItems" value="${productArray[idName].cost}">${"$" + productArray[idName].cost + " " + idName}</option>`); //appends the option selection box to add the product desired to be ordered. note: added a class of these items for easy removal later
		runningTotal = runningTotal + productArray[idName].cost; //adds product value to running total
		let displayTotal = runningTotal.toFixed(2); //creates new variable for money to be convered to two decimal places NOTE: this variable will be a string after toFixed() is applied. 
		$("#total").text("Total: $" + displayTotal); //Displays new running total after each item is added. 
	});

	$("#place_order").click(() =>
	{
		window.location.href='checkout.html'; //opens checkout page
	});

	$("#clear_order").click(() =>
	{
		$(".orderedItems").remove(); //added class to options for removal, removes all items with the class .ordereditems
		$("#total").html('<p id="total"></p>'); //replaces running total with empty paragraph
		runningTotal = 0; //resets running total to 0
	});
});