"use client"
import { useState } from 'react';
import { useSearchParams } from 'next/navigation'

export default function ForgotPassword() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    password: "",
    passwordConfirmation: "",

  });

  const handlePasswordReset = async (e :any) => {
    e.preventDefault();
    let hasError = false;
    setErrors({ password: "", passwordConfirmation: ""});

    if (password.length < 6) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "A senha deve ter no mínimo 6 caracteres.",
      }));
      hasError = true;
    }

    if (password !== passwordConfirmation) {
      setErrors((prev) => ({
        ...prev,
        passwordConfirmation: "As senhas não coincidem.",
      }));
      hasError = true;
    }

    if (hasError) {
      return;
    }

    const response = await fetch("https://pagesapi.engajamedesign.com.br/api/auth/reset-password", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        code,
        password, 
        passwordConfirmation 
      }),
    });

    const data = await response.json();
    if (data.ok) {
      setMessage('Senha alterada com sucesso.');
    } else {
      setMessage('Erro ao alterar a senha.');
      console.log(data)
    }
  };

  return (
    <div className="flex flex-col flex-1 w-full items-center justify-center gap-8 mt-24">
      <h2 className="font-bold text-xl">Recuperação de Senha</h2>
      <form onSubmit={handlePasswordReset} className='flex flex-col gap-4'>
        <input
          type="password"
          placeholder="Digite sua nova senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className='border border-black rounded-lg p-2'
        />
        {errors.password && (
              <span className="text-red-500">{errors.password}</span>
            )}
        <input
          type="password"
          placeholder="Confirme sua nova senha"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          required
          className='border border-black rounded-lg p-2'
        />
        {errors.passwordConfirmation && (
              <span className="text-red-500">{errors.passwordConfirmation}</span>
            )}
        <button type="submit" className="bg-primary hover:bg-secondary text-secondary hover:text-primary rounded-lg p-2 font-bold">Alterar senha</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}