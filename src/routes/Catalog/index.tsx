import Card from "../../components/Card";
import CardComentario from "../../components/CardComentario";

import Header from "../../components/Header";

export default function Catalog() {
  return (
    <>
      <Header />
      <main className="ct-catalog-main">
        <section id="ct-catalog-section" className="ct-container">
          <h2>Venha nos visitar</h2>
          <div className="ct-catalog-cards-container">
            <Card />
            <Card />
          </div>
        </section>

        <section id="ct-comentario-section" className="ct-container-comentario">
          <h2>O que estão dizendo</h2>
          <div className="ct-catalog-card-comentario">
            <CardComentario />
            <CardComentario />
            <CardComentario />
            <CardComentario />
            <CardComentario />
            <CardComentario />
          </div>
        </section>
      </main>
    </>
  );
}
