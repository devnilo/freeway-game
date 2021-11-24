var meusPontos = 0;

function mostraPontos() {
  textSize(30);
  fill(color(255, 255, 0));
  text(meusPontos, 300, 30);
}

function marcaPontos() {
  if (yAtor < 15){
    meusPontos += 1;
    posicaoInicial();
    somPontos.play();
  }
}