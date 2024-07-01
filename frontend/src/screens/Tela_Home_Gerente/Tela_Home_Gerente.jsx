import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Tela_Home_Gerente = () => {
  return (
    <div className="tela-home-gerente">
      <header className="tela-home-gerente-header">
        <h1>Bem-vindo, Gerente!</h1>
      </header>
      <main className="tela-home-gerente-main">
        <section className="tela-home-gerente-section">
          <h2>Suas Atividades</h2>
          {/* Adicione conteúdo aqui */}
        </section>
        <section className="tela-home-gerente-section">
          <h2>Notícias</h2>
          {/* Adicione conteúdo aqui */}
        </section>
      </main>
      <footer className="tela-home-gerente-footer">
        <p>&copy; 2024 Sua Instituição</p>
      </footer>
    </div>
  );
};
