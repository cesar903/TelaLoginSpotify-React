import '../Form/Login.css';
import React, { useState } from 'react';
import { FaExclamation } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';


function Login() {

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
    return false
  };

  function validation(e) {
    e.preventDefault();
    if (user == "" || password == "") {
      setError("Nome de usúario ou senha vazio(s)");
      setMsg(true);
      return false;
    }else if (user != "admin" || password != "123456"){
      setError("Usuario não encontrado");
      setMsg(true);
      return false;
    }else{
      alert("Login Aceito")
      setMsg(false)
      return window.location.href = "https://portifolio-cesarreis.netlify.app/";
    }
    
  }

  function notImplemented(){
    setError("Funçao Não Implementada (Ainda!)")
    setMsg(true)
    return false
  }
  

  return (

    <div className="container-fluid">
      <div className="login">
        <h1><b>Entrar no Spotify</b></h1>
        <div className='division'>
          <hr />
        </div>
        {msg ?
          <div className='msg'>
            <FaExclamation />
            <span className="error">{error}</span>
          </div>
          : null}
        <div>
          <form className="container-fluid" onSubmit={validation}>

            <label for="name">E-mail ou nome de usuário</label><br />
            <input type="text" id="name" placeholder="E-mail ou nome de usuário" value={user} onChange={(e) => setUser(e.target.value)} />

            <label for="password" className="password" >Senha</label><br />
            <input type={showPassword ? 'text' : 'password'} id="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
            <span className='showPassword' onClick={handleShowPassword}>
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>

            <div class="toggle">
              <input type="checkbox" id="foo" />
                <label for="foo"></label>
                <span className="remember">Lembrar de mim</span>
            </div>
            <div className="btnLogin" >
              <button className="submit" type='submit'>Entrar</button>
            </div>

          </form>
          <div className="center">
            <span>
              <span href="" className="recoverPassword" onClick={notImplemented}>Esqueceu sua senha?</span>
            </span>
          </div>

          <div className='division'>
            <hr />
          </div>

          <div className="msgRegister">
            <span>Não tem uma conta? <span className="register" onClick={notImplemented}>Inscreva-se no Spotify</span></span>
          </div>

        </div>
      </div>
    </div >

  );
}

export default Login;
