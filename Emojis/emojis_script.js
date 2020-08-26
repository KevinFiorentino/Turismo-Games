const myQuestions = [  
	{
        id: "1",
        img: "./img/1.Flores.png",
		answers: {
			a: "Floresta",
			b: "Agronomía",
            c: "Villa del Parque",
            d: "Flores",
            e: "Parque Chacabuco",
		},
		correctAnswer: "Flores",
		description: "En la Basílica San José de Flores, ícono del barrio, el Papa Francisco dio sus primeros pasos en la vida parroquial. <a href='https://mail.google.com/mail/u/1/#inbox/FMfcgxwJXfglnClNhTVtGqmKMnghVCJM' target='blank_'>Conocé más sobre la Basílica</a>"
    },
    {
        id: "2",
        img: "./img/2.Colegiales.png",
		answers: {
			a: "Belgrano",
			b: "Recoleta",
            c: "Colegiales",
            d: "Boedo",
            e: "Saavedra",
		},
		correctAnswer: "Colegiales",
		description: "En este barrio funciona el Mercado de Pulgas, gran galpón donde se pueden encontrar todo tipo de curiosidades y donde se destacan las antigüedades en mobiliario y objetos de todas las épocas. <a href='https://turismo.buenosaires.gob.ar/es/otros-establecimientos/mercado-de-pulgas-0' target='blank_'>Conocé más sobre el Mercado</a>"
    },
    {
        id: "3",
        img: "./img/3.constitucion.png",
		answers: {
			a: "Villa Santa Rita",
			b: "Parque Avellaneda",
            c: "Belgrano",
            d: "Constitución",
            e: "Vélez Sarsfield",
		},
		correctAnswer: "Constitución",
		description: "La construcción de la Estación de ferrocarril transformó por completo el aspecto de la zona, ya que era muy lujosa. Fue reconstruida a lo largo de ¡más de 100 años!"
    },
    {
        id: "4",
        img: "./img/4.Mataderos.png",
		answers: {
			a: "Caballito",
			b: "Barracas",
            c: "San Nicolás",
            d: "Villa Soldati",
            e: "Mataderos",
		},
		correctAnswer: "Mataderos",
		description: "Allí funciona la Feria de Mataderos, en la cual se puede ver el costado más autóctono de Buenos Aires. Cuenta con más de 700 puestos de artesanías y comidas tradicionales para comer escuchando folklore de fondo. <a href='https://turismo.buenosaires.gob.ar/es/otros-establecimientos/feria-de-mataderos' target='blank_'>Conocé más sobre la Feria</a>"
    },
    {
        id: "5",
        img: "./img/5.Agronomia.png",
		answers: {
			a: "Parque Chas",
			b: "Agronomía",
            c: "Villa del Parque",
            d: "Palermo",
            e: "Villa Luro",
		},
		correctAnswer: "Agronomía",
		description: "Lleva el nombre actual desde 1904, cuando se instaló el entonces Instituto Superior de Agronomía y Veterinaria (hoy, Facultad de Agronomía y Veterinaria de la UBA). ¿Sabías que allí vivió entre1934 y 1951 el escritor Julio Cortázar?"
    },
    {
        id: "6",
        img: "./img/6.Villa Real.png",
		answers: {
			a: "Villa Ortúzar",
			b: "Parque Patricios",
            c: "Villa Riachuelo",
            d: "Nueva Pompeya",
            e: "Villa Real",
		},
		correctAnswer: "Villa Real",
		description: "En este barrio se encuentra la Fundación Museo del Automóvil, donde se pueden ver autos antiguos como el Hudson que perteneció a Jorge Luis Borges, el Dodge que llevó a Maradona el día de su casamiento y pertenencias de ídolos del automovilismo como Juan Manuel Fangio y Oscar Gálvez. <a href='https://turismo.buenosaires.gob.ar/es/otros-establecimientos/museo-del-autom%C3%B3vil' target='blank_'>Conocé más sobre el Museo</a>"
    },
    {
        id: "7",
        img: "./img/7.Retiro.png",
		answers: {
			a: "Constitucion",
			b: "Núñez",
            c: "Retiro",
            d: "Villa Pueyrredón",
            e: "San Cristóbal",
		},
		correctAnswer: "Retiro",
		description: "Centro financiero y residencial a la vez, fue la puerta de entrada de millones de inmigrantes entre los siglos XIX y XX. Recorriendo el barrio es posible ver numerosos edificios y monumentos históricos, además de muchas iglesias tradicionales de la ciudad. <a href='https://turismo.buenosaires.gob.ar/es/recorrido/retiro-0' target='blank_'>Conocé todo lo que tiene para ofrecerte Retiro</a>"
    },
    {
        id: "8",
        img: "./img/8.San Cristobal.png",
		answers: {
			a: "San Telmo",
			b: "Puerto Madero",
            c: "La Boca",
            d: "Chacarita",
            e: "San Cristóbal",
		},
		correctAnswer: "San Cristóbal",
		description: "Es un barrio multicultural. Allí se encuentran, por ejemplo, la Mezquita Al Ahmad, el Centro Okinawense y el famoso Bar de Cao, entre otros bares notables de la Ciudad."
    },
    {
        id: "9",
        img: "./img/9.Villa Devoto.png",
		answers: {
			a: "Villa Lugano",
			b: "Villa Riachuelo",
            c: "Monte Castro",
            d: "Boedo",
            e: "Villa Devoto",
		},
		correctAnswer: "Villa Devoto",
		description: "Es este barrio se encuentra el Café de García. Su clásica picada y la cantidad de fotos y objetos que adornan sus paredes lo convierten en uno de los bares tradicionales de Buenos Aires. <a href='https://turismo.buenosaires.gob.ar/es/gastronomico/caf%C3%A9-de-garc%C3%ADa' target='blank_'>Descubrí todos los adornos que pintan este Bar</a>"
    },
    {
        id: "10",
        img: "./img/10.Belgrano.png",
		answers: {
			a: "Villa Gral. Mitre",
			b: "Parque Avellaneda",
            c: "Belgrano",
            d: "Parque Patricios",
            e: "Villa Pueyrredón",
		},
		correctAnswer: "Belgrano",
		description: "Es un barrio lleno de viejas e importantes casonas señoriales, aunque los últimos años, se construyeron modernos edificios que contrastan con su estilo clásico de antaño. ¿Sabías que este barrio pertenecía a la Provincia de Buenos Aires hasta 1887? <a href='https://turismo.buenosaires.gob.ar/es/recorrido/belgrano-0' target='blank_'>Conocé todo lo que tiene para ofrecerte Belgrano</a>"
	},
];

