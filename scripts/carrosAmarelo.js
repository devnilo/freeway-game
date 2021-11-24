var xCarrosAmarelo = [500, 200];
var yCarrosAmarelo = [210, 100];
var velocidadeCarrosAmarelo = [6, 6];

function mostraCarrosAmarelo() {
  image(imagemCarrosAmarelo[0], xCarrosAmarelo[0], yCarrosAmarelo[0], 50, 40);
  image(imagemCarrosAmarelo[1], xCarrosAmarelo[1], yCarrosAmarelo[1], 50, 40);
}

function movimentaCarrosAmarelo() {
  xCarrosAmarelo[0] -= velocidadeCarrosAmarelo[0];
  xCarrosAmarelo[1] -= velocidadeCarrosAmarelo[1];
}

// usei "for" para repetir o retornaCarros, eu poderia ter feito com o mostraCarrosAmarelo também, mas quis deixar dessa forma
function retornaCarrosAmarelo() {
  for (var i = 0; i < imagemCarrosAmarelo.length; i++){
    if (xCarrosAmarelo[i] < -60) {
    xCarrosAmarelo[i] = 600;    
    }
  }
}