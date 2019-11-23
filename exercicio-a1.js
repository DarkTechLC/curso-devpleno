// Exercício 1
const vetor = [2, 3, 5, 8]
console.log(vetor)

const soma = (acumulado, atual) => acumulado + atual
const somatorio = vetor.reduce(soma)
console.log('Somar vetor inicial: ', somatorio)

// Exercício 2
const pares = item => item % 2 === 0
const itensPares = vetor.filter(pares)
const somatorioP = itensPares.reduce(soma)
console.log('Pares: ', itensPares, 'Soma pares: ', somatorioP)

// Exercício 3
const impares = item => item % 2 !== 0
const itensImpares = vetor.filter(impares)
const somatorioI = itensImpares.reduce(soma)
console.log('Impares: ', itensImpares, 'Soma ímpares: ', somatorioI)

// Exercício 4

// Exercício 5

// Exercício 6
const vetor2 = [3, 4, 8, 9, 10, 11]
//const pares = item => item % 2 === 0
const itensPares2 = vetor2.filter(pares)
console.log('Inicial: ', vetor2, 'Pares: ', itensPares2)

// Exercício 7
//const impares = item => item % 2 !== 0
const itensImpares2 = vetor2.filter(impares)
console.log('Inicial: ', vetor2, 'Impares: ', itensImpares2)

// Exercício 8
const calculadora = (num1, operador, num2) => {
  if (operador === '+') return num1 + num2
  else if (operador === '-') return num1 - num2
  else if (operador === '*') return num1 * num2
  else if (operador === '/') return num1 / num2
}
console.log(calculadora(10, '+', 5))

// Exercício 9
const ad = (n1, n2) => n1 + n2
const sub = (n1, n2) => n1 - n2
const mult = (n1, n2) => n1 * n2
const div = (n1, n2) => n1 / n2
const calcF = (n1, oper, n2) => oper(n1, n2)
console.log(calcF(10, ad, 5))