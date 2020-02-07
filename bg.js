const body = document.querySelector("body");

const IMG_NUMBER = 3;

function handleImageLoad(){

}
function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/photo${imgNumber+1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function genRamdom(){
    const number = Math.floor(Math.random() * 3);
    return number;
}

function init(){
    const ramdomNumber = genRamdom();
    paintImage(ramdomNumber);
}

init();