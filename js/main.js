var i = 0;
var images = [];
var time = 3000;

//image list
images[0] = 'img/dog1.jpg';
images[1] = 'img/dog2.jpg';
images[2] = 'img/dog3.jpg';

//change image
function changeImg(){
	document.slide.src = images[i];

	if(i < images.length - 1){
		i++;
	} else {
		i = 0;
	}

	setTimeout('changeImg()', time);
}


window.onload = changeImg;