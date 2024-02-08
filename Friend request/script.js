var istatus = document.querySelector("h5")


var btn = document.querySelector("#add")
var check =0


btn.addEventListener("click", function () {

if (check==0){
    istatus.innerHTML = "तेरा भी कटेगा"
    istatus.style.color = "green"
    btn.innerHTML="Remove"
    check=1
}
else{
    istatus.innerHTML="बच गया"
    istatus.style.color="red"
    btn.innerHTML="Confirm"
    check=0
}
})



