import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import logo from '../../assets/images/logo.svg';
import * as Yup from 'yup';

// import { Container } from './styles';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('Insira um email válido')
        .required('E-mail obrigatório'),
    password: Yup.string()
    .min(6,'Senha mínima de 6 caracteres')
    .required('A senha é obrigatória')
});

export default function Register() {

  function handleSubmit(data){

  }

  return (
    <>
        <img src={logo} alt="AglomeraNao"/>

        <Form schema={schema} onSubmit={handleSubmit}>
            <Input type="text" placeholder="Seu nome completo"/>
            <Input type="email" placeholder="E-mail" />
            <Input type="password" placeholder="Senha!"/>

            <button type="submit">Criar Conta</button>
            <Link to="/">Já tenho login</Link>
        </Form>
    </>
  );
}
