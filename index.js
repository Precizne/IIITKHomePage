let slideIndex = 0;

function shiftSlide(x) {
	displaySlide(slideIndex += x);
}

function scrollSlide() {
	displaySlide(slideIndex += 1);
	setTimeout(scrollSlide, 8000);
}

function displaySlide(x) {
	let slides = document.getElementsByClassName("slides");
	if(x > slides.length - 1) {
		slideIndex -= slides.length;
	}
	if(x < 0) {
		slideIndex += slides.length;
	}
	for(let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex].style.display = "block";
}


let carIndex = 0;

function scrollCar() {
	displayCar(carIndex += 1);
	setTimeout(scrollCar, 8000);
}

function displayCar(x) {
	let cars = document.getElementsByClassName("cars");
	if(x > cars.length - 1) {
		carIndex -= cars.length;
	}
	if(x < 0) {
		carIndex += cars.length;
	}
	for(let i = 0; i < cars.length; i++) {
		cars[i].style.display = "none";
	}
	cars[carIndex].style.display = "block";
}

function hideAll() {
	var main = document.getElementById("main");
	var mtech = document.getElementById("left");
	var convo = document.getElementById("right");
	var prev = document.getElementById("prev");
	var next = document.getElementById("next");

	if(mtech.getBoundingClientRect().bottom > main.getBoundingClientRect().top - 200) {
		mtech.classList.add("hideall");
	}
	else {
		mtech.classList.remove("hideall");
	}

	if(convo.getBoundingClientRect().bottom > main.getBoundingClientRect().top - 200) {
		convo.classList.add("hideall");
	}
	else {
		convo.classList.remove("hideall");
	}

	if(prev.getBoundingClientRect().bottom > main.getBoundingClientRect().top - 200) {
		prev.classList.add("hideall");
	}
	else {
		prev.classList.remove("hideall");
	}

	if(next.getBoundingClientRect().bottom > main.getBoundingClientRect().top - 200) {
		next.classList.add("hideall");
	}
	else {
		next.classList.remove("hideall");
	}
}