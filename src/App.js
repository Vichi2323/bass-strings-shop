import { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import useFetch from "./services/useFetch";
import LinearLoading from "./LinearLoading";

function App() {
  const [gauge, setGauge] = useState("");

  const {
    data: bassStrings,
    error,
    loading,
  } = useFetch("bassStrings?category=strings");

  function renderBassStrings(s) {
    return (
      <div key={s.id}>
        <a href="/">
          <img
            width={250}
            height={250}
            src={`./images/${s.image}`}
            alt={s.img}
          />
          <h3>{s.name}</h3>
          <p>${s.price}</p>
        </a>
      </div>
    );
  }

  const filteredBassStrings = gauge
    ? bassStrings.filter((bs) =>
        bs.skus.find((sk) => sk.gauge === parseInt(gauge))
      )
    : bassStrings;

  if (error) throw error;

  return (
    <div className="App">
      <Header />
      {loading && <LinearLoading />}
      {/* <BassCard /> */}
      <main>
        <section>
          <label htmlFor="gauge">Filter by gauge</label>
          {""}
          <select value={gauge} onChange={(e) => setGauge(e.target.value)}>
            <option value={""}>All gauges</option>
            <option value={"105"}>105</option>
            <option value={"100"}>100</option>
            <option value={"95"}>95</option>
          </select>
          {gauge && <h2>Found {filteredBassStrings.length} products</h2>}
        </section>
        <section>{filteredBassStrings.map(renderBassStrings)}</section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
