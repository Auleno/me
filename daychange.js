let d = new Date();

console.log(d.getDay());

if(d.getDay() == 0){
  document.getElementById('fun').style.color = "#87CEEB";
  document.getElementById('fun2').style.color = "#87CEEB";
  document.getElementById('fun3').style.color = "#87CEEB";
  document.getElementById('fun4').style.color = "#87CEEB";
  document.getElementById('fun5').style.color = "#87CEEB";
  document.getElementById('cardtitle').style.color = "#87CEEB";
  document.getElementById('descript').style.color = "#87CEEB";
}

if(d.getDay() == 1){
  document.getElementById("me").style.opacity = "0.65";
}
if (d.getDay() == 2 ){
  document.getElementById("fun").style.color = "#32CD32";
  document.getElementById("fun2").style.color = "#32CD32";
  document.getElementById("fun3").style.color = "#32CD32";
  document.getElementById("fun4").style.color = "#32CD32";
  document.getElementById("fun5").style.color = "#32CD32";
  document.getElementById("cardtitle").style.color = "#FFFFFF";
  document.getElementById("descript").style.color = "#FFFFFF";
 }

 if (d.getDay() == 3 ){
   document.getElementById("h1").style.animation= colorchange;
 }

 if (d.getDay() == 4 ){
   document.getElementById("fun").style.animation= textcolorchange;
   document.getElementById("fun2").style.animation= textcolorchange;
   document.getElementById("fun3").style.animation= textcolorchange;
   document.getElementById("fun4").style.animation= textcolorchange;
   document.getElementById("fun5").style.animation= textcolorchange;
   document.getElementById("cardtitle").style.animation= textcolorchange;
   document.getElementById("descript").style.animation= textcolorchange;
  }

  if (d.getDay() == 5 ){
    document.getElementById("fun").style.animation= grimred;
    document.getElementById("fun2").style.animation= grimred;
    document.getElementById("fun3").style.animation= grimred;
    document.getElementById("fun4").style.animation= grimred;
    document.getElementById("fun5").style.animation= grimred;
    document.getElementById("cardtitle").style.animation= grimred;
    document.getElementById("descript").style.animation= grimred;
   }

   if (d.getDay() == 5 ){
    document.getElementById("h1").style.textShadow = "#FF8600 1px 0 10px";
     document.getElementById("fun").style.animation= wild;
     document.getElementById("fun2").style.animation= wild;
     document.getElementById("fun3").style.animation= wild;
     document.getElementById("fun4").style.animation= wild;
     document.getElementById("fun5").style.animation= wild;
     document.getElementById("cardtitle").style.animation= wild;
     document.getElementById("descript").style.animation= wild;
    }
