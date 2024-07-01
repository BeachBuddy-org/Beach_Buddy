// src/components/Tela_Home_Aluno.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Tela_Home_Aluno = () => {
  return (
    <div className="tela-home-aluno">
      <header className="tela-home-aluno-header">
        <h1>Bem-vindo, Aluno!</h1>
      </header>
      <main className="tela-home-aluno-main">
        <section className="tela-home-aluno-section">
          <h2>Suas Atividades</h2>
          {/* Adicione conteúdo aqui */}
        </section>
        <section className="tela-home-aluno-section">
          <h2>Notícias</h2>
          {/* Adicione conteúdo aqui */}
        </section>
      </main>
      <footer className="tela-home-aluno-footer">
        <p>&copy; 2024 Sua Instituição</p>
      </footer>
    </div>
  );
};
