var i=0;
var j=0;
function divchange(){
    var divtag=document.getElementById("div1");
    var bgcolor= ["purple","aqua","blue","pink","maroon","violet","yellow","red","brown"];
    var txtcolor= ["red","black","gray","yellow"];
    divtag.style.backgroundColor=bgcolor[i];
    divtag.style.color=txtcolor[j];
    i=(i+1)%bgcolor.length;
    j=(j+1)%txtcolor.length;
}
setInterval(divchange,1000);