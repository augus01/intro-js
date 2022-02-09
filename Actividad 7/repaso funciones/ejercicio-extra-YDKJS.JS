// Se utilizaran dolares estadounidenses 

const impuesto = 0.19
const telefono = 899.99
const accesorios = 48.99
const saldoBanco = 5000
const presupuesto = 3000
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0
})


var compraTlfns = (telefono, accesorios) => {
  let compraArticulos = 0

  while (presupuesto > compraArticulos) {
    compraArticulos += telefono + accesorios;
    let compraIva = compraArticulos * impuesto
    var compraTotal = compraIva + compraArticulos
  }
  return compraTotal;
}
var estadoBancario = (dineroBanco) => {
  let compra = compraTlfns(telefono, accesorios)
  let saldoBanco = dineroBanco - compra
  return saldoBanco
}
var formateo2Decimales = () => {
  var saldoFinal = estadoBancario(saldoBanco)
  console.log(saldoFinal)
}


console.log(compraTlfns(telefono, accesorios))
formateo2Decimales()