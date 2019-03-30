//set slideWidth, important for setting the container of the slide show's width
var slideWidth = 875;

$(window).ready(function(){

var currentSlide = 0;

//get number of slides

var allSlides = document.getElementsByClassName('slides').length;

//multiply number of slides by the width of the slides, append with +px so it works in css
var width = (allSlides*slideWidth)+'px';

//set width of entire container to hold all images

document.getElementById('slideul').style.width = width;

//get the element to be used as next arrow
//since i used class in html i thought i would need the index number
//otherwise would it just be a node list?
var right = document.getElementsByClassName('right')[0];
//function when the arrow is clicked
right.onclick = function(){
	//increments current slide by 1
	currentSlide++;
	//if the current slide index number is greater than/equal to #of all slides nodelist
	//send back to first slide
	if(currentSlide>=allSlides)
		{currentSlide = 0;
	}
	//sets viewport to either currentslide+1 or currentslide =0
	setFramePosition(currentSlide);
	
};

//gets element to be used as prev arrow, again i used classes in the HTML
var left = document.getElementsByClassName('left')[0];
//left arrow onclick function
left.onclick = function(){
	//decreases currentSlide value by 1
	currentSlide--;
	//if currentslide # is less than 0, then the current slide is looped back
	//to the end which might have something to do with the nodelist,
	//however i don't know how allSlides which = 3 then - 1 = 3?
	//maybe because currentslide var is set to 0, and the slides are numbered 0, 1, 2
	// in that regard, so allSlides -1 = 2 would be true in terms of where it sends the slideshow
		if(currentSlide<0){currentSlide = allSlides-1;
	}
	setFramePosition(currentSlide);
};
});

// this is the function that actually moves the slideshow under the viewport
//i was confused about pos but it is a placeholder for currentslide essentially?
function setFramePosition(pos){
	//this determines how far over the slideshow moves via.. coordinate
	// 875 * slide value * -1
	//ex 875 * 1 * -1 = -875
	//thus the left side of the slide show moves over to -875 relative
	//to where it was, which was 0
	var px = slideWidth*pos*-1;

	//this animates it and i have no idea how it works.
	//except that 300 is the speed
	// and px tells it where to animate to
	//would have no idea where to start writing this in vanilla javascript
	$('#slider-container ul').animate({
		left: px
	}, 300);
}


