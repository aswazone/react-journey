// import { useState } from 'react'
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="main-container">
        <Header />

        <section className="app-body">
          <List />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default App;
