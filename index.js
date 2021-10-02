/*
90 pra cima - A
entre 80 - 89 - B
entre 70 - 79 - C
entre 60 - 69 - D
menor que 60 - F
*/

function converterNota(notaAluno) {
  let notaA = notaAluno >= 90 && notaAluno <= 100
  let notaB = notaAluno >= 80 && notaAluno <= 89
  let notaC = notaAluno >= 70 && notaAluno <= 79
  let notaD = notaAluno >= 60 && notaAluno <= 69
  let notaF = notaAluno >= 0 && notaAluno < 60

  let notaFinal

  if (notaA) {
    notaFinal = 'A'
  } else if (notaB) {
    notaFinal = 'B'
  } else if (notaC) {
    notaFinal = 'C'
  } else if (notaD) {
    notaFinal = 'D'
  } else if (notaF) {
    notaFinal = 'F'
  } else {
    notaFinal = 'Nota inválida'
  }

  return notaFinal
}

console.log(converterNota(101))
console.log(converterNota(99))
console.log(converterNota(88))
console.log(converterNota(77))
console.log(converterNota(66))
console.log(converterNota(55))
console.log(converterNota(0))
