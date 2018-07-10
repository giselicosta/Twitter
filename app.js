var mensagem = document.getElementById('mensagem');
mensagem.addEventListener('keyup', Contador);
var h;
var m;
var s;
var Contador = document.getElementById('Contador');

function Enviar(){
var msg = mensagem.value;
document.getElementById("stilo").innerHTML += "<p>" + mensagem + "</p>";
}
//h=getHours();
//m=getMinutos();
//s+getSeconds();
//document.getElementById('text').innerHTML=h+":"+m+"+"+s;
//setTimeout('time()',

function time(){
 var today=new Date;
  h=today.getHours();
  m=today.getMinutes();
  s=today.getSeconds();
  document.getElementById('text').innerHTML=h+":"+m+"+"+s;
}

function Contador(){
 var quantidade = 140;
 var msg = mensagem.value;
 var rest = quantidade - msg.length;
 Contador.innerHTML = rest;
}
//document.write ("Hoje é " + now.getDay() + "," + now.getDate() + "de" + now.getMonth() + now.getFullYear())
