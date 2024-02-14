let profilepPic=document.getElementById("image");
let input=document.getElementById("input-file");
input.onchange=function() {
    profilepPic.src=createobjectURL(input.file[0])}