var i = 0;
var img = document.getElementsByTagName("img");
var buttonForward = document.querySelector(".forward");
var wynik = document.querySelector(".wynik figure")
buttonForward.addEventListener("click", sliderForward);



function sliderForward() {
    if (i < img.length - 1) {

        wynik.appendChild(img[i]);
        img[i].style.display = "block";
        i++;
        console.log(i)
    } else {

        for (i = 0; i < img.length; i++) {
            img[i].style.display = "none"
        };
        i = 0;
    }
}
