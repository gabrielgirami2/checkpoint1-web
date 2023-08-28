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
        <div className='forms'>
          <div className='description'>
            <QuestionForm >QuestionForm</QuestionForm>
          </div>

          <div className='description'>
            <AnswerForm>AnswerForm</AnswerForm>
          </div>
        </div>
        
        <div className='messenger'>
          <TextField label="question" type="text" placeholder="Digite aqui..." value={name} onChange={handleNameChange}/>
          <Button><i class="bi bi-send"></i></Button>
        </div>
      </main>
    </div>
  );
}