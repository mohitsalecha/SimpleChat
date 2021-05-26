
var socket = io('ws://localhost:8080')

socket.on("message",(msg)=>{

    const el = document.createElement("li");
    el.innerHTML = msg;
    document.querySelector("ul").appendChild(el);
});

document.querySelector("button").onclick = () =>{
    const text = document.querySelector("input").value;
    socket.emit("message", text);
}