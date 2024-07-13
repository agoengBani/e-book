import React from "react";
import "./Home.scss";
import { Cards, Footer, Header } from "../../components/moleculs";

const Home = () => {
   return (
      <div className="home">
         <Header />
         <div className="content">
            <h1>KUMPULAN BUKU MENARIK</h1>
            <div className="content-cards">
               <Cards />
               <Cards />
               <Cards />
               <Cards />
               <Cards />
               <Cards />
               <Cards />
               <Cards />
               <Cards />
               <Cards />
               <Cards />
               <Cards />
               <Cards />
            </div>
         </div>
         <Footer />
      </div>
   );
};

export default Home;
