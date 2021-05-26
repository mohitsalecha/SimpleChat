
const http = require("http").createServer();

const io = require("socket.io")(http, {
    cors: {origin:"*"},
    allowEIO3: true // false by default
});

io.on("connection", (socket) =>{
    console.log("a new user connected!");

    socket.on("message",(message)=>{
        console.log(message);

        io.emit("message", `${socket.id.substr(0,2)} said ${message}`);
    });
});

http.listen(8080, ()=> {
    console.log("listining at http://localhost:8080");
});