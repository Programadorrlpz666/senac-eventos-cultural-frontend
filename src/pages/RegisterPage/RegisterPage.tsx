import React, { useState } from 'react';
import styles from './RegisterPage.module.css';

const RegisterPage: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [tipo, setTipo] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert('Usuário cadastrado com sucesso!');

    setNome('');
    setEmail('');
    setTipo('');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Registrar Usuário</h2>
      <form onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="nome">Nome</label>
        <input
          className={styles.input}
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <label className={styles.label} htmlFor="email">Email</label>
        <input
          className={styles.input}
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className={styles.label} htmlFor="tipo">Tipo</label>
        <select
          className={styles.input}
          id="tipo"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          required
        >
          <option value="" disabled>Selecione</option>
          <option value="participante">Participante</option>
          <option value="organizador">Organizador</option>
        </select>

        <button type="submit" className={styles.button}>Registrar</button>
      </form>
    </div>
  );
};

export default RegisterPage;
