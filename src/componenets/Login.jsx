import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

 
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form gönderildi!");
  };

  return (
    <div className="login-form">
      <h2>Login Formu</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email adresinizi girin"
          />
        </div>

        <div className="form-group">
          <label>Şifre</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Şifrenizi girin"
          />
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
            />
            Şartları kabul ediyorum
          </label>
        </div>

        <button type="submit">Giriş Yap</button>
      </form>
    </div>
  );
};

export default Login;
