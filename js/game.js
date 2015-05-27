//skappa ett bibliotek
var ordlista =["mjauu","malin","banan"];
//Slumpa ut något av dem
var valtOrd = ordlista[Math.floor(Math.random()*3)];

console.log(valtOrd);
//Hämta knappen
var button = document.getElementsByTagName("button")[0]; 
//binda till knappen
button.addEventListener("click", function() {
  var anvandarOrd = document.getElementsByTagName("input")[0].value;
    if(valtOrd === anvandarOrd)
    {
        alert("Grattis!");    
    }
    else
    {
        alert("OBS! Försök igen!"); 
    }
});
