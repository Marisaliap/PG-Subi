const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const serve = express();
const http = require('http');
const server= http.createServer(serve);
require("./db.js");
const socketio= require('socket.io');
const io = socketio(server);

io.on("connection",socket=>{
  let nombre
    socket.on("conectado",(nomb)=>{
      nombre=nomb
        socket.broadcast.emit("messages",{nombre:nombre,message:`${nombre} se ha conectado`})
    });
    socket.on("message",(nombre,message)=>{
        io.emit("messages",{nombre,message});
    });
    socket.on("disconnect",()=>{
        io.emit("messages",{server:"server",message:`${nombre} se ha desconectado`});
    });
});

serve.name = "API";
serve.use(express.urlencoded({ extended: true, limit: "50mb" }));
serve.use(express.json({ limit: "50mb" }));
serve.use(cookieParser());
serve.use(morgan("dev"));
serve.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

serve.use("/", routes);

// Error catching endware.
serve.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});



module.exports = server;
