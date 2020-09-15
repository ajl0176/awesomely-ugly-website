var sad = "https://cdn.britannica.com/64/158064-050-1524E1FF/Alpacas.jpg";
var happy = "https://cdn.britannica.com/60/188560-050-DF1A860A/Alpacas.jpg";

function changeImage() {

	var leftImage = document.getElementById('left');
    var rightImage = document.getElementById('right');
	if (leftImage.src == happy){
		leftImage.src = sad;
		rightImage.src = happy;
	}
	else if (leftImage.src == sad) {
		leftImage.src = happy;
		rightImage.src = sad;
	}
}
