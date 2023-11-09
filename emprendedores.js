let cantmeses = Number (prompt("Publicitar en EMPRENDEDORES tiene descuentos en relación a comercios. Para determinar si su negocio califica en este rubro no debe superar 12 meses de vigencia ni un promedio de $50.000 de ingresos mensuales. Por favor, Ingrese meses de vigencia de su emprendimiento"));

let i;
let acumulador = 0

for (i = 1; i<= cantmeses; i++) {
    let facturacion =Number (prompt("ingrese la facturacion mensual de cada uno los meses indicados"));
    acumulador = acumulador + facturacion;
}

let promedio = acumulador / cantmeses

alert ("el promedio de facturación es " + promedio);

