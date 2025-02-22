// import { useState } from 'react'
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Usage from "./components/Usage";
import List from "./components/List";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {

  const [page,setPage] = useState('Home')

  const handlePage = (page) =>{
    setPage(page)
  }

  return (
    <>
      <div className="main-container">
        <Header handlePage={handlePage} />

        <section className="app-body">
          {page === 'Home' && <List />}
          {page === 'Usage' && <Usage />}

        </section>

        <Footer />
      </div>
    </>
  );
}

export default App;
