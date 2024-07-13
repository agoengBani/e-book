import React from "react";
import "./Cards.scss";
import { Book } from "../../../assets";

export const Cards = () => {
   return (
      <div className="cards">
         <img className="img" src={Book} alt="book" />
         <p className="title">card</p>
         <p className="body">menjelaskan keterangan buku tersebut</p>
      </div>
   );
};
