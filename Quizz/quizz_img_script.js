const myQuestions_img = [
	{
        tipoQuestion: "2",
        question: "¿Cómo se llama el jardín que se ve en la imagen?",
        question_img: "https://cdn2.buenosaires.gob.ar/turismo/1_jjapones_980x400.jpg",
		answers: {
			a: "Jardín Español",
			b: "Jardín Japonés",
			c: "Jardín Argentino"
		},
		correctAnswer: "Jardín Japonés",
		description: "Ubicado en el barrio de Palermo, es el parque más grande de estilo japonés fuera de japón. Su diseño zen lo convierte en un entorno natural para la meditación. El lago de su interior está repleto de peces koi, símbolo japonés de perseverancia y del vencer obstáculos ya que nadan contra la corriente."
	},
	{
        tipoQuestion: "1",
		question: "¿Qué importante prócer de nuestra historia descansa en la Catedral Metropolitana?",
		answers: {
			a: "https://cdn2.buenosaires.gob.ar/turismo/6a_gral_sanmartin_400x300.jpg",
			b: "https://cdn2.buenosaires.gob.ar/turismo/6b_sarmiento400x300.jpg",
			c: "https://cdn2.buenosaires.gob.ar/turismo/6c_belgrano_400x300.jpg"
		},
		correctAnswer: "A",
		description: "Ubicada frente a la Plaza de Mayo, la Catedral Metropolitana alberga el Mausoleo del General San Martín, que se encuentra  custodiado por los Granaderos a Caballo."
	},
	{
        tipoQuestion: "2",
        question: "¿A qué puente corresponde esta imagen?",
        question_img: "https://cdn2.buenosaires.gob.ar/turismo/2_pmujer_980x400.jpg",
		answers: {
			a: "Puente Transbordador",
			b: "Puente Alsina",
			c: "Puente de la Mujer"
		},
		correctAnswer: "Puente de la Mujer",
		description: "Obra del ingeniero español Santiago Calatrava, este puente simboliza una pareja bailando tango, donde el mástil blanco simboliza al hombre y la curvatura central simboliza a la mujer, unidos el uno con el otro por medio de las cuerdas.  "
	},
	{
        tipoQuestion: "1",
		question: "¿Cual de estos edificios es la Biblioteca Nacional?",
		answers: {
			a: "https://cdn2.buenosaires.gob.ar/turismo/7a_biblioteca_400x300.jpg",
			b: "https://cdn2.buenosaires.gob.ar/turismo/7b_congreso_400x300.jpg",
			c: "https://cdn2.buenosaires.gob.ar/turismo/7c_cementerioreco_400x300.jpg"
		},
		correctAnswer: "A",
		description: "La Biblioteca Nacional cuenta con más de 2 millones de ejemplares, lo que la convierte en la màs importante de Latinoamèrica. Las piezas más valiosas de la Biblioteca se hallan en la llamada Sala del Tesoro."
	},
	{
        tipoQuestion: "2",
        question: "¿Cómo se llama este tradicional lugar de Buenos Aires?",
        question_img: "https://cdn2.buenosaires.gob.ar/turismo/3_caminito_980x400.jpg",
		answers: {
			a: "Caminito",
			b: "Costanera",
			c: "Microcentro"
		},
		correctAnswer: "Caminito",
		description: "Esta calle peatonal de 150 metros es un museo a cielo abierto donde pueden apreciarse obras de arte. Se pueden ver en ella los típicos conventillos del barrio de La Boca, con sus paredes pintadas de divertidos colores, lo que la convierte en uno de los lugares más coloridos de la ciudad."
	},
	{
        tipoQuestion: "1",
		question: "¿Debajo de cuál de estos edificios se esconden túneles de la época colonial?",
		answers: {
			a: "https://cdn2.buenosaires.gob.ar/turismo/9a_cabildo_400x300.jpg",
			b: "https://cdn2.buenosaires.gob.ar/turismo/9b_manzanaluces_400x300.jpg",
			c: "https://cdn2.buenosaires.gob.ar/turismo/9c_shoppingabasto_400x300.jpg"
		},
		correctAnswer: "B",
		description: "La Manzana de las Luces es un importante complejo histórico de la Ciudad donde se esconden túneles que, durante la época colonial, fueron utilizados para la defensa y el contrabando."
	},
	{
        tipoQuestion: "2",
        question: "¿Cuál es el espacio verde que se observa en la foto?",
        question_img: "https://cdn2.buenosaires.gob.ar/turismo/4_reserva_980x400.jpg",
		answers: {
			a: "Parque 3 de Febrero",
			b: "Reserva Ecológica",
			c: "Parque Rivadavia"
		},
		correctAnswer: "Reserva Ecológica",
		description: "La Reserva Ecológica Costanera Sur es el espacio verde más grande de la ciudad y reúne la mayor cantidad de biodiversidad dentro de la Ciudad de Buenos Aires. Está ubicada entre el barrio de Puerto Madero y el Río de la Plata y es uno de los paseos preferidos para caminar, andar en bicicleta, trotar o pasar el día en familia durante el fin de semana. "
	},
	{
        tipoQuestion: "1",
		question: "¿Cuál de estos tangueros era conocido como “El Morocho del Abasto”?",
		answers: {
			a: "https://cdn2.buenosaires.gob.ar/turismo/10a_pugliese_400x300.jpg",
			b: "https://cdn2.buenosaires.gob.ar/turismo/10b_goyeneche_400x300.jpg",
			c: "https://cdn2.buenosaires.gob.ar/turismo/10c_gardel_400x300.jpg"
		},
		correctAnswer: "C",
		description: "Carlos Gardel llegó de pequeño A Buenos Aires junto a su madre y vivieron en la la zona del Abasto (barrio de Balvanera), donde comenzó a cantar y se inició su carrera artística En este barrio también está el museo Casa Carlos Gardel, .el lugar ideal para aprender todo sobre su vida."
	},
	{
        tipoQuestion: "1",
		question: "¿Cuál de estos monumentos está ubicado en el centro de la Plaza de Mayo?",
		answers: {
			a: "https://cdn2.buenosaires.gob.ar/turismo/8a_obelisco_400x300.jpg",
			b: "https://cdn2.buenosaires.gob.ar/turismo/8b_piramidemayo_400x300.jpg",
			c: "https://cdn2.buenosaires.gob.ar/turismo/8c_floralis_400x300.jpg"
		},
		correctAnswer: "B",
		description: "La Pirámide de Mayo fue el primer monumento del país. Fue inaugurado en 1811 para conmemorar el 1er aniversario de la Revolución de Mayo."
	},
	{
        tipoQuestion: "2",
        question: "¿Qué famosa peatonal se observa en esta foto?",
        question_img: "https://cdn2.buenosaires.gob.ar/turismo/5_floridapeatonal_980x400.jpg",
		answers: {
			a: "Calle Florida",
			b: "Avenida Corrientes",
			c: "Avenida Santa Fe"
		},
		correctAnswer: "Calle Florida",
		description: "Es una de las calles más famosas de la ciudad y paseo obligado para quienes quieren hacer compras. En ella se encuentra el shopping Galerías Pacífico, una joya arquitectónica que vale la pena visitar."
	}
];

