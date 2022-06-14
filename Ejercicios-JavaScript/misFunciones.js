/**
 * Conversion de unidades, de metros-yardas-pies-pulgadas
 * @method cambiar unidades
 * @param {string} id - El id de los inputs de metros-yardas-pies-pulgadas
 * @param string} valor - El id de los inputs de metros-yardas-pies-pulgadas
 * @return
 */









function convertirGr(id){
  var grad, rad;
  fi(id=="grados"){
    grad = document.getElementById(elementid:"grados").value;
    rad = (grad*Math.PI)/180;
  }else if(id==radianes){
    rad = document.getElementById(elementid:"grados").value;
    grad = (rad*180)/Math.PI;
  }
  document.getElementById(elementid: "grados").value = grad;
  document.getElementById(elementid: "grados").value = rad;
}
