var xCarrosPreto = [100, 450];
var yCarrosPreto = [150, 260];
var velocidadeCarrosPreto = [7, 7];

function mostraCarrosPreto() {
  image(imagemCarrosPreto[0], xCarrosPreto[0], yCarrosPreto[0], 50, 40);
  image(imagemCarrosPreto[1], xCarrosPreto[1], yCarrosPreto[1], 50, 40);
}

function movimentaCarrosPreto() {
  xCarrosPreto[0] -= velocidadeCarrosPreto[0];
  xCarrosPreto[1] -= velocidadeCarrosPreto[1];
}

// usei "for" para repetir o retornaCarros, eu poderia ter feito com o mostraCarrosPreto também, mas quis deixar dessa forma
function retornaCarrosPreto() {
  for (var i = 0; i < imagemCarrosPreto.length; i++){
    if (xCarrosPreto[i] < -60) {
    xCarrosPreto[i] = 600;    
    }
  }
}