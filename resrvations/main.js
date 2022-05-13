var price = 0;
var t = 0;
function Vehicles() {
    
    var choice = document.querySelector("#cars").value;
    
    switch (choice) {
        case "Citadine": document.getElementById("gear").innerHTML = "<option> Manuelle</option>";
            document.getElementById("feul").innerHTML = "<option> Essence</option> <option> Diesel</option> <option> Electrique</option> <option> Hybride</option>";
            prix = 12;
            break;
        case "Moto":
            document.getElementById("feul").innerHTML = "<option> Essence</option> <option> Electrique</option>";
            document.getElementById("feul").innerHTML = "<option> None</option>";
            prix = 10;
            break;
        case "Compact": document.getElementById("gear").innerHTML = "<option> Manuelle</option>";
            document.getElementById("feul").innerHTML = "<option> Essence</option> <option> Hybride</option> <option> Diesel </option>  ";
            prix = 14;

            break;
        case "Utilitaire": document.getElementById("gear").innerHTML = "<option> Manuelle</option>";
            document.getElementById("feul").innerHTML = "<option> Diesel </option>  ";
            prix = 16;

            break;

        case "Berline": document.getElementById("gear").innerHTML = "<option> Automatique </option>";
            document.getElementById("feul").innerHTML = "<option> Essence</option> <option> Hybride</option> <option> Diesel </option>  ";
            prix = 20;
            break;

        case "Constmachine": document.getElementById("gear").innerHTML = "<option> Manuelle</option>";
            document.getElementById("feul").innerHTML = "<option> Essence</option> <option> Diesel </option>  ";
            prix = 900;

            break;

        case "Truck": document.getElementById("gear").innerHTML = "<option> Automatique </option>";
            document.getElementById("feul").innerHTML = "<option> Diesel </option>  ";
            prix = 250;
            break;
        default: document.getElementById("gear").innerHTML = "<option>  </option>";
            document.getElementById("feul").innerHTML = "<option>  </option>  ";
    }


}
var feulT = document.getElementById("feul");

var gearT = 0;


function fueltype() {

    switch (feulT.value.toLowerCase()) {
        case "essence": gearT = 0.14;
            break;

        case "hybride": gearT = 0.09;
            break;

        case "diesel": gearT = 0.21;
            break;

        case "electrique": gearT = 0.05;
            break;
            default : ;


    }

}
var gearbx = 0;
function gearbox() {
    switch (feulT.value.toLowerCase()) {
        case "manuelle": gearbx = 0;
            break;

        case "automatique": gearbx = 0.19;
            break;
            default : ;
    }

}


function TotalPrice() {
    var nmbrdays = document.getElementById("days").value;
    Total = nmbrdays * (prix + (prix * gearT) + (prix * gearbx)) + " €";
    document.getElementById("displayTotal").innerText = Total;
}