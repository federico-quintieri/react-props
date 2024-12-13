import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/bodyHeader";
import Card from "./components/bodyCard";
import Footer from "./components/bodyfooter";
import "./index.css";
// Importo array di oggetti
import posts from "./components/data";

// Faccio funzione creare un array di JSX richiamando la funzione Card
const arrPostsJSX = posts.map((curObject, currIndex) => {
  return (
    <Card
      key={currIndex}
      title={curObject.title}
      image={curObject.image}
      content={curObject.content}
      tags={curObject.tags}
      published={curObject.published}
    />
  );
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="centro">
      <Header />
      {arrPostsJSX}
    </div>
    <Footer />
  </StrictMode>
);
