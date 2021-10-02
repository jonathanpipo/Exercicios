let familia = {
  receita: [
    3000, 4500, 170.55, 151.24, 16.24, 161, 11, 585, 6, 100, 47, 50, 17.17,
    45.55
  ],
  despesa: [
    125.12, 511.5, 478.4, 999.99, 485.33, 1000, 659.65, 147.3, 258.56, 478.58,
    145.5
  ]
}

function sum(array) {
  let total = 0

  for (let value of array) {
    total += value
  }

  return total
}

function calculoBalanco() {
  const calcularReceita = sum(familia.receita)
  const calcularDespesa = sum(familia.despesa)

  const total = calcularReceita - calcularDespesa

  const balancoPositivo = total >= 0

  let informarBanlanco = 'negativo'

  if (balancoPositivo) {
    informarBanlanco = 'positivo'
  }

  console.log('Seu saldo é ' + informarBanlanco + ': R$' + total.toFixed(2))
}

calculoBalanco()
