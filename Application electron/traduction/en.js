

console.log("Langue: en");
console.log(document.getElementById("les-bouees"));

if(document.getElementById("les-bouees"))
{
    console.log("entre dans la verification");
    document.getElementById("les-bouees").innerHTML = "The Buoys";
}
