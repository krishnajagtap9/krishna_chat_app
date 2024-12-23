const http = require("http")
const express = require("express")
const cors = require("cors")
const socketIo = require("socket.io")

const user =[{}]

const app = express()

const server = http.createServer(app)

const io =socketIo("https://krishna-chat-appbackend.vercel.app/")



app.use(cors())
app.get("/",(req,res)=>{
    return res.json("hello")
})

io.on("connection",(socket)=>{
    console.log("welcome sir")
socket.on("joined",({Appdatanew} )=>{
user[socket.id]=Appdatanew

    console.log(`${Appdatanew}has joined the match`)
io.emit("userjoined",{user:`${user[socket.id]}`,message:`${user[socket.id]} Join the chat`})
socket.emit("Welcome",{user:`${user[socket.id]}`,message:`Welcome to the chat,${user[socket.id]}`})

})

socket.on("message",({MessageSend,id,formattedTime})=>{
// io.emit("newmessage",{ user:user[id],message:data.MessageSend,id:data.id})
io.emit("Sendmessage",{ user:user[id],MessageSend,id,formattedTime})
})

socket.on("disconnected",()=>{
    console.log(`${user[socket.id]}, left the chat`)
    io.emit("leftchat",{user:`${user[socket.id]}`})
})






})



server.listen(9000,()=>{
    console.log("the server is running at port 9000...")
})


