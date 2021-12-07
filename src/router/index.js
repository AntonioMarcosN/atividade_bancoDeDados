const express = require("express")
const { translateAliases } = require("../models/tarefas")
const router = express.Router()

router.get("/", function (req, res){
    translateAliases.status(200).send({
        title:"Senac PE - Backend - ToDo List",
        version: "1.0.0"
    })
})

module.exports = router
