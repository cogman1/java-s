var con = "";
for (f = 0; f < 10; f++) {
  if (f === 3) {
    continue;
  }
  con += "the no is" + f + "<br>";
}
document.getElementById("loop").innerHTML = con;
