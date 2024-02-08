var arr=[{dp:"https://images.unsplash.com/photo-1621525109294-5aa0744da04f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ5fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D ",story:"https://images.unsplash.com/photo-1699693591784-c07b50614e4a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU5fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D"},

{dp:"https://plus.unsplash.com/premium_photo-1664869376052-e311913cbfa1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc0fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D", story:"https://images.unsplash.com/photo-1679072961019-f9d39db93c8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY3fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D"},

{dp:"https://images.unsplash.com/photo-1704427842764-08000905ac00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D",story:"https://images.unsplash.com/photo-1644483878413-1bdfe8d1180c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ2fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D"},
{dp:"https://images.unsplash.com/photo-1704208316515-a32f81e373ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU1fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D",story:"https://images.unsplash.com/photo-1587088155172-e9355df99c30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgzfFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D"},
{dp:"https://images.unsplash.com/photo-1702221422565-60f734cd90b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDk2fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D",story:"https://images.unsplash.com/photo-1642980074229-439281d19f29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwMnxTNE1LTEFzQkI3NHx8ZW58MHx8fHx8"}

];
var storiyan=document.querySelector("#storiyan")

var clutter=""
arr.forEach(function(elem,idx){
    clutter +=` <div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`
})

storiyan.innerHTML=clutter;

storiyan.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display="block"
document.querySelector("#full-screen").style.backgroundImage=`url(${arr[dets.target.id].story})`
setTimeout(function(){
    document.querySelector("#full-screen").style.display="none"

},3000)
})