var numeroRandom = parseInt(Math.random() * 11);

function pegarChute() {
  var valorDoUsuario = document.querySelector("input").value;
  var p = document.querySelector("p");

  if (numeroRandom == valorDoUsuario) {
    p.textContent = "VOCÊ ACERTOU!!";
  } else {
    p.textContent = "ixi você errou :(";
  }
}

document.querySelector("button").addEventListener("click", pegarChute);
