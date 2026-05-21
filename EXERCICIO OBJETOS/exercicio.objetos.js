class Objetos {
  exercicio20() {
    const aluno = {
      nome: "Eduardo",
      idade: 20,
      curso: "Front-End",
    };

    console.log("Objeto aluno:", aluno);
  }

  exercicio21() {
    const aluno = {
      nome: "Eduardo",
      idade: 20,
      curso: "Front-End",
    };

    console.log("Nome:", aluno.nome);
    console.log("Idade:", aluno.idade);
    console.log("Curso:", aluno.curso);
  }

  exercicio22() {
    const aluno = {
      nome: "Eduardo",
      idade: 20,
      curso: "Front-End",
    };

    console.log("Objeto antes da alteração:", aluno);

    aluno.idade = 21;

    console.log("Objeto depois da alteração:", aluno);
  }

  exercicio23() {
    const aluno = {
      nome: "Eduardo",
      idade: 20,
      curso: "Front-End",
    };

    console.log("Objeto antes de adicionar propriedade:", aluno);

    aluno.matricula = "2026001";

    console.log("Objeto depois de adicionar propriedade:", aluno);
  }

  exercicio24() {
    const pessoas = [
      { nome: "Ana", idade: 20 },
      { nome: "Carlos", idade: 25 },
    ];

    console.log("Array de objetos:", pessoas);

    for (const pessoa of pessoas) {
      console.log(pessoa.nome);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const objetos = new Objetos();

  const btnEx20 = document.getElementById("btn-ex20");
  const btnEx21 = document.getElementById("btn-ex21");
  const btnEx22 = document.getElementById("btn-ex22");
  const btnEx23 = document.getElementById("btn-ex23");
  const btnEx24 = document.getElementById("btn-ex24");

  if (btnEx20) {
    btnEx20.addEventListener("click", () => {
      console.clear();
      objetos.exercicio20();
    });
  }

  if (btnEx21) {
    btnEx21.addEventListener("click", () => {
      console.clear();
      objetos.exercicio21();
    });
  }

  if (btnEx22) {
    btnEx22.addEventListener("click", () => {
      console.clear();
      objetos.exercicio22();
    });
  }

  if (btnEx23) {
    btnEx23.addEventListener("click", () => {
      console.clear();
      objetos.exercicio23();
    });
  }

  if (btnEx24) {
    btnEx24.addEventListener("click", () => {
      console.clear();
      objetos.exercicio24();
    });
  }
});