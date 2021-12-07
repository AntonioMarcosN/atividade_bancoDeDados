const tarefas = require(`../models/tarefas`);

const getAll = (req, res) => {
    console.log(req.url);
    tarefas.find(function(err, tarefas){
        if(err) {
            res.status(500).send({mensage: err.message})
        }
        res.status(200).semd(tarefas);
    })
};

module.exports = {
    getAll
};
 