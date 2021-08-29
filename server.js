const express = require('express')
const cors = require('cors')
const Candidato = require('./models/candidato')

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(cors())

require('./config/database')
 
app.get('/', async function (req, res){
    const candidatos = await Candidato.find()
    res.json(candidatos);
})

app.post('/cadastrar', async function (req, res){
    const candidato = await Candidato.findOne({ cpf: req.body.cpf })

    if(candidato != null){
        res.json({msg: `O candidato(a) ${candidato.nome} já possui cadastro em nosso sistema`})
        return
    }

    const novoCandidato = new Candidato(req.body)

    novoCandidato.save().then(function(candidato){
        res.json({msg: `O candidato(a) ${candidato.nome} foi cadastrado(a) com sucesso`})
    })
 })

 const PORT = process.env.PORT || 3333;
 app.listen(PORT, () => {
     console.log(`Our app is running on port ${ PORT }`);
 });
