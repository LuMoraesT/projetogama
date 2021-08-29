import React, { Component, useState } from 'react'
import axios from 'axios'
import './style.css'

export default function Cadastro() {
    const [nome, setNome] = useState('')
    const [cargoPretendido, setCargoPretendido] = useState('')
    const [dataNascimento, setdataNascimento] = useState('')
    const [estadoCivil, setestadoCivil] = useState('')
    const [sexo, setSexo] = useState('')
    const [endereco, setEndereco] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [cep, setCep] = useState('')
    const [telefone1, setTelefone1] = useState('')
    const [telefone2, setTelefone2] = useState('')
    const [celular, setCelular] = useState('')
    const [contato, setContato] = useState('')
    const [email, setEmail] = useState('')
    const [identidade, setIdentidade] = useState('')
    const [cpf, setCpf] = useState('')
    const [possuiVeiculo, setPossuiVeiculo] = useState('')
    const [habilitacao, setHabilitacao] = useState('')

    const enviarFormulario = async (e) => {
        e.preventDefault()
        const candidato = {
            nome,
            cargoPretendido,
            dataNascimento,
            endereco,
            bairro,
            cidade,
            cep,
            celular,
            email,
            identidade,
            cpf,
            estadoCivil,
            sexo,
            telefone1,
            telefone2,
            contato,
            possuiVeiculo,
            habilitacao
        }
        console.log('entramos', candidato)
        try {
            const result = await axios.post('http://immense-savannah-04223.herokuapp.com/cadastrar', candidato)
            limparCampos()
            alert(result.data.msg)
            
        } catch (error) {
         console.error(error.message) 
         alert(error.message)  
        }
    }

    const limparCampos = () => {
        setNome('')
        setCargoPretendido('')
        setdataNascimento('')
        setestadoCivil('')
        setSexo('')
        setEndereco('')
        setBairro('')
        setCidade('')
        setCep('')
        setTelefone1('')
        setTelefone2('')
        setCelular('')
        setContato('')
        setEmail('')
        setIdentidade('')
        setCpf('')
        setPossuiVeiculo('')
        setHabilitacao('')
    }

    const buscaEndereco = async (cep) => {
        setCep(cep)
        if(cep.length != 8) return

        const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            .then(r => {
                console.log(r.data.bairro)
                setBairro(r.data.bairro)
                setCidade(r.data.localidade)
                setEndereco(r.data.logradouro)
            })
    }

    return (
        <form onSubmit={enviarFormulario}>
            <section id="formulario">
                <div className="titulo">
                    <h3>DADOS PESSOAIS</h3>
                    <hr />
                </div>
                <div className="nome_cargo">
                    <div className="campo">
                        <label for="nome">Nome completo<span className="obrigatorio">*</span></label>
                        <input type="text" id="nome" onChange={e => setNome(e.target.value)} />
                    </div>
                    <div className="campo">
                        <label for="Cargo pretendido">Cargo pretendido<span className="obrigatorio">*</span></label>
                        <input type="text" id="CargoPretendido" onChange={e => setCargoPretendido(e.target.value)} />
                    </div>
                </div>
                <div className="nascimento_estadocivil_sexo">
                    <div className="campo">
                        <label for="data de nascimento">Data de nascimento<span className="obrigatorio">*</span></label>
                        <input type="date" id="datadenascimento" onChange={e => setdataNascimento(e.target.value)} />
                    </div>
                    <div className="campo">
                        <label for="estado civil">Estado civil</label>
                        <select onChange={e => setestadoCivil(e.target.value)}>
                            <option value="Solteiro(a)">Solteiro(a)</option>
                            <option value="Casado(a)">Casado(a)</option>
                            <option value="Divorciado(a)">Divorciado(a)</option>
                            <option value="Outros">Outros</option>
                        </select>
                    </div>
                    <div className="campo">
                        <label for="sexo">Sexo</label>
                        <select onChange={e => setSexo(e.target.value)}>
                            <option value="Feminino">Feminino</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Outros">Outros</option>
                        </select>
                    </div>
                </div>
                <div className="endereco">
                    <div className="campo">
                        <label for="endereço">Endereço<span className="obrigatorio">*</span></label>
                        <input type="text" value={endereco} id="endereço" onChange={e => setEndereco(e.target.value)} />
                    </div>
                </div>
                <div className="bairro_cidade">
                    <div className="campo">
                        <label for="bairro">Bairro<span className="obrigatorio">*</span></label>
                        <input type="text" value={bairro} id="bairro" onChange={e => setBairro(e.target.value)} />
                    </div>
                    <div className="campo">
                        <label for="cidade">Cidade<span className="obrigatorio">*</span></label>
                        <input type="text" value={cidade} id="cidade" onChange={e => setCidade(e.target.value)} />
                    </div>
                </div>
                <div className="cep_tel1_tel2">
                    <div className="campo">
                        <label for="cep">CEP<span className="obrigatorio">*</span></label>
                        <input type="text" id="cep" onChange={e => buscaEndereco(e.target.value)} />
                    </div>
                    <div className="campo">
                        <label for="telefone fixo">Telefone Fixo 1</label>
                        <input type="text" id="telefonefixo" onChange={e => setTelefone1(e.target.value)} />
                    </div>
                    <div className="campo">
                        <label for="telefone fixo">Telefone Fixo 2</label>
                        <input type="text" id="telefonefixo" onChange={e => setTelefone2(e.target.value)} />
                    </div>
                </div>
                <div className="cel_contato_email">
                    <div className="campo">
                        <label for="celular">Celular<span className="obrigatorio">*</span></label>
                        <input type="text" id="celular" onChange={e => setCelular(e.target.value)} />
                    </div>
                    <div className="campo">
                        <label for="contato">Contato</label>
                        <input type="text" id="outrocontato" onChange={e => setContato(e.target.value)} />
                    </div>
                    <div className="campo">
                        <label for="email">E-mail<span className="obrigatorio">*</span></label>
                        <input type="text" id="email" onChange={e => setEmail(e.target.value)} />
                    </div>
                </div>
                <div className="titulo">
                    <h3>DOCUMENTOS</h3>
                    <hr />
                </div>
                <div className="rg_cpf_veiculo_cnh">
                    <div className="campo">
                        <label for="identidade">Identidade<span className="obrigatorio">*</span></label>
                        <input minLength="9" maxLength="9" type="text" id="identidade" onChange={e => setIdentidade(e.target.value)} />
                    </div>
                    <div className="campo">
                        <label for="cpf">CPF<span className="obrigatorio">*</span></label>
                        <input minLength="11" maxLength="11" type="text" id="cpf" onChange={e => setCpf(e.target.value)} />
                    </div>
                    <div className="campo">
                        <label for="possui veiculo">Possui veículo</label>
                        <select onChange={e => setPossuiVeiculo(e.target.value)}>
                            <option value="Sim">Sim</option>
                            <option value="Não">Não</option>
                        </select>
                    </div>
                    <div className="campo">
                        <label for="habilitação">Habilitação</label>
                        <select onChange={e => setHabilitacao(e.target.value)}>
                            <option value="Categoria">Categoria</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            <option value="E">E</option>
                            <option value="E">E</option>
                        </select>
                    </div>
                </div>
                <input id="botaoEnvio" type="submit" value="Enviar" />
            </section>
        </form>
    )
}

