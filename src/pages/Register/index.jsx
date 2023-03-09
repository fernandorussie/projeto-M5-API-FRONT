import React, {useState} from 'react';

import { api } from '../../services/api';

import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import {Container, Box, } from '@mui/material';
import "./style.css";

import { Link, useNavigate } from "react-router-dom";

function Login(){
    
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [nome, setNome] = useState();
  const [showPassword, setShowPassword] = React.useState(false);

// console.log(email, senha)

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleRegister = (e) => {
    e.preventDefault()
    api.post("/register", {
      nome_cliente: nome,
      email_cliente: email,
      senha_cliente: senha,
    }).then((response) => {
      alert(response.data.msg);
      // console.log(response);
      // navigate('/', { replace: true })
    });
  };
    
      return (
        <Container component="main" maxWidth="xs" sx={{height: '100vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
          <Box component="form"
            sx={{
              width: '25vw', height: '50vh', display:'flex', alignItems:'center', flexDirection:'column', justifyContent:'center', backgroundColor:'#f7f6f3', mt:20, borderRadius:'10px'
            }}
              noValidate
              autoComplete="off"
            onSubmit={(e) => handleRegister(e)}
          >
            <h1>Cadastro</h1>
            <Box sx={{ display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
              <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                <TextField id="standard-require" label="Nome" name="nome" variant="standard" onChange={(e) => setNome(e.target.value)}/>
              </FormControl>
              <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                <TextField id="standard-require" label="Email" name="email" variant="standard" onChange={(e) => setEmail(e.target.value)}/>
              </FormControl>

              <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">Senha</InputLabel>
                <Input
                  onChange={(e) => setSenha(e.target.value)}
                  name="password" 
                  id="standard-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                
              </FormControl>
              <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">Confirmar Senha</InputLabel>
                <Input
                  onChange={(e) => setSenha(e.target.value)}
                  name="password" 
                  id="standard-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                
              </FormControl>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                <p>Já é cadastrado? Faça login <Link style={{color:'#df2020', fontWeight:700}} to={"/login"}>Aqui</Link></p>
                </FormControl>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                  <Button variant="contained" type="submit" onClick={(e) => handleRegister(e)}>Login</Button>
              </FormControl>
            </Box>
          </Box>
        </Container>
      );
}
export default Login;