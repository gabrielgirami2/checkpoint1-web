"use client"

import styles from './page.module.css';
import React, { useState } from 'react';
import styled from 'styled-components';
import button from './components/button';
import Navbar from './components/navbar';
import Logo from './assets/logo';
import TextField  from './components/TextEditor';


export default function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <main className={styles.main}>
      <nav className={styles.navbar}>
        <menu className={styles.menu}><i class="bi bi-list"></i></menu>
        <Logo />
        <button className={styles.buttonSearch}><i class="bi bi-search"></i></button>
      </nav>

      <div className={styles.forms}>
        <div className={styles.description}>
          <form className={styles.QuestionForm}>QuestionForm</form>
        </div>

        <div className={styles.description}>
          <form className={styles.AnswerForm}>AnswerForm</form>
        </div>
      </div>
      
      <div className={styles.messenger}>
        <TextField label="question"
          type="text" placeholder="Digite aqui..."
          value={name} onChange={handleNameChange}/>
        <button className={styles.button}><i class="bi bi-send"></i></button>
      </div>
    </main>
  );
}