var indexPreg = 0;
var yaContestada = false;
var correctas = 0;

function turismoemojis() {
	if(indexPreg < myQuestions.length) {
		yaContestada = false;
		document.getElementById("turismo-emojis").style.display = "block";
		document.getElementById("buttonStart").style.display = "none";
		document.getElementById("buttonNext").style.visibility = "hidden";
		document.getElementById("turismo-emojis").innerHTML = `
			<div class="containeremojis">
                <div class="question">¿Qué barrio de la Ciudad se esconde en estos emojis?</div>
                <div class="img-emojis">
                    <img class="img-responsive" src="${myQuestions[indexPreg].img}">
                </div>

                <div class="button-flex">
                    <button class="button-collapse" data-toggle="collapse" data-target="#emojis${myQuestions[indexPreg].id}">Responder</button>
                </div>
                <div id="emojis${myQuestions[indexPreg].id}" class="collapse">
                    <ul class="listAnswers">
                        <li><strong>a. </strong><a onClick="validateAnswer(this, '${myQuestions[indexPreg].answers.a}')">${myQuestions[indexPreg].answers.a}</a></li>
                        <li><strong>b. </strong><a onClick="validateAnswer(this, '${myQuestions[indexPreg].answers.b}')">${myQuestions[indexPreg].answers.b}</a></li>
                        <li><strong>c. </strong><a onClick="validateAnswer(this, '${myQuestions[indexPreg].answers.c}')">${myQuestions[indexPreg].answers.c}</a></li>
                        <li><strong>d. </strong><a onClick="validateAnswer(this, '${myQuestions[indexPreg].answers.d}')">${myQuestions[indexPreg].answers.d}</a></li>
                        <li><strong>e. </strong><a onClick="validateAnswer(this, '${myQuestions[indexPreg].answers.e}')">${myQuestions[indexPreg].answers.e}</a></li>
                    </ul>
                </div>

				<div class="progress">
				  <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="${indexPreg+1}"
				  	aria-valuemin="1" aria-valuemax="${myQuestions.length}" style="width:${((indexPreg+1)/myQuestions.length)*100}%">
				  </div>
				</div>
				<div class="emojisprogress">${indexPreg+1}/${myQuestions.length}</div>
				<div id="emojisdescrip"></div>
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
		document.getElementById("turismo-emojis").innerHTML = `
			<div class="emojisend">
				<p>Cantidad respuestas correctas: ${correctas}/${myQuestions.length}</p>
				<h1>¡Felicitaciones!</h1>
				<p>${mensaje}</p>
				<p>
					Seguí aprendiendo sobre la 
					<a href="https://turismo.buenosaires.gob.ar/">Ciudad de Buenos Aires</a>
				</p>
				<button onClick="resetemojis()" class="btn btn-primary btn-emojisreset">Jugar otra vez!</button>
			</div>`;
	}
}

function validateAnswer(value, answerUser) {
	document.getElementById("buttonNext").style.visibility = "visible";
	if(yaContestada == false) {
		if(myQuestions[indexPreg].correctAnswer == answerUser) {
			value.innerHTML = value.text + " " + "<span class='glyphicon glyphicon-ok'></span>";
			value.setAttribute('style', 'color: green !important');
			document.getElementById("emojisdescrip").innerHTML = `${myQuestions[indexPreg].description}`;
			correctas++;
		}
		else {
			value.innerHTML = value.text + " " + "<span class='glyphicon glyphicon-remove'></span>";
			value.setAttribute('style', 'color: red !important');
			document.getElementById("emojisdescrip").innerHTML = `${myQuestions[indexPreg].description}`;
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

function resetemojis() {
	indexPreg = 0;
	yaContestada = false;
	correctas = 0;
	turismoemojis();
}
