let alunos = [ {
  
  name: `Gustavo`,
  notaOne: 5.6,
  notaTwo: 9.8
}, {
  name: `Bruna`,
  notaOne: 3.2,
  notaTwo: 8.3
}, {
  name: `Eduarda`,
  notaOne: 2.6,
  notaTwo: 4.1
}, {
  name: `João`,
  notaOne: 3.9,
  notaTwo: 8.2
},
{ name: `Ricardo`,
  notaOne: 7.6,
  notaTwo: 9.4
}
]

function media (notaOne,notaTwo){
  
  let media = (notaOne+notaTwo)/2
  return media
  
}


for (let aluno of alunos){
  mediaAluno = media(aluno.notaOne, aluno.notaTwo)
  let aprovadoOrReprovado = mediaAluno < 7 ? `Infelizmente não foi dessa vez. Estude mais` : `Parabens pela sua aprovação`
  alert(`A média de ${aluno.name} é ${mediaAluno.toFixed(1)}. 
  ${aprovadoOrReprovado}`)
  }  