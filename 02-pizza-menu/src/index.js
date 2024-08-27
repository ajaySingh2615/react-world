import React from "react";
import ReactDom from "react-dom/client";

function App() {
  return (
    <div>
      {" "}
      <h1>Hello, React</h1> <Pizza />
    </div>
  );
}

function Pizza() {
  return <h2>Pizza</h2>;
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