var indexPreg_img = 0;
var yaContestada_img = false;
var correctas_img = 0;

function turismoQuiz_img() {
	if(indexPreg_img < myQuestions_img.length) {
		yaContestada_img = false;
		document.getElementById("turismo-quiz_img").style.display = "block";
		document.getElementById("buttonStart_img").style.display = "none";
        document.getElementById("buttonNext_img").style.visibility = "hidden";
        
        if(myQuestions_img[indexPreg_img].tipoQuestion == 1) {
            /* IMAGENES EN LAS RESPUESTAS */
            document.getElementById("turismo-quiz_img").innerHTML = `
                <div class="containerquiz">
                    <div class="question">${myQuestions_img[indexPreg_img].question}</div>
                    <ul class="listAnswers listAnswers_img">
                        <li><strong>a. </strong><img class="img-responsive" src="${myQuestions_img[indexPreg_img].answers.a}" onClick="validateAnswer_img(this, 'A')" data-respuesta="A" ></li>
                        <li><strong>b. </strong><img class="img-responsive" src="${myQuestions_img[indexPreg_img].answers.b}" onClick="validateAnswer_img(this, 'B')" data-respuesta="B" ></li>
                        <li><strong>c. </strong><img class="img-responsive" src="${myQuestions_img[indexPreg_img].answers.c}" onClick="validateAnswer_img(this, 'C')" data-respuesta="C" ></li>
                    </ul>
                    <div class="progress">
                    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="${indexPreg_img+1}"
                        aria-valuemin="1" aria-valuemax="${myQuestions_img.length}" style="width:${((indexPreg_img+1)/myQuestions_img.length)*100}%">
                    </div>
                    </div>
                    <div class="quizprogress">${indexPreg_img+1}/${myQuestions_img.length}</div>
                    <div id="quizdescrip"></div>
                </div>
            `;
        }
        else {
            /* IMAGEN EN LA PREGUNTA */
            document.getElementById("turismo-quiz_img").innerHTML = `
                <div class="containerquiz">
                    <div class="question">${myQuestions_img[indexPreg_img].question}
                        <img class="img-responsive question-img" src="${myQuestions_img[indexPreg_img].question_img}"/>
                    </div>
                    <ul class="listAnswers">
                        <li><strong>a. </strong><a onClick="validateAnswer_text(this, '${myQuestions_img[indexPreg_img].answers.a}')">${myQuestions_img[indexPreg_img].answers.a}</a></li>
                        <li><strong>b. </strong><a onClick="validateAnswer_text(this, '${myQuestions_img[indexPreg_img].answers.b}')">${myQuestions_img[indexPreg_img].answers.b}</a></li>
                        <li><strong>c. </strong><a onClick="validateAnswer_text(this, '${myQuestions_img[indexPreg_img].answers.c}')">${myQuestions_img[indexPreg_img].answers.c}</a></li>
                    </ul>
                    <div class="progress">
                    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="${indexPreg_img+1}"
                        aria-valuemin="1" aria-valuemax="${myQuestions_img.length}" style="width:${((indexPreg_img+1)/myQuestions_img.length)*100}%">
                    </div>
                    </div>
                    <div class="quizprogress">${indexPreg_img+1}/${myQuestions_img.length}</div>
                    <div id="quizdescrip"></div>
                </div>
            `;
        }
        

	}
	else {
		var mensaje = "";
		document.getElementById("buttonNext_img").style.visibility = "hidden";
		if(correctas_img <= 5) {
			mensaje = "¡Ya sabés algunas cosas sobre Buenos Aires!";
		}
		else if(correctas_img > 5 && correctas_img <= 9) {
			mensaje = "¡Lo hiciste muy bien!";
		}
		else if(correctas_img == 10) {
			mensaje = "¡Felicitaciones! Sos un experto en la Ciudad de Buenos Aires";
		}
		document.getElementById("turismo-quiz_img").innerHTML = `
			<div class="quizend">
				<p>Cantidad respuestas correctas: ${correctas_img}/${myQuestions_img.length}</p>
				<h1>¡Felicitaciones!</h1>
				<p>${mensaje}</p>
				<p>
					Seguí aprendiendo sobre la 
					<a href="https://turismo.buenosaires.gob.ar/">Ciudad de Buenos Aires</a>
				</p>
				<button onClick="resetQuiz_img()" class="btn btn-primary btn-quizreset">Jugar otra vez!</button>
			</div>`;
	}
}


