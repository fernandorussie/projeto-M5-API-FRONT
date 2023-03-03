import React, {useState} from 'react';

import { api } from '../../services/api'

import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import "./style.css";

import { Link, useNavigate } from "react-router-dom";

function Login(){
  const [token, setToken] = useState();
  const navigate = useNavigate();

  const handleLogin = (values) => {
    api.post("/login", {
      email_users: values.email,
      senha_users: values.password,
    })
    .then((response) => {
      const validation = response.data.validation
      const result = response.data.results[0].email_users
      // console.log(result);

      if(validation){
        localStorage.setItem('tokenAuth', validation);
        localStorage.setItem('userAuth', JSON.stringify(result));
        navigate('/home', { replace: true })
        // if(token){
        //   // alert("Usuário logado com sucesso!");
        //   const jsonStorage = localStorage.getItem('userAuth');
        //   console.log(jsonStorage);
        // }
      }else{
        console.log(response.data);
        alert("Credenciais inválidas!");
      }
    });
  };

  const validationsLogin = yup.object().shape({
    email: yup
      .string()
      .email("email inválido")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .min(4, "A senha deve ter pelo menos 4 caracteres")
      .required("A senha é obrigatória"),
  });

  return (
    <div className="container">
      <h1>Login</h1>
      <Formik
        initialValues={{}}
        onSubmit={handleLogin}
        validationSchema={validationsLogin}
      >
        <Form className="login-form">
          <div className="login-form-group">
            <Field name="email" className="form-field" placeholder="Email" />

            <ErrorMessage
              component="span"
              name="email"
              className="form-error"
            />
          </div>
          {/*Outro campo*/}
          <div className="form-group">
            <Field name="password" className="form-field" placeholder="Senha" />

            <ErrorMessage
              component="span"
              name="password"
              className="form-error"
            />
          </div>
            <div>
                <p>Ainda não é cadastrado? Cadastre-se <Link to={"/register"}>Aqui</Link></p>
            </div>
          <button className="button" type="submit">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
}
export default Login;