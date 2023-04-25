let escalacao = []

function escalarJogador() {

  // DADOS DOS INPUTS

  let nome = document.getElementById('nome')
  let posicao = document.getElementById('posicao')
  let numero = document.getElementById('numero')

  // OBJETO COM DADOS DOS JOGADORES

  let jogadores = {
    nome: nome.value,
    posicao: posicao.value,
    numero: numero.value
  }

  // ADICIONANDO OS JOGADORES NO ARRAY DE ESCALACAO

  escalacao.push(jogadores)  
  
  // CONFIRMAÇÃO

  const confirmacao = confirm(
    "As informações estão corretas? \n\n" +
    "Jogador: " + nome.value + "\n" +
    "Posição: " + posicao.value + "\n" +
    "numero: " + numero.value
  )

  if (confirmacao) {

    //LISTA

    const lista = document.getElementById('lista')
    const ul = document.createElement('ul')
    
    let titulo = document.getElementById('escalacao')
    titulo.innerText = 'Lista de escalação'

    //CRIANDO AS LINHAS DA LISTA

    const nomeLi = document.createElement('li')
    nomeLi.innerText = 'Jogador: ' + nome.value
    ul.appendChild(nomeLi)

    const posicaoLi = document.createElement('li')
    posicaoLi.innerText = 'Posição: ' + posicao.value
    ul.appendChild(posicaoLi)

    const numeroLi = document.createElement('li')
    numeroLi.innerText = 'Número: ' + numero.value
    ul.append(numeroLi, document.createElement('hr'))
    

    // FINZALIZANDO

    lista.appendChild(ul)
  }

  // LIMPANDO INPUTS
  
  nome.focus()
  nome.value = ''
  posicao.value = ''
  numero.value = ''


}


function removerJogador() {

  // DADO DO INPUT

  let numeroRemover = document.getElementById('numero-remover')

  // LISTA MÃE

  const lista = document.getElementById('lista')  

  // UL

  const time = document.getElementsByTagName('ul')

  //PROCURANDO O INDICE DO NUMERO A SER REMOVIDO

  let indice = 0

  for (let i = 0; i < escalacao.length; i++) {
    if (numeroRemover.value == escalacao[i].numero) {
      indice = i
    }
  }

  const confirmacao = confirm(
    "Deseja mesmo remover o jogador da lista? \n\n" +
    "Nome: " + escalacao[indice].nome + "\n" +
    "Posição: " + escalacao[indice].posicao + "\n" +
    "Número: " + escalacao[indice].numero 
  )

  if (confirmacao) {

    escalacao.splice(indice, 1)
    lista.removeChild(time[indice])
    
  }

  

  numeroRemover.value = ''
}