"use client"

import styles from './page.module.css';
import React, { useState } from 'react';
import styled from 'styled-components';
import button from './components/button';
import Navbar from './components/navbar';
import Logo from './assets/logo';
import TextField  from './components/TextEditor';


export default function page() {
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <main className={styles.main}>
      <nav className={styles.navbar}>
        <button className={styles.buttonMenu}><i class="bi bi-list"></i></button>
        <Logo />
        <button className={styles.buttonSearch}><i class="bi bi-search"></i></button>
      </nav>

      <div className={styles.forms}>
        <div className={styles.description}>
          <form className={styles.QuestionForm}>formulário</form>
        </div>

        <div className={styles.description}>
          <form className={styles.AnswerForm}>formulário1</form>
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