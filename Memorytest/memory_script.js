document.addEventListener('DOMContentLoaded', () => {
	const cardArray = [
		{
			name: 'rinoceronte',
			img: 'img/150x150_mural1.jpg'
		},
		{
			name: 'chica',
			img: 'img/150x150_mural2.jpg'
		},
		{
			name: 'arte_urbano',
			img: 'img/150x150_mural3.jpg'
		},
		{
			name: 'maradona',
			img: 'img/150x150_mural4.jpg'
		},
		{
			name: 'gardel',
			img: 'img/150x150_mural5.jpg'
		},
		{
			name: 'frida',
			img: 'img/150x150_mural6.jpg'
		},
		{
			name: 'rinoceronte',
			img: 'img/150x150_mural1.jpg'
		},
		{
			name: 'chica',
			img: 'img/150x150_mural2.jpg'
		},
		{
			name: 'arte_urbano',
			img: 'img/150x150_mural3.jpg'
		},
		{
			name: 'maradona',
			img: 'img/150x150_mural4.jpg'
		},
		{
			name: 'gardel',
			img: 'img/150x150_mural5.jpg'
		},
		{
			name: 'frida',
			img: 'img/150x150_mural6.jpg'
		}
	];

	cardArray.sort(() => 0.5 - Math.random());

	let grid = document.querySelector('.grid-turismo-memory');
	let resultDisplay = jQuery('#result')[0];
	let intentosDisplay = jQuery('#intentos')[0];
	let responseDisplay = jQuery("#response-turismo-memory")[0];
	let cardsChosen = [];
	let cardsChosenId = [];
	let cardsWon = [];
	let intentos = 0;

	function createBoard() {
		for (let i = 0; i < cardArray.length; i++) {
			let imgCard = `<img data-idcard="${i}" class="img-responsive img-turismo-memory" src="img/memotest.jpg">`;
			jQuery(grid).append(imgCard);
		}
		jQuery(".img-turismo-memory").each(function(i, v) {
			jQuery(v).on('click', flipCard);
		});
	}

	function checkForMatch() {
		let cards = document.querySelectorAll('.img-turismo-memory');
		let optionOneId = cardsChosenId[0];
		let optionTwoId = cardsChosenId[1];

		if(optionOneId == optionTwoId) {
			intentosDisplay.innerHTML = intentos;
			setTimeout(function () {
                jQuery(cards[optionOneId]).attr('src', 'img/memotest.jpg');
				jQuery(cards[optionTwoId]).attr('src', 'img/memotest.jpg');
				responseDisplay.innerHTML = '';
                cardsChosen.length = 0;
				cardsChosenId.length = 0;
				jQuery(".grid-turismo-memory").removeClass("pointereven-none");
			}, 1000);
		}
		else if(cardsChosen[0] == cardsChosen[1]) {
			intentosDisplay.innerHTML = intentos;
			setTimeout(function () {
				jQuery(cards[optionOneId]).off('click', flipCard);
				jQuery(cards[optionTwoId]).off('click', flipCard);
				jQuery(cards[optionOneId]).addClass('img-white');
				jQuery(cards[optionTwoId]).addClass('img-white');
				responseDisplay.innerHTML = '';
                cardsChosen.length = 0;
				cardsChosenId.length = 0;
				jQuery(".grid-turismo-memory").removeClass("pointereven-none");
			}, 1000);
			cardsWon.push(cardsChosen);
		} else {
			intentosDisplay.innerHTML = intentos;
			setTimeout(function () { 
				jQuery(cards[optionOneId]).attr('src', 'img/memotest.jpg');
				jQuery(cards[optionTwoId]).attr('src', 'img/memotest.jpg');
				responseDisplay.innerHTML = '';
                cardsChosen.length = 0;
				cardsChosenId.length = 0;
				jQuery(".grid-turismo-memory").removeClass("pointereven-none");
			}, 1000);
		}
		resultDisplay.textContent = cardsWon.length;
		if (cardsWon.length == cardArray.length / 2) {
			document.getElementById("memory-win").style.display = "block";
		}
	}

	function flipCard() {
		let cardId = jQuery(this).data('idcard');
		jQuery(this).attr('src', cardArray[cardId].img);
		cardsChosen.push(cardArray[cardId].name);
		cardsChosenId.push(cardId);
		if (cardsChosen.length == 2) {
			intentos++;
			jQuery(".grid-turismo-memory").addClass("pointereven-none");
			checkForMatch();
		}
	}

	jQuery("#resetMemory").on('click', function() {
		cardArray.sort(() => 0.5 - Math.random());

		jQuery(".grid-turismo-memory img").remove();
	
		grid = document.querySelector('.grid-turismo-memory');
		resultDisplay = jQuery('#result')[0];
		intentos = 0;
		intentosDisplay.innerHTML = intentos;
		resultDisplay.textContent = 0
		cardsChosen = [];
		cardsChosenId = [];
		cardsWon = [];
		intentos = 0;
		document.getElementById("memory-win").style.display = "none";
	
		createBoard();
	});

	createBoard();
})