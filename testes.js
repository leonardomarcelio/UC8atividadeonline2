var dataAtual = new Date()
var dataEvento = new Date('11/11/2021')
var nomeEvento = ( 'NITERÓI QUER SABER')
var Palestrantes = [{
    nome: 'Silvio',
    sobreNome: 'Santos',
    idade: 86
},
{
    nome: 'Amanda',
    sobreNome: 'Ramalho',
    idade: 35

}]
var listaParticipantes = [{
    nome: "João",
    sobreNome: "Firmino",
    idade: 25
}, {
    nome: "Cleyson",
    sobreNome: "Firmino",
    idade: 35
}, {
    nome: "Googleson",
    sobreNome: "Carneiro",
    idade: 24
}, {
  
   nome: 'Windows',
   sobreNome:"Nunes",
   idade: 25
}
]

if (listaParticipantes.some(idade => idade.idade < 18)) {console.log(' Cadastro inválido , não são permitidos menores de idade no evento.')}
else if ( dataEvento <= dataAtual) {console.log ( " Evento não pode ser cadastrado, a data é inválida.")}
else if ( listaParticipantes.length > 100 ){ console.log('Evento inválido, o número de participantes ecxedeu o limite de 100 pessoas.') }
else {


console.log( `=========================${nomeEvento}========================`)
console.log(" ")
console.log( `-----------${dataEvento}----------`)
console.log(' ============================Participantes=========================')
listaParticipantes.forEach(valorAtual => {
    console.log('')
    console.log(`Nome: ${valorAtual.nome}`)
    console.log(`Sobrenome: ${valorAtual.sobreNome}`)
    console.log(`Idade: ${valorAtual.idade}`)
    console.log('')
});

console.log('===============================Palestrantes===============================')
Palestrantes.forEach(valorAtual => {
    console.log('')
    console.log(`Nome: ${valorAtual.nome}`)
    console.log(`Sobrenome: ${valorAtual.sobreNome}`)
    console.log(`Idade: ${valorAtual.idade}`)
    
}); 
}
