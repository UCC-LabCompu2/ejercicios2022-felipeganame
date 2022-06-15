/**
 * Conversion de unidades, de metros-yardas-pies-pulgadas
 * @method cambiar unidades
 * @param {string} id - El id de los inputs de metros-yardas-pies-pulgadas
 * @param {string} valor - El id de los inputs de metros-yardas-pies-pulgadas
 * @return
 */






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
