"use strict";
const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#calculate").addEventListener("click", processEntry);
});

	function processEntry()
	{
		var userData = document.getElementById('income').value; //assigns input from user varible to data in the income text form field

		if(isNaN(userData) || userData < 0) //if input is not a positive number, display error message
		{
			document.getElementById("errorText").innerHTML = "Please enter a positive number please.";
		}

		else //if the input data is a positive number, it gets passed to calculateTax();
		{
			var displayTax = calculateTax(userData); //passes data from userData into calculate tax, then puts the returned data into displayTax
			displayTax = displayTax.toFixed(2); //changes displayTax integer to string with a fixed decimal place of two
			document.getElementById("tax").value = displayTax; //updates bottom text box with owed taxes
		}

	}

	function calculateTax(inputFromUser)
		{
			var owedTax = 0; //initialize variables for calculations
			var moneyToBeTaxed = 0;

			//using else if statements, calculate income tax owed. if the ammount to be taxed is over 9875, it ignores this statement and moves on. 
			if (inputFromUser < 9875)
			{
				owedTax = owedTax + inputFromUser * .10;
				return owedTax;
			}

			else if (inputFromUser < 40125)
			{
				owedTax = owedTax + 987.50; // after the first bracket, we add the previous brackets tax's,
				moneyToBeTaxed = inputFromUser; 
				moneyToBeTaxed = moneyToBeTaxed - 9875; //then we find the taxable income by removeing the previously taxed income, you dont want to pay taxes twice on that bracket of income
				owedTax = moneyToBeTaxed * .12 + owedTax; //then we find the taxable income of that remaining number, and add the previous brackets owed tax
				return owedTax; //returns calculated tax, if within this bracket
			}

			//the process is the same below, just bigger numbers for each bracket. each else if statement adds all the taxes owed of the previous brackets combined.
			else if (inputFromUser < 85525)
			{
				owedTax = owedTax + 4617.5;
				moneyToBeTaxed = inputFromUser;
				moneyToBeTaxed = moneyToBeTaxed - 40125;
				owedTax = moneyToBeTaxed * .22 + owedTax;
				return owedTax;
			}

			else if (inputFromUser < 163300)
			{
				owedTax = owedTax + 14605.50;
				moneyToBeTaxed = inputFromUser;
				moneyToBeTaxed = moneyToBeTaxed - 85525;
				owedTax = moneyToBeTaxed * .24 + owedTax;
				return owedTax;
			}

			else if (inputFromUser < 207350)
			{
				owedTax = owedTax + 33271.50;
				moneyToBeTaxed = inputFromUser;
				moneyToBeTaxed = moneyToBeTaxed - 163300;
				owedTax = moneyToBeTaxed * .32 + owedTax;
				return owedTax;
			}

			else if (inputFromUser < 518400)
			{
				owedTax = owedTax + 47367.50;
				moneyToBeTaxed = inputFromUser;
				moneyToBeTaxed = moneyToBeTaxed - 207350;
				owedTax = moneyToBeTaxed * .35 + owedTax;
				return owedTax;
			}

			else  
			{
				owedTax = owedTax + 156235.00;
				moneyToBeTaxed = inputFromUser;
				moneyToBeTaxed = moneyToBeTaxed - 518400;
				owedTax = moneyToBeTaxed * .37 + owedTax;
				return owedTax;
			}
		}
