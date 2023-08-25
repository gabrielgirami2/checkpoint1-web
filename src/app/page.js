"use client"

import Image from 'next/image';
import styles from './page.module.css';
import React from 'react';
import styled from 'styled-components';


export default function page() {
  const Button = styled.button`
    width: 219px;
    height: 38px;
    border-radius: 10px;
    background-color:#00000040;
`;
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <button className={styles.button}>test</button>
      </div>
    </main>
  );
}

const Button = styled.Button`
    width: 219px;
    height: 38px;
    border-radius: 10px;
    background-color:#00000040;
`;

<Button>Teste</Button>