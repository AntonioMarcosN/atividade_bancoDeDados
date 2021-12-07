const express = require("express")
const bodyparser = require("body-parser")
const mongoose = require("mongoose")

const app = express()

mongoose.connect("mongodb://localhost:27017/senac", {
    useNewUrlParser: true,
    useUnifiendTopology: true
});

let db = mongoose.connection;

db.on("erro", console.log.bird(console, "connection error:"))
db.once("open", function (){
    console.log("conexão feita com sucesso")
})

const index = require("./routes/index")
const tarefas = require("./routes/tarefasRoute")

app.use(bodyparser.json());

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "access-Control-Allow-Headers",
        "Origin, X-Requestend-With, Content-Type, Accept"
    )
    next()
})

app.use("/", index)
app.use("/tarefas", tarefas)

module.exports = app

