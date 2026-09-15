
function updateRate() {
    var rateVal = document.getElementById("rate").value;

    //reference the span with id "rate_val"
    document.getElementById("rate_val").innerText = rateVal;

}

function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    y = document.getElementById("years").value;

    var interest = p*y*r/100;
    var amount = parseInt(p) + parseFloat(interest);
    var result = document.getElementById("result")

    var year = new Date().getFullYear() + parseInt(y); 
    
    if ( y <=0 ) {
        alert('Enter positive number');
        document.getElementById("years").focus();
    }
    if (p <= 0)
    {
        alert('Enter positive number');
        document.getElementById("principal").focus();
    }
    else {
        result.innerHTML = "If you deposit $" + "<mark>" + p + "</mark>" + ",\<br\> at an interest rate of " + "<mark>" + r + "%" + "</mark>" + "\<br\> You will receive an amount of $" + "<mark>" + amount + "</mark>" + ",\<br\> in the year " + "<mark>" + year + "</mark>" + "\<br\>";
        // result.innerHTML = 
        // "If you deposit $" +p <br>
        // "at an interest rate of " + r <br>
        //  + "You will recieve an amount of $" + interest <br>
        //  + "In the year " + year;


    }


}
        
