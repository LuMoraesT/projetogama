const mongoose = require('mongoose')

const dburl = 'mongodb+srv://lumoraest:kvq3230@cluster0.gor8c.mongodb.net/projetogama?retryWrites=true&w=majority'

mongoose.connect(dburl, { useNewUrlParser: true })
  .then(function(){
    console.log('Banco de Dados Conectado')
  })
  .catch(function(erro){
    console.log(erro)
  })




    


