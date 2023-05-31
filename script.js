let colors = ["red", "blue", "green", "yellow", "purple", "black"];
let index=0;

function changeColors(){
    document.getElementsByTagName("body")[0].style.background=colors[index++]
    if (index > colors.length -1){
        index=0
    } 
}