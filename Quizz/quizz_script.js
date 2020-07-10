const myQuestions = [  
	{
		question: "¿En qué museo podés jugar a atender en un supermercado, conducir un programa de radio o trabajar en un banco?",
		answers: {
			a: "Museo Nacional de Bellas Artes",
			b: "Museo de los Niños del Abasto",
			c: "Museo de la Ciudad"
		},
		correctAnswer: "Museo de los Niños del Abasto",
		description: "El lugar donde se encuentra el museo, hoy Shopping Abasto, era donde los vecinos compraban frutas y verduras, ya que allí funcionó hasta 1984 el Mercado de Abasto de la ciudad. "
	},
	{
		question: "¿Cuál es la comida típica que se suele comer en la Costanera?",
		answers: {
			a: "Sopa",
			b: "Choripán",
			c: "Sushi"
		},
		correctAnswer: "Choripán",
		description: "En Argentina se consume un promedio de 600 millones de choripanes por año (un promedio de 15 por persona)."
	},
	/*
	{
		question: "¿En qué edificio de la Ciudad podrías conocer al Presidente?",
		answers: {
			a: "Cabildo Nacional",
			b: "Galerías Pacífico",
			c: "Casa Rosada"
		},
		correctAnswer: "Casa Rosada",
		description: "En la fachada de la Casa Rosada se ve izada la Bandera Nacional. La presencia de un gallardete izado junto a ella significa que el presidente de la Nación está en el edificio."
    },
    {
		question: "¿Con qué nombre es conocido el estadio de Boca Juniors?",
		answers: {
			a: "La Bombonera",
			b: "Gasómetro",
			c: "El Monumental"
		},
		correctAnswer: "La Bombonera",
		description: "El nombre oficial del estadio es Alberto J. Armando, quien fuera uno de los presidentes más importantes del club ,pero se lo llama popularmente “La Bombonera” por su aspecto similar a una caja de bombones: las bandejas de las tribunas se superponen una sobre otra con el objetivo de aprovechar al máximo el espacio."
    },
    {
		question: "¿Cuál de estos teatros está en la Ciudad de Buenos Aires? ",
		answers: {
			a: "Teatro el Círculo",
			b: "Teatro 3 de Febrero",
			c: "Teatro Colón"
		},
		correctAnswer: "Teatro Colón",
		description: "El Teatro Colón, de la Ciudad de Buenos Aires,  es considerado uno de los teatros más importantes del mundo. El teatro el Círculo se encuentra en la ciudad de Rosario y el teatro 3 de Febrero, en Entre Ríos."
    },
    {
		question: "¿Cuántos barrios tiene la Ciudad de Buenos Aires? ",
		answers: {
			a: "100",
			b: "48",
			c: "15"
		},
		correctAnswer: "48",
		description: "La expresión 100 barrios  porteños se hizo popular por el vals de Alberto Castillo, pero en realidad son 48 los barrios oficiales de la Ciudad. Los dos últimos barrios en sumarse fueron Puerto Madero y Parque Chas."
    },
    {
		question: "¿Cómo se llama la avenida donde se pueden comer las pizzas más tradicionales de Buenos Aires? ",
		answers: {
			a: "Av. Corrientes (donde se encuentran los teatros)",
			b: "Caminito (donde están las casas pintadas de colores)",
			c: "Av. Figueroa Alcorta (donde se encuentra el Museo Malba)"
		},
		correctAnswer: "Av. Corrientes (donde se encuentran los teatros)",
		description: "Corrientes es conocida como las calle de los teatros y las pizzerías. Es una buena alternativa para quienes deseen disfrutar de una noche de teatros, para luego cenar en algunas de las más tradicionales pizzerías de la Ciudad. "
    },
    {
		question: "¿Cuánto mide el Obelisco?",
		answers: {
			a: "Menos de 5o metros",
			b: "Más de 100 metros",
			c: "Entre 50 y 100 metros"
		},
		correctAnswer: "Entre 50 y 100 metros",
		description: "El obelisco mide 67,5 metros. En su interior no hay ascensor: para llegar hasta su punta hay que subir una empinada escalera con 207 escalones."
    },
    {
		question: "¿En qué barrio podrías ir a pasear en tranvía?",
		answers: {
			a: "Caballito",
			b: "Palermo",
			c: "Retiro"
		},
		correctAnswer: "Caballito",
		description: "El tranvía fue el transporte que utilizaron los vecinos de la Ciudad por muchos años. Si bien en 1963 se dejó de utilizar como medio de transporte, en el barrio de Caballito se puede hacer un viaje en el tiempo y hacer un paseo de 2 kilómetros por las calles del barrio en alguno de los antiguos tranvías."
    },
    {
		question: "¿Quién es el pintor más famoso del barrio de La Boca?",
		answers: {
			a: "Raúl Soldi",
			b: "Benito Quinquela Martín",
			c: "Antonio Berni"
		},
		correctAnswer: "Benito Quinquela Martín",
		description: "Benito Quinquela Martín fue un pintor argentino que estaba enamorado del barrio de La Boca. Pintaba sobre el barrio y el puerto, un paisaje que no se parece a ningún otro de la Ciudad. Fue gracias a él y otros vecinos vecinos que se creó la famosa calle museo Caminito."
	},
	*/
];

