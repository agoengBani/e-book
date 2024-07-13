import React from "react";
import "./Header.scss";
import { Button } from "../../atoms";
import { useNavigate } from "react-router-dom";

export const Header = () => {
   const navigate = useNavigate();
   return (
      <div className="header">
         <p>Header</p>
         <Button name="Sign up" onClick={() => navigate("/register")} />
         <Button name="Sign in" onClick={() => navigate("/login")} />
      </div>
   );
};
