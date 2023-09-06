/*
function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
} 

document.querySelector('.tecla_pom').onclick = tocaSomPom;

document.querySelectorAll('.tecla');

declarando uma função basica
function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

 referencias devem ser criadas com base no valor que será guardado
const listaDeTeclas = document.querySelectorAll('.tecla');
para colocar lista tem que colocar o colchetes []
listaDeTeclas[0].onclick = tocaSomPom;
*/

function tocaSom (idElementoAudio) {

    document.querySelector(idElementoAudio).play();

}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto
while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    
    const instrumento = tecla.classList[1];
    console.log(instrumento)

    //                   crase template string
    const idAudio = `#som_${instrumento}`;
    

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    contador = contador + 1;

}
