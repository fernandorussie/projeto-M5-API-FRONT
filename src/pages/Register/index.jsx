import React from 'react';

import { api } from '../../services/api';

import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import "./style.css";

import { Link, useNavigate } from "react-router-dom";

function Login(){
    
    const navigate = useNavigate();

      const handleRegister = (values) => {
        api.post("/register", {
          email_users: values.email,
          senha_users: values.password,
        }).then((response) => {
          alert(response.data.msg);
          console.log(response);
          navigate('/', { replace: true })
        });
      };
        
      const validationsRegister = yup.object().shape({
        email: yup
          .string()
          .email("email inválido")
          .required("O email é obrigatório"),
        password: yup
          .string()
          .min(4, "A senha deve ter pelo menos 4 caracteres")
          .required("A senha é obrigatória"),
        confirmation: yup
          .string()
          .oneOf([yup.ref("password"), null], "As senhas são diferentes")
          .required("A confirmação da senha é obrigatória"),
      });
    
      return (
        <div className="container">
         <h1>Cadastro</h1>
          <Formik
            initialValues={{}}
            onSubmit={handleRegister}
            validationSchema={validationsRegister}
          >
            <Form className="register-form">
              <div className="register-form-group">
                <Field name="email" className="form-field" placeholder="Email" />
    
                <ErrorMessage
                  component="span"
                  name="email"
                  className="form-error"
                />
              </div>
    
              <div className="form-group">
                <Field name="password" className="form-field" placeholder="Senha" />
    
                <ErrorMessage
                  component="span"
                  name="password"
                  className="form-error"
                />
              </div>
    
              <div className="form-group">
                <Field
                  name="confirmation"
                  className="form-field"
                  placeholder="Senha"
                />
    
                <ErrorMessage
                  component="span"
                  name="confirmation"
                  className="form-error"
                />
              </div>
              <div>
                    <p>Já é cadastrado? Faça login <Link to="/">Aqui</Link></p>
                </div>
              <button className="button" type="submit">
                Cadastrar
              </button>
            </Form>
          </Formik>
        </div>
      );
}
export default Login;