/* hi
testing
*/

// <button
// onclick="document.getElementById('myImage').src='pic_veg.jpg'"
// >Turn on the light</button>
//
// <img id="myImage" src="pic_veg.jpg" style="width:100px">

// <button
// onclick="document.getElementById('myImage').src='pic_bulboff.gif'"
// >Turn off the light</button>

function showimg(id){
  document.getElementById(id).style.display='block';
}

var pic = document.getElementById("img");
var list = ["bike.jpg", "netflix.jpg", "writing.jpg"];

var index = 0;

function slideshow(){
  pic.setAttribute('src', list[index]);
  // put picture name before setAttribute

  if (index == list.length - 1){
    index = 0;
  }
  else {
    index ++;
  }
}

setInterval(slideshow,2000);
