// Importo oggetto stile css
import css from "./bodyCard.module.css";
import { useState } from "react";

// Componente che ci ritorna una card jsx
function Card({ title, image, content, tags, id }) {
  // if (!published) {
  //   return null; // Non ritorna nulla se `published` è false
  // }

  const [count, setCount] = useState(0);

  // Handle click callback
  function handleClick() {
    setCount(count + 1);
  }

  // Array JSX dei tags
  const tagsJSX = tags.map((currElement, currIndex) => (
    <span key={currIndex} className={currElement}>
      {currElement}
    </span>
  ));

  return (
    <div className={css.card}>
      <img src={image} alt="sekiro img" />
      <div>
        <h3>{title}</h3>
        {tagsJSX}
        <p>{content}</p>
        <button onClick={handleClick}>Hai cliccato {count} volte</button>
      </div>
    </div>
  );
}

export default Card;
