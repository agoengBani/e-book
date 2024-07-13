import React from "react";
import "./Home.scss";
import { Cards, Footer, Header } from "../../components/moleculs";

const Home = () => {
   return (
      <div className="home">
         <Header />
         <div className="content">
            <p>Halaman Home</p>
            <div className="content-cards">
               <Cards />
               <Cards />
            </div>
         </div>
         <Footer />
      </div>
   );
};

export default Home;
