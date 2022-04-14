console.clear();
console.log();

let prompt = require("prompt-sync")();

let personagem = prompt(
  "Insira o nome de um personagem para que possamos começar: "
);
console.log();

console.log(`Hoje ${personagem} esta comemora 5 anos de casamento, 
ele prometeu um jantar a sua amada esposa,
mas oque ${personagem} não contava era com um dia longo e exaustivo de trabalho e ainda ter que planejar um jantar.
Nota sua esposa é vegana e ama vinho`);

let comecar = prompt(
  'Vamos começar? *apos a confirmaçao a "Historia ira sumir"* (S/N)'
).toUpperCase();

while (comecar != "S") {
  comecar = prompt(
    'Vamos começar? *apos a confirmaçao a "Historia ira sumir" (S/N)'
  );
}

console.clear();

let resVal = 0;

let resp1 = prompt(
  `Ao sair do trabalho ${personagem} vai ao mercado? (S/N)`
).toUpperCase();
console.log();
while (resp1 != "S" && resp1 != "N") {
  resp1 = prompt("A resposta tem que ser S ou N: ");
}
if (resp1 == "S") {
  resVal++;
}

let resp2 = prompt(`${personagem} comprou um vinho? (S/N)`).toUpperCase();
console.log();
while (resp2 != "S" && resp2 != "N") {
  resp2 = prompt("A resposta tem que ser S ou N: ");
}
if (resp2 == "S") {
  resVal++;
}

let resp3 = prompt(
  `Ao chegar em casa ${personagem} tomou um banho? (S/N)`
).toUpperCase();
console.log();
while (resp3 != "S" && resp3 != "N") {
  resp3 = prompt("A resposta tem que ser S ou N: ");
}
if (resp3 == "S") {
  resVal++;
}

let resp4 = prompt(
  `${personagem} preparou uma refeição sem base animal? (S/N)`
).toUpperCase();
console.log();
while (resp4 != "S" && resp4 != "N") {
  resp4 = prompt("A resposta tem que ser S ou N: ");
}
if (resp4 == "S") {
  resVal++;
}

let resp5 = prompt(
  `${personagem} Preparou o quarto para uma noite especial? (S/N) `
).toUpperCase();
console.log();
while (resp5 != "S" && resp5 != "N") {
  resp5 = prompt("A resposta tem que ser S ou N: ");
}
if (resp5 == "S") {
  resVal++;
}

if (resVal == 0) {
  console.log(`Você falha miseravelmente.
  -------------------------------------------------------------------------
  |                                                                       |
  |   A DR rola solta e ${personagem} vai dormir na casinho do cachorro   |
  |                                O.O                                    |
  -------------------------------------------------------------------------`);
} else if (resVal <= 2 && resVal > 0) {
  console.log(`Você falha, mas ainda consegue fugir da situação.
  -------------------------------------------------------------------------
  |                                                                       |
  |                   ${personagem} vai dormir no sofá                    |
  |                                 Vishi...                              |
  -------------------------------------------------------------------------`);
} else if (resVal == 3) {
  console.log(
    `Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.
    -------------------------------------------------------------------------
    |                                                                       |
    |   ${personagem} ganha um beijinho e cada um dorme no seu canto! :(    |
    |                                Fazer o que :/                         |
    -------------------------------------------------------------------------`
  );
} else if (resVal == 4) {
  console.log(
    `Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.
    -------------------------------------------------------------------------
    |                                                                       |
    |                        Huuuuuummmm.... Hoje tem em!!                  |
    |                                      XD                               |
    -------------------------------------------------------------------------`
  );
} else {
  console.log(
    `Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.
    -------------------------------------------------------------------------
    |                                                                       |
    |   +18 As cenas a seguir podem conter Gestos Obscenos, Nudez, Sexo     |
    |                 Favor retirem as crianças da sala                     |
    -------------------------------------------------------------------------`
  );
}
