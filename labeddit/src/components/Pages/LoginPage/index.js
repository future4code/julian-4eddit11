import React from "react";
import { useHistory, Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import Axios from "axios";
import { baseUrl } from "../../Configs/url";
import logo from '../../../img/logo.png'
import {LoginContainer, LoginImg, LoginInput, LoginTextSpan,SpanClique} from './styles'
import { LoginForm } from "./styles";
import { Button } from "@material-ui/core";
import { ThemeProvider  } from '@material-ui/core/styles';
import { theme, useStyles } from '../../MaterialTheme/theme';



const LoginPage = () => {
  const classes = useStyles()

  const history = useHistory()
  const [form, onChangeInput] = useForm({
    email: "",
    password: ""
  })
  
  const onSubmitLogin = event => {
    event.preventDefault()
    const body = {
      email: form.email,
      password: form.password
    }
    Axios.post(`${baseUrl}/login`, body)
    .then(result => {
      window.localStorage.setItem("token", result.data.token)
      window.localStorage.setItem('username', result.data.user.username)
      history.push('/feed')
    })
    .catch(err=> {
      console.log('falha no login')
    })
  }


  return (
    <LoginContainer >
      
    <LoginImg src={logo} alt={'logo'} />  
    
    <LoginForm onSubmit={onSubmitLogin}>
    <ThemeProvider theme={theme}>
        <LoginInput
          type={"email"}
          label={"E-mail"}
          color={"primary"}
          onChange={onChangeInput}
          value={form["email"]}
          name={"email"}
          variant="outlined"
          required
        />
        <LoginInput
          type={"password"}
          label={"Senha"}
          onChange={onChangeInput}
          value={form["password"]}
          name={"password"}
          variant="outlined"
          required
         />
        
        <Button        
        classes={{
          root: classes.root, 
          }}        
        variant={"contained"}
        color={"primary"} 
        type={"submit"}>
          Entrar
        </Button>
        
        </ThemeProvider>     
          
      </LoginForm>
      <LoginTextSpan><span>Não Possui cadastro? </span>
      <Link to={'/signup'}>
      <SpanClique>Clique aqui.</SpanClique>
      </Link>
      </LoginTextSpan>
    </LoginContainer>
  );
}
export default LoginPage;
