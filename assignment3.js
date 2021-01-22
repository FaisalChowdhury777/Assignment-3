// https://github.com/FaisalChowdhury777/Assignment-3.git

//Problem Solving


// kilometer to meter
 
var meter = 0;

function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return ("enter valid value");
    }
    else {
        meter = kilometer * 1000;
        return meter;
    }
}

// var result = kilometerToMeter(-17);
// console.log(result);



// Budget calculator

var amount = 0;

function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0) {
        return ("One or more input is not valid");
    }
    else {
        amount = watch * 50 + phone * 100 + laptop * 500;
        return amount;
    }
}

// var totalAmount = budgetCalculator(4, 2, 6);
// console.log(totalAmount);




// Hotel cost 

var firstCategoryCost = 0;
var secondCategoryCost = 0;
var thirdCategoryCost = 0;

function hotelCost(day) {
    if (day < 0) {
        return ("enter valid value");
    }
    else {
        if (day <= 10) {
            firstCategoryCost = day * 100;
            return firstCategoryCost;
        }
        else if (day <= 20) {
            secondCategoryCost = 100 * 10 + (100 - 20) * (day - 10);
            return secondCategoryCost;
        }
        else {
            thirdCategoryCost = 100 * 10 + (100 - 20) * 10 + (100 - 50) * (day - 20);
            return thirdCategoryCost;
        }
    }
}

// var totalCost = hotelCost(71);
// console.log(totalCost);




// Largest Friend Name

function megaFriend(friends){
    var bigName = friends.length;
    
   if(friends.length == 0){
       return ("Enter a name");
   }
   else{
        for(var i = 0; i < friends.length; i++){
        var names = friends[i];
        if(bigName <= names.length){
            bigName = names.length;
            var bigMan = names;
        }
    }
    return bigMan;
   }
}
//var largeName = megaFriend(["Fardin", "Jitu", "Rafi"]);
//console.log(largeName);