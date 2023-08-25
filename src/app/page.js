import Image from 'next/image';
import styles from './page.module.css';
import React from 'react';

export default function page() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <button className={styles.button}>
          test
        </button>
      </div>
    </main>
  );
}