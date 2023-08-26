"use client"

import styles from './page.module.css';
import React from 'react';
import styled from 'styled-components';
import Button from './components/button';
import Navbar from './components/navbar';
import Logo from './assets/logo';



export default function page() {
  return (
    <main className={styles.main}>
      <nav className={styles.navbar}>
      <button onClick={handleMenuClick}>Open Menu</button>
        <Logo />
      </nav>

      <div className={styles.description}>
        <form className={styles.QuestionForm}>formulário</form>
      </div>

      <div className={styles.description}>
        <form className={styles.AnswerForm}>formulário1</form>
      </div>


      <div className={styles.description}>
        <button className={styles.button}>Test</button>
      </div>
    </main>
  );
}