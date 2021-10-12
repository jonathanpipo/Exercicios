function transformDegree(degree) {
  const celsiusExist = degree.toUpperCase().includes('C')
  const fahrenheitExist = degree.toUpperCase().includes('F')

  // fluxo de erro
  if (!celsiusExist && !fahrenheitExist) {
    throw new Error('Nenhum grau identificado')
  }

  //fluxo ideal, F -> C
  let updateDegree = Number(degree.toUpperCase().replace('F', ''))
  let formula = fahrenheit => ((fahrenheit - 32) * 5) / 9
  let degreeSign = 'C'

  //fluxo alternativo, C -> F
  if (celsiusExist) {
    updateDegree = Number(degree.toUpperCase().replace('C', ''))
    formula = celsius => (celsius * 9) / 5 + 32
    degreeSign = 'F'
  }

  return formula(updateDegree) + degreeSign
}

try {
  console.log(transformDegree('10C'))
  console.log(transformDegree('50F'))
  transformDegree('50z')
} catch (Error) {
  console.log(Error.message)
}
