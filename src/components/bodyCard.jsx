// Importo oggetto stile css
import css from "./bodyCard.module.css";

// Componente che ci ritorna una card jsx
function Card({ title, image, content, tags, published }) {
  if (!published) {
    return null; // Non ritorna nulla se `published` è false
  }

  // Array JSX dei tags
  const tagsJSX = tags.map((currElement, currIndex) => (
    <span key={currIndex} className={currElement}>
      {currElement}
    </span>
  ));

  console.log(tagsJSX);

  return (
    <div className={css.card}>
      <img src={image} alt="sekiro img" />
      <div>
        <h3>{title}</h3>
        {tagsJSX}
        <p>{content}</p>
        <button>Clicca Qui</button>
      </div>
    </div>
  );
}

export default Card;
