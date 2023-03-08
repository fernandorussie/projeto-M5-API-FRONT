import React from 'react';

import { Link, useNavigate } from "react-router-dom";
import  {api}  from '../../services/api'

import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";

import "./style.css";
import Button from '@mui/material/Button';
import {Container, Box, } from '@mui/material';

function Login(){
  const navigate = useNavigate();

  const handleLogin = (values) => {
    api.post("/login", {
      email_users: values.email,
      senha_users: values.password,
    })
    .then((response) => {
      const validation = response.data.validation
      // const result = response.data.results[0].email_users
      console.log(response);

      if(validation){
        localStorage.setItem('tokenAuth', validation);
        localStorage.setItem('userAuth', JSON.stringify(response.data.results[0].email_users));
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
    <Container component="main" maxWidth="xs">
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
            <Button variant="contained" type="submit">Login</Button>
        </Form>
      </Formik>
    </Container>
  );
}
export default Login;