const controle = document.querySelectorAll("[data-controle]");
const estatistica = document.querySelectorAll("[data-estatistica]");

const pecas = {
  bracos: {
    forca: 29,
    poder: 35,
    energia: -21,
    velocidade: -5,
  },

  blindagem: {
    forca: 41,
    poder: 20,
    energia: 0,
    velocidade: -20,
  },
  nucleos: {
    forca: 0,
    poder: 7,
    energia: 48,
    velocidade: -24,
  },
  pernas: {
    forca: 27,
    poder: 21,
    energia: -32,
    velocidade: 42,
  },
  foguetes: {
    forca: 0,
    poder: 28,
    energia: 0,
    velocidade: 19,
  },
};

controle.forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
    manipulaDados(evento.target.textContent, evento.target.parentNode);
    console.log(evento.target.parentNode);
    atualizaEstatistica(evento.target.dataset.peca, evento.target.textContent);
  });
});

function manipulaDados(operacao, controle) {
  const peca = controle.querySelector("[data-contador]");
  console.log(peca);
  if (operacao === "-") {
    peca.value = parseInt(peca.value) - 1;
  } else {
    peca.value = parseInt(peca.value) + 1;
  }
}

function atualizaEstatistica(peca, operacao) {
  estatistica.forEach((elemento) => {
    if (operacao === "+"){
       elemento.textContent =
      parseInt(elemento.textContent) +
      pecas[peca][elemento.dataset.estatistica];
    }else if (operacao === "-"){
      elemento.textContent =
      parseInt(elemento.textContent) -
      pecas[peca][elemento.dataset.estatistica];
    }
   
  });
}

const robo = document.getElementById("robotron");

robo.addEventListener("click",() => {
  const corAtual = robo.getAttribute("src");
  if(corAtual.includes("Azul")){
    robo.setAttribute("src", "img/Robotron 2000 - Branco/Robotron 2000 - Branco.png");
  } else if(corAtual.includes("Branco")){
    robo.setAttribute("src", "img/Robotron 2000 - Amarelo/Robotron 2000 - Amarelo.png");
  } else if (corAtual.includes("Amarelo")){
    robo.setAttribute("src", "img/Robotron 2000 - Preto/Robotron 2000 - Preto.png");
  } else if (corAtual.includes("Preto")){
    robo.setAttribute("src", "img/Robotron 2000 - Rosa/Robotron 2000 - Rosa.png");
  }else if (corAtual.includes("Rosa")){
    robo.setAttribute("src", "img/Robotron 2000 - Vermelho/Robotron 2000 - Vermelho.png");  
  } else {
    robo.setAttribute("src","img/Robotron 2000 - Azul/Robotron 2000 - Azul.png");
  }
})

// for(let i = 0; i < 900; i++){
//   const army = document.createElement("img");
//   const quartel = document.getElementById("body");
//   army.setAttribute("src", "img/Robotron 2000 - Vermelho/Robotron 2000 - Vermelho.png");
//   quartel.appendChild(army);
// }