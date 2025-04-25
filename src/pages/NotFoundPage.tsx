import React from 'react';//* by-auto-react-import
typeof React;//* by-auto-react-import
import { useNavigate } from "react-router-dom";

const NotFoundaPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <h2>404</h2>
      <button onClick={() => navigate("/")}>Go Home</button>
    </>
  );
};
export default NotFoundaPage;