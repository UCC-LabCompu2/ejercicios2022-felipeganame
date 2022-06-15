/**
 * Conversion de unidades, de metros-yardas-pies-pulgadas
 * @method cambiar unidades
 * @param {string} id - El id de los inputs de metros-yardas-pies-pulgadas
 * @param {string} valor - El id de los inputs de metros-yardas-pies-pulgadas
 * @return
 */

function cambiarUnidades(id,valor){
  var metro, pulgada, pie, yarda;

  if(isNaN(valor)){
    alert("se ingreso un valor invalido "+id);
    metro="";
    pulgada="";
    pie="";
    yarda="";
  }else if(id=="metro"){
    metro=valor;
    pulgada=39.3701*valor;
    pie=3.28084*valor;
    yarda=1.09361*valor;
  }else if(id="pulgada"){
    pulgada=valor;
    metro=0.254*valor;
    pie=0.083333*valor;
    yarda=0.277778*valor;
  }else if(id="yarda"){
    yarda=valor;
    metro=0.9144*valor;
    pulgada=36*valor;
    pie=3*valor;
  }else if(id="pie"){
    pie=valor;
    metro=0.3048*valor;
    pulgada=12*valor;
    yarda=0.333333*valor;
  }
  document.lasUnidades.unid_metro.value = Math.round(metro*100)/100;
  document.lasUnidades.unid_pulgada.value = Math.round(pulgada*100)/100;
  document.lasUnidades.unid_pie.value = Math.round(pie*100)/100;
  document.lasUnidades.unid_yarda.value = Math.round(yarda*100)/100;



}




function convertirGR(id){
  var grad, rad;
  if(id=="grados"){
    grad = document.getElementById("grados").value;
    rad = (grad*Math.PI)/180;
  }else if(id=="radianes"){
    rad = document.getElementById("grados").value;
    grad = (rad*180)/Math.PI;
  }
  document.getElementById("grados").value = grad;
  document.getElementById("grados").value = rad;
}

function mostrar_ocultar(valorMO){
  if(valorMO=="val_mostrar"){
    document.getElementById("divMO").style.display = 'block';
  }else if(valorMO=="val_ocultar"){
    document.getElementById("divMO").style.display = 'none';
  }
}

function calcular_suma(){
  var num1, num2;

  num1=Number(document.getElementByName("sum_num1")[0].value);
  num2=document.getElementByName("sum_num1")[0].value;
  document.getElementsByName("sum_total")[0].value= num1 + Number(num2);
}

function calcular_resta(){
  var num1, num2;

  num1=Number(document.getElementByName("res_num1")[0].value);
  num2=document.getElementByName("res_num1")[0].value;
  document.getElementsByName("res_total")[0].value= num1 - Number(num2);
}

function calcular_suma(){
  var num1, num2;

  num1=Number(document.getElementByName("mul_num1")[0].value);
  num2=document.getElementByName("mul_num1")[0].value;
  document.getElementsByName("mul_total")[0].value= num1 * Number(num2);
}

function calcular_suma(){
  var num1, num2;

  num1=Number(document.getElementByName("div_num1")[0].value);
  num2=document.getElementByName("div_num1")[0].value;
  document.getElementsByName("div_total")[0].value= num1 / Number(num2);
}

function cargarWeb(){
  var cant, unidad, urlComp;

  cant = document.getElementById("distancia").value;
  unidad = document.getElementsByName("unidades")[0].value;

  urlComp = "segundaWeb.html#" + cant + "#" + unidad;
  window.open(urlComp);
}
