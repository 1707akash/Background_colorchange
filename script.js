let color = ["lightblue","orange","green","red","lightgreen","brown","orangered","yellow","azure","cyan","grey","white","gray","purple","pink","magenta","aqua","coral","aliceblue","teal","maroon","olive","blue","fuchsia","black","aquamarine","beige","antiquewhite","bisque","blueviolet","blanchealmond"];
let index=0;
let btn= document.getElementById("btn");

btn.addEventListener("click",colorChange);

function colorChange(){
    if(index==color.length){
        index=0;
    }
    document.body.style.backgroundColor= color[index];
    index++;
}