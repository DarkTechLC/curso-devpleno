const valor = 10
if (valor === 10) {}
let valor2 = 20
valor2 = 30
console.log(valor, valor2)

const objeto = {
  chave: 'valor1',
  chave2: 'valor 2'
}
console.log(objeto)

// functions are first class citizens
const soma = function(a, b) {
  return a + b
}
const calc = function(op, a, b) {
  return op(a, b)
}
console.log(calc(soma, 9, 3))

const vetor = [1, 2, 3, 4, 5]
const dobrado = vetor.map(function(item) {
  return { original: item, dobrado: item * 2 }
})
console.log(vetor, dobrado)

const somentePares = item => item % 2 === 0
const dobrar = item => item * 2
const paresDobrado = vetor.filter(somentePares).map(dobrar)
console.log('Pares dobrados: ', paresDobrado)

const somar = (acumulado, atual) => acumulado + atual
const somatorio = paresDobrado.reduce(somar)
console.log('Soma com reduce: ', somatorio)