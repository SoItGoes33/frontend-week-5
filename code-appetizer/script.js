function changeImage () {
    var image = document.getElementById('myImage');
    if (image.src.match("ANd9GcTdrnbfQB4F2k2J9EGjIvaBZBoM0wOkVowgSMnmCSqNOGyS_BQSPo8NVRo")) {
        image.src = "http://people.ucsc.edu/~ddiep1/puppy.jpg";
    }
        else if (image.src.match('puppy')) {
        image.src="http://vignette4.wikia.nocookie.net/animalcrossing/images/e/e3/Lion-013-2048x2048.jpg/revision/latest?cb=20130406213028";
    }       else {
        image.src = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTdrnbfQB4F2k2J9EGjIvaBZBoM0wOkVowgSMnmCSqNOGyS_BQSPo8NVRo";
    }
}
