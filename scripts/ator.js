var xAtor = 300;
var yAtor = 371;
var colisao = false;

function mostraAtor() {
  image(imagemAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yAtor += 3;
  }
  if (keyIsDown(LEFT_ARROW)) {
    xAtor -= 3;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xAtor += 3;
  }
}

function posicaoInicial(){
  yAtor = 371;
}

function verificaColisao() {
  // collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  
  for (var i = 0; i <imagemCarrosAmarelo.length; i++) {
    colisao = collideRectCircle(xCarrosAmarelo[i], yCarrosAmarelo[i], 50, 40, xAtor, yAtor, 20)
    if (colisao){
      posicaoInicial();
      somColisao.play();
    }
  }
  for (var i = 0; i <imagemCarrosPreto.length; i++) {
  colisao = collideRectCircle(xCarrosPreto[i], yCarrosPreto[i], 50, 40, xAtor, yAtor, 20)
    if (colisao){
      posicaoInicial();
      somColisao.play();
    }
  }
  for (var i = 0; i <imagemCarrosVerde.length; i++) {
colisao = collideRectCircle(xCarrosVerde[i], yCarrosVerde[i], 50, 40, xAtor, yAtor, 20)
    if (colisao){
      posicaoInicial();
      somColisao.play();
    }
  }
}
