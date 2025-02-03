import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState({});


  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
 
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

  
    if (!emailRegex.test(email)) {
      formErrors.email = "Geçerli bir e-posta adresi girin.";
    }

   
    if (!passwordRegex.test(password)) {
      formErrors.password =
        "Şifre en az 8 karakter, bir büyük harf, bir küçük harf ve bir rakam içermelidir.";
    }

 
    if (!termsAccepted) {
      formErrors.terms = "Şartları kabul etmeniz gerekmektedir.";
    }

    setErrors(formErrors);


    if (Object.keys(formErrors).length === 0) {
      alert("Form başarıyla gönderildi!");
     
    }
  };

  return (
    <div className="login-container">
      <h2>Login Formu</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email adresinizi girin"
          />
          {errors.email && <span>{errors.email}</span>}
        </div>

        <div>
          <label htmlFor="password">Şifre:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Şifrenizi girin"
          />
          {errors.password && <span>{errors.password}</span>}
        </div>

        <div>
          <input
            type="checkbox"
            id="terms"
            checked={termsAccepted}
            onChange={() => setTermsAccepted(!termsAccepted)}
          />
          <label htmlFor="terms">Şartları kabul ediyorum</label>
          {errors.terms && <span>{errors.terms}</span>}
        </div>

        <button type="submit" disabled={Object.keys(errors).length > 0}>
          Giriş Yap
        </button>
      </form>
    </div>
  );
};

export default Login;
