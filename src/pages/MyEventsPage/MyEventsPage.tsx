import React, { useState } from 'react';
import styles from './MyEventsPage.module.css';

const MyEventsPage: React.FC = () => {
  const [events] = useState([
    { name: 'João Silva' },
    { name: 'Maria Souza' },
    { name: 'Pedro Oliveira' },
  ]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Meus Eventos</h1>
      <div className={styles.table}>
        {events.map((event, index) => (
          <div key={index} className={styles.row}>
            <span className={styles.cell}>{event.name}</span>
            <a href="#" className={styles.cell}>Visualizar participantes</a>
            <a href="#" className={styles.cell}>Editar</a>
            <a href="#" className={styles.cell}>Partilhar</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyEventsPage;
