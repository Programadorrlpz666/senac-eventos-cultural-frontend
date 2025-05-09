import React, { useState } from "react";
import styles from "./LoginPage.module.css";


const Login: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
   
  };

  return (
    <div className={styles.header}>
      <header className="login-header">
        <div className="login-title">Senac Eventos Cultural</div>
        <div className="login-section">Login</div>
      </header>

      <div className={styles.container}>
        <h2 className="login-heading">Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className="login-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu email"
            required
            className="login-input"
          />

          <label htmlFor="senha" className="login-label">Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Digite sua senha"
            required
            className="login-input"
          />

          <button type="submit" className="login-button">Entrar</button>
        </form>

        <div className="login-register">
          <p>
            Não tem uma conta?{' '}
            <a href="#" className="login-link">Registre-se</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