function validateAnswer_img(value, answerUser) {
	document.getElementById("buttonNext_img").style.visibility = "visible";
	if(yaContestada_img == false) {
		if(myQuestions_img[indexPreg_img].correctAnswer == answerUser) {
			value.innerHTML = value.text + " " + "<span class='glyphicon glyphicon-ok'></span>";
			value.style.borderColor = "green";
			document.getElementById("quizdescrip").innerHTML = `${myQuestions_img[indexPreg_img].description}`;
			correctas_img++;
		}
		else {
			value.innerHTML = value.text + " " + "<span class='glyphicon glyphicon-remove'></span>";
			value.style.borderColor = "red";
			document.getElementById("quizdescrip").innerHTML = `${myQuestions_img[indexPreg_img].description}`;
			document.querySelectorAll(".listAnswers li img").forEach(function(v) {
				if(v.dataset.respuesta == myQuestions_img[indexPreg_img].correctAnswer) {
                    v.style.borderColor = "green";
				}
			});
		}
		indexPreg_img++;
	}
	yaContestada_img = true;
}

function validateAnswer_text(value, answerUser) {
	document.getElementById("buttonNext_img").style.visibility = "visible";
	if(yaContestada_img == false) {
		if(myQuestions_img[indexPreg_img].correctAnswer == answerUser) {
			value.innerHTML = value.text + " " + "<span class='glyphicon glyphicon-ok'></span>";
			value.setAttribute('style', 'color: green !important');
			document.getElementById("quizdescrip").innerHTML = `${myQuestions_img[indexPreg_img].description}`;
			correctas_img++;
		}
		else {
			value.innerHTML = value.text + " " + "<span class='glyphicon glyphicon-remove'></span>";
			value.setAttribute('style', 'color: red !important');
			document.getElementById("quizdescrip").innerHTML = `${myQuestions_img[indexPreg_img].description}`;
			document.querySelectorAll(".listAnswers li a").forEach(function(v) {
				if(v.text == myQuestions_img[indexPreg_img].correctAnswer) {
					v.setAttribute('style', 'color: green !important');
				}
			});
		}
		indexPreg_img++;
	}
	yaContestada_img = true;
}

function resetQuiz_img() {
	indexPreg_img = 0;
	yaContestada_img = false;
	correctas_img = 0;
	turismoQuiz_img();
}
