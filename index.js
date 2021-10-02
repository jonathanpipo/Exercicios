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
