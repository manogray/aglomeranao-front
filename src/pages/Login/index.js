import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { loginRequest } from '../../store/modules/auth/actions';

// import { Container } from './style';
import logo from '../../assets/images/logo.svg';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('Insira um email válido')
        .required('E-mail obrigatório'),
    password: Yup.string()
    .required('A senha é obrigatória')
});

export default function Login() {

  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  
  function handleSubmit({ email, password }){
    dispatch(loginRequest(email, password));
  } 

  return (
    <>
        <img src={logo} alt="AglomeraNao"/>

        <Form schema={schema} onSubmit={handleSubmit}>
            <Input name="email" type="email" placeholder="Seu e-mail" />
            <Input name="password" type="password" placeholder="Sua senha!"/>

            <button type="submit">{ loading ? 'Carregando...' : 'Entrar'}</button>
            <Link to="/register">Criar conta gratuita</Link>
        </Form>
    </>
  );
}
