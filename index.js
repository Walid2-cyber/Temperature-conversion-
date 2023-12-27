let reset= document.getElementById("btn");
let degree= document.getElementById("C");
let Fahrenheit= document.getElementById("F");
let kelvin = document.getElementById("K");

degree.onkeyup = function ()
			{
			  Fahrenheit.value= (+(degree.value) *1.8)+32;
			  kelvin.value = +(degree.value) + 273.15;
			  if (degree.value === NaN){
			  			degree.value=0;
			  }
   }
   
  Fahrenheit.onkeyup = function ()
			{
			  degree.value= (+(Fahrenheit.value) - 32)/1.8;
			  kelvin.value = degree.value + 273,15;
   }
   
   
   kelvin.onkeyup = function ()
			{
			  Fahrenheit.value= ((+(kelvin.value) - 273.15)/1.8)+32 ;
			  degree.value = +(kelvin.value) - 273.15 ;
   }
   
   
   reset.onclick = function () 
    {
   			degree.value= 0;
   			Fahrenheit.value= 0;
   			kelvin.value=0;
   }
