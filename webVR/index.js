var x_pitch = Math.random()*10 + 3;
var y_pitch = Math.random()*10 + 3;
console.log(x_pitch + " " + y_pitch);
var pitchPattern = document.getElementById("my_pitch").setAttribute("repeat", `${x_pitch}, ${y_pitch}`)
console.log(pitchPattern);
