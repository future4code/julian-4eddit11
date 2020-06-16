import React, { useState } from "react";
import styled from 'styled-components';
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios'
import { useForm } from '../../hooks/useForm'
import logo from '../../../img/logo.png'
import { Button } from "@material-ui/core";
import { theme, useStyles } from '../../MaterialTheme/theme';
import { ThemeProvider  } from '@material-ui/core/styles';


export const SuperContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


export const LoginImg = styled.img`

width  : 300px;
margin: 40px 0;

`

export const DivInterna = styled.div`
  width: 400px;
  box-sizing: border-box;
  margin: 5px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #43535b;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column; 
  width: 70%;
`

export const Preenchimento = styled.input`
   border: none;
   height:30px;
   border-bottom: 1px solid black;
   margin-bottom: 32px;
   width:100%;
   outline: none;
   
   :valid {
     color: green;
   }
   :invalid {
     color: red;
   }
` 

export const Botao = styled.button`
    border: 1px solid black;
    width:30%;
    height: 30px;
    color: #6e7983;
    align-self: center;
`

export const ImagemLogo = styled.img`
  width: 30%;
`

export const TextoLogin = styled.p`
  cursor: pointer;
`

export const MensagemErro = styled.p`
  margin: 8px;
  color: red;
  align-self: center;
`
export const SpanClique = styled.span`
font-size: 14px;
text-transform: uppercase;
cursor:pointer;

`



const SignupPage = () => {
  const classes = useStyles()
  document.title="Cadastro"
  const history = useHistory();
  const token = localStorage.getItem("token");

  if(!token)
    history.push('/')

  const [erro, setErro] = useState(null);
  const [form, onChangeInput] = useForm({ 
      nome:"", 
      email:"",
      senha:""
    });  
 
  const enviarCadastro = async (event) => {
    event.preventDefault();

    const body = {
      username: form.nome,
      email: form.email,
      password: form.senha
    }
    
    axios
      .post(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup`, body)
      .then(response=>{
        window.localStorage.setItem("token", response.data.token);
        window.localStorage.setItem("username", response.data.user.username);
        
        history.push('/')
      })
      .catch(error=>{
        setErro(error.response.data.message);
      })

  };

  return (

    <SuperContainer>
      <DivInterna>
            <LoginImg src={logo} alt={'logo'} /> 
          <h2>Cadastro</h2>
          <FormContainer onSubmit={enviarCadastro}>
            {erro && <MensagemErro>{erro}</MensagemErro>}
            <label for="nome">Nome de usuário</label>

            <ThemeProvider theme={theme}>
            <Preenchimento
              
              type='text'
              placeholder='Nome de usuário'
              onChange={onChangeInput}
              value={form.nome}
              name="nome"
              pattern= "[A-Za-z ]{3,}"
              required
            />
            <label for="email">E-mail</label>
            <Preenchimento
              type='email'
              placeholder='E-mail'
              onChange={onChangeInput}
              value={form.email}
              name="email"
              required
            />
            <label for="senha">Senha</label>
            <Preenchimento
              placeholder="Senha"
              type="password"
              onChange={onChangeInput}
              value={form.senha}
              name='senha'
              required
            />
           <Button        
        classes={{
          root: classes.root, 
          }}        
        variant={"contained"}
        color={"primary"} 
        type={"submit"}>
          Cadastrar
        </Button>
        </ThemeProvider>
          </FormContainer>
          <TextoLogin>Já possui uma conta?            
          <Link to={'/'}>
      <SpanClique>             ENTRAR</SpanClique>
      </Link> 
      </TextoLogin>
      </DivInterna>
    </SuperContainer>

  );
}




export default SignupPage;