var indexPreg = 0;
var yaContestada = false;
var correctas = 0;

function turismoQuiz() {
	if(indexPreg < myQuestions.length) {
		yaContestada = false;
		document.getElementById("turismo-quiz").style.display = "block";
		document.getElementById("buttonStart").style.display = "none";
		document.getElementById("buttonNext").style.visibility = "hidden";
		document.getElementById("turismo-quiz").innerHTML = `
			<div class="containerquiz">
				<div class="question">${myQuestions[indexPreg].question}</div>
				<ul class="listAnswers">
					<li><strong>a. </strong><a onClick="validateAnswer(this, '${myQuestions[indexPreg].answers.a}')">${myQuestions[indexPreg].answers.a}</a></li>
					<li><strong>b. </strong><a onClick="validateAnswer(this, '${myQuestions[indexPreg].answers.b}')">${myQuestions[indexPreg].answers.b}</a></li>
					<li><strong>c. </strong><a onClick="validateAnswer(this, '${myQuestions[indexPreg].answers.c}')">${myQuestions[indexPreg].answers.c}</a></li>
				</ul>
				<div class="progress">
				  <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="${indexPreg+1}"
				  	aria-valuemin="1" aria-valuemax="${myQuestions.length}" style="width:${((indexPreg+1)/myQuestions.length)*100}%">
				  </div>
				</div>
				<div class="quizprogress">${indexPreg+1}/${myQuestions.length}</div>
				<div id="quizdescrip"></div>
			</div>
		`;
	}
	else {
		var mensaje = "";
		document.getElementById("buttonNext").style.visibility = "hidden";
		if(correctas <= 5) {
			mensaje = "¡Ya sabés algunas cosas sobre Buenos Aires!";
		}
		else if(correctas > 5 && correctas <= 9) {
			mensaje = "¡Lo hiciste muy bien!";
		}
		else if(correctas == 10) {
			mensaje = "¡Felicitaciones! Sos un experto en la Ciudad de Buenos Aires";
		}
		document.getElementById("turismo-quiz").innerHTML = `
			<div class="quizend">
				<p>Cantidad respuestas correctas ${correctas}/${myQuestions.length}</p>
				<p>${mensaje}</p>
				<p>
					Seguí aprendiendo sobre la 
					<a href="https://turismo.buenosaires.gob.ar/">Ciudad de Buenos Aires</a>
				</p>
				<button onClick="resetQuiz()" class="btn btn-primary btn-quizreset">Jugar otra vez!</button>
			</div>`;
	}
}

function validateAnswer(value, answerUser) {
	document.getElementById("buttonNext").style.visibility = "visible";
	if(yaContestada == false) {
		if(myQuestions[indexPreg].correctAnswer == answerUser) {
			value.innerHTML = value.text + " " + "<span class='glyphicon glyphicon-ok'></span>";
			value.setAttribute('style', 'color: green !important');
			document.getElementById("quizdescrip").innerHTML = `${myQuestions[indexPreg].description}`;
			correctas++;
		}
		else {
			value.innerHTML = value.text + " " + "<span class='glyphicon glyphicon-remove'></span>";
			value.setAttribute('style', 'color: red !important');
			document.getElementById("quizdescrip").innerHTML = `${myQuestions[indexPreg].description}`;
			document.querySelectorAll(".listAnswers li a").forEach(function(v) {
				if(v.text == myQuestions[indexPreg].correctAnswer) {
					v.setAttribute('style', 'color: green !important');
				}
			});
		}
		indexPreg++;
	}
	yaContestada = true;
}

function resetQuiz() {
	indexPreg = 0;
	yaContestada = false;
	correctas = 0;
	turismoQuiz();
}
