import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Tela_Home_Treinador = () => {
  return (
    <div className="tela-home-treinador">
      <header className="tela-home-treinador-header">
        <h1>Bem-vindo, Treinador!</h1>
      </header>
      <main className="tela-home-treinador-main">
        <section className="tela-home-treinador-section">
          <h2>Suas Atividades</h2>
          {/* Adicione conteúdo aqui */}
        </section>
        <section className="tela-home-treinador-section">
          <h2>Notícias</h2>
          {/* Adicione conteúdo aqui */}
        </section>
      </main>
      <footer className="tela-home-treinador-footer">
        <p>&copy; 2024 Sua Instituição</p>
      </footer>
    </div>
  );
};
