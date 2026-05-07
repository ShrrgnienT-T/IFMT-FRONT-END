class Repeticao {
  exercicio8() {
    for (let i = 1; i <= 10; i++) {
      console.log(i);
    }
  }

  exercicio9() {
    let contador = 10;
    while (contador >= 1) {
      console.log(contador);
      contador--;
    }
  }

  exercicio10() {
    for (let n = 0; n <= 20; n++) {
      if (n % 2 === 0) {
        console.log(n);
      }
    }
  }

  exercicio11() {
    let nomes = ["Ana", "Carlos", "Joicy"];
    for (const nome of nomes) {
      console.log(nome);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const repeticao = new Repeticao();

  const btnEx8 = document.getElementById("btn-ex8");
  const btnEx9 = document.getElementById("btn-ex9");
  const btnEx10 = document.getElementById("btn-ex10");
  const btnEx11 = document.getElementById("btn-ex11");

  if (btnEx8) {
    btnEx8.addEventListener("click", () => {
      console.clear();
      repeticao.exercicio8();
    });
  }

  if (btnEx9) {
    btnEx9.addEventListener("click", () => {
      console.clear();
      repeticao.exercicio9();
    });
  }

  if (btnEx10) {
    btnEx10.addEventListener("click", () => {
      console.clear();
      repeticao.exercicio10();
    });
  }

  if (btnEx11) {
    btnEx11.addEventListener("click", () => {
      console.clear();
      repeticao.exercicio11();
    });
  }
});
