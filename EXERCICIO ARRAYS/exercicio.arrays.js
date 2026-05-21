
class Arrays {
  exercicio16() {
    const numeros = [4, 8, 15, 16, 23];

    console.log("Array criado:", numeros);
    console.log("Primeiro número:", numeros[0]);
    console.log("Último número:", numeros[numeros.length - 1]);
  }

  exercicio17() {
    const numeros = [1, 2, 3, 4, 5];

    console.log("Array original:", numeros);

    numeros.push(6);
    console.log("Após adicionar um elemento:", numeros);

    numeros.pop();
    console.log("Após remover um elemento:", numeros);
  }

  exercicio18() {
    const numeros = [10, 20, 30, 40, 50];

    console.log("Percorrendo o array:");

    for (const numero of numeros) {
      console.log(numero);
    }
  }

  exercicio19() {
    const numeros = [3, 7, 11, 14, 18, 2, 25];

    console.log("Números maiores que 10:");

    const maioresQueDez = numeros.filter((numero) => numero > 10);

    for (const numero of maioresQueDez) {
      console.log(numero);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const arrays = new Arrays();

  const btnEx16 = document.getElementById("btn-ex16");
  const btnEx17 = document.getElementById("btn-ex17");
  const btnEx18 = document.getElementById("btn-ex18");
  const btnEx19 = document.getElementById("btn-ex19");

  if (btnEx16) {
    btnEx16.addEventListener("click", () => {
      console.clear();
      arrays.exercicio16();
    });
  }

  if (btnEx17) {
    btnEx17.addEventListener("click", () => {
      console.clear();
      arrays.exercicio17();
    });
  }

  if (btnEx18) {
    btnEx18.addEventListener("click", () => {
      console.clear();
      arrays.exercicio18();
    });
  }

  if (btnEx19) {
    btnEx19.addEventListener("click", () => {
      console.clear();
      arrays.exercicio19();
    });
  }
});