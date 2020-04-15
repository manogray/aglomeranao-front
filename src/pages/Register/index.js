import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

// import { Container } from './styles';

export default function Register() {
  return (
    <>
        <img src={logo} alt="AglomeraNao"/>

        <form action="">
            <input type="text" placeholder="Seu nome completo"/>
            <input type="email" placeholder="E-mail" />
            <input type="password" placeholder="Senha!"/>

            <button type="submit">Criar Conta</button>
            <Link to="/">Já tenho login</Link>
        </form>
    </>
  );
}
