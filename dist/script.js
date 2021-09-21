//object's jogadores
var rafa = { nome: "rafa", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var paulo = { nome: "Paulo", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var gui = { nome: "gui", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };


function adicionar() {
  const jogadorNovo = document.getElementById("nomeJogador").value;
  const novoJogador = {nome: jogadorNovo, vitorias: 0, empates: 0, derrotas: 0, pontos: 0};
  jogadores.push(novoJogador);
  exibeJogadoresNaTela(jogadores);
  document.getElementById("nomeJogador").value = "";
}

function remover() {
  const jogadorRemovido = document.getElementById("nomeJogador").value;
  jogadores.pop(jogadorRemovido);
  exibeJogadoresNaTela(jogadores);
}


// o campo 'pontos' no object, recebe o 'pontos' que vem da função
rafa.pontos = calculaPontos(rafa);
paulo.pontos = calculaPontos(paulo);
gui.pontos = calculaPontos(gui);

//função recebe os object que vão com o nome de 'jogador'
function calculaPontos (jogador) {
  var pontos = (jogador.vitorias * 3) + jogador.empates;
  return pontos;
}

//criar um index com os object's
var jogadores = [rafa, paulo, gui];


// 1 criar um var vazio para o for fazer a adição com o ‘+=’
// 2 quando o HTML tem aspas duplas, DEVE DEIXAR EM SIMPLES E QUENDO FOR JUNTAR USAR O DUBLO (exp: nos onclick)
function exibeJogadoresNaTela(jogadores){
  var elemento = ""
  for(var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>"
    elemento += "<td>"+ jogadores[i].vitorias + "</td>"
    elemento += "<td>"+ jogadores[i].empates +"</td>"
    elemento += "<td>"+ jogadores[i].derrotas +"</td>"
    elemento += "<td>"+ jogadores[i].pontos +"</td>"
    elemento += "<td><button onClick='adicionarVitoria("+ i +")'>Vitória</button></td>"
    elemento += "<td><button onClick='adicionarEmpate("+ i +")'>Empate</button></td>"
    elemento += "<td><button onClick='adicionarDerrota("+ i +")'>Derrota</button></td>"
    elemento += "</tr>"
  }
  //tem um ‘tabelajogadores’ no html ai vai mostrar
  var tabelajogadores = document.getElementById("tabelaJogadores")
  tabelaJogadores.innerHTML = elemento
}

exibeJogadoresNaTela(jogadores);

//OPERAÇÕES

//criar uma variavel que é o jogador(i), variavel executa um campo mais um vez (++),o variavel 'pontos' no object, recebe o 'pontos' que vem da função, chamar pra exibir
function adicionarVitoria(i){
  var jogador= jogadores[i]
  jogador.vitorias++
  jogador.pontos = calculaPontos(jogador)
  exibeJogadoresNaTela(jogadores)
}


function adicionarEmpate(i){
  var jogador= jogadores[i]
  jogador.empates++
  jogador.pontos = calculaPontos(jogador)
  exibeJogadoresNaTela(jogadores)
}

function adicionarDerrota(i){
  var jogador = jogadores[i];
  jogador.derrotas++
  exibeJogadoresNaTela(jogadores);
}


function resetarPontos(jogadores) {
  for (var i = 0; i < jogadores.length; i++) {
    jogadores[i].vitorias = 0;
    jogadores[i].empates = 0;
    jogadores[i].derrotas = 0;
    jogadores[i].pontos = 0;
    exibeJogadoresNaTela(jogadores);
  }
}