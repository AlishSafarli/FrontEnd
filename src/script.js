var i = 0;
var txt = "Data loading"; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

document.onload = function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
};