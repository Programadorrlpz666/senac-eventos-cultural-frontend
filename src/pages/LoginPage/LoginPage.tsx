import React, { useState, type FormEvent } from "react";
import styles from "./LoginPage.module.css";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { useAuth } from "../../contexts/AuthContext";

const Login: React.FC = () => { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();

  const handleSubmit = async (e: FormEvent) => {
   e.preventDefault();
   setError(null);

    try {
      const res = await fetch(
      "https://senac-eventos-cultural-backend-production.up.railway.app/auth/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ email, password }),
      }
    );

    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.message || "Falha no login");
    }
    const { token } = await res.json();
    login(token);
    window.location.href = "/";

    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
        alert(`Erro ao logar: ${err.message}`);
      } else {
        const errorMsg = String(err);
        setError(errorMsg);
        alert(`Erro ao logar: ${errorMsg}`);

      }
    }
  }



  return (
    <div className={styles.header}>
      <header className="login-header">
        <div className="login-title">Logo</div>
        <div className="login-section">Senac Eventos Cultural</div>
      </header>

      <div className={styles.container}>
        <h2 className="login-heading">Login</h2>
        <form onSubmit={handleSubmit}>

          {error && <div>{error}</div>}

          <label htmlFor="email" className="login-label">
            Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
            required
            className="login-input"
          />

          <label htmlFor="senha" className="login-label">Senha</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
