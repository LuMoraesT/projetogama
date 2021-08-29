const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CandidatoSchema = new Schema({
    nome: {
        type: String,
        required:true
    },
    cargoPretendido:{
        type: String,
        required:true
    },
    dataNascimento: {
        type: Date,
        required:true
    },
    estadoCivil:{
        type: String
    },
    sexo:{
        type: String
    },
    endereco: {
        type: String,
        required:true
    },
    bairro: {
        type: String,
        required:true
    },
    cidade: {
        type: String,
        required:true
    },
    cep: {
        type: String,
        required:true
    },
    telefone1: {
        type: String
    },
    telefone2: {
        type: String
    },
    celular: {
        type: String,
        required:true
    },
    contato: {
        type: String
    },
    email: {
        type: String,
        required:true
    },
    identidade: {
        type: String,
        required:true
    },
    cpf: {
        type: String,
        required:true
    },
    possuiVeiculo: {
        type: Boolean
    },
    habilitacao: {
        type: String
    }
})

module.exports = Candidato = mongoose.model('candidato', CandidatoSchema)