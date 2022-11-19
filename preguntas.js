// seleccción
function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    }
  }
}

function show(count) {
  let question = document.getElementById("preguntas");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `<h2 id="a">Pregunta ${count + 1}. ${questions[count].question}</h2>
    <ul class="option_group">
    <div id="column_one">
    <li class="option">${first}</li> <li class="option">${second}</li>
    </div>
    <div id="column_two">
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </div>
    </ul>`;
  toggleActive();
}

function next() {
  button_count++;
  if (button_count == 1) {
    let user_answer = document.querySelector("li.option.active").innerHTML;
    activep = document.getElementsByClassName("active");
    if (user_answer == questions[question_count].answer) {
      activep[0].style.backgroundColor = "greenyellow";
      points += 10;
      sessionStorage.setItem("points", points);

    } else {
      activep[0].style.backgroundColor = "red";
      points -= 5;
      sessionStorage.setItem("points", points);
    }
    console.log(points);
  }

  if (button_count == 2) {
    if (question_count == questions.length - 1) {
      location.href = "fin.html";
    }
    console.log(question_count);
    question_count++;
    show(question_count);
    button_count = 0;
  }
}

let questions = [
    {
      id: 1,
      question: "¿Cuánto tiempo tarda la luz del Sol en llegar a la Tierra?",
      answer: "8 minutos",
      options: [
        "12 horas",
        "8 minutos",
        "12 minutos",
        "8 segundos"
      ]
    },
    {
      id: 2,
      question: "¿Cuántos litros de sangre tiene una persona adulta?",
      answer: "entre 4,5 y 6,0 litros",
      options: [
        "entre 3,2 y 5,0 litros",
        "entre 5,0 y 7,6 litros",
        "entre 4,5 y 6,0 litros",
        "entre 6,5 y 8,3 litros"
      ]
    },
    {
      id: 3,
      question: "¿Cuál es el libro más vendidio del mundo?",
      answer: "La Biblia",
      options: [
        "La Biblia",
        "Sicología oscura",
        "Las 48 leyes del poder",
        "El código Da Vinci"
      ]
    },
    {
      id: 4,
      question: "¿Qué es más potente una bomba nuclear o una bomba atómica?",
      answer: "Bomba de hidrógeno",
      options: [
        "Bomba",
        "Bomba atómica",
        "Bomba de hidrógeno",
        "otra"
      ]
    },
    {
      id: 5,
      question: "¿Cuándo se origino la primera guerra mundial?",
      answer: "28 de julio de 1914",
      options: [
        "25 de junio de 1910",
        "12 de febrero de 1850",
        "30 de mayo de 1920",
        "28 de julio de 1914"
      ]
    },
    {
      id: 6,
      question: "¿En que año se hizo el primer viaje a la luna?",
      answer: "1969",
      options: [
        "1795",
        "1890",
        "1969",
        "1958"
      ]
    },
    {
      id: 7,
      question: "¿Cuántos pescados hay en el mar?",
      answer: "No hay",
      options: [
        "500.000",
        "Muchos",
        "No hay",
        "200.000"
      ]
    },
    {
      id: 8,
      question: "¿Cuántas estrellas tiene el sistema solar?",
      answer: "1",
      options: [
        "10000",
        "1",
        "Muchas",
        "Ninguna de las anteriores"
      ]
    },
    {
      id: 9,
      question: "Quienes son los dueños de Microsoft",
      answer: "Bill Gates y Paul Allen",
      options: [
        "Bill Gates y Paul Allen",
        "Franz Kafka y Paulina Chabarra",
        "Miguel Angel y Arturo Peñatez",
        "Spreen y juansguarnizo "
      ]
    },
    {
      id: 10,
      question: "Quién pintó a la mona lisa",
      answer: "Leonardo Da Vinci",
      options: [
        "Leonardo Da Vinci",
        "William Shakespeare",
        "Albert Einstein",
        "Homero"
  
      ]
    },
  ]
  let question_count = 0;
let points = 0;


window.onload = function () {
  show(question_count);
};
let button_count = 0;
