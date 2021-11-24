var xCarrosVerde = [600, 300];
var yCarrosVerde = [40, 320];
var velocidadeCarrosVerde = [8, 8];

function mostraCarrosVerde() {
  image(imagemCarrosVerde[0], xCarrosVerde[0], yCarrosVerde[0], 50, 40);
  image(imagemCarrosVerde[1], xCarrosVerde[1], yCarrosVerde[1], 50, 40);
}

function movimentaCarrosVerde() {
  // -= 2, é igual a (xCarroVerde = xCarroVerde - 2)
  xCarrosVerde[0] -= velocidadeCarrosVerde[0];
  xCarrosVerde[1] -= velocidadeCarrosVerde[1];
}

// usei "for" para repetir o retornaCarros, eu poderia ter feito com o mostraCarrosVerde também, mas quis deixar dessa forma
function retornaCarrosVerde() {
  for (var i = 0; i < imagemCarrosVerde.length; i++){
    if (xCarrosVerde[i] < -60) {
    xCarrosVerde[i] = 600;    
    }
  }
}