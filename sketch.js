let img,img_btc,img_mano;
let shadow;

function preload() {
  img_hoja  = loadImage('/images/hojaPapel7.png');
  img_btc   = loadImage('/images/logoBTC2.png');
  img_mano  = loadImage('/images/mano2.png');

}



function setup() {
  createCanvas(1200, 1000);
  //shadow = makeShadow(img, 0, "#000000", 0);
}

function draw() { 
  background(255);
  
  translate(width/2, height/2);
  imageMode(CENTER);
  image(img_hoja, -200, 0);

  image(img_btc, 400, -350);

  image(img_mano, 400, 50);
  
  
/*   push();
  translate(-340, 15);
  image(shadow, -10, 0);

  translate(-40, 15);
  image(img_btc, 500, 0);
  pop();
  
  image(img, 0, 0); */

}


function makeShadow(img, sigma, shadowColor, opacity) {
  // Gaussian goes to approx. 0 at 3sigma
  // away from the mean; pad image with
  // 3sigma on all sides to give space
  const newW = img.width + 6 * sigma;
  const newH = img.height + 6 * sigma;
  const g = createGraphics(newW, newH);
  
  g.imageMode(CENTER);
  g.translate(newW/2, newH/2);
  //g.tint(0, 0, 0, );
  g.image(img, 0, 0);
  g.filter(BLUR, sigma);
  
  const shadow = g.get();
  const c = color(shadowColor);
  shadow.loadPixels();
  const numVals = 4 * shadow.width * shadow.height;
  for (let i = 0; i < numVals; i+=4) {
    shadow.pixels[i + 0] = c.levels[0];
    shadow.pixels[i + 1] = c.levels[1];
    shadow.pixels[i + 2] = c.levels[2];
    shadow.pixels[i + 3] *= opacity;
  }
  shadow.updatePixels();
  
  g.remove();
  return shadow;
}