import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


// media queries podle Material UI
// mobil:     do  599px
// tablet:    od  600px do 899px
// laptop:    od  900px do 1199px
// pc:        od 1200px do 1535px
// pc extra:  od 1536px
