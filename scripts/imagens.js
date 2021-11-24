var imagemEstrada;
var imagemAtor;

var somColisao;
var somPontos;

function preload() {
  
  imagemEstrada = loadImage("imagens/estrada.png")
  imagemAtor = loadImage("imagens/ator-1.png")
  
  imagemCarroVerde1 = loadImage("imagens/carro-1.png")
  imagemCarroVerde2 = loadImage("imagens/carro-1.png")
  imagemCarrosVerde = [imagemCarroVerde1, imagemCarroVerde2];
  
  imagemCarroPreto1 = loadImage("imagens/carro-2.png")
  imagemCarroPreto2 = loadImage("imagens/carro-2.png")
  imagemCarrosPreto = [imagemCarroPreto1, imagemCarroPreto2];
  
  imagemCarroAmarelo1 = loadImage("imagens/carro-3.png")
  imagemCarroAmarelo2 = loadImage("imagens/carro-3.png")
  imagemCarrosAmarelo = [imagemCarroAmarelo1, imagemCarroAmarelo2];

  somColisao = loadSound("sounds/colidiu.mp3");
  somPontos = loadSound("sounds/pontos.wav");
}