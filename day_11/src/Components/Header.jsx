import React from "react";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav
        style={{
          display: "flex",
          backgroundColor: "navy",
          color: "white",
          fontSize: "40px",
          justifyContent: "space-evenly",
        }}
      >
        <div>MyApp</div>
        <div style={{ display: "flex", gap: "25px" }}>
          <div onClick={() => navigate("/")}>Home</div>
          <div onClick={() => navigate("/product")}>Product</div>
          <div onClick={() => navigate("/about")}>About</div>
          <div onClick={() => navigate("/cart")}>Cart</div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
