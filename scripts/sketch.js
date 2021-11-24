function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(imagemEstrada);
  mostraAtor();
  movimentaAtor();
  mostraCarrosVerde();
  movimentaCarrosVerde();
  mostraCarrosPreto();
  movimentaCarrosPreto();
  mostraCarrosAmarelo();
  movimentaCarrosAmarelo();
  retornaCarrosVerde();
  retornaCarrosAmarelo();
  retornaCarrosPreto();
  verificaColisao();
  mostraPontos();
  marcaPontos();
}

