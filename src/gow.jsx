import React, { useState } from "react";
import kratosFoto from "./assets/kratos.png";
import "./gow.css";

function GowApp() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  function handleEntrar() {
    alert("Bem-vindo, " + login + "! Que os Nove Reinos te recebam.");
  }

  return (
    <div className="gow-container">

      <div className="gow-imagem">
        <img src={kratosFoto} alt="Kratos" />
      </div>

      <div className="gow-formulario">

        <h1 className="gow-logo">⚔️ God of War</h1>

        <h2 className="gow-titulo">Fazer login</h2>

        <label className="gow-label">Login</label>
        <input
          className="gow-input"
          type="text"
          placeholder="Digite seu login..."
          value={login}
          onChange={function(e) { setLogin(e.target.value); }}
        />

        <label className="gow-label">Senha</label>
        <input
          className="gow-input"
          type="password"
          placeholder="Digite sua senha..."
          value={senha}
          onChange={function(e) { setSenha(e.target.value); }}
        />

        <button className="gow-botao" onClick={handleEntrar}>
          ENTRAR
        </button>

        <a className="gow-link" href="#">
          Esqueci meu login ou senha
        </a>

      </div>
    </div>
  );
}

export default GowApp;