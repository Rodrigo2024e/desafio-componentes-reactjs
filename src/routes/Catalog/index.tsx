import Card from "../../components/Card";
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
      </main>
    </>
  );
}
