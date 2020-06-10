import React from "react";
import { useForm } from "../hooks/useForm";
import Axios from "axios";
import "../Css/FormLogin.css";
import { useHistory } from "react-router-dom";

export const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labEddit";

const LoginForm = () => {
  const history = useHistory();
  const [form, onChangeInput] = useForm({
    email: "",
    password: ""
  });

  const onSubmitLogin = event => {
    event.preventDefault();
    const body = {
      email: form.email,
      password: form.password
    };
    Axios.post(`${baseUrl}/login`, body)
      .then(result => {
        window.localStorage.setItem("token", result.data.token);
        history.push("/feed");
        
      })
      .catch(err => {
        console.log("login falhou");
      });
  };

  const onAccountCreate = () => {
    history.push("/signup");
  };

  return (
    <div>
      <form className="FormLogin">
        <h3> Login Page </h3>
        <p>
          <strong>Usar Login:pedro.darvas@gmail.com Senha: qwerty</strong>
        </p>
        <fieldset className="FormFieldset Name">
          <legend id="InputEmail"> E-mail </legend>
          <input
            className="FormInput"
            type="email"
            onChange={onChangeInput}
            value={form["email"]}
            name={"email"}
            required
          />
        </fieldset>

        <fieldset className="FormFieldset   Senha">
          <legend id="InputPassword"> Senha </legend>
          <input
            className="FormInput"
            type="password"
            onChange={onChangeInput}
            value={form["password"]}
            name={"password"}
            required
          />
        </fieldset>

        <button className="BtnLogin" onClick={onSubmitLogin}>
          ENTRAR
        </button>

        <h5>
          Novo no Labeddit? <span onClick={onAccountCreate}> Criar Conta</span>
        </h5>
      </form>
    </div>
  );
};

export default LoginForm;
