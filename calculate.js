"use strict";

$(document).ready( () => {

    $("#calculate").click( () => {

    let centsInput = $("#cents").val(); //gets value of the cents box

    centsInput = parseInt(centsInput); //parses input into int

    if(isNaN(centsInput) || centsInput < 0 || centsInput > 99 || !Number.isInteger(centsInput)) //checks if number is 1-99, and if is an int
    {
        alert("Please input 1 to 99 cents in!");
    }

    else
    {
        let quarterCount = centsInput/ 25; //divides by 25 to see how many quarters are needed
        quarterCount = Math.floor(quarterCount); //rounds down to whole int
        centsInput =  centsInput - (quarterCount * 25); //removes quarters values from user input to calculate rest of input
        $('#quarters').val(quarterCount); //populates quarters box info

        //below boxes work same as quarters block
        let dimesCount = centsInput / 10;
        dimesCount = Math.floor(dimesCount);
        centsInput = centsInput - (dimesCount * 10);
        $('#dimes').val(dimesCount);


        let nickelCount = centsInput / 5;
        nickelCount = Math.floor(nickelCount);
        centsInput = centsInput - (nickelCount * 5);
        $('#nickels').val(nickelCount);

        $('#pennies').val(centsInput); //left over value is pennies

        $("#cents").focus(); //sets focus again on text box
    }


    }); // end click() method
    
    // set focus on cents text box on initial load
    $("#cents").focus();
            
}); // end ready() method