"use client"

import styles from './page.module.css';
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './components/button';
import ButtonSearch from './components/ButtonSearch';
import Navbar from './components/navbar';
import Logo from './assets/logo';
import TextField  from './components/TextEditor';
import Menu from './components/menu';
import QuestionForm from './components/questionForm';
import AnswerForm from './components/AnswerForm';

export default function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <header>
        <Navbar>
          <Menu ><i class="bi bi-list"></i></Menu>
          <Logo />
          <ButtonSearch><i class="bi bi-search"></i></ButtonSearch>
        </Navbar>
      </header>

      <main>
        <br/>
        

          <div className='description'>
            <QuestionForm >Digite seu CPF</QuestionForm>
          </div>

          <div className='description'>
            <AnswerForm>123.456.789-00</AnswerForm>
          </div>

        

          <div className='description'>
            <QuestionForm >Digite seu e-mail</QuestionForm>
          </div>

          <div className='description'>
            <AnswerForm>usuario@gmail.com</AnswerForm>
          </div>

          <div className='description'>
            <QuestionForm >Digite sua localização atual</QuestionForm>
          </div>

          <div className='description'>
            <AnswerForm>Avenida Paulista, 800</AnswerForm>
          </div>

          <div className='description'>
            <QuestionForm >Modelo do chassi do veículo</QuestionForm>
          </div>

          <div className='description'>
            <AnswerForm>Tamanho das rodas do veículo</AnswerForm>
          </div>
        
          <div className='description'>
            <QuestionForm >O veículo é modificado?</QuestionForm>
          </div>

          <div className='description'>
            <AnswerForm>Resposta</AnswerForm>
          </div>

          

        <div className='messenger'>
          <TextField label="question" type="text" placeholder="Digite aqui..." value={name} onChange={handleNameChange}/>
          <Button><i class="bi bi-send"></i></Button>
        </div>
      </main>
    </div>
  );
}