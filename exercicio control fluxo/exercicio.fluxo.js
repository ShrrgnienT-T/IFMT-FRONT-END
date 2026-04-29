
let numero = 5;

console.log("Número digitado:", numero);

if (numero > 0) {
  console.log("Positivo");
} else if (numero < 0) {
  console.log("Negativo");
} else {
  console.log("Zero");
}


let nota = 8;

console.log("Nota digitada:", nota);

if (nota >= 7) {
  console.log("Aprovado");
} else if (nota >= 5) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}


let nivel = 2;

console.log("Nível digitado:", nivel);

switch (nivel) {
  case 1:
    console.log("Iniciante");
    break;
  case 2:
    console.log("Intermediário");
    break;
  case 3:
    console.log("Avançado");
    break;
  default:
    console.log("Número inválido");
}


let idade = 18;

console.log("Idade digitada:", idade);

let mensagem = idade >= 18 ? "Maior de idade" : "Menor de idade";

console.log(mensagem);
