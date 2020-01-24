function getReceipt() {
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i=0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br />";
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: " + runningTotal + ".00");
    getVeggies(runningTotal, text1);
}

function getVeggies(runningTotal,text1) {
    var veggiesTotal = 0;
    var selectedVeggies = [];
    var veggiesArray = document.getElementsByClassName("veggies");
    for (var i=0; i < veggiesArray.length; i++) {
        if (veggiesArray[i].checked) {
            selectedVeggies.push(veggiesArray[i].value);
            text1 = text1 + veggiesArray[i].value + "<br />";
        }
    }
    var veggiesCount = selectedVeggies.length;
    if (veggiesCount > 1) {
        veggiesTotal = (veggiesCount - 1); 
    } else {
        veggiesTotal = 0;
    }
    runningTotal = (runningTotal + veggiesTotal);
    getMeat(runningTotal, text1);
}

function getMeat(runningTotal, text1) {
    var meatTotal = 0;
    var selectedMeat = [];
    var meatArray = document.getElementsByClassName("meats");
    for (var j=0; j < meatArray.length; j++) {
        if (meatArray[j].checked) {
            selectedMeat.push(meatArray[j].value);
            console.log("selected meat item: {" + meatArray[j].value + "}");
            text1 = text1 + meatArray[j].value + "<br />";
        }
    }
    var meatCount = selectedMeat.length;
    if (meatCount > 1) {
        meatTotal = (meatCount - 1); // first meat is free
    } else {
        meatTotal = 0;
    }
    runningTotal = (runningTotal + meatTotal);
    console.log("total selected meat items: " + meatCount);
    console.log(meatCount + " meat - 1 free meat = " + "$" + meatTotal + ".00");
    console.log("meat text1:" + text1);
    console.log("Purchase Total: $" + runningTotal + ".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML="</h3>Total: <strong>$" + runningTotal + ".00</strong></h3>"; 
}