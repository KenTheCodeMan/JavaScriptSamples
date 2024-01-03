"use strict";

const getCookieByName = name => 
{
    const cookies = document.cookie; //get all cookies of the document/webpage

    let start = cookies.indexOf(name + "="); //create start, to search for "name" passed in and use = to ensure only name, not name + other characters

    if (start === -1) //if no cookie found return blank
    {
        return "";
    }
    else // if cookie found, returning cookie value
    {
        start += (name.length + 1);

        let end = cookies.indexOf(";", start);

        if (end === -1)
        {
            end = cookies.length;
        }

        const cookieValue = cookies.substring(start, end);
        return decodeURIComponent(cookieValue);
    }
};

const setCookie = (cookieName, cookieValue, daysActive) => 
{
    let cookie = cookieName + "=" + cookieValue ; //use passed in cookie name from webpage to create cookie and its value
    cookie += "; max-age=" + daysActive + 21 * 24 * 60 * 60; // set persitant cookie
    cookie +="; path=/"; //set path to current page
    document.cookie = cookie; //set cookie to document/webpage
};

const deleteCookie = name => //deletes cookie by setting max age to zero
{
    document.cookie = name + "=''; max-age=0; path=/";
};

const goToPage = url => //uses passed in URL from webpage to navigate to new webpage
{
    location.href = url;
};