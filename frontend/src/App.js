import React from "react";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <>
      <Routes />
      <ToastContainer />
      <GlobalStyles />
    </>
  );
}

export default App;
