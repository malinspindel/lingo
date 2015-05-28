//skappa ett bibliotek
var ordlista =["mjauu","malin","banan"];
//Slumpa ut något av dem
var valtOrd = ordlista[Math.floor(Math.random()*3)];

console.log(valtOrd);
//Hämta knappen
var button = document.getElementsByTagName("button")[0]; 
//binda till knappen
button.addEventListener("click", function() {
    //hämtar inputen
    var anvandarOrd = document.getElementsByTagName("input")[0].value;
    //hämtar alla td
    var rutor = document.getElementsByTagName("td");
    
    for(var i = 0; i < 5 ; i++){
       rutor[i].innerHTML = anvandarOrd[i];
        
      if (anvandarOrd[i] == valtOrd[i]){
        rutor[i].style.background = "green";
      }  
      else {
        rutor[i].style.background = "red";
      }    
    }
//console.log(anvandarOrd);
//console.log(valtOrd);    
});


