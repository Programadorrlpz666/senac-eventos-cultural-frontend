import React, { useState } from 'react';
import styles from './RegisterPage.module.css';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';


interface RegisterProps { 
  onRegisterSucess?: () => void;
}

const RegisterPage: React.FC<RegisterProps> = ({onRegisterSucess}) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<'PARTICIPANT' | 'ORGANIZER'> ('PARTICIPANT');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<String | null>(null)

  const handleSubmit =async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null)

    try {
      const res = await fetch('https://senac-eventos-cultural-backend-production.up.railway.app/auth/register',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, role }),
      }
      );

  if (!res.ok) {
      const data = await res.json();
      throw new Error(data.message || 'Falha no registro');

    }
    alert('Cadastro realizado com sucesso!');
    onRegisterSucess?.();
    window.location.href = '/login';

    } catch (err: unknown) {
     const msg = err instanceof Error ? err.message : String(err);
     setError(msg);
     alert(`Erro ao registrar: ${msg}`);

      }
    };



  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Registrar Usuário</h2>

      {
        error && <div className={styles.error}>{error}</div>
      }

      <form onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="name">Nome</label>
        <input
          className={styles.input}
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
 
        <label className={styles.label} htmlFor="Password">Senha</label>
        <input
          className={styles.input}
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label className={styles.label} htmlFor="role">Tipo</label>
        <select
          className={styles.select}
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value as 'PARTICIPANT' | 'ORGANIZER')}
          required
        >
          <option value="" disabled>Selecione</option>
          <option value="PARTICIPANT">Participante</option>
          <option value="ORGANIZER">Organizador</option>
        </select>

        <button type="submit" className={styles.button}>Registrar</button>
      </form>
    </div>
  );
};

export default RegisterPage;
