import React, {useState} from 'react';

import { Link, useNavigate } from "react-router-dom";
import  {api}  from '../../services/api'

import "./style.css";
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

function Login(){
  
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [showPassword, setShowPassword] = React.useState(false);

console.log(email, senha)

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = (e) => {
    e.preventDefault()
    // console.log('Enter')
    api.post("/login", {
      email_cliente: email,
      senha_cliente: senha,
    })
    .then((response) => {
      const validation = response.data.validation
      // const result = response.data.results[0].email_users
      // console.log(response);
      if(email === 'admin' && senha === 'admin'){
        localStorage.clear();
        navigate('/admin', { replace: true })
        localStorage.setItem('userName', JSON.stringify(email));
        localStorage.setItem('tokenAdm', JSON.stringify(true));
      }else{
        if(validation){
          localStorage.clear();
          localStorage.setItem('tokenAuth', validation);
          localStorage.setItem('userName', JSON.stringify(response.data.results[0].nome_cliente));
          localStorage.setItem('userID', JSON.stringify(response.data.results[0].cod_cliente));
          navigate('/home', { replace: true })
        }else{
          // console.log(response.data);
          alert("Credenciais inválidas!");
        }
      }
    });
  };

  return (
    <Container component="main" maxWidth="xs" sx={{height: '100vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
      <Box component="form"
          sx={{
               width: '25vw', height: '50vh', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', backgroundColor:'#f7f6f3', mt:20, borderRadius:'10px'
          }}
          noValidate
          autoComplete="off"
        onSubmit={(e) => handleLogin(e)}
      >
        <h1>Login</h1>
        <Box sx={{ display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
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
                <p>Ainda não é cadastrado? Cadastre-se <Link style={{color:'#df2020', fontWeight:700}} to={"/register"}>Aqui</Link></p>
            </FormControl>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
              <Button variant="contained" type="submit" onClick={(e) => handleLogin(e)}>Login</Button>
            </FormControl>
        </Box>
      </Box>
    </Container>
  );
}
export default Login;