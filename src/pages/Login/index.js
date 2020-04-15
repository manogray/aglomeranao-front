import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './style';
import logo from '../../assets/images/logo.svg';

export default function Login() {
  return (
    <>
        <img src={logo} alt="AglomeraNao"/>

        <form action="">
            <input type="email" placeholder="Seu e-mail" />
            <input type="password" placeholder="Sua melhor senha!"/>

            <button type="submit">Entrar</button>
            <Link to="/register">Criar conta gratuita</Link>
        </form>
    </>
  );
}
